"use client";

import React, { useState, useEffect } from "react";

export default function TaxilaPulse() {
  const [timeStr, setTimeStr] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Pakistan Standard Time is UTC+5
      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTimeStr(formatter.format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 rounded-2xl border border-[rgba(42,42,34,0.12)] bg-white/60 backdrop-blur-sm space-y-3">
      <h3 className="font-mono text-xs uppercase tracking-wider text-[#728649] font-bold">
        Pulse
      </h3>
      <div className="space-y-1">
        <div className="flex items-center gap-2 text-sm text-[rgba(42,42,34,0.60)]">
          <span className="w-2 h-2 rounded-full bg-[#728649] animate-pulse" />
          <span>Taxila, Pakistan (UTC+5)</span>
        </div>
        <div className="font-mono text-xl font-bold text-[#2a2a22]">
          {timeStr || "--:--:-- --"}
        </div>
      </div>
    </div>
  );
}
