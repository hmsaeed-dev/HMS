/* ── THROTTLE UTILITY ─────────────────────────────────────────── */
/* Throttle function using requestAnimationFrame for smooth performance */

export function throttleRAF(callback) {
	let ticking = false;

	return function throttled(...args) {
		if (!ticking) {
			requestAnimationFrame(() => {
				callback.apply(this, args);
				ticking = false;
			});
			ticking = true;
		}
	};
}
