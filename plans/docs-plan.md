# solveOS — Documentation Site Plan Brief

> This document is the source of truth for the solveOS documentation site. It describes what the site contains, how it is structured, and the constraints that govern it. The implementation must always stay in sync with this document.
>
> **Rule:** All content is sourced exclusively from `docs/`. Never modify files in `docs/` during web tasks. The documentation site renders `docs/` — it does not replace or override it.

## Sync hierarchy

```
docs/   ←  source of truth for all content. Never modified during web or plan tasks.
  ↓
plans/docs-plan.md   ←  must stay in sync with docs/. Updated whenever docs/ changes.
  ↓
app/src/pages/docs/  ←  must stay in sync with plans/docs-plan.md.
plans/webpage-plan.md  ←  must stay in sync with plans/docs-plan.md for any shared content.
  ↓
app/src/pages/index.astro  ←  must stay in sync with plans/webpage-plan.md.
```

**Change rules:**
- `docs/` changes → update `plans/docs-plan.md`, then `app/src/pages/docs/`, then `plans/webpage-plan.md` if affected, then `app/src/pages/index.astro` if affected.
- Web-only change (landing page copy, layout, sections) → update `plans/webpage-plan.md` only, then `app/src/pages/index.astro`. Do not touch `docs/` or `plans/docs-plan.md`.
- Docs site change (layout, nav, new page) → update `plans/docs-plan.md`, then `app/src/pages/docs/`. Do not touch `docs/`.

---

## Problem

The framework docs exist as raw markdown files in `docs/`. They are thorough but not yet accessible to a new reader: no navigation, no search, no visual hierarchy, no explanation of how to use the framework. A first-time visitor has no way to orient themselves or move between concepts.

## Audience

- A builder or developer who found the landing page and wants to understand the framework in depth
- Someone evaluating whether solveOS fits their workflow
- A returning user who wants to reference a specific phase, gate, or concept quickly

All three need different things. The site must serve all of them without assuming prior knowledge.

## Goal

Build a documentation site that makes `docs/` accessible, navigable, and understandable — with search, left-nav structure, clear concept explanations, and a "why and how to use this" guide layer — without modifying any file in `docs/`.

## Appetite

One focused build cycle. No external CMS, no database, no auth. Static site, same Astro stack as the landing page.

## Constraints

- **Never modify `docs/`** — the docs site reads from `docs/`, it does not rewrite it
- All content must be derived from `docs/` — no fabricated descriptions, no invented examples
- Must stay in sync with `docs/` — if a doc changes, the site reflects it automatically (content is loaded, not hardcoded)
- Same Astro stack (`app/`) — new pages and layout, but same project
- No JavaScript frameworks (no React, Vue, etc.) — Astro components and vanilla JS only
- Left navbar must be present and functional on desktop; collapses to a mobile menu on small screens
- Search must work client-side — no backend, no external search service
- All page content must be readable without JavaScript (search can degrade gracefully)
- Tone matches the docs: direct, technical, no hype

## Success criteria

- [ ] A new reader can land on the docs index and understand what the framework is and how to navigate it within 60 seconds
- [ ] Every doc file in `docs/` has a corresponding rendered page
- [ ] The left navbar lists all sections and highlights the current page
- [ ] Search returns relevant results across all doc content
- [ ] The "Why use this / How to use this" guide is present and sourced only from `docs/README.md`
- [ ] The site is mobile-responsive — left nav collapses, search is accessible
- [ ] Concept explanations (diverge/converge, feedback loops, Plan Brief, etc.) are rendered with visual emphasis, not buried in prose
- [ ] Diverge/converge has a dedicated page with the full mode map and diagram from `docs/README.md`
- [ ] The two feedback loops have a dedicated page with both loops explained and diagrammed
- [ ] Context-carrying (Principle 6) has a dedicated page explaining the concept and how to apply it
- [ ] A "How to start" guide walks a first-time user through their first complete cycle step by step
- [ ] An examples hub page introduces both worked examples and explains how to read them
- [ ] The site builds without errors and deploys through the existing Netlify pipeline

## Core assumption

