/* ── ACADEMICS PAGE JS ────────────────────────────────────────── */

import { initNavigation } from "../components/Navigation.js";
import { initFooter } from "../components/Footer.js";

import { initMobileMenu } from "../utils/ui.js";
import { initScrollReveal } from "../utils/scroll.js";
import { animateGPA } from "../utils/animations.js";

document.addEventListener("DOMContentLoaded", () => {
	// Standard page header/footer components
	initNavigation({ pathPrefix: "../" });
	initFooter({ pathPrefix: "../" });

	initMobileMenu();

	// Animate the main CGPA statistic
	const gpaEl = document.getElementById("statGPA");
	if (gpaEl) {
		animateGPA(gpaEl, 3.96, 800);
	}

	// Ledger Accordion Toggle Behavior
	const cards = document.querySelectorAll(".semester-card");
	cards.forEach((card) => {
		const trigger = card.querySelector(".semester-card-header");
		const panel = card.querySelector(".semester-card-body");

		if (trigger && panel) {
			trigger.addEventListener("click", () => {
				const isExpanded = trigger.getAttribute("aria-expanded") === "true";

				// Toggle accessibility attributes
				trigger.setAttribute("aria-expanded", !isExpanded);
				panel.setAttribute("aria-hidden", isExpanded);

				// Toggle visual active state class
				card.classList.toggle("expanded", !isExpanded);
			});
		}
	});

	initScrollReveal();
});
