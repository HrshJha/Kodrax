PART 1 — Motion Philosophy & Global Principles
# Motion Design System
Version 1.0

Project:
Harsh Kumar Jha Portfolio

Status:
Draft v1.0

Author:
Harsh Kumar Jha

Purpose

This document defines every movement, transition, animation and interaction used throughout the portfolio.

The purpose of motion is not decoration.

Motion exists to guide attention, communicate hierarchy, connect sections together, and make navigation feel intentional.

Every animation must have a purpose.

If an animation cannot justify its existence, it should not exist.

This document is the single source of truth for all motion throughout the website.

Nothing should move unless specified here.

---
1. Motion Philosophy
1.1 Core Idea

The portfolio should never feel like a website.

It should feel like entering a carefully directed film.

The visitor should never think

"Nice animation."

Instead they should think

"That transition felt natural."

Motion should disappear into the experience.

It supports the story.

It never becomes the story.

1.2 Emotional Direction

Every movement should create one of these emotions.

Curiosity

Landing animation.

Visitor sees almost nothing.

They naturally scroll.

Discovery

Zoom reveal.

The world slowly opens.

Nothing appears instantly.

Confidence

Projects.

Animations become more structured.

Everything moves deliberately.

Nothing shakes.

Nothing bounces.

Reflection

Footer.

Movement slows.

Animations become minimal.

The experience quietly ends.

1.3 Motion Hierarchy

Not every object deserves movement.

Priority determines animation strength.

Level 1

Most important.

Examples

Hero title

Project media

Experience cards

Section transitions

These receive the largest animations.

Level 2

Supporting elements.

Examples

Descriptions

Buttons

Navigation

Timeline

Subtle movement only.

Level 3

Decorative elements.

Examples

Background particles

Cloud drift

Film grain

Cursor glow

These should almost disappear.

If users consciously notice them,

they are too strong.

1.4 Motion Rules

Every animation must answer

Why is this moving?

Acceptable answers

It guides attention.
It explains hierarchy.
It communicates progress.
It connects two scenes.
It provides feedback.

Unacceptable answers

It looks cool.
It fills empty space.
Everyone else does it.
It makes the page feel alive.

If the reason is decorative only,

remove it.

2. Design Personality

The motion language should communicate

Calm

Precision

Confidence

Engineering

Editorial quality

Cinematic storytelling

Never

Energy

Chaos

Excitement

Aggression

Gaming

Cyberpunk

The visitor should feel

"I'm reading something important."

not

"I'm watching a demo reel."

3. Motion Characteristics

All movement should feel

Heavy

Deliberate

Smooth

Continuous

Controlled

Nothing should feel

Elastic

Rubbery

Bouncy

Floaty

Chaotic

4. Animation Vocabulary

Throughout the website only the following motion types are allowed.

Fade

Opacity transition.

Primary animation.

Translate

Movement along X or Y.

Should rarely exceed

40 px.

Scale

Very subtle.

Typical values

95%

98%

100%

102%

Never

120%

150%

200%

Blur

Used only during transitions.

Never permanent.

Rotate

Only

Experience cards.

Maximum

12°

Never spin.

Parallax

Used only

Home clouds.

Movement ratio

Very small.

The visitor should almost not notice.

Crossfade

Primary media transition.

Projects.

Videos.

Images.

Mask Reveal

Landing animation.

Oval expansion.

Never reused elsewhere.

This makes the landing memorable.

5. Motion Consistency

The entire website should feel like one director created every transition.

No section should introduce a completely different animation language.

Every transition should feel related.

The visitor should subconsciously understand

"this belongs to the same website."

6. Things Motion Must Never Do

Never bounce.

Never overshoot.

Never wobble.

Never rotate randomly.

Never shake.

Never pulse aggressively.

Never flash.

Never strobe.

Never animate every object simultaneously.

Never animate just because scrolling happened.

Never distract from reading.

Never compete with typography.

Never become the center of attention.

7. Visual Inspirations

Motion should feel similar to

Apple Product Pages

Linear

Vercel

Stripe Sessions

Rive Showcase

Not because they are popular,

but because they prioritize clarity over spectacle.

8. Performance Philosophy

Performance is part of the design.

Dropped frames are considered broken design.

Target

60 FPS

No exceptions.

If an animation causes frame drops,

the animation is removed,

not optimized endlessly.

Smoothness is more important than complexity.

9. Accessibility Philosophy

Motion should never exclude users.

If the operating system requests reduced motion,

replace

Movement

with

State changes.

The experience should remain beautiful,

without relying on animation.

10. Final Principle

The visitor should remember

the projects,

the photography,

the storytelling,

and the atmosphere.

They should not remember

the animations.

When motion becomes noticeable,

it has already failed.
# Motion Design System
## Part 2 — Global Motion Tokens

Version: 1.0

---

# Purpose

This document defines every reusable motion token used throughout the portfolio.

Instead of manually choosing animation values every time, every component references these predefined tokens.

Motion should behave like typography or colors.

Consistent.

Predictable.

Reusable.

Nothing should invent new values unless absolutely necessary.

---

# 1. Animation Timing Scale

Instead of random durations, the website follows a timing scale.

| Token | Duration | Usage |
|--------|----------|------|
| Instant | 0ms | State changes only |
| XXS | 120ms | Cursor feedback |
| XS | 180ms | Small hover effects |
| S | 280ms | Button hover |
| M | 420ms | Fade transitions |
| L | 650ms | Component entrance |
| XL | 900ms | Section transition |
| XXL | 1200ms | Hero zoom reveal |
| Cinematic | 1600ms | Large scene changes |

Rule:

Never invent durations like

537ms

812ms

1327ms

Choose from the scale.

---

# 2. Delay Scale

Animations should cascade.

Never everything at once.

| Token | Delay |
|--------|-------|
| D0 | 0ms |
| D1 | 60ms |
| D2 | 120ms |
| D3 | 180ms |
| D4 | 240ms |
| D5 | 300ms |

Example

Heading

↓

Description

↓

Button

↓

Metadata

Each starts one token later.

---

# 3. Easing Tokens

The portfolio uses only four easing curves.

---

## Standard

easeOutCubic

Usage

Most UI elements.

---

## Gentle

easeInOut

Usage

Section transitions.

---

## Smooth

easeOutQuart

Usage

Hero animations.

---

## Linear

linear

Usage

Progress bars

Cursor tracking

Parallax

Cloud drift

Never use

Bounce

Elastic

Back

Spring

---

# 4. Opacity Tokens

Never manually choose opacity.

Use tokens.

| Token | Value |
|--------|------|
| Hidden | 0 |
| Soft | 0.2 |
| Low | 0.35 |
| Medium | 0.6 |
| High | 0.8 |
| Full | 1 |

---

# 5. Scale Tokens

Used for reveal animations.

