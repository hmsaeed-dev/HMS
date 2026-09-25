import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 // Page Uncharted",
  description: "The requested page does not exist in this folio.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center max-w-[1240px] mx-auto px-5 sm:px-8 py-20 text-center pt-28">
      <div className="max-w-md space-y-6 p-8 bg-canvas-paper rounded-card shadow-sm">
        <span className="font-sans text-xs uppercase tracking-widest text-accent font-semibold">
          404 · Uncharted Route
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-light text-ink-primary">
          Page Not Located
        </h1>
        <p className="text-sm text-ink-secondary leading-relaxed font-sans">
          The requested path does not exist in this catalog, or has been relocated to 
          a more permanent sector of the system.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-pill bg-primary hover:bg-primary-hover text-primary-foreground font-sans text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Folio Index</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
