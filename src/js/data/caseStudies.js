export const caseStudies = [
	{
		id: "e-library",
		tag: "Web Dev",
		category: "web",
		title: "Digital Library",
		shortDesc:
			"A personal first-semester web project, a fully functional digital library built from scratch using HTML, CSS, and JavaScript.",
		techStack: ["ES Modules", "MVC Pattern", "Modular CSS"],
		links: {
			source: "https://github.com/hmsaeed-dev/E-Library",
			demo: "https://hmslibrary.netlify.app/",
		},
		metrics: [
			{ label: "Zero Dependencies", value: "Pure JS" },
			{ label: "Data Architecture", value: "Strict MVC" },
		],
		sections: [
			{
				heading: "The Challenge",
				content: `Building a web app without any structure quickly turns messy — one change breaks something else, and the whole thing becomes hard to maintain. The goal was to organize the code in a way that keeps everything predictable and easy to work with, even as the project grows`,
			},
			{
				heading: "How it's Structured",
				content: `The library is organized so that each part of the app has one clear job. The data layer handles what gets saved and loaded; the display layer handles what you see on screen; and the control layer manages what happens when you interact with it. This separation keeps the code clean and easy to build on.`,
			},
			{
				heading: "How the Styling Works",
				content: `Instead of one large stylesheet controlling everything, each section of the interface has its own dedicated style file. This keeps things organized and prevents one part of the design from accidentally breaking another.`,
			},
			{
				heading: "Architectural Retrospective",
				content: `This project taught me that good code isn't just about making something work — it's about making it easy to understand and change later. A clear structure from the start saves a lot of time down the road.`,
			},
		],
	},
	{
		id: "vehicle-manag-sys",
		tag: "C++ OOP",
		category: "systems",
		title: "Vehicle Management System",
		shortDesc:
			"A console-based management tool built for rental service companies — covering vehicle registration, customer rentals, returns, and fleet buying and selling, all from a single interface.",
		techStack: [
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
		],
		sections: [
			{
				heading: "The Challenge",
				content: `Console applications are easy to crash — one unexpected input from a user can corrupt data or freeze the program entirely. The goal was to build something that keeps running reliably no matter what a user types, while keeping all records accurate and intact.`,
			},
			{
				heading: "OOP Architecture",
				content: `The system is built around a family of vehicle types. A shared base defines the common behavior — like calculating rental costs and displaying vehicle details — while each specific type (car, truck, motorcycle) handles its own rules around pricing and specifications.`,
			},
			{
				heading: "Persistence & Validation",
				content: `All vehicle records and booking history are saved to files, so nothing is lost when the program closes. Every input a user enters is checked before it's accepted — invalid formats for things like registration numbers or contact details are caught and rejected before they can cause problems.`,
			},
			{
				heading: "Technical Retrospective",
				content: `Working at this level without the safety net of a browser or a framework, forces you to think carefully about every detail. This project sharpened my understanding of how programs manage memory and handle data at a low level.`,
			},
		],
	},
	{
		id: "photography-portfolio",
		tag: "Observance",
		category: "creative",
		title: "Photography",
		shortDesc:
			"A collection of nature photography — landscapes, clouds, insects, and animals — captured and displayed in a fast-loading, carefully designed gallery.",
		techStack: ["Observer", "API", "Responsive CSS Grid"],
		links: {
			source: "https://github.com/hmsaeed-dev",
			demo: "../Photography/index.html",
		},
		metrics: [
			{ label: "Lighthouse Performance", value: "99+" },
			{ label: "Image Formats", value: "WebP / AVIF" },
		],
		sections: [
			{
				heading: "The Problem I was Solving",
				content: `Photography galleries tend to be slow. High-resolution images take time to load, and that wait drives visitors away before they've seen a single shot. The goal here was to build something visually rich that still feels instant — no lag, no layout jumping around as images load.`,
			},
			{
				heading: "Asset Optimization",
				content: `Images are automatically resized and converted to the most efficient format based on the visitor's browser. Placeholder dimensions are set in advance so the page layout doesn't jump around while photos are still loading.`,
			},
			{
				heading: "Interactive Gallery Layout",
				content: `Photos are arranged in a fluid grid that adjusts to any screen size. As you scroll, images load only when they're about to appear — keeping the page fast. Clicking any photo opens a fullscreen view with support for swiping and keyboard navigation.`,
			},
			{
				heading: "How I approached It",
				content: `The gallery avoids heavy libraries and frameworks, relying instead on built-in browser features to handle image loading and layout. The result is a portfolio that looks carefully crafted but performs like a lightweight site — images appear smoothly as you scroll, and nothing feels sluggish.`,
			},
		],
	},
];

