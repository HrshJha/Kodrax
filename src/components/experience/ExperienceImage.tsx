"use client";

import { motion, type MotionValue } from "framer-motion";
import Image from "next/image";

import type { ExperienceImageAsset } from "@/components/experience/experience.types";

import styles from "./Experience.module.css";

interface ExperienceImageProps {
  image: ExperienceImageAsset;
  parallaxY?: MotionValue<number>;
}

export function ExperienceImage({
  image,
  parallaxY
}: Readonly<ExperienceImageProps>) {
  return (
    <div className={styles.imageFrame}>
      <motion.div className={styles.imageMotion} style={{ y: parallaxY }}>
        <Image
          alt={image.alt}
          className={styles.image}
          fill
          priority
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 55vw"
          src={image.src}
        />
      </motion.div>
    </div>
  );
}
