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
          className="p-8 sm:p-10 bg-canvas-surface shadow-plate rounded-card relative overflow-hidden group hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between gap-4 mb-4">
            <Badge variant="rust">Featured Essay</Badge>
            <span className="text-xs text-ink-tertiary font-mono">
              {featuredPost.readTime}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-light text-ink-primary mb-3 group-hover:text-rust transition-colors">
            <Link href={`/writing/${featuredPost.slug}`}>
              {featuredPost.title}
            </Link>
          </h2>

          <p className="text-base text-ink-secondary leading-relaxed mb-6 max-w-2xl font-sans">
            {featuredPost.summary}
          </p>

          <Link
            href={`/writing/${featuredPost.slug}`}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-ink-primary group-hover:text-rust font-semibold transition-colors"
          >
            <span>Read Complete Essay</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </section>
      )}

      {/* Filter Chips */}
      <div
        className="flex items-center gap-2 flex-wrap"
        role="tablist"
        aria-label="Writing filters"
      >
        <button
          type="button"
          onClick={() => setActiveFilter("all")}
          className={cn(
            "px-4 py-1.5 rounded-sharp text-xs font-mono uppercase tracking-wider transition-all",
            activeFilter === "all"
              ? "bg-ink-primary text-canvas shadow-sm font-semibold"
              : "text-ink-secondary hover:text-ink-primary bg-canvas-paper hover:bg-canvas-vellum shadow-sm"
          )}
        >
          All Pieces
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("essay")}
          className={cn(
            "px-4 py-1.5 rounded-sharp text-xs font-mono uppercase tracking-wider transition-all",
            activeFilter === "essay"
              ? "bg-ink-primary text-canvas shadow-sm font-semibold"
              : "text-ink-secondary hover:text-ink-primary bg-canvas-paper hover:bg-canvas-vellum shadow-sm"
          )}
        >
          Essays
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("note")}
          className={cn(
            "px-4 py-1.5 rounded-sharp text-xs font-mono uppercase tracking-wider transition-all",
            activeFilter === "note"
              ? "bg-ink-primary text-canvas shadow-sm font-semibold"
              : "text-ink-secondary hover:text-ink-primary bg-canvas-paper hover:bg-canvas-vellum shadow-sm"
          )}
        >
          Field Notes
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("ref")}
          className={cn(
            "px-4 py-1.5 rounded-sharp text-xs font-mono uppercase tracking-wider transition-all",
            activeFilter === "ref"
              ? "bg-ink-primary text-canvas shadow-sm font-semibold"
              : "text-ink-secondary hover:text-ink-primary bg-canvas-paper hover:bg-canvas-vellum shadow-sm"
          )}
        >
          Reflections
        </button>
      </div>

      {/* Writing Archive List */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="p-6 bg-canvas-paper shadow-plate rounded-card space-y-3 group hover:shadow-md transition-shadow">
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-ink-primary group-hover:text-rust transition-colors">
              <Link href={`/writing/${post.slug}`}>{post.title}</Link>
            </h3>

            <div className="text-xs text-ink-tertiary font-mono">
              {post.readTime}
            </div>

            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed max-w-2xl font-sans">
              {post.summary}
            </p>

            <div className="pt-1">
              <Link
                href={`/writing/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-ink-primary group-hover:text-rust font-medium transition-colors"
              >
                <span>Read Piece</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Forthcoming Essays Note */}
      <aside className="p-6 bg-canvas-recessed/40 rounded-card text-center shadow-sm">
        <p className="text-xs font-mono text-ink-secondary">
          Additional essays on systems architecture, language models, and classical philosophy are in progress.
        </p>
      </aside>
    </div>
  );
}
