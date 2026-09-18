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
      className="fixed bottom-6 right-6 z-[300] p-3 rounded-full bg-[#f7f4ef] border border-[rgba(42,42,34,0.15)] shadow-md text-[#2a2a22] hover:text-[#728649] hover:border-[#728649] hover:-translate-y-1 transition-all duration-300 focus:outline-none"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
