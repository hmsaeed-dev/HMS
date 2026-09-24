import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "rust" | "lapis" | "moss" | "ochre" | "neutral" | "dark" | "outline" | "subtle" | "olive";
  className?: string;
}

export default function Badge({
  children,
  variant = "subtle",
  className,
}: BadgeProps) {
  const variantStyles = {
    rust: "bg-rust/10 text-rust font-medium",
    lapis: "bg-lapis/10 text-lapis font-medium",
    moss: "bg-moss/10 text-moss font-medium",
    ochre: "bg-ochre/15 text-ochre font-medium",
    olive: "bg-moss/10 text-moss font-medium",
    neutral: "bg-canvas-paper text-ink-primary shadow-sm",
    dark: "bg-white/10 text-canvas-base",
    outline: "text-ink-secondary bg-canvas-vellum/60",
    subtle: "bg-rust/10 text-rust font-medium",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-sharp text-[10px] font-mono uppercase tracking-wider",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
