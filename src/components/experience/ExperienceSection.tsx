"use client";

import {
  motion,
  type MotionStyle,
  type MotionValue,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef } from "react";

import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { EXPERIENCE_SECTION_ID } from "@/components/experience/experience.constants";
import { experiences } from "@/components/experience/experience.data";
import type {
  Experience,
  ExperienceProps
} from "@/components/experience/experience.types";
import { Reveal, usePrefersReducedMotion } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

import styles from "./Experience.module.css";

interface AnimatedChapterProps {
  experience: Experience;
  index: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
  total: number;
}

function AnimatedChapter({
  experience,
  index,
  progress,
  reduceMotion,
  total
}: Readonly<AnimatedChapterProps>) {
  const center = total <= 1 ? 0 : index / (total - 1);
  const halfSegment = total <= 1 ? 1 : 1 / (total - 1) / 2;
  const rotate = useTransform(
    progress,
    [center - halfSegment, center, center + halfSegment],
    reduceMotion ? [0, 0, 0] : [6, 0, 6],
    { clamp: true }
  );

  const chapterStyle = {
    rotate
  } satisfies MotionStyle;

  return (
    <motion.div className={styles.chapterMotion} style={chapterStyle}>
      <ExperienceCard experience={experience} />
    </motion.div>
  );
}

export function ExperienceSection({ className }: Readonly<ExperienceProps>) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = usePrefersReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: sectionRef
  });
  const timelineProgress = useTransform(scrollYProgress, [0, 1], [0, 1], {
    clamp: true
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
    >
      <h2 className={styles.visuallyHidden} id="experience-heading">
        Experience
      </h2>

      <Reveal
        amount={0.2}
        as="div"
        className={styles.stage}
        duration="M"
        ease="primary"
        translate="medium"
      >
        <div className={styles.experienceTimeline} aria-hidden="true">
          <motion.div
            className={styles.experienceTimelineFill}
            style={{
              scaleX: timelineProgress
            }}
          />
        </div>

          <div className={styles.stack}>
            {experiences.map((experience, index) => (
              <AnimatedChapter
                experience={experience}
                index={index}
                key={experience.slug}
                progress={scrollYProgress}
                reduceMotion={shouldReduceMotion}
                total={experiences.length}
              />
            ))}
          </div>
      </Reveal>
    </section>
  );
}
