# solveOS — Webpage Plan Brief

> This document is the complete instruction set for implementing the solveOS webpage. It is structured as a Plan Brief following the solveOS framework. An implementation agent should be able to read this and produce the full webpage without asking clarifying questions.

---

## Problem

solveOS exists as a set of markdown files. There is no central, readable page that communicates the framework to a new user who lands on it cold. The documentation is complete but not designed for a first impression — it assumes the reader already knows what to look for.

## Audience

- A builder, maker, or developer who has never heard of solveOS
- They are landing on the page with no prior context
- They are skeptical of frameworks — they have seen many that are either too abstract to use or too rigid to apply
- They need to understand the framework quickly and decide within 2 minutes if it is worth their time

## Goal

Build a single-page website that communicates the full solveOS framework — what it is, how it works, and why it matters — in a way that any builder can understand immediately and use as a reference.

## Appetite

One focused implementation session. The page must be shippable as a single HTML file or equivalent. No backend, no build system required unless the implementor chooses one.

## Constraints

- Single page — all content on one scrollable page, no separate routes required
- No login, no authentication, no database
- Must work without JavaScript for the content (JS can enhance but content must be readable without it)
- Mobile-responsive — must be fully readable on a phone
- No external dependencies required for core functionality (no frameworks unless the implementor prefers; plain HTML + CSS is valid)
- The page is the reference — it must include enough depth to be useful, not just a marketing summary
- Tone: direct, no hype, no marketing language. Same voice as the docs.

## Success criteria

- [ ] A new user who lands on the page understands what solveOS is within the first screen (above the fold)
- [ ] The page addresses the skeptical user directly — the failure modes section must appear before any framework explanation
- [ ] The full framework loop (Plan → Build → Ship) is visible and explained with one sentence per phase
- [ ] At least one worked example is visible before any theory (gates, principles, AI table)
- [ ] The AI-first nature of the framework is communicated — including "AI executes. Human decides."
- [ ] All five principles are present
- [ ] The gates are explained and their position in the loop is clear
- [ ] Every section links to the relevant doc file in `/docs/`
- [ ] The primary CTA leads to the examples, not to documentation
- [ ] The page works correctly on mobile
- [ ] The page loads without errors in a browser without an internet connection (no CDN-only dependencies)

## Core assumption

A builder who sees the framework working in a concrete example, then understands the three phases and the AI-first design, will have enough context to start using it. The page needs to earn the reader's attention with proof before asking them to read theory.

## Rabbit holes

- Do not build a multi-page site in this cycle — single page only
- Do not add interactive demos, animations, or dynamic content that require a build system
- Do not add a blog, changelog, or version history section
- Do not connect to any CMS or external data source

## Out of scope

- Search functionality
- Dark mode toggle (can be added in a future cycle)
- Internationalization
- Analytics or tracking
- User accounts or personalization

---

## Page structure

The page is divided into 9 sections, listed in scroll order. The order is intentional and follows a specific persuasion arc:

**Hook → Problem → Proof → How → Tool → Why → Action**

Do not reorder sections. Each section is placed where it is because of what the reader needs at that point in the scroll — not because of how the framework is organized internally.

---

### Section 1 — Hero

**Purpose:** Communicate what solveOS is and why it is different in one screen. Give the skeptical user a reason to keep reading.

**Content:**
- Name: `solveOS`
- Tagline: `A problem-solving framework for builders and makers.`
- One-sentence description: `Plan → Build → Ship. A repeatable structure for solving anything — designed from the ground up for AI-first execution.`
- Primary CTA button: `See it in action` → jumps to `#examples` (Section 3)
- Secondary CTA link: `Read the docs` → links to `docs/README.md`

**Visual — the loop:**

Immediately below the tagline, render the loop with a one-line description per phase:

```
   ┌─────────────────────────────────────────────┐
   ↓                                             │
 Plan → Build → Ship → [Review] ────────────────┘
```

