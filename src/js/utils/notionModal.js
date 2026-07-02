import { applyWritingFilters } from './filters.js';

export function initStudyModal() {
	const modal = document.getElementById("notesModal");
	if (!modal) return;

	const closeBtn = document.getElementById("modalClose");
	const backdrop = document.getElementById("modalBackdrop");

	document.addEventListener("click", (e) => {
		if (e.target.closest(".study-notion-link")) return;

		const card = e.target.closest(".post-entry[data-category='study-guide']");
		if (!card) return;

		openStudyModal(card.dataset);
	});

	closeBtn.addEventListener("click", closeStudyModal);
	backdrop.addEventListener("click", closeStudyModal);

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && modal.classList.contains("active")) {
			closeStudyModal();
		}
	});
}

function closeStudyModal() {
	const modal = document.getElementById("notesModal");
	if (!modal) return;

	modal.classList.remove("active");
	modal.setAttribute("aria-hidden", "true");
	document.body.style.overflow = "";

	setTimeout(() => {
		const modalBody = document.getElementById("modalBody");
		if (modalBody) modalBody.innerHTML = "";
	}, 400);
}

function openStudyModal(dataset) {
	const modal = document.getElementById("notesModal");

	document.getElementById("modalTag").textContent = dataset.subject;
	document.getElementById("modalTitle").textContent = dataset.title;
	document.getElementById("modalReadingTime").textContent = dataset.readtime;

	const modalBody = document.getElementById("modalBody");
	modalBody.innerHTML = `
		<div id="modalIframeLoader" style="position: absolute; inset: 0; display: flex; flex-direction: column; background: var(--color-bg); z-index: 5; transition: opacity 0.3s ease; padding: var(--space-xl); box-sizing: border-box;">
			<div style="display: flex; align-items: center; gap: 15px; margin-bottom: var(--space-xl);">
				<div class="skeleton-shimmer" style="width: 80px; height: 20px; border-radius: 4px;"></div>
				<div class="skeleton-shimmer" style="width: 140px; height: 16px; border-radius: 4px;"></div>
			</div>
			<div class="skeleton-shimmer" style="width: 70%; height: 35px; border-radius: 6px; margin-bottom: var(--space-lg);"></div>
			<div class="skeleton-shimmer" style="width: 40%; height: 14px; border-radius: 4px; margin-bottom: var(--space-2xl);"></div>
			<div style="display: flex; flex-direction: column; gap: var(--space-md); flex-grow: 1;">
				<div class="skeleton-shimmer" style="width: 100%; height: 16px; border-radius: 4px;"></div>
				<div class="skeleton-shimmer" style="width: 95%; height: 16px; border-radius: 4px;"></div>
				<div class="skeleton-shimmer" style="width: 90%; height: 16px; border-radius: 4px;"></div>
				<div class="skeleton-shimmer" style="width: 60%; height: 16px; border-radius: 4px; margin-bottom: var(--space-md);"></div>
				<div class="skeleton-shimmer" style="width: 100%; height: 16px; border-radius: 4px;"></div>
				<div class="skeleton-shimmer" style="width: 98%; height: 16px; border-radius: 4px;"></div>
				<div class="skeleton-shimmer" style="width: 85%; height: 16px; border-radius: 4px;"></div>
			</div>
		</div>
		<iframe id="modalNoteIframe" src="${dataset.embed}" width="100%" height="100%" style="border: none; width: 100%; height: 100%; display: block; opacity: 0; transition: opacity 0.3s ease; min-height: 500px; background: var(--color-surface);" allowfullscreen></iframe>
	`;

	const iframe = document.getElementById("modalNoteIframe");
	iframe.addEventListener("load", () => {
		const loader = document.getElementById("modalIframeLoader");
		if (loader) {
			loader.style.opacity = "0";
			setTimeout(() => loader.remove(), 300);
		}
		iframe.style.opacity = "1";
	});

	const notionLink = document.getElementById("modalNotionLink");
	notionLink.href = dataset.notion;

	modal.classList.add("active");
	modal.setAttribute("aria-hidden", "false");
	document.body.style.overflow = "hidden";
}

export function initWritingSearch(filterFn) {
	const searchInput = document.getElementById("writingSearch");
	if (!searchInput) return;

	searchInput.addEventListener("input", filterFn);
}
