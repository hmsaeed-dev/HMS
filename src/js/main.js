/* ── MAIN ENTRY POINT (HOME PAGE) ────────────────────────── */

import { projects, academics} from "./data/index.js";
import { initNavigation } from "./components/Navigation.js";
import { initFooter } from "./components/Footer.js";

import { initThemeToggle, initMobileMenu } from "./utils/ui.js";
import { initScrollReveal, initScrollSpy } from "./utils/scroll.js";
import { renderList, cloneTemplate } from "./utils/dom.js";
import { initLightbox } from "./components/Lightbox.js";
import { throttleRAF } from "./utils/throttle.js";

// ── Initialization ──────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
	// 1. Inject Components
	initNavigation({ pathPrefix: "" });
	initFooter({ pathPrefix: "" });

	// 2. UI Logic (Must run after injection)
	initThemeToggle();
	initMobileMenu();
	initScrollSpy();
    initAtmosphericMotion();

	// Only initialize Lightbox if the container exists in DOM
	if (document.getElementById("lightbox")) {
		initLightbox();
	}

	// 3. Rendering Data
	// Render dynamic content first
	renderProjects(projects);
	renderAcademics(academics);

	// 4. Initialize scroll reveal AFTER all content is rendered
	initScrollReveal();
});

// ── Render Functions ────────────────────────────────────────

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

function renderAcademics(data) {
	renderList("academic-list", data, (a) => {
		const item = cloneTemplate("tpl-academic-item");
		if (!item) return null;

		item.querySelector(".academic-year").textContent = a.year;
		item.querySelector(".academic-degree").textContent = a.degree;
		item.querySelector(".academic-school").textContent = a.school;
		item.querySelector(".academic-badge").textContent = a.badge;

		return item;
	});
}
