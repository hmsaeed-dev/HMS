"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Mail, Compass, Aperture } from "lucide-react";

interface VisualsHeroProps {
  onExploreClick?: () => void;
}

export default function VisualsHero({ onExploreClick }: VisualsHeroProps) {
  const stats = [
    { value: "500+", label: "Clicks" },
    { value: "90mm", label: "Manual Optics" },
    { value: "Margalla Hills", label: "Field Terrain" },
  ];

  return (
		<section className="relative w-full bg-surface-canvas pt-12 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 lg:pb-32 overflow-hidden">
			{/* ── AMBIENT ARTISTIC LIGHT LEAK (NO BOXED CARD) ── */}
			<div className="absolute top-1/4 -right-32 w-[38rem] h-[38rem] bg-gradient-to-br from-accent/20 via-accent/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
			<div className="absolute -bottom-20 -left-20 w-[30rem] h-[30rem] bg-gradient-to-tr from-accent/12 via-accent/5 to-transparent rounded-full blur-[90px] pointer-events-none" />

			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
				{/* ── 2. ASYMMETRIC LAYERED EDITORIAL COMPOSITION ── */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
					{/* Left Column: Expressive Typography & Artist Statement (7 Cols) */}
					<div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10">
						{/* Expressive Display Typography (Mixing Bold Sans & Serif Italic) */}
						<div className="space-y-4">
							<h1 className="font-sans font-black text-5xl sm:text-5xl lg:text-7xl tracking-tighter text-ink-primary leading-[0.96]">
								Captured with Patience,{" "}
								<span className="block font-serif font-normal italic text-accent">
									Shared with Purpose
									<span className="font-black text-ink-primary text-8xl">
										.
									</span>
								</span>
							</h1>
						</div>

						{/* High-Contrast Tactile Pill Actions */}
						<div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
							{onExploreClick ? (
								<button
									type="button"
									onClick={onExploreClick}
									className="min-h-[50px] px-8 py-3.5 rounded-full bg-accent hover:bg-accent-hover active:bg-accent-active text-white font-sans font-semibold text-sm transition-all shadow-soft-md shadow-accent/25 hover:shadow-accent/40 inline-flex items-center gap-2.5 group cursor-pointer"
								>
									<span>Explore Monograph</span>
									<ArrowDown className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-y-1" />
								</button>
							) : (
								<a
									href="#featured-visuals"
									className="min-h-[50px] px-8 py-3.5 rounded-full bg-accent hover:bg-accent-hover active:bg-accent-active text-white font-sans font-semibold text-sm transition-all shadow-soft-md shadow-accent/25 hover:shadow-accent/40 inline-flex items-center gap-2.5 group"
								>
									<span>Explore</span>
									<ArrowDown className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-y-1" />
								</a>
							)}

							<Link
								href="/connect"
								className="min-h-[50px] px-6 py-3.5 rounded-full bg-canvas-paper/70 backdrop-blur-md hover:bg-surface-recessed text-ink-primary border border-border-hairline font-sans font-medium text-sm transition-all shadow-xs inline-flex items-center gap-2"
							>
								<Mail className="w-3.5 h-3.5 text-accent" />
								<span>Print Order</span>
							</Link>
						</div>

						{/* Minimalist Archival Stats Strip */}
						<div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
							{stats.map((stat, idx) => (
								<div key={idx}>
									<div className="font-sans font-black text-xl sm:text-2xl text-ink-primary tracking-tight">
										{stat.value}
									</div>
									<div className="font-sans text-xs text-ink-muted font-medium">
										{stat.label}
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Right Column: Layered Multi-Plate Visual Composition with Depth (5 Cols) */}
					<div className="lg:col-span-5 relative w-full flex items-center justify-center pt-6 lg:pt-0">
						<div className="relative w-full max-w-[420px] sm:max-w-[460px]">
							{/* ── PRIMARY CINEMATIC PLATE (HARNOI FIELD STUDY) ── */}
							<div className="relative aspect-[3/4] w-full rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-white/60 dark:border-white/10 shadow-[0_24px_56px_rgba(21,25,39,0.18)] bg-surface-recessed">
								<Image
									src="/assets/portraits/Harnoi.jpg"
									alt="Hafiz Muhammad Saeed exploring the mountain streams of Harnoi"
									fill
									priority
									sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 460px"
									className="object-cover object-[center_20%] contrast-[1.04]"
								/>

								{/* Subtle natural contrast gradient */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}
