"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { academicsData, Semester } from "@/data/academics";

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
    <div className="space-y-12">
      {academicsData.semesters.map((sem: Semester) => {
        const isExpanded = !!expandedSemesters[sem.id];

        return (
          <article
            key={sem.id}
            className="p-6 md:p-8 rounded-3xl border border-[rgba(42,42,34,0.10)] bg-white/60 backdrop-blur-sm space-y-6"
          >
            {/* Header / Marker */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2a2a22]">
                    {sem.title}
                  </h2>
                  {sem.statusHint && (
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#728649]/15 text-[#728649] font-mono">
                      {sem.statusHint}
                    </span>
                  )}
                </div>
              </div>

              {sem.gpaText && (
                <div className="font-mono text-sm px-3 py-1 rounded-full bg-[#728649] text-white self-start sm:self-auto font-medium">
                  {sem.gpaText}
                </div>
              )}
            </div>

            {/* Narrative */}
            <div className="space-y-3 text-base text-[rgba(42,42,34,0.80)] leading-relaxed font-sans">
              {sem.narrative.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Collapsible Trigger */}
            <div className="pt-2 border-t border-[rgba(42,42,34,0.06)]">
              <button
                type="button"
                aria-expanded={isExpanded}
                aria-controls={sem.id}
                onClick={() => toggleSemester(sem.id)}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#728649] font-medium hover:gap-3 transition-all focus:outline-none"
              >
                <span>
                  {isExpanded
                    ? "Hide course details"
                    : sem.gpaText
                    ? "See the actual grades"
                    : "See the course list"}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Collapsible Content / Course Table */}
              {isExpanded && (
                <div id={sem.id} className="pt-6 overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-[rgba(42,42,34,0.12)] text-[rgba(42,42,34,0.50)] font-mono text-xs uppercase">
                        <th className="py-3 px-2 font-medium">Code</th>
                        <th className="py-3 px-2 font-medium">Title</th>
                        <th className="py-3 px-2 font-medium">Type</th>
                        <th className="py-3 px-2 font-medium">Cr</th>
                        {sem.gpaText && (
                          <>
                            <th className="py-3 px-2 font-medium">Grade</th>
                            <th className="py-3 px-2 font-medium">GP</th>
                          </>
                        )}
                        <th className="py-3 px-2 font-medium">Teacher</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[rgba(42,42,34,0.06)]">
                      {sem.courses.map((c) => (
                        <tr
                          key={c.code}
                          className="hover:bg-black/[0.02] transition-colors"
                        >
                          <td className="py-3 px-2 font-mono text-xs text-[#728649] font-medium">
                            {c.code}
                          </td>
                          <td className="py-3 px-2 font-medium text-[#2a2a22]">
                            {c.caseStudyHref ? (
                              <Link
                                href={c.caseStudyHref}
                                className="hover:text-[#728649] underline decoration-[#728649]/30 underline-offset-4 inline-flex items-center gap-1.5"
                              >
                                <span>{c.title}</span>
                                <span className="text-[0.65rem] uppercase font-mono px-1.5 py-0.5 rounded bg-[#728649]/10 text-[#728649]">
                                  Case Study →
                                </span>
                              </Link>
                            ) : (
                              c.title
                            )}
                          </td>
                          <td className="py-3 px-2 font-mono text-xs text-[rgba(42,42,34,0.60)]">
                            {c.type}
                          </td>
                          <td className="py-3 px-2 font-mono text-xs text-[rgba(42,42,34,0.60)]">
                            {c.credits}
                          </td>
                          {sem.gpaText && (
                            <>
                              <td className="py-3 px-2 font-mono text-xs font-semibold text-[#2a2a22]">
                                {c.grade || "—"}
                              </td>
                              <td className="py-3 px-2 font-mono text-xs text-[rgba(42,42,34,0.60)]">
                                {c.gradePoints || "—"}
                              </td>
                            </>
                          )}
                          <td className="py-3 px-2 text-xs text-[rgba(42,42,34,0.70)]">
                            {c.teacher}{" "}
                            <span className="text-[rgba(42,42,34,0.40)] font-mono">
                              ({c.dept})
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="border-t-2 border-[rgba(42,42,34,0.12)] font-mono text-xs font-medium text-[#2a2a22]">
                        <td colSpan={3} className="py-3 px-2">
                          Summary
                        </td>
                        <td className="py-3 px-2">{sem.credits} Cr</td>
                        {sem.gpaText ? (
                          <>
                            <td colSpan={2} className="py-3 px-2 text-[#728649]">
                              {sem.gpaText}
                            </td>
                            <td className="py-3 px-2">Status: {sem.status}</td>
                          </>
                        ) : (
                          <td colSpan={2} className="py-3 px-2 text-[#728649]">
                            Status: {sem.status}
                          </td>
                        )}
                      </tr>
                    </tfoot>
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
