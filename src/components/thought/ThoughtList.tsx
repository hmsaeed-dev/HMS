import React from "react";
import Link from "next/link";
import { ArrowRight, Link2 } from "lucide-react";
import { posts, Post } from "@/data/writing";

export interface ThoughtListProps {
  items?: Post[];
}

export default function ThoughtList({ items = posts }: ThoughtListProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-12">
      <div className="space-y-12 sm:space-y-16">
        {items.map((post) => (
          <article key={post.slug} className="space-y-4 group">
            <div className="flex items-center gap-2.5 font-sans text-xs text-ink-tertiary">
              <span className="text-accent font-semibold">{post.categoryLabel}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <h2 className="font-sans font-bold text-2xl sm:text-3xl tracking-tight text-ink-primary group-hover:text-primary transition-colors">
              <Link href={`/thought/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-base text-ink-secondary leading-relaxed font-sans font-normal max-w-2xl">
              {post.summary}
            </p>

            <div className="pt-2">
              <Link
                href={`/thought/${post.slug}`}
                className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-sans font-medium text-ink-primary hover:text-accent transition-colors"
              >
                <span>Read</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
