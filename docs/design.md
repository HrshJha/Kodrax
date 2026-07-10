# Portfolio Design Specification (`design.md`)

> **Project Goal**
>
> Build a cinematic, editorial, premium portfolio that feels like a
> directed experience rather than a traditional website. Every
> interaction must be intentional. Motion supports storytelling; it
> never exists for decoration.

------------------------------------------------------------------------

# Core Design Principles

-   Minimal UI
-   Large negative space
-   Editorial typography
-   Premium photography
-   Smooth 60 FPS animations
-   Scroll-driven storytelling
-   No flashy effects
-   Every section has a unique interaction
-   Dark-first aesthetic
-   Motion is calm, deliberate and cinematic

------------------------------------------------------------------------

# Technical Motion Standards

## Performance

-   Target FPS: **60 FPS**
-   Use GPU-accelerated transforms only.
-   Prefer:
    -   transform
    -   opacity
    -   filter (sparingly)
-   Avoid layout thrashing.
-   Avoid scroll jank.

## Motion

-   Default animation duration:
    -   400--700 ms
-   Long cinematic transitions:
    -   900--1400 ms
-   Scroll animations:
    -   Continuous RAF interpolation
    -   Never discrete snapping
-   Ease:
    -   easeOutCubic
    -   easeInOut
-   Cursor effects:
    -   subtle only
-   No bounce.
-   No exaggerated springs.

------------------------------------------------------------------------

# Website Flow

    Landing Animation
            ↓
    Zoom Reveal
            ↓
    HOME (Cloud Theme)
            ↓
    ABOUT
            ↓
    PROJECTS
            ↓
    EXPERIENCE
            ↓
    CONTACT
            ↓
    FOOTER

------------------------------------------------------------------------

# SECTION 1 --- Landing Animation

Purpose: Create curiosity.

Visual:

-   Huge negative space.
-   Mostly hidden screen.
-   Small oval aperture in center.
-   Only tiny glimpse of background.
-   Quiet ambient motion.

Interaction:

-   User opens website.
-   Nothing happens until first scroll.

Animation:

-   60 FPS
-   No camera shake
-   Soft ambient background movement

------------------------------------------------------------------------

# SECTION 2 --- Scroll Zoom Reveal

Purpose: Transition into the Home page.

Important:

This is NOT another section.

It is only the entrance animation.

Interaction:

-   First scroll expands the oval.
-   Camera smoothly zooms.
-   Hero fades in.
-   Transition finishes inside HOME.

No hard cut.

------------------------------------------------------------------------

# SECTION 3 --- HOME

Theme: Clouds.

Reference:

Use the provided cloud reference image.

Not inspiration.

Actual aesthetic target.

Contains:

-   Harsh Kumar Jha
-   Tagline
-   Navigation
-   Large whitespace
-   Editorial typography

Design:

-   Calm
-   Peaceful
-   Luxurious
-   Minimal

Cloud theme ends when leaving Home.

------------------------------------------------------------------------

# SECTION 4 --- ABOUT

Contains:

-   Ghibli portrait
-   Short biography
-   Education
-   Current focus
-   Technologies

Layout:

Portrait + editorial text.

Animation:

Portrait: - fade - 95% → 100% scale

Text: - upward fade

No cloud aesthetic.

New color palette begins here.

------------------------------------------------------------------------

# SECTION 5 --- PROJECTS

Primary showcase.

Interaction:

Apple-style storytelling.

Features:

-   Sticky content
-   Continuous RAF scroll
-   Crossfading media
-   Images and videos
-   Timeline
-   Active indicator
-   Cursor glow
-   Progress animation

Projects:

Exactly four.

Media:

Anime-inspired video for each project.

Narrative:

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

Content can be extracted from project information already available.

------------------------------------------------------------------------

# SECTION 6 --- EXPERIENCE

Exactly two cards.

1.  MathonGo

2.  Domain AI Labs

Interaction:

BrandAppart-inspired rotating card stack.

Behaviour:

-   Cards rotate in.
-   Settle flat.
-   Previous exits naturally.

No other experiences.

------------------------------------------------------------------------

# SECTION 7 --- CONTACT

Minimal.

Contains:

-   Email
-   GitHub
-   LinkedIn

Simple CTA.

No unnecessary content.

------------------------------------------------------------------------

# SECTION 8 --- FOOTER

Editorial footer.

Features:

-   Giant fading HARSH JHA wordmark
-   Fade mask
-   Back-to-top
-   Minimal links

Feels like the closing frame of a film.

------------------------------------------------------------------------

# Global Navigation

Persistent section progress indicator.

Sections:

-   Home
-   About
-   Projects
-   Experience
-   Contact

Highlights current section.

Smooth progress.

------------------------------------------------------------------------

# Typography

Editorial.

Large headings.

Clean body text.

Generous spacing.

------------------------------------------------------------------------

# Whitespace

Never fill space because it exists.

Empty space is intentional.

------------------------------------------------------------------------

# Motion Philosophy

Every animation must answer:

Why is it moving?

If there is no reason,

remove it.

------------------------------------------------------------------------

# Color Story

Landing + Home: Cloud aesthetic.

About onward: Different palette.

Cloud theme never returns after Home.

------------------------------------------------------------------------

# Asset Checklist

Provided:

-   Cloud image
-   About content
-   Project information
-   Experience list

To be provided:

-   Ghibli portrait
-   4 project videos
-   Contact details
-   GitHub links
-   LinkedIn
-   Email
-   Resume (optional)

------------------------------------------------------------------------

# Final Vision

This website should feel like watching a carefully directed opening
sequence rather than browsing a portfolio.

The visitor should remember the experience before they remember the
technology used to build it.
