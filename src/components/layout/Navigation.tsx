"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/primitives/Container";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Builds", href: "/work" },
  { name: "Writing", href: "/writing" },
  { name: "Academics", href: "/academics" },
  { name: "Photography", href: "/photography" },
  { name: "Connect", href: "/connect" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) < 10) return;

      if (currentScrollY > lastScrollY && currentScrollY > 100 && !isOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScrollY = Math.max(0, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

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
      <nav
        aria-label="Main"
        className={`fixed top-0 left-0 w-full z-[100] bg-[#f7f4ef]/90 backdrop-blur-md border-b border-[rgba(42,42,34,0.08)] h-[65px] transition-transform duration-300 ease-out ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <Container className="flex items-center justify-between h-full">
          <Link
            href="/"
            className="font-serif text-[1.625rem] font-bold text-[#2a2a22] tracking-[-0.02em] hover:text-[#728649] transition-colors"
          >
            HMS.
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-[0.8125rem] font-medium tracking-[0.04em] transition-colors relative py-1 hover:text-[#728649] ${
                    active ? "text-[#728649]" : "text-[rgba(42,42,34,0.60)]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#728649] transition-all duration-300 ${
                      active ? "w-full" : "w-0 hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 rounded-xl text-[#2a2a22] focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobileMenu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-[2.5px] bg-[#2a2a22] rounded-full transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2.5px] bg-[#2a2a22] rounded-full transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2.5px] bg-[#2a2a22] rounded-full transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </button>
        </Container>
      </nav>

      {/* Mobile Drawer Menu */}
      <div
        id="mobileMenu"
        role="navigation"
        aria-label="Mobile Navigation"
        className={`md:hidden fixed top-[65px] left-0 w-full bg-[#f7f4ef] z-[99] px-6 py-6 flex flex-col gap-4 shadow-md transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {navItems.map((item) => {
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`text-base font-medium py-2 flex items-center gap-3 transition-colors ${
                active ? "text-[#728649]" : "text-[rgba(42,42,34,0.60)] hover:text-[#728649]"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </>
  );
}
