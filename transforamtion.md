
# hmsaeed.com — Full Redesign System

## I. The Core Mental Model First

Before touching a single page, you need to resolve one question: **who visits this site, and what do they need to leave with?**

For a presence system (not a portfolio), you have roughly four visitor types:

**The Stranger** — found you via Google, LinkedIn, or a link. Knows nothing. Needs: *who is this person, should I care?*

**The Collaborator** — a potential project partner, client, or fellow builder. Needs: *can this person actually build things, and are they worth working with?*

**The Recruiter/Opportunity** — an internship, freelance, or early-stage startup contact. Needs: *quick proof of competence + how to reach you.*

**The Like-minded** — someone who shares your intellectual interests (Iqbal, polymathy, Islamic thought, startups). Needs: *is there more depth here? can I follow this person's thinking?*

Right now, hmsaeed.com is optimised for none of these four. It tries to be a portfolio for type 2 and 3, while your actual ambition is to attract type 4 — and eventually make type 1 become type 4.

**The redesign principle:** Make the site deep enough for type 4, clear enough for type 3, and honest enough that type 1 becomes type 4 naturally.

---

### II. Identity & Tagline — Fix This First

The browser tab says "Developer & Photographer." The hero says "Builder, Photographer & Perpetual Learner." The meta description says "showcasing software projects and macro photography."

Three different self-descriptions, none of them fully true, none of them interesting.

**The fix:**

Settle on one line that is actually you, used everywhere — meta title, hero, LinkedIn bio, GitHub bio, all of it. Something like:

> *"Builder of things digital. Thinker across disciplines."*

or simply:

> *"I build software, read widely, and think out loud."*

or, if you want the HMS brand weight:

> *"Hafiz Muhammad Saeed — Builder, Reader, Perpetual Beginner."*

"Perpetual Learner" is the most honest part of your current tagline. Lead with that energy, not "Developer & Photographer" which sounds like a Fiverr profile.

The meta description should become something like: *"Personal site of Hafiz Muhammad Saeed — CS student, builder, and thinker based in Taxila, Pakistan."* Drop "showcasing software and photography" entirely. That's a portfolio description.

---

### III. Site Architecture — The Full Map

Here is the complete page and section hierarchy, with visitor path logic built in.

```
hmsaeed.com/
├── / (Home)
├── /story
├── /now
├── /work
│   ├── /work (index — all projects)
│   └── /work/[project-slug] (individual case study)
├── /writing (or /notes)
│   ├── /writing (index)
│   └── /writing/[slug]
├── /photography → redirect or link out to HMS Clicks
└── /connect
```

No more flat homepage with everything stacked. The homepage becomes a *gateway*, not a dump. Each page has a clear job.

---

### IV. Page-by-Page Blueprint

---

#### `/` — Home (Gateway, not Portfolio)

**Its only job:** Make someone want to go deeper.

**Structure:**

**Hero** — Name, one-line identity, and *one* CTA. Not two. The CTA should be "Read My Story" not "View Projects" or "Download CV." Projects and CV are for people who already want to hire you. The homepage hero is for people who just arrived.

**Quick Orientation Block** — Four short links in a grid, like a quiet menu:
- What I'm building → /work
- Who I am → /story
- What I'm thinking → /writing
- What's happening now → /now

This replaces the current wall-of-sections scroll. Each block is 2–3 sentences max, not a section with cards and icons.

**One Featured Project** — Not a grid of all projects. Just the single best or most recent one, with a "see all work" link. Forces you to have one strong thing rather than a row of weak things.

**One Testimonial** — A single quote, attributed, real. More powerful than a "testimonials section" with five generic ones.

**Closing line + connect link** — Not a full contact section. Just one sentence like *"Want to work together or just say hello?"* with a link to /connect.

**What to remove from the homepage:**
- Skills & Tools section (move into individual project pages)
- Beyond the Terminal hobby cards (move into /story)
- Academic Journey section (move into /story)
- The full contact block with phone, email, location, WhatsApp all at once

---

#### `/story` — Who You Are (The Soul of the Site)

**Its job:** Make a stranger understand you as a *person*, not a credential list.

