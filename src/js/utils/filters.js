/* ── PAGE FILTER UTILITIES ──────────────────────────────────── */

export function initWorkFilters() {
	const filterBar = document.querySelector('.work-filter-bar');
	if (!filterBar) return;

	const buttons = filterBar.querySelectorAll('.work-filter-btn');
	const cards = document.querySelectorAll('.work-card');

	buttons.forEach((btn) => {
		btn.addEventListener('click', () => {
			const filter = btn.dataset.filter;

			buttons.forEach((b) => b.classList.remove('active'));
			btn.classList.add('active');

			cards.forEach((card) => {
				if (filter === 'all' || card.dataset.category === filter) {
					card.removeAttribute('style');
				} else {
					card.style.display = 'none';
				}
			});
		});
	});
}

export function initWritingFilters() {
	const toolbar = document.querySelector('.archive-toolbar');
	if (!toolbar) return;

	const chips = toolbar.querySelectorAll('.archive-chip');
	const entries = document.querySelectorAll('.post-entry');

	chips.forEach((chip) => {
		chip.addEventListener('click', () => {
			const filter = chip.dataset.filter;

			chips.forEach((c) => {
				c.classList.remove('active');
				c.setAttribute('aria-selected', 'false');
			});
			chip.classList.add('active');
			chip.setAttribute('aria-selected', 'true');

			entries.forEach((entry) => {
				if (filter === 'all' || entry.dataset.category === filter) {
					entry.removeAttribute('style');
				} else {
					entry.style.display = 'none';
				}
			});
		});
	});
}
