import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram, ArrowUpRight } from "lucide-react";
import Container from "@/components/primitives/Container";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-20 sm:py-24 mt-24 sm:mt-32 bg-surface-recessed/60">
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
              A computer science student building systems, studying ideas, and observing the world carefully.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-sans text-accent">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Taxila, PK (UTC+5) · Open to technical dialogue &amp; collaboration</span>
            </div>
          </div>

          {/* Quick Index */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-primary font-sans uppercase tracking-wider">
              Index
            </h4>
            <ul className="space-y-1 text-xs font-sans text-ink-secondary">
              <li>
                <Link href="/work" className="hover:text-primary transition-colors min-h-[40px] flex items-center">
                  Work (Building)
                </Link>
              </li>
              <li>
                <Link href="/thought" className="hover:text-primary transition-colors min-h-[40px] flex items-center">
                  Thought (Thinking)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors min-h-[40px] flex items-center">
                  About (Connecting)
                </Link>
              </li>
              <li>
                <Link href="/visuals" className="hover:text-primary transition-colors min-h-[40px] flex items-center">
                  Visuals (Observing)
                </Link>
              </li>
              <li>
                <Link href="/connect" className="hover:text-primary transition-colors min-h-[40px] flex items-center">
                  Connect ↗
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
                className="font-sans font-medium text-ink-primary hover:text-accent transition-colors min-h-[44px] flex items-center break-all"
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
        <div className="pt-12 sm:pt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-ink-tertiary font-sans">
          <p>
            Set in{" "}
            <span className="font-sans font-bold text-ink-primary">Inter</span>
            {" "}and <span className="font-serif italic text-ink-primary">Instrument Serif</span>.
          </p>
          <p>© 2026 {SITE_CONFIG.name}. Built with editorial precision.</p>
        </div>
      </Container>
    </footer>
  );
}
