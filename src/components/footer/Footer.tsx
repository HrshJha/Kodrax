"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { BackToTop } from "@/components/footer/BackToTop";
import {
  FOOTER_MOTION,
  FOOTER_SECTION_ID,
  FOOTER_WORDMARK_PATTERN
} from "@/components/footer/footer.constants";
import type { FooterProps } from "@/components/footer/footer.types";
import { usePrefersReducedMotion } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

import styles from "./Footer.module.css";

export function Footer({ className }: Readonly<FooterProps>) {
  const footerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ["start end", "start center"],
    target: footerRef
  });
  const wordmarkOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.03, FOOTER_MOTION.wordmarkOpacity]
  );

  return (
    <footer
      aria-label="Portfolio closing wordmark"
      className={cn(styles.footer, className)}
      id={FOOTER_SECTION_ID}
      ref={footerRef}
    >
      <div aria-hidden="true" className={styles.wordmarkFrame}>
        <motion.div
          className={styles.wordmark}
          style={{
            opacity: shouldReduceMotion
              ? FOOTER_MOTION.wordmarkOpacity
              : wordmarkOpacity
          }}
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
