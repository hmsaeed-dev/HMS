import React from "react";

export interface ProofMetric {
  value: string;
  label: string;
  context?: string;
  highlightColor?: string;
}

export interface ProofRibbonProps {
  metrics?: ProofMetric[];
}

const DEFAULT_METRICS: ProofMetric[] = [
  {
    value: "05+",
    label: "Production Systems",
    context: "Next.js 15 · TypeScript",
    highlightColor: "text-primary",
  },
  {
    value: "100%",
    label: "Core Web Vitals",
    context: "Sub-Second Performance",
    highlightColor: "text-accent",
  },
  {
    value: "UTC+5",
    label: "Taxila Base",
    context: "EU / US Working Overlap",
    highlightColor: "text-primary",
  },
  {
    value: "< 24h",
    label: "Direct SLA",
    context: "Zero Agency Overhead",
    highlightColor: "text-accent",
  },
];

export default function ProofRibbon({ metrics = DEFAULT_METRICS }: ProofRibbonProps) {
  return (
    <section className="w-full bg-canvas-paper/50 py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 items-start">
          {metrics.map((item, idx) => (
            <div key={idx} className="space-y-1.5 p-2 rounded-card transition-colors">
              <div className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight text-primary flex items-baseline gap-1">
                <span>{item.value}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block mb-1" />
              </div>
              <div className="font-sans text-xs sm:text-sm font-medium text-ink-primary">
                {item.label}
              </div>
              {item.context && (
                <div className="font-sans text-[10px] sm:text-[11px] text-ink-tertiary uppercase tracking-wider font-semibold">
                  {item.context}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
