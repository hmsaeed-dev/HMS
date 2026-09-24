import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data/projects";

export interface CaseStudyHeaderProps {
  project: Project;
}

export default function CaseStudyHeader({ project }: CaseStudyHeaderProps) {
  return (
    <header className="space-y-8">
      {/* Return Navigation */}
      <div>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-tertiary hover:text-rust transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Selected Works</span>
        </Link>
      </div>

      <div className="space-y-4">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-ink-primary leading-tight">
          {project.title}
        </h1>
        <p className="text-lg md:text-xl text-ink-secondary leading-relaxed font-sans">
          {project.oneliner}
        </p>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-4 pt-1">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-sharp bg-ink-primary hover:bg-rust text-canvas text-xs font-mono uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-2 shadow-plate"
          >
            <span>Live Deployment</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-sharp text-ink-primary bg-canvas-surface hover:bg-canvas-vellum text-xs font-mono uppercase tracking-wider font-medium transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        )}
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-canvas-surface shadow-plate rounded-card mt-6">
        <div>
          <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
            Role
          </span>
          <span className="text-sm font-medium text-ink-primary">
            {project.meta.role}
          </span>
        </div>
        <div>
          <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
            Timeline
          </span>
          <span className="text-sm font-medium text-ink-primary">
            {project.meta.timeline}
          </span>
        </div>
        <div>
          <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
            Team
          </span>
          <span className="text-sm font-medium text-ink-primary">
            {project.meta.teamSize}
          </span>
        </div>
        <div>
          <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
            Core Tech
          </span>
          <span className="text-sm font-medium text-ink-primary">
            {project.meta.coreTech}
          </span>
        </div>
      </div>

      {/* Hero Image Plate */}
      <div className="overflow-hidden aspect-[16/10] relative shadow-plate rounded-card mt-8 bg-canvas-recessed">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="(max-width: 896px) 100vw, 896px"
          className="object-cover"
        />
      </div>
    </header>
  );
}
