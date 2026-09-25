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
          className="inline-flex items-center gap-2 min-h-[44px] text-xs font-sans font-medium text-ink-secondary hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-accent" />
          <span>Return to Selected Works</span>
        </Link>
      </div>

      <div className="space-y-4">
        <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink-primary leading-[1.08] break-words">
          {project.title}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-ink-secondary leading-relaxed font-sans font-normal">
          {project.oneliner}
        </p>
      </div>

      {/* Action Links with 44px+ Touch Targets */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-5 py-2.5 rounded-pill bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground text-xs font-sans font-medium transition-all inline-flex items-center gap-2 shadow-sm"
          >
            <span>Live Deployment</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-5 py-2.5 rounded-pill text-primary border border-primary-border hover:bg-primary-subtle text-xs font-sans font-medium transition-colors inline-flex items-center gap-2"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        )}
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6 bg-canvas-paper border border-border-hairline rounded-card mt-6">
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
      <div className="overflow-hidden aspect-[16/10] relative border border-border-hairline rounded-card mt-8 bg-canvas-vellum">
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
