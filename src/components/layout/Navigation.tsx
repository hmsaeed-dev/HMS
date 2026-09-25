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
  { name: "Writing", href: "/writing" },
  { name: "Story", href: "/story" },
  { name: "Visuals", href: "/photography" },
  { name: "Now", href: "/now" },
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
    <header className="sticky top-0 z-50 w-full bg-canvas/90 backdrop-blur-md border-b border-border-hairline transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Monogram */}
          <Link
            href="/"
            className="font-sans font-black text-lg sm:text-xl tracking-tight text-ink-primary hover:text-primary transition-colors flex items-center gap-0.5 min-h-[44px] min-w-[44px] items-center"
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

          {/* Linear-Style Utilitarian CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/connect"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 min-h-[44px] rounded-pill bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground text-xs font-sans font-medium tracking-normal transition-all shadow-sm"
            >
              <span>Initiate</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            </Link>

            {/* Accessible 44x44px touch button */}
            <button
              type="button"
              className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-border-hairline text-ink-primary hover:text-primary hover:bg-canvas-paper/80 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
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

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          id="mobile-navigation-menu"
          className="md:hidden fixed inset-x-0 top-14 sm:top-16 bottom-0 z-50 bg-canvas/98 backdrop-blur-xl border-t border-border-hairline flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200"
        >
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`min-h-[48px] px-4 py-3 rounded-card text-base font-sans font-medium flex items-center justify-between transition-colors ${
                    active
                      ? "bg-primary-subtle text-primary font-bold border-l-2 border-primary"
                      : "text-ink-primary hover:bg-canvas-paper hover:text-primary"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {active && <span className="w-1.5 h-1.5 rounded-full bg-accent" />}
                    <span>{item.name}</span>
                  </span>
                  <span className="font-mono text-xs text-ink-tertiary">↗</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Footer Drawer Actions */}
          <div className="pt-6 border-t border-border-hairline space-y-4">
            <div className="flex items-center gap-2 px-2 text-xs font-mono text-ink-secondary">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>Available for engineering contracts</span>
            </div>

            <Link
              href="/connect"
              onClick={() => setIsOpen(false)}
              className="min-h-[48px] w-full flex items-center justify-center gap-2 rounded-pill bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-foreground text-sm font-sans font-medium transition-all shadow-sm"
            >
              <span>Initiate a Project</span>
              <ArrowRight className="w-4 h-4 text-accent" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
