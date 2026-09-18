import React from "react";
import type { Metadata } from "next";
import ConnectChannels from "@/components/modules/ConnectChannels";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Get in touch with Hafiz Muhammad Saeed for projects, collaborations, or inquiries.",
};

export default function ConnectPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 py-16 space-y-16">
      {/* ── HERO ────────────────────────────────────────── */}
      <header className="max-w-2xl space-y-4">
        <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2a2a22]">
          Connect
        </h1>
        <p className="text-lg text-[rgba(42,42,34,0.60)] leading-relaxed">
          Let&apos;s start a conversation, collaborate on a project, or share
          ideas.
        </p>
      </header>

      {/* ── INTRO PARAGRAPH ─────────────────────────────── */}
      <section className="max-w-2xl text-base md:text-lg text-[rgba(42,42,34,0.85)] leading-relaxed">
        <p>
          I am always open to speaking with potential project partners, other
          builders, or anyone interested in systems engineering, history, and
          classical philosophy. Choose one of the direct channels below.
        </p>
      </section>

      {/* ── CHANNELS GRID WITH 1-CLICK COPY ─────────────── */}
      <ConnectChannels />

      {/* ── DIVIDER ─────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-[rgba(42,42,34,0.08)]" />
    </div>
  );
}
