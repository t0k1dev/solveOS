# Gate: Research

> **Position:** Before or during the Plan phase  
> **Purpose:** Understand the problem space before committing to a direction  
> **When to use:** When the problem is unfamiliar, the solution space is unclear, or assumptions need to be tested before planning

---

## What is the Research gate?

Research is a pre-planning checkpoint. You use it when you don't have enough information to write a reliable Plan Brief — when you risk planning in the wrong direction because you don't yet understand the problem space.

Research is bounded and purposeful. It is not open-ended exploration. It has a defined question, a time limit, and a clear output.

**Research answers the question: "Do I understand enough to plan?"**

---

## When to use Research

Use the Research gate when:

- You are working in a **domain you haven't worked in before**
- You need to understand what **already exists** before deciding what to build
- Your problem statement is based on **assumptions you haven't validated**
- The **constraints are unknown** and could significantly change the plan
- You need to evaluate **options** before committing to an approach

Do not use Research when:
- You are procrastinating under the guise of needing more information
- You already know enough to write a Plan Brief
- The cost of being slightly wrong is low and correctable mid-build

---

## How to run a Research gate

### 1. Define the research question
Before researching anything, write down exactly what you need to know. Vague research produces vague answers.

Good research questions:
- "What are the existing solutions to this problem and what are their limitations?"
- "What are the technical constraints of building X in Y environment?"
- "Has someone solved this before? What approach did they take?"
- "What does the user actually need here, versus what I assume they need?"

Bad research questions:
- "Learn more about this topic"
- "See what's out there"
- "Get a better understanding"

### 1a. Use Five Whys to find the real problem

If your research question is about diagnosing a problem (not evaluating options), use Five Whys before you start researching broadly. It stops you from researching the wrong thing.

Ask "why?" five times in succession, starting from the observable symptom:

```
Symptom: The dashboard loads slowly.
Why? → The queries take too long.
Why? → The table has no indexes.
Why? → Nobody added them when the feature was built.
Why? → The feature was built as a prototype and never hardened.
Why? → There was no definition of "production-ready" for that feature.

Root cause: Missing engineering standards for promoting prototypes to production.
```

You don't have to ask exactly five times — stop when you reach a cause that is actionable and specific. The point is to not research the symptom. Research the root cause.

### 2. Set a time limit
Research without a time limit becomes avoidance. Set a specific limit before you start:
- For small decisions: 30–60 minutes
- For medium decisions: 2–4 hours
- For large decisions: 1–2 days maximum

If you haven't found what you need within the time limit, you either need to reframe the question or accept uncertainty and proceed to Plan with stated assumptions.

### 3. Document what you find
Capture findings in a format that can feed directly into the Plan Brief. Don't just take notes — write conclusions.

Use this format:

```markdown
## Research Summary

**Question:** [The specific question you were answering]

**Time spent:** [e.g. 2 hours]

**Key findings:**
- [Finding 1]
- [Finding 2]
- [Finding 3]

**Conclusions:**
- [What this means for the Plan]

**Open questions / remaining unknowns:**
- [What you still don't know, and whether it blocks planning]

**Decision:**
- [ ] I have enough information to write the Plan Brief
- [ ] I need more research: [what specifically, and why]
```

### 4. Exit Research
Once you've answered your question or hit your time limit, stop. Move to the Plan phase using your findings as input.

---

## Using AI in the Research gate

AI is particularly effective in the Research phase when used as a thinking partner and information accelerator.

**Where AI helps:**
- Rapid summarization of existing solutions and their trade-offs
- Surfacing edge cases and prior art you might not have thought to look for
- Challenging the framing of your research question
- Generating a structured breakdown of an unfamiliar domain

**Where human judgment must lead:**
- Evaluating the reliability and relevance of information found
- Deciding when you know enough to move forward
- Interpreting findings in the context of your specific situation

**Prompt to try:**
```
I'm about to plan [describe the problem or project].
Before I write the plan, I need to understand [your research question].

What do I need to know?
What are the common approaches and their trade-offs?
What assumptions am I likely making that I should validate first?
```

---

## Research gate checklist

- [ ] Research question is specific and written down before starting
- [ ] Time limit is set before starting
- [ ] Findings are documented in the Research Summary format
- [ ] Conclusions are written (not just raw notes)
- [ ] Open questions are listed and assessed
- [ ] A clear decision to proceed to Plan (or do more targeted research) is made

---

*Back to [solveOS →](../README.md) | Next: [Plan →](../phases/plan.md)*
