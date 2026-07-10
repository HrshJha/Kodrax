The next document should be **`component-spec.md`**.

Not a summary. A **production-grade component specification** that a frontend engineer can implement without guessing.

This becomes the bridge between:

* PRD (what to build)
* Design (how it looks)
* Motion (how it moves)
* Code (how it's implemented)

---

# component-spec.md

```markdown
# Component Specification

Version: 1.0

Project

Harsh Kumar Jha Portfolio

Purpose

This document defines every component used throughout the portfolio.

Every component has one purpose.

Every property is documented.

Every interaction is documented.

Every animation references Motion Design System.

Every visual rule references design.md.

No implementation decision should require guessing.

This document is the engineering blueprint for the UI.
```

---

# Component Template

Every component follows exactly this format.

```
Component Name

Purpose

Location

Dependencies

Inputs

Outputs

States

Layout

Typography

Spacing

Colors

Animations

Interactions

Responsive Behaviour

Accessibility

Performance

Error States

Future Improvements

Developer Notes
```

---

# Component List

## C-001

Landing Overlay

Contains

* Black overlay
* Oval aperture
* Background mask

Purpose

Create curiosity before entering Home.

---

## C-002

Hero

Contains

* Name
* Tagline
* CTA
* Social links

Purpose

Introduce Harsh.

---

## C-003

Navbar

Contains

* About
* Projects
* Experience
* Contact

States

Default

Hover

Active

Scrolled

---

## C-004

Cloud Background

Purpose

Atmosphere.

Properties

Image

Opacity

Gradient

Noise

Parallax

Animation

---

## C-005

About Section

Contains

Portrait

Biography

Education

Current Focus

Tech Stack

---

## C-006

Ghibli Portrait

Purpose

Humanize portfolio.

States

Loading

Loaded

Error

Hover

---

## C-007

Current Focus Cards

Contains

AI

ML

Backend

Filmmaking

Properties

Icon

Title

Description

---

## C-008

Projects Container

Purpose

Hold

4 Projects.

Behavior

Sticky.

Scroll controlled.

---

## C-009

Project Card

This becomes huge.

Contains

Title

Problem

Solution

Architecture

Tech Stack

Video

GitHub

Status

Animation

Everything.

---

## C-010

Timeline

Contains

Nodes

Progress

Labels

Current indicator

---

## C-011

Project Media

Supports

Image

Video

GIF

States

Loading

Playing

Paused

Error

---

## C-012

GitHub CTA

States

Default

Hover

Focus

Visited

Disabled

---

## C-013

Experience Container

Contains

Two cards.

---

## C-014

Experience Card

Contains

Company

Role

Duration

Responsibilities

Technologies

Links

Animation

Rotation

Perspective

Exit

---

## C-015

Contact

Contains

Heading

Description

Email

GitHub

LinkedIn

CTA

---

## C-016

Footer

Contains

Wordmark

Social

Back to Top

---

## C-017

Section Progress Navigation

Contains

Current section

Progress

Links

---

## C-018

Buttons

Every button.

Shared specification.

---

## C-019

Links

Shared specification.

---

## C-020

Typography

Shared specification.

---

## C-021

Icons

SVG behavior.

---

## C-022

Cursor

Desktop only.

---

## C-023

Film Grain Layer

Properties

Opacity

Blend mode

Animation

---

## C-024

Background Glow

Properties

Blur

Gradient

Opacity

---

## C-025

Loading Screen

If added later.

---

# Every Component Should Have

For example

```
Component

Project Card

Purpose

Present one project
as a complete engineering story.

Dependencies

Timeline

Project Media

GitHub CTA

Inputs

Title

Description

Media

GitHub URL

Tech Stack

Architecture

Outputs

Rendered Project

Animation Events

States

Loading

Visible

Active

Leaving

Hidden

Layout

Split

50/50

Desktop

Stacked

Mobile

Spacing

80px

Desktop

48px

Tablet

32px

Mobile

Animations

See

Motion Design System

Part 5

Interactions

Hover

None

Scroll

RAF

Click

GitHub

Responsive

Desktop

Sticky

Tablet

Sticky

Mobile

Vertical

Accessibility

Keyboard

Tab

Screen Reader

ARIA labels

Alt text

Reduced Motion

Supported

Performance

One playing video

GPU transforms only

Error

Missing image

↓

Fallback

Missing video

↓

Thumbnail

Developer Notes

Never make this a carousel.
```

---

# File Hierarchy

```
component-spec.md

↓

25 Components

↓

Each Component

↓

15 Sections

↓

~250–300 pages
```

---

## After this, your documentation stack is essentially complete.

```
FOUNDATION.md
        │
PRD.md
        │
design.md
        │
scene-direction.md
        │
Motion Design System.md
        │
interaction-system.md
        │
component-spec.md
        │
design-assets.md
        │
EXECUTION_PARTS.md
```

### My final recommendation

At this point, **stop creating new document types**. You have enough architecture.

From here onward, invest your time in **making these documents exceptionally detailed**, rather than adding more files. A small set of comprehensive, internally consistent documents is far more valuable than a large collection of overlapping specifications.
