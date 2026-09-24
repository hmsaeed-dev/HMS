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
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
        {/* Category Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-3.5 py-1.5 rounded-sharp text-xs font-mono uppercase tracking-wider transition-all",
                activeCategory === cat
                  ? "bg-ink-primary text-canvas shadow-sm font-semibold"
                  : "text-ink-secondary hover:text-ink-primary bg-canvas-surface hover:bg-canvas-vellum shadow-sm"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Count & View Switcher */}
        <div className="flex items-center gap-4 self-end md:self-auto">
          <span className="text-xs text-ink-tertiary font-mono">
            Plate Index: {filteredPhotos.length} captures
          </span>

          <div className="flex items-center p-0.5 gap-0.5 bg-canvas-surface rounded-sharp shadow-sm">
            <button
              type="button"
              onClick={() => handleSetView("rhythm")}
              aria-label="Rhythm View (Masonry)"
              className={cn(
                "p-1.5 rounded-sharp transition-colors",
                viewMode === "rhythm"
                  ? "bg-ink-primary text-canvas"
                  : "text-ink-secondary hover:text-ink-primary"
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
                "p-1.5 rounded-sharp transition-colors",
                viewMode === "focus"
                  ? "bg-ink-primary text-canvas"
                  : "text-ink-secondary hover:text-ink-primary"
              )}
              title="Cinematic View"
            >
              <Maximize2 className="w-3.5 h-3.5" />
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
            className="group cursor-pointer p-2.5 bg-canvas-surface shadow-plate rounded-card hover:shadow-md transition-all duration-300"
          >
            <div
              className={`relative w-full overflow-hidden bg-canvas-recessed ${
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
              <span className="text-rust">{photo.category}</span>
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
