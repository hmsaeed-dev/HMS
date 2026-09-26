import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Compass, Code, Trophy, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "About // Trajectory & Formation",
  description:
    "The intellectual trajectory, gap-year formation, academic foundation, and current pursuits of Hafiz Muhammad Saeed.",
};

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16 sm:space-y-20 pt-20 sm:pt-28">
      {/* ── 01. OPENING: WHO I AM NOW ─────────────────────────────────── */}
      <header className="space-y-6">
        <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight text-ink-primary leading-[1.08]">
          Hafiz Muhammad Saeed
        </h1>
        <p className="font-serif italic text-xl sm:text-2xl text-ink-secondary leading-relaxed font-normal">
          A computer science student building systems, studying ideas, and observing the world carefully.
        </p>
      </header>

      {/* ── PORTRAIT & QUICK LOCATOR ──────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12 items-center py-6 sm:py-10">
        <div className="space-y-4 text-sm sm:text-base text-ink-secondary leading-[1.8] font-sans">
          <p>
            I am currently an undergraduate Computer Science student at the University of Engineering
            and Technology (UET) Taxila. Outside the compiler, I spend my hours with macro lenses in the
            Taxila valleys, on competitive chess boards, and reading how humans construct formal systems.
          </p>
          <p>
            I believe software engineering is applied philosophy: an ongoing pursuit of clarity, minimal
            surface friction, and respectful human utility.
          </p>
        </div>

        <div className="justify-self-center md:justify-self-end w-full max-w-[320px] sm:max-w-[360px]">
          <div className="p-3 bg-canvas-paper border border-border-hairline rounded-card shadow-sm group hover:border-primary/30 transition-all duration-500">
            <div className="overflow-hidden aspect-[4/5] relative bg-canvas-vellum rounded-sharp">
              <Image
                src="/assets/portraits/Saeed.jpg"
                alt="Hafiz Muhammad Saeed"
                fill
                priority
                sizes="(max-width: 640px) 320px, 360px"
                className="object-cover object-[center_18%] contrast-[1.03] group-hover:scale-[1.02] transition-all duration-700"
              />
            </div>
            <div className="pt-2.5 px-0.5 flex items-center justify-between font-sans text-[11px] tracking-wide uppercase text-ink-tertiary">
              <span className="text-ink-primary font-bold">Plate 01 · Identity</span>
              <span className="text-[10px] text-ink-muted">UET Taxila</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 02. TRAJECTORY: HOW I ARRIVED HERE ────────────────────────── */}
      <section className="space-y-6">
        <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-ink-primary">
          The Path Here
        </h2>
        <div className="space-y-4 text-base sm:text-lg text-ink-secondary leading-[1.78] font-sans">
          <p>
            I was born in Lahore in 2006 and moved to Taxila around 2011. My academic route was not
            predetermined toward computing. I originally studied Pre-Medical because it was the standard
            path of distinction.
          </p>
          <p>
            Yet during those years, I found myself continuously drawn toward the algorithmic logic
            underlying biological structures rather than rote memorization. Curiosity, rather than a
            linear career roadmap, drew me into computing: understanding how state transitions occur, how
            memory boundaries are respected, and how software systems scale with dignity.
          </p>
        </div>
      </section>

      {/* ── 03. FORMATION: UNUSUAL INFLUENCES & GAP YEAR ─────────────── */}
      <section className="space-y-6 bg-canvas-paper/60 p-6 sm:p-8 rounded-card">
        <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-accent font-semibold">
          <Compass className="w-4 h-4 text-accent" />
          <span>Formation &amp; The Gap Year</span>
        </div>
        <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-ink-primary">
          Learning by Touch
        </h2>
        <div className="space-y-4 text-base text-ink-secondary leading-[1.75] font-sans">
          <p>
            Between secondary school and university, I took a self-directed gap year without pre-arranged
            curricula. I used that season to explore disciplines with no immediate commercial agenda:
            wood carving, crochet, origami, Arabic grammar, and competitive chess.
          </p>
          <p>
            Every discipline shared fundamental principles: grain, tension, sequence, and composition.
            Studying Arabic syntax revealed how context and strict grammatical rules interlock. Carving
            wood taught me that forcing an unnatural grain causes splits—a lesson that applies directly
            to architecting database boundaries and component hierarchies.
          </p>
          <p>
            During this time, I taught myself Python and C++ from zero, wired breadboard logic circuits, and
            discovered that I learn best when I understand the whole geometry of a problem rather than
            memorizing a superficial shortcut.
          </p>
        </div>

        {/* Tactical Chess Evidence Callout */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-ink-tertiary">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-accent shrink-0" />
            <span>
              Chess (<strong className="text-ink-primary font-bold">1,980+ Rapid Games</strong>, 1,318 Peak ELO Rating)
            </span>
          </div>
          <a
            href="https://www.chess.com/member/HMS_aeed"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-accent hover:underline min-h-[44px]"
          >
            <span>HMS_aeed</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </section>

      {/* ── 04. ACADEMIC FOUNDATION: COMPACT EVIDENCE ─────────────────── */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-primary font-semibold">
          <BookOpen className="w-4 h-4 text-primary" />
          <span>Academic Foundation</span>
        </div>
        <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-ink-primary">
          Rigor &amp; Coursework
        </h2>
        <p className="text-base text-ink-secondary leading-relaxed font-sans">
          Formalizing self-taught logic into rigorous university coursework at UET Taxila:
        </p>

        {/* Narrative Academic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-5 bg-canvas-paper rounded-card space-y-2">
            <div className="font-sans text-xs text-accent font-semibold flex items-center justify-between">
              <span>Fall 2025 · Semester 1</span>
              <span className="text-primary font-bold">SGPA: 3.96</span>
            </div>
            <h3 className="font-sans font-bold text-base text-ink-primary">
              BSc Computer Science, UET Taxila
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed font-sans">
              Straight-A performance in Programming Fundamentals, Calculus &amp; Analytical Geometry, and
              Application of ICT. Focused on procedural foundations and algorithmic discipline.
            </p>
          </div>

          <div className="p-5 bg-canvas-paper rounded-card space-y-2">
            <div className="font-sans text-xs text-accent font-semibold flex items-center justify-between">
              <span>2022–2024 · Pre-University</span>
              <span className="text-primary font-bold">90% Distinction</span>
            </div>
            <h3 className="font-sans font-bold text-base text-ink-primary">
              Jinnah Education System, Taxila
            </h3>
            <p className="text-xs text-ink-secondary leading-relaxed font-sans">
              FSc Pre-Engineering/Pre-Medical completed with merit distinction. Matriculation Grade A+
              with debate team captaincy and school representation. Entrance scores: ECAT 315 / 400.
            </p>
          </div>
        </div>

        {/* Archival Milestone Plate: 2024 Pre-University Farewell */}
        <div className="p-4 sm:p-5 bg-canvas-paper/70 border border-border-hairline rounded-card flex flex-col sm:flex-row items-center gap-5 sm:gap-6 mt-4 group hover:border-primary/30 transition-all duration-300">
          <div className="w-[120px] sm:w-[130px] shrink-0">
            <div className="overflow-hidden aspect-square relative rounded-sharp bg-canvas-vellum border border-border-hairline">
              <Image
                src="/assets/portraits/12party.jpg"
                alt="Hafiz Muhammad Saeed at secondary school farewell in Taxila, 2024"
                fill
                sizes="130px"
                className="object-cover object-center grayscale contrast-[1.04] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-sans text-[11px] uppercase tracking-wider text-accent font-semibold">
              Plate 02 · Archival Record · Taxila, 2024
            </div>
            <h4 className="font-sans font-bold text-sm text-ink-primary">
              The Threshold of Formal Systems
            </h4>
            <p className="text-xs text-ink-secondary font-sans leading-relaxed">
              Photographed at the secondary school farewell concluding FSc studies. This milestone initiated the self-directed gap year of tactile experimentation, Arabic linguistics, and self-taught C++ before formal university entry at UET.
            </p>
          </div>
        </div>
      </section>

      {/* ── 05. NOW: CURRENT FOCUS & ATTENTION ────────────────────────── */}
      <section className="space-y-6 pt-6 sm:pt-10">
        <div className="font-sans text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span>Active Season</span>
        </div>
        <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-ink-primary">
          What Occupies My Attention Today
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="font-serif text-lg font-normal text-ink-primary">
              Engineering &amp; Systems
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed font-sans">
              Consolidating C++ Object-Oriented systems, memory hierarchies, and Digital Logic Design at
              UET Taxila. In web architecture, exploring offline-first state synchronization, local-first
              cryptography, and AI vision pipelines.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-lg font-normal text-ink-primary">
              Reading &amp; Ideas
            </h3>
            <p className="text-sm text-ink-secondary leading-relaxed font-sans">
              Currently reading <em className="text-ink-primary">Macroeconomics</em> by David Colander,
              studying monetary policy equilibrium and structural constraints. Continuously returning to
              Allama Iqbal's lectures on the reconstruction of philosophical thought.
            </p>
          </div>
        </div>

        {/* Contextual Connect Link */}
        <div className="pt-8 flex items-center justify-between">
          <div className="text-xs font-sans text-ink-tertiary">
            Taxila, PK · Available for select collaboration
          </div>
          <Link
            href="/connect"
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-primary hover:text-accent transition-colors min-h-[44px]"
          >
            <span>Start a conversation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </article>
  );
}
