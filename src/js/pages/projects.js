/* ── PROJECTS PAGE REDESIGN JS ────────────────────────────────────────── */

import { caseStudies } from "../data/caseStudies.js";
import { photos } from "../data/photos.js";

import { initNavigation } from "../components/Navigation.js";
import { initFooter } from "../components/Footer.js";

import { initThemeToggle, initMobileMenu } from "../utils/ui.js";
import { initScrollReveal, initScrollSpy } from "../utils/scroll.js";
import { renderList, cloneTemplate } from "../utils/dom.js";
import { animateCount } from "../utils/animations.js";

document.addEventListener("DOMContentLoaded", () => {
	initNavigation({ pathPrefix: "../" });
	initFooter({ pathPrefix: "../" });

	initThemeToggle();
	initMobileMenu();
	initScrollSpy();

	let currentView = "case-studies";

	renderCaseStudiesView(caseStudies);
	renderGridShowcaseView(projects);

	const caseStudiesContainer = document.getElementById(
		"case-studies-container",
	);
	if (caseStudiesContainer) {
		caseStudiesContainer.addEventListener("click", (e) => {
			const btn = e.target.closest(".cs-tab-btn");
			if (!btn) return;

			const card = btn.closest(".case-study");
			if (!card) return;

			card.querySelectorAll(".cs-tab-btn").forEach((b) => {
				b.classList.remove("active");
				b.setAttribute("aria-selected", "false");
			});

			btn.classList.add("active");
			btn.setAttribute("aria-selected", "true");

			const targetTab = btn.dataset.tab;
			card.querySelectorAll(".cs-tab-content").forEach((c) => {
				c.classList.remove("active");
				if (c.dataset.tab === targetTab) {
					c.classList.add("active");
				}
			});
		});
	}

	const viewSwitcher = document.getElementById("viewSwitcher");
	if (viewSwitcher) {
		viewSwitcher.addEventListener("click", (e) => {
			const btn = e.target.closest(".cs-switch-btn");
			if (!btn) return;

			document
				.querySelectorAll(".cs-switch-btn")
				.forEach((b) => b.classList.remove("active"));
			btn.classList.add("active");

			const selectedView = btn.dataset.view;
			if (selectedView === currentView) return;

			currentView = selectedView;

			const caseStudiesView = document.getElementById(
				"case-studies-container",
			);
			const gridShowcaseView = document.getElementById(
				"projects-grid-container",
			);

			if (currentView === "case-studies") {
				caseStudiesView.classList.remove("hidden");
				gridShowcaseView.classList.add("hidden");
			} else {
				caseStudiesView.classList.add("hidden");
				gridShowcaseView.classList.remove("hidden");
			}

			filterAndRender();

			if (window.ScrollReveal) {
				window.ScrollReveal().sync();
			}
		});
	}

	const totalBuilds = projects.length;
	const allTech = new Set([
		...caseStudies.flatMap((s) => s.techStack || []),
		"C++17",
		"Local Storage",
		"Intersection Observer",
	]);

	animateCount(document.getElementById("statProjects"), totalBuilds, 800);
	animateCount(document.getElementById("statTech"), allTech.size, 1000);
	animateCount(document.getElementById("statMetrics"), 100, 1200);

	setTimeout(() => {
		initScrollReveal();
	}, 100);
});

