# solveOS

A mental framework for solving anything.

---

## What is solveOS?

solveOS is a problem-solving framework built for builders and makers. It gives you a repeatable structure to go from a problem to a shipped solution — whether you're building a product, writing an article, designing a feature, or making a strategic decision.

It works with or without AI. It works alone or in teams. It works for any type of problem.

The core loop is simple:

```
   ┌─────────────────────────────────────────────┐
   ↓                                             │
 Plan → Build → Ship → [Review] ────────────────┘
```

Between phases, you can insert optional **gates** — lightweight checkpoints that reduce risk and sharpen focus. But the spine is always the same: Plan, Build, Ship, and Review back into the next Plan.

---

## Why solveOS?

Most people fail at solving things for one of three reasons:

1. **They skip planning** — they jump into execution without a clear goal or constraints, and end up building the wrong thing.
2. **They over-plan** — they get stuck refining the plan and never ship anything real.
3. **They lose context** — the goal defined at the start gets distorted by the time execution ends.

A fourth failure is subtler: **they never measure**. They ship something, move on, and never find out if it actually worked. The same mistakes repeat in the next cycle.

solveOS is designed to prevent all four failure modes through structure, optional validation, a bias toward shipping, and a Review gate that closes the loop.

---

## The Three Phases

| Phase | Purpose | Output |
|-------|---------|--------|
| [Plan](./phases/plan.md) | Define the problem, audience, goal, constraints, and success criteria | A clear brief |
| [Build](./phases/build.md) | Execute against the plan | A working result |
| [Ship](./phases/ship.md) | Put it in the world, in front of real people or systems | Something live |

Phases are **linear by default**. You complete one before moving to the next. This is intentional — it forces clarity at each stage.

After shipping, the [Review](./gates/review.md) gate closes the loop: measure what happened, reflect on the cycle, and feed what you learned into the next Plan.

---

## Optional Gates

Gates are lightweight checkpoints that live **between** phases. They are not mandatory, but skipping them has a cost. Use them when the stakes are high, the problem is ambiguous, or the build is complex.

| Gate | Position | Purpose |
|------|----------|---------|
| [Research](./gates/research.md) | Before or during Plan | Understand the problem space before committing to a direction |
| [Plan Validation](./gates/validate-plan.md) | After Plan, before Build | Verify the plan is sound before investing in execution |
| [Build Validation](./gates/validate-build.md) | During or after Build, before Ship | Verify the output matches the goal |
| [Review](./gates/review.md) | After Ship, before the next Plan | Measure whether it worked and feed learnings into the next cycle |

---

## The Five Principles

These principles govern how solveOS should be applied. They are not rules — they are lenses. When you feel stuck or off-track, return to them.

### 1. Clarity before action
Before execution begins, you must be able to state the problem, who it is for, and what success looks like — in writing. Not perfect clarity. Enough clarity to make the first decision without guessing. The Plan phase creates this foundation. Without it, every subsequent decision is unanchored.

### 2. Build to learn
Planning can only take you so far. The act of building reveals constraints, edge cases, and insights that no amount of thinking can surface. Don't treat the build phase as pure execution — treat it as structured discovery.

### 3. Reality is the only validator
No plan, build, or opinion tells you if something works. Only putting it in the world does. Shipping is not the end of the process — it is the beginning of knowing. An imperfect thing that is live produces more real information than a perfect thing that isn't.

### 4. Gates reduce cost, not momentum
Optional gates exist to catch expensive mistakes early, not to create bureaucracy. If a gate is slowing you down more than it's protecting you, skip it. Gates should serve the work, not the other way around.

### 5. The brief is your compass
The clarity established in Plan doesn't maintain itself. Every decision made during Build is an opportunity to drift from the original goal. The Plan Brief is not a starting artifact — it is an active reference. When what you're building no longer matches the brief, you either update the brief in writing or course correct. Silent drift is how projects fail.

---

## solveOS and AI

solveOS is the first problem-solving framework designed around AI as a primary executor — not a tool, not an assistant, but a participant that can own the Build phase from a brief.

Most frameworks were designed before AI could do meaningful work. They treat AI as an accelerator at best. solveOS is built from the ground up assuming AI can be the builder — and structures the collaboration to make that safe and effective.

**AI can take any role in solveOS.** It can be a thinking partner in Plan, an executor in Build, or a fully autonomous agent running an entire phase from a brief. The framework does not prescribe who (or what) does the work — it prescribes the structure that makes the work sound.

### What AI does. What the human decides.

The division is not about capability — it is about accountability. **AI executes. The human decides.**

Every phase and gate in solveOS produces an output. The human reads that output and makes a decision: accept it, reject it, revise it, or iterate. This decision loop is not optional — it is the mechanism that keeps the work aligned with intent. AI does not decide what gets shipped. AI does not decide when the plan is correct. AI does not decide what success means. Those calls belong to the human at every step.

| Phase / Gate | AI can... | Human must... |
|---|---|---|
| Plan | Challenge the problem statement, sharpen constraints, rewrite vague goals | Own the goal, decide what success means, commit to the plan |
| Research | Surface findings, synthesize information, identify gaps | Decide what question to answer, judge whether findings are sufficient |
| Build | Produce the output — code, text, designs — given the Plan Brief | Decide which approach to take, recognize when output doesn't match the goal, update the brief |
| Validate | Check output against criteria, flag gaps | Decide whether to ship, iterate, or cut scope |
| Ship | None | Decide that this goes in front of real people — and that it is the right thing to ship |
| Review | Measure, summarize, surface patterns | Decide what to learn and what to change in the next cycle |

At any gate, if the output is not right, **iterate**. Gates are checkpoints where the human reads the output and decides whether to proceed or go back. That is their only job. Skipping the decision is the most common way a cycle fails — not because AI produced bad output, but because no one checked.

### Reference files

When you bring AI into Build — as an assistant or as an agent — you give it two things:

1. **The Plan Brief** — what to build, for whom, under what constraints, and what done looks like
2. **Reference files** — files that help AI understand the environment it is building in

Reference files are not the problem description. They are the working material: existing code, documentation, style guides, API specs, design files — anything that gives AI the information it needs to produce correct output. The Plan Brief defines the goal. Reference files define the space.

A weak Plan Brief + good reference files produces directionless work. A strong Plan Brief + no reference files produces well-intentioned but uninformed work. Both are needed.

Each phase document includes specific guidance on where AI adds the most value and where human judgment must lead.

---

## File Structure

```
solveOS/
├── README.md           ← You are here. Start here.
├── phases/
│   ├── plan.md         ← Phase 1: Plan
│   ├── build.md        ← Phase 2: Build
│   └── ship.md         ← Phase 3: Ship
├── gates/
│   ├── research.md        ← Optional gate: Research
│   ├── validate-plan.md   ← Optional gate: Plan Validation
│   ├── validate-build.md  ← Optional gate: Build Validation
│   └── review.md          ← Optional gate: Review (closes the loop)
└── examples/
    ├── write-an-article.md     ← Full worked example: writing a technical article
    └── build-a-feature.md      ← Full worked example: building a software feature
```

---

## How to use this framework

1. **Read this file first.** Understand the structure and the principles.
2. **See it in action.** Read the [worked example](./examples/write-an-article.md) to see a full cycle end to end.
3. **Start at Plan.** Open `phases/plan.md` and follow the process.
4. **Use gates when needed.** If you're unsure, default to using them — you can always skip them next time once you understand the cost.
5. **Ship something real.** The framework isn't complete until something is live.

---

*solveOS is a living framework. It improves through use.*
