"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { academicsData, Semester } from "@/data/academics";
import DragonflyGlyph from "@/components/primitives/DragonflyGlyph";
import Badge from "@/components/primitives/Badge";

export default function AcademicsAccordion() {
  const [expandedSemesters, setExpandedSemesters] = useState<
    Record<string, boolean>
  >({
    "sem1-breakdown": false,
    "sem2-breakdown": false,
  });

  const toggleSemester = (id: string) => {
    setExpandedSemesters((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-8">
      {academicsData.semesters.map((sem: Semester) => {
        const isExpanded = !!expandedSemesters[sem.id];

        return (
          <article
            key={sem.id}
            className="p-6 md:p-8 bg-canvas-paper border border-border-hairline rounded-card space-y-6 hover:border-ink-primary/20 transition-all"
          >
            {/* Header / Marker */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <DragonflyGlyph className="w-6 h-6 text-rust shrink-0 opacity-80" />
                <div className="flex items-center gap-3 flex-wrap">
                  <h2 className="font-sans font-bold text-xl md:text-2xl tracking-tight text-ink-primary">
                    {sem.title}
                  </h2>
                  {sem.statusHint && (
                    <Badge variant="subtle">{sem.statusHint}</Badge>
                  )}
                </div>
              </div>

              {sem.gpaText && (
                <div className="font-mono text-xs px-3 py-1 rounded-pill bg-ink-primary text-canvas self-start sm:self-auto font-medium">
                  {sem.gpaText}
                </div>
              )}
            </div>

            {/* Narrative */}
            <div className="space-y-3 text-base text-ink-secondary leading-relaxed font-sans font-normal">
              {sem.narrative.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Collapsible Trigger */}
            <div className="pt-2">
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={sem.id}
                onClick={() => toggleSemester(sem.id)}
                className="inline-flex items-center gap-2 text-xs font-sans font-medium text-ink-primary hover:text-rust transition-colors focus:outline-none"
              >
                <span>
                  {isExpanded
                    ? "Hide course details"
                    : sem.gpaText
                    ? "Examine course grades ledger"
                    : "Review curriculum syllabus"}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Collapsible Content / Course Table */}
              {isExpanded && (
                <div id={sem.id} className="pt-6 overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse min-w-[600px]">
                    <thead>
                      <tr className="text-ink-tertiary font-mono text-[11px] uppercase tracking-wider">
                        <th className="py-2.5 px-2 font-medium">Code</th>
                        <th className="py-2.5 px-2 font-medium">Title</th>
                        <th className="py-2.5 px-2 font-medium">Type</th>
                        <th className="py-2.5 px-2 font-medium">Cr</th>
                        {sem.gpaText && (
                          <>
                            <th className="py-2.5 px-2 font-medium">Grade</th>
                            <th className="py-2.5 px-2 font-medium">GP</th>
                          </>
                        )}
                        <th className="py-2.5 px-2 font-medium">Teacher</th>
                      </tr>
                    </thead>
                    <tbody className="font-sans">
                      {sem.courses.map((c) => (
                        <tr
                          key={c.code}
                          className="hover:bg-canvas-recessed/40 transition-colors"
                        >
                          <td className="py-3 px-2 font-mono text-xs text-rust font-medium">
                            {c.code}
                          </td>
                          <td className="py-3 px-2 font-medium text-ink-primary">
                            {c.caseStudyHref ? (
                              <Link
                                href={c.caseStudyHref}
                                className="hover:text-rust underline decoration-rust/30 underline-offset-4 inline-flex items-center gap-1.5"
                              >
                                <span>{c.title}</span>
                                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-sharp bg-rust/10 text-rust">
                                  Case Study →
                                </span>
                              </Link>
                            ) : (
                              c.title
                            )}
                          </td>
                          <td className="py-3 px-2 font-mono text-xs text-ink-tertiary">
                            {c.type}
                          </td>
                          <td className="py-3 px-2 font-mono text-xs text-ink-tertiary">
                            {c.credits}
                          </td>
                          {sem.gpaText && (
                            <>
                              <td className="py-3 px-2 font-mono text-xs font-semibold text-ink-primary">
                                {c.grade || "—"}
                              </td>
                              <td className="py-3 px-2 font-mono text-xs text-ink-tertiary">
                                {c.gradePoints || "—"}
                              </td>
                            </>
                          )}
                          <td className="py-3 px-2 text-xs text-ink-secondary">
                            {c.teacher}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}
