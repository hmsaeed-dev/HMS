import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "olive" | "neutral" | "outline" | "subtle";
  className?: string;
}

export default function Badge({
  children,
  variant = "subtle",
  className,
}: BadgeProps) {
  const variantStyles = {
    olive: "bg-[#728649] text-white",
    neutral: "bg-white/90 text-[#2a2a22] shadow-sm",
    outline: "border border-[rgba(42,42,34,0.15)] text-[rgba(42,42,34,0.60)]",
    subtle: "bg-[#728649]/10 text-[#728649]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono uppercase tracking-wider font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
