import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudyPage } from "@/components/projects/ProjectCaseStudyPage";
import { getProjectBySlug, projects } from "@/components/projects/project.data";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    description: project.overview,
    title: project.title
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudyPage project={project} />;
}
