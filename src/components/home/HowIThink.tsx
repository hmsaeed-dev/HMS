import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowIThink() {
  return (
    <section className="relative w-full py-20 sm:py-28 md:py-32 [clip-path:inset(0)]">
      {/* ── FIXED IMAGE MASKED TO SECTION BOUNDS ────────────── */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none">
        <Image
          src="/assets/images/thread.jpg"
          alt="Thread"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_50%]"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#151927]/35" />
      </div>

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-xl pointer-events-none -mr-20 -mt-20"
      />

      {/* Foreground Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 relative z-10 text-[#F7F5F1]">
        <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.3] font-normal tracking-tight">
          “I would rather understand the whole geometry of a problem
          than rush to polish one isolated corner. From hardware logic
          gates to responsive interfaces, restraint and structure
          outlast momentum.”
        </blockquote>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 text-xs font-sans text-[#CBD2E1]">
          <span>Hafiz Muhammad Saeed</span>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#F7F5F1] hover:text-[#C94A2F] font-sans font-medium transition-colors min-h-[44px]"
          >
            <span>Myself</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C94A2F]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
