import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export interface CaseStudyCalloutProps {
  headline?: string;
  subtext?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function CaseStudyCallout({
  headline = "Need a similar architecture or interface built?",
  subtext = "Let's evaluate your technical brief, timeline, and scope.",
  ctaText = "Start a Project",
  ctaHref = "/connect",
}: CaseStudyCalloutProps) {
  return (
    <div className="pt-12 space-y-8">
      {/* Inverted Nocturnal Conversion Callout */}
      <div className="p-8 sm:p-10 bg-canvas-dark text-canvas-base pattern-dark-mesh shadow-dark-plate rounded-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-1 relative z-10">
          <h3 className="font-serif text-xl sm:text-2xl font-light text-canvas-base">
            {headline}
          </h3>
          <p className="text-xs sm:text-sm text-canvas-paper/80">
            {subtext}
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

      {/* Footer Return Route Links */}
      <div className="flex justify-between items-center text-xs font-mono">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-ink-tertiary hover:text-rust transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>All Works</span>
        </Link>

        <Link href="/connect" className="text-rust hover:underline">
          Inquire for Availability →
        </Link>
      </div>
    </div>
  );
}
