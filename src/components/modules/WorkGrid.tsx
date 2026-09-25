import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data/projects";

interface WorkGridProps {
  projects: Project[];
}

export default function WorkGrid({ projects }: WorkGridProps) {
  return (
    <div className="space-y-8">
      {/* Registry Header */}
      <div className="flex items-center justify-between pb-4 text-xs font-sans text-ink-tertiary">
        <span>Curated Systems Registry ({projects.length} Works)</span>
        <span>Offline-First · C++ · Vision AI · Hardware</span>
      </div>

      {/* Projects Exhibition Grid (Mobile-First 1 Col -> 2 Col MD) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project) => (
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
            <div className="flex flex-col justify-between flex-grow space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h2 className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-ink-primary group-hover:text-primary transition-colors">
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h2>
                  <span className="font-sans text-[10px] text-accent uppercase font-semibold shrink-0 tracking-wider">
                    {project.badge}
                  </span>
                </div>
                <p className="text-sm text-ink-secondary leading-relaxed font-sans font-normal line-clamp-2">
                  {project.oneliner}
                </p>
              </div>

              {/* Progressive Disclosure Action */}
              <div className="flex items-center justify-between pt-4">
                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-2 min-h-[44px] text-xs font-sans font-semibold text-ink-primary group-hover:text-accent transition-colors"
                >
                  <span>View project</span>
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
  );
}
