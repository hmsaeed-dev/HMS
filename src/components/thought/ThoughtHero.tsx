import React from "react";

export default function ThoughtHero() {
  return (
    <section className="w-full bg-surface-canvas pt-16 sm:pt-20 pb-10 sm:pb-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="font-sans text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>Intellectual Notebook // Thought</span>
        </div>
        <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-ink-primary leading-[1.08]">
          Thinking &amp; Field Notes
        </h1>
        <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl font-normal">
          A small notebook of working hypotheses, architectural reflections, and observations on systems
          geometry, craftsmanship, and low-level constraints.
        </p>
      </div>
    </section>
  );
}
