"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  MessageCircle,
  Github,
  Linkedin,
  Trophy,
  Cpu,
  BookOpen,
  Camera,
  Compass,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ConnectView() {
  const [copied, setCopied] = useState(false);

  const email = SITE_CONFIG.links.email;
  const whatsappUrl =
    "https://wa.me/923219798860?text=Hi%20Saeed%2C%20I%20came%20across%20your%20work%20on%20hmsaeed.com%20and%20wanted%20to%20reach%20out.";
  const chessUrl = "https://www.chess.com/member/HMS_aeed";
  const githubUrl = SITE_CONFIG.links.github;
  const linkedinUrl = SITE_CONFIG.links.linkedin;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="w-full flex flex-col space-y-16 sm:space-y-24 pt-16 sm:pt-20">
      {/* ── 01. THE OPENING DIPTYCH SPREAD (Art-Book Monograph) ──────────── */}
      <section className="w-full bg-surface-canvas pt-8 sm:pt-14 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 sm:gap-16 items-center">
            {/* The Open Letter */}
            <div className="space-y-6 sm:space-y-8 max-w-xl">
              <div className="font-sans text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>Signal // Direct Correspondence</span>
              </div>

              <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl tracking-tight text-ink-primary leading-[1.04]">
                Write to me<span className="text-accent font-serif italic">.</span>
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-ink-secondary leading-[1.78] font-sans font-normal">
                <p>
                  I keep this digital space quiet so the conversations that happen here can be genuine.
                  I am an undergraduate Computer Science student at UET Taxila, spending my semesters
                  between low-level C++ architectures, local-first cryptography, competitive chess, and
                  macro lenses in the Margalla hills.
                </p>
                <p>
                  If something you explored here provoked a question, if you are wrestling with a system
                  architecture, or if you simply want to test your tactical geometry across a chessboard—my
                  inbox is not an automated queue. It is my personal desk.
                </p>
              </div>

              {/* Live Telemetry Data Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-sans text-ink-tertiary">
                <span className="flex items-center gap-1.5 text-ink-primary font-medium">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span>Taxila, PK (UTC+5)</span>
                </span>
                <span className="opacity-30">•</span>
                <span>33.7460° N, 72.8397° E</span>
                <span className="opacity-30">•</span>
                <span className="text-accent font-medium">Open for select dialogue</span>
              </div>
            </div>

            {/* Dual Archival Plates Diptych */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full max-w-[500px] justify-self-center lg:justify-self-end">
              {/* Plate 01: Portrait in Taxila Valley */}
              <div className="space-y-2.5">
                <div className="p-2 sm:p-2.5 bg-canvas-paper rounded-card shadow-sm group">
                  <div className="overflow-hidden aspect-[4/5] relative bg-canvas-vellum rounded-sharp">
                    <Image
                      src="/assets/images/saeed-taxila.jpg"
                      alt="Hafiz Muhammad Saeed in natural light in Taxila"
                      fill
                      priority
                      sizes="(max-width: 640px) 160px, 240px"
                      className="object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className="px-1 flex flex-col font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-ink-tertiary leading-tight">
                  <span className="text-ink-primary font-semibold">Plate 01: Identity</span>
                  <span>Taxila Valley, PK</span>
                </div>
              </div>

              {/* Plate 02: Macro Lens Observation */}
              <div className="space-y-2.5 pt-4 sm:pt-6">
                <div className="p-2 sm:p-2.5 bg-canvas-paper rounded-card shadow-sm group">
                  <div className="overflow-hidden aspect-[4/5] relative bg-canvas-vellum rounded-sharp">
                    <Image
                      src="/assets/images/dragonfly-macro.jpg"
                      alt="Macro Dragonfly optical geometry captured by Saeed"
                      fill
                      priority
                      sizes="(max-width: 640px) 160px, 240px"
                      className="object-cover contrast-[1.08] group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className="px-1 flex flex-col font-sans text-[9px] sm:text-[10px] uppercase tracking-wider text-ink-tertiary leading-tight">
                  <span className="text-ink-primary font-semibold">Plate 02: Observation</span>
                  <span className="text-accent font-medium">HMS Clicks Macro</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02. THREE CONVERSATION STUDIOS (Horizontal Narrative Chapters) ── */}
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        <div className="pb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="font-sans text-xs uppercase tracking-widest text-accent font-semibold block">
              Dialogue Channels // 02. Specialized Inquiry
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl tracking-tight text-ink-primary mt-1">
              Select Your Wavelength
            </h2>
          </div>
          <p className="text-xs font-sans text-ink-tertiary">
            Direct routing to eliminate blank-page friction
          </p>
        </div>

        {/* ── STUDIO 01: LOW-LEVEL SYSTEMS & SOFTWARE ARCHITECTURE ──────── */}
        <article className="p-6 sm:p-8 md:p-10 bg-canvas-paper border border-border-hairline rounded-card shadow-sm grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center group hover:border-primary/40 transition-all duration-300">
          <div className="space-y-2">
            <div className="overflow-hidden aspect-[16/10] relative bg-canvas-vellum rounded-sharp border border-border-hairline">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                alt="Silicon circuit traces and hardware logic"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover grayscale contrast-[1.08] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="flex items-center justify-between text-[10px] font-sans tracking-wider text-ink-tertiary px-1">
              <span>Plate 03: Silicon Architecture</span>
              <span className="text-accent font-semibold">C++17 &amp; Logic Gates</span>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-accent font-semibold">
              <Cpu className="w-3.5 h-3.5" />
              <span>Studio 01 // Systems &amp; Low-Level Rigor</span>
            </div>

            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-ink-primary tracking-tight">
              On Architectures, Memory &amp; Offline State
            </h3>

            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans font-normal">
              Wrestling with object-oriented memory layouts in C++17, offline-first state synchronization
              with IndexedDB and the Web Crypto API, or edge vision pipelines? I am always open to
              in-depth code reviews, co-building open-source libraries, or debating data flow boundaries.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${email}?subject=Technical%20Dialogue%3A%20Systems%20%26%20Architecture&body=Hi%20Saeed%2C%0A%0AI%20was%20reading%20through%20your%20systems%20work%20on%20hmsaeed.com%20and%20wanted%20to%20connect%20regarding...`}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-pill bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground font-sans text-xs font-medium tracking-normal transition-all shadow-sm"
              >
                <span>Draft Systems Dispatch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>
          </div>
        </article>

        {/* ── STUDIO 02: TACTICAL GEOMETRY (CHESS) ───────────────────────── */}
        <article className="p-6 sm:p-8 md:p-10 bg-canvas-paper border border-border-hairline rounded-card shadow-sm grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center group hover:border-primary/40 transition-all duration-300">
          <div className="space-y-2">
            <div className="overflow-hidden aspect-[16/10] relative bg-canvas-vellum rounded-sharp border border-border-hairline">
              <Image
                src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80"
                alt="Tactile wooden chess pieces in chiaroscuro lighting"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover grayscale contrast-[1.06] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="flex items-center justify-between text-[10px] font-sans tracking-wider text-ink-tertiary px-1">
              <span>Plate 04: The 64 Squares</span>
              <span className="text-accent font-semibold">1,980+ Rapid Games</span>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-accent font-semibold">
              <Trophy className="w-3.5 h-3.5" />
              <span>Studio 02 // Tactical Geometry</span>
            </div>

            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-ink-primary tracking-tight">
              Across the Sixty-Four Squares
            </h3>

            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans font-normal">
              I play competitive chess daily (Legend League on Chess.com, 1,980+ rapid games, 1,318 peak rating).
              Whether you are an active tournament club player or an amateur enthusiast, send a 10-minute
              rapid challenge. Win, draw, or loss—we analyze the critical positional transitions afterwards.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={chessUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-pill bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground font-sans text-xs font-medium tracking-normal transition-all shadow-sm"
              >
                <span>Challenge on Chess.com (`HMS_aeed`)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>

              <span className="font-sans text-xs text-ink-tertiary px-1">
                Open Daily · 10+0 or 15+10
              </span>
            </div>
          </div>
        </article>

        {/* ── STUDIO 03: CLASSICAL PHILOSOPHY, IDEAS & FORMATION ─────────── */}
        <article className="p-6 sm:p-8 md:p-10 bg-canvas-paper border border-border-hairline rounded-card shadow-sm grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center group hover:border-primary/40 transition-all duration-300">
          <div className="space-y-2">
            <div className="overflow-hidden aspect-[16/10] relative bg-canvas-vellum rounded-sharp border border-border-hairline">
              <Image
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80"
                alt="Classical open linen book and heavy typographical paper"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover grayscale contrast-[1.04] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="flex items-center justify-between text-[10px] font-sans tracking-wider text-ink-tertiary px-1">
              <span>Plate 05: Classical Texts</span>
              <span className="text-accent font-semibold">Iqbal &amp; Macroeconomics</span>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-accent font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Studio 03 // Ideas &amp; Formation</span>
            </div>

            <h3 className="font-sans font-bold text-2xl sm:text-3xl text-ink-primary tracking-tight">
              On Classical Philosophy &amp; Non-Linear Paths
            </h3>

            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans font-normal">
              From Allama Iqbal’s lectures on the reconstruction of religious thought to David Colander’s
              macroeconomic equilibrium, or navigating a self-directed gap year learning wood carving and
              Arabic syntax from zero—I welcome thoughtful letters from fellow students, researchers, and
              curious minds.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${email}?subject=Dialogue%3A%20Philosophy%2C%20Ideas%20%26%20Formation&body=Hi%20Saeed%2C%0A%0AI%20came%20across%20your%20writing%20and%20field%20notes%20on%20hmsaeed.com%20and%20wanted%20to%20share%20some%20thoughts%20on...`}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-pill bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground font-sans text-xs font-medium tracking-normal transition-all shadow-sm"
              >
                <span>Initiate Personal Dialogue</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </a>
            </div>
          </div>
        </article>
      </section>

      {/* ── 03. THE STRUCTURAL COLOR-FIELD CONSOLE (Deep Blue-Black #151927) ── */}
      <section className="w-full bg-[#151927] text-[#F7F5F1] py-16 sm:py-24 relative overflow-hidden">
        {/* Subtle ambient geometry */}
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4">
            <div className="space-y-2">
              <div className="font-sans text-xs uppercase tracking-widest text-[#C94A2F] font-semibold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C94A2F]" />
                <span>Console // 03. Direct Transmission</span>
              </div>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-[#F7F5F1] tracking-tight">
                Architectural Transmission Desk
              </h2>
            </div>
            <p className="text-xs font-sans text-[#CBD2E1]">
              Zero-latency direct routing · All channels monitored daily
            </p>
          </div>

          {/* Precision Channel Rows */}
          <div className="space-y-4">
            {/* Row 01: Electronic Mail */}
            <div className="p-6 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-card transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#C94A2F] font-semibold">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Channel 01 // Electronic Mail Direct</span>
                </div>
                <div className="font-sans font-bold text-lg sm:text-xl text-[#F7F5F1]">
                  {email}
                </div>
                <p className="text-xs text-[#CBD2E1] font-sans">
                  Guaranteed response within 24 business hours for serious inquiries.
                </p>
              </div>

              <div className="flex items-center gap-3 self-start md:self-auto">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-pill bg-white/10 hover:bg-white/20 active:bg-white/30 text-xs font-sans font-medium text-[#F7F5F1] transition-all"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C94A2F]" />
                      <span className="text-[#C94A2F] font-bold">Address Copied ✓</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${email}?subject=Correspondence%20from%20hmsaeed.com`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-pill bg-[#C94A2F] hover:bg-[#AF3E25] text-white text-xs font-sans font-semibold transition-all shadow-sm"
                >
                  <span>Open Client</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Row 02: WhatsApp Instant Signal */}
            <div className="p-6 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-card transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-[#CBD2E1] font-semibold">
                  <MessageCircle className="w-3.5 h-3.5 text-[#C94A2F]" />
                  <span>Channel 02 // WhatsApp Instant Messenger</span>
                </div>
                <div className="font-sans font-bold text-lg sm:text-xl text-[#F7F5F1]">
                  +92 321 9798860
                </div>
                <p className="text-xs text-[#CBD2E1] font-sans">
                  Fastest channel for urgent questions, quick notes, or informal introductions.
                </p>
              </div>

              <div className="self-start md:self-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] rounded-pill border border-white/20 hover:border-white/40 hover:bg-white/10 text-[#F7F5F1] text-xs font-sans font-medium transition-all"
                >
                  <span>Launch WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C94A2F]" />
                </a>
              </div>
            </div>

            {/* Row 03: Source Code & Professional Ledger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-card transition-all flex items-center justify-between group min-h-[80px]"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-sans text-[#CBD2E1]">
                    <Github className="w-3.5 h-3.5" />
                    <span>github.com/hmsaeed-dev</span>
                  </div>
                  <div className="font-sans font-bold text-sm text-[#F7F5F1] group-hover:text-[#C94A2F] transition-colors">
                    Source Repositories &amp; Commits
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-[#C94A2F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 rounded-card transition-all flex items-center justify-between group min-h-[80px]"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-sans text-[#CBD2E1]">
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>linkedin.com/in/hmsaeed</span>
                  </div>
                  <div className="font-sans font-bold text-sm text-[#F7F5F1] group-hover:text-[#C94A2F] transition-colors">
                    Professional Trajectory &amp; Network
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-[#C94A2F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Local Studio Colophon */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#CBD2E1]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C94A2F] animate-pulse" />
              <span>Taxila Studio (PKT) · Active Season: Semester 2 at UET Taxila</span>
            </div>
            <span>No tracking pixels · No automated marketing CRM</span>
          </div>
        </div>
      </section>
    </div>
  );
}
