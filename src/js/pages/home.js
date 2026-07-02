/* ── MAIN ENTRY POINT (HOME PAGE) ────────────────────────── */

import { projects } from "../data/index.js";
import { initNavigation } from "../components/Navigation.js";
import { initFooter } from "../components/Footer.js";

import { initThemeToggle, initMobileMenu } from "../utils/ui.js";
import { initScrollReveal, initScrollSpy } from "../utils/scroll.js";
import { renderList, cloneTemplate } from "../utils/dom.js";
import { initLightbox } from "../components/Lightbox.js";
import { throttleRAF } from "../utils/throttle.js";

document.addEventListener("DOMContentLoaded", () => {
	initNavigation({ pathPrefix: "" });
	initFooter({ pathPrefix: "" });

	initThemeToggle();
	initMobileMenu();
	initScrollSpy();
    initAtmosphericMotion();

	if (document.getElementById("lightbox")) {
		initLightbox();
	}

	renderProjects(projects);

	initScrollReveal();
});

function initAtmosphericMotion() {
	const updateScroll = throttleRAF(() => {
		const scrolled = window.pageYOffset;
		document.body.style.setProperty("--scroll-y", scrolled + "px");
	});

	window.addEventListener("scroll", updateScroll, { passive: true });
}

function renderProjects(data) {
	renderList("projects-grid", data, (p, i) => {
		const card = cloneTemplate("tpl-project-card");
		if (!card) return null;

		card.style.setProperty("--delay", i * 0.08 + "s");
		card.querySelector("img").src = p.img;
		card.querySelector("img").alt = p.title;
		card.querySelector(".project-title").textContent = p.title;
		card.querySelector(".project-desc").textContent = p.desc;
		const demoLink = card.querySelector(".demo-link");
		demoLink.href = p.demo;
		demoLink.target = "_blank";
		demoLink.rel = "noopener noreferrer";
		const codeLink = card.querySelector(".code-link");
		codeLink.href = p.code;
		codeLink.target = "_blank";
		codeLink.rel = "noopener noreferrer";

		return card;
	});
}
