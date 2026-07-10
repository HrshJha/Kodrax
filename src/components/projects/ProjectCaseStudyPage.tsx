"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import type { ProjectCaseStudy } from "@/components/projects/project.types";
import { cn } from "@/lib/utils";

import styles from "./ProjectCaseStudyPage.module.css";

interface ProjectCaseStudyPageProps {
  project: ProjectCaseStudy;
}

interface NarrativeCard {
  body: string;
  title: string;
}

interface PipelineStage {
  body: string;
  title: string;
}

interface StoryDefinition {
  pipelineStages: readonly PipelineStage[];
  problemCards: readonly NarrativeCard[];
  solutionCards: readonly NarrativeCard[];
}

interface TechGroup {
  items: readonly string[];
  title: string;
}

const TOTAL_PROJECTS = "04";
const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

const STORY_DEFINITIONS: Record<ProjectCaseStudy["slug"], StoryDefinition> = {
  "appforge-ai": {
    pipelineStages: [
      {
        body: "Intent extraction converts natural language into an intent representation.",
        title: "Intent Extraction"
      },
      {
        body: "System design transforms intent into a structured system design representation.",
        title: "System Design"
      },
      {
        body: "Sequential schema generation produces database, API, UI, and auth schemas.",
        title: "Schema Generation"
      },
      {
        body: "Validation and repair loops check cross-layer consistency.",
        title: "Validation"
      },
      {
        body: "A boot repair engine normalizes generated structures before packaging.",
        title: "Boot Repair"
      }
    ],
    problemCards: [
      {
        body: "Standard LLM coding assistants generate raw code without enough structure.",
        title: "Unstructured Output"
      },
      {
        body: "Prompt-to-application workflows become brittle when outputs need to become coherent system designs.",
        title: "System Drift"
      },
      {
        body: "Generated application layers need validation and repair before packaging.",
        title: "Repair Gap"
      }
    ],
    solutionCards: [
      {
        body: "Natural-language application generation is treated as a compilation problem.",
        title: "Staged Compilation"
      },
      {
        body: "Intermediate representations, typed schemas, and cross-layer checks constrain model output.",
        title: "Typed Validation"
      },
      {
        body: "FastAPI, Next.js, and multiple LLM providers support generation and fallback behavior.",
        title: "Provider Fallback"
      }
    ]
  },
  "candidate-intelligence-system": {
    pipelineStages: [
      {
        body: "FastAPI exposes authentication, job, candidate, and search routes.",
        title: "API Routes"
      },
      {
        body: "Resume and job-description parsers extract structured fields and embeddings.",
        title: "Document Parsing"
      },
      {
        body: "FAISS dense retrieval and BM25 sparse retrieval feed a hybrid retriever.",
        title: "Hybrid Retrieval"
      },
      {
        body: "Cross-encoder reranking and learning-to-rank abstractions refine candidate order.",
        title: "Reranking"
      },
      {
        body: "SQLAlchemy, Alembic, PostgreSQL-ready persistence, Redis, and Nginx support deployment.",
        title: "Deployment Layer"
      }
    ],
    problemCards: [
      {
        body: "Traditional applicant tracking workflows over-index on keywords.",
        title: "Keyword Bias"
      },
      {
        body: "Semantic relevance between resumes and job descriptions is often missed.",
        title: "Semantic Gaps"
      },
      {
        body: "Recruiters need to understand why a candidate was recommended.",
        title: "Opaque Ranking"
      }
    ],
    solutionCards: [
      {
        body: "Resumes and job descriptions are converted into structured intelligence.",
        title: "Structured Parsing"
      },
      {
        body: "Hybrid search retrieves relevant candidates before reranking matches.",
        title: "Hybrid Matching"
      },
      {
        body: "Explainable scoring signals support recruiter review.",
        title: "Ranking Signals"
      }
    ]
  },
  frameos: {
    pipelineStages: [
      {
        body: "Trend detection feeds an AI research layer.",
        title: "Trend Detection"
      },
      {
        body: "Research output moves into script generation and content assembly.",
        title: "Script Generation"
      },
      {
        body: "Voice synthesis and rendering infrastructure produce media assets.",
        title: "Rendering"
      },
      {
        body: "Publishing and analytics close the loop for performance-aware iteration.",
        title: "Analytics"
      },
      {
        body: "Queue-based orchestration supports distributed execution.",
        title: "Queue Orchestration"
      }
    ],
    problemCards: [
      {
        body: "Research, scripting, rendering, publishing, and analytics often happen across disconnected tools.",
        title: "Context Switching"
      },
      {
        body: "Manual content operations create inconsistent quality and operational bottlenecks.",
        title: "Manual Production"
      },
      {
        body: "One operator needs a way to manage multiple content pipelines without losing feedback.",
        title: "Feedback Loss"
      }
    ],
    solutionCards: [
      {
        body: "Media production becomes infrastructure instead of isolated content tasks.",
        title: "Media Infrastructure"
      },
      {
        body: "Autonomous pipeline stages organize research, scripting, assembly, rendering, publishing, and analytics.",
        title: "Pipeline Stages"
      },
      {
        body: "Human direction stays separate from AI-assisted execution and repeatable workflow orchestration.",
        title: "Human Direction"
      }
    ]
  },
  "hallucination-hunter": {
    pipelineStages: [
      {
        body: "FastAPI routes expose detection, visualization, and health endpoints.",
        title: "API Surface"
      },
      {
        body: "spaCy segments model responses into candidate claims.",
        title: "Claim Segmentation"
      },
      {
        body: "A DeBERTa-v3 NLI cross-encoder classifies entailment, contradiction, and neutral cases.",
        title: "NLI Classification"
      },
      {
        body: "Sentence-Transformers semantic similarity grounds claims against source sentences.",
        title: "Semantic Grounding"
      },
      {
        body: "Aggregation and visualization layers produce verdicts, summaries, and heatmaps.",
        title: "Verdict Visualization"
      }
    ],
    problemCards: [
      {
        body: "AI-generated answers can sound confident while containing unsupported claims.",
        title: "Confident Errors"
      },
      {
        body: "Whole-response checks are too coarse for partial hallucinations.",
        title: "Coarse Scoring"
      },
      {
        body: "Contradictory claims can hide inside otherwise accurate answers.",
        title: "Hidden Contradictions"
      }
    ],
    solutionCards: [
      {
        body: "An AI answer is decomposed into individual claims for verification.",
        title: "Claim Decomposition"
      },
      {
        body: "NLI reasoning and semantic similarity compare each claim against source text.",
        title: "Grounded Evaluation"
      },
      {
        body: "Readable output shows which claims are supported, contradicted, or unsupported.",
        title: "Inspectable Verdicts"
      }
    ]
  }
};

