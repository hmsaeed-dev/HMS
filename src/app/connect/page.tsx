import React from "react";
import type { Metadata } from "next";
import ConnectHero from "@/components/connect/ConnectHero";
import ConnectChannelsSection from "@/components/connect/ConnectChannelsSection";
import ConnectEngagementModels from "@/components/connect/ConnectEngagementModels";
import ConnectLocationTimezone from "@/components/connect/ConnectLocationTimezone";

export const metadata: Metadata = {
  title: "Connect & Inquiries",
  description:
    "Direct channels to hire Hafiz Muhammad Saeed for freelance engineering, Next.js architecture, and high-craft design projects.",
};

export default function ConnectPage() {
  return (
    <div className="w-full flex flex-col pt-16 sm:pt-20">
      <ConnectHero />
      <ConnectChannelsSection />
      <ConnectEngagementModels />
      <ConnectLocationTimezone />
    </div>
  );
}