function renderCaseStudiesView(data) {
	const container = document.getElementById("case-studies-container");
	if (!container) return;
	container.innerHTML = "";

	data.forEach((study) => {
		const item = cloneTemplate("tpl-case-study");
		if (!item) return;

		item.dataset.category = study.category;
		item.querySelector(".cs-sidebar-title").textContent = study.title;
		item.querySelector(".cs-sidebar-desc").textContent = study.shortDesc;

		const mSpecs = item.querySelector(".m-specs");
		(study.metrics || []).forEach((spec) => {
			const makeBadge = () => {
				const badge = document.createElement("div");
				badge.className = "cs-spec-badge";
				badge.innerHTML = `
                    <span class="cs-spec-val">${spec.value}</span>
                    <span class="cs-spec-lbl">${spec.label}</span>
                `;
				return badge;
			};
			if (mSpecs) mSpecs.appendChild(makeBadge());
		});

		const dTech = item.querySelector(".d-tech");
		const mTech = item.querySelector(".m-tech");
		(study.techStack || []).forEach((tech) => {
			const makeBadge = () => {
				const span = document.createElement("span");
				span.className = "tech-badge";
				span.textContent = tech;
				return span;
			};
			if (dTech) dTech.appendChild(makeBadge());
			if (mTech) mTech.appendChild(makeBadge());
		});

		const linksWrap = item.querySelector(".cs-links-wrap");
		linksWrap.innerHTML = "";
		if (study.links?.source) {
			linksWrap.innerHTML += `
                <a href="${study.links.source}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
                    <svg class="icon icon-md"><use href="/src/icons/sprite.svg#icon-github"/></svg>
                    <span>Source Code</span>
                </a>
            `;
		}
		if (study.links?.demo) {
			linksWrap.innerHTML += `
                <a href="${study.links.demo}" class="btn btn-olive" target="_blank" rel="noopener noreferrer">
                    <svg class="icon icon-md"><use href="/src/icons/sprite.svg#icon-external"/></svg>
                    <span>Demo</span>
                </a>
            `;
		}

		const briefContainer = item.querySelector(".cs-brief-sections");
		const archContainer = item.querySelector(".cs-architecture-sections");

		(study.sections || []).forEach((sec) => {
			const div = document.createElement("div");
			div.className = "cs-section";
			div.innerHTML = `
                <h3>${sec.heading}</h3>
                <p>${sec.content}</p>
            `;

			const isBrief =
				sec.heading === "The Challenge" ||
				sec.heading.toLowerCase().includes("retrospective");
			if (isBrief && briefContainer) {
				briefContainer.appendChild(div);
			} else if (archContainer) {
				archContainer.appendChild(div);
			}
		});

		const widgetBox = item.querySelector("#widget-container");
		if (widgetBox) {
			widgetBox.id = `widget-${study.id}`;
			initializeInteractiveWidget(study.id, widgetBox);
		}

		container.appendChild(item);
	});
}

function renderGridShowcaseView(data) {
	const grid = document.getElementById("projects-grid");
	if (!grid) return;
	grid.innerHTML = "";

	data.forEach((proj) => {
		const card = cloneTemplate("tpl-project-card");
		if (!card) return;

		let category = "web";
		if (proj.tag === "C++ OOP") category = "systems";
		if (proj.tag === "Observance") category = "creative";
		card.dataset.category = category;

		card.querySelector(".project-img-wrap img").src =
			proj.img || "src/images/vms-pic.jpg";
		card.querySelector(".project-img-wrap img").alt = proj.title;
		card.querySelector(".project-title").textContent = proj.title;
		card.querySelector(".project-desc").textContent = proj.desc;

		const linksBox = card.querySelector(".project-links");
		linksBox.innerHTML = "";

		if (proj.code) {
			linksBox.innerHTML += `
                <a class="project-link code-link" href="${proj.code}" target="_blank" rel="noopener noreferrer">
                    <svg class="icon icon-md"><use href="/src/icons/sprite.svg#icon-code"/></svg>
                    <span>Code</span>
                </a>
            `;
		}
		if (proj.demo) {
			linksBox.innerHTML += `
                <a class="project-link demo-link" href="${proj.demo}" target="_blank" rel="noopener noreferrer">
                    <svg class="icon icon-md"><use href="/src/icons/sprite.svg#icon-external"/></svg>
                    <span>Demo</span>
                </a>
            `;
		}

		grid.appendChild(card);
	});
}

function initializeInteractiveWidget(id, container) {
	if (id === "e-library") {
		renderMVCDiagram(container);
	} else if (id === "vehicle-manag-sys") {
		renderRetroConsole(container);
	} else if (id === "photography-portfolio") {
		renderLensGallery(container);
	}
}

