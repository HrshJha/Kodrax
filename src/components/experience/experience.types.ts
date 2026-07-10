export interface ExperienceImageAsset {
  alt: string;
  src: string;
}

export interface Experience {
  company: string;
  duration: string;
  image: ExperienceImageAsset;
  number: "01" | "02";
  role: string;
  selectedWork: readonly [string, string, string];
  slug: string;
  summary: string;
}

export interface ExperienceProps {
  className?: string;
}
