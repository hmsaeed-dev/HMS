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
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4 border-b border-[rgba(42,42,34,0.08)]">
        {/* Category Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all",
                activeCategory === cat
                  ? "bg-[#728649] text-white shadow-sm"
                  : "border border-[rgba(42,42,34,0.15)] text-[rgba(42,42,34,0.60)] hover:border-[#728649] hover:text-[#728649]"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Count & View Switcher */}
        <div className="flex items-center gap-4 self-end md:self-auto">
          <span className="text-xs text-[rgba(42,42,34,0.50)] font-mono">
            Showing {filteredPhotos.length} photos
          </span>

          <div className="flex items-center border border-[rgba(42,42,34,0.15)] rounded-xl p-1 gap-1">
            <button
              type="button"
              onClick={() => handleSetView("rhythm")}
              aria-label="Rhythm View (Masonry)"
              className={cn(
                "p-1.5 rounded-lg transition-colors",
                viewMode === "rhythm"
                  ? "bg-[#728649] text-white"
                  : "text-[rgba(42,42,34,0.60)] hover:text-[#2a2a22]"
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
                "p-1.5 rounded-lg transition-colors",
                viewMode === "focus"
                  ? "bg-[#728649] text-white"
                  : "text-[rgba(42,42,34,0.60)] hover:text-[#2a2a22]"
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
            : "grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
        }
      >
        {filteredPhotos.map((photo, idx) => (
          <article
            key={photo.src}
            onClick={() => openPhoto(idx)}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-[rgba(42,42,34,0.04)] relative shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div
              className={`relative w-full overflow-hidden ${
                viewMode === "focus" ? "aspect-[4/3]" : "aspect-[3/4]"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <h3 className="font-serif text-lg font-bold">
                  {photo.caption}
                </h3>
                <p className="text-xs text-white/80 line-clamp-1 font-sans">
                  {photo.desc}
                </p>
                <span className="text-[0.65rem] font-mono uppercase tracking-widest text-[#8a9e60] mt-1">
                  {photo.category}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Lightbox Component */}
      <Lightbox
        photos={filteredPhotos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </div>
  );
}
