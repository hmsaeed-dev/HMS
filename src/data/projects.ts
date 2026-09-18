export interface ProjectSection {
  heading: string;
  paragraphs: string[];
  takeaway?: string;
}

export interface Project {
  slug: string;
  title: string;
  oneliner: string;
  category: "web" | "hardware";
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
}

export const projects: Project[] = [
  {
    slug: "library",
    title: "Digital Library",
    oneliner: "A distraction-free web reader for classical Urdu literature and synchronized commentaries.",
    category: "web",
    badge: "Web App",
    featuredImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://hmslibrary.netlify.app",
    githubUrl: "https://github.com/hmsaeed-dev/e-library",
    meta: {
      role: "Frontend Architect",
      timeline: "3 Weeks (Personal Project)",
      teamSize: "Solo Project",
      coreTech: "HTML5, CSS Grid, Netlify",
    },
    sections: [
      {
        heading: "The Gap — Fragmented Cultural Texts",
        paragraphs: [
          "Classical literature is widely available online but suffers from poor presentation. Scanned PDFs, broken government web portals, and unformatted databases make reading these texts difficult. I wanted to build a dedicated digital space for reading and studying these works.",
        ],
      },
      {
        heading: "The Strategy — Focused Scope & Bi-directional Layouts",
        paragraphs: [
          "Rather than building a complex full-stack CMS, I prioritized reading experience, typography rhythm, and responsive layouts. The interface supports clean typography, comfortable margin scales, and seamless mobile reading.",
        ],
        takeaway: "True accessibility in digital literature begins with clean layout and respectful typography.",
      },
    ],
  },
  {
    slug: "vehicle-sys",
    title: "Vehicle Management System",
    oneliner: "A C++ console application for fleet tracking, rentals, sales, damage inspection, and trip planning.",
    category: "web",
    badge: "C++ OOP",
    featuredImage: "/assets/images/projects/vms-pic.jpg",
    heroImage: "/assets/images/projects/vms-pic.jpg",
    githubUrl: "https://github.com/hmsaeed-dev/Vehicle-Management-System",
    meta: {
      role: "Lead Developer",
      timeline: "4 Weeks (OOP Lab)",
      teamSize: "4 Members",
      coreTech: "C++, OOP, File I/O",
    },
    sections: [
      {
        heading: "The Problem — Complex State in Systems Programming",
        paragraphs: [
          "Managing vehicle inventories, rental schedules, maintenance logs, and financial records in a unified application requires careful structural architecture. In an academic OOP context, the challenge was to model these domain entities cleanly using inheritance, encapsulation, and polymorphism.",
        ],
      },
      {
        heading: "Architecture & Design",
        paragraphs: [
          "We engineered class hierarchies spanning base Vehicles to specialized Sedan, SUV, and Truck sub-types, with dedicated managers handling persistence through structured text and binary serialization.",
        ],
        takeaway: "Clean OOP modeling makes even sprawling systems intuitive to extend and debug.",
      },
    ],
  },
  {
    slug: "tracker",
    title: "Finance Tracker",
    oneliner: "An offline-first personal finance app built with pure MVC architecture for real-time net worth tracking.",
    category: "web",
    badge: "Web App",
    featuredImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
    liveUrl: "https://hmsaeed-dev.github.io/Finance-Tracker/",
    githubUrl: "https://github.com/hmsaeed-dev/Finance-Tracker",
    meta: {
      role: "Fullstack Developer",
      timeline: "4 Weeks (PWA Project)",
      teamSize: "Solo Project",
      coreTech: "Vanilla JS, LocalStorage",
    },
    sections: [
      {
        heading: "The Friction — Obfuscated Personal Finances",
        paragraphs: [
          "Keeping track of personal savings, debts, and assets across different platforms is frustrating. Most commercial finance apps are bloated with ads, require cloud syncing, or charge subscriptions. I needed a private, lightweight, and offline-capable dashboard.",
        ],
      },
      {
        heading: "The Architecture — Vanilla MVC without Frameworks",
        paragraphs: [
          "To avoid library fatigue, I built the app using vanilla JavaScript adhering to strict Model-View-Controller patterns. Data is preserved in localStorage with zero server reliance, making computations completely private.",
        ],
        takeaway: "Understanding browser primitives and state synchronization without dependencies is foundational.",
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
      coreTech: "TTL ICs, Breadboard",
    },
    sections: [
      {
        heading: "The Challenge — Zero-Clock Bit Symmetry",
        paragraphs: [
          "In software, checking if a string reads identically forward and backward is a trivial task—a simple loop checking indices from both ends. In hardware, performing this evaluation without a CPU, clock cycles, or instruction sets requires a different way of thinking. The problem was to evaluate a 4-bit binary input in real-time using purely combinational logic gates, minimizing delay and logic gate footprint.",
        ],
      },
      {
        heading: "The Logic — Karnaugh Reduction & Gate Economy",
        paragraphs: [
          "To avoid wasting physical ICs on redundant logic paths, I drafted the truth table for the 4-bit palindrome expression (where input bit 0 equals bit 3, and bit 1 equals bit 2). Mapping these inputs onto Karnaugh maps allowed me to reduce the Boolean expressions to their minimal forms using XOR and XNOR configurations.",
        ],
        takeaway: "Hardware teaches constraint like nothing else: you can't import a package when you run out of pins.",
      },
    ],
  },
  {
    slug: "fire-car",
    title: "Fire Fighting Car",
    oneliner: "An autonomous hardware vehicle integrating flame detection sensors, motor driver arrays, and combinational control logic.",
    category: "hardware",
    badge: "Robotics & Systems",
    featuredImage: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&q=80&w=1200",
    heroImage: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&q=80&w=1200",
    githubUrl: "https://github.com/hmsaeed-dev/fire-fighting-car",
    meta: {
      role: "Lead Systems Integrator",
      timeline: "2 Weeks (Lab Project)",
      teamSize: "2 Members",
      coreTech: "L293D, Flame IR Sensors, TTL Gates",
    },
    sections: [
      {
        heading: "The Challenge — Autonomous Hazard Response",
        paragraphs: [
          "The goal was to build a physical, autonomous mini-vehicle capable of navigating a simulated space, detecting a localized flame source, steering towards it, and activating an onboard water pump to extinguish it. The twist? No microcontrollers or code were allowed. The entire control loop had to be hard-wired using analog infrared flame sensors, combinational logic gates, and a motor driver.",
        ],
      },
      {
        heading: "Implementation — Sensor Triangulation & Driver Power",
        paragraphs: [
          "We used three optical flame sensors placed at 45-degree offsets to provide spatial awareness. An L293D dual H-bridge motor driver received the gated signals to pivot left, right, or drive forward depending on fire localization.",
        ],
        takeaway: "Closed-loop feedback systems in hardware provide visceral intuition for control theory.",
      },
    ],
  },
];
