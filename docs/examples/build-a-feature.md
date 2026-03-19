# Example: Building a Software Feature

**Scenario:** Users are complaining that the analytics dashboard in your web app takes 8–12 seconds to load. A few have churned. Your PM has escalated it. You need to fix it.

**Cycle:** Research → Plan → Plan Validation (2 passes) → Build → Build Validation → Review (pre-ship) → Ship → Review (post-ship)

---

> **How to read this example**
>
> Each step shows what was given to an agent as an instruction, what the agent returned as output, and what the human decided based on that output. The agent can be you, a collaborator, or an AI — the structure is the same either way. Gates are where the human reads the output and decides whether to proceed. That decision is never skipped.

---

## Step 1: Research gate

**Instruction given to agent**
> What is actually causing the analytics dashboard to load in 8–12 seconds? What is the scope of the problem? Spend no more than 30 minutes.

**Output from agent**

- The dashboard makes 4 separate database queries on load, each running a full table scan over an `events` table (>2M rows for some accounts)
- No indexes on `account_id` + `created_at` columns — every query scans the full table
- Queries are sequential, not concurrent — each waits for the previous to complete
- The 8–12s range correlates to account size: small accounts (< 10k events) load in ~1s; large accounts (> 500k events) load in 10–14s
- One query fetches a `raw_payload` column that is never displayed in the UI — leftover from an old feature
- Root cause: missing indexes + sequential queries + an unused column being fetched
- Adding indexes alone would likely cut load time 60–70% for large accounts

**Human decision**

The cause is understood. The fix is backend-only — no design or frontend work needed. Enough to write a Plan Brief. Proceed to Plan.

---

## Step 2: Plan phase

**Instruction given to agent**
> Using the research findings, write a Plan Brief for fixing the analytics dashboard load time.

**Reference files**
- Research findings from Step 1

**Output from agent**

---

**Plan Brief**

**Problem**
The analytics dashboard loads in 8–12 seconds for accounts with large event volumes (> 100k events), causing user frustration and churn. Root cause: missing database indexes, sequential queries, and an unused column being fetched on every load.

**Audience**
Internal engineering team (implementing the fix) and the ~200 accounts with > 100k events experiencing the slowness.

**Goal**
Fix the analytics dashboard load time to under 2 seconds for all account sizes.

**Appetite**
One engineer, one week. If the fix can't be completed in that, scope it down — not extend the time.

**Constraints**
- Backend-only fix — no design or frontend changes in this cycle
- Must not break existing dashboard functionality
- Needs a database migration (indexes) — must be safe to run on production without downtime
- Staged rollout: deploy to 10% of accounts first, monitor for 24 hours before full rollout

**Success criteria**
- [ ] Dashboard loads in under 2 seconds for accounts with > 100k events
- [ ] Dashboard loads in under 1 second for accounts with < 10k events
- [ ] All four dashboard queries are covered by indexes
- [ ] The unused `raw_payload` column is removed from the query
- [ ] No existing dashboard tests break

**Core assumption**
The load time problem is caused by missing indexes and sequential queries — not by a fundamental architecture issue that would require a larger rewrite.

**Rabbit holes**
Do not investigate why the legacy endpoint is slow — that is a separate system. Do not explore a caching layer — out of scope for this cycle.

**Out of scope**
- Caching layer (may be a future improvement)
- Frontend loading states or skeleton screens
- Dashboard redesign
- Performance improvements to any other part of the app

---

**Human decision**

The brief is solid but "under 2 seconds" is vague — 2 seconds measured how? Under what load? The success criteria need percentiles. Also: there is no rollback plan mentioned for the migration. Take this to Plan Validation before building.

---

## Step 3: Plan Validation gate — Pass 1

**Instruction given to agent**
> Review this Plan Brief. Is the problem correctly stated? Is the plan feasible? Is it specific enough to build from without asking clarifying questions?

**Reference files**
- Plan Brief from Step 2

**Output from agent**

- **Is the problem correctly stated?** Partially. The problem says "under 2 seconds" but that's vague — 2 seconds for who? On what hardware? Under what load? The success criteria need a percentile (e.g., P95 load time).
- **Is the plan feasible?** Yes, given the research findings. The changes are well-scoped and the cause is understood.
- **Is it specific enough to build from?** No. "Under 2 seconds" without a percentile is not measurable in a way that accounts for outliers. A single slow request could fail the criterion. Also: the migration rollback plan is not stated — it should be explicit.

