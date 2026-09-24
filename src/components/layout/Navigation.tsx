"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Selected Works", href: "/work" },
  { name: "Philosophy", href: "/story" },
  { name: "Writing", href: "/writing" },
  { name: "Visuals", href: "/photography" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change & unlock scroll
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

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
    <>
      <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
        <nav
          aria-label="Main"
          className="pointer-events-auto flex items-center gap-1.5 sm:gap-3 px-3.5 sm:px-5 py-2 rounded-dock bg-canvas/90 backdrop-blur-md shadow-dock transition-all duration-300"
        >
          {/* Monogram Brand */}
          <Link
            href="/"
            className="font-serif text-lg font-bold text-ink-primary hover:text-rust transition-colors px-2 py-1 tracking-tight"
          >
            HMS<span className="text-rust font-normal">.</span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 text-xs font-sans font-medium text-ink-secondary">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-3 py-1.5 rounded-sharp transition-all ${
                    active
                      ? "text-ink-primary font-semibold bg-canvas-paper shadow-sm"
                      : "hover:text-ink-primary hover:bg-canvas-vellum"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Availability Status / Commercial Funnel Entry */}
          <Link
            href="/connect"
            className="group flex items-center gap-2 pl-2.5 pr-3 py-1.5 rounded-sharp bg-moss/10 hover:bg-rust text-moss hover:text-canvas transition-all duration-300 text-[11px] font-mono font-medium shadow-sm"
            title="Available for freelance engineering & design work"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-moss group-hover:bg-canvas opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-moss group-hover:bg-canvas" />
            </span>
            <span className="tracking-wide">Available</span>
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center gap-[4px] p-2 ml-1 text-ink-primary focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobileMenu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-4 h-[1.5px] bg-ink-primary transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[5.5px]" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] bg-ink-primary transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] bg-ink-primary transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer Menu as Floating Monograph Card */}
      <div
        id="mobileMenu"
        role="navigation"
        aria-label="Mobile Navigation"
        className={`md:hidden fixed top-20 inset-x-4 max-w-sm mx-auto bg-canvas-paper/98 backdrop-blur-md shadow-lg z-40 p-6 flex flex-col gap-3 rounded-card transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium py-2 flex items-center justify-between transition-colors ${
                active ? "text-rust font-semibold" : "text-ink-secondary hover:text-ink-primary"
              }`}
            >
              <span>{item.name}</span>
              <span className="font-mono text-xs opacity-40">→</span>
            </Link>
          );
        })}

        <div className="pt-3 flex flex-col gap-2">
          <Link
            href="/connect"
            className="flex items-center justify-between text-xs font-mono py-2 text-moss font-semibold"
          >
            <span>● Status: Taking on Q2/Q3 Projects</span>
            <span className="text-rust">Hire →</span>
          </Link>
          <Link
            href="/academics"
            className="text-xs font-mono py-1 text-ink-tertiary hover:text-ink-secondary"
          >
            Academic Archive &amp; Ledgers ↗
          </Link>
        </div>
      </div>
    </>
  );
}
