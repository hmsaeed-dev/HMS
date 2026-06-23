/* ── URL CONFIGURATION ────────────────────────────────────────── */
/* Centralized URL definitions for all pages to prevent duplication and inconsistency */

const SITE_DOMAIN = "https://hmsaeed.com";

export const URLs = {
  // Main pages
  home: {
    canonical: SITE_DOMAIN,
    ogUrl: SITE_DOMAIN,
    structuredData: SITE_DOMAIN,
  },
  academics: {
    canonical: `${SITE_DOMAIN}/academics/`,
    ogUrl: `${SITE_DOMAIN}/academics/`,
    structuredData: `${SITE_DOMAIN}/academics/`,
  },
  projects: {
    canonical: `${SITE_DOMAIN}/projects/`,
    ogUrl: `${SITE_DOMAIN}/projects/`,
    structuredData: `${SITE_DOMAIN}/projects/`,
  },
  photography: {
    canonical: `${SITE_DOMAIN}/Photography/`,
    ogUrl: `${SITE_DOMAIN}/Photography/`,
    structuredData: `${SITE_DOMAIN}/Photography/`,
  },

  // External project links
  externalProjects: {
    photography: "https://hmsaeed-dev.github.io",
    eLibrary: {
      demo: "https://hmslibrary.netlify.app/",
      source: "https://github.com/hmsaeed-dev/E-Library",
    },
  },

  // Social profiles
  social: {
    github: "https://github.com/hmsaeed-dev",
    linkedin: "https://www.linkedin.com/in/hmsaeed",
    instagram: "https://www.instagram.com/hms_aeed",
    twitter: "https://x.com/hms_aeed",
    whatsapp: "https://wa.me/923219798860?text=Hi%20Saeed%2C%20I%20saw%20your%20portfolio!",
  },

  // Contact
  contact: {
    email: "mailto:hms.builds@gmail.com",
    phone: "tel:+923219798860",
    maps: "https://www.google.com/maps/search/?api=1&query=Taxila%2C+Pakistan",
  },
};
