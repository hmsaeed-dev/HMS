export const caseStudies = [
	{
		id: "e-library",
		tag: "Web Dev",
		category: "web",
		title: "E Library",
		shortDesc:
			"A digital library infrastructure built with Vanilla JavaScript, engineered for modularity and maintainability.",
		techStack: [
			"ES Modules",
			"MVC Pattern",
			"Modular CSS",
			"LocalStorage API",
		],
		links: {
			source: "https://github.com/hmsaeed-dev/E-Library",
			demo: "https://hmslibrary.netlify.app/",
		},
		metrics: [
			{ label: "Lighthouse Score", value: "100" },
			{ label: "Zero Dependencies", value: "Pure JS" },
			{ label: "Data Architecture", value: "Strict MVC" },
		],
		sections: [
			{
				heading: "The Challenge",
				content: `Standard imperative codebases frequently result in highly coupled logic and fragile dependency chains, complicating long-term maintenance. The objective was to design a predictable, decoupled application layout using architectural patterns natively supported by modern browsers.`,
			},
			{
				heading: "Architecture",
				content: `To ensure strict separation of concerns, I implemented a Model-View-Controller (MVC) design pattern. The Model encapsulates business logic and state persistence via LocalStorage; the View abstracts DOM mutations and component UI rendering; and the Controller acts as the sole orchestrator handling event lifecycle propagation.`,
			},
			{
				heading: "Style Management",
				content: `To mitigate global namespace collisions and avoid styling technical debt, I bypassed global stylesheets in favor of a component-scoped architecture. Layouts, navigation primitives, and modal elements maintain dedicated sheets, compiled cleanly using a central manifest entry point.`,
			},
			{
				heading: "Architectural Retrospective",
				content: `This project reinforced that software engineering is ultimately about structural clarity. Code performance is critical, but system maintainability relies entirely on a coherent, self-documenting data workflow.`,
			},
		],
	},
	{
		id: "vehicle-manag-sys",
		tag: "C++ OOP",
		category: "systems",
		title: "Vehicle Management System",
		shortDesc:
			"A robust, console-based fleet operations and rental tracker implementing advanced Object-Oriented paradigms.",
		techStack: [
			"C++17",
			"OOP Principles",
			"File I/O Streams",
			"Data Validation",
		],
		links: {
			source: "https://github.com/hmsaeed-dev/Vehicle-Management-System",
			demo: "../projects/index.html",
		},
		metrics: [
			{ label: "OOP Paradigms", value: "Full Stack" },
			{ label: "Storage", value: "File Stream" },
			{ label: "Robustness", value: "Input Regex" },
		],
		sections: [
			{
				heading: "The Challenge",
				content: `Command Line Interfaces (CLIs) in low-level languages are notorious for input crashes and data corruption due to incorrect buffer handling. The objective was to create a highly robust fleet management terminal application in C++ that guarantees continuous operation and reliable data persistence.`,
			},
			{
				heading: "OOP Architecture",
				content: `The system utilizes class hierarchy trees. A base abstract class \`Vehicle\` declares pure virtual methods like \`calculateRental()\` and \`displayFleetDetails()\`. Derived classes \`Car\`, \`Truck\`, and \`Motorcycle\` override these methods to account for class-specific attributes (e.g. storage capacity, engine displacement) and custom pricing algorithms.`,
			},
			{
				heading: "Persistence & Validation",
				content: `Vehicle logs and booking agreements are persisted using C++ \`std::fstream\` operations. Input streams are protected using validation utilities: clearing error flags (\`cin.clear()\`), ignoring trailing characters (\`cin.ignore()\`), and applying custom matching to enforce structural integrity on registration numbers and contact detail fields.`,
			},
			{
				heading: "Technical Retrospective",
				content: `Engineering the console system deepens the understanding of object layouts in memory, vtables, and stream state safety. A CLI program does not benefit from browser safety layers; handling inputs at the byte level enforces a higher degree of structural foresight.`,
			},
		],
	},
	{
		id: "photography-portfolio",
		tag: "Observance",
		category: "creative",
		title: "Photography Portfolio",
		shortDesc:
			"A narrative-driven photography gallery showcasing macro, flora, and landscape captures with custom-designed visual layouts.",
		techStack: [
			"Intersection Observer",
			"Cloudinary API",
			"Responsive CSS Grid",
			"A11y Accordance",
		],
		links: {
			source: "https://github.com/hmsaeed-dev",
			demo: "../Photography/index.html",
		},
		metrics: [
			{ label: "Lighthouse Performance", value: "99+" },
			{ label: "Image Formats", value: "WebP / AVIF" },
			{ label: "A11y Grade", value: "WCAG AA" },
		],
		sections: [
			{
				heading: "The Challenge",
				content: `Visual portals that showcase high-resolution photography often suffer from high load latencies and layout shifts, leading to suboptimal visitor retention. The goal was to build a visually striking, narrative-driven media gallery that remains exceptionally fast and responsive.`,
			},
			{
				heading: "Asset Optimization",
				content: `Using the Cloudinary API, images are dynamically resized, optimized, and converted to modern formats like WebP or AVIF based on the user's browser capabilities. Standard placeholders prevent layout shift (CLS) by hardcoding aspect ratios until files load.`,
			},
			{
				heading: "Interactive Gallery Layout",
				content: `The images are arranged in a CSS Grid masonry container. As the visitor scrolls, an \`IntersectionObserver\` lazy-loads assets to conserve bandwidth. Clicking a thumbnail expands a fullscreen lightbox overlay, enabling fluid swipes and keyboard traversal.`,
			},
			{
				heading: "Technical Retrospective",
				content: `Combining heavy media presentation with optimal performance requires a strict focus on front-end mechanics. By minimizing script frameworks and using native web standard features, the portfolio delivers an immersive experience that loads instantly.`,
			},
		],
	},
];