| Token | Scale |
|--------|-------|
| Tiny | 0.95 |
| Small | 0.98 |
| Default | 1 |
| Hover | 1.02 |
| Focus | 1.04 |

Never exceed

1.05

unless explicitly documented.

---

# 6. Rotation Tokens

Used almost exclusively for Experience cards.

| Token | Degrees |
|--------|----------|
| Small | 4° |
| Medium | 8° |
| Large | 12° |

Never rotate

15°

20°

45°

90°

This portfolio is not playful.

---

# 7. Blur Tokens

Blur exists only during transitions.

| Token | Value |
|--------|-------|
| None | 0px |
| Light | 4px |
| Medium | 8px |
| Heavy | 12px |

Maximum

12px.

---

# 8. Shadow Tokens

Shadows communicate elevation.

Never realism.

| Token | Purpose |
|--------|----------|
| Flat | None |
| Soft | Cards |
| Floating | Hero media |
| Elevated | Active project |

Shadows should never become dark blobs.

---

# 9. Parallax Tokens

Only Home uses parallax.

Cloud Background

Speed

0.08x

Foreground Clouds

0.15x

Typography

0x

Navigation

0x

The visitor should barely notice movement.

---

# 10. Scroll Progress Tokens

Every section transition references scroll progress.

| Progress | State |
|----------|------|
| 0% | Hidden |
| 20% | Fade begins |
| 50% | Primary motion |
| 80% | Settle |
| 100% | Static |

No animation should suddenly appear.

Everything is tied to scroll.

---

# 11. Cursor Motion Tokens

Desktop only.

Hover

Scale

1.02

Glow

15%

Follow Lag

80ms

Never

Magnetic

Stretch

Morph

Liquid cursor

Gaming cursor

---

# 12. Hover Tokens

Hover is intentionally understated.

Buttons

Opacity

↓

95%

Scale

↓

1.02

Links

Underline

↓

Fade

Cards

Shadow

↓

Increase

Nothing jumps.

---

# 13. Entrance Tokens

Every section enters using one of three patterns.

Pattern A

Fade

+

Translate Y

16px

↓

0px

Used

About

Contact

Footer

---

Pattern B

Fade

+

Scale

95%

↓

100%

Used

Portrait

Project media

---

Pattern C

Crossfade

Used

Projects

Media

Timeline

---

# 14. Exit Tokens

Exit animation should always be weaker than entrance.

Rule

People notice entrances.

They rarely notice exits.

Fade

↓

Opacity

Translate

↓

12px

Duration

↓

420ms

---

# 15. Stagger Rules

Never animate every child simultaneously.

Example

Heading

↓

80ms

↓

Paragraph

↓

80ms

↓

Button

↓

80ms

↓

Metadata

The page should "breathe."

---

# 16. Idle Motion

Idle motion exists only in three places.

Home Clouds

Very slow drift

Cursor Glow

Very slow pulse

Film Grain

Constant

Nothing else should move when the user is idle.

---

# 17. Scroll Engine Rules

Scrolling drives animation.

Not time.

Every pixel of scroll updates the scene.

There is no snapping.

There is no page-by-page movement.

Everything interpolates continuously.

---

# 18. Animation Budget

Maximum simultaneous animated elements

Desktop

8

Tablet

6

Mobile

4

If more than this move together,

reduce motion.

---

# 19. Motion Consistency Checklist

Before adding any animation ask

Does a token already exist?

If yes,

use it.

Do not invent new durations,

new easing,

new scales,

or new blur values.

---

# 20. Final Rule

Every future component

Hero

Projects

Experience

Footer

must reference these motion tokens.

This document becomes the foundation of the entire motion system.

No component is allowed to define its own animation language.
# Motion Design System
## Part 3 — Landing Sequence, Scroll Reveal & Hero Choreography

Version 1.0

---

# Purpose

The opening sequence establishes the emotional tone of the portfolio.

The objective is not to impress with animation.

The objective is to make the visitor curious enough to scroll.

The landing sequence should feel like someone slowly opening the curtains of a theatre before the film begins.

The transition must never feel like navigating between pages.

It should feel like entering another world.

---

# Overall Sequence

Website Opens

↓

Landing State

↓

User Pauses

↓

First Scroll

↓

Oval Expands

↓

Camera Pushes Forward

↓

Cloud Scene Appears

↓

Hero Content Reveals

↓

Idle Home State

---

# Scene 01 — Initial Landing State

Duration

Infinite

Until user interaction.

Purpose

Create curiosity.

Visual Composition

90% negative space.

Only one visual element is immediately visible.

The oval aperture.

Everything else is intentionally hidden.

---

Background

Entire viewport is dark.

No gradients.

No patterns.

No particles.

No visible UI.

The darkness should feel clean.

Not empty.

---

Oval Aperture

Position

Center of viewport.

Shape

Soft oval.

Not perfectly circular.

Width

Approximately 14–18% of viewport.

Height

Approximately 8–10% of viewport.

Edges

Soft feather.

Never hard cut.

---

Visible Through Aperture

Only a tiny portion of the cloud scene.

Visitor cannot understand what they're looking at.

This uncertainty is intentional.

---

Typography

Optional.

If present

Keep extremely small.

Example

HARSH KUMAR JHA

12–14px

Low opacity.

Do not reveal title yet.

---

Navigation

Hidden.

---

Scroll Indicator

Hidden.

---

Mouse Cursor

Default.

No glow.

No interaction.

---

Ambient Motion

Only the clouds inside the oval move.

Speed

Extremely slow.

Almost imperceptible.

Clouds should never loop noticeably.

---

Scene Goal

Visitor thinks

"What am I looking at?"

---

# Waiting State

If the visitor waits

Nothing dramatic happens.

Only

Cloud movement.

Very subtle lighting shift.

No text animation.

No breathing effects.

No floating UI.

---

# First Scroll Detection

Trigger

First downward scroll.

Desktop

Mouse wheel.

Trackpad.

Keyboard.

Mobile

Touch drag.

Threshold

Very small.

Around 20–30 pixels.

The reveal should begin immediately.

---

# Scene 02 — Oval Expansion

Purpose

Transition into the homepage.

Animation Duration

Approximately

1000–1200ms

Driven by scroll.

Not time.

If user scrolls slowly

Animation slows.

If user scrolls quickly

Animation accelerates.

---

Oval Behaviour

Width

15%

↓

100%

Height

10%

↓

100%

Corners

Remain smooth.

Never become a sharp rectangle.

---

Opacity

Dark overlay

100%

↓

0%

Smooth fade.

---

Camera Motion

Feels like

Moving through the opening.

Never

Zooming a camera lens.

Motion should feel physical.

Not digital.

---

Cloud Scaling

Cloud image

102%

↓

100%

Very slight.

Avoid dramatic zoom.

---

Blur

Landing

4px

↓

0px

Never more than 4px.

---

Noise

Film grain remains constant.

It should never animate independently.

---

# Scene 03 — Home Reveal