Readers arrive knowing the landing page's one-line description of solveOS. They need depth — structure, worked examples, templates — not a re-pitch.

## Out of scope

- Authentication or user accounts
- Comments or annotations
- Version history or changelogs
- Edit-in-place or CMS
- Server-side rendering (static only)
- Any new framework content not already in `docs/`

---

## Site structure

### URL structure

```
/docs/                              → Introduction + overview (from docs/README.md)
/docs/guide/                        → Why solveOS + the six principles + AI design (from docs/README.md)
/docs/guide/how-to-start/           → Step-by-step first cycle walkthrough (from docs/README.md + phases)
/docs/concepts/diverge-converge/    → Diverge and converge explained (from docs/README.md — "Divergence and Convergence" section)
/docs/concepts/feedback-loops/      → The two feedback loops explained (from docs/README.md — "The Two Feedback Loops" section)
/docs/concepts/context/             → Keeping context across phases (from docs/README.md — Principle 6 + AI section)
/docs/phases/plan/                  → Phase 1: Plan (from docs/phases/plan.md)
/docs/phases/build/                 → Phase 2: Build (from docs/phases/build.md)
/docs/phases/ship/                  → Phase 3: Ship (from docs/phases/ship.md)
/docs/gates/research/               → Gate: Research (from docs/gates/research.md)
/docs/gates/plan-validation/        → Gate: Plan Validation (from docs/gates/validate-plan.md)
/docs/gates/build-validation/       → Gate: Build Validation (from docs/gates/validate-build.md)
/docs/gates/review/                 → Gate: Review (from docs/gates/review.md)
/docs/examples/                     → Examples hub — introduces both examples and how to read them
/docs/examples/article/             → Example: Write an article (from docs/examples/write-an-article.md)
/docs/examples/feature/             → Example: Build a feature (from docs/examples/build-a-feature.md)
```

### Left navbar structure

```
solveOS Docs
─────────────────────
Introduction

Guide
  Why solveOS
  How to start

Concepts
  Diverge and converge
  Feedback loops
  Keeping context

Phases
  Plan
  Build
  Ship

Gates
  Research
  Plan Validation
  Build Validation
  Review

Examples
  Write an article
  Build a feature
─────────────────────
← Back to solveOS
```

- Active page is highlighted
- Sections are collapsible on mobile
- Sticky on desktop (stays in view while scrolling)
- Fixed width: 260px desktop, full-width drawer on mobile

---

## Pages

### /docs/ — Introduction

**Source:** `docs/README.md`

**Purpose:** Entry point. Orient the reader: what is this, what does it contain, how do they navigate it.

**Content to render:**
- "What is solveOS?" section
- The core loop diagram (rendered as a styled code block or SVG)
- "Why solveOS?" — the four failure modes
- The Three Phases table
- "How to use this framework" — the five steps
- A prominent "Start here" CTA → /docs/guide/

**Visual treatment:**
- Loop diagram rendered visually (styled, not raw ASCII)
- Failure modes in a card grid (four cards, same pattern as landing page)
- Phases table rendered as a styled HTML table

---

### /docs/guide/ — Why solveOS

**Source:** `docs/README.md` — sections: "Why solveOS?", "The Six Principles", "solveOS and AI"

**Purpose:** Explain to a new reader why the framework exists, what problem it solves for them, what its principles are, and how AI fits in. This page convinces; the "How to start" page instructs.

**Content to render:**
- Why solveOS — the four failure modes, each explained fully
- The Six Principles — each principle in a named, visually distinct block with full explanation
- solveOS and AI — the AI-first design rationale, the AI/human division table
- Navigation card at the bottom: "Ready to start? → How to start your first cycle"

**Visual treatment:**
- Six Principles: each principle in a card-style block — principle name as heading, body below
- AI/human division table: styled HTML table
- Four failure modes: card grid (same pattern as landing page section 2)

---

### /docs/guide/how-to-start/ — How to start your first cycle

**Source:** `docs/README.md` — "How to use this framework" section; `docs/phases/plan.md`, `docs/phases/build.md`, `docs/phases/ship.md` — the eight planning questions and exit checklists