Inline labels below the diagram (not a separate section — just anchors for first-time readers):
- **Plan** — define the problem and what done looks like, before building anything
- **Build** — execute against the plan; update it when the build teaches you something
- **Ship** — put it in the world, in front of real people; not "ready to ship" — shipped
- **[Review]** — measure whether it worked; feed what you learned into the next cycle

**Design note:** The primary CTA is `See it in action`, not `Read the framework`. The skeptical user needs to see proof before they will commit to reading documentation. Do not make documentation the first action.

**Source:** `docs/README.md` — "What is solveOS?" and the loop diagram

---

### Section 2 — Why solveOS?

**Purpose:** Address the skeptic directly. Name the failure modes they already recognize. Make the case for why the framework exists before describing what it contains.

**Content:**

Header: `Most people fail at solving things for the same reasons.`

Four failure modes, presented as a short list or card grid. Each has a name and a one-sentence description:

1. **They skip planning.** They jump into execution without a clear goal, and end up building the wrong thing.
2. **They over-plan.** They get stuck refining the plan and never ship anything real.
3. **They lose direction.** The goal defined at the start gets distorted by the time execution ends.
4. **They never measure.** They ship something, move on, and never find out if it actually worked. The same mistakes repeat.

Closing line: `solveOS is designed to prevent all four — through structure, optional validation, a bias toward shipping, and a review loop that closes the cycle.`

**Design note:** This section should be visually distinct from the hero — a darker background, a divider, or a section color that signals a shift from "what is this" to "why does this matter." The four failure modes should be scannable — short, bold names with one sentence each.

**Source:** `docs/README.md` — "Why solveOS?"

---

### Section 3 — Examples

**Purpose:** Show the framework working before asking the user to understand it theoretically. Concrete examples are what convert a skeptic into a reader.

**Header:** `See it working end-to-end.`

**Subheader:** `The fastest way to understand solveOS is to watch a full cycle from problem to shipped result.`

**Content:**
Two example cards, side by side on desktop, stacked on mobile:

---

**Example card 1: Writing a Technical Article**

- Label: `Content`
- Cycle shown visually: `Research → Plan → [Plan Validation] → Build → Ship`
- Summary: `A developer has a topic idea but isn't sure if the angle is useful. Research validates it, the plan is sharpened in one validation pass, and the article ships as a specific, actionable piece — not a vague tips list.`
- Key moment: `Plan Validation caught a weak argument before hours of writing.`
- Link: `Read the full example →` → `docs/examples/write-an-article.md`

---

**Example card 2: Building a Software Feature**

- Label: `Engineering`
- Cycle shown visually: `Research → Plan → [Plan Validation ×2] → Build → [Build Validation] → [Review] → Ship → [Review]`
- Summary: `The analytics dashboard loads in 8–12 seconds. Research identifies the root cause in 30 minutes. Two rounds of plan validation catch a vague success criterion before a line is written. The fix ships and P95 load time drops from 9.2s to 0.9s.`
- Key moment: `Research redirected the entire approach — the obvious fix (a caching layer) would have solved the wrong problem.`
- Link: `Read the full example →` → `docs/examples/build-a-feature.md`

---

**Design note:** Each card should show the cycle visually as a horizontal step sequence — not just as text. Phases in one style (e.g. plain text), gates in brackets with a lighter weight or different color. The "key moment" line should be visually distinct (italic, or a pull-quote style) — it is the single most memorable thing from each example.

**Source:** `docs/examples/`

---

### Section 4 — The Three Phases

**Purpose:** Explain the spine of the framework in detail. By now the user has seen it work — this is where they learn the structure.

**Header:** `Three phases. Always in this order.`

**Intro sentence:** `The spine of solveOS is always the same. You plan before you build. You build before you ship. The loop closes when you review.`

**Content:**
Three cards, one per phase. Each card includes: the phase name, a one-line description, and a 2–3 sentence explanation. Each links to its doc.

---

**Plan**
Define the problem, audience, goal, and success criteria before you build anything.

The output of the Plan phase is a **Plan Brief** — a short written document that answers: what are we solving, who is it for, what does done look like, and what are we explicitly not doing? The brief is also the primary instruction set when AI is building. Every ambiguity in it becomes a guess in the output.

