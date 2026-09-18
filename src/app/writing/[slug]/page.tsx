import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/data/writing";

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
    title: post.title,
    description: post.summary,
  };
}

export default async function WritingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-5 sm:px-8 py-16 space-y-12">
      <div>
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#728649] hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Writing</span>
        </Link>
      </div>

      <header className="space-y-4 border-b border-[rgba(42,42,34,0.08)] pb-8">
        <div className="flex items-center gap-3">
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#728649]/10 text-[#728649] font-mono">
            {post.categoryLabel}
          </span>
          <span className="text-xs text-[rgba(42,42,34,0.40)] font-mono">
            {post.readTime}
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a2a22]">
          {post.title}
        </h1>

        <p className="text-lg text-[rgba(42,42,34,0.70)] italic leading-relaxed">
          {post.summary}
        </p>
      </header>

      <div className="space-y-6 text-base md:text-lg text-[rgba(42,42,34,0.85)] leading-relaxed font-sans">
        {post.content.map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>

      <div className="pt-12 border-t border-[rgba(42,42,34,0.08)]">
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#728649] hover:gap-3 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all writing</span>
        </Link>
      </div>
    </article>
  );
}
