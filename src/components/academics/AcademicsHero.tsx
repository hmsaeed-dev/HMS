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
    <section className="w-full bg-surface-canvas pt-12 sm:pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-ink-primary leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-sans">
            {intro}
          </p>
          <p className="font-mono text-xs text-olive font-medium pt-2">
            {runningStat}
          </p>
        </header>
      </div>
    </section>
  );
}
