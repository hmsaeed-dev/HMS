import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Story",
  description:
    "The personal journey, intellectual trajectory, and underlying philosophy of Hafiz Muhammad Saeed.",
};

const timelineEvents = [
  { year: "2006", desc: "Born in Lahore" },
  { year: "~2011", desc: "Moved to Taxila" },
  { year: "2024", desc: "Completed FSC Pre-Medical" },
  { year: "2024–25", desc: "Gap year — exploration, Python, the HMS begins" },
  { year: "2025", desc: "Enrolled in CS at UET Taxila" },
  { year: "2025", desc: "Built Bayt al-Hikma (Semester 1 project)" },
  { year: "2025", desc: "Built Finance Tracker — personal finance PWA" },
  { year: "2026", desc: "Library project begins — classical study platform" },
  { year: "2026", desc: "hmsaeed.com rebuilt as presence system" },
];

export default function StoryPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-16 space-y-16">
      {/* ── ANCHOR PARAGRAPH ────────────────────────────── */}
      <section className="pt-4">
        <p className="font-serif text-2xl md:text-3xl leading-relaxed text-[#2a2a22]">
          I grew up in Lahore and moved to Taxila at around six — young enough
          that Taxila became home, old enough that Lahore remained something.
          I&apos;m twenty now, studying Computer Science at UET Taxila after a
          few years of going the other direction entirely: FSC Pre-Medical,
          then a gap year where I tried to learn everything at once and mostly
          learned how to start things. I build software. I read widely. I think
          in systems and get restless when I&apos;m not making something.
        </p>
      </section>

      {/* ── THE GAP YEAR ────────────────────────────────── */}
      <section className="space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a22]">
          The year I tried everything
        </h2>
        <div className="space-y-4 text-base md:text-lg text-[rgba(42,42,34,0.85)] leading-relaxed font-sans">
          <p>
            Between FSC and university I had a year with no structure and no
            permission required. I used it badly and well in equal measure. I
            taught myself Python from scratch. I tried crochet — genuinely, not
            ironically — and got decent at it. I attempted clay modelling, wood
            carving, origami. I played a lot of football. I made serious
            attempts at Arabic, Spanish, and Chinese, which mostly taught me how
            languages actually work rather than producing fluency in any of
            them. I read everything I could find on whatever I was curious about
            that week.
          </p>
          <p>
            What the year taught me wasn&apos;t any specific skill. It was
            something about how I learn — that I need to touch a thing to
            understand it, that I&apos;d rather try ten things seriously than
            one thing safely, and that the thread connecting all of it is a
            genuine restlessness toward understanding. That hasn&apos;t
            changed. It just has a CS degree around it now.
          </p>
        </div>
      </section>

      {/* ── PHOTO PAUSE ─────────────────────────────────── */}
      <div className="rounded-2xl overflow-hidden shadow-md my-8 aspect-[4/3] relative">
        <Image
          src="https://res.cloudinary.com/dkpehrpdm/image/upload/q_auto/f_auto/w_800/v1779627924/Saeed_68_cewriq.jpg"
          alt="Hafiz Muhammad Saeed"
          fill
          className="object-cover"
        />
      </div>

      {/* ── WHY CS ──────────────────────────────────────── */}
      <section className="space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a22]">
          Why CS
        </h2>
        <div className="space-y-4 text-base md:text-lg text-[rgba(42,42,34,0.85)] leading-relaxed font-sans">
          <p>
            I chose Pre-Medical because it seemed like the serious choice —
            medicine is real, medicine helps people, medicine has a clear path.
            What I didn&apos;t account for was that I&apos;d spend the entire
            time more interested in the logic underneath the biology than the
            biology itself. The gap year made the mismatch undeniable. I was
            spending my free time building things in code, reading about systems
            and economics and ideas, and avoiding everything that pointed toward
            a clinical future.
          </p>
          <p>
            CS wasn&apos;t a sudden revelation. It was more like admitting
            something I&apos;d been deferring. I enrolled at UET Taxila in 2025
            and found it harder and more interesting than I expected — which is
            exactly what I needed.
          </p>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────── */}
      <section className="space-y-8">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a22]">
          Timeline
        </h2>
        <div className="border-l-2 border-[#728649]/30 pl-6 space-y-6">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="relative group">
              <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#728649] border-2 border-[#f7f4ef]" />
              <div className="font-mono text-xs uppercase tracking-wider text-[#728649] font-semibold">
                {evt.year}
              </div>
              <div className="text-base text-[#2a2a22] mt-0.5">{evt.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT OCCUPIES MY MIND ───────────────────────── */}
      <section className="space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a22]">
          What occupies my mind
        </h2>
        <div className="space-y-4 text-base md:text-lg text-[rgba(42,42,34,0.85)] leading-relaxed font-sans">
          <p>
            A few things keep recurring regardless of what I&apos;m supposed to
            be studying. Iqbal is the constant — not as a national symbol, but
            as someone who took selfhood seriously as something built, not
            given. His idea of Khudi is one I keep testing against my own
            choices, more than I probably admit.
          </p>
          <p>
            Underneath that is a question I haven&apos;t resolved: whether being
            drawn to many things at once is a strategy, or just a personality
            trait wearing a strategy&apos;s clothes — and what it costs to be
            honest about which one it is.
          </p>
        </div>
      </section>

      {/* ── OUTSIDE THE WORK ────────────────────────────── */}
      <section className="space-y-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a22]">
          Outside the work
        </h2>
        <div className="space-y-4 text-base md:text-lg text-[rgba(42,42,34,0.85)] leading-relaxed font-sans">
          <p>
            I play table tennis with the intensity of someone who treats every
            game as slightly more important than it is. Chess, when I can find a
            patient opponent. Long walks — I think better moving than sitting,
            and Taxila has enough open space to walk a thought all the way
            through. I photograph things that catch my eye, which is how HMS
            Clicks began.
          </p>
          <p>
            I alternate between long quiet stretches of deep focus and periods of
            scattered high-energy curiosity. I&apos;ve stopped trying to flatten
            one into the other.
          </p>
        </div>
      </section>

      {/* ── CLOSING LINKS ───────────────────────────────── */}
      <section className="pt-8 border-t border-[rgba(42,42,34,0.08)] space-y-6">
        <p className="font-serif text-xl italic text-[#2a2a22] leading-relaxed">
          If something here resonates — a project, an idea, a question —
          I&apos;d like to hear from you. The things I&apos;m most interested in
          building exist at the edge of what I can currently do, which means
          I&apos;m almost always looking for people who know more than I do
          about something that matters.
        </p>

        <div className="flex flex-wrap gap-6 pt-2">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#2a2a22] hover:text-[#728649] transition-colors"
          >
            <span>See what I&apos;m building</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/connect"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-[#2a2a22] hover:text-[#728649] transition-colors"
          >
            <span>Say hello</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
