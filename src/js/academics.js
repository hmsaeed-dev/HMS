/* ── ACADEMICS PAGE JS ────────────────────────────────────────── */

import { initNavigation } from "./components/Navigation.js";
import { initFooter } from "./components/Footer.js";

import { initThemeToggle, initMobileMenu } from "./utils/ui.js";
import { initScrollReveal } from "./utils/scroll.js";
import { animateGPA } from "./utils/animations.js";


document.addEventListener("DOMContentLoaded", () => {
	// 1. Inject components (header/footer)
	initNavigation({ pathPrefix: "../" });
	initFooter({ pathPrefix: "../" });

	// 2. UI Logic
	initThemeToggle();
	initMobileMenu();

	// 3. Animate stats
	animateGPA(document.getElementById("statGPA"), 3.90, 800);

	// 4. Initialize scroll reveal
	initScrollReveal();
});
