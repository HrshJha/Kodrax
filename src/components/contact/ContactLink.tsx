import type { ContactLinkItem } from "@/components/contact/contact.types";

import styles from "./Contact.module.css";

interface ContactLinkProps {
  link: ContactLinkItem;
}

export function ContactLink({ link }: Readonly<ContactLinkProps>) {
  return (
    <a
      aria-label={`${link.label}: ${link.value}`}
      className={styles.linkRow}
      href={link.href}
      rel={link.isExternal ? "noopener noreferrer" : undefined}
      target={link.isExternal ? "_blank" : undefined}
    >
      <span className={styles.linkLabel}>{link.label}</span>
      <span className={styles.linkValue}>{link.value}</span>
    </a>
  );
}
