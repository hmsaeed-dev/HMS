import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";

export interface HeroSectionProps {
  headline?: React.ReactNode;
  subtitle?: string;
  portraitSrc?: string;
  portraitAlt?: string;
  portraitCaption?: string;
  portraitLocation?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function HeroSection({
  headline = "Building Digital Systems",
  subtitle = "Computer Science student at UET Taxila. Engineering offline-first applications, low-level systems in C++, and capturing the quiet geometry of the world through macro lenses.",
  portraitSrc = "https://res.cloudinary.com/dkpehrpdm/image/upload/q_auto,f_auto,w_880/v1779627924/Saeed_68_cewriq.jpg",
  portraitAlt = "Hafiz Muhammad Saeed",
  portraitCaption = "Hafiz Muhammad Saeed",
  primaryCtaText = "My Work",
  primaryCtaHref = "#selected-work",
  secondaryCtaText = "About Me",
  secondaryCtaHref = "/about",
}: HeroSectionProps) {
  return (
    <section className="w-full bg-surface-canvas text-ink-primary pt-12 sm:pt-20 md:pt-28 pb-16 sm:pb-24 lg:pb-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* ── MASTHEAD & ACTIONS ─────────────────────────── */}
          <div className="space-y-6 sm:space-y-8 max-w-2xl">
            <h1 className="font-sans font-black text-[clamp(1.85rem,6.5vw,4.75rem)] leading-[1.08] tracking-tight text-ink-primary break-words">
              {headline}
            </h1>

            <p className="font-sans text-base sm:text-lg text-ink-secondary leading-[1.75] max-w-xl font-normal">
              {subtitle}
            </p>

            {/* Direct Action Triggers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-pill bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground font-sans text-xs font-medium tracking-normal transition-all group min-h-[44px] w-full sm:w-auto shadow-sm"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-pill border border-primary-border hover:bg-primary-subtle text-primary font-sans text-xs font-medium tracking-normal transition-colors min-h-[44px] w-full sm:w-auto"
              >
                <span>{secondaryCtaText}</span>
                <ArrowDown className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* ── PORTRAIT MONOGRAPH MAT (Asymmetric Right Balance) ── */}
          <div className="justify-self-center lg:justify-self-end w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]">
            <div className="p-3 bg-canvas-paper rounded-card transition-all duration-300 group shadow-sm hover:border-primary/30">
              <div className="overflow-hidden aspect-[4/5] relative rounded-sharp">
                <Image
                  src={portraitSrc}
                  alt={portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px"
                  className="object-cover contrast-[1.03] transition-all duration-700"
                />
              </div>
              <div className="pt-2.5 px-0.5 flex items-center justify-center font-sans text-[11px] tracking-wide uppercase text-ink-tertiary">
                <span className="text-ink-primary font-bold">{portraitCaption}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