**Purpose:** A concrete, sequential walkthrough for a first-time user. Not a reference page — an action guide. The reader should be able to follow this page and complete a real cycle.

**Content to render:**

**Step 0 — Before you start**
- Sourced from `docs/README.md` "How to use this framework" intro
- What you need: a real problem worth solving (not a practice exercise)
- Read the Introduction first if you haven't

**Step 1 — Research (optional but recommended for your first cycle)**
- When to use it: if you don't yet understand the problem space
- Instruction: define one specific research question; set a time limit; document findings
- Link to full Research gate page
- Callout: "If you already know the problem well, skip to Step 2"

**Step 2 — Plan: write your Plan Brief**
- Sourced from `docs/phases/plan.md` — the eight questions
- Walk through each question with a concrete prompt:
  - What is the problem? (not the solution)
  - Who is this for?
  - What does success look like, specifically?
  - How much are you willing to invest?
  - What are the constraints?
  - How will you measure done?
  - What are you betting on?
  - What won't you explore in this cycle?
- Link to the Plan Brief template (copy-able code block, sourced from plan.md)
- Callout: "The Plan Brief is the single most important artifact in the framework. Write it. Don't keep it in your head."

**Step 3 — Validate the plan**
- When to run: always on your first cycle; on any cycle where the stakes are high
- Instruction: hand the Plan Brief to someone (or an AI) and ask the three validation questions
- If gaps found → go back and sharpen; if clear → proceed
- Link to full Plan Validation gate page

**Step 4 — Build**
- Sourced from `docs/phases/build.md` — "How to run the Build phase"
- Instruction: start from the success criteria, not from the full brief
- Check in after each unit of work: does this still connect to the goal?
- If the plan needs updating, update it in writing — don't silently change course
- Link to full Build phase page

**Step 5 — Validate the build (optional)**
- When to run: before any public-facing release; when the output is complex
- Instruction: test each success criterion pass/fail
- Link to Build Validation gate page

**Step 6 — Ship**
- Sourced from `docs/phases/ship.md` — final brief check + "make it real"
- Instruction: do the actual shipping action. Confirm it is live. Don't stop at "ready to ship."
- Link to full Ship phase page

**Step 7 — Review**
- Run a post-ship review after real-world signal is available
- Instruction: measure each success criterion against actual evidence; note what worked and what didn't; write feed-forward inputs for the next Plan
- Link to Review gate page

**Step 8 — Start the next cycle**
- The output of the Review is the starting point for the next Plan
- One sentence: every cycle starts smarter than the last

**Navigation cards at bottom:**
- "See a complete example →" → /docs/examples/
- "Deep dive into Plan →" → /docs/phases/plan/

**Visual treatment:**
- Steps rendered as a numbered sequence — each step a distinct block with a step number, title, and body
- Plan Brief template: copy-able code block (repeated here for convenience — same source as plan page)
- Callout boxes for the "skip if..." and "don't keep in your head" notes
- Navigation cards at bottom (not inline links)

---

## Concept pages

These three pages give dedicated space to cross-cutting ideas that appear in multiple phases and gates. Each is sourced entirely from `docs/README.md`.

---

### /docs/concepts/diverge-converge/ — Diverge and converge

**Source:** `docs/README.md` — "Divergence and Convergence" section (full section, including mode map table and diagram)

**Purpose:** Explain the two thinking modes, why they can't happen simultaneously, and where each one appears across the framework. A reader who understands this page will understand why the framework is structured the way it is.

**Content to render:**

**What diverging and converging mean**
- Diverging: opening up — exploring possibilities, surfacing options, expanding understanding
- Converging: narrowing down — making decisions, eliminating options, committing to a direction
- Key principle: "The two modes cannot happen at the same time"

**The full mode map diagram**
- Sourced directly from `docs/README.md` — the ASCII diagram showing where each mode appears across all phases and gates
- Rendered as a styled code block (monospace, high contrast background)

**Where each mode appears**
- Rendered as the styled table from `docs/README.md`: Phase/Gate | Mode | What it looks like
- Each row links to the relevant phase or gate page

