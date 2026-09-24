import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import Container from "@/components/primitives/Container";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-16 bg-canvas-surface/50 mt-20">
      <Container className="space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Identity & Tagline */}
          <div className="sm:col-span-2 md:col-span-2 space-y-3">
            <Link
              href="/"
              className="font-serif text-2xl font-light text-ink-primary hover:text-rust transition-colors"
            >
              Hafiz Muhammad Saeed<span className="text-rust">.</span>
            </Link>
            <p className="text-sm text-ink-secondary max-w-sm leading-relaxed">
              Front-end architect and interface designer. Building systems with
              typographical rigor, editorial warmth, and production longevity.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-olive">
              <span className="w-1.5 h-1.5 rounded-full bg-olive animate-pulse" />
              <span>Available for select engineering &amp; design contracts</span>
            </div>
          </div>

          {/* Quick Index */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-ink-primary font-sans">
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
                  Essays &amp; Notes
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
            <h4 className="text-xs font-semibold text-ink-primary font-sans">
              Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`mailto:${SITE_CONFIG.links.email}`}
                className="font-mono text-ink-primary hover:text-rust transition-colors block"
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
          <p>© 2026 {SITE_CONFIG.name}. Built on organic light canvas.</p>
        </div>
      </Container>
    </footer>
  );
}
