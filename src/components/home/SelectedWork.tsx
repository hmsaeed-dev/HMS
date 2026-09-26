import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  // Feature top 3 systems with strongest storytelling evidence
  const featured = projects.slice(0, 3);

  return (
    <section id="selected-work" className="w-full bg-surface-canvas py-20 sm:py-28 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink-primary">
              Selected Systems
            </h2>
            <p className="font-sans text-sm sm:text-base text-ink-secondary leading-relaxed">
              Production web applications, low-level architectures in C++, and multimodal AI pipelines.
            </p>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-ink-secondary hover:text-primary transition-colors self-start sm:self-auto min-h-[44px]"
          >
            <span>See All Works</span>
            <ArrowRight className="w-3.5 h-3.5 text-accent" />
          </Link>
        </div>

        {/* ── INTEGRATED AERO-GLASS PROJECT CARDS (1 COL -> 2 COL MD -> 3 COL LG) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {featured.map((project) => {
            const primaryTech = project.meta?.coreTech
              ? project.meta.coreTech.split(",")[0].trim()
              : null;

            return (
              <article
                key={project.slug}
                className="group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900 shadow-xl min-h-[470px] h-full transition-all duration-300 hover:shadow-2xl hover:border-slate-700/90"
              >
                {/* ── 1. TOP PREVIEW VISUAL (55%–60% COVERAGE) ── */}
                <div className="absolute inset-0 h-[60%] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={project.featuredImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    className="object-cover object-top"
                  />
                  {/* Subtle depth gradient overlay blending into frosted lower pane */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-black/30 pointer-events-none" />
                </div>

                {/* ── EXTERNAL ACCESS ICONS (FLOATING GLASS PILLS) ── */}
                {(project.liveUrl || project.githubUrl) && (
                  <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:bg-black/70 flex items-center justify-center transition-colors shadow-sm"
                        title="Live Deployment"
                        aria-label={`Open ${project.title} live deployment`}
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-full bg-black/45 backdrop-blur-md border border-white/15 text-white/80 hover:text-white hover:bg-black/70 flex items-center justify-center transition-colors shadow-sm"
                        title="Source Code"
                        aria-label={`Open ${project.title} source code repository`}
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}

                {/* ── 2. AERO-GLASS & GRADIENT OVERLAY PANE ── */}
                <div className="relative z-10 w-full backdrop-blur-md bg-gradient-to-b from-[rgba(15,23,42,0.78)] via-[rgba(15,23,42,0.92)] to-[rgba(15,23,42,0.98)] p-5 sm:p-6 rounded-b-3xl flex flex-col justify-between space-y-4">

                  {/* Typography: Title & Description */}
                  <div className="space-y-1.5">
                    <h3 className="text-white font-semibold text-lg sm:text-xl tracking-tight leading-snug">
                      <Link
                        href={`/work/${project.slug}`}
                        className="hover:text-white/90 transition-colors"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-white/70 text-sm line-clamp-2 leading-relaxed font-normal">
                      {project.oneliner}
                    </p>
                  </div>

                  {/* ── 3. FULL-WIDTH CALL TO ACTION (CTA) ── */}
                  <div className="pt-1">
                    <Link
                      href={`/work/${project.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-white text-neutral-900 font-medium py-2.5 px-4 rounded-full hover:bg-neutral-100 active:scale-[0.99] transition-all shadow-md text-xs sm:text-sm font-sans"
                    >
                      <span>View Project</span>
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-900" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
