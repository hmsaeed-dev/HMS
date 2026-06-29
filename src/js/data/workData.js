export const workProjects = [
	{
		id: "iqbaliat",
		name: "Digital Library",
		category: "web",
		year: "2026",
		techTags: ["Vanilla JS", "HTML/CSS", "Public Corpus"],
		links: {
			demo: "https://hmsaeed.com",
			github: "https://github.com/hmsaeed-dev/iqbaliat",
		},
		heroImage:
			"https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1200",
		problem:
			"Iqbal's texts are scattered across poorly maintained government sites, scanned PDFs, and academic repositories that assume you already know what you're looking for. There's no place designed for a student to sit with a single work, read it deeply, and understand it — not just find it.",
		approach:
			"The competitor analysis of iap.gov.pk and allamaiqbal.com confirmed the moat: both have the texts, neither has the reading layer. The decision to focus only on public domain Iqbal works narrowed the scope in a way that made the project actually finishable — rather than an endless library cataloguing problem.",
		whatIBuilt:
			"A distraction-free reading interface featuring synchronized commentary layers, custom typography tailored for Urdu script readability, and instant cross-text search across classical poetry collections.",
		builtVisualType: "reader-demo",
		whatILearned:
			"I underestimated how much the content problem dwarfs the engineering problem. Building the reading interface is tractable. Curating, structuring, and annotating Iqbal's corpus in a way that's actually useful to a scholar — that's a years-long project, not a semester one. The pitch to a scholarly collaborator was the right move; I can't do this alone.",
		whatIDoDifferently:
			"I would focus on perfecting a single poem's full interactive annotation experience before building out the wider library container. Prototyping the depth of the reading experience first would have validated user interest much faster.",
	},
	{
		id: "hms-tracker",
		name: "HMS Tracker",
		category: "web",
		year: "2026",
		techTags: ["Vanilla JS", "MVC Architecture", "PWA", "LocalStorage"],
		links: {
			demo: "https://hmsaeed.com",
			github: "https://github.com/hmsaeed-dev/hms-tracker",
		},
		heroImage:
			"https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
		problem:
			"I had no clear picture of where my money was going or what I actually owned at any given time. Existing apps were either too complex, required subscriptions, or didn't account for Zakat calculation — which is a non-negotiable part of how I think about money. I needed something minimal, offline-capable, and built around my actual financial logic.",
		approach:
			"The core architectural decision was MVC in vanilla JS — no framework. The reason was deliberate constraint: I wanted to understand the patterns before abstracting them. The 38-stage build specification I wrote before touching code forced every feature decision upfront, which meant almost no rework mid-build.",
		whatIBuilt:
			"A lightweight, offline-first Progressive Web App that tracks accounts, calculates net worth in real-time, and automatically computes Zakat thresholds based on active assets. It operates with zero external server dependencies, storing all encrypted state directly in browser storage.",
		builtVisualType: "tracker-demo",
		whatILearned:
			"The 38-stage spec was both the project's biggest strength and its biggest constraint. It forced clarity upfront but made mid-build pivots expensive. I'd use a lighter spec next time — enough to prevent scope creep, not so rigid it prevents good ideas from entering late.",
		whatIDoDifferently:
			"If I were starting over today, I would separate out the financial calculation engine into pure mathematical helper functions earlier in the process. While the MVC model handles state well, decoupling the Zakat logic from state listeners would have made unit testing much cleaner.",
	},
	{
		id: "binary-palindrome",
		name: "Binary Palindrome Detector",
		oneLiner: "Digital logic circuit using ICs 7486, 7404, 7408",
		status: "Archived",
		category: "hardware",
		year: "2025",
		techTags: ["Hardware Logic", "DLD", "TTL ICs"],
		links: {
			github: "https://github.com/hmsaeed-dev",
		},
		heroImage:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
		problem:
			"In digital logic design, verifying whether a multi-bit binary input reads identically forward and backward requires immediate Boolean evaluations without software clock cycles or microcontrollers. The assignment called for a pure hardware implementation minimizing logic gate count and propagation delay.",
		approach:
			"I mapped the 4-bit palindrome Boolean expressions onto Karnaugh maps to reduce expression complexity. Instead of using redundant logic gates, I utilized XOR gates (IC 7486) for bit pair comparisons and AND gates (IC 7408) for output convergence, verifying signal propagation on breadboard logic trainers.",
		whatIBuilt:
			"A physical combinational logic circuit wired on a breadboard with ICs 7486 (XOR), 7404 (NOT), and 7408 (AND) that evaluates 4-bit binary inputs in real-time and illuminates an LED indicator upon detecting symmetric bit patterns.",
		builtVisualType: "hardware-demo",
		whatILearned:
			"Hardware logic leaves zero room for hand-waving. Unlike software debugging where you can log variables, diagnosing floating pins or loose ground wires on a breadboard teaches you systematic signal tracing and physical precision.",
		whatIDoDifferently:
			"I would draw full wiring schematic diagrams with color-coded pin assignments before plugging chips into the breadboard. Neat wire management upfront prevents hours of probing IC pins with a multimeter later.",
	},
	{
		id: "bcd-to-excess3",
		name: "Fire Fighting Car",
		oneLiner: "Fire fighter Car",
		status: "Archived",
		category: "hardware",
		year: "2025",
		techTags: ["Digital Logic Design", "Combinational Logic"],
		links: {
			github: "https://github.com/hmsaeed-dev",
		},
		heroImage:
			"https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&q=80&w=1200",
		problem:
			"Binary Coded Decimal (BCD) representation lacks self-complementing properties, making arithmetic subtractor circuits complex in early digital computing. Translating BCD inputs into Excess-3 code solves this by enabling simple 9's complement arithmetic.",
		approach:
			"I derived truth tables mapping 4-bit BCD digits (0-9) to Excess-3 values (adding 3 in binary). Invalid BCD inputs (10-15) were treated as don't-care conditions in Karnaugh maps, yielding simplified sum-of-products Boolean equations for hardware implementation.",
		whatIBuilt:
			"A combinational code converter circuit built using standard NAND and NOR logic gates, tested against all valid 0-9 BCD input combinations to deliver instantaneous unweighted code conversion.",
		builtVisualType: "hardware-demo",
		whatILearned:
			"Don't-care conditions in K-maps demonstrated how mathematical abstraction directly optimizes physical hardware cost. Understanding how arithmetic code representations simplify hardware execution gives deeper insight into how CPUs process data.",
		whatIDoDifferently:
			"I would simulate the circuit in Digital Works or Logisim prior to physical breadboard construction to verify logic transitions and timing propagation under load.",
	},
];
