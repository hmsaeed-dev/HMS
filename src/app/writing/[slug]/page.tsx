import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/data/writing";
import ArticleHeader from "@/components/writing/ArticleHeader";
import ArticleBody from "@/components/writing/ArticleBody";
import ArticleFooterNav from "@/components/writing/ArticleFooterNav";

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

export default async function WritingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24 space-y-12 pt-24 sm:pt-28">
      <ArticleHeader post={post} />
      <ArticleBody content={post.content} />
      <ArticleFooterNav />
    </article>
  );
}
