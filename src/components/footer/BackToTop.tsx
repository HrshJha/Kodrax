"use client";

import type { MouseEvent } from "react";

import { usePrefersReducedMotion } from "@/components/motion/reveal";

import { FOOTER_HOME_TARGET_ID } from "@/components/footer/footer.constants";

import styles from "./Footer.module.css";

export function BackToTop() {
  const shouldReduceMotion = usePrefersReducedMotion();

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
    <a
      aria-label="Back to top"
      className={styles.backToTop}
      href={`#${FOOTER_HOME_TARGET_ID}`}
      onClick={handleClick}
    >
      ↑
    </a>
  );
}
