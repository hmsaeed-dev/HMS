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
  headline = "Interested in discussing this architecture?",
  subtext = "I'm always open to technical dialogue, code reviews, and exploring new problem spaces.",
  ctaText = "Start a Conversation",
  ctaHref = "/connect",
}: CaseStudyCalloutProps) {
  return (
    <div className="pt-12 space-y-8">
      {/* Refined Dialogue Callout */}
      <div className="p-6 sm:p-8 bg-canvas-paper rounded-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden">
        <div className="space-y-1 relative z-10">
          <h3 className="font-sans font-bold text-xl sm:text-2xl text-ink-primary tracking-tight">
            {headline}
          </h3>
          <p className="text-xs sm:text-sm text-ink-secondary font-sans font-normal">
            {subtext}
          </p>
        </div>
        <Link
          href={ctaHref}
          className="px-6 py-2.5 rounded-pill bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground text-xs font-sans font-medium transition-colors shrink-0 shadow-sm"
        >
          <span>{ctaText}</span>
          <span className="ml-1.5">→</span>
        </Link>
      </div>

      {/* Footer Return Route Links */}
      <div className="flex justify-between items-center text-xs font-sans">
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
