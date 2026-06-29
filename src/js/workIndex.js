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

	// 4. Scroll reveal animations
	initScrollReveal();
});