**Why this matters**
- The two failure modes that map to misaligned thinking:
  - "Diverging when you should be converging" — what it produces
  - "Converging when you should be diverging" — what it produces
- How gates mark the transitions between modes
- Full text from the "Why this matters" subsection

**How to use this in practice**
- At any point in your work, ask: which mode should I be in right now?
- If stuck: check whether you're diverging when you should be converging, or vice versa
- The gates are mode transition signals — Plan Validation signals the end of diverging in Plan; Review (post-ship) signals the re-opening of diverging before the next Plan

**Visual treatment:**
- Mode map diagram: full-width styled code block
- Mode table: styled HTML table with mode column color-coded (diverge in one color, converge in another)
- Failure modes: two side-by-side callout boxes (one per failure mode)
- "How to use this in practice" as a plain numbered list

---

### /docs/concepts/feedback-loops/ — The two feedback loops

**Source:** `docs/README.md` — "The Two Feedback Loops" section (full section, including both loop diagrams and the full picture diagram)

**Purpose:** Explain that solveOS is a cycle, not a line — and specifically name and explain both loops, why they exist, when they exit, and what they prevent.

**Content to render:**

**Overview**
- solveOS contains two distinct feedback loops that make the framework a cycle
- Why loops exist: to reduce the cost of being wrong

**Loop 1 — Plan → Validate Plan → Plan (refine)**
- The loop diagram from `docs/README.md`
- What it does: Plan Validation checks the plan before any build begins; if gaps exist, sharpen and re-run
- Why it exists: vague plans produce vague builds; fixing ambiguity before execution is cheaper than after
- When it exits: the plan answers all validation questions without hesitation
- Typical runs: 1–3 passes
- Link to Plan Validation gate

**Loop 2 — Ship → Review → Plan (continue building)**
- The loop diagram from `docs/README.md`
- What it does: Review measures what happened after shipping and feeds learnings into the next Plan
- Why it exists: real-world behavior tells you things your plan couldn't predict; without a review loop, the same mistakes repeat
- When it exits: never — the loop is perpetual; it stops only when the problem is no longer worth solving
- Link to Review gate

**The full picture**
- The combined diagram from `docs/README.md` showing both loops in the full cycle
- "Loop 1 runs before execution begins — it protects the build. Loop 2 runs after the result is live — it informs the next cycle."

**What these loops prevent**
- Two-column layout on desktop: Loop 1 prevents / Loop 2 prevents
- Loop 1: building the wrong thing, wasted execution effort, expensive mid-build corrections
- Loop 2: repeating the same mistakes, disconnected cycles, assumptions never tested against reality

**Visual treatment:**
- Both loop diagrams: styled code blocks (monospace, dark background)
- Full picture diagram: same treatment, full-width
- "What these loops prevent" two-column cards on desktop, stacked on mobile
- Links to Plan Validation and Review gate pages rendered as navigation cards

---

### /docs/concepts/context/ — Keeping context

**Source:** `docs/README.md` — Principle 6 ("Context must be carried forward") and the "solveOS and AI" section ("Reference files" subsection and the AI/human division table row for context)

**Purpose:** Explain why context loss is a primary failure mode in multi-step work and AI-assisted work, and give concrete practices for carrying context forward at each phase transition.

**Content to render:**

**Why context degrades**
- Sourced from Principle 6: every phase and gate produces learning; that learning only has value if it travels into the next step — explicitly, in writing
- The specific problem with AI: no memory between sessions; if context is not carried forward, the next session starts from zero
- Silent drift: how projects fail not from bad execution but from losing the original goal

**What context actually means at each transition**
- Rendered as a table with four rows, one per major transition:

| Transition | What to carry forward | What happens without it |
|---|---|---|
| Plan → Build | The Plan Brief (goal, constraints, success criteria, rabbit holes, out of scope) | AI makes silent assumptions; the builder drifts from the goal |
| Build → Build Validation | What was built, what changed from the plan, what was deferred | Validation checks the wrong thing; scope drift goes undetected |
| Build Validation → Ship | Known issues and their decisions (fix now / defer / accept) | Deferred items are forgotten, not fed into the next cycle |
| Ship → Review → Plan | What worked, what didn't, what was discovered, what assumptions were wrong | Each cycle starts from scratch; the same mistakes repeat |

