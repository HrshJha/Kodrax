export const LANDING_REVEAL_TRIGGER_PX = 24;

export const LANDING_REVEAL_SCROLL_DISTANCE_PX = 900;

export const LANDING_REDUCED_MOTION_SCROLL_DISTANCE_PX = 120;

export const LANDING_REVEAL_TOTAL_SCROLL_PX =
  LANDING_REVEAL_TRIGGER_PX + LANDING_REVEAL_SCROLL_DISTANCE_PX;

export const LANDING_APERTURE = {
  initialHeight: "10vh",
  initialWidth: "15vw",
  revealedHeight: "160vh",
  revealedWidth: "160vw"
} as const;
