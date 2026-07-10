"use client";

import { motion, useReducedMotion } from "framer-motion";

import { BackToTop } from "@/components/footer/BackToTop";
import { FooterLinks } from "@/components/footer/FooterLinks";
import {
  FOOTER_DESCRIPTION,
  FOOTER_HEADING,
  FOOTER_MOTION,
  FOOTER_SECTION_ID,
  FOOTER_WORDMARK_PATTERN
} from "@/components/footer/footer.constants";
import type { FooterProps } from "@/components/footer/footer.types";
import { cn } from "@/lib/utils";

import styles from "./Footer.module.css";

const contentVariants = {
  hidden: {
    opacity: 0,
    y: FOOTER_MOTION.contentTranslateY
  },
  visible: {
    opacity: 1,
    y: 0
  }
} as const;

const wordmarkVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: FOOTER_MOTION.wordmarkOpacity
  }
} as const;

export function Footer({ className }: Readonly<FooterProps>) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const initialState = shouldReduceMotion ? "visible" : "hidden";
  const contentTransition = {
    duration: shouldReduceMotion ? 0 : FOOTER_MOTION.contentDuration,
    ease: FOOTER_MOTION.easeOutCubic
  };

  return (
    <footer
      aria-labelledby="footer-heading"
      className={cn(styles.footer, className)}
      id={FOOTER_SECTION_ID}
    >
      <motion.div
        className={styles.content}
        initial={initialState}
        transition={contentTransition}
        variants={contentVariants}
        viewport={{ amount: 0.45, once: true }}
        whileInView="visible"
      >
        <h2 className={styles.heading} id="footer-heading">
          {FOOTER_HEADING}
        </h2>
        <p className={styles.description}>{FOOTER_DESCRIPTION}</p>
        <FooterLinks shouldReduceMotion={shouldReduceMotion} />
      </motion.div>

      <div aria-hidden="true" className={styles.wordmarkFrame}>
        <motion.div
          className={styles.wordmark}
          initial={initialState}
          transition={{
            duration: shouldReduceMotion ? 0 : FOOTER_MOTION.wordmarkDuration,
            ease: FOOTER_MOTION.easeOutCubic
          }}
          variants={wordmarkVariants}
          viewport={{ amount: 0.05, once: true }}
          whileInView="visible"
        >
          <span className={styles.wordmarkTrack}>
            <span className={styles.wordmarkSequence}>
              {FOOTER_WORDMARK_PATTERN}
            </span>
            <span aria-hidden="true" className={styles.wordmarkSequence}>
              {FOOTER_WORDMARK_PATTERN}
            </span>
          </span>
        </motion.div>
      </div>

      <BackToTop />
    </footer>
  );
}
