import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Link2 } from "lucide-react";

export interface CaseStudyBodyProps {
  project: Project;
}

export default function CaseStudyBody({ project }: CaseStudyBodyProps) {
  const { story, sections, connectsWith } = project;

  return (
    <div className="space-y-12 pt-6">
      {/* ── 01. PRODUCT STORY LAYOUT (If structured story exists) ── */}
      {story && (
        <div className="space-y-12 pb-12 sm:pb-16">
          {/* Problem & Context */}
          <section className="space-y-3">
            <h2 className="font-sans text-xs uppercase tracking-wider text-accent font-semibold">
              01. Context &amp; Problem
            </h2>
            <p className="text-base sm:text-lg text-ink-primary font-sans leading-[1.78]">
              {story.problem}
            </p>
          </section>

          {/* The Technical Constraint */}
          <section className="space-y-3 bg-canvas-paper/70 p-6 rounded-card">
            <h2 className="font-sans text-xs uppercase tracking-wider text-primary font-semibold">
              02. The Technical Constraint
            </h2>
            <p className="text-sm sm:text-base text-ink-secondary font-sans leading-relaxed">
              {story.constraint}
            </p>
          </section>

          {/* System & Architecture */}
          <section className="space-y-3">
            <h2 className="font-sans text-xs uppercase tracking-wider text-accent font-semibold">
              03. The System &amp; Data Flow
            </h2>
            <p className="text-base sm:text-lg text-ink-primary font-sans leading-[1.78]">
              {story.system}
            </p>
          </section>

          {/* Interesting Engineering */}
          <section className="space-y-3">
            <h2 className="font-sans text-xs uppercase tracking-wider text-primary font-semibold">
              04. Interesting Engineering
            </h2>
            <p className="text-base sm:text-lg text-ink-secondary font-sans leading-[1.78]">
              {story.engineering}
            </p>
          </section>

          {/* Retrospective Reflection */}
          <section className="space-y-3">
            <h2 className="font-sans text-xs uppercase tracking-wider text-accent font-semibold">
              05. What Changed &amp; Reflection
            </h2>
            <blockquote className="p-6 font-serif italic text-lg sm:text-xl text-ink-primary bg-canvas-paper rounded-card border-l-2 border-accent">
              “{story.reflection}”
            </blockquote>
          </section>
        </div>
      )}

      {/* ── 02. DETAILED NARRATIVE SECTIONS (If additional depth exists) ── */}
      {sections && sections.length > 0 && (
        <div className="space-y-10">
          {sections.map((sec, idx) => (
            <section key={idx} className="space-y-3">
              <h3 className="font-sans font-bold text-xl sm:text-2xl text-ink-primary tracking-tight">
                {sec.heading}
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-ink-secondary leading-[1.78] font-sans">
                {sec.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
              {sec.takeaway && (
                <blockquote className="p-5 my-4 font-serif italic text-base sm:text-lg text-ink-primary bg-canvas-paper rounded-card border-l-2 border-primary">
                  “{sec.takeaway}”
                </blockquote>
              )}
            </section>
          ))}
        </div>
      )}

      {/* ── 03. CONTEXTUAL KNOWLEDGE LINK ("Why this connects") ── */}
      {connectsWith && (
        <div className="pt-10 sm:pt-14">
          <div className="p-5 sm:p-6 bg-canvas-paper rounded-card space-y-2">
            <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-accent font-semibold">
              <Link2 className="w-3.5 h-3.5" />
              <span>Contextual Connection</span>
            </div>
            <p className="text-sm text-ink-secondary font-sans leading-relaxed">
              This system connects to{" "}
              <Link href={connectsWith.href} className="text-primary hover:underline font-semibold">
                {connectsWith.label}
              </Link>
              : {connectsWith.reason}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
