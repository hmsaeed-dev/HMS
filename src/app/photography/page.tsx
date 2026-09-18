import React from "react";
import type { Metadata } from "next";
import { photos } from "@/data/photos";
import PhotoGallery from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "Explore macro photography, flora, and landscapes captured by Hafiz Muhammad Saeed in Margalla Hills and Taxila.",
};

export default function PhotographyPage() {
  const categoryCount = new Set(photos.map((p) => p.category)).size;

  return (
    <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 py-16 space-y-16">
      {/* ── HERO ────────────────────────────────────────── */}
      <header className="max-w-2xl space-y-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2a2a22]">
          Photography
        </h1>
        <p className="text-lg text-[rgba(42,42,34,0.60)] leading-relaxed italic">
          Captured with Patience, Shared with Purpose.
        </p>

        <div className="flex items-center gap-8 pt-4">
          <div className="space-y-0.5">
            <span className="font-serif text-3xl font-bold text-[#728649] block">
              {photos.length}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[rgba(42,42,34,0.50)]">
              Photographs
            </span>
          </div>
          <div className="space-y-0.5">
            <span className="font-serif text-3xl font-bold text-[#728649] block">
              0{categoryCount}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[rgba(42,42,34,0.50)]">
              Categories
            </span>
          </div>
        </div>
      </header>

      {/* ── INTERACTIVE PHOTO GALLERY ───────────────────── */}
      <PhotoGallery photos={photos} />
    </div>
  );
}
