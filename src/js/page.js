/* ── STANDARD SUBPAGE ENTRY POINT ────────────────────────── */

import { initIcons } from './components/Icons.js';
import { initNavigation } from './components/Navigation.js';
import { initFooter } from './components/Footer.js';
import { initThemeToggle, initMobileMenu } from './utils/ui.js';
import { initScrollReveal } from './utils/scroll.js';

document.addEventListener('DOMContentLoaded', () => {
	// 1. Inject Components (with relative path prefix to root)
	initIcons();
	initNavigation({ pathPrefix: '../' });
	initFooter({ pathPrefix: '../' });

	// 2. UI Logic
	initThemeToggle();
	initMobileMenu();

	// 3. Scroll Reveal Animations
	initScrollReveal();
});
