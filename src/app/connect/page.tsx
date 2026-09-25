import React from "react";
import type { Metadata } from "next";
import ConnectView from "@/components/connect/ConnectView";

export const metadata: Metadata = {
  title: "Connect // Write to Saeed",
  description:
    "Direct channels to reach Hafiz Muhammad Saeed for low-level engineering collaboration, chess challenges, or philosophical dialogue.",
};

export default function ConnectPage() {
  return (
    <main className="w-full flex flex-col">
      <ConnectView />
    </main>
  );
}
