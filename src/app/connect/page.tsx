import React from "react";
import type { Metadata } from "next";
import { Mail, Linkedin, MessageCircle, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Get in touch with Hafiz Muhammad Saeed for projects, collaborations, or inquiries.",
};

const channels = [
  {
    label: "Email",
    value: "hms.builds@gmail.com",
    href: "mailto:hms.builds@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/hmsaeed",
    href: "https://www.linkedin.com/in/hmsaeed",
    icon: Linkedin,
  },
  {
    label: "WhatsApp",
    value: "+92 321 9798860",
    href: "https://wa.me/923219798860?text=Hi%20Saeed%2C%20I%20saw%20your%20portfolio!",
    icon: MessageCircle,
  },
  {
    label: "GitHub",
    value: "hmsaeed-dev",
    href: "https://github.com/hmsaeed-dev",
    icon: Github,
  },
];

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

      {/* ── CHANNELS GRID ───────────────────────────────── */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {channels.map((ch) => {
          const IconComponent = ch.icon;
          return (
            <a
              key={ch.label}
              href={ch.href}
              target={ch.href.startsWith("http") ? "_blank" : undefined}
              rel={
                ch.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="p-6 rounded-3xl border border-[rgba(42,42,34,0.10)] bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-3 hover:border-[#728649] hover:shadow-md hover:-translate-y-1 transition-all group"
            >
              <div className="p-3 rounded-2xl bg-[#728649]/10 text-[#728649] group-hover:bg-[#728649] group-hover:text-white transition-colors">
                <IconComponent className="w-6 h-6" />
              </div>
              <span className="font-serif text-xl font-bold text-[#2a2a22]">
                {ch.label}
              </span>
              <span className="font-mono text-xs text-[rgba(42,42,34,0.50)]">
                {ch.value}
              </span>
            </a>
          );
        })}
      </section>

      {/* ── DIVIDER ─────────────────────────────────────── */}
      <div className="w-full h-[1px] bg-[rgba(42,42,34,0.08)]" />
    </div>
  );
}
