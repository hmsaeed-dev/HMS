"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export interface AppLayoutFrameProps {
  children: React.ReactNode;
}

export default function AppLayoutFrame({ children }: AppLayoutFrameProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {/* On non-home routes, render the persistent floating navigation */}
      {!isHome && <Navigation />}

      {/* Main page content */}
      <div className="flex-grow">{children}</div>

      {/* On non-home routes, render the global footer */}
      {!isHome && <Footer />}
    </>
  );
}
