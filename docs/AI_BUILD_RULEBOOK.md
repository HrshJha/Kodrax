You're actually at the point where **you should stop creating generic documents** and start creating **operational documents**.

If I were documenting this like Apple, Stripe, Vercel, Anthropic, or Linear, the next document would be the most valuable one for AI-assisted development:

# `AI_BUILD_RULEBOOK.md`

Not a prompt.

Not a README.

A **constitution** that every AI (Claude, Cursor, GPT, Gemini, Codex) must follow before touching your code.

---

# Why?

Imagine six months later you ask:

> "Add a photography section."

Without a rulebook, the AI may:

* change typography
* redesign the navbar
* remove animations
* change spacing
* add gradients
* add glassmorphism
* replace components

With a rulebook it knows

> **These are immutable.**

---

# Structure

```text
AI_BUILD_RULEBOOK.md

Part 1
Mission

Part 2
Project Vision

Part 3
Immutable Rules

Part 4
Allowed Changes

Part 5
Forbidden Changes

Part 6
Reading Order

Part 7
Decision Hierarchy

Part 8
Coding Rules

Part 9
Design Rules

Part 10
Motion Rules

Part 11
Content Rules

Part 12
Implementation Rules

Part 13
Review Checklist

Part 14
Definition of Done
```

---

# Part 1

Mission

Example

```text
You are not redesigning this portfolio.

You are implementing it.

Your responsibility is to preserve the creative vision while producing production-quality code.
```

---

# Part 2

Vision

```text
This portfolio is

Editorial

Cinematic

Minimal

Engineering-first

Storytelling-first

Everything must reinforce these values.
```

---

# Part 3

Immutable Rules

These can never change.

Example

```text
Exactly 4 projects.

Exactly 2 experiences.

Landing Reveal stays.

Cloud Hero stays.

Projects remain scroll storytelling.

Experience remains rotating cards.

Footer remains giant wordmark.

Dark theme.

One-page website.

No redesign without explicit approval.
```

---

# Part 4

Allowed Changes

AI may

Improve

Performance

Accessibility

SEO

Type safety

Folder organization

Code quality

Responsive layout

Loading strategy

---

# Part 5

Forbidden Changes

AI must never

Add sections.

Remove sections.

Rewrite content.

Invent achievements.

Replace images.

Change typography.

Change animation language.

Add libraries without approval.

Introduce UI trends.

Simplify interactions.

---

# Part 6

Reading Order

Every AI session begins by reading

```text
FOUNDATION.md

↓

PRD.md

↓

design.md

↓

scene-direction.md

↓

Motion Design System.md

↓

interaction-system.md

↓

component-spec.md

↓

design-assets.md

↓

ENGINEERING_ARCHITECTURE.md

↓

EXECUTION_PARTS.md
```

Never skip.

---

# Part 7

Decision Hierarchy

Example

```text
FOUNDATION

↓

PRD

↓

Design

↓

Motion

↓

Components

↓

Implementation
```

If two docs disagree

Higher wins.

---

# Part 8

Coding Rules

Example

```text
Strict TypeScript

No any

Reusable components

Accessibility first

Semantic HTML

No duplicated logic

No inline styles

No magic numbers

No unnecessary libraries
```

---

# Part 9

Design Rules

Example

```text
Whitespace is intentional.

Clouds exist only in Home.

No gradients unless specified.

No glowing borders everywhere.

No random animations.

No colorful icons.

Editorial typography only.
```

---

# Part 10

Motion Rules

Simply point to

Motion Design System.

Never redefine animations.

---

# Part 11

Content Rules

Exactly from your FOUNDATION:

* Never invent metrics.
* Never invent experience.
* Never exaggerate.
* Never rewrite in marketing language.
* Preserve technical accuracy.

---

# Part 12

Implementation Rules

Example

```text
Always preserve behavior.

Optimize only after correctness.

Maintain accessibility.

Do not replace architecture without approval.

Every major change must be justified.
```

---

# Part 13

Review Checklist

Before finishing, AI asks:

```text
Did I change the design?

Did I change typography?

Did I change spacing?

Did I break motion?

Did I invent content?

Did I reduce accessibility?

Did I reduce performance?

Did I preserve responsiveness?
```

---

# Part 14

Definition of Done

A task is complete only if:

* Requirements satisfied.
* Design preserved.
* Motion preserved.
* Accessibility passes.
* Performance maintained.
* No regressions.
* Code documented.
* Build succeeds.

---

# After this...

Your documentation is essentially **complete**.

You have moved from "notes" to an actual **design and engineering operating system**.

## I would stop there.

Instead of writing more documents, I'd begin implementing the portfolio and let future documentation arise only if you encounter real complexity (for example, documenting a custom scroll engine or media pipeline). Beyond this point, additional documents are likely to repeat information rather than add meaningful value.
