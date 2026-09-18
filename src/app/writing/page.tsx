import React from "react";
import type { Metadata } from "next";
import { posts } from "@/data/writing";
import WritingList from "@/components/WritingList";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays, notes, and open-source study guides on software engineering, polymathy, craft, and philosophy by Hafiz Muhammad Saeed.",
};

export default function WritingPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 py-16 space-y-16">
      {/* ── HERO ────────────────────────────────────────── */}
      <header className="max-w-2xl space-y-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2a2a22]">
          Writing
        </h1>
        <p className="text-lg text-[rgba(42,42,34,0.60)] leading-relaxed">
          Personal Reflections and study guides.
        </p>

        <div className="flex items-center gap-8 pt-4">
          <div className="space-y-0.5">
            <span className="font-serif text-3xl font-bold text-[#728649] block">
              03
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[rgba(42,42,34,0.50)]">
              Pieces
            </span>
          </div>
          <div className="space-y-0.5">
            <span className="font-serif text-3xl font-bold text-[#728649] block">
              ~ 05
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[rgba(42,42,34,0.50)]">
              Min Read
            </span>
          </div>
        </div>
      </header>

      {/* ── WRITING LIST WITH FILTERS ───────────────────── */}
      <WritingList posts={posts} />
    </div>
  );
}
