"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform
} from "framer-motion";
import Image from "next/image";
import type { PointerEvent } from "react";

import {
  ABOUT_EDUCATION,
  ABOUT_EYEBROW,
  ABOUT_MOTION,
  ABOUT_NAME,
  ABOUT_PORTRAIT_ALT,
  ABOUT_PORTRAIT_SRC,
  ABOUT_ROLE_TAG,
  ABOUT_SUMMARY,
  ABOUT_TECH_STACK
} from "@/components/about/About.constants";
import type { AboutProps } from "@/components/about/About.types";
import { cn } from "@/lib/utils";

import styles from "./About.module.css";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
} as const;

const portraitReveal = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1 }
} as const;

const contentStack = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: ABOUT_MOTION.delayStep
    }
  }
} as const;

const contentBlock = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
} as const;

export function About({ className }: Readonly<AboutProps>) {
  const shouldReduceMotion = useReducedMotion();
  const initialState = shouldReduceMotion ? "visible" : "hidden";
  const viewport = { amount: 0.28, once: true };
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const portraitX = useTransform(pointerX, [0, 1], [-4, 4]);
  const portraitY = useTransform(pointerY, [0, 1], [-3, 3]);

  function handlePortraitPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (shouldReduceMotion) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  }

  function handlePortraitPointerLeave() {
    pointerX.set(0.5);
    pointerY.set(0.5);
  }

  return (
    <motion.section
      aria-labelledby="about-heading"
      className={cn(styles.about, className)}
      id="about"
      initial={initialState}
      transition={{
        duration: ABOUT_MOTION.duration,
        ease: ABOUT_MOTION.easeOutCubic
      }}
      variants={fadeUp}
      viewport={viewport}
      whileInView="visible"
    >
      <div className={styles.inner}>
        <motion.div
          className={styles.visualCanvas}
          initial={initialState}
          onPointerLeave={handlePortraitPointerLeave}
          onPointerMove={handlePortraitPointerMove}
          transition={{
            duration: ABOUT_MOTION.duration,
            ease: ABOUT_MOTION.easeOutCubic
          }}
          variants={portraitReveal}
          viewport={viewport}
          whileInView="visible"
        >
          <motion.p
            className={styles.visualKicker}
            initial={initialState}
            transition={{
              delay: ABOUT_MOTION.delayStep,
              duration: ABOUT_MOTION.duration,
              ease: ABOUT_MOTION.easeOutCubic
            }}
            variants={contentBlock}
            viewport={viewport}
            whileInView="visible"
          >
            {ABOUT_EYEBROW}
          </motion.p>
          <motion.div
            className={styles.portraitParallax}
            style={
              shouldReduceMotion ? undefined : { x: portraitX, y: portraitY }
            }
          >
            <div className={styles.portraitDrift}>
              <Image
                alt={ABOUT_PORTRAIT_ALT}
                className={styles.portrait}
                fill
                priority
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 50vw"
                src={ABOUT_PORTRAIT_SRC}
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.content}
          initial={initialState}
          transition={{
            delay: ABOUT_MOTION.delayStep * 2,
            duration: ABOUT_MOTION.duration,
            ease: ABOUT_MOTION.easeOutCubic
          }}
          variants={contentStack}
          viewport={viewport}
          whileInView="visible"
        >
          <motion.div className={styles.identity} variants={contentBlock}>
            <h2 className={styles.name} id="about-heading">
              {ABOUT_NAME}
            </h2>
            <p className={styles.roleTag}>{ABOUT_ROLE_TAG}</p>
          </motion.div>

          <motion.p className={styles.summary} variants={contentBlock}>
            {ABOUT_SUMMARY}
          </motion.p>

          <motion.section
            aria-label="Skills"
            className={styles.skills}
            variants={contentBlock}
          >
            {ABOUT_TECH_STACK.map((group) => (
              <div className={styles.skillRow} key={group.label}>
                <h3 className={styles.skillLabel}>{group.label}</h3>
                <ul className={styles.skillTags}>
                  {group.items.map((item) => (
                    <li className={styles.skillTag} key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.section>

          <motion.p className={styles.educationLine} variants={contentBlock}>
            {ABOUT_EDUCATION.institution} · {ABOUT_EDUCATION.degree} ·{" "}
            {ABOUT_EDUCATION.expectedGraduation} · {ABOUT_EDUCATION.cgpa}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
