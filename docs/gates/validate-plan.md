# Gate: Plan Validation

> **Position:** After Plan, iteratively before Build  
> **Purpose:** Verify the plan is sound — and refine it until it is  
> **When to use:** High-cost builds, multi-person work, unfamiliar problem spaces, any time the plan feels vague

---

## What is Plan Validation?

Plan Validation is not a one-way checkpoint. It is a **refining loop** between the Plan phase and execution.

```
Plan ←──── refine based on findings
  │                         ↑
  └──→ Plan Validation ─────┘
              │
              ↓ (when plan is validated)
           Build
```

You validate the plan, find gaps or ambiguities, go back to Plan to sharpen it, and validate again. Each iteration makes the plan more specific. **A more specific plan produces better outcomes** — fewer surprises during Build, less scope drift, clearer decisions under pressure.

The loop stops when the plan can answer all three validation questions without hesitation.

---

## Why this loop exists

Most plans feel complete when they're written. They aren't. The act of writing a plan makes the author feel clarity that often isn't there — because the author fills in the gaps automatically, from context they carry in their head that isn't in the document.

The Plan Validation loop exists to surface those gaps before they become expensive.

**A gap in the plan is cheap to fix at the Plan stage.** The same gap discovered mid-Build means rework. Discovered post-Ship, it means a failed cycle. The loop runs before execution precisely because that's when fixing something costs the least.

Every pass through the loop answers a version of the same question: *could someone with no prior context on this problem pick up this plan and produce the right result?* If the answer is no — or even "probably not" — the loop runs again.

---

## The three validation questions

1. **Is the problem correctly stated?** Is this the actual problem, or a symptom of something deeper? Is the audience named specifically?
2. **Is the plan feasible?** Can the goal be achieved within the stated constraints?
3. **Is the plan specific enough to build from?** Could someone who didn't write this plan execute it and produce the same result?

The third question is the one most plans fail. Vague plans produce inconsistent builds.

---

## How to run Plan Validation

### Solo
- Take a break from the plan (minimum a few hours — fresh eyes matter)
- Answer the three validation questions in writing, not just in your head
- For every "yes but..." answer, go back to Plan and sharpen that section
- Repeat until all three are a clean "yes"

### With another person
- Share the Plan Brief without explaining it verbally
- Ask them to answer:
  1. What problem is being solved, and for whom?
  2. What does done look like?
  3. What would they cut if scope had to be reduced by 50%?
- Where their answers differ from yours, the plan is ambiguous — go back and fix it
- This is not a review of their opinion. It is a test of plan clarity.

### With AI
```
Here is my Plan Brief: [paste brief]

Act as a critical reviewer. Answer these questions honestly:
1. Is the problem correctly stated, or is this a symptom of a deeper issue?
2. Is the audience specific enough to make design decisions from?
3. Is this plan feasible given the stated constraints?
4. Which success criteria are ambiguous or unmeasurable?
5. What would you cut if scope had to be reduced by 50%?
6. What is the single biggest risk to this plan that is not currently acknowledged?
```

---

## The refinement loop in practice

The loop typically runs 1–3 times:

**First pass** — catches obvious gaps: vague goals, missing constraints, audience not named, success criteria not measurable.

**Second pass** — catches structural issues: the goal is stated but not the right goal; the constraints conflict; the success criteria are measurable but don't actually test the goal.

**Third pass (if needed)** — catches alignment gaps in multi-person work: two people reading the same plan would make different decisions. Forces explicit choices.

After three passes, if the plan still has major gaps, consider whether the problem is understood well enough to plan at all — and use the [Research gate](./research.md) before continuing.

### How to know when the loop is done

The loop exits when three things are true:

1. **The plan is executable without clarifying questions.** If an AI or a person handed this brief could start building immediately — without asking "what do you mean by X?" — the plan is ready.
2. **The success criteria are falsifiable.** Each criterion has a clear pass/fail test. "It works well" is not falsifiable. "The page loads in under 2 seconds on a 4G connection" is.
3. **The audience is named, not implied.** Not "users" or "developers" — the specific type of person this is built for, with the specific context that makes this matter to them.

If any of these are missing, one more pass is warranted.

### What "refining" actually means

Going back to Plan is not failure. It is the loop working as intended.

When the validation pass returns you to Plan, you are not starting over — you are sharpening a document that already has most of its structure. Typical refinements:

- Replacing vague goals with specific, measurable ones
- Naming the audience more precisely
- Adding a constraint that was assumed but not written
- Splitting a success criterion that was doing too much work into two separate, cleaner ones
- Removing scope that the validation revealed as speculative

Each refinement is a decision made explicitly — in writing — rather than implicitly during Build. That is the point.

---

## Plan Validation output

