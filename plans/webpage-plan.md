# solveOS — Webpage Plan Brief

> This document is the source of truth for the solveOS landing page. It describes what the page contains, why each section exists, and what the design constraints are. The landing page (`app/src/pages/index.astro`) must always stay in sync with this document.

## Sync hierarchy

```
docs/   ←  source of truth for all content. Never modified.
  ↓
plans/docs-plan.md   ←  synced with docs/.
  ↓
plans/webpage-plan.md  ←  this file. Synced with plans/docs-plan.md for shared content.
  ↓
app/src/pages/index.astro  ←  must stay in sync with this file.
```

**Change rules:**
- Web-only change (copy, layout, sections) → update this file, then `app/src/pages/index.astro`. Do not touch `docs/` or `plans/docs-plan.md`.
- If `docs/` changes and affects landing page content → `plans/docs-plan.md` is updated first, then this file, then `app/src/pages/index.astro`.

---

## Problem

solveOS needs a landing page that makes someone want to use the framework — not a documentation site. The previous version was a dense, 14-section reference document. It assumed the reader already wanted to learn the framework. This version assumes the reader is a skeptic with 90 seconds of attention.

## Audience

- A builder, maker, or developer who has never heard of solveOS
- Landing cold — no prior context
- Skeptical of frameworks. They have seen many that are too abstract to use or too rigid to apply.
- They need to understand what this is and decide within 2 minutes whether it is worth their time

## Goal

Build a landing page that makes a skeptical builder want to use solveOS — without over-explaining, without dense reference content, and without wasting the reader's time.

## Constraints

- Single page — all content on one scrollable page
- Commercial in tone — this is a landing page, not documentation
- All doc content (gates detail, diverge/converge, context handoff table, AI table, Plan Brief template, principles, examples, CLI) lives in `/docs/`, not on this page
- Tone: direct, no hype. Every sentence defensible literally. Same voice as the docs.
- Framework notation: phases as plain text (`Plan`, `Build`, `Ship`); gates always in brackets (`[Review]`)
- All buttons and doc links are currently disabled with "coming soon" badges — do not remove those states
- No JavaScript required for content
- Mobile-responsive

## Success criteria

- [ ] A new user understands what solveOS is within the first screen
- [ ] The failure modes appear before any framework explanation
- [ ] The three phases are explained with their key outputs — no more depth than needed to understand the framework
- [ ] The AI-first differentiator is communicated clearly — including the human/AI division and the context/memory problem
- [ ] Both feedback loops are named and briefly described
- [ ] The email capture is present and functional-looking (currently disabled)
- [ ] All coming-soon states are correct — no enabled links to nonexistent pages
- [ ] The page loads without errors

## Core assumption

A skeptical reader will continue reading if the first screen names something real they have experienced, the framework explanation is brief and structured, and the AI-first design is treated as a specific differentiator — not a marketing claim.

## Out of scope for this page

- Gates detail (what each gate does, exit conditions, loops) → docs
- Plan Brief template → docs
- Diverge/converge mode map → docs
- Context handoff table → docs
- AI division table → docs
- Worked examples → docs
- CLI → docs
- Six principles → docs
- Get Started section (folded into Hero CTAs)

---

## Page structure

**6 sections** in scroll order. Order is fixed.

**Persuasion arc: Hook → Problem → Framework → AI differentiator → Cycle → Notify**

---

### Section 1 — Hero

**Purpose:** Communicate what solveOS is and why it's different. The tagline is the positioning statement — every word is deliberate.

**Content:**
- Eyebrow: `Problem-solving framework`
- Headline: `The first framework for humans and AI agents to solve problems together.`
- Sub: `Plan. Build. Ship. A repeatable structure that tells you what to do, in what order, and who is responsible for each decision — whether you're working alone, with a team, or with AI doing most of the execution.`
- Agnostic line (smaller, muted): `Works with any AI model. Applies to any type of problem — software, content, product, research, or anything else you build and ship.`
- Loop diagram: `↻ Plan → Build → Ship → [Review] → Plan ···` — styled inline component, phases in blue, gate muted, return arrow visible
- CTAs (both disabled):
  - Primary: `Read the docs` → coming soon
  - Secondary: `See examples` → coming soon

**Design note:** The headline must not be shortened or softened. "The first framework for humans and AI agents to solve problems together" is a specific, defensible claim. Do not replace it with something vaguer.

---

### Section 2 — The problem

**Purpose:** Address the skeptic directly. Name the failure modes they already recognize before explaining any framework.

**Header:** `Most people fail at solving things for the same four reasons.`

**Content:** Four failure-mode cards:
1. **They skip planning.** Jump to execution, build the wrong thing.
2. **They over-plan.** Never ship anything real.
3. **They lose direction.** Goal drifts between start and end.
4. **They never measure.** Same mistakes repeat invisibly.

**Closing line:** `solveOS prevents all four — through structure, optional validation gates, a bias toward shipping, and a review loop that closes the cycle.`

**Alt background (`--bg-alt`)**

---

### Section 3 — How it works