Once expansion reaches roughly 60%

Hero content begins appearing.

Never before.

---

Reveal Order

Navigation

↓

Hero Name

↓

Headline

↓

Description

↓

CTA

↓

Scroll Indicator

Every element follows stagger timing.

Nothing appears simultaneously.

---

Navigation

Fade

0

↓

100

Translate

-8px

↓

0

Duration

420ms

---

Hero Name

Fade

Translate

12px

↓

0

Delay

80ms

---

Headline

Primary focus.

Largest typography.

Animation

Opacity

0

↓

100

Translate

20px

↓

0

Duration

650ms

This should feel confident.

Not dramatic.

---

Description

Fade.

Translate.

Smaller movement.

Purpose

Support the headline.

Not compete.

---

CTA

Appears last.

Scale

98%

↓

100%

Opacity

0

↓

100

Hover animation begins only after entrance completes.

---

Scroll Indicator

Appears last.

Very low opacity.

Purpose

Suggest continuation.

Never flash.

---

# Final Home State

Landing animation complete.

Cloud scene fully visible.

Navigation active.

Hero fully readable.

Scroll continues naturally.

No further entrance animation repeats.

---

# Leaving Home

When About section approaches

Cloud theme begins disappearing.

Clouds fade naturally.

Typography exits.

No reverse zoom.

No collapse animation.

The visitor should simply feel like they're moving forward.

Never backward.

---

# Behaviour on Refresh

Always begin from Landing State.

The opening sequence is part of the identity.

It is not skipped.

---

# Behaviour on Back Navigation

If user returns

Replay landing.

Maintain consistency.

---

# Mobile Behaviour

Same sequence.

Reduced scale.

Simpler motion.

No excessive blur.

No heavy masking.

Prioritize smooth performance.

---

# Reduced Motion

If operating system requests

Reduced Motion

Replace

Oval expansion

with

Simple fade.

Replace

Camera movement

with

Opacity transition.

Cloud image appears immediately.

The experience remains understandable.

Accessibility overrides aesthetics.

---

# Success Criteria

A first-time visitor should experience the following emotions.

Curiosity.

↓

Discovery.

↓

Calm.

↓

Confidence.

If the visitor notices the animation before noticing the content,

the animation is too strong.

The reveal is successful only when it feels inevitable.
# Motion Design System
## Part 4 — Home Motion System

Version 1.0

---

# Purpose

The Home section is not designed to impress.

It is designed to establish identity.

Everything on this screen should communicate confidence through restraint.

The visitor should immediately understand who Harsh Kumar Jha is without being overwhelmed by movement.

Motion should become almost invisible.

The clouds are the hero.

The typography is the guide.

The animation is only the glue connecting both.

---

# Home State

Landing animation has completed.

The visitor is now inside the homepage.

Everything has settled.

There should be no large movement anymore.

The page enters an idle state.

---

# Visual Hierarchy

Priority 1

Cloud Background

↓

Priority 2

Hero Typography

↓

Priority 3

Navigation

↓

Priority 4

Supporting Information

↓

Priority 5

Decorative Elements

Every animation must respect this hierarchy.

Nothing should steal attention from the clouds.

---

# Cloud Behaviour

Purpose

The clouds make the homepage feel alive.

They are not decorative.

They define the atmosphere.

---

Movement

Very slow.

Continuous.

Almost impossible to consciously notice.

Direction

Left

↓

Right

or

Bottom

↓

Top

Never diagonal.

Never looping obviously.

---

Speed

Approximately

8–15 pixels every 10 seconds.

Anything faster immediately feels fake.

---

Parallax

Clouds should exist on three depth layers.

Background Layer

Moves

0.05×

Middle Layer

Moves

0.10×

Foreground Layer

Moves

0.15×

Typography

0×

Navigation

0×

Clouds move.

UI does not.

---

# Film Grain

Film grain is static.

It should not visibly animate.

Opacity

3–5%

Purpose

Break digital perfection.

Nothing more.

---

# Hero Typography

Typography is the second focal point.

It should remain perfectly still after entering.

Never float.

Never breathe.

Never pulse.

Stillness creates confidence.

---

Heading

HARSH KUMAR JHA

Maximum visual weight.

No animation after entrance.

---

Headline

Example

Building Intelligent Systems.

Motion

None.

Remain fixed.

---

Description

Readable.

Maximum

2–3 lines.

Never animate while idle.

---

CTA

Primary Button

View Projects

Hover only.

No idle animation.

---

# Navigation

Purpose

Orientation.

Not decoration.

---

Idle State

Static.

---

Hover

Opacity

100%

↓

80%

Underline

Fades in.

Duration

180ms.

No sliding.

No bouncing.

---

Active Section

Very subtle indicator.

Thin line.

No glowing pills.

---

# Cursor

Desktop only.

---

Normal

Default cursor.

---

Hovering CTA

Scale

1.02

Opacity

95%

Duration

180ms.

---

Hovering Links

Underline fade.

Nothing else.

---

Hovering Empty Space

Nothing happens.

The website should not chase the cursor.

---

# Scroll Indicator

Purpose

Invite exploration.

Not demand it.

---

Animation

Small vertical drift.

4px.

Every

3–4 seconds.

No looping arrows.

No bouncing.

No flashing.

---

Opacity

30%

↓

50%

↓

30%

Very slow.

---

# Home Scroll Behaviour

As the visitor scrolls

Clouds continue moving.

Typography remains readable.

No dramatic transformations occur.

The Home section should never feel unstable.

---

# Leaving Home

This transition is critical.

The cloud atmosphere should end naturally.

Never abruptly disappear.

---

Timeline

Home

100%

↓

Cloud opacity

90%

↓

Cloud opacity

70%

↓

Cloud opacity

40%

↓

About begins appearing

↓

Clouds disappear completely

There should be overlap.

Never a hard cut.

---

# Transition to About

The About section should gradually replace Home.

Typography

Fades.

Clouds

Fade.

Background

Darkens.

New color palette appears.

Everything feels like entering another chapter.

Not another webpage.

---

# Responsive Behaviour

Desktop

Full experience.

Tablet

Reduce parallax.

Mobile

Single cloud layer.

No multiple depth calculations.

Typography scales.

Motion remains smooth.

Performance always wins over visual complexity.

---

# Accessibility

Reduced Motion

Cloud drift removed.

Parallax removed.

Scroll indicator becomes static.

Typography appears immediately.

Cloud image remains.

Identity remains.

---

# Performance Budget

Maximum animated properties

Cloud transform

Opacity

Nothing else.

Never animate

Width

Height

Top

Left

Margins

Use transforms only.

---

# Things Home Must Never Do

Never autoplay video.

Never play music.

Never use floating particles.

Never use animated grids.

Never use radar scans.

Never rotate text.

Never pulse the heading.

Never blur the entire screen.

Never overload the sky with UI.

The clouds are already enough.

---

# Success Criteria

