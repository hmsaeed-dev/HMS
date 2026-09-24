import React from "react";

export interface StoryPhilosophyProps {
  heading?: string;
  paragraphs?: string[];
}

const DEFAULT_PARAGRAPHS = [
  "I originally chose Pre-Medical because it was the respected standard path. But throughout those years, I found myself continuously drawn to the algorithmic logic underneath biological systems rather than rote memorization. The gap year made the divergence undeniable: my nights were spent writing code, studying state management, reading architectural history, and designing interfaces.",
  "Enrolling in Computer Science at UET Taxila formalized that trajectory. I treat software engineering not as an assembly line, but as applied philosophy: an ongoing pursuit of clarity, minimal surface friction, and respectful human utility.",
];

export default function StoryPhilosophy({
  heading = "From biology to computing logic",
  paragraphs = DEFAULT_PARAGRAPHS,
}: StoryPhilosophyProps) {
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
