"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LayoutGrid, Maximize2 } from "lucide-react";
import { Photo } from "@/data/photos";
import Lightbox from "./Lightbox";
import { cn } from "@/lib/utils";

interface PhotoGalleryProps {
  photos: Photo[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"rhythm" | "focus">("rhythm");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 py-4 border-b border-border-hairline">
        {/* Category Buttons with 44px+ Touch Ergonomics */}
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "min-h-[44px] px-4 py-2 rounded-pill text-xs font-sans font-medium transition-all inline-flex items-center justify-center",
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm font-semibold"
                  : "text-ink-secondary hover:text-primary hover:bg-primary-subtle"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Count & View Switcher */}
        <div className="flex items-center gap-4 self-stretch sm:self-auto justify-between sm:justify-start">
          <span className="text-xs text-ink-tertiary font-mono">
            Plate Index: {filteredPhotos.length} captures
          </span>

          <div className="flex items-center p-1 gap-1 bg-canvas-paper border border-border-hairline rounded-lg shadow-sm">
            <button
              type="button"
              onClick={() => handleSetView("rhythm")}
              aria-label="Rhythm View (Masonry)"
              className={cn(
                "min-h-[40px] min-w-[40px] flex items-center justify-center rounded-md transition-colors",
                viewMode === "rhythm"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-ink-secondary hover:text-primary hover:bg-primary-subtle"
              )}
              title="Masonry View"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleSetView("focus")}
              aria-label="Focus View (Cinematic)"
              className={cn(
                "min-h-[40px] min-w-[40px] flex items-center justify-center rounded-md transition-colors",
                viewMode === "focus"
                  ? "bg-primary text-primary-foreground shadow-xs"
                  : "text-ink-secondary hover:text-primary hover:bg-primary-subtle"
              )}
              title="Cinematic View"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div
        className={
          viewMode === "rhythm"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start"
            : "grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        }
      >
        {filteredPhotos.map((photo, idx) => (
          <article
            key={photo.src}
            onClick={() => openPhoto(idx)}
            className="group cursor-pointer p-2.5 bg-canvas-paper border border-border-hairline shadow-sm rounded-card hover:border-primary/30 transition-all duration-300"
          >
            <div
              className={`relative w-full overflow-hidden bg-canvas-vellum rounded-sharp ${
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-canvas">
                <h3 className="font-serif text-lg font-light">
                  {photo.caption}
                </h3>
                <p className="text-[11px] font-mono text-canvas/80 line-clamp-1">
                  {photo.category} · {photo.desc}
                </p>
              </div>
            </div>

            <div className="pt-2 px-1 flex items-center justify-between font-mono text-[10px] text-ink-tertiary">
              <span className="truncate max-w-[70%]">{photo.caption}</span>
              <span className="text-accent font-medium">{photo.category}</span>
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
