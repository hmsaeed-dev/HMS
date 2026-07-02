/* ── ACADEMICS PAGE JS ────────────────────────────────────────── */

import { initNavigation } from "../components/Navigation.js";
import { initFooter } from "../components/Footer.js";

import { initThemeToggle, initMobileMenu } from "../utils/ui.js";
import { initScrollReveal } from "../utils/scroll.js";
import { animateGPA } from "../utils/animations.js";


document.addEventListener("DOMContentLoaded", () => {
	initNavigation({ pathPrefix: "../" });
	initFooter({ pathPrefix: "../" });

	initThemeToggle();
	initMobileMenu();

	animateGPA(document.getElementById("statGPA"), 3.90, 800);

	initScrollReveal();
});
