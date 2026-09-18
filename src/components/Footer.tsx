import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(42,42,34,0.08)] py-12 bg-transparent">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <Link
              href="/"
              className="font-serif text-xl font-bold text-[#2a2a22] hover:text-[#728649] transition-colors"
            >
              Hafiz Muhammad Saeed
            </Link>
            <div className="text-sm text-[rgba(42,42,34,0.60)] mt-1">
              Builder · Reader · Perpetual Learner
            </div>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/hmsaeed-dev"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(42,42,34,0.60)] hover:text-[#728649] transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/hmsaeed"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(42,42,34,0.60)] hover:text-[#728649] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/hms_aeed"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgba(42,42,34,0.60)] hover:text-[#728649] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          <p className="text-xs text-[rgba(42,42,34,0.40)]">
            © 2026 Hafiz Muhammad Saeed.
          </p>
        </div>
      </div>
    </footer>
  );
}
