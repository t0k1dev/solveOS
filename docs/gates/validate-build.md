# Gate: Build Validation

> **Position:** During or after Build, before Ship  
> **Purpose:** Verify the output functions correctly and satisfies the success criteria before it goes live  
> **When to use:** Complex builds, high-stakes output, before any public-facing release

---

## What is Build Validation?

Build Validation is a **technical and functional check**. It answers: does what you built actually work, and does it match what the Plan Brief asked for?

This is distinct from [Plan Validation](./validate-plan.md), which checks whether the plan is sound. Build Validation checks whether the execution is sound.

It is also distinct from [Review](./review.md), which checks whether the result serves the original goal holistically and whether the audience would actually find it valuable. Build Validation is about correctness. Review is about judgment.

```
Build → Build Validation → [Review] → Ship
             │
             ↓ if issues found
           Back to Build
```

---

## The three build validation questions

1. **Does it work?** Does the output function as intended, without critical failures?
2. **Does it match the plan?** Does the output satisfy the success criteria from the Plan Brief?
3. **Is it stable enough to ship?** Are the remaining issues known, bounded, and acceptable?

---

## How to run Build Validation

### Functional check
Test or review the output against each success criterion from the Plan Brief:
- For each criterion: **pass**, **fail**, or **partial**
- A **fail** means the criterion is not met — fix before shipping or explicitly descope it
- A **partial** means the criterion is partially met — decide: fix, descope, or accept with known limitations
- Document any accepted limitations as known issues for the next cycle

### Scope check
Compare what was built to what was planned:
- Note anything added outside of original scope (may be fine, but should be explicit)
- Note anything cut from scope (must be documented for the next cycle, not silently dropped)

### Stability check
- Is the output stable enough to put in front of its intended audience?
- Are there known failure modes? Are they bounded and low-impact?
- Would a critical failure here be difficult to reverse? If yes, validate more rigorously.

---

## Build Validation output

```markdown
## Build Validation

**Reviewed by:** [Name, "Self", or "AI-assisted"]
**Date:** [Date]

**Functional check**
| Success Criterion | Status | Notes |
|------------------|--------|-------|
| [Criterion 1] | Pass / Fail / Partial | [How tested, what found] |
| [Criterion 2] | Pass / Fail / Partial | [How tested, what found] |
| [Criterion 3] | Pass / Fail / Partial | [How tested, what found] |

**Scope drift**
- Added (outside original scope): [List or "None"]
- Cut (from original scope, deferred): [List or "None"]

**Known issues**
- [Issue 1 — severity, decision: fix now / defer / accept]
- [Issue 2 — severity, decision: fix now / defer / accept]

**Decision:**
- [ ] Ready to proceed to Review
- [ ] Needs fixes — return to Build
- [ ] Needs re-plan — return to Plan
```

---

## Using AI in Build Validation

**Where AI helps:**
- Reviewing output against success criteria systematically
- Generating test cases for edge cases you might have missed
- Identifying scope drift by comparing output description to Plan Brief

**Where human judgment must lead:**
- Deciding whether a partial pass is acceptable
- Deciding which failures to fix now vs. defer
- Assessing whether the output is stable enough to proceed

**Prompt to try:**
```
Here is my Plan Brief: [paste brief]
Here is what I built: [describe or paste output]

For each success criterion in the brief:
- Does the output satisfy it? (pass / fail / partial)
- What evidence supports that assessment?

What is missing or inconsistent between the plan and the output?
What edge cases should I test before shipping?
```

---

## Build Validation checklist

- [ ] Each success criterion tested or reviewed against actual output
- [ ] All failures addressed or explicitly deferred with justification
- [ ] Scope drift (additions and cuts) documented
- [ ] No critical blockers to shipping remain
- [ ] Plan Brief updated to reflect final scope and known deferred items
- [ ] Decision to proceed to Review (or return to Build) is explicit

---

*Back to [solveOS →](../README.md) | Next: [Review →](./review.md)*
