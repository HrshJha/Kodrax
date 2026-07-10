import type { SectionId } from "@/lib/design-tokens";

export interface NavigationItem {
  href: `#${SectionId}`;
  label: string;
  sectionId: SectionId;
}

export interface SocialLink {
  href: string;
  label: string;
}
