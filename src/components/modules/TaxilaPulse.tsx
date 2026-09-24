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
    <div className="p-6 bg-canvas-surface shadow-plate rounded-card space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-mono text-xs uppercase tracking-wider text-rust font-semibold">
          Taxila Pulse
        </h3>
        <span className="flex items-center gap-1.5 text-[0.7rem] font-mono text-ink-tertiary">
          <span className="w-2 h-2 rounded-full bg-olive animate-pulse" />
          Live
        </span>
      </div>

      <div className="space-y-1">
        <div className="text-xs text-ink-secondary font-medium">
          Taxila, Pakistan (PKT · UTC+5)
        </div>
        <div className="font-mono text-2xl font-light text-ink-primary tracking-tight">
          {timeData.timeStr || "--:--:-- --"}
        </div>
        {timeData.status && (
          <p className="font-serif italic text-sm text-olive pt-1">
            “{timeData.status}”
          </p>
        )}
      </div>
    </div>
  );
}
