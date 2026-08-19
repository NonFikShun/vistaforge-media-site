# VistaForge Media — Brand & Content Brief

**Prepared by:** Content Dev
**For:** Frontend Dev (build reference) / QA (review reference)
**Source:** `/home/claude/vistaforge/assets/logo.png`

> ⚠️ **PLACEHOLDER CONTENT NOTICE**
> VistaForge Media has no real client history yet. All copy below (services, pricing, portfolio entries, contact details, testimonials, etc.) is **realistic, professional placeholder content** written to read like a genuine small business site — it is explicitly **not** final and should be swapped for real content once the client provides it. Nothing here is Lorem Ipsum or "TODO" filler; it's ready to ship as-is if needed, but flagged for future replacement. Look for the 🔁 marker next to any field that will need a real-world swap (phone, email, exact pricing, photos, testimonials).

---

## 1. Color Palette

Extracted directly from `logo.png` (badge emblem: dark navy circle, burnt-orange ring/monogram, cream lettering, sunset gradient behind a mountain peak, teal river/wave and foliage motifs).

| Swatch | Name | Hex | Role / Suggested Usage |
|---|---|---|---|
| 🟦⬛ | **Deep Navy** | `#021A24` | Primary background (dark theme base), header/footer background, nav bar |
| 🟧 | **Burnt Orange** | `#D95622` | Primary accent — CTA buttons, links, icon accents, monogram callouts, active states |
| ⬜ | **Cream / Off-White** | `#FAF4DB` | Primary text-on-dark, headline type, logo lettering color, light-mode background alt |
| 🟩 | **River Teal (light)** | `#52A299` | Secondary accent — hover states, section dividers, badges, subtle backgrounds |
| 🟦 | **Deep Teal** | `#267E82` | Secondary accent (darker) — footer accents, icon fills, map/route graphics |
| 🟨 | **Sunset Gold** | `#F9D680` | Highlight accent — gradient stop, small badges, star ratings, quote marks |
| 🟠 | **Sunset Orange** | `#F27932` | Gradient/hero accent — paired with Sunset Gold for sky/glow gradients behind hero imagery |
| ⚫ | **Ink Black** | `#03080B` | Deepest shadow / text on cream backgrounds where more contrast than navy is needed |

**Palette usage guide:**
- **Backgrounds:** `#021A24` (Deep Navy) as the dominant site background; use `#03080B` sparingly for cards/overlays that need to sit "deeper" than the base navy.
- **Primary accent (CTAs, links, buttons):** `#D95622` Burnt Orange — this is the "VF" monogram color and should be the single most prominent interactive color on the site.
- **Secondary accent (supporting UI, hover/dividers):** `#267E82` / `#52A299` Teal pairing — used for secondary buttons, tags/category pills, icon strokes, and subtle section separators, evoking the Savannah River.
- **Text on dark:** `#FAF4DB` Cream for headlines and body copy on navy backgrounds; drop to ~80% opacity cream for secondary/muted text rather than introducing a new gray.
- **Gradient accent (hero backgrounds, badges, dividers):** linear gradient from `#F9D680` → `#F27932` → `#D95622`, echoing the sunset-behind-the-mountain graphic in the logo. Use behind hero drone photography or as a subtle top-of-page glow.

---

## 2. Typography Direction

The logo's lettering is a **bold, condensed, all-caps display face** (arced wordmark "VISTAFORGE" and the small-caps tagline ring) paired conceptually with a **clean, highly legible sans** for anything at body-copy scale — this is a classic badge/emblem pattern (outdoor/adventure brand meets modern studio).

- **Display / Headings font:** **"Anton"** (Google Fonts) — extremely bold, condensed, all-caps friendly; closest free match to the wordmark's weight and squeeze. Alternate option: **"Oswald"** (Bold/700, uppercase, letter-spaced) if a slightly less heavy condensed face is preferred for H2/H3 levels.
- **Body / UI font:** **"Inter"** (Google Fonts) — clean, neutral, highly legible at small sizes for paragraphs, nav, forms, and buttons. Alternate option: **"Work Sans"**.
- **Suggested pairing rule:**
  - H1/Hero headline → Anton, uppercase, tight letter-spacing (-0.5px), Cream or gradient-fill text
  - H2/Section headings → Anton or Oswald Bold, uppercase, wider letter-spacing (1–2px), Burnt Orange or Cream
  - Body copy, nav, form labels, buttons → Inter (400 body / 600 buttons & labels)
  - Small caps tagline treatments (e.g. "MEDIA · AUGUSTA GA · DRONE" style dot-separated labels) → Inter or Oswald, uppercase, letter-spaced, used for eyebrow text above headings

