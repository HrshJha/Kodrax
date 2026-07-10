import { FOOTER_LINKS } from "@/components/footer/footer.constants";

import styles from "./Footer.module.css";

export function FooterLinks() {
  return (
    <nav aria-label="Footer links" className={styles.links}>
      <ul className={styles.linkList}>
        {FOOTER_LINKS.map((link) => (
          <li className={styles.linkItem} key={link.kind}>
            <a
              aria-label={link.ariaLabel ?? link.label}
              className={styles.link}
              href={link.href}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              target={link.isExternal ? "_blank" : undefined}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
