import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export interface FooterProps {
  brandName?: string;
  tagline?: string;
  availabilityNote?: string;
}

export default function Footer({
  brandName = SITE_CONFIG.name,
  tagline = "Front-end architect and interface designer. Building systems with typographical rigor, editorial warmth, and production longevity.",
  availabilityNote = "Available for select engineering & design contracts",
}: FooterProps) {
  return (
    <footer className="w-full bg-surface-canvas py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Identity & Tagline */}
          <div className="sm:col-span-2 md:col-span-2 space-y-3.5">
            <Link
              href="/"
              className="font-serif text-2xl font-light text-ink-primary hover:text-rust transition-colors tracking-tight inline-block"
            >
              {brandName}<span className="text-rust">.</span>
            </Link>
            <p className="text-sm text-ink-secondary max-w-sm leading-relaxed">
              {tagline}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-moss">
              <span className="w-1.5 h-1.5 rounded-full bg-moss animate-pulse" />
              <span>{availabilityNote}</span>
            </div>
          </div>

          {/* Quick Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-ink-primary font-sans uppercase tracking-wider">
              Directory
            </h4>
            <ul className="space-y-2 text-xs font-sans text-ink-secondary">
              <li>
                <Link href="/work" className="hover:text-ink-primary transition-colors">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-ink-primary transition-colors">
                  Philosophy &amp; Story
                </Link>
              </li>
              <li>
                <Link href="/writing" className="hover:text-ink-primary transition-colors">
                  Essays &amp; Field Notes
                </Link>
              </li>
              <li>
                <Link href="/photography" className="hover:text-ink-primary transition-colors">
                  Macro Photography
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-ink-primary transition-colors text-ink-tertiary">
                  Academic Ledger ↗
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-ink-primary font-sans uppercase tracking-wider">
              Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`mailto:${SITE_CONFIG.links.email}`}
                className="font-mono text-ink-primary hover:text-rust transition-colors block truncate"
              >
                {SITE_CONFIG.links.email}
              </a>
              <p className="text-ink-tertiary text-[11px]">
                Guaranteed reply within 24 business hours.
              </p>
              <div className="flex items-center gap-4 pt-3 text-ink-secondary">
                <a
                  href={SITE_CONFIG.links.github}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rust transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.links.linkedin}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rust transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.links.instagram}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-rust transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Colophon & Typography Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ink-tertiary font-mono">
          <p>
            Set in{" "}
            <span className="font-serif italic text-ink-primary">
              Cormorant Garamond
            </span>
            , <span className="font-sans text-ink-primary">DM Sans</span>, and{" "}
            <span className="font-mono text-ink-primary">Fira Code</span>.
          </p>
          <p>© 2026 {brandName}. Built on organic light canvas.</p>
        </div>
      </div>
    </footer>
  );
}
