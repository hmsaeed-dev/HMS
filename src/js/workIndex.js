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

	// 3. Render project cards list
	renderProjectCards('all');

	// 4. Setup filter handlers
	const filterButtons = document.querySelectorAll('#workFilters .filter-pill');
	filterButtons.forEach(btn => {
		btn.addEventListener('click', () => {
			filterButtons.forEach(b => b.classList.remove('active'));
			btn.classList.add('active');
			const filter = btn.dataset.filter;
			renderProjectCards(filter);
		});
	});

	// 5. Scroll reveal animations
	initScrollReveal();
});

function renderProjectCards(filter) {
	const container = document.getElementById('workCardsList');
	if (!container) return;

	container.innerHTML = '';

	const filtered = filter === 'all'
		? workProjects
		: workProjects.filter(p => p.category === filter);

	filtered.forEach((proj, idx) => {
		const card = document.createElement('article');
		card.className = `work-card reveal reveal-delay-${(idx % 3) + 1}`;
		card.dataset.category = proj.category;

		// Status badge color class mapping
		let statusClass = 'status';

		card.innerHTML = `
			<div class="work-card-header">
				<h2 class="work-card-title">${proj.name}</h2>
			</div>
			<p class="work-card-oneliner">${proj.oneLiner}</p>
			<div class="work-card-footer">
				<div class="work-tech-tags">
				<a href="coming-soon.html" class="work-casestudy-link">
					<span>case study</span>
					<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14M12 5l7 7-7 7"/>
					</svg>
				</a>
				<a href="coming-soon.html" class="work-casestudy-link">
					<span>Live Demo</span>
					<svg class="icon icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M5 12h14M12 5l7 7-7 7"/>
					</svg>
				</a>
				</div>
			</div>
		`;

		container.appendChild(card);
	});

	// Re-trigger scroll reveal for newly injected items
	setTimeout(() => {
		initScrollReveal();
	}, 50);
}
