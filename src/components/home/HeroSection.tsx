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
  headline,
  subtitle = "I collaborate with ambitious founders, creative studios, and engineering teams to craft high-performance Next.js systems, tactile digital identities, and resilient software architectures.",
  portraitSrc = "https://res.cloudinary.com/dkpehrpdm/image/upload/q_auto,f_auto,w_880/v1779627924/Saeed_68_cewriq.jpg",
  portraitAlt = "Hafiz Muhammad Saeed",
  portraitCaption = "Plate 01: Principal Identity",
  portraitLocation = "Taxila, PK",
  primaryCtaText = "Initiate a Project",
  primaryCtaHref = "/connect",
  secondaryCtaText = "Selected Works",
  secondaryCtaHref = "#selected-works",
}: HeroSectionProps) {
  return (
    <section className="w-full bg-surface-canvas text-ink-primary pt-8 sm:pt-14 md:pt-20 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 sm:gap-14 lg:gap-20 items-center">
          {/* ── MASTHEAD & ACTIONS ─────────────────────────── */}
          <div className="space-y-6 sm:space-y-8 max-w-2xl">
            <h1 className="font-serif text-[clamp(2.25rem,6.5vw,5.25rem)] font-light leading-[1.05] tracking-[-0.03em] text-ink-primary">
              {headline || (
                <>
                  Engineering bespoke web applications with{" "}
                  <span className="italic font-normal text-rust">typographical poise</span>{" "}
                  and production rigor.
                </>
              )}
            </h1>

            <p className="font-sans text-sm sm:text-base md:text-lg text-ink-secondary leading-[1.74] max-w-xl">
              {subtitle}
            </p>

            {/* Mobile Thumb-Zone Optimized Action Matrix */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2">
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sharp bg-ink-primary hover:bg-rust text-canvas font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-plate group min-h-[48px]"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sharp bg-canvas-paper hover:bg-canvas-vellum text-ink-primary font-sans text-xs uppercase tracking-widest font-medium transition-colors shadow-sm min-h-[48px]"
              >
                <span>{secondaryCtaText}</span>
                <ArrowDown className="w-3.5 h-3.5 text-rust transition-transform group-hover:translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* ── PORTRAIT MONOGRAPH MAT ─────────────────────── */}
          <div className="justify-self-center lg:justify-self-end w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[380px]">
            <div className="p-3.5 sm:p-4 bg-canvas-paper shadow-plate rounded-card group hover:shadow-md transition-shadow duration-500">
              <div className="overflow-hidden aspect-[4/5] relative bg-canvas-vellum rounded-sharp">
                <Image
                  src={portraitSrc}
                  alt={portraitAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 380px"
                  className="object-cover grayscale contrast-[1.04] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="pt-3 flex items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-wider uppercase text-ink-tertiary">
                <span className="text-ink-primary font-medium">{portraitCaption}</span>
                <span className="text-rust">{portraitLocation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