The visitor should experience

Silence.

Space.

Calm.

Confidence.

If someone describes the homepage as

"minimal"

"editorial"

"cinematic"

"peaceful"

then the motion system has succeeded.

If they describe it as

"flashy"

"cool"

"crazy"

"animated"

then the motion system has failed.

The homepage should feel timeless, not trendy.
# Motion Design System
## Part 5 — Projects Motion System

Version 1.0

---

# Purpose

The Projects section is the heart of the portfolio.

Every interaction on this page exists for one purpose:

Tell the story behind the engineering.

The visitor should never feel like they are browsing cards.

They should feel like they are reading chapters of a book.

Each project is a chapter.

Each scroll advances the story.

Every pixel of scrolling moves the narrative forward.

---

# Philosophy

Most portfolios ask

"What projects have you built?"

This portfolio answers

"How do you solve problems?"

The emphasis is not on screenshots.

The emphasis is on thinking.

The technology proves itself naturally.

---

# Project Structure

Exactly four projects.

No more.

No less.

Every project follows the same narrative.

Problem

↓

Motivation

↓

Solution

↓

Architecture

↓

Demo

↓

Impact

↓

GitHub

Consistency builds trust.

---

# Screen Layout

Desktop

Split layout.

Left

Content

Right

Media

Both remain sticky.

Scrolling changes their contents.

Nothing jumps.

---

# Sticky Behaviour

The sticky region begins once the visitor enters the Projects section.

Until the section ends

Both columns remain fixed.

Only their contents transition.

This creates the feeling that the visitor is reading one continuous story.

---

# Scroll Engine

The scroll engine is continuous.

No snapping.

No pagination.

No "Next Project" button.

Every pixel contributes to the animation.

Motion is driven by RAF.

Never CSS scroll snapping.

---

# Scroll Timeline

Each project occupies approximately

120–150vh

This gives enough room for

Reading

Watching

Understanding

Scrolling should never feel rushed.

---

# Project Timeline

Each project progresses through six states.

State 1

Introduction

↓

State 2

Problem

↓

State 3

Solution

↓

State 4

Architecture

↓

State 5

Demo

↓

State 6

Impact

↓

Exit

Only one state is dominant at any time.

---

# Left Column Behaviour

Contains

Title

Description

Problem

Architecture

Technologies

GitHub

The left column never changes position.

Only its content fades between states.

---

# Right Column Behaviour

Contains

Image

Video

Architecture

UI

Terminal

Media transitions through crossfades.

Never slides.

Never flips.

Never rotates.

---

# Media Behaviour

Every project has one primary media.

Priority

Video

↓

Architecture

↓

Screenshot

↓

Illustration

If video exists

Play silently.

Loop.

Pause when leaving project.

Never autoplay audio.

---

# Crossfade Rules

Old media

Opacity

100

↓

0

New media

Opacity

0

↓

100

Duration

650ms

There should never be a blank frame.

---

# Timeline

A vertical timeline appears beside the content.

Each project owns one node.

Active project

Filled.

Inactive

Outline only.

Progress between nodes fills continuously with scroll.

Never step-by-step.

---

# Active Indicator

The active project receives

Small glow

Subtle pulse

Once every

3 seconds

Never continuously.

---

# Cursor Behaviour

Desktop only.

When hovering media

Very subtle border glow.

Glow follows cursor.

Maximum opacity

15%.

Cursor never changes shape.

---

# Anime Video Behaviour

Every project includes one cinematic background clip.

Purpose

Create emotional context.

Not explain functionality.

Rules

Muted.

Loop.

Cover mode.

Low contrast.

Never distract from content.

The project remains the focus.

---

# Typography Motion

Project Title

Fade

↓

Translate Y

12px

↓

Static

Description

Fade

↓

Translate

8px

↓

Static

Metadata

Staggered reveal.

---

# Architecture Section

When entering

Architecture

The media transitions

Video

↓

Diagram

Diagram remains until the next state begins.

---

# GitHub CTA

Appears only near the end.

Purpose

Reward exploration.

Not immediately invite users away.

Hover

Underline

↓

Fade

No scaling.

---

# Project Exit

As the visitor approaches the next project

Current media begins fading.

Timeline progresses.

Text opacity decreases.

Next project begins appearing.

There should never be a hard transition.

For a brief moment

Both projects coexist.

---

# Between Projects

There is intentional breathing space.

Approximately

10–15vh

This prevents cognitive overload.

---

# Last Project

The final project should feel complete.

No abrupt ending.

Timeline reaches

100%.

Media gently fades.

The Experience section begins emerging beneath.

---

# Mobile Behaviour

Sticky layout removed.

Projects become vertical.

Story order remains identical.

Problem

↓

Solution

↓

Architecture

↓

Demo

↓

Impact

No cursor effects.

No complex parallax.

Videos become tap-to-play if necessary.

---

# Accessibility

Reduced Motion

Remove

Crossfades

Parallax

Cursor glow

Timeline animation

Keep

Static media

Readable text

GitHub links

The narrative remains unchanged.

---

# Performance Rules

Maximum

One playing video.

Maximum

Two animated elements simultaneously.

Media loads lazily.

Preload only

Current

Next

Never preload all four videos.

---

# Things This Section Must Never Do

Never use carousels.

Never use sliders.

Never autoplay sound.

Never animate code.

Never rotate media.

Never bounce timeline.

Never make users click Next.

Never interrupt scrolling.

Never make text unreadable over videos.

Never sacrifice readability for visual effects.

---

# Success Criteria

After finishing this section

The visitor should remember

The engineering process.

Not the animation.

The animation succeeds only if it becomes invisible.

The projects must feel like reading a beautifully designed technical case study rather than browsing a portfolio gallery.
# Motion Design System
## Part 6 — Experience Motion System

Version 1.0

---

# Purpose

The Experience section exists to establish credibility.

Projects answer

"What can he build?"

Experience answers

"Has he applied these skills in real environments?"

Unlike Projects, this section should move faster.

The visitor has already invested time understanding the work.

Now they only need confidence.

The interaction should feel like flipping through premium editorial cards rather than reading another long story.

---

# Section Overview

Exactly two experience cards.

Nothing else.

1. MathonGo

↓

2. DomAIyn Labs LLP

No certifications.

No volunteering.

No clubs.

No achievements.

No timeline stretching back years.

The section is intentionally short.

---

# Visual Goal

Imagine holding two thick premium paper cards.

As you scroll,

one slides above the other.

The previous card quietly leaves.

The next card naturally takes focus.

Nothing spins.

Nothing flies.

Nothing bounces.

---

# Layout

Desktop

Centered stack.

Only one card is fully readable.

The next card waits underneath.

---

Tablet

Same interaction.

Reduced spacing.

---

Mobile

Cards become vertical.

Rotation removed.

Only fade transitions remain.

---

# Card Dimensions

Width

Approximately

65–75% viewport width.

Height

