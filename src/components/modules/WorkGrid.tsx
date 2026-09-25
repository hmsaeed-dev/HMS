"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Github, Code, Cpu } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface WorkGridProps {
  projects: Project[];
}

export default function WorkGrid({ projects }: WorkGridProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "web" | "hardware">(
    "all",
  );

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="space-y-12">
      {/* Filter Controls Bar (44px+ Touch Ergonomics) */}
      <div
        className="flex items-center justify-start gap-2 overflow-x-auto scroll-snap-x no-scrollbar pb-2 sm:flex-wrap border-b border-border-hairline pb-4"
        role="tablist"
        aria-label="Filter projects by category"
      >
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={cn(
            "min-h-[44px] px-4 py-2 rounded-pill text-xs font-sans font-medium transition-all inline-flex items-center justify-center",
            activeFilter === "all"
              ? "bg-primary text-primary-foreground shadow-sm font-semibold"
              : "text-ink-secondary hover:text-primary hover:bg-primary-subtle"
          )}
        >
          All Works ({projects.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("web")}
          className={cn(
            "min-h-[44px] px-4 py-2 rounded-pill text-xs font-sans font-medium inline-flex items-center justify-center gap-1.5 transition-all",
            activeFilter === "web"
              ? "bg-primary text-primary-foreground shadow-sm font-semibold"
              : "text-ink-secondary hover:text-primary hover:bg-primary-subtle"
          )}
        >
          <Code className="w-3.5 h-3.5" />
          <span>Web Applications</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("hardware")}
          className={cn(
            "min-h-[44px] px-4 py-2 rounded-pill text-xs font-sans font-medium inline-flex items-center justify-center gap-1.5 transition-all",
            activeFilter === "hardware"
              ? "bg-primary text-primary-foreground shadow-sm font-semibold"
              : "text-ink-secondary hover:text-primary hover:bg-primary-subtle"
          )}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Systems &amp; Logic</span>
        </button>
      </div>

      {/* Projects Exhibition Grid (Mobile-First 1 Col -> 2 Col MD) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="p-5 sm:p-6 bg-canvas-paper border border-border-hairline rounded-card hover:border-primary/30 transition-all duration-300 flex flex-col justify-between group shadow-sm"
          >
              {/* Visual Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas-vellum rounded-sharp mb-6">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Content Details */}
              <div className="flex flex-col justify-between flex-grow space-y-5">
                <div className="space-y-2">
                  <h2 className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-ink-primary group-hover:text-primary transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h2>
                  <p className="text-sm text-ink-secondary leading-relaxed font-sans font-normal">
                    {project.oneliner}
                  </p>
                </div>

                {/* Single-Line Consolidated Metadata Lockup */}
                <div className="pt-1 flex items-center gap-2 font-mono text-xs text-ink-tertiary">
                  <span className="text-primary font-medium">{project.meta.role}</span>
                  <span className="opacity-30">/</span>
                  <span className="truncate">{project.meta.coreTech}</span>
                </div>

                {/* Action Bar with 44px+ Touch Ergonomics */}
                <div className="flex items-center justify-between pt-2 border-t border-border-hairline">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-sans font-medium text-ink-primary hover:text-accent transition-colors"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="flex items-center gap-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md text-ink-tertiary hover:text-accent hover:bg-accent-subtle transition-colors"
                        title="Live Deployment"
                        aria-label={`Open ${project.title} live deployment`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md text-ink-tertiary hover:text-primary hover:bg-primary-subtle transition-colors"
                        title="Repository"
                        aria-label={`Open ${project.title} source code repository`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
    </div>
  );
}
