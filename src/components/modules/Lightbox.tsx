"use client";

import React, { useEffect, useCallback, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "@/data/photos";

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const [touchStartX, setTouchStartX] = useState(0);
  const currentPhoto = photos[currentIndex];

  const handleNext = useCallback(() => {
    if (photos.length <= 1) return;
    onNavigate((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (photos.length <= 1) return;
    onNavigate((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  // Preload adjacent images in browser cache for instant zero-flicker navigation
  useEffect(() => {
    if (!isOpen || photos.length <= 1) return;
    const nextIdx = (currentIndex + 1) % photos.length;
    const prevIdx = (currentIndex - 1 + photos.length) % photos.length;
    const imgNext = new window.Image();
    imgNext.src = photos[nextIdx].src;
    const imgPrev = new window.Image();
    imgPrev.src = photos[prevIdx].src;
  }, [currentIndex, isOpen, photos]);

  // Keyboard navigation & scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentPhoto) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) handlePrev();
      else handleNext();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 select-none backdrop-blur-sm transition-opacity duration-300"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 z-20 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all focus:outline-none"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {photos.length > 1 && (
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous image"
          className="absolute left-4 md:left-8 z-20 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all focus:outline-none"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {photos.length > 1 && (
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next image"
          className="absolute right-4 md:right-8 z-20 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all focus:outline-none"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Content wrapper */}
      <div className="flex flex-col items-center max-w-[90vw] max-h-[90vh] z-10">
        <div className="relative max-h-[75vh] w-auto overflow-hidden flex items-center justify-center rounded-lg shadow-2xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentPhoto.src}
            alt={currentPhoto.caption}
            className="max-h-[75vh] max-w-[85vw] object-contain transition-transform duration-300"
          />
        </div>

        {/* Captions */}
        <div className="mt-4 text-center text-white max-w-xl">
          <h2 className="font-serif text-2xl font-bold tracking-wide">
            {currentPhoto.caption}
          </h2>
          {currentPhoto.desc && (
            <p className="text-sm text-white/70 mt-1 font-sans">
              {currentPhoto.desc}
            </p>
          )}
          <div className="text-xs text-[#8a9e60] tracking-wider uppercase mt-2 font-mono flex items-center justify-center gap-2 flex-wrap">
            <span>{currentPhoto.category}</span>
            <span className="opacity-40">•</span>
            <span>Taxila &amp; Margalla Hills</span>
            <span className="opacity-40">•</span>
            <span>
              {currentIndex + 1} / {photos.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