70–80vh.

Enough room to breathe.

Never fill the screen.

Negative space is important.

---

# Card Composition

Each card contains

Company

↓

Role

↓

Duration

↓

Description

↓

Responsibilities

↓

Technologies

↓

Optional Link

Everything follows the same hierarchy.

No decorative elements.

---

# Scroll Behaviour

Entering Experience

Projects fade naturally.

First card begins appearing.

No abrupt scene cut.

---

Scroll Phase 1

MathonGo becomes active.

Second card remains hidden beneath.

---

Scroll Phase 2

Second card slowly lifts.

Perspective rotation begins.

First card starts losing focus.

---

Scroll Phase 3

Cards overlap briefly.

This overlap creates continuity.

The visitor should never feel one card disappears before another exists.

---

Scroll Phase 4

DomAIyn Labs becomes active.

MathonGo exits.

Only one card remains.

---

# Rotation

Rotation exists only during transition.

Maximum

8°

Never exceed

12°.

Rotation stops immediately once the card becomes active.

The resting position is always perfectly flat.

---

# Perspective

Perspective should feel realistic.

Like lifting a printed card.

Never dramatic.

Never exaggerated.

Avoid

3D showcase effects.

The interaction should remain elegant.

---

# Elevation

Only the active card casts a shadow.

Inactive cards remain flatter.

This naturally directs attention.

---

# Opacity

Active

100%

Previous

75%

Hidden

0%

Opacity changes gradually.

Never instantly.

---

# Blur

Only inactive cards receive

4px

blur.

Active card

0px.

Blur should help hierarchy.

Not become an effect.

---

# Card Entrance

Animation

Fade

↓

Translate Y

↓

Small Rotation

↓

Flat

↓

Static

Everything settles before reading begins.

---

# Card Exit

Fade

↓

Translate

↓

Opacity

↓

Hidden

No dramatic exit.

Cards quietly leave.

---

# Typography Motion

Company

Appears first.

Role

80ms later.

Description

80ms later.

Technologies

80ms later.

Everything follows the same stagger tokens.

---

# Technology Chips

No animation while idle.

Hover

Small opacity change.

Nothing more.

---

# Company Logos

Fade only.

No scaling.

No spinning.

No glow.

Brand identity should remain respected.

---

# Link Behaviour

If a company links to a related project

Underline appears.

Opacity increases.

No scaling.

No button effects.

---

# Background Behaviour

Background remains static.

No moving particles.

No gradients changing.

The motion belongs to the cards.

Not the environment.

---

# Transition from Projects

Projects begin disappearing.

Timeline reaches completion.

Media fades.

Experience cards slowly rise.

This transition should feel like

moving from

"What was built"

to

"Where it was built."

---

# Transition to Contact

Second card slowly fades.

Spacing increases.

Contact section begins appearing beneath.

No card collapse.

No reverse animation.

Simply continue scrolling.

---

# Mobile Behaviour

Perspective removed.

Rotation removed.

Cards become stacked vertically.

Only

Fade

+

Translate

remain.

Readability is prioritized over visual fidelity.

---

# Reduced Motion

Remove

Rotation

Perspective

Blur

Shadow animation

Keep

Fade

Readable content

Links

The section should remain fully understandable.

---

# Performance Budget

Maximum animated cards

2

Maximum blur

4px

No box-shadow animation.

Use transform and opacity only.

Maintain

60 FPS

at all times.

---

# Things This Section Must Never Do

Never behave like a carousel.

Never require clicking.

Never autoplay videos.

Never use flip-card interactions.

Never rotate more than 12°.

Never animate logos independently.

Never make reading secondary to motion.

Never add more than two experience cards without redesigning the section.

---

# Success Criteria

The visitor should finish this section with one thought:

"He has real experience applying what he builds."

The animation should quietly reinforce professionalism.

If someone remembers the card animation more than the companies,

the motion system has failed.
# Motion Design System
## Part 7 — Contact & Footer Motion System

Version 1.0

---

# Purpose

The Contact and Footer sections conclude the narrative of the portfolio.

The visitor has now learned

Who Harsh is.

↓

What he builds.

↓

Where he has worked.

↓

How he thinks.

The ending should feel calm.

Not promotional.

The website should quietly invite conversation.

Not demand attention.

The final impression should be

Confidence.

Not marketing.

---

# Overall Flow

Experience

↓

Whitespace

↓

Contact

↓

Footer

↓

End

There should never be a sudden stop.

The website slowly comes to rest.

---

# Contact Section

Purpose

Provide a frictionless way to reach Harsh.

This section is intentionally minimal.

The visitor already knows enough.

Now the only question is

"How do I contact him?"

---

# Layout

Centered.

Maximum width

700px.

Large whitespace above.

Large whitespace below.

No background graphics.

No decorative illustrations.

No animations running continuously.

---

# Visual Hierarchy

Heading

↓

Description

↓

Contact Links

↓

Primary CTA

Everything follows this order.

Nothing competes.

---

# Heading

Animation

Fade

↓

Translate Y

16px

↓

0px

Duration

650ms.

No scaling.

---

# Description

Appears

80ms

after heading.

Short.

Maximum

2 lines.

---

# Contact Links

Email

↓

GitHub

↓

LinkedIn

Appear one after another.

80ms stagger.

No icons flying in.

No slide animations.

Only

Fade

+

Translate

---

# CTA

If present

Example

Let's Build Something Meaningful

Animation

Fade

↓

Scale

98%

↓

100%

Hover

Opacity

95%

Underline

Fade

Nothing more.

---

# Hover Behaviour

Links

Underline

↓

Fade

Duration

180ms.

Buttons

Opacity

↓

95%

Scale

↓

1.02

No glow.

No shadow animation.

---

# Idle State

Nothing moves.

No breathing animation.

No floating icons.

No pulsing button.

Stillness communicates confidence.

---

# Transition Into Footer

After the final contact link leaves the viewport

Whitespace increases.

Movement slows.

Typography becomes larger.

Everything prepares the visitor for the ending.

---

# Footer Purpose

The footer is not navigation.

It is the final signature.

The experience ends here.

The visitor should leave remembering

Harsh Kumar Jha.

Not the website.

---

# Wordmark

The hero of the footer.

Large typography.

Extends beyond the viewport.

Only part of the letters remain visible.

The wordmark feels embedded into the page.

Not sitting on top of it.

---

# Wordmark Entrance

Animation

Opacity

0

↓

5%

Translate Y

40px

↓

0px

Duration

1200ms.

Very slow.

Very subtle.

The visitor should almost think

"Was that already there?"

---

# Fade Mask

The bottom of the wordmark gradually disappears.

Never use a hard edge.

The typography should blend naturally into the page.

---

# Footer Links

Only essential links.

GitHub

LinkedIn

Email

Back to Top

Nothing else.

No sitemap.

No legal clutter.

---

# Social Icons

Fade only.

Hover

