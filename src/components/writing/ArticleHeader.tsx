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
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-tertiary hover:text-rust transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Writing Archive</span>
        </Link>
      </div>

      <div className="space-y-3">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-ink-primary leading-tight">
          {post.title}
        </h1>
        <div className="text-xs text-ink-tertiary font-mono">
          {post.readTime}
        </div>
      </div>

      <p className="text-lg text-ink-secondary italic leading-relaxed font-serif pt-1">
        {post.summary}
      </p>
    </header>
  );
}
