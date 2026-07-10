"use client";

import {
  motion,
  useReducedMotion,
  type Variants
} from "framer-motion";
import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type RevealTranslate = "none" | "small" | "medium" | "large";
export type RevealDuration = "XS" | "S" | "M" | "L";
export type RevealDelay = "D0" | "D1" | "D2" | "D3" | "D4";
export type RevealEase = "primary" | "section";

const TRANSLATE_PX = {
  large: 24,
  medium: 16,
  none: 0,
  small: 8
} as const satisfies Record<RevealTranslate, number>;

const DURATION_SECONDS = {
  L: 0.65,
  M: 0.42,
  S: 0.28,
  XS: 0.18
} as const satisfies Record<RevealDuration, number>;

const DELAY_SECONDS = {
  D0: 0,
  D1: 0.06,
  D2: 0.12,
  D3: 0.18,
  D4: 0.24
} as const satisfies Record<RevealDelay, number>;

const EASINGS = {
  primary: [0.33, 1, 0.68, 1],
  section: [0.42, 0, 0.58, 1]
} as const satisfies Record<RevealEase, readonly [number, number, number, number]>;

export const revealChildVariants = {
  hidden: {
    opacity: 0,
    y: 8
  },
  visible: {
    opacity: 1,
    y: 0
  }
} as const satisfies Variants;

export function usePrefersReducedMotion() {
  return useReducedMotion() ?? false;
}

interface RevealOwnProps {
  amount?: number;
  as?: RevealElement;
  children: ReactNode;
  delay?: RevealDelay;
  duration?: RevealDuration;
  ease?: RevealEase;
  once?: boolean;
  scale?: boolean;
  staggerChildren?: RevealDelay;
  translate?: RevealTranslate;
}

const motionElements = {
  article: motion.article,
  div: motion.div,
  footer: motion.footer,
  h2: motion.h2,
  li: motion.li,
  p: motion.p,
  section: motion.section,
  ul: motion.ul
} as const;

type RevealElement = keyof typeof motionElements;

type RevealProps = RevealOwnProps &
  Omit<HTMLAttributes<HTMLElement>, keyof RevealOwnProps>;

export function Reveal({
  amount = 0.2,
  as = "div",
  children,
  delay = "D0",
  duration = "M",
  ease = "primary",
  once = true,
  scale = false,
  staggerChildren,
  translate = "medium",
  ...props
}: Readonly<RevealProps>) {
  const shouldReduceMotion = usePrefersReducedMotion();
  const Component = motionElements[as] as ElementType;
  const translateY = shouldReduceMotion ? 0 : TRANSLATE_PX[translate];
  const initialScale = shouldReduceMotion || !scale ? 1 : 0.98;
  const transition = {
    delay: DELAY_SECONDS[delay],
    duration: DURATION_SECONDS[duration],
    ease: EASINGS[ease],
    staggerChildren: staggerChildren ? DELAY_SECONDS[staggerChildren] : 0
  };

  return (
    <Component
      initial={{ opacity: 0, scale: initialScale, y: translateY }}
      transition={transition}
      viewport={{ amount, once }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      {...props}
    >
      {children}
    </Component>
  );
}
