"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LayoutGrid, Maximize2 } from "lucide-react";
import { Photo } from "@/data/photos";
import Lightbox from "./Lightbox";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  photos: Photo[];
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export default function PhotoGallery({
  photos,
  activeCategory: propActiveCategory,
  onCategoryChange,
}: PhotoGalleryProps) {
  const [internalCategory, setInternalCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"rhythm" | "focus">("rhythm");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const activeCategory = propActiveCategory ?? internalCategory;

  const handleSelectCategory = (cat: string) => {
    setInternalCategory(cat);
    onCategoryChange?.(cat);
  };

  // Restore saved view mode preference
  useEffect(() => {
    const saved = localStorage.getItem("pgView") as "rhythm" | "focus";
    if (saved === "rhythm" || saved === "focus") {
      setViewMode(saved);
    }
  }, []);

  const handleSetView = (mode: "rhythm" | "focus") => {
    setViewMode(mode);
    localStorage.setItem("pgView", mode);
  };

  const categories = [
    "All",
    ...Array.from(new Set(photos.map((p) => p.category))),
  ];

  const filteredPhotos =
    activeCategory === "All"
      ? photos
      : photos.filter((p) => p.category === activeCategory);

  const openPhoto = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Filter and View Switcher Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 pb-6">
        {/* Category Buttons with Soft Pill Styling & Primary Red Active State */}
        <div className="flex items-center gap-2.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleSelectCategory(cat)}
              className={cn(
                "min-h-[44px] px-5 py-2.5 rounded-full text-xs font-sans font-medium transition-all inline-flex items-center justify-center cursor-pointer",
                activeCategory === cat
                  ? "bg-accent text-white shadow-soft-sm shadow-accent/25 font-semibold"
                  : "bg-canvas-paper/80 backdrop-blur-md text-ink-secondary hover:text-ink-primary hover:bg-surface-recessed border border-border-hairline"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Switcher with Pill Styling */}
        <div className="flex items-center gap-4 self-stretch sm:self-auto justify-end">
          <div className="flex items-center p-1.5 gap-1 bg-canvas-paper/80 backdrop-blur-md border border-border-hairline rounded-full shadow-xs">
            <button
              type="button"
              onClick={() => handleSetView("rhythm")}
              aria-label="Rhythm View (Masonry)"
              className={cn(
                "min-h-[36px] min-w-[36px] flex items-center justify-center rounded-full transition-colors cursor-pointer",
                viewMode === "rhythm"
                  ? "bg-accent text-white shadow-xs"
                  : "text-ink-secondary hover:text-ink-primary hover:bg-surface-recessed"
              )}
              title="Masonry View"
            >
              <LayoutGrid className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => handleSetView("focus")}
              aria-label="Focus View (Cinematic)"
              className={cn(
                "min-h-[36px] min-w-[36px] flex items-center justify-center rounded-full transition-colors cursor-pointer",
                viewMode === "focus"
                  ? "bg-accent text-white shadow-xs"
                  : "text-ink-secondary hover:text-ink-primary hover:bg-surface-recessed"
              )}
              title="Cinematic View"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Grid with Soft Corners & Glassmorphism */}
      <div
        className={
          viewMode === "rhythm"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 items-start"
            : "grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        }
      >
        {filteredPhotos.map((photo, idx) => (
          <article
            key={photo.src}
            onClick={() => openPhoto(idx)}
            className="group cursor-pointer p-3 bg-canvas-paper/75 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-soft-sm rounded-[2rem] hover:border-accent/40 hover:shadow-soft-md transition-all duration-500"
          >
            <div
              className={`relative w-full overflow-hidden bg-surface-recessed rounded-[1.6rem] ${
                viewMode === "focus" ? "aspect-[4/3]" : "aspect-[3/4]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Frosted Glass Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                <h3 className="font-sans text-lg font-bold text-white tracking-tight">
                  {photo.caption}
                </h3>
                <p className="text-xs font-sans text-white/80 line-clamp-2 leading-relaxed">
                  {photo.desc}
                </p>
              </div>
            </div>

            {/* Clean Typographic Baseline (No clutter) */}
            <div className="pt-3 px-2 flex items-center justify-between text-xs font-sans">
              <span className="font-semibold text-ink-primary group-hover:text-accent transition-colors truncate max-w-[85%]">
                {photo.caption}
              </span>
              <Maximize2 className="w-3.5 h-3.5 text-ink-muted group-hover:text-accent transition-colors shrink-0" />
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <Lightbox
          photos={filteredPhotos}
          currentIndex={lightboxIndex}
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}
    </div>
  );
}
