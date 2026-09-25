export interface Post {
  slug: string;
  title: string;
  summary: string;
  category: "essay" | "note" | "ref";
  categoryLabel: string;
  readTime: string;
  date: string;
  featured?: boolean;
  content: string[];
  connectsWith?: {
    label: string;
    href: string;
    reason: string;
  };
}

export const posts: Post[] = [
  {
    slug: "building-slowly-with-intent",
    title: "On building slowly, and with intent",
    summary: "Why clarity, restraint, and architectural patience consistently outlast momentum when the work is meant to endure.",
    category: "essay",
    categoryLabel: "Field Notes",
    readTime: "4 min read",
    date: "2026",
    featured: true,
    content: [
      "In modern software development, speed is frequently mistaken for velocity. We optimize for shipping features before understanding whether the underlying domain model actually makes sense.",
      "Building slowly does not mean wasting time or indulging in procrastination. It means deliberately allocating cognitive effort to the architectural choices that are painful to alter once constructed: data schemas, state ownership, security boundaries, and mental models.",
      "When you take the time to reason through the topology of a system—how data enters, mutates, and persists—the resulting code is often surprisingly small, readable, and resilient to change. You end up deleting more dependencies than you install.",
      "Restraint is not a lack of ambition; it is the discipline to refuse superfluous abstractions. In software, as in physical craftsmanship, the simplest mechanism that fully solves the problem is almost always the most durable.",
    ],
    connectsWith: {
      label: "Finance Tracker (Offline PWA)",
      href: "/work/tracker",
      reason: "Built with zero frameworks and strict client-side encryption to prove that browser primitives outlast dependency churn.",
    },
  },
  {
    slug: "shape-of-a-personal-system",
    title: "The shape of a personal system",
    summary: "Reflections on turning seemingly fragmented gap-year disciplines into a unified practice of observation and craft.",
    category: "ref",
    categoryLabel: "Reflections",
    readTime: "4 min read",
    date: "2026",
    featured: false,
    content: [
      "During my gap year, I explored disciplines that appeared entirely disconnected on the surface: woodworking, crochet, Arabic syntax, competitive chess, and writing my first lines of C++.",
      "At first, it felt like an undisciplined detour. But over months of hands-on practice, I recognized that every serious craft shares identical structural realities: tension, sequence, grain, and compositional balance.",
      "When carving wood, working against the natural fiber causes ugly fractures. In systems programming, working against memory layout or cache lines introduces subtle bottlenecks. In Arabic grammar, grammatical cases (i'rab) dictate meaning just as strict type signatures protect runtime state in TypeScript.",
      "A personal operating system is not a rigid daily schedule or a productivity dashboard. It is an intentional way of paying attention: noticing the grain of the problem before applying the tool.",
    ],
    connectsWith: {
      label: "HMS Clicks (Visual Laboratory)",
      href: "/visuals",
      reason: "Macro photography as an exercise in stillness, training the eye to observe subtle edge conditions.",
    },
  },
  {
    slug: "foundations-of-computational-thinking",
    title: "Foundations of computational thinking",
    summary: "How low-level hardware constraints and discrete truth tables illuminate high-level software abstractions.",
    category: "note",
    categoryLabel: "Field Notes",
    readTime: "3 min read",
    date: "2026",
    featured: false,
    content: [
      "Wiring discrete 7400-series TTL logic gates on a breadboard gives you an acute, physical awareness of latency, propagation delay, and electrical noise.",
      "In high-level languages, virtual machines and garbage collectors insulate us from these physical realities. But having physically diagnosed loose grounds or race conditions on hardware buses, you develop a healthy reverence for what actually occurs when electrons traverse silicon.",
      "Boolean algebra is not merely an exam topic; it is the fundamental vocabulary of decision-making under constraint. Whether architecting an autonomous car without a microcontroller or designing an offline-first state engine, constraint forces structural clarity.",
    ],
    connectsWith: {
      label: "Fire Fighting Car (Hardware Logic)",
      href: "/work/fire-car",
      reason: "An autonomous mini-vehicle engineered entirely with combinational logic and sensor feedback, with zero microcontrollers.",
    },
  },
];