function renderMVCDiagram(container) {
	container.innerHTML = `
        <div class="mvc-widget">
            <h4 class="widget-title">Architectural Dataflow</h4>

            <div class="mvc-diagram-frame">
                <svg class="mvc-connections" width="100%" height="100%">
                    <path class="conn-path path-m-v h-path" d="M 85 145 C 85 210, 455 210, 455 145" fill="none" stroke-width="2" stroke-dasharray="6,6"/>
                    <path class="conn-path path-v-c" d="M 455 80 C 455 30, 270 30, 270 80" fill="none" stroke-width="2" stroke-dasharray="6,6"/>
                    <path class="conn-path path-c-m" d="M 270 80 C 270 30, 85 30, 85 80" fill="none" stroke-width="2" stroke-dasharray="6,6"/>
                    <path class="conn-path path-m-v v-path active" d="M 140 205 L 140 255" fill="none" stroke-width="2" stroke-dasharray="6,6"/>
                    <path class="conn-path path-v-c v-path" d="M 140 285 C 220 285, 220 45, 140 45" fill="none" stroke-width="2" stroke-dasharray="6,6"/>
                    <path class="conn-path path-c-m v-path" d="M 140 85 L 140 135" fill="none" stroke-width="2" stroke-dasharray="6,6"/>
                </svg>

                <div class="mvc-flow-nodes">
                    <button class="mvc-node active" data-node="model" id="node-model">
                        <div class="node-icon-circle"><svg class="icon"><use href="/src/icons/sprite.svg#icon-user"/></svg></div>
                        <span class="node-name">Model</span>
                        <span class="node-sub">State &amp; Persistence</span>
                    </button>

                    <button class="mvc-node" data-node="controller" id="node-controller">
                        <div class="node-icon-circle"><svg class="icon"><use href="/src/icons/sprite.svg#icon-code"/></svg></div>
                        <span class="node-name">Controller</span>
                        <span class="node-sub">Lifecycle &amp; Events</span>
                    </button>

                    <button class="mvc-node" data-node="view" id="node-view">
                        <div class="node-icon-circle"><svg class="icon"><use href="/src/icons/sprite.svg#icon-grid"/></svg></div>
                        <span class="node-name">View</span>
                        <span class="node-sub">DOM Render &amp; Templates</span>
                    </button>
                </div>
            </div>

            <div class="mvc-info-panel" id="mvcInfoPanel">
                <h5 class="mvc-info-title">Model</h5>
                <p class="mvc-info-desc">
                    Encapsulates the application business rules and data models. Listens for calls from the Orchestrator (Controller) and persists book lists and library catalog configurations seamlessly into the browser's LocalStorage API.
                </p>
            </div>
        </div>
    `;

	const nodes = container.querySelectorAll(".mvc-node");
	const panelTitle = container.querySelector(".mvc-info-title");
	const panelDesc = container.querySelector(".mvc-info-desc");

	const nodeData = {
		model: {
			title: "Data & State Management",
			desc: "Encapsulates application business rules and state entities. In House of Wisdom, the model handles books, search indexes, and active collections, synchronizing with the browser's LocalStorage API without direct DOM coupling.",
		},
		controller: {
			title: "Central Orchestrator",
			desc: "Acts as the mediator. It binds user interactions captured by Views (e.g. searching, borrowing, adding a title) and translates them into calls onto the Model. It listens to data changes and calls View updates.",
		},
		view: {
			title: "DOM Interface Abstractor",
			desc: "Responsible for HTML templating and direct DOM tree modifications. Listens for user events and bubbles notifications to the Controller. Views maintain component styling scoped explicitly to keep layouts modular.",
		},
	};

	const connections = container.querySelectorAll(".conn-path");
	connections.forEach((path) => path.classList.remove("active"));
	container
		.querySelectorAll(".path-m-v")
		.forEach((p) => p.classList.add("active"));

	nodes.forEach((node) => {
		node.addEventListener("click", () => {
			nodes.forEach((n) => n.classList.remove("active"));
			node.classList.add("active");

			const key = node.dataset.node;

			connections.forEach((path) => path.classList.remove("active"));
			if (key === "model") {
				container
					.querySelectorAll(".path-m-v")
					.forEach((p) => p.classList.add("active"));
			} else if (key === "view") {
				container
					.querySelectorAll(".path-v-c")
					.forEach((p) => p.classList.add("active"));
			} else if (key === "controller") {
				container
					.querySelectorAll(".path-c-m")
					.forEach((p) => p.classList.add("active"));
			}

			if (nodeData[key]) {
				panelTitle.textContent = nodeData[key].title;
				panelDesc.textContent = nodeData[key].desc;
				panelCode.textContent = nodeData[key].code;
			}
		});
	});
}

