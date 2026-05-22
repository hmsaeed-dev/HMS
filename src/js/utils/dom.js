/* ── DOM UTILITIES ────────────────────────────────────────── */

export function renderList(containerId, dataArray, buildElement) {
	const container = document.getElementById(containerId);
	if (!container) return;

	const fragment = document.createDocumentFragment();
	dataArray.forEach((item, i) => {
		const el = buildElement(item, i);
		if (el) fragment.appendChild(el);
	});
	container.appendChild(fragment);
}

export function cloneTemplate(id) {
	const template = document.getElementById(id);
	if (!template) return null;
	return template.content.cloneNode(true).firstElementChild;
}

export function getVisibleItems(grid, selector = ".pg-item") {
	return Array.from(grid.querySelectorAll(`${selector}:not(.hidden)`));
}
