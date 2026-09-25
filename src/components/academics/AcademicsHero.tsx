import React from "react";
import { academicsData } from "@/data/academics";

export interface AcademicsHeroProps {
  title?: string;
  intro?: string;
  runningStat?: string;
}

export default function AcademicsHero({
  title = academicsData.hero.title,
  intro = academicsData.hero.intro,
  runningStat = academicsData.hero.runningStat,
}: AcademicsHeroProps) {
  return (
    <section className="w-full bg-surface-canvas pt-16 sm:pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl space-y-6">
          <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink-primary leading-[1.08] break-words">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-sans font-normal">
            {intro}
          </p>
          <p className="font-sans text-xs text-accent font-semibold pt-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>{runningStat}</span>
          </p>
        </header>
      </div>
    </section>
  );
}
