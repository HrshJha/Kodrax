"use client";

import { BackToTop } from "@/components/footer/BackToTop";
import { FooterLinks } from "@/components/footer/FooterLinks";
import {
  FOOTER_DESCRIPTION,
  FOOTER_HEADING,
  FOOTER_SECTION_ID,
  FOOTER_WORDMARK_PATTERN
} from "@/components/footer/footer.constants";
import type { FooterProps } from "@/components/footer/footer.types";
import { cn } from "@/lib/utils";

import styles from "./Footer.module.css";

export function Footer({ className }: Readonly<FooterProps>) {
  return (
    <footer
      aria-labelledby="footer-heading"
      className={cn(styles.footer, className)}
      id={FOOTER_SECTION_ID}
    >
      <div className={styles.content}>
        <h2 className={styles.heading} id="footer-heading">
          {FOOTER_HEADING}
        </h2>
        <p className={styles.description}>{FOOTER_DESCRIPTION}</p>
        <FooterLinks />
      </div>

      <div aria-hidden="true" className={styles.wordmarkFrame}>
        <div className={styles.wordmark}>
          <span className={styles.wordmarkTrack}>
            <span className={styles.wordmarkSequence}>
              {FOOTER_WORDMARK_PATTERN}
            </span>
            <span aria-hidden="true" className={styles.wordmarkSequence}>
              {FOOTER_WORDMARK_PATTERN}
            </span>
          </span>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}
