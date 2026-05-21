import { projects, photos, academics, skills } from "./data.js";
import {
	renderProjects,
	renderPhotos,
	renderAcademics,
	renderSkills,
} from "./render.js";
import {
	initLightbox,
	initMobileMenu,
	initScrollReveal,
	initScrollSpy,
	initPhotoGrid,
	initBackToTop,
	initThemeToggle,
} from "./utils.js";

// Global UI features run first
initThemeToggle();
initMobileMenu();

// Controller fetches from model, passes to view (Safe due to null-checks in utils)
renderProjects(projects);
renderPhotos(photos);
renderAcademics(academics);
renderSkills(skills);

// Feature initializations
const openLightbox = initLightbox();
initPhotoGrid(openLightbox);
initScrollReveal();
initScrollSpy();
initBackToTop();
