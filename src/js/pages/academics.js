/* ── ACADEMICS PAGE JS ────────────────────────────────────────── */

import { initNavigation } from "../components/Navigation.js";
import { initFooter } from "../components/Footer.js";
import { initMobileMenu } from "../utils/ui.js";
import { initScrollReveal } from "../utils/scroll.js";

document.addEventListener("DOMContentLoaded", () => {
	// Standard page header/footer components
	initNavigation({ pathPrefix: "../" });
	initFooter({ pathPrefix: "../" });
	initMobileMenu();

	// Collapsible Block Toggle Behavior
	const collapsibleBlocks = document.querySelectorAll(".collapsible-block");
	collapsibleBlocks.forEach((block) => {
		const trigger = block.querySelector(".collapsible-trigger");
		const content = block.querySelector(".collapsible-content");

		if (trigger && content) {
			trigger.addEventListener("click", () => {
				const isExpanded = trigger.getAttribute("aria-expanded") === "true";

				// Toggle accessibility attributes
				trigger.setAttribute("aria-expanded", String(!isExpanded));
				content.setAttribute("aria-hidden", String(isExpanded));

				// Toggle visual expanded state
				block.classList.toggle("expanded", !isExpanded);
			});
		}
	});

	initScrollReveal();
});
