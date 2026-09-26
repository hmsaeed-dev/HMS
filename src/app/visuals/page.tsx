import React from "react";
import type { Metadata } from "next";
import { photos } from "@/data/photos";
import VisualsExperience from "@/components/photography/VisualsExperience";

export const metadata: Metadata = {
  title: "Visuals // Photographic Monograph — Hafiz Muhammad Saeed",
  description:
    "Observational macro studies, botanical geometry, and mountain stillness photographed by Hafiz Muhammad Saeed across Taxila and the Margalla ridges.",
  openGraph: {
    title: "Visuals // Photographic Monograph — Hafiz Muhammad Saeed",
    description:
      "Observational macro studies, botanical geometry, and mountain stillness photographed in Taxila and Margalla Hills.",
    url: "https://hmsaeed.com/visuals",
    siteName: "Hafiz Muhammad Saeed",
    images: [
      {
        url: "https://hmsaeed.com/assets/portraits/hero-mountain-desktop.jpg",
        width: 1200,
        height: 630,
        alt: "Hafiz Muhammad Saeed — Visuals & Photography Monograph",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function VisualsPage() {
  return (
    <main className="w-full min-h-screen bg-surface-canvas pt-16 sm:pt-20">
      <VisualsExperience photos={photos} />
    </main>
  );
}
