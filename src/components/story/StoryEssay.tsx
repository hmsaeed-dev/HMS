import React from "react";

export interface StoryEssayProps {
  paragraphs?: string[];
}

const DEFAULT_PARAGRAPHS = [
  "Before university, I had a gap year with no pre-arranged structure and no permission required. I used it badly and well in equal measure. I taught myself Python from scratch. I tried wood carving, crochet, origami, and competitive chess. I made serious attempts at Arabic grammar and linguistics, which taught me how formal systems, context, and grammars actually fit together.",
  "What that year taught me was not any single isolated technique. It revealed how I learn: I need to touch a thing to understand it. I would rather understand the entire geometry of a problem than get fast at one corner of it. That instinct is why I build systems instead of superficial features today.",
];

export default function StoryEssay({ paragraphs = DEFAULT_PARAGRAPHS }: StoryEssayProps) {
  return (
    <section className="w-full bg-surface-canvas py-6 sm:py-8">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="space-y-5 text-base sm:text-lg text-ink-secondary leading-[1.78] font-sans">
          {paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
