import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "primary"
    | "accent"
    | "rust"
    | "lapis"
    | "moss"
    | "ochre"
    | "neutral"
    | "dark"
    | "outline"
    | "subtle"
    | "olive";
  className?: string;
}

export default function Badge({
  children,
  variant = "subtle",
  className,
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-primary-subtle text-primary border border-primary-border font-medium",
    accent: "bg-accent-subtle text-accent border border-accent-border font-medium",
    rust: "bg-accent-subtle text-accent font-medium",
    lapis: "bg-primary-subtle text-primary font-medium",
    moss: "bg-moss/10 text-moss font-medium",
    ochre: "bg-ochre/15 text-ochre font-medium",
    olive: "bg-moss/10 text-moss font-medium",
    neutral: "bg-canvas-paper text-ink-primary border border-border-hairline shadow-sm",
    dark: "bg-white/10 text-canvas-base border border-white/10",
    outline: "text-ink-secondary bg-transparent border border-border-hairline",
    subtle: "bg-accent-subtle text-accent font-medium",
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
