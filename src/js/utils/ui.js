/* ── UI UTILITIES ────────────────────────────────────────── */

export function initMobileMenu() {
	const menuToggle = document.getElementById("menuToggle");
	const mobileMenu = document.getElementById("mobileMenu");

	if (!menuToggle || !mobileMenu) return;

	menuToggle.addEventListener("click", () =>
		mobileMenu.classList.toggle("open"),
	);

	document.querySelectorAll(".mobile-link").forEach((link) => {
		link.addEventListener("click", () =>
			mobileMenu.classList.remove("open"),
		);
	});

	document.addEventListener("click", (e) => {
		if (!mobileMenu.classList.contains("open")) return;
		if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
			mobileMenu.classList.remove("open");
		}
	});
}

export function initThemeToggle() {
	const html = document.documentElement;

	function setTheme(theme) {
		html.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}

	let current = localStorage.getItem("theme");
	if (!current) {
		current = window.matchMedia("(prefers-color-scheme: dark)").matches
			? "dark"
			: "light";
	}
	setTheme(current);

	const toggles = document.querySelectorAll(".theme-toggle");
	toggles.forEach((toggle) => {
		toggle.addEventListener("click", () => {
			const currentTheme = html.getAttribute("data-theme");
			const newTheme = currentTheme === "dark" ? "light" : "dark";
			setTheme(newTheme);
		});
	});
}
