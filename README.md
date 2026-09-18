# hmsaeed.com

A narrative-first personal presence system for **Hafiz Muhammad Saeed** — BSCS student at UET Taxila, builder, reader, and photographer.

Migrated from static HTML/CSS/JS to a modern Next.js 15, TypeScript, and Tailwind CSS architecture.

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with bespoke design tokens
- **Typography**: Cormorant Garamond (Serif), DM Sans (Body), Fira Code (Mono) via `next/font/google`
- **Media**: Optimized images via `next/image` with Cloudinary CDN
- **Icons**: Lucide React
- **Deployment**: [Vercel](https://vercel.com/)

---

## Site Structure

- `/` — Homepage: Hero with portrait, directory index, field note, photography interlude, and testimonial marquee
- `/story` — Narrative editorial trajectory, gap year exploration, and timeline
- `/now` — Live pulse widget with PKT time, active pursuits, reading progress, and past seasons
- `/work` — Project gallery with category filters (Web, Hardware)
- `/work/[slug]` — Deep-dive architectural case studies
- `/writing` — Essays, reflections, and study guides with category filters
- `/writing/[slug]` — Clean reading views for long-form pieces
- `/academics` — Course ledger with collapsible grades, GPA tracking, and entrance exams
- `/photography` — HMS Clicks gallery with Masonry/Cinematic view switcher and accessible Lightbox
- `/connect` — Direct contact channels (Email, LinkedIn, WhatsApp, GitHub)

---

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/hmsaeed-dev/HMS.git
cd HMS

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

---

## License

GNU Affero General Public License v3.0 (AGPL-3.0) — see [LICENSE](./LICENSE) for details.
