import React from "react";
import Link from "next/link";

export interface AcademicsConversionBandProps {
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function AcademicsConversionBand({
  headline = "Curious about technical coursework or study artifacts?",
  description = "Open to discussing systems engineering research or open-source guides.",
  ctaText = "Get in Touch",
  ctaHref = "/connect",
}: AcademicsConversionBandProps) {
  return (
    <section className="w-full bg-surface-canvas pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 bg-canvas-dark text-canvas-base pattern-dark-mesh shadow-dark-plate rounded-card flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left relative overflow-hidden">
          <div className="space-y-1 relative z-10">
            <h3 className="font-serif text-xl sm:text-2xl font-light text-canvas-base">
              {headline}
            </h3>
            <p className="text-xs sm:text-sm text-canvas-paper/80">
              {description}
            </p>
          </div>
          <Link
            href={ctaHref}
            className="px-6 py-3 rounded-sharp bg-rust hover:bg-rust-hover text-canvas text-xs font-mono uppercase tracking-widest font-semibold transition-colors shadow-plate shrink-0 relative z-10"
          >
            <span>{ctaText}</span>
            <span className="ml-1.5">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
