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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="p-8 sm:p-12 bg-canvas-dark text-canvas-base border border-white/10 rounded-card space-y-5 relative overflow-hidden shadow-md">
          <div className="relative z-10 space-y-3">
            <h3 className="font-sans font-black text-2xl sm:text-3xl text-canvas-base tracking-tight break-words">
              {headline}
            </h3>
            <p className="text-sm sm:text-base text-canvas-paper/80 leading-relaxed font-sans max-w-xl font-normal">
              {description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2 relative z-10">
            <Link
              href={primaryCtaHref}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-6 py-3 rounded-pill bg-canvas text-primary hover:bg-white text-xs font-sans font-semibold transition-all shadow-sm w-full sm:w-auto"
            >
              <span>{primaryCtaText}</span>
              <span className="text-accent">→</span>
            </Link>
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-6 py-3 rounded-pill border border-white/20 hover:bg-white/10 text-canvas-base text-xs font-sans font-medium transition-colors w-full sm:w-auto"
            >
              <span>{secondaryCtaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
