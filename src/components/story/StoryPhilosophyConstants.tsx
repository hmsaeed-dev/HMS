import React from "react";

export interface StoryPhilosophyConstantsProps {
  heading?: string;
  paragraphs?: string[];
}

const DEFAULT_PARAGRAPHS = [
  "A few touchstones persist across every project. Allama Iqbal is a recurring foundation — not merely as an intellectual figure, but as someone who conceptualized selfhood (Khudi) as something actively built through discipline, intentionality, and resistance to passivity.",
  "In software, that manifests as a resistance to generic templates, lazy abstractions, and derivative design patterns. Every interface should feel deliberate, every dependency should justify its weight, and every digital space should respect the reader's cognitive clarity.",
];

export default function StoryPhilosophyConstants({
  heading = "Intellectual Constants",
  paragraphs = DEFAULT_PARAGRAPHS,
}: StoryPhilosophyConstantsProps) {
  return (
    <section className="w-full bg-surface-canvas py-6 sm:py-8">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 space-y-6">
        <h2 className="font-serif text-3xl font-light text-ink-primary">
          {heading}
        </h2>
        <div className="space-y-5 text-base sm:text-lg text-ink-secondary leading-[1.78] font-sans">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
