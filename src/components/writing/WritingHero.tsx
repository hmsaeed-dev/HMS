import React from "react";

export interface WritingMetric {
  value: string;
  label: string;
}

export interface WritingHeroProps {
  title?: string;
  description?: string;
  metrics?: WritingMetric[];
}

const DEFAULT_METRICS: WritingMetric[] = [
  { value: "03", label: "Published Pieces" },
  { value: "~ 05", label: "Avg. Min Read" },
];

export default function WritingHero({
  title = "Writing & Field Notes",
  description = "Observations on software architecture, learning how to learn, and the enduring shape of personal systems.",
  metrics = DEFAULT_METRICS,
}: WritingHeroProps) {
  return (
    <section className="w-full bg-surface-canvas pt-12 sm:pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-ink-primary leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-sans">
            {description}
          </p>

          <div className="flex items-center gap-8 pt-2">
            {metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="font-serif text-3xl font-light text-rust block">
                  {m.value}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-ink-tertiary">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </header>
      </div>
    </section>
  );
}
