/* ── Photography PAGE JS ────────────────────────────────────────── */

import { photos } from "../data/index.js";
import { initNavigation } from "../components/Navigation.js";
import { initFooter } from "../components/Footer.js";

import { initThemeToggle, initMobileMenu } from "../utils/ui.js";
import { initScrollReveal, initScrollSpy } from "../utils/scroll.js";
import { getVisibleItems } from "../utils/dom.js";
import { animateCount } from "../utils/animations.js";
import { initLightbox } from "../components/Lightbox.js";

document.addEventListener("DOMContentLoaded", () => {
	initNavigation({ pathPrefix: "../" });
	initFooter({ pathPrefix: "../" });

	initThemeToggle();
	initMobileMenu();

	const heroBg = document.getElementById("heroBg");
	const heroBgPhoto = photos.find((p) => p.category === "Flora") || photos[0];
	if (heroBgPhoto && heroBg) {
		heroBg.style.backgroundImage = `url('${heroBgPhoto.src}')`;
		setTimeout(() => heroBg.classList.add("loaded"), 100);
	}

	animateCount(document.getElementById("statTotal"), photos.length);
	animateCount(
		document.getElementById("statCats"),
		new Set(photos.map((p) => p.category).filter(Boolean)).size,
		700,
	);

	const grid = document.getElementById("pgGrid");
	const visibleCount = document.getElementById("visibleCount");
	const pgEmpty = document.getElementById("pgEmpty");

	renderFilters(photos);
	renderGrid(grid, photos);
	updateVisibleCount(grid, visibleCount, pgEmpty);

	const viewSwitcher = document.getElementById("viewSwitcher");
	const savedView = localStorage.getItem("pgView") || "rhythm";

	function setView(view) {
		grid.dataset.view = view;
		localStorage.setItem("pgView", view);

		viewSwitcher.querySelectorAll(".pg-view-btn").forEach((btn) => {
			btn.classList.toggle("active", btn.dataset.view === view);
		});
	}

	if (viewSwitcher) {
		setView(savedView);
		viewSwitcher.addEventListener("click", (e) => {
			const btn = e.target.closest(".pg-view-btn");
			if (!btn) return;
			setView(btn.dataset.view);
		});
	}

	document.querySelector(".pg-filter-left").addEventListener("click", (e) => {
		const btn = e.target.closest(".pg-filter-btn");
		if (!btn) return;

		document
			.querySelectorAll(".pg-filter-btn")
			.forEach((b) => b.classList.remove("active"));
		btn.classList.add("active");

		const filter = btn.dataset.filter;
		grid.querySelectorAll(".pg-item").forEach((item) => {
			const match = filter === "all" || item.dataset.category === filter;
			item.classList.toggle("hidden", !match);
		});

		updateVisibleCount(grid, visibleCount, pgEmpty);
	});

	const openLightbox = initLightbox();
	if (grid && openLightbox) {
		grid.addEventListener("click", (e) => {
			const item = e.target.closest(".pg-item");
			if (!item) return;

			const allItems = Array.from(
				grid.querySelectorAll(".pg-item:not(.hidden)"),
			);
			const index = allItems.indexOf(item);

			const photoData = photos[parseInt(item.dataset.index)];
			const visiblePhotos = allItems.map(el => photos[parseInt(el.dataset.index)]);

			openLightbox(photoData.src, photoData.caption, index, visiblePhotos);
		});
	}

	initScrollSpy();
	initScrollReveal();
});

function renderFilters(data) {
	const filterLeft = document.querySelector(".pg-filter-left");
	if (!filterLeft) return;

	const cats = [
		"all",
		...new Set(data.map((p) => p.category).filter(Boolean)),
	];

	cats.forEach((cat) => {
		const btn = document.createElement("button");
		btn.className = "pg-filter-btn" + (cat === "all" ? " active" : "");
		btn.dataset.filter = cat;
		const label = cat === "all" ? "All" : cat;
		btn.innerHTML = label;
		filterLeft.appendChild(btn);
	});
}

function renderGrid(grid, data) {
	if (!grid) return;
	grid.innerHTML = "";

	data.forEach((photo, i) => {
		const item = document.createElement("div");
		item.className = "pg-item reveal";
		item.dataset.category = photo.category || "";
		item.dataset.index = i;
		item.dataset.src = photo.src;
		item.dataset.caption = photo.caption;

		if (photo.width && photo.height) {
			item.style.aspectRatio = `${photo.width} / ${photo.height}`;
		}

		item.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}"
				 loading="${i < 6 ? "eager" : "lazy"}"
				 onload="this.classList.add('loaded'); this.parentElement.classList.add('is-loaded'); this.parentElement.style.aspectRatio = 'auto';">
            <div class="pg-overlay">
                <div class="pg-overlay-caption">${photo.caption}</div>
                ${photo.desc ? `<div class="pg-overlay-desc">${photo.desc}</div>` : ""}
            </div>
        `;
		grid.appendChild(item);
	});
}

function updateVisibleCount(grid, visibleCountEl, pgEmpty) {
	const visible = getVisibleItems(grid, ".pg-item").length;
	if (visibleCountEl) visibleCountEl.textContent = visible;
	if (pgEmpty) pgEmpty.classList.toggle("show", visible === 0);
}
