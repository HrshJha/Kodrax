import type { FooterLinkItem } from "@/components/footer/footer.types";

export const FOOTER_SECTION_ID = "footer";

export const FOOTER_HOME_TARGET_ID = "home";

export const FOOTER_WORDMARK_PATTERN =
  "HARSH JHA • ENGINEER • HARSH JHA • BUILDER • HARSH JHA • ENGINEER • HARSH JHA • BUILDER •";

export const FOOTER_HEADING = "Let's Build Something Meaningful.";

export const FOOTER_DESCRIPTION = "Enable collaboration.";

export const FOOTER_LINKS = [
  {
    href: "mailto:jhaharsh451@gmail.com",
    kind: "email",
    label: "Email"
  },
  {
    href: "https://github.com/HrshJha",
    isExternal: true,
    kind: "github",
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/hrshjha/",
    isExternal: true,
    kind: "linkedin",
    label: "LinkedIn"
  },
  {
    ariaLabel: "Resume placeholder until a resume PDF is available",
    href: "#footer",
    kind: "resume",
    label: "Resume"
  }
] satisfies readonly FooterLinkItem[];

export const FOOTER_MOTION = {
  contentDuration: 0.65,
  contentTranslateY: 16,
  delayStep: 0.08,
  easeOutCubic: [0.33, 1, 0.68, 1],
  wordmarkDuration: 1.2,
  wordmarkOpacity: 0.075
} as const;
