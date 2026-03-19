# Gate: Review

> **Position:** Before Ship (pre-ship) and After Ship (post-ship)  
> **Purpose:** Before shipping — verify the result serves the original goal and is ready for the audience. After shipping — measure whether it actually worked and feed learnings into the next cycle.  
> **When to use:** Pre-ship review before any significant release. Post-ship review after every Ship.

---

## Two modes, one gate

Review appears at two points in the cycle:

```
Build → [Build Validation] → [Review (pre-ship)] → Ship → [Review (post-ship)] → Plan
```

- **Pre-ship Review** — a holistic judgment check before the result goes live. Different from Build Validation, which checks technical correctness. Pre-ship Review checks intent: *is this actually what we set out to build? Does it serve the audience?*
- **Post-ship Review** — outcome measurement after the result is live. Did it work in the real world? What does that tell us about the next cycle?

They serve different purposes and happen at different times, but they share the same underlying question: **is this doing what it was meant to do?**

---

## Pre-ship Review

> *"Does this serve the original goal and the audience? Are we ready to put this in front of real people?"*

Pre-ship Review is not a technical check. Build Validation handles that. Pre-ship Review is a judgment call: does the full result — as a whole — fulfill the intent stated in the Plan Brief?

This is the moment to ask the questions that checklists don't catch.

### What pre-ship Review checks

- Does the result actually solve the problem stated in the Plan Brief?
- Would the audience named in the brief find this useful, readable, or usable?
- Is there anything about this result that would embarrass you or mislead its audience?
- Are you shipping this because it's ready, or because you're tired of working on it?

The last question is the hardest and the most important.

### How to run a pre-ship Review

**Read the Plan Brief. Then experience the result as if you are the audience.**

If you built software: use it as the target user would use it, not as the developer who built it.
If you wrote an article: read it as someone who doesn't know the background.
If you built a design: evaluate it against the user's goal, not your aesthetic preferences.

Then answer:
- What is the single weakest thing about this result?
- Does that weakness block shipping, or is it acceptable for this cycle?
- Is there anything that, if you were the audience, would make you trust this less?

### Pre-ship Review output

```markdown
## Pre-ship Review

**Reviewed by:** [Name or "Self"]
**Date:** [Date]

**Does this solve the problem stated in the Plan Brief?**
[Yes / Partially / No — with explanation]

**Would the named audience find this useful/usable/readable?**
[Yes / Partially / No — with explanation]

**Weakest part of this result:**
[Be specific. One thing.]

**Decision on that weakness:**
- [ ] Fix before shipping
- [ ] Accept for this cycle — defer to next
- [ ] It's not actually a problem

**Ship readiness:**
- [ ] Ready to Ship
- [ ] Not ready — return to Build
```

---

## Post-ship Review

> *"Did it actually work? What does that teach the next cycle?"*

Shipping something live is not the same as knowing it worked. You need real-world signal — not the signal you predicted in the Plan Brief, but the signal the world returned.

Post-ship Review collects that signal, interprets it, and turns it into the starting point for the next Plan.

### The three post-ship Review questions

1. **Did it work?** How does the real-world outcome compare to the success criteria?
2. **Why did it go the way it did?** What decisions, assumptions, or events shaped the result?
3. **What should the next cycle do differently?** What did this cycle teach?

### When to run a post-ship Review

| What you shipped | When to review |
|-----------------|----------------|
| Software feature | After 1–2 weeks of real usage |
| Article or post | After 3–7 days live |
| Strategy or decision | After the first observable outcomes |
| Internal tool | After the first real use by its intended users |
| Quick experiment | Within 24–48 hours |

Don't review immediately after shipping — you need real signal, not initial noise. Don't wait indefinitely — at some point signal plateaus and the next cycle is already waiting.

### How to run a post-ship Review

**1. Measure against the success criteria**

For each success criterion in the Plan Brief, answer: was it met, and how do you know?

Evidence must come from outside yourself: usage data, feedback from real users, observable behavior change, outcomes that happened or didn't. If a criterion cannot be measured with real evidence, note that — it means the criterion was too vague or the measurement method wasn't set up.

**2. Reflect on the cycle**

Look at the full cycle — Plan, Build, and Ship — and ask:
- What worked as expected?
- What didn't work as expected?
- What single decision, made differently, would have changed the outcome most?
- Was the Plan Brief accurate by the time you shipped? What changed?

**3. Feed forward**

Identify inputs for the next cycle:
- What new problem or opportunity did this cycle reveal?
- What was deferred to "out of scope" that should now be addressed?
- What assumption turned out to be wrong that should inform the next Plan?

### Post-ship Review output

```markdown
## Post-ship Review

**What was shipped:** [Brief description]
**Shipped on:** [Date]
**Reviewed on:** [Date]

**Measurement**
| Success Criterion | Result | Evidence |
|------------------|--------|---------|
| [Criterion 1] | Met / Partial / Not met | [How you know] |
| [Criterion 2] | Met / Partial / Not met | [How you know] |
| [Criterion 3] | Met / Partial / Not met | [How you know] |

**Overall: did it work?**
[One or two sentences. Was the goal achieved? What does the real-world outcome say?]

**What worked**
- [Observation 1]
- [Observation 2]

**What didn't work**
- [Observation 1]
- [Observation 2]

**The decision that mattered most**
[What single decision during this cycle had the biggest impact — good or bad?]

**Feed forward: inputs for the next cycle**
- [New problem or opportunity]
- [Deferred scope item to address]
- [Wrong assumption to correct]
```

---

## What if the result can't be measured yet?

Some results take time to surface. Set a **review date** at the time of shipping, note what signal you're waiting for, and run a **partial Review** now (reflect on the cycle) with a **full Review** later when the signal is available.

The reflection and measurement parts are independent — don't skip reflection because measurement isn't ready.

---

## Using AI in the Review gate

**Where AI helps:**
- Summarizing feedback or data into patterns
- Challenging your interpretation ("Is this signal or noise?")
- Identifying what the next cycle's Plan Brief should address
- Spotting assumptions that recurred across the cycle

**Where human judgment must lead:**
- Deciding whether the outcome was actually good enough
- Interpreting ambiguous signal
- Choosing what to focus on in the next cycle

**Prompt to try (post-ship):**
```
Here is my Plan Brief: [paste brief]
Here is what I shipped: [describe output]
Here is what happened after shipping: [describe outcomes, feedback, metrics]

Did the outcome match the goal and the audience's needs?
What does the gap between expected and actual tell me?
What should I carry into the next cycle's Plan?
```

---

## Review gate checklist

**Pre-ship:**
- [ ] Result experienced from the audience's perspective, not the builder's
- [ ] Weakest part identified and a decision made on it
- [ ] Shipping for the right reason — it's ready, not because you're tired of it
- [ ] Ship readiness decision is explicit

**Post-ship:**
- [ ] Waited for real-world signal before reviewing
- [ ] Each success criterion assessed against actual evidence
- [ ] Overall outcome written in one or two sentences
- [ ] What worked and what didn't documented separately
- [ ] Most impactful decision of the cycle identified
- [ ] Feed-forward inputs for the next Plan written down

---

## The loop closes here

```
Plan ←──── [Review (post-ship)] ←── Ship ←── [Review (pre-ship)] ←── [Build Validation] ←── Build
  │
  └──→ [Plan Validation] ──→ Plan (refined) ──→ Build ...
```

The Review gate — in both modes — is what makes solveOS a cycle, not a line. Every cycle starts smarter than the last.

---

*Back to [solveOS →](../README.md) | Start the next cycle: [Plan →](../phases/plan.md)*
