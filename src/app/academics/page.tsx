import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { academicsData } from "@/data";
import AcademicsAccordion from "@/components/modules/AcademicsAccordion";

export const metadata: Metadata = {
  title: "Academics",
  description:
    "Academic record and coursework of Hafiz Muhammad Saeed, a CS student at UET Taxila.",
};

export default function AcademicsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 py-16 space-y-16">
      {/* ── ACADEMICS HERO ──────────────────────────────── */}
      <header className="max-w-2xl space-y-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2a2a22]">
          {academicsData.hero.title}
        </h1>
        <p className="text-lg text-[rgba(42,42,34,0.70)]">
          {academicsData.hero.intro}
        </p>
        <p className="font-mono text-sm text-[#728649] font-medium pt-2">
          {academicsData.hero.runningStat}
        </p>
      </header>

      {/* ── SEMESTERS ACCORDION ─────────────────────────── */}
      <section className="space-y-8">
        <AcademicsAccordion />
      </section>

      {/* ── PRE-UNIVERSITY TIMELINE & ENTRANCE EXAMS ────── */}
      <section className="space-y-8 pt-8 border-t border-[rgba(42,42,34,0.08)]">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a22]">
          Before UET
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="border-l-2 border-[#728649]/30 pl-6 space-y-6">
            {academicsData.preUniversity.map((item, idx) => (
              <div key={idx} className="relative">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#728649] border-2 border-[#f7f4ef]" />
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#728649] font-bold">
                    {item.year}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#728649]/10 text-[#728649]">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-[#2a2a22] mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-[rgba(42,42,34,0.70)] leading-relaxed mt-0.5">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Entrance Exams */}
          <div className="p-6 md:p-8 rounded-3xl border border-[rgba(42,42,34,0.10)] bg-white/60 backdrop-blur-sm space-y-6">
            <h3 className="font-serif text-2xl font-bold text-[#2a2a22]">
              Competitive Entrance Exams
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {academicsData.entranceExams.map((exam, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#f7f4ef] border border-[rgba(42,42,34,0.06)] text-center space-y-1"
                >
                  <div className="font-mono text-2xl font-bold text-[#2a2a22]">
                    {exam.score}{" "}
                    <span className="text-xs font-normal text-[rgba(42,42,34,0.40)]">
                      / {exam.max}
                    </span>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-wider text-[#728649] font-semibold">
                    {exam.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ─────────────────────────────────── */}
      <section className="p-8 rounded-3xl border border-[rgba(42,42,34,0.12)] bg-white/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-base text-[rgba(42,42,34,0.70)]">
          Want to discuss coursework, research, or study materials?
        </p>
        <Link
          href="/connect"
          className="px-6 py-2.5 rounded-2xl bg-[#728649] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#8a9e60] transition-colors"
        >
          Get in touch
        </Link>
      </section>
    </div>
  );
}