Opacity

↓

80%

No scaling.

No rotation.

No bounce.

---

# Back To Top

Purpose

Provide convenience.

Not become a feature.

Hover

Underline

↓

Fade

Click

Smooth scroll.

No fast jump.

Duration

Approximately

1000ms.

---

# Background

Static.

No gradients moving.

No particles.

No clouds.

No animation.

The motion has ended.

---

# Scroll Behaviour

As the visitor reaches the bottom

Everything slows.

The website feels heavier.

The scrolling naturally comes to rest.

There should never be another reveal after the footer.

This is the end.

---

# Mobile Behaviour

Exactly the same.

Only typography scales.

Wordmark becomes smaller.

Links become stacked vertically.

No interaction changes.

---

# Reduced Motion

Remove

Fade

Translate

Smooth Scroll

Replace with

Static layout.

The footer remains visually identical.

---

# Performance

Only

Opacity

Transform

Use GPU acceleration.

No expensive filters.

No animated shadows.

---

# Things This Section Must Never Do

Never autoplay anything.

Never show popups.

Never show newsletter forms.

Never show "Made with ❤️".

Never show visitor counters.

Never show random quotes.

Never animate continuously.

Never compete with the Contact section.

The footer exists only to quietly conclude the story.

---

# Emotional Goal

The visitor should leave with

Calm.

Respect.

Curiosity.

Professionalism.

The portfolio should end exactly the way a great film ends.

No unnecessary sequel.

No cliffhanger.

Simply

Fade to black.

---

# Success Criteria

When the visitor reaches the end

they should naturally stop scrolling.

Not because the page ended,

but because the story reached its conclusion.

The ending should feel inevitable.

Not abrupt.
# Motion Design System
## Part 8 — Global Interaction System

Version: 1.0

---

# Purpose

This document defines every interaction that exists throughout the portfolio.

Unlike section-specific animations, these interactions are global.

Every button.

Every link.

Every hover.

Every cursor movement.

Every click.

Every scroll.

Every keyboard interaction.

Every touch gesture.

All interactions should feel like they belong to the same product.

The visitor should never think

"This button behaves differently."

Consistency builds trust.

---

# Interaction Philosophy

Interaction is communication.

Every interaction answers one question.

"What happened after I did something?"

If nothing changes,

the interaction failed.

If too much changes,

the interaction also failed.

The response should feel immediate,

subtle,

and intentional.

---

# Response Time

Every interaction should begin within

100ms

of user input.

The visitor should never wonder

"Did it register?"

---

# Cursor Behaviour

Desktop only.

The cursor itself never changes shape.

No custom cursor.

No blob cursor.

No liquid cursor.

No magnetic cursor.

No trailing particles.

The browser cursor remains untouched.

The UI responds instead.

---

# Mouse Movement

Moving the mouse over empty space

does nothing.

The website should not chase the cursor.

Movement should only occur when hovering interactive elements.

---

# Hover Philosophy

Hover exists only to confirm interactivity.

Hover should never introduce new information.

Hover should never become entertainment.

---

# Button Hover

Transition

180ms

Opacity

100%

↓

95%

Scale

100%

↓

102%

Underline

Fade

No glow.

No shadow animation.

No bounce.

---

# Link Hover

Text color

Slight increase.

Underline

Opacity

0%

↓

100%

Duration

180ms

The underline fades.

It never slides.

---

# Navigation Hover

Opacity

↓

85%

Underline

↓

Fade

Navigation never moves.

---

# Card Hover

Projects

No hover movement.

Projects respond to scrolling,

not hovering.

Experience

Very subtle shadow increase.

Nothing else.

---

# Image Hover

Images never zoom.

Images never tilt.

Images never rotate.

Respect the photography.

---

# Video Hover

No autoplay on hover.

No controls appearing suddenly.

The media should remain calm.

---

# Click Feedback

Purpose

Confirm action.

Never celebrate.

---

# Buttons

Mouse Down

Scale

99%

Mouse Up

100%

Duration

120ms

---

# Links

No scale.

Only browser default active state.

---

# External Links

GitHub

LinkedIn

Open new tab.

Never interrupt the current experience.

---

# Keyboard Navigation

Every interactive element

must be reachable using

Tab.

---

Focus State

Visible.

Simple.

Thin outline.

No animated glow.

No moving border.

---

Enter Key

Behaves exactly like click.

---

Escape

Closes any future modal.

(Current version contains none.)

---

# Scroll Behaviour

Scrolling drives the experience.

Scrolling never snaps.

Scrolling never jumps.

Everything interpolates.

---

Trackpad

Natural.

Wheel

Natural.

Touch

Natural.

The visitor controls the pace.

Never the website.

---

# Touch Behaviour

Hover states disappear.

Touch feedback replaces hover.

Tap

↓

Opacity

↓

95%

Duration

120ms

No ripple effects.

---

# Selection

Text selection remains enabled.

Visitors should be able to copy

Email

Descriptions

Project information

Do not disable selection globally.

---

# Drag Behaviour

Images

Not draggable.

Text

Selectable.

Buttons

Not draggable.

---

# Cursor During Loading

Use default browser cursor.

No spinner cursor.

---

# Loading State

Purpose

Communicate progress.

Never fake progress.

If content is loading

Use

Fade placeholders.

Never skeletons that pulse aggressively.

---

# Image Loading

Images fade in.

Opacity

0

↓

100%

Duration

420ms

Never pop into existence.

---

# Video Loading

Poster image first.

↓

Video fades in.

Never blank screen.

---

# Error State

If an image fails

Show fallback.

If a video fails

Show thumbnail.

If a link fails

Never crash layout.

Graceful degradation.

---

# Success State

Used rarely.

Only for

Future contact form

or

Resume download.

Feedback

Small fade.

Small confirmation.

Nothing more.

---

# Scroll Restoration

Refreshing

Returns to top.

Back navigation

Returns to previous position.

The visitor should never lose context.

---

# Mobile Interaction Rules

Remove

Hover

Cursor

Cursor glow

Keep

Tap

Scroll

Swipe

Everything else remains consistent.

---

# Accessibility

Every interaction

must be usable

without

Mouse

Animations

Hover

Touch precision.

Accessibility is not an enhancement.

It is a requirement.

---

# Performance Rules

Interaction latency

<100ms

Hover FPS

60

Click response

Immediate

Scroll latency

Imperceptible

If interaction becomes sluggish,

reduce animation.

Never increase complexity.

---

# Forbidden Interactions

Never

Magnetic buttons

Blob cursors

Stretch effects

Elastic movement

Rubber-band scaling

Spinning icons

Hover sound effects

Autoplay audio

Particle explosions

Confetti

Animated borders

Rainbow gradients

Floating emojis

Typing effects

Count-up statistics

Fake loading animations

Every interaction should feel

professional,

quiet,

and timeless.

---

# Global Success Criteria

The visitor should never consciously notice interactions.

