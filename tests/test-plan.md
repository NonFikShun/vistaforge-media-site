# VistaForge Media — Website Test Plan

**Author:** QA
**Site type:** Multi-page static site (Home, Services, Portfolio, About, Contact) — no backend; contact form is client-side only.
**Status:** Drafted before build. Content is expected to be placeholder-but-professional (no real client photos/copy yet), so checks focus on structure, brand fidelity, navigation integrity, and code quality rather than factual accuracy of content.

Reference brand assets: `/home/claude/vistaforge/assets/logo.png`
- Palette: dark navy background, burnt-orange "VF" monogram/ring, cream/off-white text, teal mountain/water wave graphics, sunset gradient accent.
- Tagline: "MEDIA · AUGUSTA GA · DRONE"

---

## 1. Site Structure & File Integrity

- [ ] All 5 pages exist as separate HTML files (Home, Services, Portfolio, About, Contact) at expected paths.
- [ ] Shared assets (CSS, JS, images, logo) exist at the paths referenced by the HTML — no missing files.
- [ ] File/folder naming is consistent (lowercase, hyphenated) across pages and links.

## 2. Global Layout Consistency (Header / Nav / Footer)

- [ ] Every page includes the same header structure: logo + site name/tagline.
- [ ] Every page includes the same primary navigation with links to all 5 pages.
- [ ] Every page includes the same footer (business info, possibly nav repeat, copyright/social links).
- [ ] Active/current page is indicated in the nav (e.g., highlighted state) on each page.
- [ ] Visual styling (fonts, colors, spacing) of header/nav/footer is identical across all pages — no drift.

## 3. Navigation Link Integrity

- [ ] Every nav link on every page resolves to an existing file (no 404s / dead links).
- [ ] Logo in header links back to Home on every page.
- [ ] Any in-content links (e.g., Home page "View Services" CTA, Portfolio "Get a Quote" CTA) point to correct, existing pages.
- [ ] No links point to `#`, `javascript:void(0)`, or external placeholder URLs unless intentionally deferred (flag if so).
- [ ] Footer links (if present) also resolve correctly.

## 4. Brand Fidelity (vs. logo.png)

- [ ] Color palette matches: dark navy background/base, burnt-orange accent (buttons/links/highlights), cream/off-white body text, teal used somewhere as secondary accent (dividers, icons, imagery overlays).
- [ ] Logo image is displayed in the header on every page (not just text).
- [ ] A favicon (or favicon-like small icon derived from the logo/monogram) is referenced in `<head>` on every page.
- [ ] Tagline or equivalent ("Media · Augusta, GA · Drone" or "Augusta, GA" location reference) appears somewhere prominent — header, hero, or footer.
- [ ] Overall visual tone reads as polished/professional aerial-media brand, not generic template.

## 5. Per-Page Content Checks

**Home**
- [ ] Hero section with headline, subtext, and a primary CTA (e.g., "Get a Quote" / "View Portfolio").
- [ ] Featured services teaser (subset of full services, linking to Services page).
- [ ] Secondary CTA section (e.g., contact prompt) before footer.

**Services**
- [ ] Full list of services (not just the Home teaser subset) each with a name + description.
- [ ] Services are drone-photography/videography relevant (aerial photography, aerial video, real estate, inspections, events, mapping/surveying, etc. — placeholder copy is fine, but categories should make sense for the business).

**Portfolio**
- [ ] Multiple sample project entries (image + title/description at minimum).
- [ ] Entries are visually laid out in a grid/gallery, not a raw unstyled list.

**About**
- [ ] Company story / mission content present (not a stub).
- [ ] Some Augusta, GA / local-business framing present.

**Contact**
- [ ] Form present with fields: name, email, message, and phone.
- [ ] Business contact info shown outside the form (e.g., email address, phone number, service area — Augusta, GA).

## 6. Contact Form Behavior (No Backend)

- [ ] Required-field validation: submitting with empty required fields is blocked and shows a clear message (native HTML5 `required` or JS-driven).
- [ ] Email field validates format (native `type="email"` or JS regex check) and rejects malformed input.
- [ ] On valid submit, JS intercepts the submission (`preventDefault` or no `action`/`method` targeting a real endpoint) — it must NOT attempt a real network POST that would 404 or fail silently.
- [ ] On valid submit, a clear confirmation is shown to the user (inline message, modal, or redirect to a thank-you state) — not a silent no-op.
- [ ] Form does not throw JS console errors on load or on submit (valid or invalid input).

## 7. Responsive / Mobile Layout

- [ ] At mobile viewport widths (~375px, ~414px), nav collapses to a usable pattern (hamburger menu or stacked links) rather than overflowing/breaking.
- [ ] Hero, feature grids, pricing/portfolio grids, and forms reflow to single-column or otherwise usable layouts — no horizontal scroll, no overlapping text/images.
- [ ] Tap targets (nav links, buttons, form fields) are large enough to use on mobile.
- [ ] Test at a mid-size tablet width (~768px) as an additional checkpoint.

## 8. Images

- [ ] No broken image references (every `<img src>` / CSS `background-image` resolves to an existing file).
- [ ] All images have meaningful `alt` text (not empty or filename-derived junk).
- [ ] Images are reasonably sized/optimized (not absurdly large unoptimized files that would hurt load time) — flag if egregious.

## 9. Typography & Spacing Consistency

- [ ] Consistent font family/scale for headings and body text across all 5 pages.
- [ ] Consistent spacing/padding rhythm between sections across pages (no one page feeling cramped/sparse relative to others).
- [ ] Consistent button/link styling across pages (same hover states, shapes, colors).

## 10. Copywriting Quality

- [ ] No literal "Lorem ipsum" or similar filler text anywhere.
- [ ] No leftover placeholder markers like "TODO", "TBD", "[insert ...]", "Company Name Here", etc.
- [ ] Copy reads as coherent, professional marketing copy appropriate to a drone photography/videography business, even if specifics (client names, exact pricing) are reasonably placeholder/illustrative.

## 11. Code Quality / Hygiene

- [ ] Valid HTML structure (proper doctype, matching tags, no obviously malformed markup).
- [ ] No duplicate `id` attributes within a page.
- [ ] CSS is organized/shared (not massively duplicated inline styles per page) where reasonable.
- [ ] No leftover debug code (console.log spam, commented-out blocks, unused JS files).

---

## Reporting

Once both Frontend Dev and Content Dev report completion, I will:
1. Walk through this checklist against the actual built files under `/home/claude/vistaforge`.
2. Record a pass/fail (with notes) for each checked item above in `tests/report.md`.
3. Message the team lead with a summary of overall status and any blocking issues found.
