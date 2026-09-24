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
    <section className="flex sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto scroll-snap-x no-scrollbar pb-2">
      {/* Email: Terracotta Accent */}
      <div className="w-[78vw] max-w-[280px] sm:w-auto shrink-0 snap-card relative group p-6 bg-canvas-paper shadow-plate rounded-card hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full">
        <a
          href={`mailto:${SITE_CONFIG.links.email}?subject=Project%20Inquiry%20%E2%80%94%20[Your%20Name%20or%20Company]`}
          className="space-y-4 block"
        >
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-sharp bg-rust/10 text-rust group-hover:bg-rust group-hover:text-canvas transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-tertiary group-hover:text-rust transition-colors" />
          </div>
          <div>
            <span className="font-serif text-xl font-normal text-ink-primary block group-hover:text-rust transition-colors">
              Direct Email
            </span>
            <span className="font-mono text-xs text-ink-tertiary break-all">
              {SITE_CONFIG.links.email}
            </span>
          </div>
        </a>

        <div className="pt-3 flex items-center justify-between">
          <span className="font-mono text-[10px] uppercase text-rust font-semibold">
            ● SLA &lt; 24h
          </span>
          <button
            type="button"
            onClick={handleCopyEmail}
            aria-label="Copy email"
            className="p-1 rounded-sharp text-ink-tertiary hover:text-ink-primary hover:bg-canvas-vellum text-xs transition-colors flex items-center gap-1"
            title="Copy email to clipboard"
          >
            {copied ? (
              <span className="text-[10px] font-mono text-rust flex items-center gap-1">
                <Check className="w-3 h-3" /> Copied
              </span>
            ) : (
              <span className="text-[10px] font-mono flex items-center gap-1">
                <Copy className="w-3 h-3" /> Copy
              </span>
            )}
          </button>
        </div>
      </div>

      {/* WhatsApp: Moss Accent */}
      <a
        href={SITE_CONFIG.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[78vw] max-w-[280px] sm:w-auto shrink-0 snap-card p-6 bg-canvas-paper shadow-plate rounded-card hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-sharp bg-moss/10 text-moss group-hover:bg-moss group-hover:text-canvas transition-colors">
              <MessageCircle className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-tertiary group-hover:text-moss transition-colors" />
          </div>
          <div>
            <span className="font-serif text-xl font-normal text-ink-primary block group-hover:text-moss transition-colors">
              WhatsApp
            </span>
            <span className="font-mono text-xs text-ink-tertiary">
              +92 321 9798860
            </span>
          </div>
        </div>
        <div className="pt-3 font-mono text-[10px] uppercase text-moss font-semibold">
          Instant Messaging
        </div>
      </a>

      {/* LinkedIn: Lapis Accent */}
      <a
        href={SITE_CONFIG.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[78vw] max-w-[280px] sm:w-auto shrink-0 snap-card p-6 bg-canvas-paper shadow-plate rounded-card hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-sharp bg-lapis/10 text-lapis group-hover:bg-lapis group-hover:text-canvas transition-colors">
              <Linkedin className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-tertiary group-hover:text-lapis transition-colors" />
          </div>
          <div>
            <span className="font-serif text-xl font-normal text-ink-primary block group-hover:text-lapis transition-colors">
              LinkedIn
            </span>
            <span className="font-mono text-xs text-ink-tertiary">
              in/hmsaeed
            </span>
          </div>
        </div>
        <div className="pt-3 font-mono text-[10px] uppercase text-lapis font-semibold">
          Professional Network
        </div>
      </a>

      {/* GitHub: Deep Carbon Accent */}
      <a
        href={SITE_CONFIG.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="w-[78vw] max-w-[280px] sm:w-auto shrink-0 snap-card p-6 bg-canvas-paper shadow-plate rounded-card hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="p-2.5 rounded-sharp bg-ink-primary/10 text-ink-primary group-hover:bg-ink-primary group-hover:text-canvas transition-colors">
              <Github className="w-5 h-5" />
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-tertiary group-hover:text-ink-primary transition-colors" />
          </div>
          <div>
            <span className="font-serif text-xl font-normal text-ink-primary block">
              GitHub
            </span>
            <span className="font-mono text-xs text-ink-tertiary">
              hmsaeed-dev
            </span>
          </div>
        </div>
        <div className="pt-3 font-mono text-[10px] uppercase text-ink-tertiary">
          Source Repositories
        </div>
      </a>
    </section>
  );
}
