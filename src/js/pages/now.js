/* ── NOW PAGE JS ────────────────────────────────────────── */

import { initNavigation } from "../components/Navigation.js";
import { initFooter } from "../components/Footer.js";

import { initMobileMenu } from "../utils/ui.js";
import { initScrollReveal } from "../utils/scroll.js";

document.addEventListener("DOMContentLoaded", () => {
	// Initialize standard components
	initNavigation({ pathPrefix: "../" });
	initFooter({ pathPrefix: "../" });
	initMobileMenu();

	// Initialize page-specific interactive scripts
	initTaxilaPulse();
	initReadingThoughts();

	// Initialize ScrollReveal animations
	initScrollReveal();
});

/**
 * Periodically calculates and displays current local time in Taxila, Pakistan (GMT+5).
 * Updates corresponding status based on hour of day.
 */
function initTaxilaPulse() {
	const timeSpan = document.getElementById("taxila-time");
	const statusSpan = document.getElementById("taxila-status");
	if (!timeSpan || !statusSpan) return;

	function updateTaxilaTime() {
		const options = {
			timeZone: "Asia/Karachi",
			hour: "2-digit",
			minute: "2-digit",
			second: "2-digit",
			hour12: true
		};

		try {
			const formatter = new Intl.DateTimeFormat("en-US", options);
			const parts = formatter.formatToParts(new Date());
			let hour = 12;
			let minute = "00";
			let second = "00";
			let dayPeriod = "AM";

			parts.forEach(part => {
				if (part.type === "hour") hour = parseInt(part.value, 10);
				if (part.type === "minute") minute = part.value;
				if (part.type === "second") second = part.value;
				if (part.type === "dayPeriod") dayPeriod = part.value;
			});

			timeSpan.textContent = `${hour.toString().padStart(2, "0")}:${minute}:${second} ${dayPeriod}`;

			// Determine status based on local 24-hour style
			let localHour24 = hour;
			if (dayPeriod.toLowerCase() === "pm" && hour < 12) {
				localHour24 += 12;
			} else if (dayPeriod.toLowerCase() === "am" && hour === 12) {
				localHour24 = 0;
			}

			let statusText = "";
			if (localHour24 >= 0 && localHour24 < 7) {
				statusText = "Resting / Dreaming 💤";
			} else if (localHour24 >= 7 && localHour24 < 10) {
				statusText = "Morning routine ☕";
			} else if (localHour24 >= 10 && localHour24 < 17) {
				statusText = "Doing Random things";
			} else if (localHour24 >= 17 && localHour24 < 20) {
				statusText = "Playing Football ⚽";
			} else if (localHour24 >= 20 && localHour24 < 23) {
				statusText = "At Home 🏠";
			} else {
				statusText = "Reading 📖";
			}
			statusSpan.textContent = statusText;
		} catch (e) {
			// Fallback math calculation if Intl fails
			const date = new Date();
			const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
			// Pakistan Standard Time is UTC+5
			const pkTime = new Date(utc + (3600000 * 5));

			let hrs = pkTime.getHours();
			const mins = pkTime.getMinutes().toString().padStart(2, "0");
			const secs = pkTime.getSeconds().toString().padStart(2, "0");
			const ampm = hrs >= 12 ? "PM" : "AM";
			hrs = hrs % 12;
			hrs = hrs ? hrs : 12;

			timeSpan.textContent = `${hrs.toString().padStart(2, "0")}:${mins}:${secs} ${ampm}`;

			const hr24 = pkTime.getHours();
			let statusText = "";
			if (localHour24 >= 0 && localHour24 < 7) {
				statusText = "Resting / Dreaming 💤";
			} else if (localHour24 >= 7 && localHour24 < 10) {
				statusText = "Morning routine ☕";
			} else if (localHour24 >= 10 && localHour24 < 17) {
				statusText = "Doing Random things";
			} else if (localHour24 >= 17 && localHour24 < 20) {
				statusText = "Playing Football ⚽";
			} else if (localHour24 >= 20 && localHour24 < 23) {
				statusText = "At Home 🏠";
			} else {
				statusText = "Reading 📖";
			}
			statusSpan.textContent = statusText;
		}
	}

	// Update immediately then every second
	updateTaxilaTime();
	setInterval(updateTaxilaTime, 1000);
}

/**
 * Handles the toggling interaction for reading notes/takeaways.
 */
function initReadingThoughts() {
	const btn = document.getElementById("toggleBookThoughts");
	const content = document.getElementById("bookThoughts");
	if (!btn || !content) return;

	btn.addEventListener("click", () => {
		const isShown = content.classList.contains("show");
		if (isShown) {
			content.classList.remove("show");
			btn.classList.remove("active");
		} else {
			content.classList.add("show");
			btn.classList.add("active");
		}
	});
}
