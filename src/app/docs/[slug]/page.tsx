import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudyPage } from "@/components/projects/ProjectCaseStudyPage";
import { getProjectBySlug, projects } from "@/components/projects/project.data";

interface ProjectDocsPageProps {
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
}: ProjectDocsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    description: project.overview,
    title: `${project.title} Case Study`
  };
}

export default async function ProjectDocsPage({
  params
}: ProjectDocsPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectCaseStudyPage project={project} />;
}
