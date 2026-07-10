"use client";

import { motion, type MotionValue } from "framer-motion";

import { ExperienceImage } from "@/components/experience/ExperienceImage";
import { EXPERIENCE_MOTION } from "@/components/experience/experience.constants";
import type { Experience } from "@/components/experience/experience.types";
import { cn } from "@/lib/utils";

import styles from "./Experience.module.css";

interface ExperienceCardProps {
  className?: string;
  experience: Experience;
  imageParallaxY?: MotionValue<number>;
}

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: EXPERIENCE_MOTION.contentStagger
    }
  }
} as const;

const contentItemVariants = {
  hidden: {
    opacity: 0,
    y: 16
  },
  visible: {
    opacity: 1,
    y: 0
  }
} as const;

export function ExperienceCard({
  className,
  experience,
  imageParallaxY
}: Readonly<ExperienceCardProps>) {
  const hasLongCompanyName = experience.company.length > 12;

  return (
    <article className={cn(styles.card, className)}>
      <motion.div
        className={styles.content}
        initial="hidden"
        transition={{
          duration: EXPERIENCE_MOTION.contentDuration,
          ease: EXPERIENCE_MOTION.easeOutCubic
        }}
        variants={contentVariants}
        viewport={{ amount: 0.35, once: true }}
        whileInView="visible"
      >
        <motion.header variants={contentItemVariants}>
          <h3
            className={cn(
              styles.company,
              hasLongCompanyName && styles.companyLong
            )}
          >
            {experience.company}
          </h3>
          <p className={styles.role}>{experience.role}</p>
          <p className={styles.duration}>{experience.duration}</p>
        </motion.header>

        <motion.p className={styles.summary} variants={contentItemVariants}>
          {experience.summary}
        </motion.p>

        <motion.section
          aria-label={`${experience.company} selected work`}
          className={styles.selectedWork}
          variants={contentItemVariants}
        >
          <h4 className={styles.selectedWorkTitle}>Selected Work</h4>
          <ol className={styles.selectedWorkList}>
            {experience.selectedWork.map((item, index) => (
              <li className={styles.selectedWorkItem} key={item}>
                <span className={styles.selectedWorkNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </motion.section>
      </motion.div>

      <ExperienceImage image={experience.image} parallaxY={imageParallaxY} />
    </article>
  );
}
