import type { ProjectCaseStudy } from "@/components/projects/project.types";

import styles from "./Projects.module.css";

interface ProjectCardProps {
  project: ProjectCaseStudy;
}

function getSectionId(project: ProjectCaseStudy, title: string): string {
  return `${project.slug}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

function TextSection({
  items,
  project,
  title
}: Readonly<{
  items: readonly string[];
  project: ProjectCaseStudy;
  title: string;
}>) {
  if (items.length === 0) {
    return null;
  }

  const sectionId = getSectionId(project, title);

  return (
    <section className={styles.caseSection} aria-labelledby={sectionId}>
      <h2 className={styles.caseSectionTitle} id={sectionId}>
        {title}
      </h2>
      <div className={styles.caseTextBlock}>
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </section>
  );
}

function ListSection({
  items,
  project,
  title
}: Readonly<{
  items: readonly string[];
  project: ProjectCaseStudy;
  title: string;
}>) {
  if (items.length === 0) {
    return null;
  }

  const sectionId = getSectionId(project, title);

  return (
    <section className={styles.caseSection} aria-labelledby={sectionId}>
      <h2 className={styles.caseSectionTitle} id={sectionId}>
        {title}
      </h2>
      <ul className={styles.caseList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
  return (
    <article className={styles.caseStudy}>
      <header className={styles.caseHero}>
        <p className={styles.caseMeta}>
          {project.number} / {project.category}
        </p>
        <h1 className={styles.caseTitle}>{project.title}</h1>
        <p className={styles.caseOverview}>{project.overview}</p>
        <div className={styles.caseActions}>
          <a
            className={styles.githubLink}
            href={project.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </header>

      <TextSection
        items={[project.overview]}
        project={project}
        title="Overview"
      />
      <TextSection items={project.problem} project={project} title="Problem" />
      <TextSection
        items={project.solution}
        project={project}
        title="Solution"
      />
      <ListSection
        items={project.architecture}
        project={project}
        title="Architecture / Approach"
      />
      <ListSection
        items={project.technicalHighlights}
        project={project}
        title="Implementation"
      />
      <ListSection
        items={project.keyFeatures}
        project={project}
        title="Key Features"
      />
      <ListSection
        items={project.challenges}
        project={project}
        title="Challenges"
      />
      <ListSection
        items={project.learnings}
        project={project}
        title="Learnings"
      />
      <ListSection
        items={project.techStack}
        project={project}
        title="Tech Stack"
      />
      <section
        aria-labelledby={getSectionId(project, "GitHub")}
        className={styles.caseSection}
      >
        <h2
          className={styles.caseSectionTitle}
          id={getSectionId(project, "GitHub")}
        >
          GitHub
        </h2>
        <a
          className={styles.caseTextLink}
          href={project.githubUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Repository
        </a>
      </section>
    </article>
  );
}
