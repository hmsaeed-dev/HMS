import React from "react";
import Link from "next/link";
import { Code2, Compass, Layers, ArrowRight } from "lucide-react";
import TaxilaPulse from "@/components/modules/TaxilaPulse";

export interface PillarItem {
  num: string;
  icon: React.ElementType;
  iconClass: string;
  title: string;
  description: string;
  tech: string;
}

export interface SynthesisSectionProps {
  pillars?: PillarItem[];
  quote?: string;
  quoteAuthor?: string;
}

const DEFAULT_PILLARS: PillarItem[] = [
  {
    num: "01",
    icon: Code2,
    iconClass: "text-lapis",
    title: "Full-Stack Web Systems",
    description: "Production-ready architectures built with Next.js 15, TypeScript, Tailwind, and resilient APIs. Engineered for sub-second performance, clean DX, and long-term maintainability.",
    tech: "Next.js · TypeScript · API Design · State Synchronization",
  },
  {
    num: "02",
    icon: Compass,
    iconClass: "text-rust",
    title: "Editorial Digital Identities",
    description: "Bespoke digital homes, personal monographs, and high-craft brand hubs. Formed with typographical rigor, fluid tactile micro-states, and zero generic template bloat.",
    tech: "Design Systems · Cormorant Garamond · Micro-States",
  },
  {
    num: "03",
    icon: Layers,
    iconClass: "text-moss",
    title: "Interface Audits & Refactoring",
    description: "Eliminating frontend tech debt, optimizing Core Web Vitals, and ensuring strict WCAG AA/AAA accessibility compliance across all viewport densities.",
    tech: "Performance Audits · WCAG AAA · Component Toolkits",
  },
];

export default function SynthesisSection({
  pillars = DEFAULT_PILLARS,
  quote = "Before university, I spent a year learning things I had no strategic plan for: wood carving, crochet, Arabic syntax, chess from zero. It shaped how I build software today — I would rather understand the whole shape of a system than rush to polish one isolated corner.",
  quoteAuthor = "Hafiz Muhammad Saeed, On Systems Architecture & Craft",
}: SynthesisSectionProps) {
  return (
    <section className="w-full bg-surface-canvas py-16 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink-primary">
              Deliberate solutions for complex digital needs.
            </h2>
          </div>
          <Link
            href="/connect"
            className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ink-primary hover:text-rust transition-colors font-medium self-start sm:self-auto"
          >
            <span>Custom Scope Inquiries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── ASYMMETRIC 1:2 SPLIT (PILLARS + ANCHOR CARD) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-start">
          {/* Column 1: Architectural Pillars */}
          <div className="space-y-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="p-6 sm:p-7 bg-canvas-paper shadow-plate rounded-card space-y-4 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-ink-tertiary">
                      {pillar.num}
                    </span>
                    <Icon className={`w-5 h-5 ${pillar.iconClass} transition-transform group-hover:scale-110 duration-300`} />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-ink-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                    {pillar.description}
                  </p>
                  <div className="pt-2 font-mono text-[11px] text-ink-tertiary">
                    {pillar.tech}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 2: Anchor Monograph Plate with Pattern & TaxilaPulse */}
          <div className="p-8 sm:p-12 lg:p-14 bg-canvas-vellum pattern-taxila-geometry shadow-plate rounded-card flex flex-col justify-between space-y-8 relative overflow-hidden h-full">
            <div className="space-y-6 relative z-10">
              <span className="w-8 h-[2px] bg-rust block" />
              <blockquote className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-ink-primary leading-relaxed">
                “{quote}”
              </blockquote>
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-rust font-semibold">
                — {quoteAuthor}
              </p>
            </div>

            <div className="relative z-10 pt-4">
              <TaxilaPulse />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