They should simply feel

responsive,

predictable,

and effortless.

The highest compliment this interaction system can receive is

"I didn't even think about it."

Because good interaction design disappears into the experience.
# Motion Design System
## Part 9 — Responsive Motion System

Version: 1.0

---

# Purpose

The portfolio is designed as a cinematic, scroll-driven experience.

However, not every device can or should receive the exact same experience.

Responsive design is not only about changing layout.

It is about preserving the emotional experience while adapting to different interaction models, performance capabilities, and screen sizes.

Desktop is the reference experience.

Tablet is a simplified experience.

Mobile is a focused experience.

The story remains identical across all devices.

Only the presentation changes.

---

# Design Philosophy

Never remove information.

Only simplify interactions.

The user should experience the same narrative regardless of device.

Desktop

↓

Most immersive

Tablet

↓

Balanced

Mobile

↓

Focused

---

# Breakpoints

Large Desktop

≥ 1600px

Desktop

1280px – 1599px

Laptop

1024px – 1279px

Tablet

768px – 1023px

Mobile

≤ 767px

---

# Desktop Experience

Desktop receives the complete interaction system.

Enabled

✓ Landing Reveal

✓ Oval Mask

✓ Cloud Parallax

✓ Sticky Projects

✓ Timeline

✓ Crossfading Media

✓ Experience Rotation

✓ Floating Navigation

✓ Smooth Scroll

✓ Cursor Glow

✓ Hover Animations

Nothing removed.

This is the reference experience.

---

# Laptop Experience

Very close to desktop.

Changes

Reduce parallax intensity.

Reduce cloud movement.

Reduce animation distances.

Keep all interactions.

---

# Tablet Experience

Goal

Maintain storytelling.

Reduce complexity.

---

Landing

Keep

Oval reveal.

Simplify animation.

---

Clouds

Reduce from

3 layers

↓

2 layers.

---

Navigation

Keep floating navigation.

Increase touch targets.

---

Projects

Sticky layout remains.

Media becomes smaller.

Content width increases.

Timeline remains.

Cursor interactions removed.

---

Experience

Keep card transitions.

Reduce rotation angle.

Maximum

6°.

---

Footer

Wordmark scales down.

Layout stacks naturally.

---

# Mobile Philosophy

The website should feel intentionally designed for mobile.

Not like a desktop website squeezed into a phone.

Reading becomes the priority.

---

Landing

Keep reveal.

Reduce zoom distance.

No blur.

No heavy masking.

---

Hero

Cloud image remains.

Typography scales.

Spacing increases.

Navigation collapses.

Clouds reduce to

1 layer.

---

Parallax

Disabled.

---

Cursor

Removed.

---

Hover

Removed.

---

Projects

This changes significantly.

Desktop

Sticky Storytelling

↓

Mobile

Vertical Storytelling

Every project becomes a vertical chapter.

Order

Problem

↓

Solution

↓

Architecture

↓

Demo

↓

Impact

↓

GitHub

Exactly the same.

Only interaction changes.

---

Media

Videos become

Tap-to-play.

Poster image shown first.

Autoplay disabled if necessary.

---

Timeline

Desktop

Persistent

↓

Mobile

Small progress indicator above project.

---

Experience

Remove

Rotation.

Perspective.

Blur.

Cards become stacked vertically.

Only

Fade

+

Translate

remain.

---

Contact

Centered.

Full width.

Large touch targets.

---

Footer

Wordmark scales proportionally.

No overflow.

Back-to-top remains.

---

# Orientation

Landscape Mobile

Treat as tablet.

Portrait Mobile

Standard mobile layout.

---

# Reduced Motion

This overrides every device.

Landing

Replace reveal

↓

Fade

Clouds

Static

Projects

No crossfade.

No parallax.

No timeline animation.

Experience

No rotation.

Only fade.

Footer

Static.

The story remains.

Only movement changes.

---

# Performance Adaptation

Desktop

Target

60 FPS

Tablet

Target

60 FPS

Mobile

Target

60 FPS

If performance drops

Reduce animation.

Never reduce readability.

---

# Asset Adaptation

Images

Responsive sizes.

Videos

Different resolutions.

Desktop

1080p

Tablet

720p

Mobile

480p–720p

Cloud image

Responsive versions.

Never serve full-resolution assets unnecessarily.

---

# Typography Scaling

Desktop

Largest hierarchy.

Tablet

Reduce approximately

10–15%.

Mobile

Reduce

20–25%.

Maintain the same hierarchy.

Never redesign typography.

Only scale it.

---

# Spacing

Desktop

Large negative space.

Tablet

Moderate negative space.

Mobile

Comfortable reading space.

Never compress content to fit more information.

Scrolling is expected.

---

# Touch Targets

Minimum

44×44px

Buttons

Links

Navigation

Back-to-top

Every interactive element.

---

# QA Checklist

Desktop

✓ Hero feels immersive.

✓ Projects remain sticky.

✓ Timeline smooth.

✓ Clouds natural.

Tablet

✓ Layout balanced.

✓ Touch comfortable.

✓ Story preserved.

Mobile

✓ Reading effortless.

✓ Videos accessible.

✓ No horizontal scrolling.

✓ Performance stable.

✓ No interaction feels "desktop-only."

---

# Success Criteria

A user switching from desktop to mobile should immediately recognize the same portfolio.

The layout may change.

The interactions may simplify.

The story must remain identical.

The device should never define the experience.

Only how efficiently it is delivered.
# Motion Design System
## Part 10 — Performance, Accessibility & Engineering Constraints

Version: 1.0

---

# Purpose

Beautiful motion is only valuable if it performs reliably.

A visually impressive portfolio running at 25 FPS is considered broken.

Performance is a design feature.

Accessibility is not optional.

Every engineering decision must preserve readability, responsiveness, and smooth interaction.

---

# Engineering Philosophy

Priority Order

1. Readability

↓

2. Performance

↓

3. Accessibility

↓

4. Motion

↓

5. Visual Effects

If visual effects reduce readability or performance,

the effects are removed.

Never compromise usability for aesthetics.

---

# Performance Budget

Target FPS

Desktop

60 FPS

Tablet

60 FPS

Mobile

60 FPS

Minimum Acceptable

55 FPS

Anything below

50 FPS

is considered a defect.

---

# Frame Budget

Maximum

16.67 ms

per frame.

Anything above this introduces visible stutter.

---

# Main Thread Rules

Never block the main thread.

Avoid

Large synchronous calculations

Heavy loops during scrolling

DOM queries inside animation frames

Repeated layout calculations

---

# GPU Animation Rules

Only animate

transform

opacity

Never animate

width

height

top

left

right

bottom

margin

padding

border-radius

box-shadow

These cause layout recalculation.

---

# Scroll Engine

Scroll is controlled by

requestAnimationFrame

Every frame

↓

Read scroll position

↓

Interpolate values

↓

Apply transform

