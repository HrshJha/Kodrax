"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

import { PROJECT_MOTION } from "@/components/projects/project.constants";
import type { ProjectCaseStudy } from "@/components/projects/project.types";

import styles from "./Projects.module.css";

interface ProjectMediaProps {
  activeIndex: number;
  projects: readonly ProjectCaseStudy[];
  reduceMotion: boolean;
}

export function ProjectMedia({
  activeIndex,
  projects,
  reduceMotion
}: Readonly<ProjectMediaProps>) {
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      if (!reduceMotion && index === activeIndex) {
        void video.play().catch(() => undefined);
        return;
      }

      video.pause();
    });
  }, [activeIndex, reduceMotion]);

  return (
    <div className={styles.mediaFrame}>
      {projects.map((project, index) => {
        const shouldMount = Math.abs(index - activeIndex) <= 1;

        if (!shouldMount) {
          return null;
        }

        return (
          <motion.div
            animate={{ opacity: index === activeIndex ? 1 : 0 }}
            aria-hidden={index !== activeIndex}
            className={styles.mediaScene}
            initial={{ opacity: index === activeIndex ? 1 : 0 }}
            key={project.slug}
            transition={{
              duration: reduceMotion ? 0 : PROJECT_MOTION.crossfadeDuration,
              ease: PROJECT_MOTION.easeOutCubic
            }}
          >
            <video
              aria-label={`${project.title} cinematic project video`}
              autoPlay={!reduceMotion && index === activeIndex}
              className={styles.projectVideo}
              loop
              muted
              playsInline
              preload={index === activeIndex ? "auto" : "metadata"}
              ref={(node) => {
                videoRefs.current[index] = node;
              }}
            >
              <source src={project.videoSrc} type="video/mp4" />
              Your browser does not support embedded project video.
            </video>
          </motion.div>
        );
      })}
    </div>
  );
}
