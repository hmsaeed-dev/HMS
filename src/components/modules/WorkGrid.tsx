"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Github, Code, Cpu } from "lucide-react";
import { Project } from "@/data/projects";
import Badge from "@/components/primitives/Badge";
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
        className="flex items-center justify-center md:justify-start gap-3 flex-wrap"
        role="tablist"
        aria-label="Filter projects by category"
      >
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={cn(
            "px-5 py-2 rounded-2xl text-xs uppercase tracking-wider font-medium transition-all",
            activeFilter === "all"
              ? "bg-[#728649] text-white shadow-sm"
              : "border border-[rgba(42,42,34,0.15)] text-[rgba(42,42,34,0.60)] hover:border-[#728649] hover:text-[#728649]"
          )}
        >
          All ({projects.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("web")}
          className={cn(
            "px-5 py-2 rounded-2xl text-xs uppercase tracking-wider font-medium inline-flex items-center gap-2 transition-all",
            activeFilter === "web"
              ? "bg-[#728649] text-white shadow-sm"
              : "border border-[rgba(42,42,34,0.15)] text-[rgba(42,42,34,0.60)] hover:border-[#728649] hover:text-[#728649]"
          )}
        >
          <Code className="w-3.5 h-3.5" />
          <span>Web</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("hardware")}
          className={cn(
            "px-5 py-2 rounded-2xl text-xs uppercase tracking-wider font-medium inline-flex items-center gap-2 transition-all",
            activeFilter === "hardware"
              ? "bg-[#728649] text-white shadow-sm"
              : "border border-[rgba(42,42,34,0.15)] text-[rgba(42,42,34,0.60)] hover:border-[#728649] hover:text-[#728649]"
          )}
        >
          <Cpu className="w-3.5 h-3.5" />
          <span>Hardware</span>
        </button>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <article
            key={project.slug}
            className="rounded-3xl border border-[rgba(42,42,34,0.10)] bg-white/70 backdrop-blur-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
          >
            {/* Visual Header */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[rgba(42,42,34,0.05)]">
              <Image
                src={project.featuredImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute top-4 left-4">
                <Badge variant="neutral">{project.badge}</Badge>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6">
              <div className="space-y-2">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2a2a22] group-hover:text-[#728649] transition-colors">
                  <Link href={`/work/${project.slug}`}>{project.title}</Link>
                </h2>
                <p className="text-sm text-[rgba(42,42,34,0.70)] leading-relaxed">
                  {project.oneliner}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-[rgba(42,42,34,0.06)]">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#728649] font-medium hover:gap-3 transition-all"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="flex items-center gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-[rgba(42,42,34,0.60)] hover:text-[#728649] hover:bg-black/5 transition-colors"
                      title="Live Site"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-[rgba(42,42,34,0.60)] hover:text-[#728649] hover:bg-black/5 transition-colors"
                      title="Source Code"
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
