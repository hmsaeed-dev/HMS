import React from "react";
import type { Metadata } from "next";
import PhotographyHero from "@/components/photography/PhotographyHero";
import PhotographyShowcase from "@/components/photography/PhotographyShowcase";

export const metadata: Metadata = {
  title: "Macro Photography & Visual Studies",
  description:
    "Explore macro captures, flora, textures, and landscapes photographed by Hafiz Muhammad Saeed in Margalla Hills and Taxila.",
};

export default function PhotographyPage() {
  return (
    <div className="w-full flex flex-col pt-16 sm:pt-20">
      <PhotographyHero />
      <PhotographyShowcase />
    </div>
  );
}
