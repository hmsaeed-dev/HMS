import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import TaxilaPulse from "@/components/modules/TaxilaPulse";

export const metadata: Metadata = {
  title: "Now // Active Focus & Focus Ledger",
  description:
    "A real-time snapshot of active engineering projects, studies, readings, and focus areas by Hafiz Muhammad Saeed.",
};

export default function NowPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16 pt-20 sm:pt-24">
      {/* ── HERO ────────────────────────────────────────── */}
      <header className="max-w-3xl space-y-6">
        <div className="font-mono text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>Folio 2026 // Real-time Ledger</span>
        </div>
        <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink-primary leading-[1.08] break-words">
          Current Focus &amp; Pursuits
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-sans font-normal">
          A living record of active builds, technical learning trajectories, and intellectual focus. 
          Updated as the season shifts.
        </p>
      </header>

      {/* ── TWO COLUMN LAYOUT ───────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN: MAIN CONTENT */}
        <div className="space-y-12 sm:space-y-16">
          {/* Opening Manifesto */}
          <section className="p-6 bg-canvas-paper border border-border-hairline rounded-card shadow-sm">
            <p className="font-serif text-xl sm:text-2xl italic text-ink-primary leading-relaxed font-normal">
              “Third Semester in motion. Consolidating systems engineering, front-end architecture, 
              and taking on bespoke freelance client contracts.”
            </p>
          </section>

          {/* Active Pursuits */}
          <section className="space-y-8">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-ink-primary">
              Active Pursuits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Building */}
              <div className="p-6 bg-canvas-paper border border-border-hairline rounded-card shadow-sm space-y-6 hover:border-primary/30 transition-all">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <span>Building</span>
                </h3>
                <div className="space-y-6">
                  <article className="space-y-1.5">
                    <h4 className="font-serif text-xl font-normal text-ink-primary">
                      hmsaeed.com
                    </h4>
                    <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                      Refactoring the personal digital identity hub into a warm, 
                      editorial, client-conversion machine.
                    </p>
                  </article>
                  <article className="space-y-1.5">
                    <h4 className="font-serif text-xl font-normal text-ink-primary">
                      Digital Monograph System
                    </h4>
                    <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                      Refining a reusable design language based on paper stocks, 
                      classical typography scales, and hairline borders.
                    </p>
                  </article>
                </div>
              </div>

              {/* Learning */}
              <div className="p-6 bg-canvas-paper border border-border-hairline rounded-card shadow-sm space-y-6 hover:border-primary/30 transition-all">
                <h3 className="font-mono text-xs uppercase tracking-widest text-primary font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>Exploring</span>
                </h3>
                <div className="space-y-6">
                  <article className="space-y-1.5">
                    <h4 className="font-serif text-xl font-normal text-ink-primary">
                      <Link
                        href="/writing"
                        className="hover:text-primary transition-colors"
                      >
                        Data Structures &amp; Systems
                      </Link>
                    </h4>
                    <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                      Deepening core algorithm performance, memory hierarchies, and 
                      distributed systems architecture.
                    </p>
                  </article>
                  <article className="space-y-1.5">
                    <h4 className="font-serif text-xl font-normal text-ink-primary">
                      Advanced Next.js 15 Patterns
                    </h4>
                    <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                      Mastering Server Actions, parallel routes, and zero-layout-shift streaming.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* Past Seasons History */}
          <section className="space-y-8">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-ink-primary">
              Recent Seasons
            </h2>
            <div className="border-l border-border-hairline pl-6 space-y-8">
              <div className="relative">
                <span className="absolute -left-[30.5px] top-1.5 w-2 h-2 rounded-full bg-accent border-2 border-canvas" />
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent font-semibold">
                    May 2026
                  </span>
                  <span className="text-[10px] px-2 py-0.5 font-mono uppercase bg-primary-subtle text-primary rounded-sharp font-medium">
                    End of Semester 2
                  </span>
                </div>
                <h4 className="font-serif text-xl font-light text-ink-primary mt-1">
                  C++ Systems to Web Architecture Transition
                </h4>
                <p className="text-sm text-ink-secondary leading-relaxed mt-1 font-sans">
                  Completed C++ OOP lab systems. Began full-time investment in modern TypeScript, 
                  Next.js, and publishing personal engineering notes.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[30.5px] top-1.5 w-2 h-2 rounded-full bg-accent border-2 border-canvas" />
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent font-semibold">
                    March 2026
                  </span>
                  <span className="text-[10px] px-2 py-0.5 font-mono uppercase bg-canvas-recessed text-ink-tertiary rounded-sharp">
                    Mid-Sem
                  </span>
                </div>
                <h4 className="font-serif text-xl font-light text-ink-primary mt-1">
                  OOP Architecture &amp; Macro Flora
                </h4>
                <p className="text-sm text-ink-secondary leading-relaxed mt-1 font-sans">
                  Explored inheritance hierarchies and polymorphism. Spent weekends macro-photographing 
                  wild flora across the Taxila archaeological valleys.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <aside className="space-y-6">
          <TaxilaPulse />

          {/* Active Reading Widget */}
          <div className="p-6 bg-canvas-paper border border-border-hairline rounded-card shadow-sm space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Current Reading</span>
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-serif text-xl font-normal text-ink-primary">
                  Macroeconomics
                </h4>
                <span className="text-xs text-ink-tertiary font-mono">
                  by David Colander
                </span>
              </div>

              <div className="space-y-1">
                <div className="w-full h-1 bg-border-hairline overflow-hidden rounded-full">
                  <div className="h-full bg-accent w-[35%]" />
                </div>
                <div className="text-[11px] text-ink-tertiary font-mono">
                  Page 80 of 512 (18%)
                </div>
              </div>

              <details className="text-xs group pt-2">
                <summary className="cursor-pointer text-accent font-mono hover:underline flex items-center justify-between min-h-[44px]">
                  <span>Marginal Notes</span>
                  <span className="group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-2 text-ink-secondary leading-relaxed italic bg-canvas-recessed p-3 border border-border-hairline rounded-sharp font-serif text-sm">
                  Exploring aggregate supply/demand equilibrium, monetary policy
                  frameworks, and macroeconomic structural constraints.
                </p>
              </details>
            </div>
          </div>
        </aside>
      </div>

      {/* ── CLOSING CALLOUT ─────────────────────────────── */}
      <section className="p-6 sm:p-8 bg-canvas-paper border border-border-hairline rounded-card shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-ink-primary">
            Looking to collaborate this season?
          </h3>
          <p className="text-xs sm:text-sm text-ink-secondary mt-1">
            Accepting select engineering and design contracts for Q2 &amp; Q3 2026.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto">
          <Link
            href="/connect"
            className="w-full sm:w-auto min-h-[44px] px-6 py-2.5 rounded-pill bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground text-xs font-sans font-medium transition-all shadow-sm flex items-center justify-center gap-1.5"
          >
            <span>Start a Project</span>
            <span className="text-accent">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
