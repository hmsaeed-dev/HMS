export interface ProjectSection {
  heading: string;
  paragraphs: string[];
  takeaway?: string;
}

export interface ProductStory {
  problem: string;
  constraint: string;
  system: string;
  engineering: string;
  reflection: string;
}

export interface Project {
  slug: string;
  title: string;
  oneliner: string;
  category: "web" | "hardware" | "ai" | "systems";
  badge: string;
  featuredImage: string;
  heroImage: string;
  liveUrl?: string;
  githubUrl?: string;
  meta: {
    role: string;
    timeline: string;
    teamSize: string;
    coreTech: string;
  };
  sections: ProjectSection[];
  story?: ProductStory;
  connectsWith?: {
    label: string;
    href: string;
    reason: string;
  };
}

export const projects: Project[] = [
  {
    slug: "tracker",
    title: "Finance Tracker",
    oneliner: "An offline-first, encrypted personal finance PWA engineered with client-side Web Crypto and zero cloud telemetry.",
    category: "web",
    badge: "Offline PWA",
    featuredImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://hmsaeed-dev.github.io/Finance-Tracker/",
    githubUrl: "https://github.com/hmsaeed-dev/Finance-Tracker",
    meta: {
      role: "Solo Architect",
      timeline: "4 Weeks (PWA Project)",
      teamSize: "Solo Project",
      coreTech: "Vanilla JS, Web Crypto API, IndexedDB",
    },
    story: {
      problem: "Most commercial finance tools require cloud syncing, sell telemetry, or trap personal financial records behind monthly subscriptions.",
      constraint: "Achieving full financial management (multi-account net worth, capital velocity, and goal tracking) with zero external servers, 100% offline persistence, and military-grade client-side encryption.",
      system: "Built as an installable Progressive Web App adhering to strict Model-View-Controller separation. Data records are encrypted on-device via AES-GCM and stored securely in IndexedDB without any server calls.",
      engineering: "Utilized the native Web Crypto API for zero-dependency cryptographic operations, combined with Service Workers for instant offline launch and IndexedDB transaction atomicity.",
      reflection: "Building without third-party frameworks reinforced how powerful and durable raw browser standards are when architectural boundaries are respected."
    },
    connectsWith: {
      label: "On building slowly, and with intent",
      href: "/thought/building-slowly-with-intent",
      reason: "Proves that browser primitives outlast the churn of external library dependencies.",
    },
    sections: [
      {
        heading: "The Friction — Cloud Dependency in Personal Finance",
        paragraphs: [
          "Tracking savings, capital velocity, and assets across accounts usually means trusting third-party cloud servers with highly sensitive financial logs. I wanted a tool that behaves like a physical notebook: completely private, instant, and impossible to shut down from a remote server.",
        ],
      },
      {
        heading: "The Architecture — Zero-Dependency MVC with Web Crypto",
        paragraphs: [
          "To guarantee longevity, the app avoids build tools and external dependencies. The data layer uses IndexedDB with Web Crypto API encryption, while Service Workers cache all visual assets for instant offline execution.",
        ],
        takeaway: "True software sovereignty begins when an application can run indefinitely without a cloud connection.",
      },
    ],
  },
  {
    slug: "stockflow",
    title: "Stockflow",
    oneliner: "An end-to-end AI automation suite for image metadata and batch visual renaming powered by Google Gemini Vision.",
    category: "ai",
    badge: "Vision AI & Python",
    featuredImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://github.com/hmsaeed-dev/stockflow",
    githubUrl: "https://github.com/hmsaeed-dev/stockflow",
    meta: {
      role: "Solo Creator",
      timeline: "3 Weeks",
      teamSize: "Independent Tool",
      coreTech: "Python, Gemini Vision API, Shutterstock CSV",
    },
    story: {
      problem: "Stock photographers and visual archives lose hours manually inspecting, categorizing, tagging, and renaming raw camera captures for marketplace ingestion.",
      constraint: "Generating descriptive SEO slugs and commercial metadata across large photo batches without rate-limit throttling, visual hallucinations, or schema violations.",
      system: "A two-stage pipeline: Step 1 (AI Visual Renamer) inspects image geometry via Gemini Vision to generate clean semantic slugs; Step 2 (Metadata Generator) produces ingest-ready Shutterstock bulk CSVs.",
      engineering: "Engineered in Python with structured prompting, exponential backoff retries, and strict schema validation to guarantee 100% CSV compliance for bulk marketplace uploads.",
      reflection: "Prompt engineering in production is essentially strict contract type-checking against multimodal models."
    },
    connectsWith: {
      label: "HMS Clicks (Visual Laboratory)",
      href: "/visuals",
      reason: "Originally created to automate metadata workflows for high-volume macro and nature photography archives.",
    },
    sections: [
      {
        heading: "The Workflow Bottleneck",
        paragraphs: [
          "Shooting macro and nature photography is creative; preparing hundreds of images for stock agency submission is tedious manual labor. Filenames like IMG_1042.jpg need descriptive keywords, categories, and titles to be discoverable.",
        ],
      },
      {
        heading: "Two-Step Multimodal Automation",
        paragraphs: [
          "Stockflow inspects visual features using Gemini Vision models, extracts subject matter and lighting conditions, and transforms raw camera rolls into cataloged, marketplace-ready archives.",
        ],
        takeaway: "AI automation is most powerful when it eliminates mechanical friction from human creative work.",
      },
    ],
  },
  {
    slug: "vehicle-sys",
    title: "Vehicle Management System",
    oneliner: "A high-performance C++17 console platform for fleet management, rentals, inspections, and file persistence.",
    category: "systems",
    badge: "C++17 OOP",
    featuredImage: "/assets/images/projects/vms-pic.jpg",
    heroImage: "/assets/images/projects/vms-pic.jpg",
    githubUrl: "https://github.com/hmsaeed-dev/Vehicle-Management-System",
    meta: {
      role: "Lead Developer",
      timeline: "4 Weeks (OOP Lab)",
      teamSize: "4 Members",
      coreTech: "C++17, Inheritance, Polymorphism, File I/O",
    },
    story: {
      problem: "Managing vehicle inventory, customer leases, damage assessments, and audit logs requires clean state transitions in systems with zero GUI layers.",
      constraint: "Maintaining strict memory safety, polymorphic dispatch across varied vehicle types (Sedans, SUVs, Trucks), and durable file persistence without external database engines.",
      system: "An object-oriented orchestration hierarchy centered on an abstract BaseVehicle class, specialized sub-classes, and modular managers handling binary and structured text serialization.",
      engineering: "Utilized C++17 features, standard library containers, custom file format parsing, and virtual function dispatch for dynamic rental rate calculations.",
      reflection: "Writing robust systems in C++ teaches discipline: every allocation must be justified, and object lifetimes must be explicitly planned."
    },
    connectsWith: {
      label: "UET Taxila Academic Rigor",
      href: "/about",
      reason: "Developed as the culminating second-semester Object-Oriented Programming laboratory platform.",
    },
    sections: [
      {
        heading: "Complex State in Systems Programming",
        paragraphs: [
          "Fleet management requires tracking damage reports, mileage thresholds, customer leases, and financial reconciliations. In a pure console environment, structural architecture determines whether the system remains maintainable.",
        ],
      },
      {
        heading: "Polymorphism & File Persistence",
        paragraphs: [
          "We engineered clean inheritance hierarchies spanning base vehicle entities to specialized subtypes, using structured text and binary serialization for persistence across application sessions.",
        ],
        takeaway: "Clean OOP modeling makes even sprawling systems intuitive to extend and debug.",
      },
    ],
  },
  {
    slug: "fire-car",
    title: "Fire Fighting Car",
    oneliner: "An autonomous mini-vehicle engineered with analog flame sensors, motor drivers, and combinational logic—no microcontrollers.",
    category: "hardware",
    badge: "Hardware Logic",
    featuredImage: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/hmsaeed-dev/fire-fighting-car",
    meta: {
      role: "Lead Systems Integrator",
      timeline: "2 Weeks (Hardware Lab)",
      teamSize: "2 Members",
      coreTech: "L293D Driver, Flame IR Sensors, TTL Logic Gates",
    },
    story: {
      problem: "Designing an autonomous robot that navigates towards a fire source and triggers an onboard suppression pump without using software code or microcontrollers.",
      constraint: "The entire control feedback loop had to be realized purely with discrete analog infrared sensors, combinational logic gates, and a motor driver IC.",
      system: "Three optical flame sensors triangulate fire position with 45-degree offsets. Their threshold voltages are fed through TTL logic gates to determine steering direction and pump activation via an L293D dual H-bridge.",
      engineering: "Calibrated analog sensor comparator thresholds to eliminate false positives under ambient light, and buffered logic outputs to prevent voltage sag during motor stall currents.",
      reflection: "Hardware teaches constraint like nothing else: you cannot import an npm package when you run out of physical pins."
    },
    connectsWith: {
      label: "Foundations of computational thinking",
      href: "/thought/foundations-of-computational-thinking",
      reason: "Demonstrates how physical propagation delay and logic gate truth tables underpin digital computing.",
    },
    sections: [
      {
        heading: "Autonomous Hazard Response Without Software",
        paragraphs: [
          "The challenge was to build a physical mini-vehicle capable of sensing flame, navigating toward it, and activating a pump—with a strict ban on microcontrollers. The control loop had to be wired entirely into silicon.",
        ],
      },
      {
        heading: "Triangulation & Driver Power",
        paragraphs: [
          "Three flame sensors provided spatial awareness. Gated signals drove an L293D dual H-bridge to pivot left, right, or push forward depending on fire localization.",
        ],
        takeaway: "Closed-loop feedback systems in hardware provide visceral intuition for control theory.",
      },
    ],
  },
  {
    slug: "detector",
    title: "Palindrome Detector",
    oneliner: "A physical 4-bit combinational logic circuit wired on breadboard with TTL ICs that evaluates bit symmetry in real-time.",
    category: "hardware",
    badge: "Hardware Logic",
    featuredImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/hmsaeed-dev",
    meta: {
      role: "Hardware Designer",
      timeline: "1 Week (DLD Lab)",
      teamSize: "Solo Project",
      coreTech: "TTL ICs, Breadboard, Karnaugh Mapping",
    },
    sections: [
      {
        heading: "Zero-Clock Bit Symmetry",
        paragraphs: [
          "Checking string symmetry in software is a trivial loop. Evaluating a 4-bit input in real-time hardware without a CPU or clock requires Karnaugh map minimization and minimal logic gate footprints.",
        ],
      },
      {
        heading: "Karnaugh Reduction & Gate Economy",
        paragraphs: [
          "Mapping inputs onto K-maps reduced the Boolean expressions to minimal XOR and XNOR configurations, minimizing propagation delay across physical ICs.",
        ],
        takeaway: "Hardware logic instills deep respect for signal latency and truth boundaries.",
      },
    ],
  },
  {
    slug: "library",
    title: "Digital Library",
    oneliner: "A distraction-free modular web reader for classical Urdu literature and synchronized commentaries.",
    category: "web",
    badge: "Web Reader",
    featuredImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://hmslibrary.netlify.app",
    githubUrl: "https://github.com/hmsaeed-dev/e-library",
    meta: {
      role: "Frontend Architect",
      timeline: "3 Weeks (Personal Project)",
      teamSize: "Solo Project",
      coreTech: "HTML5, CSS Grid, Modular JS",
    },
    sections: [
      {
        heading: "Preserving Cultural Texts in Clean Layouts",
        paragraphs: [
          "Classical literature often suffers online from broken formatting and unreadable scans. This reader prioritizes typographic rhythm, comfortable margins, and responsive layouts for extended study.",
        ],
        takeaway: "Accessibility in digital literature begins with clean layout and respectful typography.",
      },
    ],
  },
];
