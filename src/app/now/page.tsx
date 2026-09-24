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
    <div className="max-w-[1240px] mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-24 space-y-16 pt-24 sm:pt-28">
      {/* ── HERO ────────────────────────────────────────── */}
      <header className="max-w-3xl space-y-6">
        <div className="font-mono text-xs uppercase tracking-widest text-rust">
          Folio 2026 // Real-time Ledger
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-ink-primary leading-tight">
          Current Focus &amp; Pursuits
        </h1>
        <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-sans">
          A living record of active builds, technical learning trajectories, and intellectual focus. 
          Updated as the season shifts.
        </p>
      </header>

      {/* ── TWO COLUMN LAYOUT ───────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">
        {/* LEFT COLUMN: MAIN CONTENT */}
        <div className="space-y-16">
          {/* Opening Manifesto */}
          <section className="p-6 bg-canvas-recessed/60 border border-ink-hairline">
            <p className="font-serif text-xl sm:text-2xl italic text-ink-primary leading-relaxed">
              “Third Semester in motion. Consolidating systems engineering, front-end architecture, 
              and taking on bespoke freelance client contracts.”
            </p>
          </section>

          {/* Active Pursuits */}
          <section className="space-y-8">
            <h2 className="font-serif text-3xl font-light text-ink-primary">
              Active Pursuits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Building */}
              <div className="p-6 bg-canvas-surface border border-ink-hairline shadow-plate space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-rust font-semibold">
                  Building
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
              <div className="p-6 bg-canvas-surface border border-ink-hairline shadow-plate space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-olive font-semibold">
                  Exploring
                </h3>
                <div className="space-y-6">
                  <article className="space-y-1.5">
                    <h4 className="font-serif text-xl font-normal text-ink-primary">
                      <Link
                        href="/writing"
                        className="hover:text-rust transition-colors"
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
            <h2 className="font-serif text-3xl font-light text-ink-primary">
              Recent Seasons
            </h2>
            <div className="border-l border-ink-hairline pl-6 space-y-8">
              <div className="relative">
                <span className="absolute -left-[30.5px] top-1.5 w-2 h-2 rounded-full bg-rust border-2 border-canvas" />
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-rust font-semibold">
                    May 2026
                  </span>
                  <span className="text-[10px] px-2 py-0.5 font-mono uppercase bg-olive/10 text-olive">
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
                <span className="absolute -left-[30.5px] top-1.5 w-2 h-2 rounded-full bg-rust border-2 border-canvas" />
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-rust font-semibold">
                    March 2026
                  </span>
                  <span className="text-[10px] px-2 py-0.5 font-mono uppercase bg-canvas-recessed text-ink-tertiary">
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
          <div className="p-6 bg-canvas-surface border border-ink-hairline shadow-plate space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-rust font-semibold">
              Current Reading
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
                <div className="w-full h-1 bg-ink-hairline overflow-hidden">
                  <div className="h-full bg-rust w-[35%]" />
                </div>
                <div className="text-[11px] text-ink-tertiary font-mono">
                  Page 80 of 512 (18%)
                </div>
              </div>

              <details className="text-xs group pt-2">
                <summary className="cursor-pointer text-rust font-mono hover:underline flex items-center justify-between">
                  <span>Marginal Notes</span>
                  <span className="group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-2 text-ink-secondary leading-relaxed italic bg-canvas-recessed p-3 border border-ink-hairline font-serif text-sm">
                  Exploring aggregate supply/demand equilibrium, monetary policy
                  frameworks, and macroeconomic structural constraints.
                </p>
              </details>
            </div>
          </div>
        </aside>
      </div>

      {/* ── CLOSING CALLOUT ─────────────────────────────── */}
      <section className="p-8 bg-canvas-surface border border-ink-hairline shadow-plate flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-xl font-light text-ink-primary">
            Looking to collaborate this season?
          </h3>
          <p className="text-xs text-ink-secondary mt-1">
            Accepting select engineering and design contracts for Q2 &amp; Q3 2026.
          </p>
        </div>
        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/connect"
            className="px-5 py-2.5 rounded-sharp bg-ink-primary hover:bg-rust text-canvas text-xs font-mono uppercase tracking-widest font-semibold transition-colors shadow-plate"
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </div>
  );
}
