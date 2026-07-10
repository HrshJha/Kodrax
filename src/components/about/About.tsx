"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import {
  ABOUT_EDUCATION,
  ABOUT_EYEBROW,
  ABOUT_NAME,
  ABOUT_PORTRAIT_ALT,
  ABOUT_PORTRAIT_SRC,
  ABOUT_ROLE_TAG,
  ABOUT_SUMMARY,
  ABOUT_TECH_STACK
} from "@/components/about/About.constants";
import type { AboutProps } from "@/components/about/About.types";
import { Reveal, revealChildVariants } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

import styles from "./About.module.css";

export function About({ className }: Readonly<AboutProps>) {
  return (
    <Reveal
      amount={0.2}
      aria-labelledby="about-heading"
      as="section"
      className={cn(styles.about, className)}
      duration="M"
      ease="primary"
      id="about"
      translate="medium"
    >
      <div className={styles.inner}>
        <Reveal
          amount={0.2}
          as="div"
          className={styles.visualCanvas}
          duration="M"
          ease="primary"
          scale
          translate="none"
        >
          <p
            className={styles.visualKicker}
          >
            {ABOUT_EYEBROW}
          </p>
          <div className={styles.portraitParallax}>
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
          </div>
        </Reveal>

        <Reveal
          amount={0.2}
          as="div"
          className={styles.content}
          duration="S"
          ease="primary"
          staggerChildren="D1"
          translate="small"
        >
          <motion.div
            className={styles.identity}
            variants={revealChildVariants}
          >
            <h2 className={styles.name} id="about-heading">
              {ABOUT_NAME}
            </h2>
            <p className={styles.roleTag}>{ABOUT_ROLE_TAG}</p>
          </motion.div>

          <motion.p className={styles.summary} variants={revealChildVariants}>
            {ABOUT_SUMMARY}
          </motion.p>

          <motion.section
            aria-label="Skills"
            className={styles.skills}
            variants={revealChildVariants}
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

          <motion.p
            className={styles.educationLine}
            variants={revealChildVariants}
          >
            {ABOUT_EDUCATION.institution} · {ABOUT_EDUCATION.degree} ·{" "}
            {ABOUT_EDUCATION.expectedGraduation} · {ABOUT_EDUCATION.cgpa}
          </motion.p>
        </Reveal>
      </div>
    </Reveal>
  );
}