**Google Fonts import reference:**
```html
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

---

## 3. Site Map (5 pages)

| Page | Purpose |
|---|---|
| **Home** (`index.html`) | First impression / hero pitch — establish VistaForge as Augusta's premier drone media studio, funnel visitors to Services and Contact |
| **Services** (`services.html`) | Detail all service offerings and pricing tiers so prospects can self-qualify and understand what's included |
| **Portfolio** (`portfolio.html`) | Showcase representative sample work by category to build visual trust and demonstrate range |
| **About** (`about.html`) | Tell the company story, establish credibility (FAA Part 107 certification), and communicate mission/values |
| **Contact** (`contact.html`) | Convert interested visitors into leads via a contact form and direct contact info |

---

## 4. Home Page Copy

### Hero Section
**Headline:**
> Elevate Your Perspective.

**Subheadline:**
> Professional drone photography and videography serving Augusta and the CSRA — from cinematic real estate tours to construction progress you can watch unfold from above.

**CTA Button:** `Get a Free Quote`
**Secondary CTA (optional ghost button):** `View Our Work`

### "Why VistaForge" Blurb
> VistaForge Media was built on a simple idea: the best view of the Savannah River valley is the one most people never get to see. We combine FAA-certified drone piloting with a filmmaker's eye to deliver aerial photography and video that's sharp, safe, and genuinely cinematic — not just a hobbyist's clip from a backyard flight. Whether you're listing a property, tracking a job site, or capturing a once-in-a-lifetime event, we bring a studio-level process to every flight plan.

### Featured Services (3 teasers)

1. **Aerial Photography**
   High-resolution still imagery that shows properties, landscapes, and job sites at their best angle — literally.

2. **Real Estate Aerial Tours**
   Cinematic flyover video and photo packages that help Augusta-area listings stand out and sell faster.

3. **Construction & Progress Monitoring**
   Scheduled aerial capture that documents a project from groundbreaking to ribbon-cutting.

### Closing CTA Section
**Headline:** Ready to see your project from a new angle?
**Body:** Tell us what you're working on and we'll put together a custom flight plan and quote within one business day.
**Button:** `Start Your Project`

---

## 5. Services Page Copy

### Intro
> From single-property listings to multi-month construction documentation, VistaForge Media offers a full range of drone-based photography, videography, and inspection services across Augusta and the greater CSRA (Central Savannah River Area).

### Services (6)

1. **Aerial Photography**
   Crisp, high-resolution aerial stills for real estate, marketing, land surveys, and personal projects. Every shoot is planned around golden-hour light and optimal flight paths to get the most flattering angle of your property or site.

2. **Drone Videography**
   Cinematic aerial video — smooth reveal shots, orbits, and flyovers — edited and color-graded for use in marketing reels, social media, and web. Delivered in whatever format and aspect ratio your platform needs.

3. **Real Estate Aerial Tours**
   Combined photo-and-video packages built specifically for property listings: full-property flyovers, neighborhood context shots, and twilight photography options that help listings stand out in a crowded market.

4. **Construction & Land Progress Monitoring**
   Recurring scheduled flights (weekly, biweekly, or monthly) that document a site's progress over time — ideal for contractors, developers, and land owners who need a visual paper trail or stakeholder-ready updates.

5. **Roof & Infrastructure Inspections**
   Detailed aerial inspection imagery for roofs, towers, solar arrays, and other hard-to-reach infrastructure — reducing the need for ladders, lifts, or scaffolding while capturing close, clear detail.

6. **Event Coverage**
   Aerial coverage for weddings, festivals, sporting events, and corporate gatherings across the CSRA — striking wide shots that ground-level photography simply can't capture.

### Pricing / Package Tiers (3) 🔁 *placeholder pricing — confirm real rates before launch*

| Tier | Price Range | What's Included |
|---|---|---|
| **Liftoff** | $250 – $400 / session | Single-location shoot (up to 1 hour on site), 15–20 edited aerial photos, digital delivery within 3 business days. Ideal for single-property real estate listings or small projects. |
| **Flyover** | $500 – $850 / session | Photo + video package (up to 2 hours on site), 25+ edited photos, one 60–90 second edited highlight video, digital delivery within 5 business days. Ideal for real estate tours, small events, or one-time construction snapshots. |
| **Horizon** | $900+ / month (custom scope) | Recurring monthly or biweekly site visits, full photo + video coverage, progress-tracking video series, priority scheduling, and a dedicated project folder for ongoing access. Ideal for construction monitoring, developers, and long-term commercial clients. |

*Custom quotes available for large events, multi-day shoots, or projects outside these tiers.*

---

## 6. Portfolio Page Copy

> The projects below are representative placeholders illustrating the type and quality of work VistaForge Media delivers. Actual client photography and video will replace these entries as our portfolio grows.

| # | Project Name | Category | Description |
|---|---|---|---|
| 1 | **Riverwalk Landing – Residential Listing** | Real Estate | Full-property aerial tour and twilight photography package for a riverfront home listing along the Augusta Riverwalk. |
| 2 | **Broad Street Lofts – Progress Series** | Construction | Six-month biweekly aerial progress documentation for a downtown Augusta mixed-use redevelopment. |
| 3 | **CSRA Solar Field – Infrastructure Inspection** | Inspection | Detailed aerial inspection imagery of a commercial solar array for a regional energy provider. |
| 4 | **Sacred Heart Garden Wedding** | Event | Aerial highlight video and photo coverage of an outdoor wedding ceremony and reception near downtown Augusta. |
| 5 | **North Augusta Business Park – Marketing Flyover** | Real Estate | Cinematic aerial flyover video produced for a commercial property developer's leasing marketing campaign. |
| 6 | **Savannah River Bluffs – Land Survey** | Construction | Pre-development aerial photo and video survey of undeveloped acreage for a residential land developer. |

---

## 7. About Page Copy

### Our Story

VistaForge Media was founded right here in Augusta, Georgia, by a lifelong CSRA resident who saw an opportunity to pair a growing local market — real estate, construction, and events — with a technology that was still underused across the region: professional drone media. What started as weekend flights along the Savannah River quickly turned into a mission to give local businesses and homeowners access to the kind of elevated, cinematic imagery that used to require a helicopter and a much bigger budget.

Every VistaForge pilot flies under an **FAA Part 107 Remote Pilot Certificate**, and every flight is planned with safety, airspace regulations, and site-specific risk in mind — whether that's a construction site with active equipment, a residential neighborhood near an airport corridor, or a crowded outdoor event. We treat the technical side of drone operation as seriously as the creative side, because great aerial work only matters if it's captured safely and legally.

Our mission is simple: help the people and businesses of the CSRA see their properties, projects, and moments from a perspective they've never had before. We're proud to serve **Augusta and the broader Central Savannah River Area (CSRA)** — including North Augusta, Evans, Martinez, Grovetown, and Aiken — with the same care and craftsmanship on every flight, whether it's a single real estate listing or a year-long construction contract.

### Values
- **Safety first** — FAA Part 107 certified, fully insured, airspace-aware on every flight
- **Craftsmanship** — every shot is composed, not just captured
- **Reliability** — on time, on schedule, with fast turnaround on deliverables
- **Local roots** — Augusta-owned and operated, invested in the CSRA community

---

## 8. Contact Page Copy

### Intro Blurb
> Have a project in mind? Whether it's a property listing, a construction site, or an upcoming event, we'd love to hear about it. Fill out the form below or reach out directly — we typically respond within one business day.

### Contact Info 🔁 *placeholder — replace with real business details before launch*

- **Phone:** (706) 555-0142
- **Email:** hello@vistaforgemedia.com
- **Service Area:** Augusta, GA & the CSRA (North Augusta, Evans, Martinez, Grovetown, Aiken)
- **Hours:** Monday – Friday, 8:00 AM – 6:00 PM · Saturday by appointment · Closed Sunday

### Contact Form Note (for Frontend Dev)
This form is a **static/demo form with no backend** at this stage. On submit, it should:
- Prevent the default page reload (JS `preventDefault`)
- Display an inline **success confirmation message** (e.g. "Thanks! Your message has been received — we'll be in touch within one business day.") in place of or above the form
- **Not** attempt to send data anywhere (no fetch/POST to a real endpoint) — this is intentional until a backend is wired up

Suggested form fields: Name, Email, Phone (optional), Project Type (dropdown: Real Estate / Construction / Inspection / Event / Other), Message.

---

## Summary for Frontend Dev

- **Palette:** Deep Navy `#021A24` background, Burnt Orange `#D95622` primary accent, Cream `#FAF4DB` text-on-dark, Teal `#267E82`/`#52A299` secondary accent, Sunset Gold `#F9D680` → Sunset Orange `#F27932` gradient for hero/badge accents.
- **Type:** Anton (or Oswald Bold) for headlines, uppercase, condensed/badge feel; Inter for body/UI.
- **Mood:** Rugged-outdoors-meets-modern-studio — badge/emblem style, elevated perspective, river motifs (Savannah River), adventure-but-professional. Think national-park-poster energy applied to a media company.
- All page copy above is ready to drop directly into HTML; 🔁-flagged items (pricing, phone, email) are the only spots that must be revisited before real launch.
