import React from "react";
import type { Metadata } from "next";
import StoryHero from "@/components/story/StoryHero";
import StoryEssay from "@/components/story/StoryEssay";
import StoryMonographPlate from "@/components/story/StoryMonographPlate";
import StoryPhilosophy from "@/components/story/StoryPhilosophy";
import StoryTrajectoryTimeline from "@/components/story/StoryTrajectoryTimeline";
import StoryPhilosophyConstants from "@/components/story/StoryPhilosophyConstants";
import StoryConversionBand from "@/components/story/StoryConversionBand";

export const metadata: Metadata = {
  title: "Philosophy & Narrative",
  description:
    "The intellectual trajectory, craft philosophy, and systems thinking of Hafiz Muhammad Saeed.",
};

export default function StoryPage() {
  return (
    <article className="w-full flex flex-col pt-16 sm:pt-20">
      <StoryHero />
      <StoryEssay />
      <StoryMonographPlate />
      <StoryPhilosophy />
      <StoryTrajectoryTimeline />
      <StoryPhilosophyConstants />
      <StoryConversionBand />
    </article>
  );
}
