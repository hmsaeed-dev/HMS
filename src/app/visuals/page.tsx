import React from "react";
import type { Metadata } from "next";
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
          <div className="font-sans text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Visual Laboratory // HMS Clicks</span>
          </div>
          <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-ink-primary leading-[1.08]">
            Captured with patience, shared with purpose.
          </h1>
          <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl font-normal">
            A visual exercise in observational stillness. Just as macro lenses require steady hands to capture
            the delicate geometry of a fruit fly or rose thorn, debugging complex systems requires noticing
            the subtle edge conditions between the obvious lines.
          </p>
        </div>
      </section>

      {/* Gallery Showcase */}
      <PhotographyShowcase />
    </main>
  );
}
