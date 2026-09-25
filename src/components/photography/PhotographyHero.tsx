import React from "react";
import { photos as allPhotos } from "@/data/photos";

export interface PhotographyHeroProps {
  title?: string;
  quote?: string;
  totalPlates?: number;
  categoryCount?: number;
}

export default function PhotographyHero({
  title = "Visual Studies & Macro Lens",
  quote = "“Most of what is interesting is remarkably easy to walk past.”",
  totalPlates = allPhotos.length,
  categoryCount = new Set(allPhotos.map((p) => p.category)).size,
}: PhotographyHeroProps) {
  return (
    <section className="w-full bg-surface-canvas pt-12 sm:pt-16 pb-10 border-b border-border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl space-y-6">
          <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink-primary leading-[1.08] break-words">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-ink-secondary leading-relaxed italic font-serif font-normal">
            {quote}
          </p>

          <div className="flex items-center gap-8 pt-2">
            <div className="space-y-0.5">
              <span className="font-sans font-black text-2xl sm:text-3xl text-primary block">
                {totalPlates}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
                Archived Plates
              </span>
            </div>
            <div className="space-y-0.5">
              <span className="font-sans font-black text-2xl sm:text-3xl text-primary block">
                0{categoryCount}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
                Themes (Macro · Flora · Land)
              </span>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
