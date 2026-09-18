"use client";

import React, { useState, useEffect } from "react";
import { formatPakistanTime } from "@/lib/formatters";

export default function TaxilaPulse() {
  const [timeData, setTimeData] = useState<{
    timeStr: string;
    status: string;
  }>({
    timeStr: "",
    status: "",
  });

  useEffect(() => {
    const update = () => {
      const formatted = formatPakistanTime();
      setTimeData({ timeStr: formatted.timeStr, status: formatted.status });
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 rounded-2xl border border-[rgba(42,42,34,0.12)] bg-white/60 backdrop-blur-sm space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-xs uppercase tracking-wider text-[#728649] font-bold">
          Pulse
        </h3>
        <span className="flex items-center gap-1.5 text-[0.7rem] font-mono text-[rgba(42,42,34,0.50)]">
          <span className="w-2 h-2 rounded-full bg-[#728649] animate-pulse" />
          Live
        </span>
      </div>

      <div className="space-y-1">
        <div className="text-xs text-[rgba(42,42,34,0.60)] font-medium">
          Taxila, Pakistan (PKT · UTC+5)
        </div>
        <div className="font-mono text-2xl font-bold text-[#2a2a22] tracking-tight">
          {timeData.timeStr || "--:--:-- --"}
        </div>
        {timeData.status && (
          <p className="font-serif italic text-sm text-[#728649] pt-1">
            “{timeData.status}”
          </p>
        )}
      </div>
    </div>
  );
}
