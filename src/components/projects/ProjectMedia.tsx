"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

import type { ProjectCaseStudy } from "@/components/projects/project.types";
import { cn } from "@/lib/utils";

import styles from "./Projects.module.css";

interface ProjectMediaProps {
  activeIndex: number;
  projects: readonly ProjectCaseStudy[];
}

export function ProjectMedia({
  activeIndex,
  projects
}: Readonly<ProjectMediaProps>) {
  const shouldReduceMotion = useReducedMotion();
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      if (!shouldReduceMotion && index === activeIndex) {
        void video.play().catch(() => undefined);
        return;
      }

      video.pause();
    });
  }, [activeIndex, shouldReduceMotion]);

  return (
    <div className={styles.mediaFrame}>
      {projects.map((project, index) => (
        <div
          aria-hidden={index !== activeIndex}
          className={cn(
            styles.mediaScene,
            index === activeIndex && styles.mediaSceneActive
          )}
          key={project.slug}
        >
          <video
            aria-label={`${project.title} cinematic project video`}
            autoPlay={!shouldReduceMotion && index === activeIndex}
            className={styles.projectVideo}
            loop
            muted
            playsInline
            preload={
              index === activeIndex || index === activeIndex + 1
                ? "auto"
                : "none"
            }
            ref={(node) => {
              videoRefs.current[index] = node;
            }}
          >
            <source src={project.videoSrc} type="video/mp4" />
            Your browser does not support embedded project video.
          </video>
        </div>
      ))}
    </div>
  );
}
