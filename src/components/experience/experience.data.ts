import type { Experience } from "@/components/experience/experience.types";

export const experiences = [
  {
    company: "MathonGo",
    duration: "Internship",
    image: {
      alt: "MathonGo experience visual",
      src: "/assets/experience/mathongo_update.png"
    },
    number: "01",
    role: "Research & Development Intern",
    selectedWork: [
      "JEE Physics Content",
      "Question Validation",
      "Dataset Organization"
    ],
    slug: "mathongo",
    summary:
      "MathonGo works with structured JEE question content and learning workflows. My role focused on research, content validation, and dataset organization."
  },
  {
    company: "DomAIyn Labs LLP",
    duration: "Internship",
    image: {
      alt: "DomAIyn Labs LLP experience visual",
      src: "/assets/experience/domaiynlabs_update.png"
    },
    number: "02",
    role: "AI/ML Intern (AI Safety & Evaluation Research)",
    selectedWork: [
      "AI Safety Evaluation",
      "Hallucination Detection",
      "Backend API Development"
    ],
    slug: "domaiyn-labs",
    summary:
      "DomAIyn Labs LLP focuses on AI safety and evaluation research. My role centered on hallucination detection, LLM evaluation, and backend support."
  }
] satisfies readonly Experience[];