Link: `Plan →` → `docs/phases/plan.md`

---

**Build**
Execute against the plan. Stay anchored. Update the brief when the build teaches you something.

Build is not just execution — it is structured discovery. You will learn things during the build that planning couldn't reveal. The goal is not to follow the plan blindly; it is to stay anchored to the goal and success criteria while adapting tactically. The Build phase ends when the success criteria are met — not when the work feels complete.

Link: `Build →` → `docs/phases/build.md`

---

**Ship**
Put it in the world. In front of real people. Not "ready to ship" — shipped.

Ship is the act of making something real — taking it out of your local environment, your draft folder, your private repository, and placing it where it will be used, read, or experienced. Until something is shipped, you are operating on assumptions. Shipping is how you find out if you were right.

Link: `Ship →` → `docs/phases/ship.md`

---

**Source:** `docs/README.md` — "The Three Phases" | `docs/phases/`

---

### Section 5 — Optional Gates

**Purpose:** Explain gates, their positions, and their value. Make clear they are optional but not cost-free to skip.

**Header:** `Optional gates — checkpoints between phases.`

**Intro:** `Between phases, you can insert gates — lightweight checkpoints that reduce risk and sharpen focus. They are not mandatory. Skipping them has a cost. Use them when the stakes are high, the problem is ambiguous, or the build is complex.`

**Visual — full cycle with all gates:**

```
[Research] → Plan → [Plan Validation] → Build → [Build Validation] → [Review pre-ship] → Ship → [Review post-ship]
                            ↑                              ↑
                      refine loop                    refine loop
```

**Four gate cards:**

| Gate | When | Purpose | Link |
|---|---|---|---|
| **Research** | Before Plan | Understand the problem space before committing to a direction. Defines a specific research question, sets a time limit, and produces conclusions — not just notes. | `docs/gates/research.md` |
| **Plan Validation** | After Plan, before Build | Verify the plan is sound. Runs as a loop — find gaps, update the brief, validate again — until someone who didn't write the plan can execute it and produce the same result. | `docs/gates/validate-plan.md` |
| **Build Validation** | After Build, before Ship | Verify the output works and matches the success criteria. Distinct from Review — this is a functional check, not a judgment call. | `docs/gates/validate-build.md` |
| **Review** | Before and after Ship | Pre-ship: holistic judgment check — is this actually ready? Post-ship: measure whether it worked and feed what you learned into the next Plan. | `docs/gates/review.md` |

**Closing:** `Gates serve the work. Skip them when the cost of being wrong is low. Use them when it isn't.`

**Source:** `docs/README.md` — "Optional Gates" | `docs/gates/`

---

### Section 6 — solveOS and AI

**Purpose:** Explain the AI-first differentiator in full. By this point the user understands the framework — now they understand what makes it different from every prior framework.

**Header:** `solveOS is the first problem-solving framework designed around AI as primary executor.`

**Subheader:** `AI executes. The human decides.`

**Explanation:**
`Most frameworks were designed before AI could do meaningful work. They treat AI as an accelerator at best. solveOS is built from the ground up assuming AI can own the Build phase — and structures the collaboration so that the work still gets done right.`

`At every gate, the human reads the output and makes the call: proceed, iterate, or cut. AI does not decide what gets shipped. AI does not decide when the plan is correct. AI does not decide what success means. Those calls belong to the human at every step.`

**The division table — render as a proper HTML table:**

| Phase / Gate | AI can... | Human must... |
|---|---|---|
| Plan | Challenge the problem statement, sharpen constraints, rewrite vague goals | Own the goal, decide what success means, commit to the plan |
| Research | Surface findings, synthesize information, identify gaps | Decide what question to answer, judge whether findings are sufficient |
| Build | Produce the output — code, text, designs — given the Plan Brief and reference files | Decide which approach to take, recognize when output doesn't match the goal, update the brief |
| Validate | Check output against criteria, flag gaps | Decide whether to ship, iterate, or cut scope |
| Ship | None | Decide that this goes in front of real people — and that it is the right thing to ship |
| Review | Measure, summarize, surface patterns | Decide what to learn and what to change in the next cycle |

