export async function GET() {
  const pages = [
    {
      title: 'Introduction',
      url: '/docs/',
      section: 'Documentation',
      excerpt: 'solveOS is a problem-solving framework built for builders and makers. Plan, Build, Ship, Review.',
      keywords: 'introduction overview framework cycle phases gates'
    },
    {
      title: 'Why solveOS',
      url: '/docs/guide/',
      section: 'Guide',
      excerpt: 'Why solveOS exists — what it solves, the four failure modes it prevents, and the principles behind it.',
      keywords: 'why principles clarity action feedback loops context skip planning over-plan lose context never measure'
    },
    {
      title: 'How to Start Your First Cycle',
      url: '/docs/guide/how-to-start/',
      section: 'Guide',
      excerpt: 'A step-by-step guide to running your first solveOS cycle from Plan to Ship.',
      keywords: 'how to start first cycle steps guide plan build ship'
    },
    {
      title: 'Diverge and Converge',
      url: '/docs/concepts/diverge-converge/',
      section: 'Concepts',
      excerpt: 'The core mode-switching pattern in solveOS — when to open up possibilities and when to close down to a decision.',
      keywords: 'diverge converge modes explore decide brainstorm options narrow'
    },
    {
      title: 'Feedback Loops',
      url: '/docs/concepts/feedback-loops/',
      section: 'Concepts',
      excerpt: 'The two feedback loops in solveOS — the plan-tightening loop and the post-ship learning loop.',
      keywords: 'feedback loops plan validation review post-ship learning iterate cycle'
    },
    {
      title: 'Context',
      url: '/docs/concepts/context/',
      section: 'Concepts',
      excerpt: 'How to maintain context across a solveOS cycle — the Plan Brief as a living document.',
      keywords: 'context plan brief living document drift scope maintain'
    },
    {
      title: 'Phase: Plan',
      url: '/docs/phases/plan/',
      section: 'Phases',
      excerpt: 'Define the problem, audience, goal, constraints, and success criteria. Produces the Plan Brief.',
      keywords: 'plan phase brief problem audience goal constraints success criteria appetite rabbit holes out of scope'
    },
    {
      title: 'Phase: Build',
      url: '/docs/phases/build/',
      section: 'Phases',
      excerpt: 'Execute against the plan. Build with focus, handle blockers without derailing the cycle.',
      keywords: 'build phase execute work blockers scope drift mid-build check'
    },
    {
      title: 'Phase: Ship',
      url: '/docs/phases/ship/',
      section: 'Phases',
      excerpt: 'Put the result in the world. Ship to real people or real systems. Confirm it is live.',
      keywords: 'ship phase deploy publish live release confirm'
    },
    {
      title: 'Gate: Research',
      url: '/docs/gates/research/',
      section: 'Gates',
      excerpt: 'Understand the problem space before committing to a direction. Define a research question and time limit.',
      keywords: 'research gate question time limit findings five whys root cause domain explore'
    },
    {
      title: 'Gate: Plan Validation',
      url: '/docs/gates/plan-validation/',
      section: 'Gates',
      excerpt: 'Verify the plan is sound — and refine it until it is. Catches gaps before they become expensive.',
      keywords: 'plan validation gate refine loop gaps vague measurable feasible specific build from clarity'
    },
    {
      title: 'Gate: Build Validation',
      url: '/docs/gates/build-validation/',
      section: 'Gates',
      excerpt: 'Verify the output functions correctly and satisfies the success criteria before it goes live.',
      keywords: 'build validation gate functional check scope drift stability criteria pass fail partial'
    },
    {
      title: 'Gate: Review',
      url: '/docs/gates/review/',
      section: 'Gates',
      excerpt: 'Pre-ship: verify the result serves the original goal. Post-ship: measure outcomes and feed learnings into the next cycle.',
      keywords: 'review gate pre-ship post-ship outcome measure feedback learning loop close audience judgment'
    },
    {
      title: 'Examples',
      url: '/docs/examples/',
      section: 'Examples',
      excerpt: 'Full solveOS cycles from start to finish. Worked examples applied to real problems.',
      keywords: 'examples worked full cycle article feature software writing'
    },
    {
      title: 'Example: Writing a Technical Article',
      url: '/docs/examples/article/',
      section: 'Examples',
      excerpt: 'A full writing cycle — Research, Plan, Plan Validation, Build, Ship — applied to publishing a technical article.',
      keywords: 'example article writing technical blog publish reactive proactive AI code plan validation'
    },
    {
      title: 'Example: Building a Software Feature',
      url: '/docs/examples/feature/',
      section: 'Examples',
      excerpt: 'A backend performance fix — Research through Plan Validation, Build, Build Validation, Review pre and post-ship.',
      keywords: 'example feature software backend performance fix database index analytics dashboard build validation review'
    }
  ];

  return new Response(JSON.stringify(pages), {
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
