import React from "react";
import type { Metadata } from "next";
import WritingHero from "@/components/writing/WritingHero";
import WritingFeed from "@/components/writing/WritingFeed";

export const metadata: Metadata = {
  title: "Writing & Field Notes",
  description:
    "Essays, architectural notes, and study guides on systems engineering, polymathy, craft, and classical philosophy by Hafiz Muhammad Saeed.",
};

export default function WritingPage() {
  return (
    <div className="w-full flex flex-col pt-16 sm:pt-20">
      <WritingHero />
      <WritingFeed />
    </div>
  );
}
