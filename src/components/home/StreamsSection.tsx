import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects as allProjects, Project } from "@/data/projects";

export interface StreamsSectionProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

export default function StreamsSection({
  title = "Selected Works & Systems",
  subtitle = "Production web applications, interface design systems, and physical computing prototypes.",
  projects = allProjects.slice(0, 3),
}: StreamsSectionProps) {
  return (
    <section id="selected-works" className="w-full bg-canvas-vellum/40 py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink-primary">
              {title}
            </h2>
            <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
              {subtitle}
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ink-primary hover:text-rust transition-colors font-medium self-start sm:self-auto"
          >
            <span>Full Archive ({allProjects.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── 3-COLUMN SHOWCASE GRID (SCROLL-SNAP ON MOBILE) ─ */}
        <div className="flex md:grid md:grid-cols-3 gap-6 sm:gap-8 overflow-x-auto md:overflow-visible scroll-snap-x no-scrollbar pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="w-[84vw] max-w-[340px] shrink-0 snap-card md:w-auto md:max-w-none md:shrink p-5 sm:p-6 bg-canvas-paper shadow-plate rounded-card flex flex-col justify-between space-y-6 hover:shadow-md transition-all duration-300 group"
            >
              {/* Visual Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas-vellum rounded-sharp">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 84vw, (max-width: 1024px) 33vw, 360px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Information & Narrative */}
              <div className="flex flex-col justify-between flex-grow space-y-5">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-light text-ink-primary group-hover:text-rust transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans line-clamp-3">
                    {project.oneliner}
                  </p>
                </div>

                {/* Consolidated Single-Line Metadata Lockup */}
                <div className="pt-1 flex items-center gap-2 font-mono text-xs text-ink-tertiary">
                  <span className="text-ink-primary font-medium">{project.meta.role}</span>
                  <span className="opacity-30">/</span>
                  <span className="truncate">{project.meta.coreTech}</span>
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between pt-2">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ink-primary group-hover:text-rust font-semibold transition-colors"
                  >
                    <span>Examine Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-ink-tertiary hover:text-rust transition-colors"
                      title="Live Deployment"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
