"use client";

import React, { useState } from "react";
import { Mail, Linkedin, MessageCircle, Github, Check, Copy } from "lucide-react";
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
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {/* Email with 1-click copy */}
      <div className="relative group">
        <a
          href={`mailto:${SITE_CONFIG.links.email}`}
          className="p-6 rounded-3xl border border-[rgba(42,42,34,0.10)] bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-3 hover:border-[#728649] hover:shadow-md hover:-translate-y-1 transition-all h-full block"
        >
          <div className="p-3 rounded-2xl bg-[#728649]/10 text-[#728649] group-hover:bg-[#728649] group-hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </div>
          <span className="font-serif text-xl font-bold text-[#2a2a22]">
            Email
          </span>
          <span className="font-mono text-xs text-[rgba(42,42,34,0.50)]">
            {SITE_CONFIG.links.email}
          </span>
        </a>

        <button
          type="button"
          onClick={handleCopyEmail}
          aria-label="Copy email"
          className="absolute top-4 right-4 p-1.5 rounded-lg bg-[rgba(42,42,34,0.05)] hover:bg-[#728649] hover:text-white text-[rgba(42,42,34,0.40)] transition-all text-xs flex items-center gap-1"
          title="Copy email to clipboard"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-[#728649]" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
        {copied && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#2a2a22] text-white text-[0.7rem] px-2.5 py-1 rounded-md font-mono whitespace-nowrap shadow-lg z-10">
            Copied to clipboard!
          </div>
        )}
      </div>

      {/* LinkedIn */}
      <a
        href={SITE_CONFIG.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="p-6 rounded-3xl border border-[rgba(42,42,34,0.10)] bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-3 hover:border-[#728649] hover:shadow-md hover:-translate-y-1 transition-all group"
      >
        <div className="p-3 rounded-2xl bg-[#728649]/10 text-[#728649] group-hover:bg-[#728649] group-hover:text-white transition-colors">
          <Linkedin className="w-6 h-6" />
        </div>
        <span className="font-serif text-xl font-bold text-[#2a2a22]">
          LinkedIn
        </span>
        <span className="font-mono text-xs text-[rgba(42,42,34,0.50)]">
          in/hmsaeed
        </span>
      </a>

      {/* WhatsApp */}
      <a
        href={SITE_CONFIG.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="p-6 rounded-3xl border border-[rgba(42,42,34,0.10)] bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-3 hover:border-[#728649] hover:shadow-md hover:-translate-y-1 transition-all group"
      >
        <div className="p-3 rounded-2xl bg-[#728649]/10 text-[#728649] group-hover:bg-[#728649] group-hover:text-white transition-colors">
          <MessageCircle className="w-6 h-6" />
        </div>
        <span className="font-serif text-xl font-bold text-[#2a2a22]">
          WhatsApp
        </span>
        <span className="font-mono text-xs text-[rgba(42,42,34,0.50)]">
          +92 321 9798860
        </span>
      </a>

      {/* GitHub */}
      <a
        href={SITE_CONFIG.links.github}
        target="_blank"
        rel="noopener noreferrer"
        className="p-6 rounded-3xl border border-[rgba(42,42,34,0.10)] bg-white/60 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-3 hover:border-[#728649] hover:shadow-md hover:-translate-y-1 transition-all group"
      >
        <div className="p-3 rounded-2xl bg-[#728649]/10 text-[#728649] group-hover:bg-[#728649] group-hover:text-white transition-colors">
          <Github className="w-6 h-6" />
        </div>
        <span className="font-serif text-xl font-bold text-[#2a2a22]">
          GitHub
        </span>
        <span className="font-mono text-xs text-[rgba(42,42,34,0.50)]">
          hmsaeed-dev
        </span>
      </a>
    </section>
  );
}
