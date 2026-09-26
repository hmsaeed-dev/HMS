"use client";

import React from "react";
import Image from "next/image";
import { Photo } from "@/data/photos";

interface VerticalPillGalleryProps {
	onPhotoClick?: (photo: Photo) => void;
	featuredPhotos: {
		photo: Photo;
	}[];
}

export default function VerticalPillGallery({
	onPhotoClick,
	featuredPhotos,
}: VerticalPillGalleryProps) {
	return (
		<section
			id="featured-visuals"
			className="w-full bg-surface-canvas py-16 sm:py-24"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Asymmetric 2-Column Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
					{/* ── LEFT COLUMN: EDITORIAL STATEMENT (4 COLS) ── */}
					<div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
						<h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink-primary leading-[1.08]">
							Observational Stillness
						</h2>
						<p className="font-sans text-base sm:text-lg text-ink-secondary leading-relaxed font-normal">
							Macro observation directly informs how I build
							software: both disciplines require patience,
							structural tolerances, and noticing what exists
							between the obvious lines.
						</p>
					</div>

					{/* ── RIGHT COLUMN: 3-CARD CLUSTER OF VERTICAL PILL CARDS (8 COLS) ── */}
					<div className="lg:col-span-8">
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
							{featuredPhotos.map((item, idx) => {
								const { photo } = item;
								return (
									<article
										key={photo.caption + idx}
										onClick={() => onPhotoClick(photo)}
										className="group relative flex flex-col justify-end overflow-hidden rounded-[2.5rem] border border-white/20 bg-slate-950 shadow-soft-lg cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-accent/40 hover:shadow-[0_16px_40px_rgba(201,74,47,0.16)] aspect-[3/4] min-h-[440px] sm:min-h-[480px]"
									>
										{/* Full-Bleed Photograph */}
										<div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-950">
											<Image
												src={photo.src}
												alt={photo.caption}
												fill
												sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
												className="object-cover object-center"
											/>
											{/* Depth gradient for text legibility and subtle red reflection */}
											<div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
											<div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
										</div>

										{/* ── CARD INTERNAL HIERARCHY: FROSTED GLASS OVERLAY AT BOTTOM ── */}
										<div className="relative z-10 w-full backdrop-blur-2xl bg-black/40 border-t border-white/15 p-6 rounded-b-[2.5rem] space-y-1.5 text-white">
											<h3 className="font-sans font-bold text-xl text-white tracking-tight leading-snug">
												{photo.caption}
											</h3>
											<p className="font-sans text-xs text-white/80 line-clamp-2 leading-relaxed font-normal">
												{photo.desc}
											</p>
										</div>
									</article>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
