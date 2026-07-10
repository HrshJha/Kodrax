import Link from "next/link";

import { PROJECT_DETAIL_ROUTE } from "@/components/projects/project.constants";
import type { ProjectSlug } from "@/components/projects/project.types";

import styles from "./Projects.module.css";

interface ProjectReadMoreButtonProps {
  slug: ProjectSlug;
}

export function ProjectReadMoreButton({
  slug
}: Readonly<ProjectReadMoreButtonProps>) {
  return (
    <Link
      className={styles.readMoreLink}
      href={`${PROJECT_DETAIL_ROUTE}/${slug}`}
    >
      Read Case Study →
    </Link>
  );
}
