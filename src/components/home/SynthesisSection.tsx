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
    iconClass: "text-primary",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4">
          <div className="space-y-2 max-w-xl">
            <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink-primary">
              Deliberate solutions for complex digital needs.
            </h2>
          </div>
          <Link
            href="/connect"
            className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-sans font-medium text-ink-secondary hover:text-primary transition-colors self-start sm:self-auto"
          >
            <span>Custom Scope Inquiries</span>
            <ArrowRight className="w-3.5 h-3.5 text-accent" />
          </Link>
        </div>

        {/* ── ASYMMETRIC 1:2 SPLIT (PILLARS + ANCHOR CARD) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Architectural Pillars */}
          <div className="space-y-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="p-6 bg-canvas-paper border border-border-hairline rounded-card space-y-3 hover:border-primary/30 transition-all duration-300 group shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-xs font-bold text-primary">
                      {pillar.num}
                    </span>
                    <Icon className="w-4 h-4 text-accent transition-transform group-hover:scale-110 duration-300" />
                  </div>
                  <h3 className="font-sans font-bold text-lg sm:text-xl tracking-tight text-ink-primary group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-ink-secondary leading-relaxed font-sans font-normal">
                    {pillar.description}
                  </p>
                  <div className="pt-1 font-sans text-[11px] text-ink-tertiary">
                    {pillar.tech}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Column 2: Anchor Monograph Plate with Pattern & TaxilaPulse */}
          <div className="p-8 sm:p-12 lg:p-14 bg-canvas-paper/70 border border-border-hairline rounded-card flex flex-col justify-between space-y-8 relative overflow-hidden h-full shadow-sm">
            <div className="space-y-6 relative z-10">
              <span className="w-8 h-[2px] bg-accent block rounded-full" />
              <blockquote className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-ink-primary leading-tight font-normal">
                “{quote}”
              </blockquote>
              <p className="font-sans text-[11px] uppercase tracking-wider text-ink-tertiary">
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
