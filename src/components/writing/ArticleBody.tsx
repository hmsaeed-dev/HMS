import React from "react";

export interface ArticleBodyProps {
  content: string[];
}

export default function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="space-y-6 text-base sm:text-lg text-ink-secondary leading-[1.78] font-sans">
      {content.map((para, idx) => (
        <p key={idx}>{para}</p>
      ))}
    </div>
  );
}
