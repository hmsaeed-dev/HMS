export function applyWritingFilters() {
	const searchInput = document.getElementById("writingSearch");
	const query = searchInput ? searchInput.value.toLowerCase() : "";

	const activeChip = document.querySelector(".archive-chip.active");
	const categoryFilter = activeChip ? activeChip.dataset.filter : "all";

	const entries = document.querySelectorAll(".post-entry");

	entries.forEach((entry) => {
		const matchesCategory = (categoryFilter === "all" || entry.dataset.category === categoryFilter);
		const text = entry.textContent.toLowerCase();
		const matchesSearch = (query === "" || text.includes(query));

		if (matchesCategory && matchesSearch) {
			entry.removeAttribute("style");
		} else {
			entry.style.display = "none";
		}
	});
}

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

	chips.forEach((chip) => {
		chip.addEventListener('click', () => {
			chips.forEach((c) => {
				c.classList.remove('active');
				c.setAttribute('aria-selected', 'false');
			});
			chip.classList.add('active');
			chip.setAttribute('aria-selected', 'true');

			applyWritingFilters();
		});
	});
}
