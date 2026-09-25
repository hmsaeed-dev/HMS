"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-30 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full bg-white/95 border border-border-hairline shadow-md text-ink-primary hover:text-accent hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}
