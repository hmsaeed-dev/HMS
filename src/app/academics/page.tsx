import React from "react";
import type { Metadata } from "next";
import AcademicsHero from "@/components/academics/AcademicsHero";
import AcademicsCurriculum from "@/components/academics/AcademicsCurriculum";
import AcademicsPreUniversity from "@/components/academics/AcademicsPreUniversity";
import AcademicsConversionBand from "@/components/academics/AcademicsConversionBand";

export const metadata: Metadata = {
  title: "Academic Ledger & Coursework",
  description:
    "Curated academic record, coursework artifacts, and study ledgers of Hafiz Muhammad Saeed at UET Taxila.",
};

export default function AcademicsPage() {
  return (
    <div className="w-full flex flex-col pt-16 sm:pt-20">
      <AcademicsHero />
      <AcademicsCurriculum />
      <AcademicsPreUniversity />
      <AcademicsConversionBand />
    </div>
  );
}
