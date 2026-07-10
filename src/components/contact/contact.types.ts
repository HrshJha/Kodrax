export type ContactLinkKind = "email" | "github" | "linkedin" | "resume";

export interface ContactLinkItem {
  href: string;
  isExternal?: boolean;
  kind: ContactLinkKind;
  label: string;
  value: string;
}

export interface ContactProps {
  className?: string;
}
