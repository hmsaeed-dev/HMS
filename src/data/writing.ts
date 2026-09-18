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
}

export const posts: Post[] = [
  {
    slug: "building-slowly-with-intent",
    title: "On building slowly, and with intent",
    summary: "A short note on why clarity, restraint, and patience often outperform momentum when the work is meant to last.",
    category: "essay",
    categoryLabel: "Essays",
    readTime: "6 min read",
    date: "2026",
    featured: true,
    content: [
      "In modern software development, speed is frequently mistaken for velocity. We optimize for shipping features before understanding whether the underlying model makes sense.",
      "Building slowly does not mean wasting time. It means allocating effort to the architectural choices that are difficult to change once constructed: data layouts, boundary definitions, and mental models.",
      "When you take the time to think through the topology of a system, the resulting code is often surprisingly small, readable, and resilient to change.",
    ],
  },
  {
    slug: "shape-of-a-personal-system",
    title: "The shape of a personal system",
    summary: "A reflection on turning scattered interests into a coherent practice system.",
    category: "ref",
    categoryLabel: "Reflections",
    readTime: "4 min read",
    date: "2026",
    featured: false,
    content: [
      "During my gap year, I explored everything from woodworking and crochet to Arabic and C++. At first, it seemed entirely fragmented.",
      "Over time, I recognized that every discipline shares fundamental concepts: tension, grain, sequence, and composition. Learning to observe details through a macro lens directly informed how I debug software race conditions.",
      "A personal system is not an agenda; it is a way of paying attention.",
    ],
  },
  {
    slug: "foundations-of-computational-thinking",
    title: "Foundations of computational thinking",
    summary: "Notes on how low-level hardware constraints shape higher-level software design.",
    category: "note",
    categoryLabel: "Notes",
    readTime: "5 min read",
    date: "2026",
    featured: false,
    content: [
      "Working with breadboard logic gates forces an acute awareness of latency, propagation delay, and truth boundaries.",
      "In high-level languages, abstractions hide these costs. But having wired physical ICs together, one develops a healthy respect for what happens when a signal travels through silicon.",
    ],
  },
];
