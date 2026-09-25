import React from "react";
import { cn } from "@/lib/utils";

interface DragonflyGlyphProps {
  className?: string;
}

export default function DragonflyGlyph({
  className = "w-8 h-8 text-accent",
}: DragonflyGlyphProps) {
  return (
    <svg
      className={cn("shrink-0", className)}
      viewBox="90 80 320 190"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <g>
        <path d="M 250,95 C 256,95 261,99 261,105 C 261,110 257,113 259,118 C 261,123 263,128 261,137 C 259,147 256,158 253,175 L 253,243 C 252.5,250 250.5,253 250,253 C 249.5,253 247.5,250 247,243 L 247,175 C 244,158 241,147 239,137 C 237,128 239,123 241,118 C 243,113 239,110 239,105 C 239,99 244,95 250,95 Z" />
        <path d="M 248,132 L 135,102 L 110,118 L 125,138 L 185,153 L 248,142 Z" />
        <path d="M 252,132 L 365,102 L 390,118 L 375,138 L 315,153 L 252,142 Z" />
        <path d="M 247,152 L 158,168 L 140,180 L 150,191 L 202,187 L 247,162 Z" />
        <path d="M 253,152 L 342,168 L 360,180 L 350,191 L 298,187 L 253,162 Z" />
      </g>
    </svg>
  );
}
