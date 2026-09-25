import React from "react";

export interface ArticleBodyProps {
  content: string[];
}

export default function ArticleBody({ content }: ArticleBodyProps) {
  return (
    <div className="space-y-7 text-lg sm:text-xl text-ink-secondary leading-[1.8] font-sans font-normal max-w-prose">
      {content.map((para, idx) => (
        <p key={idx}>{para}</p>
      ))}
    </div>
  );
}
