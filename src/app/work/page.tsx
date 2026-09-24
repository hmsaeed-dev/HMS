import React from "react";
import type { Metadata } from "next";
import WorkHero from "@/components/work/WorkHero";
import WorkShowcase from "@/components/work/WorkShowcase";
import WorkConversionBand from "@/components/work/WorkConversionBand";

export const metadata: Metadata = {
  title: "Selected Works",
  description:
    "Curated portfolio of web applications, systems architectures, and digital products engineered by Hafiz Muhammad Saeed.",
};

export default function WorkPage() {
  return (
    <div className="w-full flex flex-col pt-16 sm:pt-20">
      <WorkHero />
      <WorkShowcase />
      <WorkConversionBand />
    </div>
  );
}
