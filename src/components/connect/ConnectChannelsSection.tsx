import React from "react";
import ConnectChannels from "@/components/modules/ConnectChannels";

export default function ConnectChannelsSection() {
  return (
    <section className="w-full bg-surface-canvas pt-10 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConnectChannels />
      </div>
    </section>
  );
}
