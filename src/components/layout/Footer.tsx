import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import Container from "@/components/primitives/Container";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-16 border-t border-border-hairline mt-20 bg-canvas/40">
      <Container className="space-y-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Identity & Tagline */}
          <div className="sm:col-span-2 md:col-span-2 space-y-3">
            <Link
              href="/"
              className="font-sans font-black text-xl tracking-tight text-ink-primary hover:text-primary transition-colors inline-block"
            >
              Hafiz Muhammad Saeed<span className="text-accent">.</span>
            </Link>
            <p className="text-sm text-ink-secondary max-w-sm leading-relaxed">
              Front-end architect and interface designer. Building digital systems with
              typographical poise, editorial warmth, and architectural rigor.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-mono text-accent">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Available for select engineering &amp; design contracts</span>
            </div>
          </div>

          {/* Quick Index */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-primary font-sans uppercase tracking-wider">
              Directory
            </h4>
            <ul className="space-y-1 text-xs font-sans text-ink-secondary">
              <li>
                <Link href="/work" className="hover:text-primary transition-colors min-h-[40px] flex items-center">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="/writing" className="hover:text-primary transition-colors min-h-[40px] flex items-center">
                  Essays &amp; Notes
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-primary transition-colors min-h-[40px] flex items-center">
                  Philosophy &amp; Story
                </Link>
              </li>
              <li>
                <Link href="/photography" className="hover:text-primary transition-colors min-h-[40px] flex items-center">
                  Macro Photography
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-primary transition-colors text-ink-tertiary min-h-[40px] flex items-center">
                  Academic Ledger ↗
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Socials */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-primary font-sans uppercase tracking-wider">
              Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`mailto:${SITE_CONFIG.links.email}`}
                className="font-mono text-ink-primary hover:text-accent transition-colors min-h-[44px] flex items-center break-all"
              >
                {SITE_CONFIG.links.email}
              </a>
              <p className="text-ink-tertiary text-[11px]">
                Guaranteed reply within 24 business hours.
              </p>
              <div className="flex items-center gap-2 pt-2 text-ink-secondary">
                <a
                  href={SITE_CONFIG.links.github}
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md hover:text-accent hover:bg-accent-subtle transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.links.linkedin}
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md hover:text-accent hover:bg-accent-subtle transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={SITE_CONFIG.links.instagram}
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md hover:text-accent hover:bg-accent-subtle transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Colophon & Typography Note */}
        <div className="pt-8 border-t border-border-hairline flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ink-tertiary font-mono">
          <p>
            Set in{" "}
            <span className="font-sans font-bold text-ink-primary">Inter</span>
            , <span className="font-serif italic text-ink-primary">Instrument Serif</span>
            , and <span className="font-mono text-ink-primary">Fira Code</span>.
          </p>
          <p>© 2026 {SITE_CONFIG.name}. Built with editorial precision.</p>
        </div>
      </Container>
    </footer>
  );
}
