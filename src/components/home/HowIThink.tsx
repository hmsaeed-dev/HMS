import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowIThink() {
  return (
    <section className="w-full bg-[#151927] text-[#F7F5F1] py-20 sm:py-28 md:py-32 relative overflow-hidden">
      {/* Subtle ambient geometry */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 relative z-10">

        <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] text-[#F7F5F1] leading-[1.3] font-normal tracking-tight">
          “I would rather understand the whole geometry of a problem than rush to polish one isolated corner. From hardware logic gates to responsive interfaces, restraint and structure outlast momentum.”
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
