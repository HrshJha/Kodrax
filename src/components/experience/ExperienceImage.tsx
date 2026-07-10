"use client";

import Image from "next/image";

import type { ExperienceImageAsset } from "@/components/experience/experience.types";

import styles from "./Experience.module.css";

interface ExperienceImageProps {
  image: ExperienceImageAsset;
}

export function ExperienceImage({ image }: Readonly<ExperienceImageProps>) {
  return (
    <div className={styles.imageFrame}>
      <div className={styles.imageMotion}>
        <Image
          alt={image.alt}
          className={styles.image}
          fill
          priority
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1023px) 50vw, 55vw"
          src={image.src}
        />
      </div>
    </div>
  );
}