**Gaps identified:**
- Success criteria use absolute times without percentiles — not reliably measurable
- No rollback plan for the database migration
- No baseline stated — what is being compared against?

**Human decision**

The gaps are real and fixable. Update the Plan Brief and run a second pass — the migration involves production and the cost of a wrong assumption here is high.

**Changes made to Plan Brief:**
- Success criteria updated to P95: *"Dashboard loads in under 2 seconds (P95) for accounts with > 100k events, measured in production"*
- Added: *"Migration includes a rollback script, tested in staging before production"*
- Added baseline: current P95 is 9.2s for large accounts, 1.0s for small accounts

---

## Step 4: Plan Validation gate — Pass 2

**Instruction given to agent**
> Read the updated Plan Brief. Tell me: what is being built, what does done look like, and what would you do first?

**Reference files**
- Updated Plan Brief from Step 3

**Output from agent**

- "You're adding indexes to the events table on `account_id` and `created_at`, running the dashboard queries concurrently, and removing `raw_payload` from the select. Done means P95 load time under 2s for large accounts, confirmed in production."
- "I'd add the indexes first, measure the improvement, then tackle the concurrent queries."

**Human decision**

The agent's understanding matches exactly. Two people (or agents) reading this brief would make the same first decision. Ready to Build.

---

## Step 5: Build phase

**Instruction given to agent**
> Execute the Plan Brief. Build the fix in this order: (1) add indexes, (2) remove `raw_payload`, (3) refactor queries to run concurrently, (4) measure P95 in staging, (5) write and test rollback script.

**Reference files**
- Updated Plan Brief from Step 4
- Current dashboard query file (`analytics/queries.js`)
- Database schema (`db/schema.sql`)
- Existing test suite (`tests/dashboard.test.js`)
- Staging environment credentials

**Output from agent**

1. Migration added: `events(account_id, created_at)` index. Tested in staging with `EXPLAIN ANALYZE` — index scan confirmed. Staging load time dropped from ~9s to ~3.5s for large accounts.
2. `raw_payload` removed from select — one-line change. Dropped load time another ~0.4s.
3. Dashboard queries refactored to run concurrently using `Promise.all`. Staging load time: ~1.1s for large accounts, ~0.4s for small accounts.
4. Staging P95 measurements: 1.1s for > 100k events, 0.4s for < 10k events. Both under target. Baseline was 9.2s and 1.0s respectively.
5. Rollback script written and tested — removes the indexes safely without data loss.

**Blocker surfaced during Build:**
One of the four queries had a write dependency on the result of another — they were not truly independent. Concurrent execution caused a race condition in test. Restructure needed: run two queries concurrently, then a third sequentially, then the fourth.

**Human decision — mid-build check**

The race condition is real. The restructure is the right call — do not route around it. The result is still well within target (1.1s vs. the 2s goal). Update the Plan Brief to document this as a known limitation, not a failure.

**Plan Brief updated:**
- Added to Out of scope: *"Query 2 and Query 3 have a sequential dependency — cannot be fully parallelized. Documented for future optimization."*

Proceed to Build Validation.

---

## Step 6: Build Validation gate

**Instruction given to agent**
> Check the output against every success criterion in the Plan Brief. Flag any that are not met.

**Reference files**
- Updated Plan Brief
- Staging P95 measurements
- `EXPLAIN ANALYZE` output for all four queries
- Test suite results

**Output from agent**

| Success criterion | Status | Note |
|---|---|---|
| P95 < 2s for accounts > 100k events | Pass | Staging P95: 1.1s. Tested against 5 large accounts. |
| P95 < 1s for accounts < 10k events | Pass | Staging P95: 0.4s. |
| All four queries covered by indexes | Pass | Confirmed via `EXPLAIN ANALYZE` — all use index scan |
| `raw_payload` removed from query | Pass | Verified in code review |
| No existing dashboard tests break | Pass | Full test suite green |

No criteria failed. Known limitation: queries 2 and 3 cannot be fully parallelized — documented in Plan Brief. Severity: low (target is met without it).

**Human decision**

All criteria met. No regressions. Known limitation is documented and deferred. Proceed to pre-ship Review.

---

## Step 7: Review gate — pre-ship

