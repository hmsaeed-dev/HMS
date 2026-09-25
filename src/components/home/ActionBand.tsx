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
    <section className="w-full bg-canvas-dark text-canvas-base py-16 sm:py-24 lg:py-32 relative overflow-hidden border-t border-border-hairline">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-canvas-base leading-[1.05] tracking-tight">
            {headline}
          </h2>

          <p className="font-sans text-base text-canvas-paper/75 leading-relaxed font-normal">
            {description}
          </p>

          {/* Direct Channels Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <a
              href={`mailto:${email}?subject=Project%20Inquiry%20%E2%80%94%20[Your%20Name%20or%20Company]`}
              className="p-5 sm:p-6 bg-canvas-dark-card border border-white/10 hover:border-accent/40 rounded-card group transition-all block min-h-[56px]"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-canvas-paper/60 mb-1 flex items-center justify-between">
                <span>Direct Line · Reply &lt; 24h</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
              <div className="font-sans font-bold text-base sm:text-lg text-canvas-base group-hover:text-accent transition-colors truncate">
                {email}
              </div>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 sm:p-6 bg-canvas-dark-card border border-white/10 hover:border-accent/40 rounded-card group transition-all block min-h-[56px]"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-canvas-paper/60 mb-1 flex items-center justify-between">
                <span>Instant Messaging</span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <div className="font-sans font-bold text-base sm:text-lg text-canvas-base group-hover:text-accent transition-colors">
                {whatsappLabel}
              </div>
            </a>
          </div>

          <div className="pt-2 text-xs sm:text-sm font-sans text-canvas-paper/60">
            Prefer a structured questionnaire?{" "}
            <Link href={intakeHref} className="text-accent hover:underline font-medium min-h-[44px] inline-flex items-center">
              Open full intake form →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
