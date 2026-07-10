export const motionDurations = {
  cinematic: "1600ms",
  instant: "0ms",
  l: "650ms",
  m: "420ms",
  s: "280ms",
  xl: "900ms",
  xs: "180ms",
  xxl: "1200ms",
  xxs: "120ms"
} as const;

export const motionDelays = {
  d0: "0ms",
  d1: "60ms",
  d2: "120ms",
  d3: "180ms",
  d4: "240ms",
  d5: "300ms"
} as const;

export const responsiveBreakpoints = {
  desktop: 1280,
  laptop: 1024,
  mobile: 767,
  tablet: 768,
  wide: 1600
} as const;

export const sectionIds = [
  "home",
  "about",
  "projects",
  "experience",
  "footer"
] as const;

export type SectionId = (typeof sectionIds)[number];

export interface SectionAccentToken {
  accentRgbVariable: string;
  accentVariable: string;
  indicator: string;
  label: string;
  sectionId: SectionId;
}

export const sectionAccentTokens = [
  {
    accentRgbVariable: "var(--accent-hero-rgb)",
    accentVariable: "var(--accent-hero)",
    indicator: "01 / 05",
    label: "Build",
    sectionId: "home"
  },
  {
    accentRgbVariable: "var(--accent-about-rgb)",
    accentVariable: "var(--accent-about)",
    indicator: "02 / 05",
    label: "Learn",
    sectionId: "about"
  },
  {
    accentRgbVariable: "var(--accent-projects-rgb)",
    accentVariable: "var(--accent-projects)",
    indicator: "03 / 05",
    label: "Create",
    sectionId: "projects"
  },
  {
    accentRgbVariable: "var(--accent-experience-rgb)",
    accentVariable: "var(--accent-experience)",
    indicator: "04 / 05",
    label: "Experience",
    sectionId: "experience"
  },
  {
    accentRgbVariable: "var(--accent-contact-rgb)",
    accentVariable: "var(--accent-contact)",
    indicator: "05 / 05",
    label: "Contact",
    sectionId: "footer"
  }
] as const satisfies readonly SectionAccentToken[];