**Structure — a flowing narrative page, not a resume:**

**Opening paragraph** — Written in first person, honest voice. Not "I am a passionate developer." Something real. Your Lahore origin, the move to Taxila, what kind of kid you were.

**The Timeline** — Visual, scrollable, chronological. Key points:
- Early life, Lahore → Taxila
- FSC Pre-Medical (and why you chose it at the time)
- The gap year — this section deserves real depth. The crochet, clay, wood carving, origami, the Python self-teaching, the language attempts. This is your most interesting period and most people skip it entirely in their "about" pages.
- The decision to switch to CS
- UET Taxila, Semester 1 → now
- The HMS brand / Iqbaliat direction

Each point is 2–4 sentences. Not bullet points. Prose that reads like a person wrote it.

**Interests block** — The hobbies that currently float orphaned on the homepage (reading, table tennis, chess, photography, walks in nature) belong here, with a sentence or two of actual context each. Not just "Reading — World Building." *What* do you read? Why does it matter to you?

**Intellectual influences** — A short list of thinkers, books, or ideas that have shaped your thinking. Iqbal. Sowell. Islamic intellectual tradition. This is signal for the like-minded visitor.

**No CV download on this page.** The story page is human, not transactional.

---

#### `/now` — Living Page

**Its job:** Show the site is alive and you are active.

**Structure:** Dead simple. No design complexity needed.

- One paragraph: what you're focused on this month/season
- 3–5 bullet points of active things: Iqbaliat build, Semester 3 prep, HMS brand system, etc.
- Date stamp: "Last updated: June 2026"
- Link at the bottom: *inspired by nownownow.com*

Update this every 4–6 weeks. Even a small update signals you're alive. This page also ranks well in Google for your name over time.

---

#### `/work` — Projects (Evidence of Competence)

**Its job:** Show you can actually build things, with depth.

**The Index page** — A clean list or grid of projects. Each card shows: project name, one-line description, tech stack tags, and a "Read Case Study" link. The counter showing "0 builds" needs to go — either populate it or remove the counter entirely and just show the cards.

**Individual Case Study pages `/work/[slug]`** — This is where the real value is. Each case study should cover: the problem it solved, the decisions made during building, what you'd do differently, and a link to the live site or GitHub. The case study format is what separates a presence system from a portfolio. It shows how you think, not just what you made.

**Bayt al-Hikma, HMS Tracker, the UET projects** — all have real case studies in them if you write them. Start with one.

---

#### `/writing` — Notes & Essays

**Its job:** Give your thinking a permanent home and attract the like-minded.

**Don't wait to "have something worth publishing."** That bar never arrives. Start with short notes — 200–400 words on something you've been thinking about. Your Iqbal interest alone has 10 essay seeds in it. Your gap year polymath experience. Your thoughts on generalism vs specialism. The switch from pre-med to CS.

**Structure:** Clean index, reverse chronological, with a one-sentence summary under each title. No categories needed yet until you have 10+ posts.

**Tone:** Your own voice. Not formal, not academic. How you'd explain it to a smart friend.

---

#### `/connect` — Contact (Earned, Not Dumped)

**Its job:** Make it easy to reach you *after* someone has understood you.

**Replace the current contact dump with:**

- One opening sentence about what kinds of conversations you welcome. e.g., *"I'm open to collaborations, interesting projects, or just a good conversation."*
- Email address (linked)
- WhatsApp link (but not the raw phone number)
- LinkedIn link
- A simple contact form (name, email, message) — this filters out low-effort contacts

**Remove:** Raw phone number, Google Maps link, location address. These are overkill for a personal site and create unnecessary exposure.

---

#### Photography — Resolve the Identity Question

Right now `/Photography/` exists inside hmsaeed.com but shows 0 photos. It's branded separately in your mind as HMS Clicks.

**The decision you need to make:**

Option A — Photography stays inside hmsaeed.com as a genuine section, populated with real photos, accessible from /story or the homepage. It's part of *you*, not a separate entity.

Option B — Photography becomes its own subdomain or brand (hmscaptures.com, hmsclicks.com), and hmsaeed.com simply links out to it with a sentence: *"I also shoot — see HMS Clicks."*

