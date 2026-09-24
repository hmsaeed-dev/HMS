import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface StoryConversionBandProps {
  headline?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function StoryConversionBand({
  headline = "Let's build something deliberate",
  description = "If this way of thinking about design and engineering resonates with your product roadmap, I welcome conversations with prospective clients, founders, and fellow builders.",
  primaryCtaText = "Initiate a Conversation",
  primaryCtaHref = "/connect",
  secondaryCtaText = "Review Works",
  secondaryCtaHref = "/work",
}: StoryConversionBandProps) {
  return (
    <section className="w-full bg-surface-canvas pt-8 pb-20 sm:pb-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="p-8 sm:p-12 bg-canvas-dark text-canvas-base pattern-dark-mesh shadow-dark-plate rounded-card space-y-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rust/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-3">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-canvas-base">
              {headline}
            </h3>
            <p className="text-sm sm:text-base text-canvas-paper/80 leading-relaxed font-sans max-w-xl">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-2 relative z-10">
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sharp bg-rust hover:bg-rust-hover text-canvas text-xs font-mono uppercase tracking-widest font-semibold transition-colors shadow-plate"
            >
              <span>{primaryCtaText}</span>
              <span>→</span>
            </Link>
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sharp bg-canvas-dark-card hover:bg-[#2c2520] text-canvas-base text-xs font-mono uppercase tracking-widest transition-colors shadow-sm"
            >
              <span>{secondaryCtaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
