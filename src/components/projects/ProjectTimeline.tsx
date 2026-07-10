import { motion, type MotionValue } from "framer-motion";

import type { ProjectCaseStudy } from "@/components/projects/project.types";
import { cn } from "@/lib/utils";

import styles from "./Projects.module.css";

interface ProjectTimelineProps {
  activeIndex: number;
  progress: MotionValue<number> | number;
  projects: readonly ProjectCaseStudy[];
}

export function ProjectTimeline({
  activeIndex,
  progress,
  projects
}: Readonly<ProjectTimelineProps>) {
  return (
    <div className={styles.timeline} aria-hidden="true">
      <div className={styles.timelineTrack}>
        <div className={styles.timelineFillAxis}>
          <motion.div
            className={styles.timelineFill}
            style={{ scaleX: progress }}
          />
        </div>
      </div>
      <ol className={styles.timelineNodes}>
        {projects.map((project, index) => (
          <li
            className={cn(
              styles.timelineNode,
              index === activeIndex && styles.timelineNodeActive
            )}
            key={project.slug}
          >
            <span>{project.number}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
