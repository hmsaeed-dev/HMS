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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="font-sans font-black text-2xl sm:text-3xl tracking-tight text-ink-primary">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, idx) => (
            <div
              key={idx}
              className="p-6 bg-canvas-paper border border-border-hairline rounded-card space-y-3 hover:border-primary/30 transition-all shadow-sm"
            >
              <div className="font-sans text-[10px] uppercase text-accent tracking-wider font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{model.timeline}</span>
              </div>
              <h3 className="font-sans font-bold text-xl tracking-tight text-ink-primary">
                {model.title}
              </h3>
              <p className="text-sm text-ink-secondary leading-relaxed font-sans font-normal">
                {model.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
