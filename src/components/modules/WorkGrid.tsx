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
      {/* Filter Controls Bar */}
      <div
        className="flex items-center justify-start gap-2 overflow-x-auto scroll-snap-x no-scrollbar pb-2 sm:flex-wrap"
        role="tablist"
        aria-label="Filter projects by category"
      >
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={cn(
            "px-4 py-1.5 rounded-sharp text-xs font-mono uppercase tracking-wider transition-all",
            activeFilter === "all"
              ? "bg-ink-primary text-canvas shadow-sm font-semibold"
              : "text-ink-secondary hover:text-ink-primary bg-canvas-paper hover:bg-canvas-vellum shadow-sm"
          )}
        >
          All Works ({projects.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("web")}
          className={cn(
            "px-4 py-1.5 rounded-sharp text-xs font-mono uppercase tracking-wider inline-flex items-center gap-1.5 transition-all",
            activeFilter === "web"
              ? "bg-lapis text-canvas shadow-sm font-semibold"
              : "text-lapis bg-lapis/10 hover:bg-lapis/15"
          )}
        >
          <Code className="w-3.5 h-3.5" />
          <span>Web Applications</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("hardware")}
          className={cn(
            "px-4 py-1.5 rounded-sharp text-xs font-mono uppercase tracking-wider inline-flex items-center gap-1.5 transition-all",
            activeFilter === "hardware"
              ? "bg-ochre text-canvas shadow-sm font-semibold"
              : "text-ochre bg-ochre/15 hover:bg-ochre/20"
          )}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Systems &amp; Logic</span>
        </button>
      </div>

      {/* Projects Exhibition Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="p-5 sm:p-6 bg-canvas-paper shadow-plate rounded-card hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
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
              <div className="flex flex-col justify-between flex-grow space-y-6">
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-ink-primary group-hover:text-rust transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h2>
                  <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                    {project.oneliner}
                  </p>
                </div>

                {/* Single-Line Consolidated Metadata Lockup */}
                <div className="pt-1 flex items-center gap-2 font-mono text-xs text-ink-tertiary">
                  <span className="text-ink-primary font-medium">{project.meta.role}</span>
                  <span>/</span>
                  <span className="truncate">{project.meta.coreTech}</span>
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ink-primary group-hover:text-rust font-semibold transition-colors"
                  >
                    <span>Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-ink-tertiary hover:text-rust transition-colors"
                        title="Live Deployment"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-ink-tertiary hover:text-ink-primary transition-colors"
                        title="Repository"
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
