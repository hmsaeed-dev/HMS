import React from "react";
import Link from "next/link";
import Image from "next/image";

const directoryItems = [
  {
    num: "01",
    title: "NOW",
    desc: "What I'm actually working on this season.",
    href: "/now",
  },
  {
    num: "02",
    title: "Builds",
    desc: "Collection of things I have built, broken and learned from.",
    href: "/work",
  },
  {
    num: "03",
    title: "Writing",
    desc: "Essays, notes, and open-source study guides.",
    href: "/writing",
  },
  {
    num: "04",
    title: "Academics",
    desc: "Course notes, ledgers, and semester artifacts.",
    href: "/academics",
  },
  {
    num: "05",
    title: "Photography",
    desc: "HMS Clicks — what the macro lens finds.",
    href: "/photography",
  },
];

const testimonials = [
  {
    name: "Ali Raza",
    role: "Course Instructor, UET",
    quote:
      "He was one of the few students who'd come to office hours with a working prototype instead of just questions. The data structures project he built went past the assignment brief by a mile.",
  },
  {
    name: "Zara Naveed",
    role: "Collaborator, Hackathon team",
    quote:
      "We were stuck on the routing logic at 2am and he just quietly rewrote the whole module while the rest of us argued. Calm under pressure, and the code was cleaner than what we started with.",
  },
  {
    name: "Bilal Chaudhry",
    role: "Senior peer",
    quote:
      "Asked him to review my thesis code and he came back with actual architecture suggestions, not just style nitpicks. Rare for someone two years behind me.",
  },
  {
    name: "Areeba Khan",
    role: "Client",
    quote:
      "Booked him for an event shoot expecting standard coverage — got a set that actually told a story. He noticed moments most photographers would've missed.",
  },
  {
    name: "Talha Mirza",
    role: "Study group partner",
    quote:
      "Explains proofs better than half our TAs. He'd break induction arguments down until they actually clicked, not just recite the textbook steps.",
  },
  {
    name: "Sadia Yousuf",
    role: "Project teammate",
    quote:
      "Handles the unglamorous parts of a project — docs, edge cases, testing — as seriously as the fun parts. That's why his stuff doesn't break in demos.",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-20 pb-16">
      {/* ── HERO SECTION ────────────────────────────────── */}
      <section className="min-h-[80vh] flex items-center max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center w-full">
          <div className="text-center md:text-left">
            <h1 className="font-serif text-[clamp(4.2rem,9vw,7.8rem)] font-black leading-[0.95] text-[#2a2a22] mb-4">
              I&apos;m Saeed.
            </h1>
            <p className="text-lg md:text-xl text-[rgba(42,42,34,0.60)] max-w-md mx-auto md:mx-0 leading-relaxed">
              Builder, Reader and Perpetual Learner
            </p>
          </div>

          <div className="relative justify-self-center md:justify-self-end w-full max-w-[360px] md:max-w-[420px]">
            <div className="overflow-hidden aspect-[3/4] relative">
              <Image
                src="https://res.cloudinary.com/dkpehrpdm/image/upload/q_auto,f_auto,w_880/v1779627924/Saeed_68_cewriq.jpg"
                alt="Hafiz Muhammad Saeed"
                fill
                priority
                sizes="(min-width: 901px) 440px, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECTORY INDEX ─────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="divide-y divide-[rgba(42,42,34,0.08)]">
          {directoryItems.map((item) => (
            <div
              key={item.num}
              className="grid grid-cols-[48px_1fr] md:grid-cols-[64px_1fr] items-center gap-4 py-6 group hover:border-[#728649] transition-colors"
            >
              <span className="font-serif text-2xl tracking-widest text-[#728649] uppercase">
                {item.num}
              </span>
              <div>
                <Link
                  href={item.href}
                  className="font-serif text-2xl md:text-3xl font-bold tracking-wider uppercase inline-block mb-1 text-[#2a2a22] group-hover:text-[#728649] transition-colors"
                >
                  {item.title}
                </Link>
                <p className="text-sm text-[rgba(42,42,34,0.60)]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FIELD NOTE ──────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 text-center py-8">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <span className="w-8 h-[1.5px] bg-[#728649] rounded-full mb-6" />
          <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#2a2a22] leading-relaxed">
            Before UET, I took a year to learn things I had no plan for.
            Crochet. Wood working. Enough Arabic to understand the context.
            Chess, from nothing. None of it was strategic. I think that year is
            the reason I build systems instead of features now — I&apos;d rather
            understand the whole shape of a thing than get fast at one corner of
            it.
          </p>
        </div>
      </section>

      {/* ── PHOTOGRAPHY INTERLUDE ───────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="flex flex-col items-center">
          <Link
            href="/photography"
            className="w-full max-w-4xl aspect-[16/10] relative rounded-2xl overflow-hidden block group shadow-lg"
          >
            <Image
              src="https://res.cloudinary.com/dkpehrpdm/image/upload/q_auto/f_auto/v1779626938/Fruitfly-1_v1gfga.jpg"
              alt="Macro photograph"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
          <p className="mt-4 text-sm text-[#728649] tracking-wider text-center">
            most of what&apos;s interesting is easy to walk past.
          </p>
        </div>
      </section>

      {/* ── TESTIMONIALS MARQUEE ────────────────────────── */}
      <section className="py-12 border-t border-[rgba(42,42,34,0.08)] overflow-hidden">
        <div className="max-w-xl mx-auto text-center mb-8 px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a22] mb-2">
            In their Own Words
          </h2>
          <p className="text-[rgba(42,42,34,0.60)] text-sm md:text-base">
            A little of what people noticed.
          </p>
        </div>

        <div className="testimonial-marquee" tabIndex={0}>
          <div className="testimonial-track">
            {testimonials.concat(testimonials).map((t, idx) => (
              <article
                key={idx}
                className={`w-[340px] md:w-[380px] p-6 rounded-2xl border border-[rgba(42,42,34,0.12)] bg-gradient-to-br from-white to-[#728649]/10 shadow-sm flex flex-col justify-between flex-shrink-0 transition-all duration-300 hover:rotate-0 hover:-translate-y-1 hover:shadow-md ${
                  idx % 2 === 0 ? "-rotate-1" : "rotate-1"
                }`}
              >
                <p className="font-serif text-lg leading-relaxed text-[#2a2a22] mb-4">
                  “{t.quote}”
                </p>
                <div className="text-xs uppercase tracking-wider text-[rgba(42,42,34,0.60)] font-mono">
                  {t.name} · {t.role}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CONNECT ─────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 text-center py-6">
        <div className="w-full h-[1px] bg-[rgba(42,42,34,0.10)] mb-8" />
        <p className="font-serif text-xl text-[#2a2a22] leading-relaxed mb-4">
          Nothing here is finished on purpose.
          <br />
          Check back when the season changes.
        </p>
        <Link
          href="/connect"
          className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#2a2a22] hover:text-[#728649] transition-colors"
        >
          <span>Say hello</span>
          <span>→</span>
        </Link>
        <div className="w-full h-[1px] bg-[rgba(42,42,34,0.10)] mt-8" />
      </section>
    </div>
  );
}
