import type { ProjectCaseStudy } from "@/components/projects/project.types";

export const projects = [
  {
    architecture: [
      "Trend detection feeds an AI research layer.",
      "Research output moves into script generation and content assembly.",
      "Voice synthesis and rendering infrastructure produce media assets.",
      "Publishing and analytics close the loop for performance-aware iteration.",
      "Queue-based orchestration supports distributed execution."
    ],
    category: "AI Infrastructure",
    challenges: [
      "Coordinating a multi-stage media workflow without turning it into a manual dashboard.",
      "Keeping AI execution structured enough for repeatable production workflows.",
      "Designing feedback loops that can inform future content decisions.",
      "Separating operator direction from system execution."
    ],
    githubUrl: "https://github.com/HrshJha/FrameOS",
    keyFeatures: [
      "Structured AI script generation with retention logic.",
      "Multi-channel orchestration for parallel content ecosystems.",
      "Brand voice locking for persistent contextual generation.",
      "Autonomous topic extraction and synthesis.",
      "Predictive analytics and scoring for content decisions.",
      "Feedback loop for performance-aware optimization."
    ],
    learnings: [
      "AI product value depends on workflow design as much as model capability.",
      "Media automation requires clear orchestration boundaries.",
      "Feedback systems matter when AI output needs to improve over time.",
      "Infrastructure thinking can make creative workflows more scalable."
    ],
    number: "01",
    overview:
      "FrameOS is an autonomous AI-native media infrastructure platform for scaling content operations.",
    primaryEngineeringFocus: "Autonomous media workflows",
    problem: [
      "Short-form media production often depends on manual scripting, research, rendering, publishing, and analytics work across disconnected tools. That creates context switching, inconsistent quality, and operational bottlenecks when one operator needs to manage multiple content pipelines."
    ],
    shortDescription:
      "An autonomous AI-native media infrastructure platform for scaling content operations.",
    slug: "frameos",
    solution: [
      "FrameOS treats media production as infrastructure instead of isolated content tasks. It organizes content work into autonomous pipeline stages for research, script generation, content assembly, rendering, publishing, analytics collection, and feedback learning.",
      "The system is designed around human direction, AI-assisted execution, and repeatable workflow orchestration."
    ],
    status: "Completed",
    techStack: [
      "TypeScript",
      "Python",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Docker",
      "Prisma"
    ],
    technicalHighlights: [
      "Next.js and React frontend.",
      "TypeScript application code.",
      "Node.js backend services.",
      "PostgreSQL and Supabase data layer.",
      "Redis-backed infrastructure.",
      "Dockerized system components."
    ],
    title: "FrameOS",
    videoSrc: "/assets/frameos.mp4"
  },
  {
    architecture: [
      "Intent extraction converts natural language into an intent representation.",
      "System design transforms intent into a structured system design representation.",
      "Sequential schema generation produces database, API, UI, and auth schemas.",
      "Validation and repair loops check cross-layer consistency.",
      "A boot repair engine normalizes generated structures before packaging."
    ],
    category: "Developer Tool",
    challenges: [
      "Preventing generated application structures from drifting across layers.",
      "Handling provider limits and truncated model responses.",
      "Designing deterministic repair loops around nondeterministic LLM output.",
      "Keeping generation stages explicit enough to debug."
    ],
    githubUrl: "https://github.com/HrshJha/AppForge-AI",
    keyFeatures: [
      "Five-stage generation pipeline.",
      "Cerebras primary LLM provider with Groq and OpenAI fallback paths.",
      "Strict Pydantic v2 schema validation.",
      "Cross-layer validation and LLM-assisted repair.",
      "Persistent compile history in the frontend dashboard.",
      "Railway-ready backend deployment configuration."
    ],
    learnings: [
      "Compiler-style structure makes AI generation more inspectable.",
      "Intermediate representations help constrain model output.",
      "Validation and repair loops are core architecture, not polish.",
      "Provider fallback and timeout handling shape product reliability."
    ],
    number: "02",
    overview:
      "AppForge AI is a compiler-inspired AI application generation platform.",
    primaryEngineeringFocus: "AI application generation",
    problem: [
      "Standard LLM coding assistants often generate raw code without enough structure, validation, or repair logic. That makes prompt-to-application workflows brittle when outputs need to become coherent system designs instead of one-off snippets."
    ],
    shortDescription: "A compiler-inspired AI application generation platform.",
    slug: "appforge-ai",
    solution: [
      "AppForge AI treats natural-language application generation as a compilation problem. It uses a staged pipeline with intermediate representations, typed schema validation, cross-layer checks, and repair loops before packaging the generated application configuration.",
      "The system combines a FastAPI backend, a Next.js frontend, and multiple LLM providers for generation and fallback behavior."
    ],
    status: "Completed",
    techStack: [
      "Python",
      "FastAPI",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Pydantic",
      "Cerebras",
      "Groq",
      "OpenAI",
      "SQLite",
      "SQLAlchemy",
      "Railway"
    ],
    technicalHighlights: [
      "FastAPI backend.",
      "Next.js 14 frontend.",
      "Pydantic v2 validation engine.",
      "Cerebras, Groq, and OpenAI LLM integrations.",
      "SQLite and SQLAlchemy persistence.",
      "Pipeline timeout and token-budget handling."
    ],
    title: "AppForge AI",
    videoSrc: "/assets/appforge-ai.mp4"
  },
  {
    architecture: [
      "FastAPI routes expose detection, visualization, and health endpoints.",
      "spaCy segments model responses into candidate claims.",
      "A DeBERTa-v3 NLI cross-encoder classifies entailment, contradiction, and neutral cases.",
      "Sentence-Transformers semantic similarity grounds claims against source sentences.",
      "Aggregation and visualization layers produce verdicts, summaries, and heatmaps."
    ],
    category: "LLM Evaluation",
    challenges: [
      "Splitting fluent model answers into verifiable claims.",
      "Distinguishing unsupported claims from direct contradictions.",
      "Combining NLI and semantic similarity without hiding uncertainty.",
      "Presenting verification results in a way humans can inspect quickly."
    ],
    githubUrl: "https://github.com/HrshJha/Hallucination-Hunter",
    keyFeatures: [
      "Claim-level verification instead of whole-answer scoring.",
      "NLI-powered contradiction and entailment detection.",
      "Semantic similarity grounding against source text.",
      "Conservative unsupported-claim classification.",
      "Alignment heatmap for claim-to-source mapping.",
      "Docker-ready deployment path."
    ],
    learnings: [
      "Hallucination detection is more useful when it works at claim granularity.",
      "Conservative classification can reduce overconfident verification.",
      "Evaluation tools need interpretable outputs, not only labels.",
      "RAG systems need verification layers that can be reused independently."
    ],
    number: "03",
    overview:
      "Hallucination Hunter is a claim-level hallucination detection platform for verifying AI-generated answers.",
    primaryEngineeringFocus: "Hallucination detection",
    problem: [
      "AI-generated answers can sound confident while containing unsupported or contradictory claims. Whole-response checks are too coarse because partial hallucinations can hide inside otherwise accurate answers."
    ],
    shortDescription:
      "A claim-level hallucination detection platform for verifying AI-generated answers.",
    slug: "hallucination-hunter",
    solution: [
      "Hallucination Hunter decomposes an AI answer into individual claims and verifies each claim against source text. It combines NLI reasoning, semantic similarity, conservative classification, and readable output so users can see which parts of an answer are supported, contradicted, or unsupported.",
      "The project is implemented as a FastAPI service with a browser interface and model-backed verification pipeline."
    ],
    status: "Completed",
    techStack: [
      "Python",
      "FastAPI",
      "PyTorch",
      "Hugging Face Transformers",
      "spaCy",
      "scikit-learn",
      "XGBoost",
      "Pandas",
      "Seaborn",
      "Docker"
    ],
    technicalHighlights: [
      "Python FastAPI REST interface.",
      "Hugging Face Transformers model pipeline.",
      "PyTorch inference layer.",
      "spaCy claim extraction.",
      "scikit-learn and XGBoost ensemble support.",
      "Matplotlib and Seaborn visualization output."
    ],
    title: "Hallucination Hunter",
    videoSrc: "/assets/hallucination-hunter.mp4"
  },
  {
    architecture: [
      "FastAPI exposes authentication, job, candidate, and search routes.",
      "Resume and job-description parsers extract structured fields and embeddings.",
      "FAISS dense retrieval and BM25 sparse retrieval feed a hybrid retriever.",
      "Cross-encoder reranking and learning-to-rank abstractions refine candidate order.",
      "SQLAlchemy, Alembic, PostgreSQL-ready persistence, Redis, and Nginx support deployment."
    ],
    category: "AI Platform",
    challenges: [
      "Parsing heterogeneous resume formats reliably.",
      "Balancing semantic retrieval with keyword precision.",
      "Producing ranking explanations instead of opaque scores.",
      "Designing a backend-first system that can support future recruiter UI workflows."
    ],
    githubUrl: "https://github.com/HrshJha/resume-checker",
    keyFeatures: [
      "Resume parsing for PDF, DOCX, and OCR-backed scanned documents.",
      "Job description parsing for role requirements and skill groups.",
      "Hybrid semantic and keyword retrieval.",
      "Cross-encoder reranking for job-resume pairs.",
      "Explainable ranking records with feature contribution support.",
      "JWT authentication and protected API endpoints."
    ],
    learnings: [
      "Resume intelligence needs explainability as much as retrieval quality.",
      "Hybrid search improves candidate discovery over one retrieval method alone.",
      "Ranking systems are easier to evolve when parsing, retrieval, and scoring are modular.",
      "Hiring data products require careful API and persistence boundaries."
    ],
    number: "04",
    overview:
      "Candidate Intelligence System is an AI-powered resume intelligence backend for semantic matching and explainable candidate ranking.",
    primaryEngineeringFocus: "Resume intelligence",
    problem: [
      "Traditional applicant tracking workflows over-index on keywords and often miss semantic relevance between resumes and job descriptions. They also make it difficult for recruiters and hiring teams to understand why a candidate was recommended."
    ],
    shortDescription:
      "An AI-powered resume intelligence backend for semantic matching and explainable candidate ranking.",
    slug: "candidate-intelligence-system",
    solution: [
      "Candidate Intelligence System converts resumes and job descriptions into structured intelligence. It parses documents, normalizes skills, retrieves relevant candidates through hybrid search, reranks matches, and produces explainable scoring signals for recruiter review.",
      "The project is implemented as a backend-first FastAPI system with modular parsing, retrieval, ranking, persistence, and API layers."
    ],
    status: "Completed",
    techStack: [
      "Python",
      "FastAPI",
      "Docker",
      "SQLAlchemy",
      "Alembic",
      "FAISS",
      "Sentence-Transformers",
      "BM25",
      "Redis",
      "PostgreSQL",
      "SQLite",
      "Nginx"
    ],
    technicalHighlights: [
      "Python FastAPI backend.",
      "SQLAlchemy 2.0 async ORM with Alembic.",
      "FAISS and BM25 retrieval.",
      "Sentence-Transformers cross-encoder reranking.",
      "Docker compose with API, PostgreSQL, Redis, and Nginx.",
      "Unit and integration tests."
    ],
    title: "Candidate Intelligence System",
    videoSrc: "/assets/resume-checker.mp4"
  }
] satisfies readonly ProjectCaseStudy[];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projects.find((project) => project.slug === slug);
}
