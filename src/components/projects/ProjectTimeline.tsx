import { motion, type MotionValue } from "framer-motion";

import type { ProjectCaseStudy } from "@/components/projects/project.types";
import { cn } from "@/lib/utils";

import styles from "./Projects.module.css";

interface ProjectTimelineProps {
  activeIndex: number;
  progress: MotionValue<number>;
  projects: readonly ProjectCaseStudy[];
  reduceMotion: boolean;
}

export function ProjectTimeline({
  activeIndex,
  progress,
  projects,
  reduceMotion
}: Readonly<ProjectTimelineProps>) {
  return (
    <div className={styles.timeline} aria-hidden="true">
      <div className={styles.timelineTrack}>
        <motion.div
          className={styles.timelineFill}
          style={{ scaleY: reduceMotion ? 0 : progress }}
        />
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