**Reference files note:**
`When AI builds, it needs two inputs: the Plan Brief (what to build) and reference files (the environment to build within — existing code, style guides, API specs, design files). A strong brief with no reference files produces well-intentioned but uninformed work. Reference files without a brief produce directionless work. Both are required.`

**Source:** `docs/README.md` — "solveOS and AI"

---

### Section 7 — The Plan Brief

**Purpose:** Show the central artifact in full. The user now understands the framework and the AI-first model — this is where they see the tool they will actually use.

**Header:** `The Plan Brief — the instruction set for everything.`

**Explanation:**
`The Plan Brief is the output of the Plan phase and the input to every other phase. It is a short written document that answers nine questions before any execution begins. When AI is building, the Plan Brief is its primary instruction. Every ambiguity in it becomes a guess in the output. Write it so that someone — or something — who didn't write it could execute it and produce the same result.`

**Render the full template in a styled code block:**

```
Problem          — What is broken, missing, or needed? Be specific.
Audience         — Who experiences this? Who will use what you build?
Goal             — What does success look like? One sentence, starts with a verb.
Appetite         — How much are you willing to invest? Scope fits inside this — not the other way around.
Constraints      — What are the non-negotiables beyond appetite?
Success criteria — How will you know this is done, objectively?
Core assumption  — What must be true for this plan to work? If this is false, the plan fails.
Rabbit holes     — What unknowns are you explicitly choosing not to explore in this cycle?
Out of scope     — What are you NOT solving?
```

**Link:** `Full template, guidance, and common mistakes → docs/phases/plan.md`

**Design note:** This block should be visually copyable — styled as a card or code block with clear formatting. Many users will copy this template directly. Make that action easy.

**Source:** `docs/phases/plan.md`

---

### Section 8 — The Five Principles

**Purpose:** Give the reader the philosophy behind the framework. These are for users who want to understand the "why" behind the structure — they are not required to start using solveOS, but they provide the lenses to apply it well.

**Header:** `Five principles that govern how solveOS is applied.`

**Subheader:** `These are not rules. They are lenses. When you feel stuck or off-track, return to them.`

**Content:**
Five principle items. Each shows the name as a bold heading and the full one-paragraph explanation from the docs.

1. **Clarity before action** — Before execution begins, you must be able to state the problem, who it is for, and what success looks like — in writing. Not perfect clarity. Enough clarity to make the first decision without guessing. The Plan phase creates this foundation. Without it, every subsequent decision is unanchored.

2. **Build to learn** — Planning can only take you so far. The act of building reveals constraints, edge cases, and insights that no amount of thinking can surface. Don't treat the build phase as pure execution — treat it as structured discovery.

3. **Reality is the only validator** — No plan, build, or opinion tells you if something works. Only putting it in the world does. Shipping is not the end of the process — it is the beginning of knowing. An imperfect thing that is live produces more real information than a perfect thing that isn't.

4. **Gates reduce cost, not momentum** — Optional gates exist to catch expensive mistakes early, not to create bureaucracy. If a gate is slowing you down more than it's protecting you, skip it. Gates should serve the work, not the other way around.

5. **The brief is your compass** — The clarity established in Plan doesn't maintain itself. Every decision made during Build is an opportunity to drift from the original goal. The Plan Brief is not a starting artifact — it is an active reference. When what you're building no longer matches the brief, you either update the brief in writing or course correct. Silent drift is how projects fail.

**Source:** `docs/README.md` — "The Five Principles"

---

### Section 9 — Get Started

**Purpose:** Convert understanding into one clear action.

**Header:** `Start using solveOS.`

**Content:**

One primary action, styled as a prominent button or link:

> **Write your first Plan Brief** → `docs/phases/plan.md`

Supporting text: `Open plan.md. Fill out the template for the problem you're working on right now. That's the starting point.`

