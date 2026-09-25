"use client";

import React, { useState } from "react";
import { Mail, Linkedin, MessageCircle, Github, Check, Copy, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function ConnectChannels() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(SITE_CONFIG.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {/* Email: Terracotta Accent */}
      <div className="relative group p-6 bg-canvas-paper border border-border-hairline rounded-card hover:border-accent/40 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
        <a
          href={`mailto:${SITE_CONFIG.links.email}?subject=Project%20Inquiry%20%E2%80%94%20[Your%20Name%20or%20Company]`}
          className="space-y-4 block"
        >
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-sharp bg-accent-subtle text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-tertiary group-hover:text-accent transition-colors" />
          </div>
          <div>
            <span className="font-sans font-bold text-lg tracking-tight text-ink-primary block group-hover:text-accent transition-colors">
              Direct Email
            </span>
            <span className="font-mono text-xs text-ink-tertiary break-all">
              {SITE_CONFIG.links.email}
            </span>
          </div>
        </a>

        <div className="pt-4 flex items-center justify-between border-t border-border-hairline mt-4">
          <span className="font-mono text-[10px] uppercase text-accent font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span>Reply &lt; 24h</span>
          </span>
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
            className="min-h-[44px] px-3 py-1.5 rounded-pill border border-border-hairline text-ink-secondary hover:text-accent hover:border-accent hover:bg-accent-subtle text-xs transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-accent"
            title="Copy email to clipboard"
          >
            {copied ? (
              <span className="text-[10px] font-mono text-accent flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> Copied
              </span>
            ) : (
              <span className="text-[10px] font-mono flex items-center gap-1">
                <Copy className="w-3.5 h-3.5" /> Copy
              </span>
            )}
          </button>
        </div>
      </div>

      {/* WhatsApp: Primary Accent */}
      <a
        href={SITE_CONFIG.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="p-6 bg-canvas-paper border border-border-hairline rounded-card hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group shadow-sm min-h-[160px]"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-sharp bg-primary-subtle text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-tertiary group-hover:text-primary transition-colors" />
          </div>
          <div>
            <span className="font-sans font-bold text-lg tracking-tight text-ink-primary block group-hover:text-primary transition-colors">
              WhatsApp
            </span>
            <span className="font-mono text-xs text-ink-tertiary">
              +92 321 9798860
            </span>
          </div>
        </div>
        <div className="pt-4 font-mono text-[10px] uppercase text-primary font-semibold flex items-center gap-1.5 border-t border-border-hairline mt-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>Instant Messaging</span>
        </div>
      </a>

      {/* LinkedIn: Primary Accent */}
      <a
        href={SITE_CONFIG.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-6 bg-canvas-paper border border-border-hairline rounded-card hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group shadow-sm min-h-[160px]"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-sharp bg-primary-subtle text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-tertiary group-hover:text-primary transition-colors" />
          </div>
          <div>
            <span className="font-sans font-bold text-lg tracking-tight text-ink-primary block group-hover:text-primary transition-colors">
              LinkedIn
            </span>
            <span className="font-mono text-xs text-ink-tertiary">
              in/hmsaeed
            </span>
          </div>
        </div>
        <div className="pt-4 font-mono text-[10px] uppercase text-primary font-semibold flex items-center gap-1.5 border-t border-border-hairline mt-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span>Professional Network</span>
        </div>
      </a>

      {/* GitHub: Primary Accent */}
      <a
        href={SITE_CONFIG.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-6 bg-canvas-paper border border-border-hairline rounded-card hover:border-primary/40 transition-all duration-300 flex flex-col justify-between group shadow-sm min-h-[160px]"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-sharp bg-primary-subtle text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <Github className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-tertiary group-hover:text-primary transition-colors" />
          </div>
          <div>
            <span className="font-sans font-bold text-lg tracking-tight text-ink-primary block group-hover:text-primary transition-colors">
              GitHub
            </span>
            <span className="font-mono text-xs text-ink-tertiary">
              hmsaeed-dev
            </span>
          </div>
        </div>
        <div className="pt-4 font-mono text-[10px] uppercase text-ink-tertiary flex items-center gap-1.5 border-t border-border-hairline mt-4">
          <span className="w-1.5 h-1.5 rounded-full bg-ink-tertiary" />
          <span>Source Repositories</span>
        </div>
      </a>
    </section>
  );
}