**Practical practices**
- Sourced from `docs/README.md` Principle 6 full text + `docs/phases/build.md` "Updating the Plan Brief from Build":
  1. Update the Plan Brief in writing when Build reveals new information — don't silently change course
  2. When handing off to AI: include the Plan Brief + reference files + a note on what changed since last session
  3. After every gate: write a one-paragraph summary of what was decided and why, before proceeding
  4. At Review: the Feed Forward section of the post-ship Review template is the context input for the next Plan

**The reference files concept**
- Sourced from `docs/README.md` "Reference files" subsection and `docs/phases/build.md` "Reference files" section
- What reference files are: the working environment AI operates in
- A strong Plan Brief + no reference files → well-intentioned but uninformed work
- Weak Plan Brief + good reference files → directionless work
- Both are needed

**Visual treatment:**
- Context transition table: styled HTML table — the "What happens without it" column in a visually distinct style (muted red or warning tone)
- Practical practices: numbered list with each practice as a brief, actionable instruction
- Reference files concept: callout box (this is critical for AI-assisted work)

---

### /docs/phases/plan/ — Phase 1: Plan

**Source:** `docs/phases/plan.md`

**Content to render:**
- "What is the Plan phase?" — full text including diverge/converge explanation
- The eight planning questions — rendered as a numbered list with each question bolded
- The Plan Brief template — rendered in a copy-able code block
- Common mistakes table — rendered as a styled HTML table
- "When is the Plan phase done?" — full text
- Optional gates callout — rendered as a styled callout box with links to gate pages
- Using AI in the Plan phase — rendered with "Where AI helps" / "Where human judgment must lead" as two labeled lists; prompt in a copy-able code block
- Exit checklist — rendered as an interactive-looking checklist (visual only, no state)

**Visual treatment:**
- Plan Brief template: full-width code block with a "Copy" button (vanilla JS)
- Common mistakes: styled table, "Mistake" column in red-tinted cells
- AI prompt: styled code block with a "Copy" button

---

### /docs/phases/build/ — Phase 2: Build

**Source:** `docs/phases/build.md`

**Content to render:**
- "What is the Build phase?" — full text
- "How to run the Build phase" — four numbered steps, each as a named section
- "What to expect during Build" — full text
- "Signs the Build is going wrong" — rendered as a styled table
- "Updating the Plan Brief from Build" — four steps
- Optional gates callout
- Using AI in the Build phase — AI helps / human must lead lists; AI failure modes table; prompt in a code block
- Exit checklist

**Visual treatment:**
- "Signs the Build is going wrong" table: "Signal" column styled distinctly
- AI failure modes: styled table
- AI prompt: copy-able code block

---

### /docs/phases/ship/ — Phase 3: Ship

**Source:** `docs/phases/ship.md`

**Content to render:**
- "What is the Ship phase?" — full text
- "What shipped means across different contexts" — rendered as a styled table
- "How to run the Ship phase" — five numbered steps
- "The most common shipping failure" — rendered as a callout box
- "Shipping is not the end" — full text including the three outcomes
- "The continuation loop" — full text including the perpetual cycle diagram
- Using AI in the Ship phase
- Exit checklist
- "The cycle is complete" — the final diagram

**Visual treatment:**
- "Shipped means" table: rendered as a two-column styled table
- Cycle diagrams: rendered as styled code blocks (monospace, background contrast)

---

### /docs/gates/research/ — Gate: Research

**Source:** `docs/gates/research.md`

**Content to render:**
- Gate metadata header (Position, Purpose, When to use) — rendered as a styled info card at top of page
- "What is the Research gate?" — full text
- "When to use Research" — two lists (use / do not use)
- "How to run a Research gate" — all four steps including Five Whys example and Research Summary template
- Using AI in Research
- Research gate checklist

