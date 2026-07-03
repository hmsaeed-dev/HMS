/* ── MAIN ENTRY POINT (HOME PAGE) ────────────────────────── */

import { initNavigation } from "../components/Navigation.js";
import { initFooter } from "../components/Footer.js";

import { initMobileMenu } from "../utils/ui.js";
import { initScrollReveal, initScrollSpy } from "../utils/scroll.js";
import { renderList, cloneTemplate } from "../utils/dom.js";
import { initLightbox } from "../components/Lightbox.js";
import { throttleRAF } from "../utils/throttle.js";

document.addEventListener("DOMContentLoaded", () => {
	initNavigation({ pathPrefix: "" });
	initFooter({ pathPrefix: "" });

	initMobileMenu();
	initScrollSpy();
    initAtmosphericMotion();

	if (document.getElementById("lightbox")) {
		initLightbox();
	}

	initScrollReveal();
});

function initAtmosphericMotion() {
	const updateScroll = throttleRAF(() => {
		const scrolled = window.pageYOffset;
		document.body.style.setProperty("--scroll-y", scrolled + "px");
	});

	window.addEventListener("scroll", updateScroll, { passive: true });
}
