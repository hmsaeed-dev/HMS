"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Photo } from "@/data/photos";

interface CollectionItem {
  id: string;
  title: string;
  category: "Flora" | "Animals" | "Landscapes" | "Macro";
  description: string;
  coverPhoto: Photo;
}

interface CollectionSeriesProps {
  onSelectCategory: (category: string) => void;
  collections: CollectionItem[];
}

export default function CollectionSeries({
  onSelectCategory,
  collections,
}: CollectionSeriesProps) {
  return (
    <section className="w-full bg-surface-canvas py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 sm:space-y-16">
        
        {/* Section Header (Clean, bold, no micro-tags) */}
        <div className="max-w-2xl space-y-3">
          <h2 className="font-sans font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-ink-primary">
            Curated Chapters
          </h2>
          <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed font-normal">
            Thematic archives grouping botanical geometry, foothill wildlife, and atmospheric valley light.
          </p>
        </div>

        {/* ── 1. 3-CARD CLEAN ROW OF ROUNDED THUMBNAILS (NO CLUTTER) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {collections.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory(item.category)}
              className="group cursor-pointer flex flex-col space-y-4"
            >
              {/* Ultra-Rounded Rectangular Thumbnail */}
              <div className="relative aspect-[16/11] w-full rounded-[2rem] overflow-hidden border border-white/60 dark:border-white/10 bg-surface-recessed shadow-soft-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-soft-md group-hover:border-accent/30">
                <Image
                  src={item.coverPhoto.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Text Positioned Cleanly Below Frame */}
              <div className="space-y-2">
                <h3 className="font-sans font-bold text-xl text-ink-primary tracking-tight group-hover:text-accent transition-colors">
                  {item.title}
                </h3>

                <p className="font-sans text-sm text-ink-secondary leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Minimal CTA */}
                <div className="pt-1">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectCategory(item.category);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-ink-primary group-hover:text-accent transition-colors"
                  >
                    <span>Explore Chapter</span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── 2. ACCENT BLOCK: GLASSMORPHIC RED GRADIENT CONTAINER ── */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 lg:p-14 border border-accent/30 bg-gradient-to-br from-accent/12 via-canvas-paper/85 to-accent/5 shadow-soft-lg backdrop-blur-2xl overflow-hidden">
          
          {/* Subtle Ambient Red Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-to-br from-accent/25 via-accent/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h3 className="font-sans font-black text-3xl sm:text-4xl text-ink-primary tracking-tight">
                Archival Fine Art Prints &amp; Licensing
              </h3>

              <p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed max-w-2xl font-normal">
                Every frame is captured under natural ambient daylight with manual prime glass.
                Museum-grade fine art giclée prints on Hahnemühle cotton rag and high-resolution licensing
                are available on request.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-center gap-3">
              <Link
                href="/connect"
                className="min-h-[50px] px-8 py-3.5 rounded-full bg-accent hover:bg-accent-hover active:bg-accent-active text-white font-sans font-semibold text-sm transition-all shadow-soft-md shadow-accent/25 hover:shadow-accent/40 inline-flex items-center gap-2 group w-full sm:w-auto justify-center"
              >
                <span>Inquire About Prints</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <span className="text-xs font-sans text-ink-muted text-center sm:text-right">
                Direct reply within 24–48 hours
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
