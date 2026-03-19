# Phase 1: Plan

> **Goal:** Define what you are solving, why it matters, and what success looks like — before writing a single line of code, prose, or design.

---

## What is the Plan phase?

Planning is not about producing a perfect roadmap. It is about achieving **clarity** — enough clarity to start building with confidence and to recognize when you are drifting.

A good plan answers these questions:

1. **What is the problem?** — What is actually broken, missing, or needed?
2. **Who is this for?** — Who experiences this problem? Who will use or read what you build?
3. **What is the goal?** — What does a successful outcome look like, specifically?
4. **What is the appetite?** — How much are you willing to invest in this? This is a conscious bet, not an estimate. Scope is variable within it.
5. **What are the constraints?** — Skills, dependencies, non-negotiables beyond the appetite.
6. **What is the success criteria?** — How will you know, objectively, that this is done?
7. **What is the core assumption?** — What must be true for this plan to work? If this turns out to be false, the plan fails.
8. **What are the rabbit holes?** — What unknowns could drag the build into territory you don't want to explore in this cycle?

---

## The Plan Brief

The output of the Plan phase is a **Plan Brief** — a short, written document that captures the answers above. It doesn't need to be long. It needs to be clear.

The Plan Brief is also the instruction set you hand to an AI agent when Build begins. Every ambiguity in it becomes a guess in the output. Write it so that someone (or something) who didn't write it could execute it and produce the same result.

Use this template:

```markdown
## Plan Brief

**Problem**
[One or two sentences. What is broken, missing, or needed? Be specific.]

**Audience**
[Who experiences this problem? Who will use, read, or interact with what you build?]

**Goal**
[One sentence. What does success look like? Start with a verb: "Build", "Write", "Fix", "Define".]

**Appetite**
[How much are you willing to invest in this cycle? This is a bet, not an estimate. Scope should fit inside it.
Example: "One week of focused work. If it can't be done in that, we scope it down — not extend the time."]

**Constraints**
- [Constraint 1 — e.g. no new dependencies]
- [Constraint 2 — e.g. must work on mobile]

**Success Criteria**
- [ ] [Measurable criterion 1]
- [ ] [Measurable criterion 2]
- [ ] [Measurable criterion 3]

**Core assumption**
[What must be true for this plan to work? If this turns out to be false, the plan fails.
Example: "Users are abandoning because of load time, not because of missing features."]

**Rabbit holes**
[What unknowns could drag the build into territory you don't want to explore in this cycle? Name them so they don't get explored.
Example: "Do not investigate why the legacy endpoint is slow — that is a separate system."]

**Out of scope**
[Explicitly list what you are NOT solving. This prevents scope creep.]
```

---

## Common mistakes in the Plan phase

| Mistake | Why it fails | Fix |
|---------|-------------|-----|
| Writing a goal that starts with "improve" or "better" | Not measurable, not falsifiable | Rewrite with a specific outcome: "Reduce load time from 4s to under 1s" |
| Skipping appetite | You'll keep expanding scope until you're exhausted or late | State how much you're willing to invest upfront. Then scope to fit it. |
| Skipping constraints | You'll discover them mid-build and lose momentum | List every known constraint upfront, even obvious ones |
| Conflating problem with solution | "We need a dashboard" is a solution, not a problem | Dig to the actual need: "Users can't track their usage at a glance" |
| Not defining out of scope | Every undefined boundary becomes a potential scope expansion | Be explicit about what this effort does NOT address |
| Skipping the audience | The solution will be shaped by who it is for — a beginner and an expert need different things | Name the specific person or group this is built for |
| Not naming the core assumption | The plan looks solid but rests on an unexamined belief that might be wrong | Write down what you're betting on. It makes the post-ship review honest. |
| Not naming rabbit holes | The build goes down a rabbit hole that could have been flagged upfront | Name the unknowns you're choosing not to explore in this cycle |

---

## When is the Plan phase done?

The Plan phase is done when you can hand your Plan Brief to someone else and they can understand:
- What you are solving
- Who it is for
- What you are building
- What done looks like

If they have to ask clarifying questions about any of these, the plan is not ready.

---

## Optional gates from Plan

Before moving to Build, consider using a gate if:

- The problem space is **unfamiliar** → use [Research](../gates/research.md) first
- The plan has **high cost to change** once started → use [Plan Validation](../gates/validate-plan.md)
- The plan involves **multiple people** → use Plan Validation to align before execution

---

## Using AI in the Plan phase

AI is a useful thinking partner in Plan — but the goal must remain yours. The Plan Brief is not just a planning document. In solveOS it is also the primary instruction set you hand to AI when Build begins. A vague brief produces vague output from a human and from an AI agent. A precise brief makes AI dramatically more effective.

**Where AI helps:**
- Challenging your problem statement ("Is this the real problem, or a symptom?")
- Helping you define the audience more precisely ("Is this for all developers, or a specific kind?")
- Surfacing constraints you might have missed
- Rewriting vague goals into specific, measurable ones
- Generating alternative framings of the same problem

**Where human judgment must lead:**
- Deciding what problem is worth solving
- Setting success criteria that reflect real value
- Determining what is out of scope
- Owning the plan brief as a commitment

**Prompt to try:**
```
Here is my plan brief: [paste brief]

Challenge my problem statement. Is this the real problem or a symptom of something deeper?
What constraints am I likely missing?
Are my success criteria measurable and falsifiable?
Would an AI agent be able to execute this brief without asking clarifying questions?
```

---

## Exit checklist

Before leaving the Plan phase, verify:

- [ ] Problem is stated in one or two sentences without a solution embedded in it
- [ ] Audience is named — a specific person or group, not "everyone"
- [ ] Goal starts with a specific verb and describes a concrete outcome
- [ ] Appetite is stated — a conscious investment decision, not a guess
- [ ] Constraints are listed beyond the appetite
- [ ] Success criteria are measurable and checkable
- [ ] Core assumption is named — what this plan is betting on
- [ ] Rabbit holes are named — unknowns explicitly set aside for this cycle
- [ ] Out of scope is explicitly defined
- [ ] Someone else (or an AI agent) could read this brief and execute it without asking questions

---

*Next: [Build →](./build.md)*
