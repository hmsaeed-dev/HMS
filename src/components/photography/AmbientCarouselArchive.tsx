"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

interface AmbientCarouselArchiveProps {
  photos: Photo[];
}

export default function AmbientCarouselArchive({
  photos,
}: AmbientCarouselArchiveProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchDeltaX, setTouchDeltaX] = useState<number>(0);

  const activePhoto = photos[currentIndex] || photos[0];

  const handleNext = useCallback(() => {
    if (photos.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const handlePrev = useCallback(() => {
    if (photos.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchDeltaX(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    setTouchDeltaX(e.touches[0].clientX - touchStartX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null) return;
    if (touchDeltaX > 40) {
      handlePrev();
    } else if (touchDeltaX < -40) {
      handleNext();
    }
    setTouchStartX(null);
    setTouchDeltaX(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Circular offset calculation for center-peek cover flow
  const getOffset = (idx: number, current: number, total: number) => {
    let diff = idx - current;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div
      className="relative w-full overflow-hidden py-8 sm:py-14 flex flex-col items-center justify-center select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── 1. WARM LUMINOUS AMBIENT BACKDROP ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center">
        <div className="relative w-full max-w-4xl h-[480px] sm:h-[580px] overflow-hidden rounded-full blur-[80px] opacity-35 dark:opacity-25 transition-all duration-700 ease-in-out">
          <Image
            key={activePhoto.src}
            src={activePhoto.src}
            alt="Warm ambient aura"
            fill
            priority
            sizes="100vw"
            className="object-cover scale-150"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-surface-canvas via-transparent to-surface-canvas pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-canvas via-transparent to-surface-canvas pointer-events-none" />
      </div>

      {/* ── 2. CAROUSEL ARCHITECTURE (PROMINENT ACTIVE HERO WITH SILENT BACKGROUND CARDS) ── */}
      <div className="relative z-10 w-full h-[500px] sm:h-[600px] md:h-[660px] lg:h-[700px] flex items-center justify-center my-6">
        {photos.map((photo, idx) => {
          const offset = getOffset(idx, currentIndex, photos.length);
          const isCenter = offset === 0;
          const isLeft = offset === -1;
          const isRight = offset === 1;
          const isVisible = Math.abs(offset) <= 1;

          if (!isVisible) return null;

          return (
            <div
              key={photo.src}
              onClick={() => {
                if (!isCenter) setCurrentIndex(idx);
              }}
              style={{
                transform: isCenter
                  ? "translateX(0) scale(1)"
                  : isLeft
                  ? "translateX(-94%) scale(0.72)"
                  : "translateX(94%) scale(0.72)",
                zIndex: isCenter ? 30 : 10,
              }}
              className={cn(
                "absolute top-0 bottom-0 w-[290px] sm:w-[380px] md:w-[440px] lg:w-[480px] aspect-[3/4] rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none",
                isCenter
                  ? "opacity-100 shadow-[0_24px_64px_rgba(21,25,39,0.28)] border border-white/50 dark:border-white/15 cursor-default filter-none"
                  : "opacity-20 hover:opacity-45 blur-[3px] hover:blur-[1px] border border-black/5 dark:border-white/5 cursor-pointer shadow-soft-sm"
              )}
            >
              {/* Card Photo */}
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                priority={isCenter}
                sizes="(max-width: 640px) 290px, (max-width: 1024px) 440px, 480px"
                className="object-cover object-center contrast-[1.02]"
              />

              {/* Inactive Dimming Veil */}
              {!isCenter && (
                <div className="absolute inset-0 bg-surface-canvas/20 pointer-events-none" />
              )}

              {/* Minimal Soft Vignette at the Bottom for Title Legibility */}
              {isCenter && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />
              )}

              {/* ── ULTRA-MINIMAL CONTENT OVERLAY (ACTIVE CARD ONLY: TITLE ONLY) ── */}
              {isCenter && (
                <div className="absolute bottom-6 left-7 right-7 z-20">
                  <h3 className="text-white font-sans font-bold text-2xl sm:text-3xl tracking-tight leading-snug drop-shadow-md truncate">
                    {photo.caption}
                  </h3>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── 3. FLOATING LIGHT AERO-GLASS DOCK ([ < ] 01 / 18 [ > ]) ── */}
      <div className="relative z-20 mt-4 flex items-center justify-center">
        <div className="rounded-full border border-border-hairline bg-canvas-paper/80 backdrop-blur-xl p-1.5 px-4 shadow-soft-md flex items-center gap-3 sm:gap-4 text-ink-primary">
          
          {/* Previous Frame Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous frame"
            className="w-9 h-9 rounded-full hover:bg-surface-recessed active:bg-surface-tint-warm flex items-center justify-center transition-colors cursor-pointer text-ink-primary"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Minimal Numerical Counter */}
          <div className="font-mono text-xs text-ink-muted font-medium tracking-widest px-2">
            {String(currentIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </div>

          {/* Next Frame Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next frame"
            className="w-9 h-9 rounded-full hover:bg-surface-recessed active:bg-surface-tint-warm flex items-center justify-center transition-colors cursor-pointer text-ink-primary"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>
      </div>
    </div>
  );
}