```markdown
## Plan Validation Log

**Pass:** [1 / 2 / 3]
**Reviewed by:** [Name, "Self", or "AI-assisted"]
**Date:** [Date]

**Is the problem correctly stated?**
[Yes / No / Partial — with explanation]

**Is the audience specific?**
[Yes / No / Partial — with explanation]

**Is the plan feasible?**
[Yes / No / Partial — with explanation]

**Is the plan specific enough to build from?**
[Yes / No / Partial — with explanation]

**Gaps found:**
- [Gap 1]
- [Gap 2]

**Changes made to Plan Brief:**
- [Change 1]
- [Change 2]

**Decision:**
- [ ] Ready to Build
- [ ] Needs another validation pass
```

---

## Plan Validation checklist

- [ ] Plan Brief reviewed after a break, not immediately after writing it
- [ ] All three validation questions answered in writing
- [ ] Audience is specific — not "users" or "everyone"
- [ ] Success criteria are measurable and falsifiable
- [ ] Plan has been handed to someone else (or AI) to test clarity
- [ ] All gaps found have been addressed in the Plan Brief
- [ ] Plan Brief is more specific after this pass than before it
- [ ] Decision to proceed to Build (or run another pass) is explicit

---

*Back to [solveOS →](../README.md) | Next: [Build →](../phases/build.md)*

1. **Is the problem correctly stated?** Is this the actual problem, or a symptom of something deeper? Is the audience named specifically?
2. **Is the plan feasible?** Can the goal be achieved within the stated constraints?
3. **Is the plan specific enough to build from?** Could someone who didn't write this plan execute it and produce the same result?

The third question is the one most plans fail. Vague plans produce inconsistent builds.

---

## How to run Plan Validation

### Solo
- Take a break from the plan (minimum a few hours — fresh eyes matter)
- Answer the three validation questions in writing, not just in your head
- For every "yes but..." answer, go back to Plan and sharpen that section
- Repeat until all three are a clean "yes"

### With another person
- Share the Plan Brief without explaining it verbally
- Ask them to answer:
  1. What problem is being solved, and for whom?
  2. What does done look like?
  3. What would they cut if scope had to be reduced by 50%?
- Where their answers differ from yours, the plan is ambiguous — go back and fix it
- This is not a review of their opinion. It is a test of plan clarity.

### With AI
```
Here is my Plan Brief: [paste brief]

Act as a critical reviewer. Answer these questions honestly:
1. Is the problem correctly stated, or is this a symptom of a deeper issue?
2. Is the audience specific enough to make design decisions from?
3. Is this plan feasible given the stated constraints?
4. Which success criteria are ambiguous or unmeasurable?
5. What would you cut if scope had to be reduced by 50%?
6. What is the single biggest risk to this plan that is not currently acknowledged?
```

---

## The refinement loop in practice

The loop typically runs 1–3 times:

**First pass** — catches obvious gaps: vague goals, missing constraints, audience not named, success criteria not measurable.

**Second pass** — catches structural issues: the goal is stated but not the right goal; the constraints conflict; the success criteria are measurable but don't actually test the goal.

**Third pass (if needed)** — catches alignment gaps in multi-person work: two people reading the same plan would make different decisions. Forces explicit choices.

After three passes, if the plan still has major gaps, consider whether the problem is understood well enough to plan at all — and use the [Research gate](./research.md) before continuing.

---

## Plan Validation output

```markdown
## Plan Validation Log

**Pass:** [1 / 2 / 3]
**Reviewed by:** [Name, "Self", or "AI-assisted"]
**Date:** [Date]

**Is the problem correctly stated?**
[Yes / No / Partial — with explanation]

**Is the audience specific?**
[Yes / No / Partial — with explanation]

**Is the plan feasible?**
[Yes / No / Partial — with explanation]

**Is the plan specific enough to build from?**
[Yes / No / Partial — with explanation]

**Gaps found:**
- [Gap 1]
- [Gap 2]

**Changes made to Plan Brief:**
- [Change 1]
- [Change 2]

**Decision:**
- [ ] Ready to Build
- [ ] Needs another validation pass
```

---

## Plan Validation checklist

- [ ] Plan Brief reviewed after a break, not immediately after writing it
- [ ] All three validation questions answered in writing
- [ ] Audience is specific — not "users" or "everyone"
- [ ] Success criteria are measurable and falsifiable
- [ ] Plan has been handed to someone else (or AI) to test clarity
- [ ] All gaps found have been addressed in the Plan Brief
- [ ] Plan Brief is more specific after this pass than before it
- [ ] Decision to proceed to Build (or run another pass) is explicit

---

*Back to [solveOS →](../README.md) | Next: [Build →](../phases/build.md)*
