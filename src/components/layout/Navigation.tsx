"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, ArrowRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Work", href: "/work" },
  { name: "Thought", href: "/thought" },
  { name: "About", href: "/about" },
  { name: "Visuals", href: "/visuals" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change & unlock scroll
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#F7F5F1]/95 backdrop-blur-md transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Brand Monogram */}
            <Link
              href="/"
              className="font-sans font-black text-lg sm:text-xl tracking-tight text-ink-primary hover:text-primary transition-colors flex items-center gap-0.5 min-h-[44px] min-w-[44px]"
              aria-label="Hafiz Muhammad Saeed Homepage"
            >
              <span>HMS</span>
              <span className="text-accent">.</span>
            </Link>

            {/* Desktop Nav Links */}
            <nav
              className="hidden md:flex items-center gap-8 text-xs font-sans font-medium text-ink-secondary"
              aria-label="Main Navigation"
            >
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`transition-colors py-2 relative text-xs tracking-normal ${
                      active
                        ? "text-primary font-semibold"
                        : "hover:text-primary text-ink-secondary"
                    }`}
                  >
                    {item.name}
                    {active && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-primary rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Connect CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/connect"
                className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[40px] rounded-pill bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground text-xs font-sans font-medium tracking-normal transition-all shadow-sm"
              >
                <span>Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
              </Link>

              {/* Accessible 44x44px touch hamburger button */}
              <button
                type="button"
                className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-border-hairline bg-surface-paper/80 text-ink-primary hover:text-accent hover:border-accent active:bg-accent-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation-menu"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Overlay (Mounted at root outside header to avoid WebKit backdrop-filter stacking context bugs) */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="md:hidden fixed inset-0 z-50 h-[100dvh] w-full bg-[#F7F5F1] text-ink-primary flex flex-col justify-between p-6 sm:p-8 overflow-y-auto animate-in fade-in duration-200"
        >
          {/* Top Bar inside modal */}
          <div className="flex items-center justify-between h-14 pb-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="font-sans font-black text-xl tracking-tight text-ink-primary flex items-center gap-0.5"
            >
              <span>HMS</span>
              <span className="text-accent">.</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-border-hairline bg-surface-paper text-ink-primary hover:text-accent hover:border-accent active:bg-accent-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <X className="w-5 h-5 text-accent" />
            </button>
          </div>

          {/* Large Editorial Nav Links */}
          <nav className="flex-1 py-8 flex flex-col justify-center space-y-3" aria-label="Mobile Navigation">
            {navItems.map((item, idx) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`min-h-[56px] px-5 py-3.5 rounded-card text-2xl font-sans font-bold flex items-center justify-between transition-all ${
                    active
                      ? "bg-[#151927] text-[#F7F5F1] shadow-sm"
                      : "text-ink-primary hover:bg-[#151927]/5 hover:text-accent"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`font-sans text-xs font-normal ${active ? "text-[#C94A2F]" : "text-ink-tertiary"}`}>
                      0{idx + 1}.
                    </span>
                    <span>{item.name}</span>
                  </span>
                  <ArrowRight
                    className={`w-5 h-5 ${
                      active ? "text-[#C94A2F]" : "text-ink-tertiary opacity-40"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Drawer Colophon & Direct Connect */}
          <div className="pt-6 space-y-4">
            <div className="flex items-center justify-between text-xs font-sans text-ink-secondary px-1">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Taxila, PK (UTC+5)</span>
              </span>
              <span className="text-accent font-medium">Available</span>
            </div>

            <Link
              href="/connect"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] w-full flex items-center justify-center gap-2 rounded-pill bg-[#151927] hover:bg-[#0E111C] active:bg-black text-[#F7F5F1] text-sm font-sans font-semibold transition-all shadow-md"
            >
              <span>Connect // Direct Dialogue</span>
              <ArrowUpRight className="w-4 h-4 text-accent" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
