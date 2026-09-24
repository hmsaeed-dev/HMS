import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export interface ActionBandProps {
  headline?: string;
  description?: string;
  email?: string;
  whatsappUrl?: string;
  whatsappLabel?: string;
  intakeHref?: string;
}

export default function ActionBand({
  headline = "Have a product, design system, or presence to build?",
  description = "I partner directly with founders and teams on fixed-scope deliverables or ongoing engineering retainers. Zero agency overhead, direct developer access, and meticulous quality.",
  email = SITE_CONFIG.links.email,
  whatsappUrl = SITE_CONFIG.links.whatsapp,
  whatsappLabel = "WhatsApp Direct (+92 321)",
  intakeHref = "/connect",
}: ActionBandProps) {
  return (
    <section className="w-full bg-canvas-dark text-canvas-base pattern-dark-mesh shadow-dark-plate py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle warm ember gradient accent inside dark section */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rust/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-canvas-base leading-[1.12]">
            {headline}
          </h2>

          <p className="font-sans text-sm sm:text-base md:text-lg text-canvas-paper/80 leading-relaxed">
            {description}
          </p>

          {/* Direct Channels Matrix (Stack comfortably on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <a
              href={`mailto:${email}?subject=Project%20Inquiry%20%E2%80%94%20[Your%20Name%20or%20Company]`}
              className="p-5 sm:p-6 bg-canvas-dark-card hover:bg-[#2c2520] rounded-sharp group transition-all block min-h-[48px] shadow-sm"
            >
              <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-canvas-paper/60 mb-1">
                Direct Line · Response &lt; 24h
              </div>
              <div className="font-serif text-base sm:text-lg font-bold text-canvas-base group-hover:text-rust transition-colors truncate">
                {email}
              </div>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 bg-canvas-dark-card hover:bg-[#2c2520] rounded-sharp group transition-all block min-h-[48px] shadow-sm"
            >
              <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-canvas-paper/60 mb-1">
                Instant Messaging
              </div>
              <div className="font-serif text-base sm:text-lg font-bold text-canvas-base group-hover:text-moss transition-colors">
                {whatsappLabel}
              </div>
            </a>
          </div>

          <div className="pt-2 text-xs sm:text-sm font-mono text-canvas-paper/60">
            Prefer a structured questionnaire?{" "}
            <Link href={intakeHref} className="text-rust hover:underline font-semibold">
              Open full intake form →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
