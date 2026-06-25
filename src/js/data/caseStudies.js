export const caseStudies = [
	{
		id: "house-of-wisdom",
		tag: "Web Dev",
		title: "House of Wisdom",
		shortDesc:
			"A digital library infrastructure built with Vanilla JavaScript, engineered for modularity and maintainability.",
		techStack: [
			"ES Modules",
			"MVC Pattern",
			"Modular CSS",
		],
		links: {
			source: "https://github.com/hmsaeed-dev/E-Library",
			demo: "https://hmslibrary.netlify.app/",
		},
		sections: [
			{
				heading: "The Challenge",
				content: `Standard imperative codebases frequently result in highly coupled logic and fragile dependency chains, complicating long-term maintenance. The objective was to design a predictable, decoupled application layout using architectural patterns natively supported by modern browsers.`,
			},
			{
				heading: "Architecture",
				content: `To ensure strict separation of concerns, I implemented a Model-View-Controller (MVC) design pattern. The Model encapsulates business logic and state persistence via LocalStorage; the View abstracts DOM mutations and component UI rendering; and the Controller acts as the sole orchestrator handling event lifecycle propagation.`
			},
			{
				heading: "Style Management",
				content: `To mitigate global namespace collisions and avoid styling technical debt, I bypassed global stylesheets in favor of a component-scoped architecture. Layouts, navigation primitives, and modal elements maintain dedicated sheets, compiled cleanly using a central manifest entry point.`
			},
			{
				heading: "Architectural Retrospective",
				content: `This project reinforced that software engineering is ultimately about structural clarity. Code performance is critical, but system maintainability relies entirely on a coherent, self-documenting data workflow.`,
			},
		],
	},
	{
		id: "cpp",
		tag: "C++ OOP",
		title: "Vehicle Management System",
		shortDesc:
			"Case study in development.",
		techStack: [],
		links: {},
		isPlaceholder: true,
	},
];
