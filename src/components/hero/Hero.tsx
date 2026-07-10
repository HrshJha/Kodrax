"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import {
  HERO_BACKGROUND_SRC,
  HERO_HEADING_LINES,
  HERO_INTRO,
  HERO_KICKER,
  HERO_LEFT_LABEL,
  HERO_LOCATION_LABEL,
  HERO_MOTION,
  HERO_NAV_ITEMS,
  HERO_PRIMARY_CTA,
  HERO_SCROLL_LABEL,
  HERO_SECONDARY_CTA,
  HERO_SECTION_INDICATOR
} from "@/components/hero/Hero.constants";
import type { HeroProps } from "@/components/hero/Hero.types";
import { cn } from "@/lib/utils";

import styles from "./Hero.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: HERO_MOTION.translateY },
  visible: { opacity: 1, y: 0 }
} as const;

const fadeOnly = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
} as const;

export function Hero({ className }: Readonly<HeroProps>) {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const initialState = shouldReduceMotion ? "visible" : "hidden";
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
    target: heroRef
  });
  const cloudY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [0, -18]
  );

  return (
    <section
      aria-labelledby="hero-heading"
      className={cn(styles.hero, className)}
      id="home"
      ref={heroRef}
    >
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? { scale: 1 } : { scale: 1.03 }}
        className={styles.background}
        initial={{ scale: 1 }}
        style={{ y: cloudY }}
        transition={{
          duration: HERO_MOTION.cloudScaleDuration,
          ease: "linear",
          repeat: shouldReduceMotion ? 0 : Infinity,
          repeatType: "mirror"
        }}
      >
        <Image
          alt=""
          className={styles.backgroundImage}
          fill
          priority
          sizes="100vw"
          src={HERO_BACKGROUND_SRC}
        />
      </motion.div>

      <div aria-hidden="true" className={styles.transitionCloud} />

      <motion.nav
        aria-label="Primary"
        className={styles.nav}
        initial={initialState}
        animate="visible"
        variants={fadeOnly}
        transition={{
          delay: HERO_MOTION.delayStep,
          duration: HERO_MOTION.duration,
          ease: HERO_MOTION.easeOutCubic
        }}
      >
        <a className={styles.brand} href="#home">
          HARSH JHA
        </a>

        <ul className={styles.navList}>
          {HERO_NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a className={styles.navLink} href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>

      <div className={styles.content}>
        <motion.p
          animate="visible"
          className={styles.kicker}
          initial={initialState}
          transition={{
            delay: HERO_MOTION.delayStep * 2,
            duration: HERO_MOTION.duration,
            ease: HERO_MOTION.easeOutCubic
          }}
          variants={fadeUp}
        >
          {HERO_KICKER}
        </motion.p>

        <h1 className={styles.heading} id="hero-heading">
          {HERO_HEADING_LINES.map((line, index) => (
            <motion.span
              animate="visible"
              className={styles.headingLine}
              initial={initialState}
              key={line}
              transition={{
                delay: HERO_MOTION.delayStep * (3 + index),
                duration: HERO_MOTION.duration,
                ease: HERO_MOTION.easeOutCubic
              }}
              variants={fadeUp}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          animate="visible"
          className={styles.intro}
          initial={initialState}
          transition={{
            delay: HERO_MOTION.delayStep * 6,
            duration: HERO_MOTION.duration,
            ease: HERO_MOTION.easeOutCubic
          }}
          variants={fadeUp}
        >
          {HERO_INTRO}
        </motion.p>

        <motion.div
          animate="visible"
          className={styles.ctaGroup}
          initial={initialState}
          transition={{
            delay: HERO_MOTION.delayStep * 7,
            duration: HERO_MOTION.duration,
            ease: HERO_MOTION.easeOutCubic
          }}
          variants={fadeUp}
        >
          <a className={styles.primaryCta} href={HERO_PRIMARY_CTA.href}>
            {HERO_PRIMARY_CTA.label}
          </a>
          <a className={styles.secondaryCta} href={HERO_SECONDARY_CTA.href}>
            {HERO_SECONDARY_CTA.label}
          </a>
        </motion.div>
      </div>

      <motion.p
        aria-hidden="true"
        animate="visible"
        className={cn(styles.sideLabel, styles.sideLabelLeft)}
        initial={initialState}
        transition={{
          delay: HERO_MOTION.delayStep * 8,
          duration: HERO_MOTION.duration,
          ease: HERO_MOTION.easeOutCubic
        }}
        variants={fadeUp}
      >
        {HERO_LEFT_LABEL}
      </motion.p>

      <motion.p
        aria-hidden="true"
        animate="visible"
        className={cn(styles.sideLabel, styles.sideLabelRight)}
        initial={initialState}
        transition={{
          delay: HERO_MOTION.delayStep * 8,
          duration: HERO_MOTION.duration,
          ease: HERO_MOTION.easeOutCubic
        }}
        variants={fadeUp}
      >
        {HERO_LOCATION_LABEL}
      </motion.p>

      <motion.p
        aria-hidden="true"
        animate="visible"
        className={cn(styles.bottomLabel, styles.bottomLeft)}
        initial={initialState}
        transition={{
          delay: HERO_MOTION.delayStep * 9,
          duration: HERO_MOTION.duration,
          ease: HERO_MOTION.easeOutCubic
        }}
        variants={fadeUp}
      >
        {HERO_SCROLL_LABEL}
      </motion.p>

      <motion.p
        aria-hidden="true"
        animate="visible"
        className={cn(styles.bottomLabel, styles.bottomRight)}
        initial={initialState}
        transition={{
          delay: HERO_MOTION.delayStep * 9,
          duration: HERO_MOTION.duration,
          ease: HERO_MOTION.easeOutCubic
        }}
        variants={fadeUp}
      >
        {HERO_SECTION_INDICATOR}
      </motion.p>
    </section>
  );
}
