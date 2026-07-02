/* ── STANDARD SUBPAGE ENTRY POINT ────────────────────────── */

import { initNavigation } from '../components/Navigation.js';
import { initFooter } from '../components/Footer.js';
import { initThemeToggle, initMobileMenu } from '../utils/ui.js';
import { initScrollReveal } from '../utils/scroll.js';
import { initWorkFilters, initWritingFilters, applyWritingFilters } from '../utils/filters.js';
import { initStudyModal, initWritingSearch } from '../utils/notionModal.js';

document.addEventListener('DOMContentLoaded', () => {
	initNavigation({ pathPrefix: '../' });
	initFooter({ pathPrefix: '../' });

	initThemeToggle();
	initMobileMenu();

	initWorkFilters();
	initWritingFilters();
	initStudyModal();
	initWritingSearch(applyWritingFilters);

	initScrollReveal();
});
