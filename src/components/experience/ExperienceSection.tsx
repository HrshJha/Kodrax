"use client";

import {
  motion,
  type MotionStyle,
  type MotionValue,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import type { CSSProperties } from "react";
import { useRef } from "react";

import { ExperienceCard } from "@/components/experience/ExperienceCard";
import {
  EXPERIENCE_MOTION,
  EXPERIENCE_SCROLL_LENGTH_VH,
  EXPERIENCE_SECTION_ID
} from "@/components/experience/experience.constants";
import { experiences } from "@/components/experience/experience.data";
import type {
  Experience,
  ExperienceProps
} from "@/components/experience/experience.types";
import { cn } from "@/lib/utils";

import styles from "./Experience.module.css";

interface AnimatedChapterProps {
  experience: Experience;
  index: number;
  progress: MotionValue<number>;
}

function AnimatedChapter({
  experience,
  index,
  progress
}: Readonly<AnimatedChapterProps>) {
  const isFirst = index === 0;

  const opacity = useTransform(
    progress,
    isFirst ? [0, 0.08, 0.38, 0.52] : [0.38, 0.47, 0.52, 1],
    isFirst
      ? [
          EXPERIENCE_MOTION.hiddenOpacity,
          EXPERIENCE_MOTION.activeOpacity,
          EXPERIENCE_MOTION.activeOpacity,
          EXPERIENCE_MOTION.inactiveOpacity
        ]
      : [
          EXPERIENCE_MOTION.hiddenOpacity,
          EXPERIENCE_MOTION.inactiveOpacity,
          EXPERIENCE_MOTION.activeOpacity,
          EXPERIENCE_MOTION.activeOpacity
        ]
  );

  const y = useTransform(
    progress,
    isFirst ? [0, 0.1, 0.38, 0.56] : [0.36, 0.48, 0.58, 1],
    isFirst
      ? [
          EXPERIENCE_MOTION.translateEnterY,
          0,
          0,
          EXPERIENCE_MOTION.translateExitY
        ]
      : [EXPERIENCE_MOTION.translateEnterY, 28, 0, 0]
  );

  const scale = useTransform(
    progress,
    isFirst ? [0, 0.1, 0.38, 0.56] : [0.36, 0.48, 0.58, 1],
    isFirst
      ? [EXPERIENCE_MOTION.inactiveScale, 1, 1, EXPERIENCE_MOTION.inactiveScale]
      : [EXPERIENCE_MOTION.inactiveScale, 0.99, 1, 1]
  );

  const imageParallaxY = useTransform(
    progress,
    isFirst ? [0.08, 0.48, 0.68] : [0.5, 0.72, 1],
    isFirst
      ? [-EXPERIENCE_MOTION.imageParallaxY, 0, EXPERIENCE_MOTION.imageParallaxY]
      : [-EXPERIENCE_MOTION.imageParallaxY, 0, EXPERIENCE_MOTION.imageParallaxY]
  );

  const chapterStyle = {
    opacity,
    scale,
    y,
    zIndex: isFirst ? 1 : 2
  } satisfies MotionStyle;

  return (
    <motion.div className={styles.chapterMotion} style={chapterStyle}>
      <ExperienceCard experience={experience} imageParallaxY={imageParallaxY} />
    </motion.div>
  );
}

export function ExperienceSection({ className }: Readonly<ExperienceProps>) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
    target: sectionRef
  });

  return (
    <section
      aria-labelledby="experience-heading"
      className={cn(
        styles.experience,
        shouldReduceMotion && styles.experienceReduced,
        className
      )}
      id={EXPERIENCE_SECTION_ID}
      ref={sectionRef}
      style={
        {
          "--experience-scroll-height": `${EXPERIENCE_SCROLL_LENGTH_VH}vh`
        } as CSSProperties
      }
    >
      <h2 className={styles.visuallyHidden} id="experience-heading">
        Experience
      </h2>

      {shouldReduceMotion ? null : (
        <div className={styles.stage}>
          <div className={styles.stack}>
            {experiences.map((experience, index) => (
              <AnimatedChapter
                experience={experience}
                index={index}
                key={experience.slug}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      )}

      <div
        className={cn(
          styles.mobileStack,
          shouldReduceMotion && styles.reducedStack
        )}
      >
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience.slug} />
        ))}
      </div>
    </section>
  );
}
