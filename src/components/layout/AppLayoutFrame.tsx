"use client";

import React from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export interface AppLayoutFrameProps {
  children: React.ReactNode;
}

export default function AppLayoutFrame({ children }: AppLayoutFrameProps) {
  return (
    <>
      <Navigation />
      <div className="flex-grow">{children}</div>
      <Footer />
    </>
  );
}
