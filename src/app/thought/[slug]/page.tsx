import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/writing";
import { ArrowLeft, Link2 } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) return {};

  return {
    title: `${post.title} — Hafiz Muhammad Saeed`,
    description: post.summary,
  };
}

export default async function ThoughtDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24 space-y-12 pt-24 sm:pt-28">
      {/* Back Link */}
      <Link
        href="/thought"
        className="inline-flex items-center gap-2 text-xs font-sans text-ink-tertiary hover:text-primary transition-colors min-h-[44px]"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Thought Notebook</span>
      </Link>

      {/* Header */}
      <header className="space-y-4 pb-4 sm:pb-6">
        <div className="flex items-center gap-2.5 font-sans text-xs text-ink-tertiary">
          <span className="text-accent font-semibold">{post.categoryLabel}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h1 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-ink-primary leading-tight">
          {post.title}
        </h1>

        <p className="font-serif italic text-lg sm:text-xl text-ink-secondary leading-relaxed font-normal">
          {post.summary}
        </p>
      </header>

      {/* Content */}
      <div className="space-y-6 text-base sm:text-lg text-ink-primary font-sans leading-[1.8] font-normal">
        {post.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>

      {/* Contextual Link */}
      {post.connectsWith && (
        <div className="pt-10 sm:pt-14">
          <div className="p-5 sm:p-6 bg-canvas-paper rounded-card space-y-2">
            <div className="flex items-center gap-2 font-sans text-xs uppercase tracking-wider text-accent font-semibold">
              <Link2 className="w-3.5 h-3.5" />
              <span>Contextual Connection</span>
            </div>
            <p className="text-sm text-ink-secondary font-sans leading-relaxed">
              This note connects directly to{" "}
              <Link href={post.connectsWith.href} className="text-primary hover:underline font-semibold">
                {post.connectsWith.label}
              </Link>
              : {post.connectsWith.reason}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}
