# Example: Writing a Technical Article

**Scenario:** You want to write an article titled *"How to use AI to write better code"* and publish it on your blog. You have opinions on the topic but you're not sure if the angle is actually useful or if the article already exists a hundred times.

**Cycle:** Research → Plan → Plan Validation → Build → Ship

---

> **How to read this example**
>
> Each step shows what was given to an agent as an instruction, what the agent returned as output, and what the human decided based on that output. The agent can be you, a collaborator, or an AI — the structure is the same either way. Gates are where the human reads the output and decides whether to proceed. That decision is never skipped.

---

## Step 1: Research gate

**Instruction given to agent**
> What already exists on the topic "AI and writing better code"? Is there a specific angle or audience that is underserved? Spend no more than 45 minutes.

**Output from agent**

- Most existing articles fall into two categories: (1) high-level hype pieces ("AI will replace developers"), or (2) tool-specific tutorials ("how to use Copilot")
- Very few address the *mindset and workflow shift* — not just the tools
- The audience most underserved: mid-level developers who already use AI tools but feel like they're not getting the full benefit
- Common complaint found in forums: "I use Copilot but I feel like I'm just accepting code I don't understand"
- Proposed angle: *using AI to write better code*, not *AI tools for coding* — the focus is on the developer getting better, not the tool being used

**Human decision**

The angle is real and underserved. The target reader has the tools — they need a mental model for using them intentionally. Proceed to Plan.

---

## Step 2: Plan phase

**Instruction given to agent**
> Using the research findings, write a Plan Brief for this article.

**Reference files**
- Research findings from Step 1

**Output from agent**

---

**Plan Brief**

**Problem**
Mid-level developers use AI coding tools but feel passive and dependent — they accept suggestions without fully understanding them, which erodes their own skills over time.

**Audience**
Mid-level developers who already use AI coding tools but feel they're not getting the full benefit.

**Goal**
Write a practical article that gives developers a mental model for using AI as a thinking partner, not a code generator.

**Appetite**
One focused writing session (half day). If the article can't be done in that, scope it down — not extend the time.

**Constraints**
- Target length: 1,000–1,500 words (long enough to be useful, short enough to be read)
- Must be practical, not theoretical — every point needs a concrete example
- No paywalled content, no product promotion
- Tool-agnostic: no specific AI tool named by name

**Success criteria**
- [ ] The article has a clear, testable argument (not just tips)
- [ ] Every section includes a concrete, copy-able example
- [ ] A mid-level developer who reads it can apply the main idea the same day
- [ ] No specific AI tool is mentioned by name

**Core assumption**
The developer already has AI tools. The problem is not adoption — it is knowing how to use them intentionally.

**Rabbit holes**
Do not compare AI tools or benchmark outputs — that is a different article.

**Out of scope**
- AI tool comparisons or recommendations
- Beginner intro to AI coding tools
- Opinion on whether AI will replace developers

---

**Human decision**

The brief is solid but the goal sentence is vague ("mental model" is abstract). Proceed to Plan Validation before writing.

---

## Step 3: Plan Validation gate

**Instruction given to agent**
> Read this Plan Brief. Tell me in your own words: what is this article about, what does it argue, and what would you cut if it had to be 20% shorter?

**Reference files**
- Plan Brief from Step 2

**Output from agent**

- "It's about using AI actively, not passively — like treating it as a pair programmer instead of autocomplete."
- "The argument is: most people are using AI reactively (accept/reject). There's a better way: proactive use."
- "I'd cut the constraint about not mentioning tools — it might make the examples feel vague."

**Human decision**

The agent's articulation of the argument ("reactive vs. proactive AI use") is sharper than what was in the Plan Brief. The tool-agnostic constraint stays — but it means examples need to be extra concrete to compensate. Update the brief before building.

**Changes made to Plan Brief:**
- Goal updated: *"Write a practical article that argues for proactive AI use over reactive AI use, and gives developers a concrete framework for the shift."*
- Added constraint: *"Examples must be code-level and specific, since no tool names will be used."*

Proceed to Build.

---

## Step 4: Build phase

**Instruction given to agent**
> Write the article according to this Plan Brief. The argument is reactive vs. proactive AI use. Every section needs a concrete code example. Target 1,000–1,500 words. No tool names.

**Reference files**
- Updated Plan Brief from Step 3
- Personal writing style guide (tone, sentence length preferences)

**Output from agent**

Draft produced with the following structure:
1. Hook: the "accept/reject" trap — why most developers are using AI reactively
2. Section 1: What reactive AI use looks like (code example: accepting a function you don't understand)
3. Section 2: What proactive AI use looks like (code example: using AI to explain, then improve, then own)
4. Section 3: A 3-question framework to run before accepting any AI output
5. Closing: the shift from AI as a shortcut to AI as a thinking partner

Draft came in at 1,650 words.

**Human decision — mid-build check**

The 3-question framework in Section 3 didn't exist in the Plan Brief — it emerged during writing. It serves the goal directly, so it stays. Plan Brief updated to reflect it as an addition to success criteria.

Cut 200 words from Section 2 (the "reactive" example was over-explained). Final word count: 1,440 — within range.

**Plan Brief updated:**
- Added to success criteria: *"The article includes a 3-question framework the reader can use immediately."*

Proceed to Ship.

---

## Step 5: Ship phase

**Instruction given to agent**
> Review the final draft against the Plan Brief. Confirm all success criteria are met. List anything that is not.

**Reference files**
- Final draft
- Plan Brief (updated)

**Output from agent**

| Success criterion | Status | Note |
|---|---|---|
| Clear, testable argument | Met | Reactive vs. proactive AI use — stated in paragraph 1 |
| Every section has a concrete example | Met | Two code examples, both copy-able |
| Applicable the same day | Met | 3-question framework is immediately usable |
| No specific AI tool named | Met | Confirmed — no tool names in the draft |
| 3-question framework included | Met | Section 3 |

Word count: 1,440. All constraints met.

**Human decision**

All criteria met. This goes live. Published to personal blog, added to newsletter, shared in the developer community where the original problem surfaced during Research.

Confirmed live: opened the URL in an incognito window. Article loads. Code examples render correctly.

---

## Learnings (captured for next cycle)

- The Plan Validation gate saved real time — the agent's reframing of the argument ("reactive vs. proactive") made the opening stronger before a word was written
- "Tool-agnostic" was the right call but created a constraint that required more concrete examples to compensate — factor this in earlier next time
- The 3-question framework emerged from the Build, not the Plan. This is normal (Build to learn). Updating the Plan Brief mid-build kept it honest
- Next cycle idea: a follow-up article specifically on the 3-question framework

---

## What this example demonstrates

| Principle | Where it showed up |
|-----------|--------------------|
| Clarity before action | Research gate prevented planning in the wrong direction |
| Build to learn | The 3-question framework emerged during writing, not planning |
| Reality is the only validator | Shipped at "good enough" — only publishing would show if the argument landed |
| Gates reduce cost, not momentum | Plan Validation caught a weak argument before hours of writing |
| The brief is your compass | Plan Brief was updated mid-build to stay honest |
| AI executes. Human decides. | At every gate, the human read the output and made the call — proceed, iterate, or cut |

---

## The full cycle at a glance

```
[Research] → Plan → [Plan Validation] → Build → Ship
```

Each arrow is a human decision: read the output, judge it, decide what comes next.

---

*Back to [solveOS →](../README.md)*
