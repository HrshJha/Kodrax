"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import { type CSSProperties, useEffect, useRef, useState } from "react";

import { ProjectContent } from "@/components/projects/ProjectContent";
import { ProjectMedia } from "@/components/projects/ProjectMedia";
import { ProjectTimeline } from "@/components/projects/ProjectTimeline";
import {
  PROJECT_MOTION,
  PROJECT_SCROLL_LENGTH_PER_PROJECT_VH,
  PROJECTS_SECTION_ID
} from "@/components/projects/project.constants";
import { projects } from "@/components/projects/project.data";
import type { ProjectCaseStudy } from "@/components/projects/project.types";
import { clampProgress } from "@/components/landing/landing.utils";
import { cn } from "@/lib/utils";

import styles from "./Projects.module.css";

interface ProjectsProps {
  className?: string;
}

interface MobileProjectProps {
  project: ProjectCaseStudy;
  reduceMotion: boolean;
}

function getActiveIndex(progress: number, total: number): number {
  return Math.min(Math.floor(progress * total), total - 1);
}

function MobileProject({
  project,
  reduceMotion
}: Readonly<MobileProjectProps>) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || reduceMotion) {
      video?.pause();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          void video.play().catch(() => undefined);
          return;
        }

        video.pause();
      },
      { threshold: 0.35 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [reduceMotion]);

  return (
    <article className={styles.mobileCard}>
      <ProjectContent
        mediaSlot={
          <div className={styles.mobileMedia}>
            <video
              aria-label={`${project.title} cinematic project video`}
              className={styles.mobileVideo}
              loop
              muted
              playsInline
              preload="metadata"
              ref={videoRef}
            >
              <source src={project.videoSrc} type="video/mp4" />
              Your browser does not support embedded project video.
            </video>
          </div>
        }
        project={project}
      />
    </article>
  );
}

export function Projects({ className }: Readonly<ProjectsProps>) {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex] ?? projects[0]!;

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    target: sectionRef
  });
  const timelineProgress = useTransform(scrollYProgress, clampProgress);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = clampProgress(latest);
    const nextActiveIndex = getActiveIndex(progress, projects.length);

    setActiveIndex((currentActiveIndex) =>
      currentActiveIndex === nextActiveIndex
        ? currentActiveIndex
        : nextActiveIndex
    );
  });

  return (
    <section
      aria-labelledby="projects-heading"
      className={cn(styles.projects, className)}
      id={PROJECTS_SECTION_ID}
      ref={sectionRef}
    >
      <div
        className={styles.desktopStory}
        style={
          {
            "--projects-scroll-height": `${projects.length * PROJECT_SCROLL_LENGTH_PER_PROJECT_VH}vh`
          } as CSSProperties
        }
      >
        <div className={styles.stickyStage}>
          <div className={styles.leftColumn}>
            <ProjectTimeline
              activeIndex={activeIndex}
              progress={timelineProgress}
              projects={projects}
              reduceMotion={Boolean(shouldReduceMotion)}
            />
            <div className={styles.contentSlot}>
              <h2 className={styles.visuallyHidden} id="projects-heading">
                Projects
              </h2>
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  animate={{ opacity: 1 }}
                  className={styles.contentPanel}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                  key={activeProject.slug}
                  transition={{
                    duration: shouldReduceMotion
                      ? 0
                      : PROJECT_MOTION.textDuration,
                    ease: PROJECT_MOTION.easeOutCubic
                  }}
                >
                  <ProjectContent project={activeProject} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <ProjectMedia activeIndex={activeIndex} projects={projects} />
        </div>
      </div>

      <div className={styles.mobileStory}>
        <h2 className={styles.visuallyHidden}>Projects</h2>
        {projects.map((project) => (
          <MobileProject
            key={project.slug}
            project={project}
            reduceMotion={Boolean(shouldReduceMotion)}
          />
        ))}
      </div>
    </section>
  );
}
