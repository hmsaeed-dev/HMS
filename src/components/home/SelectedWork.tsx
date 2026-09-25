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
            <span>See All</span>
            <ArrowRight className="w-3.5 h-3.5 text-accent" />
          </Link>
        </div>

        {/* ── SUBSTANTIAL WORK GRID (1 COL -> 2 COL MD -> 3 COL LG) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((project) => (
            <article
              key={project.slug}
              className="p-5 sm:p-6 bg-canvas-paper border border-border-hairline rounded-card flex flex-col justify-between space-y-6 hover:border-primary/30 transition-all duration-300 group shadow-sm"
            >
              {/* Visual Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-canvas-vellum rounded-sharp">
                <Image
                  src={project.featuredImage}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>

              {/* Information & Narrative */}
              <div className="flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-ink-primary group-hover:text-primary transition-colors">
                      <Link href={`/work/${project.slug}`}>{project.title}</Link>
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed font-sans line-clamp-2 font-normal">
                    {project.oneliner}
                  </p>
                </div>

                {/* Progressive Disclosure Action */}
                <div className="flex items-center justify-between pt-4">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-2 min-h-[44px] text-xs font-sans font-semibold text-ink-primary group-hover:text-accent transition-colors"
                  >
                    <span>View</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="flex items-center gap-1">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md text-ink-muted hover:text-accent transition-colors"
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
                        className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md text-ink-muted hover:text-primary transition-colors"
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
    </section>
  );
}
