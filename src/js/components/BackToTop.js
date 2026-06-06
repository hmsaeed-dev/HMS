/* ── BACK TO TOP COMPONENT ─────────────────────────────────────── */

export function initBackToTop() {
	// 1. Inject the HTML into the bottom of the body
	const btnHTML = `
	<button id="backToTop" class="back-to-top" aria-label="Back to top">
	<svg class="icon"><use href="#icon-arrow-up"/></svg>
	</button>
	`;
	document.body.insertAdjacentHTML("beforeend", btnHTML);

	const btn = document.getElementById("backToTop");
	if (!btn) return;

	// 2. Add visibility logic
	function handleScroll() {
		const scrolled = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
		btn.classList.toggle("visible", scrolled > 400);
	}

	window.addEventListener("scroll", handleScroll, { passive: true });

	// 3. Add scroll behavior
	btn.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

    // Initial check
    handleScroll();
}
