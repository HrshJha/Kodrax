export type FooterLinkKind = "email" | "github" | "linkedin" | "resume";

export interface FooterLinkItem {
  readonly ariaLabel?: string;
  readonly href: string;
  readonly isExternal?: boolean;
  readonly kind: FooterLinkKind;
  readonly label: string;
}

export interface FooterProps {
  readonly className?: string;
}

export interface FooterLinksProps {
  readonly shouldReduceMotion: boolean;
}
