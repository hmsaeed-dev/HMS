import React from "react";
import WritingList from "@/components/modules/WritingList";
import { Post, posts as defaultPosts } from "@/data/writing";

export interface WritingFeedProps {
  posts?: Post[];
}

export default function WritingFeed({ posts = defaultPosts }: WritingFeedProps) {
  return (
    <section className="w-full bg-surface-canvas pt-10 pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <WritingList posts={posts} />
      </div>
    </section>
  );
}
