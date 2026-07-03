/* ── UI UTILITIES ────────────────────────────────────────── */

export function initMobileMenu() {
	const menuToggle = document.getElementById("menuToggle");
	const mobileMenu = document.getElementById("mobileMenu");

	if (!menuToggle || !mobileMenu) return;

	menuToggle.addEventListener("click", () => {
		const isOpen = mobileMenu.classList.toggle("open");
		menuToggle.setAttribute("aria-expanded", isOpen);

		// Move focus to first link when opened for immediate accessibility
		if (isOpen) {
			setTimeout(
				() => mobileMenu.querySelector(".mobile-link")?.focus(),
				100,
			);
		}
	});

	// ── Keyboard Trap Logic ──────────────────────────────────
	document.addEventListener("keydown", (e) => {
		if (e.key !== "Tab" || !mobileMenu.classList.contains("open")) return;

		const focusableElements = [
			menuToggle,
			...mobileMenu.querySelectorAll(".mobile-link"),
		];
		const firstElement = focusableElements[0];
		const lastElement = focusableElements[focusableElements.length - 1];

		if (e.shiftKey) {
			// Shift + Tab (Backward)
			if (document.activeElement === firstElement) {
				lastElement.focus();
				e.preventDefault();
			}
		} else {
			// Tab (Forward)
			if (document.activeElement === lastElement) {
				firstElement.focus();
				e.preventDefault();
			}
		}
	});

	document.querySelectorAll(".mobile-link").forEach((link) => {
		link.addEventListener("click", () => {
			mobileMenu.classList.remove("open");
			menuToggle.setAttribute("aria-expanded", "false");
		});
	});

	document.addEventListener("click", (e) => {
		if (!mobileMenu.classList.contains("open")) return;
		if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
			mobileMenu.classList.remove("open");
			menuToggle.setAttribute("aria-expanded", "false");
		}
	});
}