**My read:** Given the HMS brand system you're building, Option B is the cleaner long-term play. It lets each entity be fully itself. hmsaeed.com becomes the person. HMS Clicks becomes the photography brand. The personal site links to it but doesn't try to contain it.

Until you decide and populate it, **remove the Photography page from the navigation entirely**. A dead page is worse than no page.

---

### V. Navigation Hierarchy

**Primary nav (always visible, minimal):**
```
Saeed    Story    Work    Writing    Now    Connect
```

That's it. Five links plus your name/logo. No dropdowns on mobile. Clean.

**Secondary nav (in-page, contextual):**
Inside /work, you can have filters (Web, Systems, Experiments). Inside /writing, you can have filters when volume justifies it.

**Footer:**
A quiet footer with: copyright, links to GitHub/LinkedIn/Instagram, and a "Back to top" link. Not another contact section — that already has its own page.

**No hamburger menu complexity on mobile** until you have enough pages to need it. Right now five links fit cleanly in a horizontal nav or a minimal mobile menu.

---

### VI. Visitor Paths (User Journey Design)

**Path 1 — The Stranger:**
Home → reads hero → clicks "Read My Story" → /story → gets interested → clicks /writing or /work → sees depth → goes to /connect

**Path 2 — The Collaborator:**
Home → clicks "Work" → /work index → reads a case study → convinced → /connect

**Path 3 — The Recruiter:**
Home → clicks /work → sees projects → wants CV → CV link lives on /work page or /connect, not the hero

**Path 4 — The Like-minded:**
Finds /writing via Google or a share → reads an essay → checks /story → subscribes or reaches out via /connect → /now for ongoing updates

Notice: every path ends at /connect. That page is the conversion point of the entire site. It should feel like a warm door, not a form dump.

---

### VII. SEO & Meta — Specific Fixes

- **Title tag:** Change from "Hafiz Muhammad Saeed | Developer & Photographer" to "Hafiz Muhammad Saeed — Builder & Thinker"
- **Meta description:** "Personal site of Hafiz Muhammad Saeed — CS student, builder, and thinker from Taxila, Pakistan. Work, writing, and story."
- **Keywords meta tag:** Remove it entirely. Google has ignored it since 2009. Its current value is zero.
- **/now page:** Add a `<meta name="robots" content="noindex">` if you don't want it indexed, or leave it indexed — it will rank for "[your name] now" searches over time
- **Canonical tags:** Already in place, good
- **OG image:** Currently using your photo, which is correct. Make sure it's high quality and well-composed — it's what shows in WhatsApp/LinkedIn previews

---

### VIII. Build Order (What to Do First)

If you try to fix everything at once you'll fix nothing. Here is the sequence:

**Week 1 — Stop the bleeding:**
- Remove or replace the dead Projects and Photography pages with placeholder text
- Remove phone number from contact
- Fix the tagline inconsistency everywhere

**Week 2-3 — Add the soul:**
- Write and publish /story. This is the highest-leverage page you can add. Even a rough version is better than none.

**Week 4 — Make it alive:**
- Publish /now. Takes 30 minutes to write.

**Month 2 — Add depth:**
- Write the first case study for one real project (Bayt al-Hikma or HMS Tracker)
- Write the first /writing note on anything

**Month 3+ — Fill the system:**
- Add testimonials as a homepage section once you have 1–2 real ones
- Restructure the homepage away from the current section-dump layout
- Decide on photography identity and act on it

**The guiding rule:** A site with three complete, honest pages beats a site with ten hollow ones every time.

---

### IX. One Design Principle to Hold Onto

You have an aesthetic sensibility that's already right — dark tones, restraint, organic minimalism, things that accumulate meaning quietly. The design problem isn't the visual style. It's that the *structure* contradicts the *aesthetic*. A restrained visual style with a chaotic content architecture sends mixed signals.

The fix is alignment: quiet design + quiet structure + content that earns its depth slowly. Every page should feel like it has more behind it than it shows on the surface. That's the iceberg model applied to a website — and it fits you specifically.
