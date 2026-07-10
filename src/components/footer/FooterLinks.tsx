"use client";

import { motion } from "framer-motion";

import {
  FOOTER_LINKS,
  FOOTER_MOTION
} from "@/components/footer/footer.constants";
import type { FooterLinksProps } from "@/components/footer/footer.types";

import styles from "./Footer.module.css";

const linkVariants = {
  hidden: {
    opacity: 0,
    y: FOOTER_MOTION.contentTranslateY
  },
  visible: {
    opacity: 1,
    y: 0
  }
} as const;

export function FooterLinks({
  shouldReduceMotion
}: Readonly<FooterLinksProps>) {
  const initialState = shouldReduceMotion ? "visible" : "hidden";
  const transition = {
    duration: shouldReduceMotion ? 0 : FOOTER_MOTION.contentDuration,
    ease: FOOTER_MOTION.easeOutCubic
  };

  return (
    <nav aria-label="Footer links" className={styles.links}>
      <motion.ul
        className={styles.linkList}
        initial={initialState}
        transition={{
          staggerChildren: shouldReduceMotion ? 0 : FOOTER_MOTION.delayStep
        }}
        variants={{
          hidden: {},
          visible: {}
        }}
        viewport={{ amount: 0.4, once: true }}
        whileInView="visible"
      >
        {FOOTER_LINKS.map((link) => (
          <motion.li
            className={styles.linkItem}
            key={link.kind}
            transition={transition}
            variants={linkVariants}
          >
            <a
              aria-label={link.ariaLabel ?? link.label}
              className={styles.link}
              href={link.href}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              target={link.isExternal ? "_blank" : undefined}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
