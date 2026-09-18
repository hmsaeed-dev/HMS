import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";
import Container from "@/components/primitives/Container";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(42,42,34,0.08)] py-12 bg-transparent">
      <Container className="space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-bold text-[#2a2a22] hover:text-[#728649] transition-colors"
            >
              {SITE_CONFIG.name}
            </Link>
            <div className="text-sm text-[rgba(42,42,34,0.60)] mt-1">
              {SITE_CONFIG.tagline}
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={SITE_CONFIG.links.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(42,42,34,0.60)] hover:text-[#728649] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={SITE_CONFIG.links.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(42,42,34,0.60)] hover:text-[#728649] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={SITE_CONFIG.links.instagram}
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(42,42,34,0.60)] hover:text-[#728649] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-[rgba(42,42,34,0.40)] font-mono">
            © 2026 {SITE_CONFIG.name}.
          </p>
        </div>

        {/* Colophon & Typography Note */}
        <div className="pt-6 border-t border-[rgba(42,42,34,0.06)] flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.72rem] text-[rgba(42,42,34,0.45)] text-center sm:text-left font-sans">
          <p>
            Set in{" "}
            <span className="font-serif italic text-[#2a2a22]">
              Cormorant Garamond
            </span>
            , <span className="font-medium text-[#2a2a22]">DM Sans</span>, and{" "}
            <span className="font-mono text-[#2a2a22]">Fira Code</span>.
          </p>
          <p>Crafted with Next.js 15 &amp; Tailwind on organic paper tone.</p>
        </div>
      </Container>
    </footer>
  );
}