function renderRetroConsole(container) {
	container.innerHTML = `
        <div class="retro-widget">
            <h4 class="widget-title">C++ Compiled CLI Sandbox</h4>

            <div class="retro-terminal">
                <div class="term-titlebar">
                    <span class="term-btn-dot close"></span>
                    <span class="term-btn-dot minimize"></span>
                    <span class="term-btn-dot maximize"></span>
                    <span class="term-title">Vehicle Manag Sys - Visual Studio Code</span>
                </div>
                <div class="term-screen">
                    <div class="term-scroll" id="termScreenScroll">
                        <div class="term-log">Microsoft Windows [Version 10.0.19045.7417]</div>
                        <div class="term-log">(c) Microsoft Corporation. All rights reserved.</div>
                        <div class="term-log"><br>D:\\UET\\HMSaeed.com\\Console Projects\\Vehicle Manag Sys>.\\build.bat</div>
                        <div class="term-log">[BUILD] Starting Compilation...</div>
                        <div class="term-log">[SUCCESS] Compilation complete.</div>
                        <div class="term-log">[RUN] Launching Vehicle Management System...</div>
                        <div class="term-log font-bold text-accent">+===================================================+</div>
                        <div class="term-log font-bold text-accent">|                                                   |</div>
                        <div class="term-log font-bold text-accent">|             VEHICLE MANAGEMENT SYSTEM             |</div>
                        <div class="term-log font-bold text-accent">|                                                   |</div>
                        <div class="term-log font-bold text-accent">+===================================================+</div>
                        <div class="term-log font-bold text-accent">|                                                   |</div>
                        <div class="term-log font-bold text-accent">|   [1]   Register New Account                      |</div>
                        <div class="term-log font-bold text-accent">|   [2]   Login to System                           |</div>
                        <div class="term-log font-bold text-accent">|   [Z]   Exit System                               |</div>
                        <div class="term-log font-bold text-accent">|                                                   |</div>
                        <div class="term-log font-bold text-accent">+---------------------------------------------------+</div>
                        <div class="term-log prompt-line">
                            <span class="prompt-text">Selection:</span>
                            <span class="typing-placeholder" id="consoleTyping"></span><span class="blinking-cursor">_</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="retro-controls">
                <button class="term-ctrl-btn" data-cmd="fleet">1. Fleet Details</button>
                <button class="term-ctrl-btn" data-cmd="rent">2. Dispatch Rent</button>
                <button class="term-ctrl-btn" data-cmd="io">3. Stream I/O</button>
                <button class="term-ctrl-btn" data-cmd="vtable">4. VTable Logs</button>
            </div>
        </div>
    `;

	const terminalScreen = container.querySelector("#termScreenScroll");
	const inputField = container.querySelector("#consoleTyping");
	const controlButtons = container.querySelectorAll(".term-ctrl-btn");

	const cmdOutputs = {
		fleet: [
			"1",
			"",
			"[SYSTEM] Found 15 vehicles matching your criteria:",
			"+------+----------------------+------+------------+-----------+----------+",
			"| ID   | Model                | Cap. | Rate       | Status    | Category |",
			"+------+----------------------+------+------------+-----------+----------+",
			"| 3001 | Suzuki Alto          | 4    | Rs. 3000   | Available | Economy  |",
			"| 3002 | Suzuki Cultus        | 5    | Rs. 4000   | Available | Economy  |",
			"| 3004 | Honda City Aspire    | 5    | Rs. 6500   | Available | Economy  |",
			"| 4002 | Audi A6 Prestige     | 5    | Rs. 45000  | Available | Luxury   |",
			"| 4003 | Mercedes-Benz        | 5    | Rs. 50000  | Available | Luxury   |",
			"| 4004 | BMW 7 Series         | 5    | Rs. 80000  | Rented    | Luxury   |",
			"| 5001 | Toyota Hilux Revo    | 5    | Rs. 15000  | Available | SUV      |",
			"| 5002 | Toyota Fortuner      | 7    | Rs. 25000  | Available | SUV      |",
			"| 5003 | Kia Sportage         | 5    | Rs. 12000  | Rented    | SUV      |",
			"| 5004 | Hyundai Tucson       | 5    | Rs. 12000  | Available | SUV      |",
			"| 6001 | Toyota Hiace         | 15   | Rs. 18000  | Available | Van/Bus  |",
			"| 6002 | Suzuki Bolan         | 7    | Rs. 3500  | Available | Van/Bus  |",
			"| 6003 | Toyota Coaster       | 29   | Rs. 35000  | Available | Van/Bus  |",
			"| 3020 | Toyota CLI           | 4    | Rs. 34000  | Available | Economy  |",
			"| 6004 | Suzuki Mehran        | 4    | Rs. 6000   | Available | Economy  |",
			"+------+----------------------+------+------------+-----------+----------+",
			"",
			"Enter Vehicle ID to RENT (or press Enter to continue): ",
		],
		rent: [
			"2",
			"",
			"+---------------------------------------------------+",
			"|                    SYSTEM LOGIN                   |",
			"+---------------------------------------------------+",
			" Please verify your identity to continue (or 'Z' to go back):",
			" > Username: saeed",
			" > Password: saeed123",
			"+---------------------------------------------------+",
		],
		io: [
			"1",
			"",
			"+---------------------------------------------------+",
			"|                 SEARCH VEHICLE FLEET              |",
			"+---------------------------------------------------+",
			"|                                                   |",
			"|   [1]   Browse All Vehicles                       |",
			"|   [2]   Filter by Category                        |",
			"|   [Z]   Back to Dashboard                         |",
			"|                                                   |",
			"+---------------------------------------------------+",
		],
		vtable: [
			"",
			"+===================================================+",
			"|                                                   |",
			"|                 CUSTOMER DASHBOARD                |",
			"|                                                   |",
			"+===================================================+",
			"| Welcome, Hafiz Muhammad Saeed                     |",
			"+---------------------------------------------------+",
			"|                                                   |",
			"|   [1]   Search for a Vehicle                      |",
			"|   [2]   Rent a Vehicle                            |",
			"|   [3]   Return a Vehicle                          |",
			"|   [4]   Plan a Trip                               |",
			"|   [5]   View My Rental History                    |",
			"|   [Z]   Logout                                    |",
			"+---------------------------------------------------+",
		],
	};

	let typing = false;

	controlButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			if (typing) return;
			typing = true;

			const cmd = btn.dataset.cmd;
			const outputLines = cmdOutputs[cmd];
			const cmdText = `./vms_fleet_operations.exe --run-${cmd}`;

			inputField.textContent = "";

			let charIndex = 0;
			const typingInterval = setInterval(() => {
				if (charIndex < cmdText.length) {
					inputField.textContent += cmdText[charIndex];
					charIndex++;
				} else {
					clearInterval(typingInterval);
					setTimeout(() => {
						appendOutput(outputLines);
					}, 300);
				}
			}, 30);
		});
	});
}

