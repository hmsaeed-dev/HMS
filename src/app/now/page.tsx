import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import TaxilaPulse from "@/components/modules/TaxilaPulse";

export const metadata: Metadata = {
  title: "Now",
  description:
    "A live update on what Hafiz Muhammad Saeed is building, learning, and thinking about right now at UET Taxila.",
};

export default function NowPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 py-16 space-y-16">
      {/* ── HERO ────────────────────────────────────────── */}
      <header className="max-w-2xl">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2a2a22] mb-4">
          Now
        </h1>
        <p className="text-lg text-[rgba(42,42,34,0.60)] leading-relaxed">
          A real-time snapshot of active projects, studies, and focus.
        </p>
      </header>

      {/* ── TWO COLUMN LAYOUT ───────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 items-start">
        {/* LEFT COLUMN: MAIN CONTENT */}
        <div className="space-y-16">
          {/* Opening Manifesto */}
          <section className="p-6 rounded-2xl border border-[rgba(42,42,34,0.08)] bg-white/40">
            <p className="font-serif text-xl md:text-2xl italic text-[#2a2a22]">
              Third Semester about to start, a new beginning.
            </p>
          </section>

          {/* Active Pursuits */}
          <section className="space-y-8">
            <h2 className="font-serif text-3xl font-bold text-[#2a2a22]">
              Active Pursuits
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Building */}
              <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#728649] font-bold">
                  Building
                </h3>
                <div className="space-y-6">
                  <article className="space-y-1">
                    <h4 className="font-serif text-xl font-bold text-[#2a2a22]">
                      hmsaeed.com
                    </h4>
                    <p className="text-sm text-[rgba(42,42,34,0.70)] leading-relaxed">
                      Rebuilding it from a simple portfolio into a dynamic
                      presence system. Unifying visual details and interactions.
                    </p>
                  </article>
                  <article className="space-y-1">
                    <h4 className="font-serif text-xl font-bold text-[#2a2a22]">
                      Design Language
                    </h4>
                    <p className="text-sm text-[rgba(42,42,34,0.70)] leading-relaxed">
                      Unifying my mark, digital identity, photography and
                      website aesthetic into a coherent visual language.
                    </p>
                  </article>
                </div>
              </div>

              {/* Learning */}
              <div className="space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#728649] font-bold">
                  Learning
                </h3>
                <div className="space-y-6">
                  <article className="space-y-1">
                    <h4 className="font-serif text-xl font-bold text-[#2a2a22]">
                      <Link
                        href="/writing"
                        className="hover:text-[#728649] transition-colors"
                      >
                        Data Structures &amp; Algorithms
                      </Link>
                    </h4>
                    <p className="text-sm text-[rgba(42,42,34,0.70)] leading-relaxed">
                      Deepening core problem-solving capacity and computer
                      science foundations.
                    </p>
                  </article>
                  <article className="space-y-1">
                    <h4 className="font-serif text-xl font-bold text-[#2a2a22]">
                      Advanced JavaScript
                    </h4>
                    <p className="text-sm text-[rgba(42,42,34,0.70)] leading-relaxed">
                      Moving from fundamentals to advanced asynchronous and
                      functional concepts.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </section>

          {/* Past Seasons History */}
          <section className="space-y-8">
            <h2 className="font-serif text-3xl font-bold text-[#2a2a22]">
              Past Seasons
            </h2>
            <div className="border-l-2 border-[#728649]/30 pl-6 space-y-8">
              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#728649] border-2 border-[#f7f4ef]" />
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#728649] font-bold">
                    May 2026
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#728649]/10 text-[#728649]">
                    End of 2nd Sem
                  </span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#2a2a22] mt-1">
                  Completing Semester &amp; Transition to JS
                </h4>
                <p className="text-sm text-[rgba(42,42,34,0.70)] leading-relaxed mt-1">
                  Wrapped up second semester at UET Taxila. Transitioned from
                  pure C++ Object Oriented programming to frontend development.
                  Began architecting the presence system for hmsaeed.com and
                  consolidating macro lens experiments.
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#728649] border-2 border-[#f7f4ef]" />
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#728649] font-bold">
                    March 2026
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#728649]/10 text-[#728649]">
                    Mid-Sem
                  </span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#2a2a22] mt-1">
                  C++ OOP, Systems &amp; Local Macro Flora
                </h4>
                <p className="text-sm text-[rgba(42,42,34,0.70)] leading-relaxed mt-1">
                  Deep dive into classes, polymorphism, and solid OOP
                  principles. Spent weekends macro-photographing spring wild
                  flora around Taxila ruins, laying conceptual seeds for the
                  design aesthetics of my digital platform.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <aside className="space-y-6">
          <TaxilaPulse />

          {/* Active Reading Widget */}
          <div className="p-6 rounded-2xl border border-[rgba(42,42,34,0.12)] bg-white/60 backdrop-blur-sm space-y-4">
            <h3 className="font-mono text-xs uppercase tracking-wider text-[#728649] font-bold">
              Active Reading
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-serif text-xl font-bold text-[#2a2a22]">
                  Macroeconomics
                </h4>
                <span className="text-xs text-[rgba(42,42,34,0.60)]">
                  by David Colander
                </span>
              </div>

              <div className="space-y-1">
                <div className="w-full h-1.5 bg-[rgba(42,42,34,0.10)] rounded-full overflow-hidden">
                  <div className="h-full bg-[#728649] rounded-full w-[35%]" />
                </div>
                <div className="text-xs text-[rgba(42,42,34,0.50)] font-mono">
                  Page 80 of 512 (18%)
                </div>
              </div>

              <details className="text-xs group pt-2">
                <summary className="cursor-pointer text-[#728649] font-medium hover:underline flex items-center justify-between">
                  <span>My Takeaways</span>
                  <span className="group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-2 text-[rgba(42,42,34,0.75)] leading-relaxed italic bg-white/80 p-3 rounded-lg border border-[rgba(42,42,34,0.06)]">
                  Exploring aggregate supply/demand equilibrium, monetary policy
                  frameworks, and structural economic variables.
                </p>
              </details>
            </div>
          </div>
        </aside>
      </div>

      {/* ── CLOSING CTA BANNER ──────────────────────────── */}
      <section className="p-8 rounded-2xl border border-[rgba(42,42,34,0.12)] bg-white/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-base text-[rgba(42,42,34,0.70)]">
          This page updates every few weeks.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/connect"
            className="px-6 py-2.5 rounded-2xl bg-[#728649] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#8a9e60] transition-colors"
          >
            Say Hello
          </Link>
          <Link
            href="/work"
            className="px-6 py-2.5 rounded-2xl border border-[rgba(42,42,34,0.20)] text-[#2a2a22] text-xs uppercase tracking-wider font-medium hover:border-[#728649] hover:text-[#728649] transition-colors"
          >
            Explore Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
