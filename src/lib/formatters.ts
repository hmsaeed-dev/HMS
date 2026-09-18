/**
 * Formats time in Pakistan Standard Time (PKT / UTC+5)
 */
export function formatPakistanTime(date: Date = new Date()) {
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Karachi",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const hourFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Karachi",
    hour: "numeric",
    hour12: false,
  });

  const timeStr = timeFormatter.format(date);
  const hour = parseInt(hourFormatter.format(date), 10);

  let status = "Late-night contemplation & reading";
  if (hour >= 5 && hour < 9) {
    status = "Morning tea & quiet reading";
  } else if (hour >= 9 && hour < 14) {
    status = "Coursework & systems coding";
  } else if (hour >= 14 && hour < 18) {
    status = "UET Taxila labs & problem solving";
  } else if (hour >= 18 && hour < 21) {
    status = "Golden hour walks & macro lens";
  } else if (hour >= 21 && hour < 24) {
    status = "Deep work & open-source projects";
  }

  return { timeStr, status, hour };
}