function appendOutput(lines) {
	const logElements = terminalScreen.querySelectorAll(
		".term-log:not(.prompt-line)",
	);
	for (let i = 5; i < logElements.length; i++) {
		logElements[i].remove();
	}

	const promptLine = terminalScreen.querySelector(".prompt-line");

	let lineIndex = 0;
	const printingInterval = setInterval(() => {
		if (lineIndex < lines.length) {
			const line = document.createElement("div");
			line.className = "term-log color-output";
			line.textContent = lines[lineIndex];
			terminalScreen.insertBefore(line, promptLine);

			terminalScreen.parentElement.scrollTop =
				terminalScreen.parentElement.scrollHeight;

			lineIndex++;
		} else {
			clearInterval(printingInterval);
			inputField.textContent = "";
			typing = false;
		}
	}, 100);
}

function renderLensGallery(container) {
	container.innerHTML = `
        <div class="photo-widget">
            <h4 class="widget-title">Narrative Visuals Preview</h4>
            <div class="lens-switcher">
                <button class="lens-btn active" data-lens="Macro">Macro Observances</button>
                <button class="lens-btn" data-lens="Flora">Flora Studies</button>
                <button class="lens-btn" data-lens="Landscapes">Landscape Narratives</button>
            </div>

            <div class="lens-grid" id="lensGrid">
            </div>

            <div class="photo-performance-stats">
                <div class="perf-metric">
                    <span class="perf-val">WebP</span>
                    <span class="perf-lbl">Dynamic Format</span>
                </div>
                <div class="perf-metric">
                    <span class="perf-val">300ms</span>
                    <span class="perf-lbl">Median Load</span>
                </div>
                <div class="perf-metric">
                    <span class="perf-val">Lazy</span>
                    <span class="perf-lbl">Observer Ingestion</span>
                </div>
            </div>
        </div>
    `;

	const lensGrid = container.querySelector("#lensGrid");
	const lensButtons = container.querySelectorAll(".lens-btn");

	loadLensCategory("Macro", lensGrid);

	lensButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			lensButtons.forEach((b) => b.classList.remove("active"));
			btn.classList.add("active");
			const category = btn.dataset.lens;
			loadLensCategory(category, lensGrid);
		});
	});
}

function loadLensCategory(cat, container) {
	container.innerHTML = "";
	const filtered = photos.filter((p) => p.category === cat).slice(0, 4);

	filtered.forEach((pic, i) => {
		const slide = document.createElement("div");
		slide.className = "lens-card reveal-slide";
		slide.style.setProperty("--delay", `${i * 0.1}s`);

		slide.innerHTML = `
            <div class="lens-img-wrap">
                <img src="${pic.src}" alt="${pic.caption}" loading="lazy" />
                <div class="lens-card-cover">
                    <span class="lens-card-caption">${pic.caption}</span>
                </div>
            </div>
            <div class="lens-card-body">
                <h5 class="lens-caption">${pic.caption}</h5>
                <p class="lens-desc">${pic.desc}</p>
            </div>
        `;
		container.appendChild(slide);
	});
}
