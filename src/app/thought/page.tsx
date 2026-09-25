import React from "react";
import type { Metadata } from "next";
import ThoughtHero from "@/components/thought/ThoughtHero";
import ThoughtList from "@/components/thought/ThoughtList";

export const metadata: Metadata = {
  title: "Thought // Intellectual Notebook & Field Notes",
  description:
    "A small notebook of working hypotheses, architectural reflections, and observations on systems geometry by Hafiz Muhammad Saeed.",
};

export default function ThoughtPage() {
  return (
    <main className="w-full flex flex-col pt-16 sm:pt-20">
      <ThoughtHero />
      <ThoughtList />
    </main>
  );
}
