import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center max-w-[1200px] mx-auto px-5 sm:px-8 py-16 text-center">
      <div className="max-w-md space-y-6">
        <span className="font-mono text-xs uppercase tracking-widest text-[#728649] font-bold">
          404 · Not Found
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#2a2a22]">
          Under Construction
        </h1>
        <p className="text-base text-[rgba(42,42,34,0.70)] leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or is currently
          being crafted. Check back when the season changes.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-[#728649] text-white text-xs uppercase tracking-wider font-medium hover:bg-[#8a9e60] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
