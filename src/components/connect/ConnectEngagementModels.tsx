import React from "react";

export interface EngagementModel {
  title: string;
  timeline: string;
  desc: string;
}

export interface ConnectEngagementModelsProps {
  heading?: string;
  models?: EngagementModel[];
}

const DEFAULT_MODELS: EngagementModel[] = [
  {
    title: "Sprint Engagement",
    timeline: "1–3 Weeks",
    desc: "Targeted execution for focused deliverables: custom marketing pages, design system setup, or critical performance audits.",
  },
  {
    title: "Full Product Build",
    timeline: "4–8 Weeks",
    desc: "End-to-end architecture and front-end development of complete web apps or content platforms from design to deployment.",
  },
  {
    title: "Engineering Retainer",
    timeline: "Monthly",
    desc: "Dedicated ongoing technical partner for product iteration, design polish, and feature additions with guaranteed availability.",
  },
];

export default function ConnectEngagementModels({
  heading = "How we can work together",
  models = DEFAULT_MODELS,
}: ConnectEngagementModelsProps) {
  return (
    <section className="w-full bg-surface-canvas pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="font-serif text-3xl font-light text-ink-primary">
          {heading}
        </h2>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto scroll-snap-x no-scrollbar pb-2">
          {models.map((model, idx) => (
            <div
              key={idx}
              className="w-[82vw] max-w-[320px] md:w-auto shrink-0 snap-card p-6 bg-canvas-surface shadow-plate rounded-card space-y-4"
            >
              <div className="font-mono text-[10px] uppercase text-rust tracking-wider">
                {model.timeline}
              </div>
              <h3 className="font-serif text-2xl font-light text-ink-primary">
                {model.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed font-sans">
                {model.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
