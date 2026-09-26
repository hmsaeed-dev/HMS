import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowDown } from "lucide-react";

export interface HeroSectionProps {
	headline?: React.ReactNode;
	subtitle?: string;
	portraitSrc?: string;
	portraitAlt?: string;
	primaryCtaText?: string;
	primaryCtaHref?: string;
	secondaryCtaText?: string;
	secondaryCtaHref?: string;
}

export default function HeroSection({
	headline = "Building Digital Systems",
	subtitle = "Computer Science student at UET Taxila. Engineering offline-first applications, low-level systems in C++, and capturing the quiet geometry of the world through macro lenses.",
	portraitSrc = "/assets/portraits/hero-mountain-desktop.jpg",
	portraitAlt = "Hafiz Muhammad Saeed overlooking Taxila Valley and distant Himalayan ridges",
	primaryCtaText = "My Work",
	primaryCtaHref = "#selected-work",
	secondaryCtaText = "About Me",
	secondaryCtaHref = "/about",
}: HeroSectionProps) {
	return (
		<section className="relative isolate min-h-[calc(100svh-4rem)] w-full overflow-hidden text-white">
			{/* ── FULL-BLEED HERO IMAGE ─────────────────────────── */}
			<div className="absolute inset-0 -z-20">
				<Image
					src={portraitSrc}
					alt={portraitAlt}
					fill
					priority
					sizes="100vw"
					className="
            object-cover
            object-[68%_50%]
            scale-[1.01]
            contrast-[1.03]
            saturate-[0.96]
            transition-transform
            duration-[1800ms]
            ease-out
          "
				/>
			</div>

			{/* ── CINEMATIC ATMOSPHERE ──────────────────────────── */}
			<div
				aria-hidden="true"
				className="
          absolute inset-0 -z-10
          bg-gradient-to-r
          from-black/45
          via-black/10
          to-transparent
        "
			/>

			<div
				aria-hidden="true"
				className="
          absolute inset-0 -z-10
        "
			/>

			{/* ── HERO CONTENT ─────────────────────────────────── */}
			<div className="relative mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-[1400px] items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
				<div className="w-full max-w-3xl">
					{/* ── HEADLINE ──────────────────────────────────── */}
					<h1
						className="
              max-w-4xl
              font-sans font-black
              text-[clamp(3rem,8vw,7.5rem)]
              leading-[0.91]
              tracking-[-0.045em]
              text-white
              drop-shadow-[0_3px_18px_rgba(0,0,0,0.22)]
            "
					>
						{headline}<span className="text-accent">.</span>
					</h1>

					{/* ── DESCRIPTION ───────────────────────────────── */}
					<p
						className="
              mt-7
              max-w-xl
              font-sans
              text-sm
              leading-[1.7]
              text-white/85
              sm:mt-8
              sm:text-base
              lg:text-lg
            "
					>
						{subtitle}
					</p>

					{/* ── ACTIONS ───────────────────────────────────── */}
					<div
						className="
              mt-8
              flex flex-col
              gap-3
              sm:mt-10
              sm:flex-row
              sm:items-center
            "
					>
						<a
							href={primaryCtaHref}
							className="
                group
                inline-flex min-h-[46px]
                w-full items-center justify-center
                gap-2
                rounded-pill
                bg-white/90
                px-6 py-3
                font-sans text-xs font-semibold
                tracking-wide
                text-black
                shadow-lg shadow-black/10
                transition-all duration-300
                hover:bg-accent
                hover:-translate-y-0.5
                sm:w-auto
              "
						>
							<span>{primaryCtaText}</span>

							<ArrowRight
								className="
                  h-3.5 w-3.5
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
							/>
						</a>

						<Link
							href={secondaryCtaHref}
							className="
                group
                inline-flex min-h-[46px]
                w-full items-center justify-center
                gap-2
                rounded-pill
                border border-white/35
                bg-black/10
                px-6 py-3
                font-sans text-xs font-medium
                tracking-wide
                text-white
                backdrop-blur-[3px]
                transition-all duration-300
                hover:border-white/60
                hover:bg-white/10
                sm:w-auto
              "
						>
							<span>{secondaryCtaText}</span>

							<ArrowDown
								className="
                  h-3.5 w-3.5
                  transition-transform duration-300
                  group-hover:translate-y-0.5
                "
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
