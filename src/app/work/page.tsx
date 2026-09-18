import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data";
import WorkGrid from "@/components/modules/WorkGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A collection of things I've built, broken, and learned from — covering web applications, systems architecture, and hardware logic.",
};

export default function WorkPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 py-16 space-y-16">
      {/* ── WORK HERO SECTION ───────────────────────────── */}
      <header className="max-w-2xl space-y-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2a2a22]">
          Crafted &amp; Built
        </h1>
        <p className="text-lg text-[rgba(42,42,34,0.60)] leading-relaxed">
          Collection of what I&apos;ve built, broken and learned from.
        </p>

        <div className="flex items-center gap-8 pt-4">
          <div className="space-y-0.5">
            <span className="font-serif text-3xl font-bold text-[#728649] block">
              05
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[rgba(42,42,34,0.50)]">
              Projects
            </span>
          </div>
          <div className="space-y-0.5">
            <span className="font-serif text-3xl font-bold text-[#728649] block">
              06
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[rgba(42,42,34,0.50)]">
              Technologies
            </span>
          </div>
        </div>
      </header>

      {/* ── WORK GRID WITH FILTERS ──────────────────────── */}
      <WorkGrid projects={projects} />

      {/* ── CLOSING CONNECT ─────────────────────────────── */}
      <section className="text-center py-8">
        <div className="w-full h-[1px] bg-[rgba(42,42,34,0.10)] mb-8" />
        <p className="font-serif text-xl text-[#2a2a22] leading-relaxed mb-4">
          Nothing here is finished on purpose.
          <br />
          Check back when the season changes.
        </p>
        <Link
          href="/connect"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#2a2a22] hover:text-[#728649] transition-colors"
        >
          <span>Say hello</span>
          <span>→</span>
        </Link>
        <div className="w-full h-[1px] bg-[rgba(42,42,34,0.10)] mt-8" />
      </section>
    </div>
  );
}
