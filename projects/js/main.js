/* ── PROJECTS PAGE JS ────────────────────────────────────────── */

import { initScrollReveal } from '../../home/js/utils.js';
import { animateCount } from '../../photography/js/utils.js';
import { caseStudies } from './data.js';
import { renderCaseStudies, renderFilters, updateCount } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
    const containerId = 'case-studies-container';

    // 1. Render content & Filters
    renderCaseStudies(caseStudies, containerId);
    renderFilters(caseStudies);
    updateCount(containerId, 'visibleCount');

    // 2. Filter Logic
    document.querySelector('.cs-filter-left').addEventListener('click', (e) => {
        const btn = e.target.closest('.cs-filter-btn');
        if (!btn) return;

        // UI Update
        document.querySelectorAll('.cs-filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Logic
        const filter = btn.dataset.filter;
        const container = document.getElementById(containerId);
        container.querySelectorAll('.case-study').forEach(el => {
            const match = filter === 'all' || el.dataset.category === filter;
            el.classList.toggle('hidden', !match);
        });

        updateCount(containerId, 'visibleCount');
    });

    // 3. Initialize Hero Stats
    const totalProjects = caseStudies.filter(s => !s.isPlaceholder).length;
    const allTech = new Set(caseStudies.flatMap(s => s.techStack || []));
    
    animateCount(document.getElementById('statProjects'), totalProjects, 800);
    animateCount(document.getElementById('statTech'), allTech.size, 1000);

    // 4. Initialize standard reveals (must happen after render)
    initScrollReveal();
    
    console.log("Projects Page Loaded: Narrative Proof of Work Active.");
});