↓

Render

Never use

setInterval

setTimeout

CSS scroll snapping

---

# Image Optimization

Every image must exist in multiple sizes.

Desktop

High Resolution

Tablet

Medium Resolution

Mobile

Compressed Resolution

Use

AVIF

↓

WebP

↓

JPEG fallback

---

# Video Optimization

Maximum simultaneously playing videos

1

Only preload

Current video

Next video

Lazy load everything else.

Video format priority

WebM

↓

MP4

Never autoplay with sound.

Muted only.

Loop only when visible.

Pause immediately when leaving viewport.

---

# Lazy Loading

Lazy load

Project videos

Photography

Images below fold

Never lazy load

Landing

Hero

Navigation

Critical fonts

---

# Font Loading

Use

font-display: swap

Preload only

Primary heading font

Primary body font

Avoid loading unused weights.

---

# JavaScript Budget

Initial JavaScript

As small as possible.

Split code by section.

Projects

Experience

Footer

should load independently where possible.

---

# CSS Budget

Avoid global animation styles.

Scope styles to components.

Remove unused CSS.

Prefer utility-first architecture.

---

# Accessibility Philosophy

Accessibility is part of the design.

Not an enhancement.

Every interaction must remain usable without

Animation

Mouse

Hover

Perfect vision

Perfect hearing

---

# Reduced Motion

Respect

prefers-reduced-motion

Immediately.

Disable

Landing zoom

Cloud drift

Parallax

Timeline animation

Card rotation

Cursor glow

Crossfades

Replace with

Fade

Instant state changes

Static imagery

---

# Keyboard Navigation

Every interactive element

must be reachable using

Tab

Visible focus state required.

Never remove browser focus outline without replacing it.

---

# Screen Readers

Every image

Alt text.

Every button

Accessible label.

Every icon

Accessible name.

Navigation landmarks

Use semantic HTML.

---

# Contrast

Minimum

WCAG AA

Text must remain readable over

Clouds

Videos

Gradients

Photography

If necessary

Dark overlays take priority over visual purity.

---

# Touch Targets

Minimum

44 × 44 px

Buttons

Links

Navigation

Back-to-top

Social icons

---

# Loading States

Images

Fade in.

Videos

Poster image first.

Never display empty containers.

---

# Error Handling

Missing Image

↓

Fallback image

Missing Video

↓

Poster

Broken Link

↓

Graceful failure

Application must never visually break.

---

# Browser Support

Latest

Chrome

Safari

Firefox

Edge

Responsive

Desktop

Tablet

Mobile

---

# Animation Safety Rules

Never animate more than

8 elements

simultaneously.

Maximum blur

12px

Maximum rotation

12°

Maximum scale

1.05

These limits are global.

---

# Quality Threshold

Every animation must pass

Smoothness

↓

Readability

↓

Performance

↓

Accessibility

If one fails,

the animation is redesigned.

Not optimized endlessly.

---

# Final Engineering Principle

Every frame matters.

Visitors may not notice great performance.

They immediately notice poor performance.

Performance is invisible until it fails.
# Motion Design System
## Part 11 — Motion QA & Validation Checklist

Version: 1.0

---

# Purpose

This checklist is completed before every production deployment.

Every checkbox must pass.

Nothing ships partially complete.

---

# Landing

□ Initial state loads correctly

□ Oval appears correctly

□ No layout shift

□ No flashing

□ Background loads

□ 60 FPS maintained

□ Reduced motion works

□ No console errors

---

# Scroll Reveal

□ First scroll triggers reveal

□ Scroll feels continuous

□ No snapping

□ Oval expands smoothly

□ Hero appears in correct order

□ Cloud image fully revealed

□ Transition completes correctly

---

# Home

□ Clouds move naturally

□ No noticeable loop

□ Typography remains static

□ Navigation readable

□ CTA works

□ Scroll indicator visible

□ No distracting movement

---

# About

□ Portrait loads

□ Portrait animation smooth

□ Text stagger correct

□ Whitespace preserved

□ Mobile layout verified

---

# Projects

For each project

FrameOS

□ Timeline updates

□ Sticky layout works

□ Media changes correctly

□ Video plays

□ Video pauses

□ GitHub link

□ Architecture section

□ Scroll progress

Candidate Intelligence System

□ Same validation

AppForge AI

□ Same validation

Hallucination Hunter

□ Same validation

---

# Timeline

□ Active node correct

□ Progress fills correctly

□ No jumping

□ Scroll interpolation smooth

---

# Experience

MathonGo

□ Card enters

□ Rotation correct

□ Card settles

□ Exit smooth

DomAIyn Labs

□ Same validation

---

# Contact

□ Heading

□ Description

□ Email

□ GitHub

□ LinkedIn

□ CTA

All links verified.

---

# Footer

□ Wordmark visible

□ Fade mask correct

□ Back-to-top works

□ Social links

□ Responsive

---

# Navigation

□ Correct section highlighted

□ Smooth scrolling

□ Keyboard navigation

□ Focus state

□ Mobile navigation

---

# Cursor

Desktop

□ Hover works

□ No lag

□ Glow correct

Mobile

□ Disabled

---

# Images

□ Correct aspect ratio

□ Responsive

□ Lazy loading

□ No distortion

□ No layout shift

---

# Videos

□ Correct resolution

□ Poster shown

□ Muted

□ Loop

□ Lazy loading

□ Pauses outside viewport

---

# Typography

□ Correct font

□ Correct weight

□ Correct spacing

□ Responsive scaling

□ Readability

---

# Accessibility

□ Keyboard only navigation

□ Reduced motion

□ Alt text

□ Contrast

□ Focus indicators

□ Touch targets

---

# Performance

□ Lighthouse Performance ≥90

□ Accessibility ≥95

□ Best Practices ≥95

□ SEO ≥95

Desktop

□ Stable 60 FPS

Tablet

□ Stable 60 FPS

Mobile

□ Stable 60 FPS

---

# Browser Testing

Chrome

□ Pass

Safari

□ Pass

Firefox

□ Pass

Edge

□ Pass

---

# Responsive Testing

Desktop

□ Pass

Laptop

□ Pass

Tablet

□ Pass

Mobile Portrait

□ Pass

Mobile Landscape

□ Pass

---

# Final Content Review

□ Hero text correct

□ About updated

□ Projects accurate

□ Experience accurate

□ Contact accurate

□ Footer updated

□ Resume link verified

---

# Production Readiness

□ No placeholder text

□ No placeholder images

□ No broken links

□ No console errors

□ No animation glitches

□ No visual regressions

□ No missing assets

□ All GitHub links verified

□ SEO metadata complete

□ Favicon present

□ Open Graph image present

---

# Launch Approval

Design

□ Approved

Motion

□ Approved

Engineering

□ Approved

Performance

□ Approved

Accessibility

□ Approved

Content

□ Approved

Portfolio Ready

☐ YES
