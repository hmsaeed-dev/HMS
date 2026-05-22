export const caseStudies = [
	{
		id: "house-of-wisdom",
		tag: "Lead Project",
		title: "House of Wisdom",
		shortDesc: "A digital library system designed for modularity and scalability using Vanilla JavaScript.",
		techStack: ["ES Modules", "MVC Pattern", "Modular CSS", "Local Storage"],
		links: {
			source: "https://github.com/HMSaeed101",
			demo: "#",
		},
		sections: [
			{
				heading: "The Challenge",
				content: `Most beginners build "spaghetti code" where UI logic and data logic are tangled. My goal was to build a system that could grow without breaking, necessitating a clear separation of concerns.`,
			},
			{
				heading: "Architecture: The MVC Pattern",
				content: `I implemented a Model-View-Controller architecture. This isn't just a buzzword; it's a structural promise. The <strong>Model</strong> handles the data (books, users), the <strong>View</strong> handles the DOM, and the <strong>Controller</strong> acts as the bridge.`,
				diagram: `
                    <strong>Model:</strong> data.js (State Management)<br>
                    <strong>View:</strong> render.js (UI Components)<br>
                    <strong>Controller:</strong> main.js (Event Listeners & Orchestration)
                `,
			},
			{
				heading: "Technical Highlight: Modular CSS",
				content: `To avoid the "Global Namespace CSS" nightmare, I used a modular approach where each component (Navbar, Grid, Modal) has its own stylesheet, orchestrated through a single entry point.`,
				code: `/* main.css entry point */
@import './base/rules.css';
@import './components/nav.css';
@import './components/library-grid.css';`,
			},
			{
				heading: "The \"Storyteller\" Insight",
				content: `Building this project taught me that code is just another language for telling a story. If the architecture is confusing, the "story" of the data gets lost. Clean code is simply a clear narrative.`,
			},
		],
	},
	{
		id: "finance-tracker",
		tag: "Productivity",
		title: "Personal Finance Tracker",
		shortDesc: "Case study coming soon. Focusing on Data Visualization and Offline Persistence.",
		techStack: [],
		links: {},
		isPlaceholder: true,
	},
];
