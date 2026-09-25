import React from "react";
import { SITE_CONFIG } from "@/lib/constants";

export interface ConnectLocationTimezoneProps {
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
  githubUrl?: string;
}

export default function ConnectLocationTimezone({
  title = "Global Asynchronous Delivery",
  description = "Based in Taxila, Pakistan (PKT · UTC+5). Standard workday covers 4+ hours of direct synchronous overlap with European and Middle Eastern timezones, plus dedicated morning handoff windows for North American teams.",
  email = SITE_CONFIG.links.email,
  phone = "+92 321 9798860",
  githubUrl = "github.com/hmsaeed-dev",
}: ConnectLocationTimezoneProps) {
  return (
    <section className="w-full bg-surface-canvas pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 bg-canvas-paper border border-border-hairline rounded-card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-3">
              <h3 className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-ink-primary">
                {title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed font-sans font-normal">
                {description}
              </p>
            </div>
            <div className="space-y-3 font-sans text-xs text-ink-secondary md:pl-8">
              <div className="flex justify-between py-1.5">
                <span className="text-ink-tertiary">Primary Email:</span>
                <span className="text-ink-primary font-medium">{email}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-ink-tertiary">Direct Chat:</span>
                <span className="text-ink-primary font-medium">{phone}</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-ink-tertiary">Code Repos:</span>
                <span className="text-ink-primary font-medium">{githubUrl}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
