/* ── ACADEMICS PAGE JS ────────────────────────────────────────── */

import { academics, notionNotes, societies } from "./data/index.js";
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
	renderSocieties(societies);

	// 4. Initialize Interactive Behaviors
	initNotesSearch();
	initNotesModal();

	// 5. Animate stats
	animateGPA(document.getElementById("statGPA"), 3.90, 1000);
	animateCount(document.getElementById("statNotes"), notionNotes.length, 800);
	animateCount(document.getElementById("statSocieties"), societies.length, 800);

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

		// Badge Class Map
		let badgeClass = "in-progress";
		if (item.badge.includes("Distinction")) badgeClass = "distinction";
		else if (item.badge.includes("Grade A")) badgeClass = "grade-a";

		tr.innerHTML = `
			<td class="ledger-year">${item.year}</td>
			<td>
				<div class="ledger-degree">${item.degree}</div>
				<div style="font-size: var(--fs-300); color: var(--color-text-muted); margin-top: 4px;">
					${item.desc}
				</div>
			</td>
			<td>${item.school}</td>
			<td><span class="ledger-badge ${badgeClass}">${item.badge}</span></td>
			<td style="font-style: italic; font-size: var(--fs-300); max-width: 250px;">${item.focus}</td>
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

		const tagsHtml = note.tags.map(tag => `<span class="note-tag">#${tag}</span>`).join("");

		card.innerHTML = `
			<div class="note-header">
				<span class="note-subject">${note.subject}</span>
				<span class="note-meta">${note.readTime}</span>
			</div>
			<h3 class="note-title">${note.title}</h3>
			<p class="note-desc">${note.desc}</p>
			<div class="note-actions">
				<button class="btn btn-olive btn-preview" data-id="${note.id}">Quick Preview</button>
				<a href="${note.notionUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
					Notion ↗
				</a>
			</div>
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

function renderSocieties(data) {
	const grid = document.getElementById("societiesGrid");
	if (!grid) return;

	grid.innerHTML = "";
	data.forEach((soc) => {
		const card = document.createElement("div");
		card.className = "society-card reveal";

		card.innerHTML = `
			<div class="society-logo">${soc.logoText}</div>
			<div class="society-body">
				<h3 class="society-role">${soc.role}</h3>
				<div class="society-org">${soc.organization}</div>
				<div class="society-period">${soc.period}</div>
				<p class="society-desc">${soc.desc}</p>
			</div>
		`;
		grid.appendChild(card);
	});
}

// ── Search & Filter Logic ────────────────────────────────────

function initNotesSearch() {
	const searchInput = document.getElementById("notesSearch");
	if (!searchInput) return;

	searchInput.addEventListener("input", () => {
		filterAndSearchNotes();
	});
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

	// Open Modal Event Delegation
	document.addEventListener("click", (e) => {
		const previewBtn = e.target.closest(".btn-preview");
		if (!previewBtn) return;

		const noteId = previewBtn.dataset.id;
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
	document.getElementById("modalDate").textContent = note.updated;
	document.getElementById("modalReadingTime").textContent = note.readTime;

	// Inject iframe and loader
	const modalBody = document.getElementById("modalBody");
	modalBody.innerHTML = `
		<div id="modalIframeLoader" style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 15px; background: var(--color-bg); z-index: 5; color: var(--color-text-muted); transition: opacity 0.3s ease;">
			<div class="pulse-dot"></div>
			<div style="font-family: 'DM Sans', sans-serif; font-size: var(--fs-300); font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-accent);">
				Loading Notion Note...
			</div>
		</div>
		<iframe id="modalNoteIframe" src="${note.embedUrl}" width="100%" height="100%" style="border: none; width: 100%; height: 100%; display: block; opacity: 0; transition: opacity 0.3s ease; min-height: 500px;" allowfullscreen></iframe>
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
