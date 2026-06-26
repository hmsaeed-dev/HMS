/* ── ACADEMICS PAGE JS ────────────────────────────────────────── */

import { academics, notionNotes } from "./data/index.js";
import { initIcons } from "./components/Icons.js";
import { initNavigation } from "./components/Navigation.js";
import { initFooter } from "./components/Footer.js";

import { initThemeToggle, initMobileMenu } from "./utils/ui.js";
import { initScrollReveal, initScrollSpy } from "./utils/scroll.js";
import { renderList } from "./utils/dom.js";
import { animateCount } from "./utils/animations.js";
import { animateGPA } from "./utils/animations.js";


document.addEventListener("DOMContentLoaded", () => {
	// 1. Inject components (header/footer)
	initIcons();
	initNavigation({ pathPrefix: "../" });
	initFooter({ pathPrefix: "../" });

	// 2. UI Logic
	initThemeToggle();
	initMobileMenu();

	// 3. Render content
	renderLedger(academics);
	renderNotionNotes(notionNotes);
	renderFilters(notionNotes);

	// 4. Initialize Interactive Behaviors
	initNotesSearch();
	initNotesModal();
	initMobileTabs();

	// 5. Animate stats
	animateGPA(document.getElementById("statGPA"), 3.90, 800);
	animateCount(document.getElementById("statNotes"), notionNotes.length, 700);

	// 6. Initialize scroll reveal
	initScrollReveal();
});

// ── Render Functions ────────────────────────────────────────
function renderLedger(data) {
	const body = document.getElementById("ledger-body");
	if (!body) return;

	body.innerHTML = "";
	data.forEach((item) => {
		const tr = document.createElement("tr");

		tr.innerHTML = `
			<td class="ledger-year" data-label="Period">${item.year}</td>
			<td data-label="Qualification">
				<div class="ledger-degree">${item.degree}</div>
				<div style="font-size: var(--fs-300); color: var(--color-text-muted); margin-top: 4px;">
					${item.desc}
				</div>
			</td>
			<td data-label="Institution">${item.school}</td>
			<td data-label="Status"><span class="ledger-badge">${item.badge}</span></td>
		`;
		body.appendChild(tr);
	});
}

function renderNotionNotes(data) {
	const grid = document.getElementById("notesGrid");
	if (!grid) return;

	grid.innerHTML = "";

	if (data.length === 0) {
		document.getElementById("notesEmpty").classList.remove("hidden");
		return;
	} else {
		document.getElementById("notesEmpty").classList.add("hidden");
	}

	data.forEach((note) => {
		const card = document.createElement("div");
		card.className = "note-card reveal";
		card.dataset.subject = note.subjectKey;
		card.dataset.id = note.id;

		card.innerHTML = `
			<div class="note-header">
				<span class="note-subject">${note.subject}</span>
				<span class="note-meta">${note.readTime}</span>
			</div>
			<h3 class="note-title">${note.title}</h3>
			<p class="note-desc">${note.desc}</p>
			<span class="note-view">View</span>
		`;
		grid.appendChild(card);
	});
}

function renderFilters(data) {
	const container = document.getElementById("notesFilters");
	if (!container) return;

	// Extract unique subjects
	const subjects = [];
	const seen = new Set();
	data.forEach(note => {
		if (!seen.has(note.subjectKey)) {
			seen.add(note.subjectKey);
			subjects.push({ key: note.subjectKey, name: note.subject });
		}
	});

	// Append buttons
	subjects.forEach(sub => {
		const btn = document.createElement("button");
		btn.className = "filter-pill";
		btn.dataset.filter = sub.key;
		btn.textContent = sub.name;
		container.appendChild(btn);
	});

	// Click events
	container.addEventListener("click", (e) => {
		const btn = e.target.closest(".filter-pill");
		if (!btn) return;

		container.querySelectorAll(".filter-pill").forEach(b => b.classList.remove("active"));
		btn.classList.add("active");

		filterAndSearchNotes();
	});
}

// ── Search & Filter Logic ────────────────────────────────────

function initNotesSearch() {
	const searchInput = document.getElementById("notesSearch");
	const clearBtn = document.getElementById("searchClear");
	if (!searchInput) return;

	const toggleClearButton = () => {
		if (clearBtn) {
			clearBtn.style.display = searchInput.value.length > 0 ? "block" : "none";
		}
	};

	searchInput.addEventListener("input", () => {
		toggleClearButton();
		filterAndSearchNotes();
	});

	if (clearBtn) {
		clearBtn.addEventListener("click", () => {
			searchInput.value = "";
			clearBtn.style.display = "none";
			filterAndSearchNotes();
			searchInput.focus();
		});
	}
}

