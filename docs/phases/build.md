# Phase 2: Build

> **Goal:** Execute against the plan. Build the thing. Stay anchored to the Plan Brief throughout.

---

## What is the Build phase?

Build is where the work happens. Code gets written. Designs get made. Articles get drafted. Systems get configured.

But Build is not just execution — it is **structured discovery**. You will learn things during the build that planning couldn't reveal. The goal is not to follow the plan blindly; it is to stay anchored to the **goal and success criteria** from the plan, while adapting tactically as you learn.

The Build phase ends when you have something that meets the success criteria from your Plan Brief — not when the work feels complete, not when it feels perfect.

---

## How to run the Build phase

### 1. Start from the success criteria and rabbit holes
Before writing a line of code or a single sentence, re-read your Plan Brief. Specifically, re-read the **success criteria**, **out of scope**, and **rabbit holes** sections.

These are your anchors and your fences. If a decision during Build doesn't serve the success criteria, it is likely scope creep. If it's heading toward a rabbit hole you named in the brief, stop.

### 2. Break it into units of work
Translate the goal into the smallest possible units of work that can be completed and verified independently. This creates momentum and makes it easier to spot when you are drifting.

A good unit of work is:
- Completable in one focused session
- Independently verifiable ("is this done?")
- Traceable back to the Plan Brief

### 3. Build, then verify, then move
After each unit of work, ask: **does this still connect to the goal?** If yes, continue. If no, stop and decide: either the goal evolved (update the Plan Brief) or you drifted (course correct).

### 4. Flag blockers early
When you hit a blocker — a missing constraint, an unknown, a dependency that doesn't behave as expected — surface it immediately. Don't route around it silently. Either resolve it, update the plan, or use a [Build Validation](../gates/validate-build.md) gate.

---

## What to expect during Build

When you start building, you have **imagined tasks** — the work you think needs to happen based on the plan. As you build, you discover **real tasks** — the actual work that surfaces once you're inside the problem. This is normal. Discovered tasks are not failures; they are the process working. The plan is a starting point, not a complete picture.

The goal is to handle discovered tasks without losing direction:
- If a discovered task serves the success criteria → do it
- If it doesn't → note it as a future improvement and move on
- If it changes the goal or constraints → update the Plan Brief before continuing

## Signs the Build is going wrong

| Signal | What it means | What to do |
|--------|---------------|------------|
| You've lost track of why you're building a specific thing | Direction drift | Re-read the Plan Brief. If the goal changed, update it. |
| The scope has expanded significantly since you started | Scope creep | Return to "out of scope" in the Plan Brief. Cut or defer. |
| You are exploring a rabbit hole named in the Plan Brief | You went somewhere you told yourself not to go | Stop. Flag it. Return to the plan. |
| You are optimizing something that wasn't in the success criteria | Perfectionism | Note it as a future improvement and move on. |
| You've been building for a long time without something verifiable | Unit of work is too large | Break it down further. |

---

## Updating the Plan Brief from Build

It is normal and expected that the Build phase reveals gaps or errors in the plan. When this happens:

1. **Stop** — don't just silently change course
2. **Assess** — is this a tactical adjustment or a strategic shift?
3. **Update the Plan Brief** — if the goal, constraints, or success criteria changed, write it down
4. **Continue** — with the updated brief as your new anchor

Never let the plan become a fiction you are quietly ignoring.

---

## Optional gates from Build

Use a gate if:

- The build is producing something **you haven't built before** → use [Research](../gates/research.md)
- You need to verify the output is matching the goal before investing more → use [Build Validation](../gates/validate-build.md)
- The output is getting complex and you need a second opinion → use Build Validation

---

## Using AI in the Build phase

In solveOS, Build is where AI does the most work. AI can participate as an assistant — accelerating execution while a human steers — or as an autonomous agent given a Plan Brief and reference files and expected to produce the output.

### Reference files

When AI is building, it needs two inputs:

1. **The Plan Brief** — the goal, audience, constraints, and success criteria
2. **Reference files** — files that give AI the information it needs to build correctly

Reference files are not the problem description. They are the working environment: existing code, documentation, API specs, style guides, design files — anything that lets AI understand the space it is operating in. The Plan Brief says what to build. Reference files say what to build within.

The more relevant reference files you provide, the less AI has to guess. Guessing produces output that technically satisfies the brief but doesn't fit the environment.

**Where AI helps:**
- Writing, generating, and iterating on artifacts quickly
- Catching errors or edge cases you missed
- Explaining things you don't understand in the build
- Proposing approaches to a problem you're stuck on

**Where human judgment must lead:**
- Deciding which approach to take when there are trade-offs
- Recognizing when the output doesn't match the goal
- Deciding when to cut scope and ship vs. keep building
- Updating the Plan Brief when the build reveals new information

### AI-specific failure modes

When AI is the executor, the failures that surface are different from the failures of a human builder. These are the most common:

| Failure | What it looks like | What to do |
|---|---|---|
| **Instruction drift** | AI follows the letter of the brief but misses the intent — technically correct, wrong result | Re-read the brief alongside the output. If the intent was ambiguous, rewrite that section of the brief and re-run. |
| **Silent assumptions** | The brief was ambiguous on a decision point. AI made a choice without flagging it. | Review the output for implicit choices not stated in the brief. If found, either accept them explicitly or correct them and update the brief. |
| **Scope expansion** | AI added things not in the brief because they seemed useful or complete | Compare output to the success criteria only. Cut anything not traceable to the brief. This is a briefing problem — the brief should have been more explicit about out of scope. |
| **Reference file blindness** | AI ignored the reference files and produced output based on its training data instead of the actual environment | Check whether the output fits the environment (naming conventions, patterns, style). If not, re-run with the reference files highlighted more explicitly in the instruction. |
| **Confidence without verification** | AI produced plausible-sounding output that contains factual errors or fabricated specifics | Never accept factual claims in AI output without independent verification. Treat AI output the same way you'd treat a first draft from a smart person who hasn't checked their sources. |

The root cause of most of these failures is the same: **a brief that left room for interpretation**. The more precise the Plan Brief, the fewer silent assumptions AI makes. When output surprises you, the first question is not "what did AI do wrong?" — it is "what did I leave unclear in the brief?"

**Prompt to try (with reference files attached):**
```
Here is my Plan Brief: [paste brief]
Here is what I've built so far: [describe or paste output]

Does what I've built so far serve the goal and success criteria?
What am I missing?
What should I cut to reach a shippable version faster?
```

---

## Exit checklist

Before leaving the Build phase, verify:

- [ ] All success criteria from the Plan Brief are met
- [ ] Nothing in scope was skipped without a deliberate decision
- [ ] The Plan Brief is up to date (reflects any changes made during Build)
- [ ] The output can be put in front of a real person or system
- [ ] Out of scope items are noted for future work, not silently dropped

---

*Previous: [← Plan](./plan.md) | Next: [Ship →](./ship.md)*
