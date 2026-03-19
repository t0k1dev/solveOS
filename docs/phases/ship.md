# Phase 3: Ship

> **Goal:** Put the result in the world — live, real, in front of people or systems. This is the definition of done.

---

## What is the Ship phase?

Ship is not polish. Ship is not perfection. Ship is the act of making something **real** — taking it out of your local environment, your draft folder, your private repository, and placing it where it will be used, read, or experienced by others.

Shipping is how you validate that what you built actually works in the real world. Until something is shipped, you are operating on assumptions.

The Ship phase is done when something is **live and accessible** to its intended audience.

---

## What "shipped" means across different contexts

solveOS is problem-agnostic, so "ship" looks different depending on what you're building:

| Context | Shipped means |
|---------|--------------|
| Software feature | Deployed to production, accessible to real users |
| Article or post | Published and publicly accessible |
| Design | Shared with stakeholders or handed off to development |
| Strategy or decision | Communicated and acted on by the people responsible |
| Internal tool | Running and in use by the people it was built for |
| API or service | Live and returning real responses |

The common thread: **someone or something that isn't you is now interacting with it.**

---

## How to run the Ship phase

### 1. Do a final brief check
Before shipping, re-read your Plan Brief one final time. Specifically check:
- Do the success criteria match what you've built?
- Is what you're about to ship within the defined scope?
- Is the Plan Brief up to date?

This is not a gate — it is a 5-minute sanity check. It prevents shipping the wrong version of the right thing.

### 2. Ship the minimum that meets the criteria
Ship the version that satisfies the success criteria from the plan — not the version that satisfies everything you thought of during Build. Future improvements belong to the next cycle.

### 3. Make it real
Execute the actual shipping action:
- Deploy, publish, send, release, present, hand off.
- Do not stop at "ready to ship." Ship.

### 4. Confirm it is live
Verify the output is actually accessible. Check it from the perspective of the intended audience. This step is skipped more often than it should be.

### 5. Capture what you learned
After shipping, take 10 minutes to note:
- What worked as expected?
- What didn't?
- What would you do differently in the next cycle?

This is not a formal retrospective. It is a brief, informal capture that feeds the next cycle's Plan phase.

---

## The most common shipping failure

**Shipping the wrong thing.** This happens when context was lost between Plan and Build — when what got built no longer serves the original goal. The final brief check exists to catch this.

**Not shipping at all.** The second most common failure. The work is "done" but lives in draft, in staging, in a private repo. A result that isn't shipped is a result that produced no value. Ship the imperfect thing.

---

## Shipping is not the end

Shipping ends the current cycle — it does not end the work. Use the [Review gate](../gates/review.md) to measure whether what you shipped actually worked, reflect on the cycle, and feed what you learned into the next Plan.

After reviewing, one of three things will be true:

1. **It worked** — the goal was met, the success criteria are satisfied. The next problem can begin.
2. **It partially worked** — some criteria are met, some aren't. The unmet criteria and what you learned become the Plan for the next cycle.
3. **It didn't work** — the goal was wrong, the approach was wrong, or the execution was wrong. This is real signal. Use it. Start a new cycle with what you learned.

In all three cases, the next step is a new **Plan** phase — informed by the Review.

```
Plan → Build → Ship → [Review] → Plan → ...
```

---

## Using AI in the Ship phase

The Ship phase is where human judgment is most critical. AI cannot make the call of "is this ready."

**Where AI helps:**
- Writing release notes, changelogs, or shipping announcements
- Generating the checklist for a specific type of deployment
- Reviewing the output one last time before it goes live
- Drafting the "what we learned" capture after shipping

**Where human judgment must lead:**
- Deciding whether this is actually ready to ship
- Deciding who needs to know and how
- Deciding what the next cycle should focus on

**Prompt to try:**
```
Here is my Plan Brief: [paste brief]
Here is what I'm about to ship: [describe output]

Does this satisfy the success criteria?
Is there anything that would block me from shipping this today?
What should I capture as a learning before I close this cycle?
```

---

## Exit checklist

Before closing the Ship phase, verify:

- [ ] The output is live and accessible to its intended audience
- [ ] You have personally confirmed it is accessible (not just deployed)
- [ ] Success criteria from the Plan Brief are met
- [ ] Learnings from this cycle are captured (even briefly)
- [ ] Next steps or next cycle inputs are noted

---

## The cycle is complete

```
Plan → Build → Ship ✓
```

If you captured learnings and identified next steps, you have everything you need to start the next cycle stronger.

---

*Previous: [← Build](./build.md) | Next: [Review →](../gates/review.md) | Back to [solveOS →](../README.md)*
