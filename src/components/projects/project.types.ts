export type ProjectSlug =
  | "frameos"
  | "appforge-ai"
  | "hallucination-hunter"
  | "candidate-intelligence-system";

export interface ProjectSection {
  title: string;
  body?: readonly string[];
  items?: readonly string[];
}

export interface ProjectCaseStudy {
  architecture: readonly string[];
  challenges: readonly string[];
  category: string;
  githubUrl: string;
  keyFeatures: readonly string[];
  learnings: readonly string[];
  number: string;
  overview: string;
  primaryEngineeringFocus: string;
  problem: readonly string[];
  shortDescription: string;
  slug: ProjectSlug;
  solution: readonly string[];
  status: "Completed";
  techStack: readonly string[];
  technicalHighlights: readonly string[];
  title: string;
  videoSrc: string;
}
