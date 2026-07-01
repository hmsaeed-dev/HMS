/* ── STANDARD SUBPAGE ENTRY POINT ────────────────────────── */

import { initNavigation } from './components/Navigation.js';
import { initFooter } from './components/Footer.js';
import { initThemeToggle, initMobileMenu } from './utils/ui.js';
import { initScrollReveal } from './utils/scroll.js';
import { initWorkFilters, initWritingFilters } from './utils/filters.js';
import { initStudyModal, initWritingSearch } from './utils/notionModal.js';

document.addEventListener('DOMContentLoaded', () => {
	// 1. Inject Components (with relative path prefix to root)
	initNavigation({ pathPrefix: '../' });
	initFooter({ pathPrefix: '../' });

	// 2. UI Logic
	initThemeToggle();
	initMobileMenu();

	// 3. Page-specific filters
	initWorkFilters();
	initWritingFilters();
	initStudyModal();
	initWritingSearch();

	// 4. Scroll Reveal Animations
	initScrollReveal();
});
