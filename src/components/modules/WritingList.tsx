"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Post } from "@/data/writing";
import Badge from "@/components/primitives/Badge";
import { cn } from "@/lib/utils";

interface WritingListProps {
  posts: Post[];
}

export default function WritingList({ posts }: WritingListProps) {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "essay" | "note" | "ref"
  >("all");

  const filteredPosts =
    activeFilter === "all"
      ? posts
      : posts.filter((p) => p.category === activeFilter);

  const featuredPost = posts.find((p) => p.featured);

  return (
    <div className="space-y-12">
      {/* Featured Editorial Post */}
      {featuredPost && (
        <section
          aria-label="Featured writing"
          className="p-8 sm:p-10 bg-canvas-paper border border-border-hairline rounded-card relative overflow-hidden group hover:border-primary/30 transition-all duration-300 shadow-sm"
        >
          <div className="flex items-center justify-between gap-4 mb-4">
            <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span>Featured Essay</span>
            </span>
            <span className="text-xs text-ink-tertiary font-mono">
              {featuredPost.readTime}
            </span>
          </div>

          <h2 className="font-sans font-black text-2xl sm:text-4xl tracking-tight text-ink-primary mb-3 group-hover:text-primary transition-colors">
            <Link href={`/writing/${featuredPost.slug}`}>
              {featuredPost.title}
            </Link>
          </h2>

          <p className="text-base text-ink-secondary leading-relaxed mb-6 max-w-2xl font-sans font-normal">
            {featuredPost.summary}
          </p>

          <Link
            href={`/writing/${featuredPost.slug}`}
            className="inline-flex items-center gap-2 min-h-[44px] text-xs font-sans font-medium text-ink-primary hover:text-accent transition-colors"
          >
            <span>Read Complete Essay</span>
            <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      )}

      {/* Filter Tabs (Linear-Style Pill Controls with 44px+ Touch Targets) */}
      <div
        className="flex items-center gap-2 flex-wrap border-b border-border-hairline pb-4"
        role="tablist"
        aria-label="Writing filters"
      >
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={cn(
            "min-h-[44px] px-4 py-2 rounded-pill text-xs font-sans font-medium transition-all inline-flex items-center justify-center",
            activeFilter === "all"
              ? "bg-primary text-primary-foreground shadow-sm font-semibold"
              : "text-ink-secondary hover:text-primary hover:bg-primary-subtle"
          )}
        >
          All Pieces
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("essay")}
          className={cn(
            "min-h-[44px] px-4 py-2 rounded-pill text-xs font-sans font-medium transition-all inline-flex items-center justify-center",
            activeFilter === "essay"
              ? "bg-primary text-primary-foreground shadow-sm font-semibold"
              : "text-ink-secondary hover:text-primary hover:bg-primary-subtle"
          )}
        >
          Essays
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("note")}
          className={cn(
            "min-h-[44px] px-4 py-2 rounded-pill text-xs font-sans font-medium transition-all inline-flex items-center justify-center",
            activeFilter === "note"
              ? "bg-primary text-primary-foreground shadow-sm font-semibold"
              : "text-ink-secondary hover:text-primary hover:bg-primary-subtle"
          )}
        >
          Field Notes
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("ref")}
          className={cn(
            "min-h-[44px] px-4 py-2 rounded-pill text-xs font-sans font-medium transition-all inline-flex items-center justify-center",
            activeFilter === "ref"
              ? "bg-primary text-primary-foreground shadow-sm font-semibold"
              : "text-ink-secondary hover:text-primary hover:bg-primary-subtle"
          )}
        >
          Reflections
        </button>
      </div>

      {/* Writing Archive List (Substack-Style Clean Row Flow) */}
      <div className="divide-y divide-border-hairline">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="py-8 sm:py-10 space-y-3 group"
          >
            <div className="flex items-center gap-2.5 font-mono text-xs text-ink-tertiary">
              <span>{post.date}</span>
              <span>·</span>
              <span className="text-primary font-medium">{post.categoryLabel}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <h3 className="font-sans font-bold text-xl sm:text-2xl tracking-tight text-ink-primary group-hover:text-primary transition-colors">
              <Link href={`/writing/${post.slug}`}>{post.title}</Link>
            </h3>

            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed max-w-2xl font-sans font-normal">
              {post.summary}
            </p>

            <div className="pt-2">
              <Link
                href={`/writing/${post.slug}`}
                className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-sans font-medium text-ink-primary hover:text-accent transition-colors"
              >
                <span>Read Piece</span>
                <ArrowRight className="w-3.5 h-3.5 text-accent transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Forthcoming Essays Note */}
      <aside className="p-6 bg-canvas/40 border border-border-hairline rounded-card text-center">
        <p className="text-xs font-mono text-ink-secondary">
          Additional essays on systems architecture, language models, and classical philosophy are in progress.
        </p>
      </aside>
    </div>
  );
}
