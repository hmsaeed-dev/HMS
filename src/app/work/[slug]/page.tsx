import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import CaseStudyHeader from "@/components/work/CaseStudyHeader";
import CaseStudyBody from "@/components/work/CaseStudyBody";
import CaseStudyCallout from "@/components/work/CaseStudyCallout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} — Case Study`,
    description: project.oneliner,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.oneliner,
      images: [{ url: project.featuredImage }],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-5 sm:px-8 py-16 sm:py-24 space-y-12 pt-24 sm:pt-28">
      <CaseStudyHeader project={project} />
      <CaseStudyBody project={project} />
      <CaseStudyCallout />
    </article>
  );
}
