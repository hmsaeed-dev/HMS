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
    highlightColor: "text-rust",
  },
  {
    value: "100%",
    label: "Core Web Vitals",
    context: "Sub-Second Performance",
    highlightColor: "text-moss",
  },
  {
    value: "UTC+5",
    label: "Taxila Base",
    context: "EU / US Working Overlap",
    highlightColor: "text-lapis",
  },
  {
    value: "< 24h",
    label: "Direct SLA",
    context: "Zero Agency Overhead",
    highlightColor: "text-rust",
  },
];

export default function ProofRibbon({ metrics = DEFAULT_METRICS }: ProofRibbonProps) {
  return (
    <section className="w-full bg-canvas-vellum/50 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-start">
          {metrics.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight ${item.highlightColor || "text-rust"}`}>
                {item.value}
              </div>
              <div className="font-sans text-xs sm:text-sm font-medium text-ink-primary">
                {item.label}
              </div>
              {item.context && (
                <div className="font-mono text-[10px] sm:text-[11px] text-ink-tertiary uppercase tracking-wider">
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