**Visual treatment:**
- Gate metadata: styled card with three labeled fields
- "Use / Do not use" lists: side-by-side on desktop, stacked on mobile
- Five Whys example: styled code block
- Research Summary template: copy-able code block

---

### /docs/gates/plan-validation/ — Gate: Plan Validation

**Source:** `docs/gates/validate-plan.md`

**Content to render:**
- Gate metadata header
- "What is Plan Validation?" — full text with the refining loop diagram
- "Why this loop exists" — full text
- "The three validation questions" — numbered list with each question prominent
- "How to run Plan Validation" — Solo, With another person, With AI (three subsections)
- "The refinement loop in practice" — three passes explained; how to know when the loop is done; what "refining" actually means
- Plan Validation output template — copy-able code block
- Plan Validation checklist

**Visual treatment:**
- Refining loop diagram: styled code block
- Three validation questions: each in a visually distinct numbered block
- AI prompt: copy-able code block

---

### /docs/gates/build-validation/ — Gate: Build Validation

**Source:** `docs/gates/validate-build.md`

**Content to render:** Full content of the file (same pattern as other gate pages)

---

### /docs/gates/review/ — Gate: Review

**Source:** `docs/gates/review.md`

**Content to render:**
- Gate metadata header
- "Two modes, one gate" — the position diagram
- Pre-ship Review — full text, output template as copy-able code block
- Post-ship Review — full text, the three questions, when to review table, how to run (three steps), output template as copy-able code block
- "What if the result can't be measured yet?"
- Using AI in Review
- Review gate checklist (both Pre-ship and Post-ship)
- "The loop closes here" diagram
- "Shipping is the beginning of building, not the end" — full section
- "When to stop the loop"

**Visual treatment:**
- Pre/post-ship distinction: two visually separated sections with a clear label for each mode
- Output templates: copy-able code blocks
- "When to review" table: styled HTML table

---

### /docs/examples/ — Examples hub

**Source:** `docs/examples/write-an-article.md` and `docs/examples/build-a-feature.md` — headers, scenario descriptions, and cycle overviews only (the hub page does not reproduce full content)

**Purpose:** Introduce the two worked examples, explain how to read them, and help the reader choose which one to start with. The hub is the entry point; the individual pages are the full content.

**Content to render:**

**How to read a solveOS example**
- Sourced from the "How to read this example" callout present in both example files:
  > Each step shows what was given to an agent as an instruction, what the agent returned as output, and what the human decided based on that output. The agent can be you, a collaborator, or an AI — the structure is the same either way. Gates are where the human reads the output and decides whether to proceed. That decision is never skipped.
- Rendered as a prominent callout box at the top of the page

**What you'll see in each example**
- Three-item list:
  - The instruction given to the agent (human or AI)
  - The output the agent returned
  - The human decision at each gate — proceed, iterate, or cut

**The two examples — side-by-side cards**

| | Write an article | Build a feature |
|---|---|---|
| Scenario | Publishing a technical article from research to live | Fixing a slow analytics dashboard — 8–12s → under 1s |
| Cycle used | Research → Plan → Plan Validation → Build → Ship | Research → Plan → Plan Validation (×2) → Build → Build Validation → Review (pre + post) → Ship |
| Best for | Writers, content creators, makers who ship non-code output | Developers, engineers, anyone shipping software |

- Each card links to its full example page
- Cycle shown as a styled sequence: phases and gates in their respective colors

**Visual treatment:**
- "How to read this example" callout: prominent, full-width, styled as a note box
- Two example cards: side-by-side on desktop, stacked on mobile — each with scenario, cycle, and a "Read example →" link

---

### /docs/examples/article/ and /docs/examples/feature/

**Source:** `docs/examples/write-an-article.md` and `docs/examples/build-a-feature.md`

**Purpose:** Show the full framework applied end to end. These are the most concrete pages on the site.

**Content to render:** Full content of each file, preserving all headings and structure

