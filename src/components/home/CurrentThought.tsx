import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { posts } from "@/data/writing";

export default function CurrentThought() {
  const latestPost = posts[0];

  if (!latestPost) return null;

  return (
    <section className="w-full bg-surface-canvas py-20 sm:py-28 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between pb-2">
          <div className="text-xs uppercase tracking-widest text-accent font-semibold flex items-center gap-1.5 font-sans">
            <BookOpen className="w-3.5 h-3.5 text-accent" />
            <span>Field Note // 04. Current Thought</span>
          </div>
          <Link
            href="/thought"
            className="text-xs font-sans text-ink-tertiary hover:text-primary transition-colors min-h-[44px] inline-flex items-center"
          >
            All Notes ({posts.length}) →
          </Link>
        </div>

        {/* Quiet Single Note Card */}
        <article className="p-6 sm:p-8 bg-canvas-paper border border-border-hairline rounded-card space-y-4 hover:border-primary/30 transition-all group shadow-sm">
          <div className="flex items-center gap-2 text-xs font-sans text-ink-tertiary">
            <span className="text-accent font-medium">{latestPost.categoryLabel}</span>
            <span>·</span>
            <span>{latestPost.readTime}</span>
          </div>

          <h3 className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-ink-primary group-hover:text-primary transition-colors">
            <Link href={`/thought/${latestPost.slug}`}>{latestPost.title}</Link>
          </h3>

          <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans font-normal max-w-2xl">
            {latestPost.summary}
          </p>

          <div className="pt-2">
            <Link
              href={`/thought/${latestPost.slug}`}
              className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-sans font-medium text-ink-primary hover:text-accent transition-colors"
            >
              <span>Read complete note</span>
              <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
