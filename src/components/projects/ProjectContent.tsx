import type { ReactNode } from "react";

import { ProjectReadMoreButton } from "@/components/projects/ProjectReadMoreButton";
import {
  PROJECT_LONG_TITLE_CHARACTER_THRESHOLD,
  PROJECT_PREVIEW_HIGHLIGHT_COUNT
} from "@/components/projects/project.constants";
import type { ProjectCaseStudy } from "@/components/projects/project.types";
import { cn } from "@/lib/utils";

import styles from "./Projects.module.css";

interface ProjectContentProps {
  mediaSlot?: ReactNode;
  project: ProjectCaseStudy;
}

export function ProjectContent({
  mediaSlot,
  project
}: Readonly<ProjectContentProps>) {
  const previewHighlights = project.keyFeatures.slice(
    0,
    PROJECT_PREVIEW_HIGHLIGHT_COUNT
  );
  const isLongTitle =
    project.title.length >= PROJECT_LONG_TITLE_CHARACTER_THRESHOLD;

  return (
    <article className={styles.projectContent} aria-live="polite">
      <p className={styles.projectNumber}>{project.number}</p>
      <div className={styles.projectHeadingGroup}>
        <h3
          className={cn(
            styles.projectTitle,
            isLongTitle && styles.projectTitleLong
          )}
        >
          {project.title}
        </h3>
        <p className={styles.projectDescription}>{project.shortDescription}</p>
      </div>

      {mediaSlot ? (
        <div className={styles.mobileMediaSlot}>{mediaSlot}</div>
      ) : null}

      <ul
        className={styles.projectHighlights}
        aria-label={`${project.title} key highlights`}
      >
        {previewHighlights.map((highlight) => (
          <li className={styles.projectHighlight} key={highlight}>
            {highlight}
          </li>
        ))}
      </ul>

      <div
        className={styles.stackWrap}
        aria-label={`${project.title} technology stack`}
      >
        {project.techStack.slice(0, 8).map((tech) => (
          <span className={styles.stackItem} key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <div className={styles.projectActions}>
        <ProjectReadMoreButton slug={project.slug} />
        <a
          className={styles.githubLink}
          href={project.githubUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