**Visual treatment:**
- Each phase/gate section visually separated with a section divider and a step number badge
- Plan Brief in the example: rendered in a copy-able code block
- "Human decision" at each step: visually distinct block (e.g., left border in a decision color) — this is the most important moment on each page
- "Instruction given to agent" and "Output from agent" rendered as labeled blocks (not plain paragraphs)
- "The full cycle at a glance" diagram at the bottom: styled code block
- "What this example demonstrates" table: styled HTML table linking principles to evidence

---

## Search

**Implementation:** Client-side, no backend.

**Approach:**
- At build time, Astro generates a `search-index.json` file containing all doc content: page title, URL, section headings, and text excerpts
- On the client, a vanilla JS search module loads `search-index.json` and runs a simple substring/fuzzy match on keypress
- Results display as a dropdown below the search input: page title + matching section + short excerpt
- Keyboard navigable (arrow keys, Enter to navigate, Escape to close)
- Search input lives in the top nav bar (always visible)

**Search index fields per entry:**
```json
{
  "title": "Phase 1: Plan",
  "url": "/docs/phases/plan/",
  "section": "The Plan Brief",
  "excerpt": "The output of the Plan phase is a Plan Brief — a short, written document...",
  "keywords": ["plan brief", "success criteria", "appetite"]
}
```

**Degradation:** If JS is disabled, the search input is hidden and a link to the full index page is shown instead.

---

## Layout

### DocsLayout.astro

A new layout file: `app/src/layouts/DocsLayout.astro`

**Structure:**
```
┌─────────────────────────────────────────────────────────────┐
│  Nav (logo + search + "Back to solveOS" link)               │
├──────────────┬──────────────────────────────────────────────┤
│              │                                              │
│  Left Nav    │  Main content                                │
│  (260px)     │  (max-width: 760px, centered)                │
│  sticky      │                                              │
│              │  Page title                                  │
│  [sections]  │  Content sections                            │
│              │  Prev / Next nav                             │
│              │                                              │
├──────────────┴──────────────────────────────────────────────┤
│  Footer (minimal — logo + GitHub link)                      │
└─────────────────────────────────────────────────────────────┘
```

**Responsive:**
- ≤900px: left nav moves to a hamburger drawer (slide in from left)
- ≤600px: content padding reduced, tables scroll horizontally

**Prev / Next navigation:**
- Each page has a "Previous" and "Next" link at the bottom, following the logical reading order:
  Introduction → Why solveOS → How to start → Diverge and converge → Feedback loops → Keeping context → Plan → Build → Ship → Research → Plan Validation → Build Validation → Review → Examples → Write an article → Build a feature

---

## Content sync strategy

**How docs content gets into the site:**

Astro's content collections or `Astro.glob()` — each `.md` file in `docs/` is loaded at build time and rendered into its corresponding page. No content is hardcoded in `.astro` files.

This means:
- When a `docs/` file is updated, the next build automatically reflects the change
- No manual sync step required
- The plan file and the `docs/` files are the only sources of truth — no third location

**File → URL mapping** (maintained in a single config object, not scattered across files):
```js
const docPages = [
  { file: 'docs/README.md',                    url: '/docs/' },
  { file: 'docs/README.md',                    url: '/docs/guide/',                    section: 'guide' },
  { file: 'docs/README.md',                    url: '/docs/guide/how-to-start/',       section: 'how-to-start' },
  { file: 'docs/README.md',                    url: '/docs/concepts/diverge-converge/', section: 'diverge-converge' },
  { file: 'docs/README.md',                    url: '/docs/concepts/feedback-loops/',   section: 'feedback-loops' },
  { file: 'docs/README.md',                    url: '/docs/concepts/context/',          section: 'context' },
  { file: 'docs/phases/plan.md',               url: '/docs/phases/plan/' },
  { file: 'docs/phases/build.md',              url: '/docs/phases/build/' },
  { file: 'docs/phases/ship.md',               url: '/docs/phases/ship/' },
  { file: 'docs/gates/research.md',            url: '/docs/gates/research/' },
  { file: 'docs/gates/validate-plan.md',       url: '/docs/gates/plan-validation/' },
  { file: 'docs/gates/validate-build.md',      url: '/docs/gates/build-validation/' },
  { file: 'docs/gates/review.md',              url: '/docs/gates/review/' },
  { file: 'docs/examples/write-an-article.md', url: '/docs/examples/article/' },
  { file: 'docs/examples/build-a-feature.md',  url: '/docs/examples/feature/' },
]
```

