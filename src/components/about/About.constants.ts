export const ABOUT_PORTRAIT_SRC = "/assets/about/ghibli.png";

export const ABOUT_PORTRAIT_ALT = "Ghibli-style portrait of Harsh Kumar Jha";

export const ABOUT_PORTRAIT_SIZE = {
  height: 1445,
  width: 1088
} as const;

export const ABOUT_EYEBROW = "About";

export const ABOUT_NAME = "Harsh Kumar Jha";

export const ABOUT_ROLE_TAG = "AI/ML Engineer · B.Tech ECE";

export const ABOUT_SUMMARY =
  "I build AI-native products from models, data, and backend systems, with clear architecture and usable interfaces built for scale.";

export const ABOUT_EDUCATION = {
  cgpa: "CGPA 8.59",
  degree: "B.Tech ECE",
  expectedGraduation: "Expected 2029",
  institution: "Maharaja Surajmal Institute of Technology"
} as const;

export const ABOUT_TECH_STACK = [
  {
    items: ["Python", "Java", "C++"],
    label: "Languages"
  },
  {
    items: ["FastAPI", "Next.js", "Node.js"],
    label: "Backend"
  },
  {
    items: ["PyTorch", "LangChain", "scikit-learn"],
    label: "AI/ML"
  },
  {
    items: ["Docker", "Git", "Linux", "PostgreSQL", "Supabase"],
    label: "Infra"
  }
] as const;

export const ABOUT_MOTION = {
  delayStep: 0.08,
  duration: 0.65,
  easeOutCubic: [0.33, 1, 0.68, 1]
} as const;
