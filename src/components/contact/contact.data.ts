import type { ContactLinkItem } from "@/components/contact/contact.types";

export const contactLinks = [
  {
    href: "mailto:jhaharsh451@gmail.com",
    kind: "email",
    label: "Email",
    value: "jhaharsh451@gmail.com"
  },
  {
    href: "https://www.linkedin.com/in/hrshjha/",
    isExternal: true,
    kind: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/hrshjha"
  },
  {
    href: "https://github.com/HrshJha",
    isExternal: true,
    kind: "github",
    label: "GitHub",
    value: "github.com/HrshJha"
  },
  {
    href: "#footer",
    kind: "resume",
    label: "Resume",
    value: "Resume"
  }
] satisfies readonly ContactLinkItem[];