Note: pages marked with `section` key are derived from `docs/README.md` but render only the relevant section of that file, not the full document.

---

## Visual design

**Typography:** Same as landing page — inherits from `Layout.astro` tokens.

**Color additions needed for docs (add to Layout.astro or DocsLayout.astro):**
- `--docs-nav-bg`: sidebar background (`#f8f9fa` — same as `--bg-alt`)
- `--docs-nav-active`: active nav item background (`#e8f0fe`)
- `--docs-nav-active-color`: active nav item text (`#1d4ed8`)
- `--docs-callout-bg`: callout box background (`#f0f9ff`)
- `--docs-callout-border`: callout box left border (`#3b82f6`)
- `--docs-code-bg`: code block background (`#1e293b`)
- `--docs-table-header`: table header background (`#f1f5f9`)

**Code blocks:** Dark background (`#1e293b`), light text, monospace. "Copy" button top-right corner of block.

**Tables:** Striped rows, left-aligned text, header row in `--docs-table-header`.

**Callout boxes:** Left border accent, light background, used for: gate suggestions, AI prompts, important notes.

**Checklist items:** Rendered as visual checkboxes (CSS only, no state). Styled distinctly from body text.

---

## Implementation

**Stack:** Astro, same `app/` project. No new dependencies unless unavoidable.

**New files to create:**
```
app/src/layouts/DocsLayout.astro
app/src/pages/docs/index.astro
app/src/pages/docs/guide/index.astro
app/src/pages/docs/guide/how-to-start/index.astro
app/src/pages/docs/concepts/diverge-converge/index.astro
app/src/pages/docs/concepts/feedback-loops/index.astro
app/src/pages/docs/concepts/context/index.astro
app/src/pages/docs/phases/plan/index.astro
app/src/pages/docs/phases/build/index.astro
app/src/pages/docs/phases/ship/index.astro
app/src/pages/docs/gates/research/index.astro
app/src/pages/docs/gates/plan-validation/index.astro
app/src/pages/docs/gates/build-validation/index.astro
app/src/pages/docs/gates/review/index.astro
app/src/pages/docs/examples/index.astro
app/src/pages/docs/examples/article/index.astro
app/src/pages/docs/examples/feature/index.astro
app/src/scripts/search.js
app/src/pages/search-index.json.js   (Astro API endpoint that generates the search index at build time)
```

**Docs content loading:** Use `Astro.glob('../../../../docs/**/*.md')` or `fs.readFileSync` in Astro frontmatter to load markdown at build time. Parse with a markdown library (`marked` or Astro's built-in markdown processing) to produce HTML.

**Do not modify:**
- `docs/` — any file inside, ever, during web tasks
- `app/src/layouts/Layout.astro` — unless adding CSS tokens for the docs theme (minimal, intentional changes only)
- `app/src/pages/index.astro` — the landing page is separate

---

## Rabbit holes (explicitly out of scope for this build)

- Versioning the docs
- Internationalisation / translations
- Dark mode
- Annotations or user notes
- Comment threads on doc pages
- Authentication
- Analytics per page (beyond what Netlify already provides)
- A CMS or edit interface

---

## Implementation order

1. `DocsLayout.astro` — left nav, top nav with search input, content area, prev/next
2. `/docs/` — Introduction page (proves the layout works with real content)
3. `/docs/guide/` — Why solveOS, six principles, AI design
4. `/docs/guide/how-to-start/` — step-by-step first cycle guide
5. Concept pages: Diverge and converge → Feedback loops → Keeping context (in order)
6. Phase pages: Plan → Build → Ship (in order)
7. Gate pages: Research → Plan Validation → Build Validation → Review (in order)
8. `/docs/examples/` hub page
9. Example pages: Write an article → Build a feature
10. Search index endpoint + `search.js`
11. Mobile nav (hamburger drawer)
12. Build verification + deploy
