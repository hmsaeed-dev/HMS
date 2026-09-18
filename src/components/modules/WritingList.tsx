"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      {/* Featured Post Card */}
      {featuredPost && (
        <section
          aria-label="Featured writing"
          className="p-8 md:p-10 rounded-3xl border border-[#728649]/30 bg-gradient-to-br from-white to-[#728649]/5 shadow-sm relative overflow-hidden"
        >
          <div className="flex items-center justify-between gap-4 mb-4">
            <Badge variant="olive">Featured</Badge>
            <span className="text-xs text-[rgba(42,42,34,0.50)] font-mono">
              {featuredPost.readTime}
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2a2a22] mb-3 hover:text-[#728649] transition-colors">
            <Link href={`/writing/${featuredPost.slug}`}>
              {featuredPost.title}
            </Link>
          </h2>

          <p className="text-base text-[rgba(42,42,34,0.75)] leading-relaxed mb-6 max-w-2xl">
            {featuredPost.summary}
          </p>

          <Link
            href={`/writing/${featuredPost.slug}`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#728649] font-medium hover:gap-3 transition-all"
          >
            <span>Read more</span>
            <ArrowRight className="w-4 h-4" />
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
            "px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all",
            activeFilter === "all"
              ? "bg-[#728649] text-white shadow-sm"
              : "border border-[rgba(42,42,34,0.15)] text-[rgba(42,42,34,0.60)] hover:border-[#728649] hover:text-[#728649]"
          )}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("essay")}
          className={cn(
            "px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all",
            activeFilter === "essay"
              ? "bg-[#728649] text-white shadow-sm"
              : "border border-[rgba(42,42,34,0.15)] text-[rgba(42,42,34,0.60)] hover:border-[#728649] hover:text-[#728649]"
          )}
        >
          Essays
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("note")}
          className={cn(
            "px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all",
            activeFilter === "note"
              ? "bg-[#728649] text-white shadow-sm"
              : "border border-[rgba(42,42,34,0.15)] text-[rgba(42,42,34,0.60)] hover:border-[#728649] hover:text-[#728649]"
          )}
        >
          Notes
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter("ref")}
          className={cn(
            "px-4 py-1.5 rounded-full text-xs uppercase tracking-wider font-medium transition-all",
            activeFilter === "ref"
              ? "bg-[#728649] text-white shadow-sm"
              : "border border-[rgba(42,42,34,0.15)] text-[rgba(42,42,34,0.60)] hover:border-[#728649] hover:text-[#728649]"
          )}
        >
          Reflections
        </button>
      </div>

      {/* Writing Archive List */}
      <div className="divide-y divide-[rgba(42,42,34,0.08)]">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="py-6 space-y-2 group">
            <div className="flex items-center gap-3">
              <Badge variant="subtle">{post.categoryLabel}</Badge>
              <span className="text-xs text-[rgba(42,42,34,0.40)] font-mono">
                {post.readTime}
              </span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#2a2a22] group-hover:text-[#728649] transition-colors">
              <Link href={`/writing/${post.slug}`}>{post.title}</Link>
            </h3>

            <p className="text-sm text-[rgba(42,42,34,0.70)] leading-relaxed max-w-2xl">
              {post.summary}
            </p>

            <div className="pt-2">
              <Link
                href={`/writing/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#728649] font-medium hover:gap-2.5 transition-all"
              >
                <span>Read more</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* In Progress Aside */}
      <aside className="p-6 rounded-2xl border border-dashed border-[rgba(42,42,34,0.15)] text-center">
        <p className="text-sm text-[rgba(42,42,34,0.60)] italic">
          More essays, notes, and study guides are in progress. Each piece will
          appear here as it&apos;s finished.
        </p>
      </aside>
    </div>
  );
}
