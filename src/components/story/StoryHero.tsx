import React from "react";

export interface StoryHeroProps {
  title?: string;
  leadQuote?: string;
}

export default function StoryHero({
  title = "The Shape of a System",
  leadQuote = "“I grew up in Lahore and moved to Taxila at around six. I build software, read widely, think in systems, and get restless when I'm not making something that lasts.”",
}: StoryHeroProps) {
  return (
    <section className="w-full bg-surface-canvas pt-12 sm:pt-16 pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-6">
        <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-ink-primary leading-[1.08] break-words">
          {title}
        </h1>
        <p className="font-serif italic text-xl sm:text-2xl text-ink-secondary leading-relaxed font-normal pt-2 border-b border-border-hairline pb-8">
          {leadQuote}
        </p>
      </div>
    </section>
  );
}
