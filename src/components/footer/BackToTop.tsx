"use client";

import type { MouseEvent } from "react";

import { motion, useReducedMotion } from "framer-motion";

import {
  FOOTER_HOME_TARGET_ID,
  FOOTER_MOTION
} from "@/components/footer/footer.constants";

import styles from "./Footer.module.css";

export function BackToTop() {
  const shouldReduceMotion = useReducedMotion() ?? false;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const target = document.getElementById(FOOTER_HOME_TARGET_ID);

    if (!target) {
      return;
    }

    event.preventDefault();
    window.scrollTo({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      top: target.offsetTop
    });
  }

  return (
    <motion.a
      aria-label="Back to top"
      className={styles.backToTop}
      href={`#${FOOTER_HOME_TARGET_ID}`}
      initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
      onClick={handleClick}
      transition={{
        duration: shouldReduceMotion ? 0 : FOOTER_MOTION.contentDuration,
        ease: FOOTER_MOTION.easeOutCubic
      }}
      viewport={{ amount: 0.4, once: true }}
      whileInView={{ opacity: 1 }}
    >
      ↑
    </motion.a>
  );
}
