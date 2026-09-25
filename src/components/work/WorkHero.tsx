import React from "react";

export interface WorkMetric {
  value: string;
  label: string;
  color?: string;
}

export interface WorkHeroProps {
  title?: string;
  description?: string;
  metrics?: WorkMetric[];
}

const DEFAULT_METRICS: WorkMetric[] = [
  { value: "05", label: "Shipped Projects", color: "text-primary" },
  { value: "100%", label: "TypeScript / Next.js", color: "text-accent" },
  { value: "Open", label: "Client Engagements", color: "text-primary" },
];

export default function WorkHero({
  title = "Selected Works & Systems",
  description = "A curated exhibition of production web applications, architectural prototypes, and custom tools. Built with an emphasis on typographical balance, sub-second performance, and long-term maintainability.",
  metrics = DEFAULT_METRICS,
}: WorkHeroProps) {
  return (
    <section className="w-full bg-surface-canvas pt-16 sm:pt-20 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl space-y-6">
          <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink-primary leading-[1.08] break-words">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-sans font-normal">
            {description}
          </p>

          <div className="grid grid-cols-3 gap-3 sm:flex sm:items-center sm:gap-12 pt-2">
            {metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <span className="font-sans font-black text-2xl sm:text-3xl text-primary block">
                  {m.value}
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-ink-tertiary font-medium">
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