**Instruction given to agent**
> Does this result solve the problem stated in the Plan Brief? Would the affected users notice the improvement? What is the weakest part of this result?

**Reference files**
- Plan Brief
- Build Validation results

**Output from agent**

- The problem was 8–12s load time causing churn. The fix brings it to 1.1s P95 for the most affected accounts — an 8x improvement. The problem is solved.
- Users experiencing 10s loads will experience 1s loads after rollout. The improvement is large enough to notice without prompting.
- Weakest part: the staged rollout means large-account users will get the fix at different times. Someone who churned last week won't be automatically retained.

**Human decision**

The weakness is real but it is not a problem with the fix — it is a property of the staged rollout, which exists to reduce production risk. Accept. Ready to Ship.

---

## Step 8: Ship phase

**Instruction given to agent**
> Deploy the migration to 10% of production accounts. Monitor error rates, query durations, and P95 load times for 24 hours. Report back.

**Reference files**
- Rollback script
- Deployment runbook
- Monitoring dashboard

**Output from agent**

- Migration deployed to 10% of production accounts
- Monitored for 24 hours: no errors, no regressions
- Production P95 for large accounts: 0.9s (slightly better than staging)

**Human decision**

Signal is clear. No regressions. Full rollout approved.

Full rollout deployed. Confirmed live: opened dashboard as a large-account user — loads in under 1 second. Internal update posted: *"Analytics dashboard performance fix shipped. P95 load time down from 9.2s to 0.9s for large accounts."*

---

## Step 9: Review gate — post-ship

**Instruction given to agent**
> 10 days after full rollout: measure actual production outcomes against every success criterion. What worked, what didn't, and what should feed into the next cycle?

**Reference files**
- Production monitoring data (10-day window)
- Plan Brief
- Notes from Build (blocker found, query dependency)

**Output from agent**

**Results:**

| Success criterion | Result | Evidence |
|---|---|---|
| P95 < 2s for accounts > 100k events | Met | Production P95: 0.9s (10-day average) |
| P95 < 1s for accounts < 10k events | Met | Production P95: 0.35s (10-day average) |
| All four queries covered by indexes | Met | Confirmed in production query explain plans |
| `raw_payload` removed from query | Met | No `raw_payload` selects in production query logs |
| No existing dashboard tests break | Met | No new test failures or production errors in 10 days |

**What worked:** Running Research before Plan redirected the entire approach — the obvious alternative (a caching layer) would have been more complex and wouldn't have addressed the root cause (missing indexes). The two-pass Plan Validation loop caught the "under 2 seconds" vagueness before it became ambiguous during Build.

**What didn't work:** The query dependency (queries 2 and 3) was a surprise — Research didn't surface it. A deeper code review before planning would have caught it.

**Feed forward:**
- Queries 2 and 3 have a sequential dependency worth a dedicated investigation cycle
- The 24-hour monitoring window felt long — signal was clear within 2 hours. Could reduce to 4–6 hours for non-data-destructive migrations
- Two churned accounts reactivated after the fix, cited dashboard speed in support threads

**Human decision**

Results are better than the target. The cycle is complete. Feed the query dependency and monitoring window findings into the next Plan.

---

## What this example demonstrates

| Principle | Where it showed up |
|-----------|--------------------|
| Clarity before action | Research identified root cause before planning. Plan Validation made success criteria measurable (P95, not "under 2 seconds"). |
| Build to learn | The sequential dependency between queries 2 and 3 only surfaced during Build — handled and documented without derailing the cycle. |
| Reality is the only validator | Staging showed 1.1s. Production showed 0.9s. The plan predicted improvement; only shipping produced the real number. |
| Gates reduce cost, not momentum | Two passes of Plan Validation added ~2 hours. They prevented building against a vague target and ensured the migration had a rollback path. |
| The brief is your compass | When the query dependency was found, the Plan Brief was updated to document it — not silently accepted. |
| AI executes. Human decides. | At every gate, the human read the output and made the call — proceed, iterate, or cut. The race condition blocker was surfaced and decided on mid-build, not worked around. |

---

## The full cycle at a glance

```
[Research] → Plan → [Plan Validation ×2] → Build → [Build Validation] → [Review pre-ship] → Ship → [Review post-ship]
```

Each arrow is a human decision: read the output, judge it, decide what comes next.

---

*Back to [solveOS →](../README.md)*