function filterAndSearchNotes() {
	const searchVal = document.getElementById("notesSearch").value.toLowerCase();
	const activePill = document.querySelector(".filter-pill.active");
	const subjectFilter = activePill ? activePill.dataset.filter : "all";

	const cards = document.querySelectorAll(".note-card");
	let visibleCount = 0;

	cards.forEach(card => {
		const noteId = card.dataset.id;
		const note = notionNotes.find(n => n.id === noteId);
		if (!note) return;

		const matchesSubject = (subjectFilter === "all" || note.subjectKey === subjectFilter);
		const matchesSearch = (
			note.title.toLowerCase().includes(searchVal) ||
			note.desc.toLowerCase().includes(searchVal) ||
			note.tags.some(tag => tag.toLowerCase().includes(searchVal)) ||
			note.subject.toLowerCase().includes(searchVal)
		);

		if (matchesSubject && matchesSearch) {
			card.classList.remove("hidden");
			card.style.display = "flex";
			visibleCount++;
		} else {
			card.classList.add("hidden");
			card.style.display = "none";
		}
	});

	const emptyMessage = document.getElementById("notesEmpty");
	if (visibleCount === 0) {
		emptyMessage.classList.remove("hidden");
	} else {
		emptyMessage.classList.add("hidden");
	}
}

// ── Modal / Preview Logic ────────────────────────────────────

function initNotesModal() {
	const modal = document.getElementById("notesModal");
	if (!modal) return;

	const closeBtn = document.getElementById("modalClose");
	const backdrop = document.getElementById("modalBackdrop");

	// Open Modal Event Delegation (clicking anywhere on the card, unless it is the external link)
	document.addEventListener("click", (e) => {
		if (e.target.closest(".note-external-link")) {
			// Don't open preview modal if clicking direct link to Notion
			return;
		}

		const card = e.target.closest(".note-card");
		if (!card) return;

		const noteId = card.dataset.id;
		const note = notionNotes.find(n => n.id === noteId);
		if (!note) return;

		openModal(note);
	});

	// Close Modal Events
	closeBtn.addEventListener("click", closeModal);
	backdrop.addEventListener("click", closeModal);

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape" && modal.classList.contains("active")) {
			closeModal();
		}
	});
}

function openModal(note) {
	const modal = document.getElementById("notesModal");

	document.getElementById("modalTag").textContent = note.subject;
	document.getElementById("modalTitle").textContent = note.title;
	document.getElementById("modalReadingTime").textContent = note.readTime;

	// Inject iframe and modern skeleton loader
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
		<iframe id="modalNoteIframe" src="${note.embedUrl}" width="100%" height="100%" style="border: none; width: 100%; height: 100%; display: block; opacity: 0; transition: opacity 0.3s ease; min-height: 500px; background: var(--color-surface);" allowfullscreen></iframe>
	`;

	const iframe = document.getElementById("modalNoteIframe");
	iframe.addEventListener("load", () => {
		const loader = document.getElementById("modalIframeLoader");
		if (loader) {
			loader.style.opacity = "0";
			setTimeout(() => {
				loader.remove();
			}, 300);
		}
		iframe.style.opacity = "1";
	});

	const notionLink = document.getElementById("modalNotionLink");
	notionLink.href = note.notionUrl;

	modal.classList.add("active");
	modal.setAttribute("aria-hidden", "false");
	document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeModal() {
	const modal = document.getElementById("notesModal");
	if (!modal) return;

	modal.classList.remove("active");
	modal.setAttribute("aria-hidden", "true");
	document.body.style.overflow = ""; // Re-enable background scroll

	// Clear iframe to halt background loading and prevent flash on next open
	setTimeout(() => {
		const modalBody = document.getElementById("modalBody");
		if (modalBody) modalBody.innerHTML = "";
	}, 400);
}

function initMobileTabs() {
	const tabsContainer = document.getElementById("mobileTabs");
	if (!tabsContainer) return;

	const tabs = tabsContainer.querySelectorAll(".mobile-tab-btn");
	const sections = {
		"ledger-section": document.getElementById("ledger-section"),
		"notion-hub": document.getElementById("notion-hub")
	};

	function switchTab(targetId) {
		tabs.forEach(btn => {
			btn.classList.toggle("active", btn.dataset.target === targetId);
		});

		Object.keys(sections).forEach(id => {
			const section = sections[id];
			if (!section) return;

			if (window.innerWidth <= 768) {
				if (id === targetId) {
					section.style.display = "block";
				} else {
					section.style.display = "none";
				}
			} else {
				section.style.display = ""; // Reset display on desktop
			}
		});
	}

	tabsContainer.addEventListener("click", (e) => {
		const btn = e.target.closest(".mobile-tab-btn");
		if (!btn) return;
		switchTab(btn.dataset.target);
	});

	// Handle window resize
	window.addEventListener("resize", () => {
		if (window.innerWidth > 768) {
			Object.values(sections).forEach(section => {
				if (section) section.style.display = "";
			});
		} else {
			const activeBtn = tabsContainer.querySelector(".mobile-tab-btn.active");
			if (activeBtn) switchTab(activeBtn.dataset.target);
		}
	});

	// Set initial state for mobile view
	if (window.innerWidth <= 768) {
		const activeBtn = tabsContainer.querySelector(".mobile-tab-btn.active") || tabs[0];
		if (activeBtn) switchTab(activeBtn.dataset.target);
	}
}
