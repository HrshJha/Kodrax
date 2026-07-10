"use client";

import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { sectionAccentTokens } from "@/lib/design-tokens";
import type { SectionAccentToken, SectionId } from "@/lib/design-tokens";
import { cn } from "@/lib/utils";

import styles from "./section-progress-navigation.module.css";

interface ProgressSection {
  id: SectionId;
  label: string;
  number: string;
}

const PROGRESS_SECTIONS = [
  { id: "home", label: "Hero", number: "01" },
  { id: "about", label: "About", number: "02" },
  { id: "projects", label: "Projects", number: "03" },
  { id: "experience", label: "Experience", number: "04" },
  { id: "footer", label: "Contact", number: "05" }
] as const satisfies readonly ProgressSection[];

const DEFAULT_SECTION_ACCENT =
  sectionAccentTokens.find((token) => token.sectionId === "home") ??
  sectionAccentTokens[0];
const INTERSECTION_THRESHOLD = 0.6;
const SCROLL_DURATION_MS = 900;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function getAccentToken(sectionId: SectionId): SectionAccentToken {
  return (
    sectionAccentTokens.find((token) => token.sectionId === sectionId) ??
    DEFAULT_SECTION_ACCENT
  );
}

function getPageProgress() {
  const footer = document.getElementById("footer");
  const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;
  const endY = Math.min(footer?.offsetTop ?? maxScrollY, maxScrollY);

  if (endY <= 0) {
    return 0;
  }

  return clamp(window.scrollY / endY, 0, 1);
}

function applyAccentToken(token: SectionAccentToken) {
  const root = document.documentElement;

  root.dataset.activeSection = token.sectionId;
  root.style.setProperty("--active-section-accent", token.accentVariable);
  root.style.setProperty(
    "--active-section-accent-rgb",
    token.accentRgbVariable
  );
}

export function SectionProgressNavigation() {
  const [activeSectionId, setActiveSectionId] = useState<SectionId>("home");
  const activeSectionRef = useRef<SectionId>("home");
  const mobilePercentRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frameId = 0;
    const sectionRatios = new Map<SectionId, number>();
    const sections = PROGRESS_SECTIONS.map((section) =>
      document.getElementById(section.id)
    ).filter((section): section is HTMLElement => section !== null);

    function updateActiveSection(sectionId: SectionId) {
      if (sectionId === activeSectionRef.current) {
        return;
      }

      activeSectionRef.current = sectionId;
      setActiveSectionId(sectionId);
      applyAccentToken(getAccentToken(sectionId));
    }

    function updateNavigationState() {
      const progress = getPageProgress();

      navRef.current?.style.setProperty(
        "--section-scroll-progress",
        progress.toFixed(4)
      );

      if (mobilePercentRef.current) {
        mobilePercentRef.current.textContent = `${Math.round(progress * 100)}%`;
      }
    }

    function scheduleNavigationUpdate() {
      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = 0;
        updateNavigationState();
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          sectionRatios.set(
            entry.target.id as SectionId,
            entry.intersectionRatio
          );
        }

        const visibleSection = sections.reduce<HTMLElement | null>(
          (currentSection, section) => {
            if (!currentSection) {
              return section;
            }

            const currentRatio =
              sectionRatios.get(currentSection.id as SectionId) ?? 0;
            const nextRatio = sectionRatios.get(section.id as SectionId) ?? 0;

            return nextRatio > currentRatio ? section : currentSection;
          },
          null
        );

        if (!visibleSection) {
          return;
        }

        updateActiveSection(visibleSection.id as SectionId);
      },
      {
        root: null,
        threshold: [0, 0.25, INTERSECTION_THRESHOLD, 0.75, 1]
      }
    );

    applyAccentToken(getAccentToken(activeSectionRef.current));
    updateNavigationState();
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("resize", scheduleNavigationUpdate);
    window.addEventListener("scroll", scheduleNavigationUpdate, {
      passive: true
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", scheduleNavigationUpdate);
      window.removeEventListener("scroll", scheduleNavigationUpdate);

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  function handleSectionClick(
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: SectionId
  ) {
    const section = document.getElementById(sectionId);

    if (!section) {
      return;
    }

    event.preventDefault();

    const targetY =
      sectionId === "home"
        ? 0
        : window.scrollY + section.getBoundingClientRect().top;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const shouldReduceMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;

    if (shouldReduceMotion) {
      window.scrollTo({ top: targetY });
      window.history.replaceState(null, "", `#${sectionId}`);
      return;
    }

    const startedAt = window.performance.now();

    function animateScroll(now: number) {
      const elapsed = now - startedAt;
      const progress = clamp(elapsed / SCROLL_DURATION_MS, 0, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
        return;
      }

      window.history.replaceState(null, "", `#${sectionId}`);
    }

    window.requestAnimationFrame(animateScroll);
  }

  const activeSection =
    PROGRESS_SECTIONS.find((section) => section.id === activeSectionId) ??
    PROGRESS_SECTIONS[0];

  return (
    <nav
      aria-label="Section progress"
      className={styles.navigation}
      ref={navRef}
    >
      <div aria-hidden="true" className={styles.mobileIndicator}>
        <div className={styles.mobileTrack}>
          <span className={styles.mobileFill} />
        </div>
        <div className={styles.mobileMeta}>
          <span className={styles.mobileSection}>
            {activeSection.label.toUpperCase()}
          </span>
          <span className={styles.mobilePercent} ref={mobilePercentRef}>
            0%
          </span>
        </div>
      </div>

      <div className={styles.desktopRail}>
        <div aria-hidden="true" className={styles.track}>
          <span className={styles.trackFill} />
        </div>

        <ol className={styles.nodeList}>
          {PROGRESS_SECTIONS.map((section) => {
            const isActive = section.id === activeSectionId;

            return (
              <li
                className={cn(styles.nodeItem, isActive && styles.nodeActive)}
                key={section.id}
              >
                <a
                  aria-current={isActive ? "location" : undefined}
                  aria-label={`Go to ${section.label} section`}
                  className={styles.nodeLink}
                  href={`#${section.id}`}
                  onClick={(event) => handleSectionClick(event, section.id)}
                >
                  <span className={styles.nodeCircle} />
                  <span aria-hidden="true" className={styles.nodeIndicator} />
                  <span className={styles.nodeText}>
                    <span className={styles.nodeNumber}>{section.number}</span>
                    <span className={styles.nodeLabel}>{section.label}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
