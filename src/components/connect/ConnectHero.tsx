import React from "react";

export interface ConnectHeroProps {
  title?: string;
  description?: string;
  bookingStatus?: string;
  slaPledge?: string;
}

export default function ConnectHero({
  title = "Initiate a Collaboration",
  description = "I am currently accepting select freelance contracts and design engineering retainers. If you value meticulous typography, zero-bloat architecture, and direct founder-level communication, let's evaluate your timeline.",
  bookingStatus = "Booking Q2 & Q3 2026",
  slaPledge = "Response pledge: Under 24h",
}: ConnectHeroProps) {
  return (
    <section className="w-full bg-surface-canvas pt-12 sm:pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl space-y-6">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-ink-primary leading-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-ink-secondary leading-relaxed font-sans">
            {description}
          </p>

          <div className="flex items-center gap-6 pt-2 font-mono text-xs text-ink-tertiary">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
              <span className="text-ink-primary font-medium">{bookingStatus}</span>
            </div>
            <span>·</span>
            <span>{slaPledge}</span>
          </div>
        </header>
      </div>
    </section>
  );
}
