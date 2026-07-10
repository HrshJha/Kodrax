Now you should **stop writing design documents**.

You've already covered:

* ✅ FOUNDATION
* ✅ PRD
* ✅ Design
* ✅ Motion
* ✅ Component Spec
* ✅ Assets
* ✅ Scene Direction (planned)

The next document should not describe the website.

It should describe **how to build it**.

---

# `IMPLEMENTATION_GUIDE.md`

This is the document I would write next if I were leading the engineering team.

Think of it as the bridge between documentation and code.

---

# Structure

```text
IMPLEMENTATION_GUIDE.md

Part 1
Architecture

Part 2
Folder Structure

Part 3
Tech Stack

Part 4
Design Tokens

Part 5
Component Development Order

Part 6
Animation Implementation

Part 7
Performance

Part 8
SEO

Part 9
Accessibility

Part 10
Deployment

Part 11
Testing

Part 12
Code Standards
```

---

# Part 1

## Project Architecture

Example

```text
src/

app/

components/

hooks/

lib/

data/

types/

styles/

assets/
```

Nothing left to imagination.

---

# Part 2

## Folder Structure

Example

```text
components/

hero/

Hero.tsx

Hero.module.css

hero.types.ts

hero.constants.ts

hero.utils.ts
```

Every component.

---

# Part 3

## Tech Rules

Exactly

Next.js 16

Tailwind v4

Motion

TypeScript

ESLint

Prettier

No alternatives.

---

# Part 4

## Build Order

This is extremely important.

Never randomly build.

Order

```text
Layout

↓

Typography

↓

Hero

↓

Navigation

↓

Landing

↓

About

↓

Projects

↓

Experience

↓

Contact

↓

Footer

↓

Animations

↓

Optimization
```

---

# Part 5

## State Management

Do you need

Context?

Props?

Local state?

URL?

Global?

Everything documented.

---

# Part 6

## Component Dependencies

Hero depends on

Cloud Background

↓

Navigation

↓

Buttons

↓

Motion Tokens

Projects depend on

Timeline

↓

Media

↓

GitHub CTA

↓

Motion

Everything connected.

---

# Part 7

## Animation Implementation

Exactly

Which hook.

Which Motion component.

Where requestAnimationFrame lives.

How interpolation works.

How scroll progress works.

---

# Part 8

## Performance

Images

↓

AVIF

↓

WebP

↓

JPEG

Video

↓

WebM

↓

MP4

↓

Poster

Everything documented.

---

# Part 9

## SEO

Title

Description

Schema

OpenGraph

Twitter

robots.txt

Sitemap

Everything.

---

# Part 10

## Accessibility

ARIA

Tab order

Alt text

Reduced motion

Screen reader

Everything.

---

# Part 11

## Testing

Desktop

Tablet

Mobile

Chrome

Safari

Firefox

Edge

Lighthouse

Everything.

---

# Part 12

## Deployment

Vercel

Environment variables

Analytics

Domain

Everything.

---

# Final

At the end

```text
Build Checklist

Hero

☐

About

☐

Projects

☐

Experience

☐

Footer

☐

Animations

☐

Accessibility

☐

SEO

☐

Performance

☐

Deployment

☐
```

---

# Then there is only **ONE** document left.

This is the document almost nobody creates, but companies like Apple, Stripe, Vercel, and Linear effectively have internally.

# `DESIGN_DECISIONS.md`

Every important design choice is recorded.

Example

```text
Decision 001

Why Clouds?

Reason

Clouds communicate openness,
curiosity and calm.

Alternatives

Gradient

↓

Rejected

Reason

Too generic.

----------------------------------

Decision 002

Why only 4 projects?

Reason

Quality over quantity.

----------------------------------

Decision 003

Why remove Skills section?

Reason

Projects demonstrate skills better.

----------------------------------

Decision 004

Why two experiences?

Reason

Only meaningful experiences included.

----------------------------------

Decision 005

Why cinematic instead of SaaS?

Reason

Reflects filmmaking background.
```

After 6 months, you'll forget **why** you made these choices. `DESIGN_DECISIONS.md` preserves the reasoning so future revisions stay aligned with the original vision instead of drifting over time.

