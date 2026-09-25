import React from "react";

export interface TimelineEvent {
  year: string;
  desc: string;
}

export interface StoryTrajectoryTimelineProps {
  heading?: string;
  events?: TimelineEvent[];
}

const DEFAULT_EVENTS: TimelineEvent[] = [
  { year: "2006", desc: "Born in Lahore" },
  { year: "~2011", desc: "Moved to Taxila" },
  { year: "2024", desc: "Completed FSC Pre-Medical" },
  { year: "2024–25", desc: "Gap year — self-directed exploration, Python, systems foundations" },
  { year: "2025", desc: "Enrolled in Computer Science at UET Taxila" },
  { year: "2025", desc: "Built Bayt al-Hikma & Finance Tracker PWA" },
  { year: "2026", desc: "Digital Library project begins — classical Urdu literature platform" },
  { year: "2026", desc: "Operating as independent front-end architect & interface designer" },
];

export default function StoryTrajectoryTimeline({
  heading = "Milestones & Trajectory",
  events = DEFAULT_EVENTS,
}: StoryTrajectoryTimelineProps) {
  return (
    <section className="w-full bg-surface-canvas py-6 sm:py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 space-y-6">
        <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-ink-primary">
          {heading}
        </h2>

        <div className="space-y-2.5">
          {events.map((evt, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 bg-canvas-paper border border-border-hairline rounded-card flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 group hover:border-primary/30 transition-all shadow-sm"
            >
              <div className="font-sans text-xs text-accent font-semibold shrink-0 sm:w-24">
                {evt.year}
              </div>
              <div className="text-sm sm:text-base text-ink-primary font-sans leading-relaxed">
                {evt.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
