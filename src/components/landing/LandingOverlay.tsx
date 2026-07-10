"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useTransform
} from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

import cloudImage from "../../../assests/cloud.png";
import {
  LANDING_APERTURE,
  LANDING_REDUCED_MOTION_SCROLL_DISTANCE_PX,
  LANDING_REVEAL_SCROLL_DISTANCE_PX,
  LANDING_REVEAL_TOTAL_SCROLL_PX,
  LANDING_REVEAL_TRIGGER_PX
} from "@/components/landing/landing.constants";
import type { LandingOverlayProps } from "@/components/landing/landing.types";
import { clampProgress } from "@/components/landing/landing.utils";
import { cn } from "@/lib/utils";

import styles from "./LandingOverlay.module.css";

export function LandingOverlay({ className }: Readonly<LandingOverlayProps>) {
  const rootRef = useRef<HTMLElement>(null);
  const progress = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();
  const rootStyle = {
    "--landing-reveal-scroll-distance": `${LANDING_REVEAL_TOTAL_SCROLL_PX}px`
  } as CSSProperties;

  const apertureWidth = useTransform(
    progress,
    [0, 1],
    shouldReduceMotion
      ? [LANDING_APERTURE.initialWidth, LANDING_APERTURE.initialWidth]
      : [LANDING_APERTURE.initialWidth, LANDING_APERTURE.revealedWidth]
  );

  const apertureHeight = useTransform(
    progress,
    [0, 1],
    shouldReduceMotion
      ? [LANDING_APERTURE.initialHeight, LANDING_APERTURE.initialHeight]
      : [LANDING_APERTURE.initialHeight, LANDING_APERTURE.revealedHeight]
  );

  const overlayOpacity = useTransform(progress, [0, 1], [1, 0]);
  const maskImage = useMotionTemplate`radial-gradient(ellipse ${apertureWidth} ${apertureHeight} at 50% 50%, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.52) 72%, #000 100%)`;

  useEffect(() => {
    let frame = 0;

    const updateProgress = () => {
      frame = 0;

      const root = rootRef.current;
      if (!root) {
        progress.set(0);
        return;
      }

      const sectionTop = root.offsetTop;
      const scrollWithinSection = window.scrollY - sectionTop;

      if (scrollWithinSection < LANDING_REVEAL_TRIGGER_PX) {
        progress.set(0);
        return;
      }

      const revealDistance = shouldReduceMotion
        ? LANDING_REDUCED_MOTION_SCROLL_DISTANCE_PX
        : LANDING_REVEAL_SCROLL_DISTANCE_PX;

      const revealProgress =
        (scrollWithinSection - LANDING_REVEAL_TRIGGER_PX) / revealDistance;

      progress.set(clampProgress(revealProgress));
    };

    const requestUpdate = () => {
      if (frame !== 0) {
        return;
      }

      frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });

    return () => {
      if (frame !== 0) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [progress, shouldReduceMotion]);

  return (
    <section
      ref={rootRef}
      aria-label="Landing reveal"
      className={cn(styles.root, className)}
      style={rootStyle}
    >
      <div className={styles.stage}>
        <div aria-hidden="true" className={styles.cloudLayer}>
          <Image
            alt=""
            className={styles.cloudImage}
            fill
            priority
            sizes="100vw"
            src={cloudImage}
          />
        </div>

        <motion.div
          aria-hidden="true"
          className={styles.overlay}
          style={{
            maskImage,
            opacity: overlayOpacity,
            WebkitMaskImage: maskImage
          }}
        />
      </div>
    </section>
  );
}
