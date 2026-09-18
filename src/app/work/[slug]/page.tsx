import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

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
    <article className="max-w-4xl mx-auto px-5 sm:px-8 py-16 space-y-12">
      {/* ── BACK BAR ────────────────────────────────────── */}
      <div>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#728649] hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Builds</span>
        </Link>
      </div>

      {/* ── HEADER BLOCK ────────────────────────────────── */}
      <header className="space-y-6">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#2a2a22]">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-[rgba(42,42,34,0.70)] leading-relaxed">
          {project.oneliner}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-2xl bg-[#728649] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#8a9e60] transition-colors inline-flex items-center gap-2"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-2xl border border-[rgba(42,42,34,0.20)] text-[#2a2a22] text-xs uppercase tracking-wider font-medium hover:border-[#728649] hover:text-[#728649] transition-colors inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 rounded-2xl border border-[rgba(42,42,34,0.08)] bg-white/50 backdrop-blur-sm mt-8">
          <div>
            <span className="block font-mono text-[0.7rem] uppercase tracking-wider text-[rgba(42,42,34,0.40)]">
              Role
            </span>
            <span className="text-sm font-medium text-[#2a2a22]">
              {project.meta.role}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[0.7rem] uppercase tracking-wider text-[rgba(42,42,34,0.40)]">
              Timeline
            </span>
            <span className="text-sm font-medium text-[#2a2a22]">
              {project.meta.timeline}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[0.7rem] uppercase tracking-wider text-[rgba(42,42,34,0.40)]">
              Team Size
            </span>
            <span className="text-sm font-medium text-[#2a2a22]">
              {project.meta.teamSize}
            </span>
          </div>
          <div>
            <span className="block font-mono text-[0.7rem] uppercase tracking-wider text-[rgba(42,42,34,0.40)]">
              Core Tech
            </span>
            <span className="text-sm font-medium text-[#2a2a22]">
              {project.meta.coreTech}
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div className="rounded-3xl overflow-hidden aspect-[16/10] relative shadow-lg mt-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      {/* ── ARTICLE BODY ────────────────────────────────── */}
      <div className="space-y-12 pt-8">
        {project.sections.map((sec, idx) => (
          <section key={idx} className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2a2a22]">
              {sec.heading}
            </h2>
            <div className="space-y-4 text-base md:text-lg text-[rgba(42,42,34,0.80)] leading-relaxed font-sans">
              {sec.paragraphs.map((p, pIdx) => (
                <p key={pIdx}>{p}</p>
              ))}
            </div>
            {sec.takeaway && (
              <blockquote className="border-l-4 border-[#728649] pl-6 py-2 my-6 font-serif italic text-xl text-[#2a2a22] bg-[#728649]/5 rounded-r-xl">
                “{sec.takeaway}”
              </blockquote>
            )}
          </section>
        ))}
      </div>

      {/* ── FOOTER NAV ──────────────────────────────────── */}
      <div className="pt-12 border-t border-[rgba(42,42,34,0.08)] flex justify-between items-center">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#728649] hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all builds</span>
        </Link>
      </div>
    </article>
  );
}