**Purpose:** Explain the three phases clearly. Show that gates exist without explaining each gate in detail.

**Header:** `Three phases. Always in this order.`

**Content:** Three cards — one per phase:

- **Plan** — Define the problem, audience, goal, and success criteria before you build anything. Output: a Plan Brief — specific enough that an AI agent can execute it without clarifying questions.
- **Build** — Execute against the plan. Stay anchored. Update the brief when the build teaches you something. Build is structured discovery, not just execution.
- **Ship** — Put it in the world. In front of real people. Not "ready to ship" — shipped. Until something ships, you are operating on assumptions.

Each card links to its phase doc (disabled, coming soon).

**Gates note** (below cards, in a callout box): `Optional gates — [Research], [Plan Validation], [Build Validation], [Review] — sit between phases. Use them when the cost of being wrong is high. Skip them when it isn't.` Link to gates overview (disabled, coming soon).

**Plain background (`--bg`)**

---

### Section 4 — Built for AI

**Purpose:** Explain the AI-first differentiator. This is the claim in the headline — here it is substantiated.

**Header:** `AI executes. The human decides.`

**Layout:** Two columns on desktop — prose left, summary card right.

**Prose (left):**
- Most frameworks were designed before AI could do meaningful work. solveOS is built from the ground up assuming AI can own the Build phase.
- The Plan Brief is the human's primary output — written specifically enough that an AI agent can execute it without clarifying questions. At every gate, the human makes the call: proceed, iterate, or cut.
- AI has no memory between sessions. solveOS treats context as a first-class artifact — every phase transition requires carrying forward what was learned, in writing, so the next session doesn't start from zero.
- Link (disabled): "How AI fits into solveOS → coming soon"

**Summary card (right):** Two lists:
- **AI can:** challenge the plan, produce output, check against criteria, summarize and surface patterns
- **Human must:** own the goal, commit to the plan, recognize when output misses the mark, decide what ships, decide what to learn next cycle

**Alt background (`--bg-alt`)**

---

### Section 5 — The cycle

**Purpose:** Show that solveOS is a cycle, not a line. Two loops in brief.

**Header:** `It's a cycle, not a line.`

**Content:** Two cards side by side:

**Loop 1 — Refine before you build**
- Flow: `Plan → [Plan Validation] → gaps found → Plan ···`
- Description: Plan Validation checks the plan before any build begins. If gaps exist, sharpen and re-run. The loop runs until the plan can be executed without guesswork — typically 1–3 passes. Fixing ambiguity before execution is cheaper than fixing it after.

**Loop 2 — Keep building after you ship**
- Flow: `Ship → [Review] → Plan → ···`
- Description: Shipping is the beginning of knowing, not the end of the work. Review captures what worked, what didn't, and what you discovered — and feeds it into the next Plan. Every cycle starts smarter than the last.

**Plain background (`--bg`)**

---

### Section 6 — Notify

**Purpose:** Capture email for users who aren't ready to start but want to come back.

**Header:** `Get notified when docs and tools launch.`

**Subheader:** `No newsletter. One email when it's ready.`

**Content:** Email input + Notify me button (disabled, coming soon). Note: `Nothing ships until it's ready. That's the whole point.`

**Alt background (`--bg-alt`)**

---

### Footer

- Logo: `solveOS`
- Tagline: `A living framework. It improves through use.`
- Creator credit: `Built with ♥ by @tokidev_` — plain text, no link required
- GitHub link: `GitHub` with GitHub icon → `https://github.com/t0k1dev/solveOS/tree/main` — opens in new tab
- Link: `Full documentation` (disabled, coming soon)
- Dark background (`--bg-hero`)

### Nav

- Logo: `solveOS` → links to `/`
- Right side: `Docs` (disabled, coming soon) + GitHub icon → `https://github.com/t0k1dev/solveOS/tree/main` — opens in new tab

---

## Visual design

**Typography:** Technical sans-serif. Clear hierarchy. Body text minimum 16px. Code/mono for phase sequences and loop diagrams.

**Color:** Minimal palette. Phases (`Plan`, `Build`, `Ship`) in `--phase-color` (#2563eb blue). Gates (`[Review]`, etc.) in `--gate-color` (#94a3b8 muted). Arrows de-emphasized.

**Alt sections:** Hero and footer use dark background (`--bg-hero`). Sections 2, 4, 6 use `--bg-alt` (#f8f9fa). Sections 3, 5 use plain white (`--bg`).

**Responsive:** Two-column layouts collapse to single column at ≤900px. Grids collapse to single column at ≤600px.

**Coming-soon states:** All doc links and CTAs are disabled (`.btn-disabled`, `.card-link-disabled`) and show `.cs-badge` labels. Do not enable any of these until docs are published.

---

## Implementation

Built with Astro (`app/src/pages/index.astro` + `app/src/layouts/Layout.astro`).

Global CSS tokens and design system live in `Layout.astro` — do not duplicate tokens in `index.astro`.

Section-specific styles live in `index.astro`'s `<style>` block.

Target file length: ~600–650 lines (HTML + styles). Current: 641 lines.
