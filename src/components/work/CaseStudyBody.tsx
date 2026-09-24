import React from "react";
import { ProjectSection } from "@/data/projects";

export interface CaseStudyBodyProps {
  sections: ProjectSection[];
}

export default function CaseStudyBody({ sections }: CaseStudyBodyProps) {
  return (
    <div className="space-y-12 pt-8">
      {sections.map((sec, idx) => (
        <section key={idx} className="space-y-4">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-ink-primary">
            {sec.heading}
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-ink-secondary leading-[1.78] font-sans">
            {sec.paragraphs.map((p, pIdx) => (
              <p key={pIdx}>{p}</p>
            ))}
          </div>
          {sec.takeaway && (
            <blockquote className="p-6 sm:p-8 my-6 font-serif italic text-xl sm:text-2xl text-ink-primary bg-canvas-paper rounded-card shadow-plate relative">
              <span className="text-rust font-bold mr-1.5 text-2xl sm:text-3xl">“</span>
              {sec.takeaway}”
            </blockquote>
          )}
        </section>
      ))}
    </div>
  );
}
