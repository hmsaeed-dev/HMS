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
	initCelestialPosition();

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
			} else if (localHour24 >= 7 && localHour24 < 9) {
				statusText = "Morning routine ☕";
			} else if (localHour24 >= 9 && localHour24 < 17) {
				statusText = "Studying at UET Taxila 🎓";
			} else if (localHour24 >= 17 && localHour24 < 20) {
				statusText = "Football ⚽";
			} else if (localHour24 >= 20 && localHour24 < 23) {
				statusText = "Deep coding focus 💻";
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
			if (hr24 >= 0 && hr24 < 7) {
				statusText = "Resting / Dreaming 💤";
			} else if (hr24 >= 7 && hr24 < 9) {
				statusText = "Morning routine ☕";
			} else if (hr24 >= 9 && hr24 < 15) {
				statusText = "Studying at UET Taxila 🎓";
			} else if (hr24 >= 15 && hr24 < 18) {
				statusText = "Building / Football ⚽";
			} else if (hr24 >= 18 && hr24 < 23) {
				statusText = "Deep coding focus 💻";
			} else {
				statusText = "Wind-down / Reading 📖";
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

/**
 * Calculates and updates the celestial node position (Sun/Moon position) in the hero banner
 * based on current hour and minute in Taxila (GMT+5).
 */
function initCelestialPosition() {
	const node = document.getElementById("celestial-node");
	if (!node) return;

	const circle = node.querySelector("circle:first-child");
	const glow = node.querySelector("circle:last-child");
	if (!circle || !glow) return;

	function updateCelestialPosition() {
		const options = {
			timeZone: "Asia/Karachi",
			hour: "numeric",
			minute: "numeric",
			hour12: false
		};

		let hour = 12;
		let minute = 0;

		try {
			const formatter = new Intl.DateTimeFormat("en-US", options);
			const parts = formatter.formatToParts(new Date());
			parts.forEach(part => {
				if (part.type === "hour") hour = parseInt(part.value, 10);
				if (part.type === "minute") minute = parseInt(part.value, 10);
			});
		} catch (e) {
			// Fallback timezone calculation
			const date = new Date();
			const utc = date.getTime() + (date.getTimezoneOffset() * 60000);
			const pkTime = new Date(utc + (3600000 * 5));
			hour = pkTime.getHours();
			minute = pkTime.getMinutes();
		}

		let isDay = hour >= 6 && hour < 18;
		let p = 0;

		if (isDay) {
			// 6 AM to 6 PM mapping
			p = (hour - 6 + minute / 60) / 12;
			circle.setAttribute("fill", "var(--color-accent)");
			glow.setAttribute("stroke", "var(--color-accent)");
		} else {
			// Night mapping (6 PM to 6 AM)
			if (hour >= 18) {
				p = (hour - 18 + minute / 60) / 12;
			} else {
				p = (hour + 6 + minute / 60) / 12;
			}
			circle.setAttribute("fill", "var(--color-sky)");
			glow.setAttribute("stroke", "var(--color-sky)");
		}

		// Calculate coordinates on the SVG path (200x40 viewBox)
		// Path curve: M10 35 Q100 5 190 35
		// Bezier formula for quadratic Q(t) from P0=(10,35) to P2=(190,35) with control P1=(100,5):
		// B(t) = (1-t)^2 * P0 + 2(1-t)t * P1 + t^2 * P2
		// Bx(t) = 10 + 180 * t
		// By(t) = 35 - 60 * t * (1 - t)
		const t = p;
		const cx = 10 + 180 * t;
		const cy = 35 - 60 * t * (1 - t);

		circle.setAttribute("cx", cx);
		circle.setAttribute("cy", cy);
		glow.setAttribute("cx", cx);
		glow.setAttribute("cy", cy);
	}

	updateCelestialPosition();
	// Check and update every minute
	setInterval(updateCelestialPosition, 60000);
}
