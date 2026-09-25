import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Post } from "@/data/writing";

export interface ArticleHeaderProps {
  post: Post;
}

export default function ArticleHeader({ post }: ArticleHeaderProps) {
  return (
    <header className="space-y-6 pb-6">
      <div>
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 min-h-[44px] text-xs font-sans font-medium text-ink-secondary hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5 text-accent" />
          <span>Return to Writing Archive</span>
        </Link>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2.5 font-sans text-xs text-ink-tertiary">
          <span>{post.date}</span>
          <span>·</span>
          <span className="text-primary font-medium">{post.categoryLabel}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="font-sans font-black text-2xl sm:text-4xl md:text-5xl tracking-tight text-ink-primary leading-[1.08] break-words">
          {post.title}
        </h1>
      </div>

      <p className="text-xl sm:text-2xl text-ink-secondary italic leading-relaxed font-serif pt-2 pb-4 font-normal">
        {post.summary}
      </p>
    </header>
  );
}
