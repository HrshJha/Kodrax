# Harsh Kumar Jha — Portfolio Website — PRD

> **Status:** Draft v1.0
> **Owner:** Harsh Kumar Jha
> **Source documents:** FOUNDATION.md (v2.0), design.md, appforge-ai.md, candidate-intelligence-system.md, frameos.md, hallucination-hunter.md
> **Precedence rule (inherited from FOUNDATION.md):** Where this PRD, `design.md`, and `FOUNDATION.md` conflict, `FOUNDATION.md` governs unless explicitly overridden below. Every override is logged in Section 10.
> **Note:** FOUNDATION.md Part 4 explicitly references "see PRD Section 10" for the project-status discrepancy. That is resolved in **Section 10, OQ-02** below.

---

## 1. Executive Summary

**Problem.** Harsh is a B.Tech ECE student (MSIT, CGPA 8.59, Class of 2029) targeting AI Research Engineer / Production AI Engineer roles. He has real, documented engineering depth — four completed AI systems projects and two research-adjacent internships (MathonGo, DomAIyn Labs LLP) — but no live site currently converts that depth into recruiter attention. Generic portfolio templates (flat cards, stock layouts, skill-percentage bars) don't differentiate a candidate in a crowded AI-internship applicant pool, and they don't demonstrate the systems-thinking the projects themselves show.

**Why now.** The build is already underway: stack is locked (Next.js 16, Tailwind CSS v4, Motion), the site is live at `hrshjha.vercel.app`, and a multi-session AI-agent build workflow is in place (`EXECUTION_PARTS.md`, `PROGRESS.md`, `DECISIONS.md`, `MOTION_SYSTEM.md`). What's missing is a single reconciled requirements document — `FOUNDATION.md` (identity/strategy/content, v2.0) and `design.md` (UX/motion flow) were written at different times and now disagree on page order, visual direction, and nav structure. Continuing to build without resolving that will bake inconsistency into the codebase.

**Solution.** A single-page, scroll-driven, dark-first "Cinematic Signal" portfolio: a curiosity-driven landing gate, a cinematic zoom transition into a hero, four flagship projects presented as an Apple-style scrollytelling sequence, a two-card experience section, and a minimal close. Content is drawn 1:1 from the five source documents with zero invented claims, consistent with FOUNDATION.md's explicit AI Instructions.

