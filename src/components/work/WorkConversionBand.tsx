import React from "react";
import Link from "next/link";

export interface WorkConversionBandProps {
  headline?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function WorkConversionBand({
  headline = "Interested in systems architecture or technical dialogue?",
  description = "I welcome discussions on low-level engineering, web systems, and collaborative research. Reach out directly with questions or opportunities.",
  ctaText = "Initiate Dialogue",
  ctaHref = "/connect",
}: WorkConversionBandProps) {
  return (
    <section className="w-full bg-surface-canvas pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 md:p-12 bg-[#151927] text-[#F7F5F1] rounded-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl space-y-4 relative z-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#F7F5F1]">
              {headline}
            </h2>
            <p className="text-sm sm:text-base text-[#F7F5F1]/80 leading-relaxed font-sans font-normal">
              {description}
            </p>
            <div className="pt-2">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-pill bg-accent hover:bg-accent-hover text-white font-sans text-xs font-medium tracking-normal transition-colors shadow-sm"
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
