import React from "react";
import Link from "next/link";

export interface WorkConversionBandProps {
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function WorkConversionBand({
  headline = "Need an architect or engineer for your next digital product?",
  description = "I work directly with founders and teams on fixed deliverables, interface design systems, and complete front-end builds. Let's evaluate your timeline and scope.",
  ctaText = "Initiate a Conversation",
  ctaHref = "/connect",
}: WorkConversionBandProps) {
  return (
    <section className="w-full bg-surface-canvas pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-canvas-dark text-canvas-base pattern-dark-mesh shadow-dark-plate rounded-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rust/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl space-y-4 relative z-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-canvas-base">
              {headline}
            </h2>
            <p className="text-sm sm:text-base text-canvas-paper/80 leading-relaxed font-sans">
              {description}
            </p>
            <div className="pt-2">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sharp bg-rust hover:bg-rust-hover text-canvas font-mono text-xs uppercase tracking-widest transition-colors font-semibold shadow-plate"
              >
                <span>{ctaText}</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
