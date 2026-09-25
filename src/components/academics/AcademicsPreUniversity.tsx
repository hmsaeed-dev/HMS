import React from "react";
import { academicsData } from "@/data/academics";

export interface AcademicsPreUniversityProps {
  heading?: string;
}

export default function AcademicsPreUniversity({
  heading = "Before UET",
}: AcademicsPreUniversityProps) {
  return (
    <section className="w-full bg-surface-canvas pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="font-sans font-black text-2xl sm:text-3xl tracking-tight text-ink-primary">
          {heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Timeline Cards */}
          <div className="space-y-4">
            {academicsData.preUniversity.map((item, idx) => (
              <div key={idx} className="p-5 bg-canvas-paper border border-border-hairline rounded-card space-y-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-rust font-semibold">
                    {item.year}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 font-mono uppercase bg-moss/10 text-moss rounded-pill">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-sans font-bold text-lg tracking-tight text-ink-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-secondary leading-relaxed font-sans font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Entrance Exam Scores Card */}
          <div className="p-6 sm:p-8 bg-canvas-paper border border-border-hairline rounded-card space-y-6">
            <h3 className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-ink-primary">
              Entrance Exam Scores
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {academicsData.entranceExams.map((exam, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-canvas-recessed/60 rounded-sharp shadow-sm text-center space-y-1"
                >
                  <div className="font-mono text-2xl font-light text-ink-primary">
                    {exam.score}{" "}
                    <span className="text-xs font-normal text-ink-tertiary">
                      / {exam.max}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-rust font-semibold">
                    {exam.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
