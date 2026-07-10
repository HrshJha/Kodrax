"use client";

import { ExperienceImage } from "@/components/experience/ExperienceImage";
import type { Experience } from "@/components/experience/experience.types";
import { cn } from "@/lib/utils";

import styles from "./Experience.module.css";

interface ExperienceCardProps {
  className?: string;
  experience: Experience;
}

export function ExperienceCard({
  className,
  experience
}: Readonly<ExperienceCardProps>) {
  const hasLongCompanyName = experience.company.length > 12;

  return (
    <article className={cn(styles.card, className)}>
      <div className={styles.content}>
        <header>
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
        </header>

        <p className={styles.summary}>
          {experience.summary}
        </p>

        <section
          aria-label={`${experience.company} selected work`}
          className={styles.selectedWork}
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
        </section>
      </div>

      <ExperienceImage image={experience.image} />
    </article>
  );
}
