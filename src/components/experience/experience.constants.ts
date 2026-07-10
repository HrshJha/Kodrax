export const EXPERIENCE_SECTION_ID = "experience";

export const EXPERIENCE_SCROLL_LENGTH_VH = 230;

export const EXPERIENCE_MOTION = {
  activeOpacity: 1,
  contentDuration: 0.65,
  contentStagger: 0.08,
  easeOutCubic: [0.33, 1, 0.68, 1],
  hiddenOpacity: 0,
  imageParallaxY: 14,
  inactiveOpacity: 0.1,
  inactiveScale: 0.98,
  mobileQuery: "(max-width: 767px)",
  translateEnterY: 96,
  translateExitY: -86
} as const;
