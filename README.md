# Black Sheep Property Management

Complete rebrand and responsive marketing site for Jeffrey Danaher's Chittenden County property-care company.

## What is included

- Cinematic sheep-film homepage with a reduced-motion poster fallback
- Production SVG identity family under `public/brand`
- Curated and optimized real-project photography under `public/media`
- Services hub plus Grounds, Interiors, Winter, and Specialty Care routes
- Work, About, Contact, Privacy, success, and not-found pages
- Netlify-compatible estimate form with honeypot protection and one optional photo upload
- Responsive mobile navigation and persistent mobile call/estimate actions
- Route metadata, accessible HTML, visible focus states, and motion preferences

## Local development

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run lint
npm run build
npm audit --omit=dev
```

## Project structure

```text
public/brand/          Final vector identity masters
public/media/hero/     Optimized 720p hero film and poster
public/media/projects/ Curated project photography
src/components/        Reusable interface and motion components
src/data/              Service, contact, and gallery content
src/pages/             Route-level pages
src/styles/            Complete responsive visual system
docs/brand-system.md   Identity usage rules
docs/media-manifest.md Source and alt-text mapping for every photo
docs/site-content.md   Sitemap, copy system, SEO, and client confirmations
```

## Hosting and form setup

The app is a Vite static build. When deploying this repository as its own site:

- Base directory: `BlackSheepPM`
- Build command: `npm run build`
- Publish directory: `dist`
- Enable form detection in the Netlify project's Forms settings
- Configure an email or Slack notification for the `estimate-request` form

`public/_redirects` provides the SPA fallback. `public/__forms.html` is the build-time form skeleton required for a React-rendered Netlify form. The form accepts one image and relies on Netlify's 8 MB request limit.

## Before public launch

Review the full confirmation list in `docs/site-content.md`. At minimum, Jeffrey should confirm:

- The legal/DBA status of Black Sheep Property Management
- Exact service area, phone, location, and public hours
- Whether residential and commercial availability applies to every division
- Final service scope, especially winter, pool/pond, and handyman work
- Estimate workflow, submission recipient, and response expectations
- Permission to reuse every supplied and legacy-site photograph
- Public email address, if one should appear on the site
- Insurance, licensing, reviews, warranties, or other trust claims before adding them

The current implementation intentionally avoids leasing, rent collection, tenant placement, fake metrics, fabricated testimonials, and unverified guarantees.