Three supplementary links in smaller type below:
- `Read the framework overview →` `docs/README.md`
- `See the article example →` `docs/examples/write-an-article.md`
- `See the engineering example →` `docs/examples/build-a-feature.md`

Closing line: `The framework isn't complete until something is live.`

**Design note:** One action. Not four steps. The user who has read this far is ready to start — give them a single door to walk through. The supplementary links are for readers who want more context first, not the primary action.

---

### Footer

**Content:**
- `solveOS — a living framework. It improves through use.`
- Link: `Full documentation →` `docs/README.md`
- Optional: GitHub repo link (placeholder: `[repo link]`)

---

## Visual design direction

The implementor has full freedom on visual design. The following are constraints and guidelines, not mandates.

**Typography:**
- Monospace or technical sans-serif — this is a framework for builders, not a marketing site
- Clear hierarchy: section headers large and bold, card headers medium, body text readable at 16px minimum
- Code blocks visually distinct (background color, monospace font, easy to copy)

**Color:**
- Minimal palette — 2–3 colors maximum
- High contrast for readability
- Phases and gates should be visually distinguishable from each other in diagrams — consider using a bracket style for gates `[Gate]` vs plain text for phases, matching the framework notation

**Layout:**
- Sections clearly separated with whitespace or dividers
- Phase cards (Section 4), gate cards (Section 5), and example cards (Section 3) should be scannable in a grid or card layout
- The AI division table (Section 6) must render as a proper HTML table — it is a key reference element
- Section 2 (failure modes) should feel tonally distinct from the hero — slightly heavier, more grounded

**Accessibility:**
- All interactive elements must have visible focus states
- Diagrams must have descriptive alt text or an adjacent text equivalent
- Color must not be the only way information is conveyed

---

## Implementation notes for the agent

1. **Section order is fixed.** The order follows a specific persuasion arc (Hook → Problem → Proof → How → Tool → Why → Action). Do not reorder sections based on the internal organization of the framework.

2. **The primary CTA in the Hero is `See it in action`** — it should scroll to or link to Section 3 (Examples). Not to documentation. The secondary CTA links to `docs/README.md`.

3. **The loop diagram in Section 1** should be rendered as a `<pre>` block (ASCII preserved), immediately followed by the four inline phase descriptions. The diagram alone means nothing to a new user — the descriptions must accompany it.

4. **Example cards in Section 3** must show the cycle as a visual step sequence, not just as text. Use spans, pills, or styled tokens to show `Plan`, `Build`, `Ship` as steps, and `[Research]`, `[Plan Validation]` etc. in brackets with a visually lighter style.

5. **The Plan Brief template in Section 7** should be in a styled, copyable code block. Many users will copy this directly — make the copy action easy.

6. **The AI division table in Section 6** is a core reference element. It must be a proper HTML `<table>`, not a list or a set of divs. It should be horizontally scrollable on mobile if it overflows.

7. **All doc links are relative.** The page lives at the repository root. Links to docs use `./docs/[path]`. Verify all links resolve correctly before shipping.

8. **Tone is not marketing.** Avoid superlatives, buzzwords, enthusiasm. Every sentence should be defensible literally. "The first framework designed around AI as primary executor" is a specific, true claim. "The best framework for builders" is not — do not add language like that.

9. **Reference files for the agent:**
   - `docs/README.md` — primary content source for Sections 1, 2, 4, 5, 6, 8
   - `docs/phases/plan.md` — Plan Brief template (Section 7)
   - `docs/phases/build.md`, `docs/phases/ship.md` — phase descriptions (Section 4)
   - `docs/gates/research.md`, `validate-plan.md`, `validate-build.md`, `review.md` — gate content (Section 5)
   - `docs/examples/write-an-article.md`, `build-a-feature.md` — example summaries (Section 3)

---

## Deliverable

A single file (or minimal set of files) that:
- Renders the 9-section page described above in a browser
- Passes all success criteria
- Has all doc links pointing to the correct files in `/docs/`
- Primary CTA leads to the examples section, not to documentation
- Is committed to the repository root as `index.html`
