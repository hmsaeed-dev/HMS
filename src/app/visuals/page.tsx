import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import PhotographyShowcase from "@/components/photography/PhotographyShowcase";

export const metadata: Metadata = {
  title: "Visuals // HMS Clicks — The Laboratory of Observation",
  description:
    "Macro photography, botanical textures, and natural geometry photographed by Hafiz Muhammad Saeed in Taxila and Margalla Hills.",
};

export default function VisualsPage() {
  return (
    <main className="w-full flex flex-col pt-16 sm:pt-20">
      {/* Editorial Header */}
      <section className="w-full bg-surface-canvas pt-16 sm:pt-20 pb-8 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-ink-primary leading-[1.08]">
            Captured with patience, shared with purpose.
          </h1>
          <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl font-normal">
            A visual exercise in observational stillness.
          </p>
        </div>
      </section>

      {/* ── OBSERVATIONAL FIELD STUDY PROLOGUE ────────────────────────── */}
      <section className="w-full bg-surface-canvas pb-12 sm:pb-16 border-b border-border-hairline">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 lg:p-10 bg-canvas-paper border border-border-hairline rounded-card shadow-sm grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-5">
              <div className="font-sans text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>The Field &amp; The Lens · Taxila Valleys</span>
              </div>
              <h2 className="font-sans font-black text-2xl sm:text-3xl tracking-tight text-ink-primary">
                The Eye Before the Compiler
              </h2>
              <div className="space-y-3.5 text-sm sm:text-base text-ink-secondary leading-relaxed font-sans">
                <p>
                  Macro observation directly informs how I engineer software: both disciplines require
                  deep stillness, patience, and noticing what exists between the obvious lines.
                </p>
                <p>
                  Walking the stream banks of Harnoi and the quiet foothills of the Margalla range with manual
                  lenses taught me that complex structures cannot be hurried. You must wait for natural light
                  to align, observe minute tolerances, and hold your breath until clarity emerges.
                </p>
              </div>
              <div className="pt-2 text-xs font-serif italic text-ink-tertiary">
                “Observation is applied patience: learning to see what exists between obvious lines.”
              </div>
            </div>

            <div className="justify-self-center lg:justify-self-end w-full max-w-[280px] sm:max-w-[320px]">
              <div className="p-2.5 bg-canvas-paper border border-border-hairline rounded-card shadow-sm group hover:border-primary/30 transition-all duration-500">
                <div className="overflow-hidden aspect-[3/4] relative bg-canvas-vellum rounded-sharp">
                  <Image
                    src="/assets/portraits/Harnoi.jpg"
                    alt="Hafiz Muhammad Saeed exploring the mountain streams of Harnoi"
                    fill
                    priority
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover object-[center_15%] contrast-[1.04] group-hover:scale-[1.02] transition-all duration-700"
                  />
                </div>
                <div className="pt-2.5 px-0.5 flex items-center justify-between font-sans text-[10px] tracking-wider uppercase text-ink-tertiary">
                  <span className="text-ink-primary font-bold">Field Study</span>
                  <span>Harnoi, PK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <PhotographyShowcase />
    </main>
  );
}
