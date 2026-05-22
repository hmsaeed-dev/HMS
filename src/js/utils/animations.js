/* ── ANIMATION UTILITIES ────────────────────────────────────────── */

export function animateCount(el, target, duration = 900) {
	if (!el) return;
	const start = performance.now();
	const update = (now) => {
		const p = Math.min((now - start) / duration, 1);
		el.textContent = Math.round(p * target);
		if (p < 1) requestAnimationFrame(update);
	};
	requestAnimationFrame(update);
}
