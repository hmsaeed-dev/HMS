"use client";

import React from "react";
import { Photo } from "@/data/photos";
import VisualsHero from "./VisualsHero";
import VerticalPillGallery from "./VerticalPillGallery";
import CollectionSeries from "./CollectionSeries";
import AmbientCarouselArchive from "./AmbientCarouselArchive";

interface VisualsExperienceProps {
  photos: Photo[];
}

export default function VisualsExperience({ photos }: VisualsExperienceProps) {
  const handleExploreClick = () => {
    const el = document.getElementById("featured-visuals");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCollectionCategory = () => {
    const el = document.getElementById("gallery-archive");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Section 2: 3-Card Vertical Cluster Data
  const featuredVerticals = [
    {
      photo: photos.find((p) => p.caption === "The Navigator") || photos[0],
    },
    {
      photo: photos.find((p) => p.caption === "Quiet Anticipation") || photos[3],
    },
    {
      photo: photos.find((p) => p.caption === "Perception") || photos[1],
    },
  ];

  // Section 3: Curated Chapters Data
  const collections = [
    {
      id: "botanical-macro",
      title: "Botanical & Micro Geometry",
      category: "Flora" as const,
      description:
        "Radial petals, pollen structures, and dew drops captured in Taxila morning light.",
      coverPhoto:
        photos.find((p) => p.caption === "Solar Symmetry") || photos[4] || photos[0],
    },
    {
      id: "fauna-wildlife",
      title: "Avian & Mountain Fauna",
      category: "Animals" as const,
      description:
        "Candid behavioral glimpses of Asian Koels, peacocks, and Margalla mountain macaques.",
      coverPhoto:
        photos.find((p) => p.caption === "Perception") || photos[1] || photos[0],
    },
    {
      id: "valley-light",
      title: "Valley Light & Cloudscapes",
      category: "Landscapes" as const,
      description:
        "Dusk gradients, mountain horizons, and skeletal arboreal lattices across Taxila valleys.",
      coverPhoto:
        photos.find((p) => p.caption === "Ethereal Dusk") || photos[12] || photos[0],
    },
  ];

  return (
    <div className="w-full flex flex-col bg-surface-canvas">
      {/* ── 1. EDITORIAL HERO SECTION ─────────────────────────────── */}
      <VisualsHero onExploreClick={handleExploreClick} />

      {/* ── 2. FEATURED VERTICAL MONOGRAPHS (SECTION 2) ───────────── */}
      <VerticalPillGallery featuredPhotos={featuredVerticals} />

      {/* ── 3. CURATED CHAPTERS & ACCENT BLOCK (SECTION 3) ────────── */}
      <CollectionSeries
        collections={collections}
        onSelectCategory={handleSelectCollectionCategory}
      />

      {/* ── 4. EXPERIENTIAL AMBIENT CAROUSEL MONOGRAPH ────────────── */}
      <section id="gallery-archive" className="w-full bg-surface-canvas py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AmbientCarouselArchive photos={photos} />
        </div>
      </section>
    </div>
  );
}
