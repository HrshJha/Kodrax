export interface ProjectMediaAsset {
  alt: string;
  height: number;
  src: string;
  type: "image" | "video";
  width: number;
}

export interface Project {
  architecture: readonly string[];
  githubUrl: string;
  media: readonly ProjectMediaAsset[];
  problem: string;
  slug: string;
  solution: string;
  status: "completed" | "in-progress";
  techStack: readonly string[];
  title: string;
}
