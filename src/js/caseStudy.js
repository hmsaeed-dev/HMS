import { workProjects } from './data/workData.js';
import { initIcons } from './components/Icons.js';
import { initNavigation } from './components/Navigation.js';
import { initFooter } from './components/Footer.js';
import { initThemeToggle, initMobileMenu } from './utils/ui.js';
import { initScrollReveal } from './utils/scroll.js';

document.addEventListener('DOMContentLoaded', () => {
	// 1. Inject central components
	initIcons();
	initNavigation({ pathPrefix: '../' });
	initFooter({ pathPrefix: '../' });

	// 2. UI Logic
	initThemeToggle();
	initMobileMenu();

	// 3. Parse target project from URL query param
	const urlParams = new URLSearchParams(window.location.search);
	const projectId = urlParams.get('project') || 'hms-tracker';

	let projectIndex = workProjects.findIndex(p => p.id === projectId);
	if (projectIndex === -1) projectIndex = 0; // Fallback to first project (HMS Tracker)

	const project = workProjects[projectIndex];

	// 4. Render Case Study
	renderCaseStudy(project, projectIndex);

	// 5. Scroll reveal
	initScrollReveal();
});

function renderCaseStudy(project, currentIndex) {
	const container = document.getElementById('csArticleContainer');
	if (!container) return;

	// Update document title and meta
	document.title = `${project.name} — Case Study | Hafiz Muhammad Saeed`;
	const metaDesc = document.getElementById('csMetaDesc');
	if (metaDesc) metaDesc.content = project.oneLiner;

	// Calculate Prev and Next projects
	const prevIndex = (currentIndex - 1 + workProjects.length) % workProjects.length;
	const nextIndex = (currentIndex + 1) % workProjects.length;
	const prevProject = workProjects[prevIndex];
	const nextProject = workProjects[nextIndex];

	// Status badge class mapping
	let statusClass = 'status';
	if (project.status === 'In Progress') statusClass = 'status-progress';
	if (project.status === 'Archived') statusClass = 'status-archived';

	// Build links HTML
	let linksHtml = '';
	if (project.links?.demo) {
		linksHtml += `
			<a href="${project.links.demo}" class="btn btn-olive" target="_blank" rel="noopener noreferrer">
				<span>Live Site ↗</span>
			</a>
		`;
	}
	if (project.links?.github) {
		linksHtml += `
			<a href="${project.links.github}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">
				<svg class="icon icon-sm"><use href="#icon-github"/></svg>
				<span>GitHub Repository</span>
			</a>
		`;
	}

	container.innerHTML = `
		<!-- Back to Work Navigation Link -->
		<div class="cs-back-bar reveal">
			<a href="index.html" class="cs-back-link">
				<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
					<path d="M19 12H5M12 19l-7-7 7-7"/>
				</svg>
				<span>Back to Work</span>
			</a>
		</div>

		<!-- Section 1: Header Block -->
		<header class="cs-header-block reveal">
			<div class="cs-header-meta">
				<span class="work-status-badge ${statusClass}">${project.status}</span>
				<span class="cs-year-badge">${project.year}</span>
				<div class="cs-header-tech-tags">
					${project.techTags.map(t => `<span class="work-tech-tag">${t}</span>`).join('')}
				</div>
			</div>
			<h1 class="cs-header-title">${project.name}</h1>
			<p class="cs-header-oneliner">${project.oneLiner}</p>

			${linksHtml ? `<div class="cs-header-actions">${linksHtml}</div>` : ''}

			<div class="cs-hero-image-wrap">
				<img src="${project.heroImage}" alt="${project.name} Visual Overview" class="cs-hero-image" loading="eager" />
			</div>
		</header>

		<article class="cs-article-body">
			<!-- Section 2: The Problem -->
			<section class="cs-anatomy-section reveal">
				<h2 class="cs-anatomy-heading">01. The Problem</h2>
				<p class="cs-anatomy-text">${project.problem}</p>
			</section>

			<!-- Section 3: The Approach -->
			<section class="cs-anatomy-section reveal">
				<h2 class="cs-anatomy-heading">02. The Approach</h2>
				<p class="cs-anatomy-text">${project.approach}</p>
			</section>

			<!-- Section 4: What I Built -->
			<section class="cs-anatomy-section reveal">
				<h2 class="cs-anatomy-heading">03. What I Built</h2>
				<p class="cs-anatomy-text">${project.whatIBuilt}</p>

				<!-- Interactive / Visual Demo Housing -->
				<div class="cs-built-demo-housing">
					<div class="demo-mockup-frame">
						<div class="mockup-header">
							<span class="mockup-dot red"></span>
							<span class="mockup-dot yellow"></span>
							<span class="mockup-dot green"></span>
							<span class="mockup-title">${project.name} — Architecture System</span>
						</div>
						<div class="mockup-body" id="csDemoBody">
							<div class="visual-spec-box">
								<div class="spec-item">
									<span class="spec-label">System State</span>
									<span class="spec-val">${project.status}</span>
								</div>
								<div class="spec-item">
									<span class="spec-label">Architecture</span>
									<span class="spec-val">${project.techTags[1] || 'Modular Systems'}</span>
								</div>
								<div class="spec-item">
									<span class="spec-label">Deployment</span>
									<span class="spec-val">${project.category.toUpperCase()} Module</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Section 5: What I Learned -->
			<section class="cs-anatomy-section reveal">
				<h2 class="cs-anatomy-heading">04. What I Learned</h2>
				<p class="cs-anatomy-text">${project.whatILearned}</p>
			</section>

			<!-- Section 6: What I'd Do Differently -->
			<section class="cs-anatomy-section reveal">
				<h2 class="cs-anatomy-heading">05. What I'd Do Differently</h2>
				<p class="cs-anatomy-text">${project.whatIDoDifferently}</p>
			</section>
		</article>

		<!-- Section 7: Footer Next/Prev Navigation -->
		<footer class="cs-footer-nav reveal">
			<a href="case-study.html?project=${prevProject.id}" class="cs-nav-link prev">
				<span class="cs-nav-label">← Previous Project</span>
				<span class="cs-nav-title">${prevProject.name}</span>
			</a>
			<a href="case-study.html?project=${nextProject.id}" class="cs-nav-link next">
				<span class="cs-nav-label">Next Project →</span>
				<span class="cs-nav-title">${nextProject.name}</span>
			</a>
		</footer>
	`;
}
