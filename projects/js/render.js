/* ── PROJECTS RENDERER ───────────────────────────────────── */

import { renderList, cloneTemplate } from "../../home/js/utils.js";

/**
 * Renders all case studies into the container
 */
export function renderCaseStudies(studies, containerId) {
	renderList(containerId, studies, (study) => {
		const el = cloneTemplate("tpl-case-study");
		if (!el) return null;

		el.dataset.category = study.tag;

		if (study.isPlaceholder) {
			el.classList.add("is-teaser");
		}

		el.querySelector(".cs-tag").textContent = study.tag;
		el.querySelector(".cs-sidebar-title").textContent = study.title;
		el.querySelector(".cs-sidebar-desc").textContent = study.shortDesc;

		// Tech Stack
		const techList = el.querySelector(".cs-tech-list");
		if (study.techStack && study.techStack.length > 0) {
			study.techStack.forEach((tech) => {
				const span = document.createElement("span");
				span.className = "cs-tech-item";
				span.textContent = tech;
				techList.appendChild(span);
			});
		} else {
			techList.style.display = "none";
		}

		// Links
		const linksContainer = el.querySelector(".project-links");
		if (study.links && study.links.source) {
			const sourceBtn = linksContainer.querySelector(".btn-source");
            if (sourceBtn) sourceBtn.href = study.links.source;
		} else {
			linksContainer.style.display = "none";
		}

		// Content Sections
		const contentArea = el.querySelector(".cs-content");
		if (study.sections && study.sections.length > 0) {
			study.sections.forEach((sec) => {
				// Heading
				const h4 = document.createElement("h4");
				h4.textContent = sec.heading;
				contentArea.appendChild(h4);

				// Paragraph
				const p = document.createElement("p");
				p.innerHTML = sec.content;
				contentArea.appendChild(p);

				// Optional Diagram
				if (sec.diagram) {
					const diag = document.createElement("div");
					diag.className = "cs-diagram";
					diag.innerHTML = sec.diagram;
					contentArea.appendChild(diag);
				}

				// Optional Code
				if (sec.code) {
					const pre = document.createElement("div");
					pre.className = "cs-code-preview";
					pre.textContent = sec.code;
					contentArea.appendChild(pre);
				}
			});
		} else if (study.isPlaceholder) {
            contentArea.innerHTML = `<p style="font-style: italic; color: var(--ink-40); margin-top: 2rem;">Full case study and technical breakdown coming soon.</p>`;
        }

		return el;
	});
}

/**
 * Renders the filter buttons
 */
export function renderFilters(studies) {
    const categories = ["all", ...new Set(studies.map(s => s.tag).filter(Boolean))];
    const filterContainer = document.querySelector(".cs-filter-left");
    if (!filterContainer) return;

    // Keep the "Filter by" label
    const label = filterContainer.querySelector(".cs-filter-label");
    filterContainer.innerHTML = "";
    if (label) filterContainer.appendChild(label);

    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.className = "cs-filter-btn" + (cat === "all" ? " active" : "");
        btn.dataset.filter = cat;
        
        const count = cat === "all" 
            ? studies.length 
            : studies.filter(s => s.tag === cat).length;
            
        btn.innerHTML = `${cat === "all" ? "All" : cat} <span class="count">${count}</span>`;
        filterContainer.appendChild(btn);
    });
}

/**
 * Updates the visible count text
 */
export function updateCount(containerId, countId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const countEl = document.getElementById(countId);
    if (!countEl) return;

    const visibleItems = container.querySelectorAll(".case-study:not(.hidden)");
    countEl.textContent = visibleItems.length;
}
