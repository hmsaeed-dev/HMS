/* ── NAVIGATION COMPONENT ────────────────────────────────────────── */

import { initBackToTop } from "./BackToTop.js";

/**
 * Injects the navigation bar and mobile menu.
 * @param {Object} options
 * @param {string} options.pathPrefix - Prefix for links (e.g. '../')
 */
export function initNavigation({ pathPrefix = "" } = {}) {
	const navHTML = `
    <nav aria-label="Main">
        <div class="container nav-inner">
            <a href="${pathPrefix}index.html" class="nav-logo">HMS</a>

            <div class="nav-links">
                <a href="${pathPrefix}story/index.html">Story</a>
                <a href="${pathPrefix}work/index.html">Work</a>
                <a href="${pathPrefix}writing/index.html">Writing</a>
                <a href="${pathPrefix}photography/index.html">Photography</a>
                <a href="${pathPrefix}now/index.html">Now</a>
                <a href="${pathPrefix}connect/index.html">Connect</a>

                <a class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                    <svg class="icon sun-icon"><use href="#icon-sun"/></svg>
                    <svg class="icon moon-icon"><use href="#icon-moon"/></svg>
                </a>
            </div>

            <button class="nav-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobileMenu">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>

    <div class="mobile-menu" id="mobileMenu" role="navigation" aria-label="Mobile Navigation">
        <a href="${pathPrefix}story/index.html" class="mobile-link">
            <svg class="icon"><use href="#icon-user"/></svg>
            Story
        </a>
        <a href="${pathPrefix}work/index.html" class="mobile-link">
            <svg class="icon"><use href="#icon-code"/></svg>
            Work
        </a>
        <a href="${pathPrefix}writing/index.html" class="mobile-link">
            <svg class="icon"><use href="#icon-book"/></svg>
            Writing
        </a>
        <a href="${pathPrefix}photography/index.html" class="mobile-link">
            <svg class="icon"><use href="#icon-camera"/></svg>
            Photography
        </a>
        <a href="${pathPrefix}now/index.html" class="mobile-link">
            <svg class="icon"><use href="#icon-clock"/></svg>
            Now
        </a>
        <a href="${pathPrefix}connect/index.html" class="mobile-link">
            <svg class="icon"><use href="#icon-mail"/></svg>
            Connect
        </a>
        <a class="mobile-link theme-toggle" id="themeToggleMobile">
            <div class="theme-icon-container">
                <svg class="icon sun-icon"><use href="#icon-sun"/></svg>
                <svg class="icon moon-icon"><use href="#icon-moon"/></svg>
            </div>
            Theme
        </a>
    </div>
    `;

	// 1. Inject the HTML into the body
	document.body.insertAdjacentHTML("afterbegin", navHTML);

	// ── Intelligent Active Link Detection ────────────────────
	const currentURL = window.location.href.split("#")[0].split("?")[0];
	const allLinks = document.querySelectorAll(".nav-links a, .mobile-link");

	allLinks.forEach((link) => {
		if (!link.href) return;
		const linkURL = link.href.split("#")[0].split("?")[0];

		// If the page URL matches, set active.
		if (linkURL === currentURL && (!link.hash || link.hash === "#about")) {
			link.classList.add("active");
			if (!link.hash) link.setAttribute("aria-current", "page");
		}
	});

	// ── Scroll Behavior (Hide on Scroll Down) ────────────────
	const nav = document.querySelector("nav");
	const mobileMenu = document.getElementById("mobileMenu");
	let lastScrollY = window.scrollY;

	window.addEventListener(
		"scroll",
		() => {
			const currentScrollY = window.scrollY;
			const isMenuOpen = mobileMenu?.classList.contains("open");

			if (Math.abs(currentScrollY - lastScrollY) < 10) return;

			if (
				currentScrollY > lastScrollY &&
				currentScrollY > 100 &&
				!isMenuOpen
			) {
				nav.classList.add("nav-hidden");
			} else {
				nav.classList.remove("nav-hidden");
			}

			lastScrollY = Math.max(0, currentScrollY);
		},
		{ passive: true },
	);

	// Automate: Every page with navigation now gets the Back to Top button
	initBackToTop();
}
