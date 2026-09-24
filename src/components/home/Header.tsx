"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  tickerLocation?: string;
  tickerStatus?: string;
  navItems?: NavLinkItem[];
}

const DEFAULT_NAV_ITEMS: NavLinkItem[] = [
  { label: "Selected Works", href: "/work" },
  { label: "Philosophy", href: "/story" },
  { label: "Writing", href: "/writing" },
  { label: "Visuals", href: "/photography" },
];

export default function Header({
  tickerLocation = "Taxila, PK (UTC+5)",
  tickerStatus = "Available for Q2/Q3 Contracts",
  navItems = DEFAULT_NAV_ITEMS,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route transition
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-canvas/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      {/* ── TOP ANNOUNCEMENT & STATUS TICKER ─────────────── */}
      <div className="w-full bg-canvas-vellum/70 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-ink-tertiary">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-rust shrink-0" />
            <span className="text-ink-primary font-medium">{tickerLocation}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-moss font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-moss animate-pulse shrink-0" />
              <span>{tickerStatus}</span>
            </span>
            <span className="hidden md:inline text-ink-tertiary/60">·</span>
            <span className="hidden md:inline text-ink-tertiary">SLA &lt; 24h</span>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVIGATION BAR ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Monogram */}
          <Link
            href="/"
            className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-ink-primary hover:text-rust transition-colors flex items-center gap-0.5"
            aria-label="Hafiz Muhammad Saeed Homepage"
          >
            <span>HMS</span>
            <span className="text-rust font-normal">.</span>
          </Link>

          {/* Desktop Nav Route Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-sans font-medium text-ink-secondary" aria-label="Desktop Navigation">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-3.5 py-2 rounded-sharp transition-all ${
                    active
                      ? "text-ink-primary font-semibold bg-canvas-paper shadow-sm"
                      : "hover:text-ink-primary hover:bg-canvas-vellum"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/connect"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sharp bg-ink-primary hover:bg-rust text-canvas text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-300 shadow-plate group min-h-[40px]"
            >
              <span>Initiate</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile Drawer Toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-sharp text-ink-primary hover:bg-canvas-paper transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE ACCORDION / DRAWER ─────────────────────── */}
      {isOpen && (
        <div className="md:hidden w-full bg-canvas-paper shadow-lg px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 rounded-sharp font-serif text-lg transition-colors ${
                    active
                      ? "text-rust font-semibold bg-canvas-vellum"
                      : "text-ink-primary hover:text-rust"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/connect"
              className="px-4 py-3 rounded-sharp font-mono text-xs uppercase tracking-widest text-rust font-semibold bg-rust/10 flex items-center justify-between"
            >
              <span>Start a Project</span>
              <span>→</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