const TECH_GROUPS = [
  {
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    title: "Frontend"
  },
  {
    items: ["Python", "FastAPI", "Node.js", "Pydantic", "SQLAlchemy", "Prisma"],
    title: "Backend"
  },
  {
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "spaCy",
      "scikit-learn",
      "XGBoost",
      "Sentence-Transformers",
      "Cerebras",
      "Groq",
      "OpenAI",
      "FAISS",
      "BM25",
      "Pandas"
    ],
    title: "AI"
  },
  {
    items: ["Docker", "Redis", "Railway", "Nginx"],
    title: "Infrastructure"
  },
  {
    items: ["PostgreSQL", "Supabase", "SQLite", "Alembic"],
    title: "Database"
  }
] satisfies readonly TechGroup[];

const sectionViewport = { amount: 0.18, once: true };

function getSectionId(project: ProjectCaseStudy, title: string): string {
  return `${project.slug}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function getUniqueTechGroups(project: ProjectCaseStudy): readonly TechGroup[] {
  const used = new Set<string>();

  return TECH_GROUPS.map((group) => ({
    items: group.items.filter((technology) => {
      if (!project.techStack.includes(technology) || used.has(technology)) {
        return false;
      }

      used.add(technology);
      return true;
    }),
    title: group.title
  })).filter((group) => group.items.length > 0);
}

function getChallengeSolution(
  project: ProjectCaseStudy,
  index: number
): string {
  return (
    project.architecture[index] ??
    project.technicalHighlights[index] ??
    project.solution[index % project.solution.length] ??
    project.solution[0] ??
    project.overview
  );
}

function CaseSection({
  children,
  className,
  id,
  title
}: Readonly<{
  children: ReactNode;
  className?: string;
  id: string;
  title: string;
}>) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.section
      aria-labelledby={id}
      className={cn(styles.caseSection, className)}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.65,
        ease: MOTION_EASE
      }}
      viewport={sectionViewport}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2 className={styles.caseSectionTitle} id={id}>
        {title}
      </h2>
      {children}
    </motion.section>
  );
}

function CardGrid({
  cards,
  columns = "three"
}: Readonly<{
  cards: readonly NarrativeCard[];
  columns?: "three" | "two";
}>) {
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      className={cn(styles.cardGrid, columns === "two" && styles.cardGridTwo)}
      initial="hidden"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: shouldReduceMotion ? 0 : 0.08
          }
        }
      }}
      viewport={sectionViewport}
      whileInView="visible"
    >
      {cards.map((card) => (
        <motion.article
          className={styles.caseCard}
          key={card.title}
          variants={{
            hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <h3>{card.title}</h3>
          <p>{card.body}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}

export function ProjectCaseStudyPage({
  project
}: Readonly<ProjectCaseStudyPageProps>) {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const story = STORY_DEFINITIONS[project.slug];
  const techGroups = getUniqueTechGroups(project);
  const overviewCards = [
    {
      body: project.overview,
      title: "Purpose"
    },
    {
      body: project.shortDescription,
      title: "Goal"
    },
    {
      body: project.primaryEngineeringFocus,
      title: "Impact"
    }
  ] satisfies readonly NarrativeCard[];

  return (
    <main className={styles.casePage}>
      <article className={styles.caseStory}>
        <motion.header
          className={styles.caseHero}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            ease: MOTION_EASE
          }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className={styles.caseHeroCopy}>
            <p className={styles.caseCategory}>{project.category}</p>
            <h1 className={styles.caseTitle}>{project.title}</h1>
            <p className={styles.caseSummary}>{project.shortDescription}</p>

            <div className={styles.caseMetaGrid} aria-label="Project metadata">
              <div className={styles.caseMetaCard}>
                <span>Status</span>
                <strong>{project.status}</strong>
              </div>
              <div className={styles.caseMetaCard}>
                <span>Timeline</span>
                <strong>
                  {project.number} / {TOTAL_PROJECTS}
                </strong>
              </div>
              <div className={styles.caseMetaCard}>
                <span>Focus</span>
                <strong>{project.primaryEngineeringFocus}</strong>
              </div>
            </div>

            <a
              className={styles.caseGithubButton}
              href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>

          <div className={styles.caseHeroMedia}>
            <video
              aria-label={`${project.title} project visual`}
              autoPlay={!shouldReduceMotion}
              className={styles.caseHeroVideo}
              loop
              muted
              playsInline
              preload="metadata"
              src={project.videoSrc}
            />
          </div>
        </motion.header>

        <CaseSection
          id={getSectionId(project, "Quick Overview")}
          title="Quick Overview"
        >
          <CardGrid cards={overviewCards} />
        </CaseSection>

        <CaseSection
          className={styles.splitSection}
          id={getSectionId(project, "Problem")}
          title="Problem"
        >
          <CardGrid cards={story.problemCards} />
        </CaseSection>

        <CaseSection
          className={styles.splitSection}
          id={getSectionId(project, "Solution")}
          title="Solution"
        >
          <CardGrid cards={story.solutionCards} />
        </CaseSection>

        <CaseSection
          id={getSectionId(project, "Architecture")}
          title="Architecture"
        >
          <motion.ol
            className={styles.pipeline}
            initial="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.08
                }
              }
            }}
            viewport={sectionViewport}
            whileInView="visible"
          >
            {story.pipelineStages.map((stage, index) => (
              <motion.li
                className={styles.pipelineStage}
                key={stage.title}
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
              </motion.li>
            ))}
          </motion.ol>

          <div
            aria-label={`${project.title} implementation notes`}
            className={styles.implementationNotes}
          >
            {project.technicalHighlights.map((highlight) => (
              <p key={highlight}>{highlight}</p>
            ))}
          </div>
        </CaseSection>

        <CaseSection
          id={getSectionId(project, "Key Features")}
          title="Key Features"
        >
          <motion.div
            className={styles.featureGrid}
            initial="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: shouldReduceMotion ? 0 : 0.08
                }
              }
            }}
            viewport={sectionViewport}
            whileInView="visible"
          >
            {project.keyFeatures.map((feature, index) => (
              <motion.article
                className={styles.featureCard}
                key={feature}
                variants={{
                  hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <span className={styles.featureIcon} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{feature}</p>
              </motion.article>
            ))}
          </motion.div>
        </CaseSection>

        <CaseSection
          id={getSectionId(project, "Challenges")}
          title="Challenges"
        >
          <div className={styles.challengeTimeline}>
            {project.challenges.map((challenge, index) => (
              <article className={styles.challengeCard} key={challenge}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>Challenge</h3>
                  <p>{challenge}</p>
                </div>
                <div>
                  <h3>Solution adopted</h3>
                  <p>{getChallengeSolution(project, index)}</p>
                </div>
              </article>
            ))}
          </div>
        </CaseSection>

        <CaseSection id={getSectionId(project, "Learnings")} title="Learnings">
          <ul className={styles.learningList}>
            {project.learnings.map((learning) => (
              <li key={learning}>{learning}</li>
            ))}
          </ul>
        </CaseSection>

        <CaseSection
          id={getSectionId(project, "Tech Stack")}
          title="Tech Stack"
        >
          <div className={styles.techGrid}>
            {techGroups.map((group) => (
              <article className={styles.techCard} key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items.join(" · ")}</p>
              </article>
            ))}
          </div>
        </CaseSection>

        <CaseSection
          className={styles.repositorySection}
          id={getSectionId(project, "Repository")}
          title="Repository"
        >
          <a
            className={styles.repositoryLink}
            href={project.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Visit Repository
          </a>
        </CaseSection>
      </article>
    </main>
  );
}