**Key objectives**
1. Convert recruiter/hiring-manager attention into AI/ML internship and research interview opportunities (FOUNDATION.md's stated primary goal — this is the top-line success driver for every other objective).
2. Build technical credibility through evidenced, source-backed project and experience content — no fabricated metrics, skills, or testimonials.
3. Enable inbound collaboration from startup founders and technical peers (secondary audience).
4. Resolve the FOUNDATION.md ↔ design.md conflicts (Section 10) before further multi-session build work compounds the inconsistency.
5. Ship a performant, accessible experience despite an intentionally heavy motion/atmosphere design language — the two must not trade off against each other.

**Success metrics / KPIs.**
The site is pre-launch with no traffic baseline, and FOUNDATION.md's Content Rules explicitly ban *displaying* fake metrics, visitor counters, or vanity numbers on the page itself. The KPIs below are for **Harsh's own private tracking** (e.g., via Vercel Analytics or Plausible) — none are shown on the site. Numeric targets are proposed starting benchmarks, not validated commitments, and should be revisited after ~30 days of real data.

| Metric | Type | Proposed benchmark | Status |
|---|---|---|---|
| Recruiter/hiring-manager interview requests referencing the portfolio | Outcome (manual log) | Track count per application cycle | No baseline — TBD by Harsh |
| Outbound clicks to project GitHub repos | Engagement (analytics) | ≥20% of sessions | Proposed, unvalidated |
| Scroll depth into Projects section | Engagement (analytics) | ≥50% of sessions reach Project 2 of 4 | Proposed, unvalidated |
| Lighthouse Performance score (mobile) | Technical | ≥90 | Recommended target, not in source docs |
| Lighthouse Accessibility score | Technical | ≥95 | Recommended target, not in source docs |
| Resume CTA engagement | Engagement (analytics) | Track click rate once asset exists | Blocked — asset not yet supplied (OQ-03) |

---

## 2. Scope

### In scope
- Landing gate + scroll-triggered zoom-reveal entrance animation
- Home / Hero (name, headline, hero statement, primary/secondary CTA, social links)
- About (portrait, bio, education, current focus, technologies)
- Projects — exactly 4, scrollytelling presentation (FrameOS, Candidate Intelligence System, AppForge AI, Hallucination Hunter)
- Experience — exactly 2 cards (MathonGo, DomAIyn Labs LLP)
- Contact (email, GitHub, LinkedIn, CTA)
- Footer (wordmark, back-to-top, minimal links)
- Persistent scroll-progress navigation
- Dark-first "Cinematic Signal" visual system: editorial type, film grain, glow/gradient light, signal-like motion

### Out of scope (explicitly banned by FOUNDATION.md Content Rules, or absent from all source docs)
- Blog
- Certifications section
- GitHub contribution graph
- Skill percentage bars
- Visitor counters or any publicly displayed metrics
- Fake testimonials
- User accounts / authentication / role-based access
- CMS or admin backend (content is owner-maintained via source files)
- Localization / multi-language support (not mentioned anywhere in source material)
- A 5th+ project or 3rd+ experience entry (FOUNDATION.md and design.md both fix these at exactly 4 and exactly 2)

### Assumptions
*(Flagged explicitly per instruction — none of these are stated outright in the source docs.)*
- **A1:** Budget is effectively $0 — solo build on free/hobby-tier infrastructure (Vercel).
- **A2:** Single maintainer (Harsh); all content updates happen via source files, not a live CMS.
- **A3:** No hard external deadline exists unless tied to an internship application cycle — flagged for confirmation in OQ-07.
- **A4:** Expected traffic is low-to-moderate (portfolio, not consumer product) — no scalability engineering beyond standard Vercel CDN/edge caching is required.
- **A5:** "Resume (optional)" in design.md's asset checklist means the Resume CTA can ship without a linked file, but should not appear as a broken/dead link (see US-013).

### Dependencies
| Dependency | Type | Status |
|---|---|---|
| Next.js 16, Tailwind CSS v4, Motion | Tech stack | Already selected, active build |
| Vercel hosting (`hrshjha.vercel.app`) | Infra | Already live |
| `EXECUTION_PARTS.md`, `PROGRESS.md`, `DECISIONS.md`, `MOTION_SYSTEM.md` | Build governance | Already in use — this PRD should feed directly into `EXECUTION_PARTS.md` task breakdown |
| Four project GitHub repositories | Content | Already exist and linked (Section 11) |
| Ghibli-style portrait | Asset | **Not yet supplied** (design.md asset checklist) — also see OQ-01 re: aesthetic conflict |
| Four anime-inspired project videos | Asset | **Not yet supplied** |
| Resume PDF | Asset | **Not yet supplied**, marked optional |
| Cloud reference image | Asset | Supplied per design.md — but see OQ-01 for conflict with FOUNDATION v2.0 |

### Constraints
- Tech stack is locked (not open for re-litigation in this PRD).
- Content constraint: FOUNDATION.md's AI Instructions prohibit inventing achievements, fabricating metrics, or exaggerating skills — this is a hard constraint on every content-bearing requirement below.
- Motion performance constraint: 60 FPS target, GPU-accelerated transforms only (`transform`, `opacity`, sparing `filter`), no layout thrashing (design.md, Technical Motion Standards).
- Every animation must be narratively justified ("Why is it moving? If there is no reason, remove it." — design.md, Motion Philosophy). This is a content constraint on the design/build process, not just an aesthetic preference.

---

## 3. Users & Personas

### Primary: Recruiters / Non-technical HR screeners
- Goal: quickly assess role fit and credibility signals.
- Pain point: generic portfolios are indistinguishable; skimming behavior means the first 5–10 seconds matter disproportionately.
- Technical proficiency: low-to-moderate — needs headline, tagline, and visual proof (not code) to register competence.

### Primary: Hiring Managers / Research Engineers
- Goal: verify real engineering depth — architecture decisions, tradeoffs, tech stack maturity.
- Pain point: will click through to GitHub and expect what they find there to match what's claimed on the site.
- Technical proficiency: high — this persona is the reason Architecture/Challenges/What-I-Learned content exists per-project, not just feature lists.

### Secondary: Startup founders / technical collaborators
- Goal: assess collaboration potential, not just hiring fit.
- Pain point: needs a low-friction path to reach out (Contact section, GitHub, LinkedIn).

### Role-based access
Not applicable. This is a single-owner, publicly readable static site with no accounts, roles, or permission tiers. Content is maintained by Harsh directly via source files, not through any in-product admin interface.

---

## 4. User Stories & Functional Requirements

**Priority legend:** P0 = launch blocker · P1 = required for a complete V1 · P2 = polish · P3 = future/nice-to-have

### US-001 — Landing gate
**As** a first-time visitor, **I want** an intriguing, minimal landing screen **so that** I feel curiosity before committing to scroll.
**Priority:** P0
**Acceptance criteria:**
1. Initial viewport shows majority negative space with a small centered oval aperture revealing a fragment of background.
2. No animation triggers until the first scroll/gesture (wheel, touch, or keyboard arrow/space).
3. Ambient background motion is subtle, non-triggered, contains no camera shake, and sustains ≥60 FPS (Chrome DevTools Performance panel).
4. `prefers-reduced-motion: reduce` replaces ambient motion with a static frame.
5. Time-to-interactive for this screen ≤1.5s (Lighthouse mobile, 4G throttling).
**Dependencies:** Motion library, aperture/background visual asset.

### US-002 — Scroll zoom-reveal transition
**As** a visitor, **I want** the first scroll to smoothly zoom into the Home hero **so that** the entrance feels cinematic, not jarring.
**Priority:** P0
**Acceptance criteria:**
1. First scroll/swipe triggers a continuous RAF-driven zoom — no discrete jump cuts.
2. Hero content fades in progressively as the zoom completes, not as a hard cut.
3. Transition duration falls in the cinematic range: 900–1400ms (design.md motion standards).
4. Transition is instant/skipped for `prefers-reduced-motion` users.
5. **[OPEN]** Repeat-visit behavior (replay every session vs. once ever) is undefined — see OQ-08.
**Dependencies:** US-001; Motion library.

### US-003 — Home / Hero
**As** a recruiter landing on the site, **I want** to immediately see who Harsh is and what he does **so that** I can decide whether to keep exploring within seconds.
**Priority:** P0
**Acceptance criteria:**
1. Displays: "Harsh Kumar Jha," headline "Building AI Products, Open Source & Real-World Solutions," hero statement "Turning ideas into intelligent products through machine learning and engineering."
2. Primary CTA "View Projects" scrolls to Projects. Secondary CTA "Resume" — see US-013 for empty-state handling.
3. GitHub, LinkedIn, X links visible, open in new tabs with `rel="noopener noreferrer"`.
4. Visual treatment: **[BLOCKED pending OQ-01]** — design.md specifies a "Cloud Theme"; FOUNDATION.md v2.0 specifies "Cinematic Signal" (film grain, glow, mission-control telemetry). Do not build final visuals until reconciled.
5. Scroll-linked motion sustains ≥60 FPS on mid-tier mobile hardware.
**Dependencies:** OQ-01 resolution; resume asset (US-013).

### US-004 — About
**As** a hiring manager, **I want** a short, credible bio with education and current focus **so that** I can quickly assess fit.
**Priority:** P1
**Acceptance criteria:**
1. Displays portrait, short biography, Education (MSIT, B.Tech ECE, CGPA 8.59), Current focus (ML, Deep Learning, NLP/LLMs, AI Agents, Generative AI), and technologies.
2. Portrait animates fade + scale (95%→100%) on scroll into view; body text animates upward fade.
3. Portrait style is **[BLOCKED pending OQ-01]** — "Ghibli portrait" (design.md) vs. FOUNDATION v2.0's photography-grounded, film-based aesthetic are not obviously the same direction.
4. No skill-percentage bars; no biographical claim beyond what's in FOUNDATION.md Part 1/3.
5. Section transitions out of the cloud palette into a distinct palette per design.md — final palette values must come from the resolved FOUNDATION v2.0 direction, not the legacy cloud palette.
**Dependencies:** OQ-01 resolution; portrait asset (not yet supplied).

### US-005 — Projects: scrollytelling mechanic
**As** a recruiter, **I want** to scroll through exactly four flagship projects in a cinematic, story-driven format **so that** I can evaluate engineering depth without leaving the page.
**Priority:** P0
**Acceptance criteria:**
1. Exactly four projects, in this order: FrameOS, Candidate Intelligence System, AppForge AI, Hallucination Hunter (FOUNDATION.md Part 2 Featured Projects order).
2. Sticky content area with continuous RAF-driven scroll interpolation — no discrete/step scrolling.
3. Each project reveals narrative beats in order: Problem → Solution → Architecture → Demo → Impact → GitHub.
4. A persistent timeline/active-project indicator and a progress animation reflect scroll position.
5. Cursor glow follows the pointer on desktop (≥1024px); disabled on touch devices.
6. Each project links to its GitHub repo (Section 11) in a new tab.
7. Video: each project has a dedicated anime-inspired video — **not yet supplied**. Until delivered, each project must render a static fallback hero image (no broken media, no layout shift).
8. All copy (Problem, Solution, Architecture, Key Features, Challenges, What I Learned) is sourced directly from the individual project markdown files — no new claims or metrics introduced.
9. ≥60 FPS during scroll on mid-tier mobile; frame times >32ms occur in <1% of sampled scroll frames.
10. **[OPEN]** No mobile-specific interaction pattern is defined anywhere in source docs for this inherently desktop-oriented sticky/parallax mechanic — see OQ-09.
**Dependencies:** Video assets (blocked); OQ-09 resolution for mobile.

### US-006 — Project status accuracy
**As** the site owner, **I want** each project's displayed status to be accurate **so that** the site doesn't contradict itself against the linked GitHub repos.
**Priority:** P0
**Acceptance criteria:**
1. FOUNDATION.md Part 4 marks all four projects "In Progress"; each individual project doc marks its own project "Completed." Only one status per project may ship.
2. **[BLOCKED pending OQ-02]** — do not hardcode either status until Harsh confirms per-project.
**Dependencies:** OQ-02 resolution.

### US-007 — Experience: rotating card stack
**As** a hiring manager, **I want** to see Harsh's two internships clearly **so that** I can verify relevant experience.
**Priority:** P0/P1
**Acceptance criteria:**
1. Exactly two cards: **MathonGo** (Research & Development Intern) and **DomAIyn Labs LLP** (AI/ML Intern — AI Safety & Evaluation Research). Note: design.md labels the second card "Domain AI Labs" — this is a naming inconsistency against FOUNDATION.md's "DomAIyn Labs LLP"; the FOUNDATION.md spelling governs per precedence.
2. Interaction: cards rotate in, settle flat, previous card exits naturally ("BrandAppart-inspired" per design.md).
3. Each card shows role title, employment type, tech stack, key responsibilities; the DomAIyn Labs card links to the Hallucination Hunter project.
4. No third card is added without a FOUNDATION.md revision.
5. **[OPEN]** "BrandAppart-inspired" is not a verifiable reference — see OQ-06.
**Dependencies:** OQ-06 (reference clarification).

### US-008 — Contact
**As** a recruiter ready to reach out, **I want** a minimal contact section **so that** I can email or find Harsh's profiles quickly.
**Priority:** P1
**Acceptance criteria:**
1. Displays email (`jhaharsh451@gmail.com`) as a `mailto:` link, GitHub link, LinkedIn link.
2. A simple CTA is present; exact copy and mechanism (button vs. form) is **[OPEN]** — see OQ-04.
3. No contact form fields beyond what OQ-04 resolves to; no unrelated content per design.md's "no unnecessary content" directive.
**Dependencies:** OQ-04 resolution.

### US-009 — Footer
**As** a visitor finishing the page, **I want** a cinematic closing moment **so that** the experience feels complete.
**Priority:** P2
**Acceptance criteria:**
1. Large fading "HARSH JHA" wordmark with a fade mask.
2. Functional "back to top" control.
3. Minimal links only — no nav duplication beyond what's necessary.

### US-010 — Global navigation & progress indicator
**As** a visitor, **I want** to see which section I'm in and jump between sections **so that** I can navigate non-linearly.
**Priority:** P0
**Acceptance criteria:**
1. **[OPEN]** design.md's persistent indicator lists 5 items (Home, About, Projects, Experience, Contact); FOUNDATION.md's primary navigation lists 6 (Home, Projects, Experience, About, Resume, Contact) in a different order. See OQ-01 (order) and OQ-05 (Resume as nav item).
2. Active section highlights automatically based on scroll position, with smooth (non-discrete) indicator transitions.
3. Keyboard-navigable (Tab + Enter); every link has a visible focus state (WCAG 2.1 AA).
**Dependencies:** OQ-01, OQ-05 resolution.

### US-011 — Content integrity guardrail (cross-cutting)
**As** the site owner, **I want** all content strictly bounded to documented facts **so that** the portfolio holds up under recruiter/hiring-manager scrutiny.
**Priority:** P0
**Acceptance criteria:**
1. None of the following banned words appear anywhere on the site: "passionate," "hardworking," "quick learner," "results-driven."
2. None of the following appear anywhere on the site: skill-percentage bars, visitor counters, fabricated metrics, fake testimonials, blog, certifications section, GitHub contribution graph.
3. Every project/experience claim traces directly to FOUNDATION.md or the relevant project markdown file — no invented achievements, no rounded-up numbers, no inferred outcomes.

### US-012 — Degraded/error states
**As** a visitor on an imperfect connection or device, **I want** the site to remain usable when something fails to load **so that** I'm not blocked from the content.
**Priority:** P1
**Acceptance criteria:**
1. If a project video fails to load, the section falls back to its static image without breaking the scroll mechanic or surfacing a visible error.
2. If the motion library fails to initialize, core content (text, links, images) remains accessible via standard scroll — progressive enhancement, not a hard JS dependency for content access. **[ASSUMPTION — not explicitly specified in source docs, recommended as standard practice.]**
3. On viewport widths <768px, the sticky/parallax Projects mechanic degrades to a simplified vertical stack while preserving the Problem→Solution→Architecture→Demo→Impact→GitHub order. **[OPEN — see OQ-09.]**

### US-013 — Resume CTA empty state
**As** a visitor who clicks "Resume" before the asset exists, **I want** to not hit a broken link **so that** the site still feels finished.
**Priority:** P1
**Acceptance criteria:**
1. Until a resume PDF is supplied, the Resume CTA either (a) is hidden entirely, or (b) routes to Contact instead of a dead file link. **[ASSUMPTION — design.md marks the asset "optional," which this story interprets as "must degrade gracefully," not "must exist."]**
2. Once the PDF is supplied, the CTA opens it in a new tab.

---

## 5. Non-Functional Requirements

**Performance**
- 60 FPS motion target throughout; GPU-accelerated properties only (`transform`, `opacity`, sparing `filter`) per design.md Technical Motion Standards.
- No layout thrashing, no scroll jank.
- Lighthouse Performance ≥90 (mobile) — recommended target, not stated in source docs.
- Hero time-to-interactive ≤1.5s on 4G-throttled mobile.

**Security**
- No authentication, no user accounts, no PII collection beyond the publicly displayed email — no elevated security posture required.
- If a contact form is adopted (OQ-04), it requires basic spam mitigation (honeypot field or rate limiting) before shipping.
- Standard HTTPS via Vercel; no additional compliance regime applies (no payments, no regulated data).

**Scalability**
- Static/ISR delivery via Next.js + Vercel edge caching is sufficient for expected personal-portfolio traffic (A4). No further scalability engineering is in scope.

**Accessibility**
- WCAG 2.1 AA target — **recommended, not stated in either source document; flagged as a gap worth closing given how motion-heavy the design is.**
- `prefers-reduced-motion` support is mandatory (referenced across US-001–US-003) given the atmosphere-first design language.
- Keyboard navigation and visible focus states required for all interactive elements (nav, CTAs, links).
- Text contrast ≥4.5:1 against dark/glow backgrounds — a genuine risk given the "darkened room with something glowing in it" visual direction (FOUNDATION.md Part 5); verify per-component, not just against the base background color.
- Alt text required for portrait and all project imagery.

**Localization**
- Out of scope. English only; no i18n signal anywhere in source material.

---

## 6. UX/Design Considerations

**Design direction (per FOUNDATION.md v2.0, which governs per precedence — see OQ-01 for the unresolved conflict with design.md):**

| | design.md (v1-era) | FOUNDATION.md v2.0 (governing) |
|---|---|---|
| Home theme | "Cloud Theme," calm/peaceful/luxurious/minimal | "Cinematic Signal" — film grain, mission-control telemetry, editorial print, AI-native glow/gradient |
| About portrait | "Ghibli portrait" | Grounded in Harsh's own photography practice (not an illustrated/anime style) |
| Explicit "Never" list | "No flashy effects" | Never: cringe, self-promotional, generic, sterile, cluttered/chaotic (glow/atmosphere is *encouraged*, not avoided) |

**Typography:** Three-tier system — editorial display type for headlines, monospace for technical/data accents, clean sans for body. Confident scale contrast; no single generic sans doing every job.

**Color & light:** Deepen the film-photography palette through glow, gradient depth, and directional light rather than flat swatches — "a darkened room with something glowing in it."

**Motion:** Slow, signal-like (pulses, drifts, traces) evoking transmission/processing, not snappy micro-interactions. Default duration 400–700ms; cinematic transitions 900–1400ms; `easeOutCubic`/`easeInOut`; no bounce, no exaggerated springs.

**Texture:** Subtle film-grain overlay on dark surfaces, tying the UI back to Harsh's photography practice — used sparingly enough to stay premium, never retro-kitsch.

**Whitespace:** Deliberate negative space to create drama and direct focus — never filled for density's sake, never empty for emptiness's sake.

**Key screens/flows:** Landing (idle/aperture state) → Zoom Reveal (transition-only, not a section) → Home/Hero → About → Projects (scrollytelling, 4 states × 6 narrative beats each) → Experience (2-card rotation) → Contact → Footer. Loading/error/success states are covered per-story in Section 4 (US-012, US-013).

---

## 7. Technical Considerations

**Stack (already locked — not open for reconsideration in this document):**

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 16 | Active build |
| Styling | Tailwind CSS v4 | Active build |
| Animation | Motion | Active build; satisfies RAF/GPU-transform requirements in Section 5 |
| Hosting | Vercel | Live at `hrshjha.vercel.app` |
| Content storage | No CMS indicated | Recommend typed static data modules (see below) |
| Analytics | Not yet chosen | Recommend Vercel Analytics or Plausible for the private KPIs in Section 1 |

**Data model recommendation.** Since content must trace 1:1 to the five source markdown files (US-011) and there is no CMS, a typed static content module per entity keeps that traceability enforceable in code rather than by convention:

```
// projects.ts (illustrative shape, not prescriptive)
type ProjectStatus = "completed" | "in-progress"; // resolve per OQ-02

interface Project {
  slug: string;
  title: string;
  oneLine: string;
  status: ProjectStatus;
  category: string;
  github: string;
  techStack: string[];
  problem: string;
  solution: string;
  architecture: string[];
  keyFeatures: string[];
  challenges: string[];
  whatILearned: string[];
  videoAsset?: string;   // optional until OQ-03 assets land
  fallbackImage: string; // required
}
```

This makes US-005.7 (video fallback) and US-006 (status accuracy) enforceable at the type level rather than per-component.

**Integrations.** None required beyond the analytics tool above. No third-party APIs, no payment processing, no auth providers.

**Build governance.** This PRD's Section 4 requirements should feed directly into `EXECUTION_PARTS.md`'s task breakdown. Every conflict resolution from Section 10 should be logged in `DECISIONS.md` so the reconciliation has an audit trail, consistent with the multi-session build system already in use.

---

## 8. Timeline & Milestones

No calendar date or effort budget was provided (see OQ-07). Phased by scope, not date, for a solo/AI-assisted build:

| Phase | Scope | Relative effort | Blocked by |
|---|---|---|---|
| **MVP** | Landing, Zoom Reveal, Home, Projects (static-fallback media), Experience, Contact, Footer, Nav — content-complete, conflicts resolved | M | OQ-01, OQ-02, OQ-04, OQ-05, OQ-06 |
| **V1** | Full RAF scrollytelling polish, cursor glow, film grain, portrait + 4 videos integrated, mobile interaction pattern, accessibility pass | L | OQ-03 (assets), OQ-09 (mobile pattern) |
| **V2** | Private analytics instrumentation, resume PDF integration, refinement from real recruiter signal | S | 30 days of live traffic |

---

## 9. Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Brand-direction conflict (design.md v1 vs. FOUNDATION v2.0) ships inconsistently across sections | High — undermines the "controlled intensity" goal FOUNDATION.md explicitly targets | Resolve OQ-01 before further build sessions; update or formally supersede design.md, log in `DECISIONS.md` |
| Missing hero assets (portrait, 4 videos, resume) block visual completion | Medium | Ship MVP with static fallbacks (US-005.7, US-013); swap in once delivered |
| Heavy motion/grain/glow design hurts performance or excludes motion-sensitive users | High — directly conflicts with the "readability" half of FOUNDATION's own "immersive without sacrificing readability" goal | Enforce `prefers-reduced-motion` fallback and a simplified mobile interaction mode (US-001–US-002, US-012) |
| Status/nav/page-order inconsistencies ship because different docs were referenced during different build sessions | Medium | Treat this PRD's Section 10 resolutions — once confirmed — as the single source of truth; update FOUNDATION.md/design.md to match |
| "BrandAppart" reference is unverifiable, leading to a guessed implementation of the Experience interaction | Low-Medium | Request a reference link/screenshot before building US-007 (OQ-06) |
| Aesthetic polish overshadows quick scannability for time-pressed recruiter skimming | Medium | Keep the Landing→Zoom gate short (≤1.5s TTI per US-001.5); usability-check "time to first credible signal" isn't pushed past a few seconds |

---

## 10. Open Questions

**OQ-01 (Critical).** `design.md`'s page flow (Home→About→Projects→Experience→Contact) and visual direction ("Cloud Theme," "Ghibli portrait," "Calm/Peaceful/Luxurious/Minimal") conflict with `FOUNDATION.md` v2.0's recruiter journey (Hero→Projects→Experience→About→Skills→Education→Resume→Contact) and its explicit move away from flat/minimal toward "Cinematic Signal." Per FOUNDATION.md's own precedence rule, FOUNDATION.md should govern — **confirm with Harsh whether `design.md` needs a formal revision pass, or whether the cloud/Ghibli treatment is an intentional, retained exception.**

**OQ-02.** Project status: FOUNDATION.md Part 4 lists all four projects "In Progress"; every individual project doc lists "Completed." This is the exact discrepancy FOUNDATION.md flags as unresolved. **Needs one authoritative status per project before any status badge ships.**

**OQ-03.** Ghibli-style portrait, four anime-inspired project videos, and the resume PDF are not yet supplied. **Confirm delivery timeline, or approve the static-fallback MVP approach in US-005.7/US-013 as the interim state.**

**OQ-04.** Contact section's "Simple CTA" has no defined mechanism in either source doc. **Confirm: `mailto:` button only, or an actual form** (which would add spam-protection and serverless-function requirements per Section 5).

**OQ-05.** design.md's persistent nav lists 5 sections (no Resume); FOUNDATION.md's primary navigation lists 6 (includes Resume). **Confirm whether Resume is a nav-bar item, a hero-only CTA, or both.**

**OQ-06.** "BrandAppart-inspired" (Experience card interaction, design.md) isn't a verifiable design reference. **Request an example link or screenshot** to avoid a guessed implementation.

**OQ-07.** No ship date or session budget was provided. Section 8 estimates are directional only. **Confirm whether there's a recruiting-cycle deadline this should target.**

**OQ-08.** Should the Landing/Zoom-Reveal sequence replay on every visit, or only once per user/session? Undefined in design.md.

**OQ-09.** design.md's Projects scrollytelling mechanic (sticky positioning, cursor glow) is inherently desktop-oriented; no mobile-specific interaction pattern exists in either source document. **Needs a defined mobile fallback before US-005 can be considered complete.**

---

## 11. Appendix

**Glossary**
- **RAF:** RequestAnimationFrame — browser API used for continuous, frame-synced scroll interpolation instead of discrete/stepped scroll snapping.
- **NLI:** Natural Language Inference — entailment/contradiction/neutral classification, used in Hallucination Hunter's verification pipeline.
- **FAISS / BM25:** Dense (FAISS) and sparse (BM25) retrieval methods combined in Candidate Intelligence System's hybrid search.
- **Cinematic Signal:** FOUNDATION.md v2.0's name for the site's design language — film/darkroom aesthetic combined with mission-control/telemetry visual motifs.

**Source material referenced**
- `FOUNDATION.md` (v2.0) — identity, strategy, professional profile, content rules
- `design.md` — UX flow and motion specification (see OQ-01 re: conflicts)
- `appforge-ai.md`, `candidate-intelligence-system.md`, `frameos.md`, `hallucination-hunter.md` — per-project source content

**Links**
- Site: `hrshjha.vercel.app`
- Email: `jhaharsh451@gmail.com`
- GitHub: `https://github.com/HrshJha`
- LinkedIn: `https://www.linkedin.com/in/hrshjha/`
- X: `https://x.com/m_eharsh`
- FrameOS: `https://github.com/HrshJha/FrameOS`
- Candidate Intelligence System: `https://github.com/HrshJha/resume-checker`
- AppForge AI: `https://github.com/HrshJha/AppForge-AI`
- Hallucination Hunter: `https://github.com/HrshJha/Hallucination-Hunter`

---

**End of Document**
