# Black Sheep Property Management — Brand System

Version 1.0 · August 2026

## Brand idea

Black Sheep Property Management does not behave like another anonymous maintenance vendor. The identity uses one animal making an intentional choice: the body stays with the property, while the head turns against the expected direction.

The literal sheep is the symbol. The herd is the story. Typography and real project photography carry the rest of the brand.

Primary positioning line:

> Property care that stands apart.

Use sheep humor as dry punctuation, never as the entire message. Reliability, breadth of service, and the quality of Jeffrey's work must remain the substance.

## Asset inventory

All production assets are standalone SVG files with outlined lettering and no raster, webfont, filter, or external-file dependency.

| Asset | Purpose |
| --- | --- |
| `public/brand/black-sheep-mark.svg` | Primary charcoal symbol for light backgrounds |
| `public/brand/black-sheep-mark-reversed.svg` | Bone symbol for charcoal, green, video, and photography |
| `public/brand/black-sheep-lockup-horizontal.svg` | Default website header, truck-door, and wide-format logo |
| `public/brand/black-sheep-lockup-horizontal-reversed.svg` | Wide logo for dark surfaces |
| `public/brand/black-sheep-lockup-stacked.svg` | Centered signage, social, proposal cover, and square-format logo |
| `public/brand/black-sheep-lockup-stacked-reversed.svg` | Centered logo for dark surfaces |
| `public/brand/black-sheep-herd-signature.svg` | Secondary narrative and motion signature |
| `public/brand/black-sheep-herd-signature-reversed.svg` | Herd signature for dark surfaces |
| `public/brand/black-sheep-favicon.svg` | Small digital app/site icon |
| `public/brand/black-sheep-brand-sheet.svg` | Review sheet; not a substitute for the individual production assets |

## Logo architecture

### Primary mark

The turning sheep is the corporate mark. It should appear once per composition and remain still in ordinary brand applications. Its ear, eye, and sweeping negative-space shoulder are identifying features; do not redraw or simplify them ad hoc.

The mark is intentionally a silhouette. Do not add wool texture, facial detail, gradients, shadows, scenery, houses, grass, fences, tools, or circular badges.

### Wordmark lockups

Use the horizontal lockup by default. Use the stacked lockup only when the available area is closer to square or when a centered composition is materially stronger.

The supplied lettering is outlined. Never replace it with live text, retype it in a nearby font, tighten individual letters, or change the relationship between `BLACK SHEEP` and `PROPERTY MANAGEMENT`.

### Herd signature

The herd signature is a secondary storytelling device, not another primary logo. The solid sheep faces left. All three outlined sheep face right. The gap between them is intentional open pasture—not a divider line.

Good uses include:

- An opening or closing motion beat
- A section transition between the cinematic herd and real project work
- Vehicle rear panels or long trailer graphics
- A restrained footer signature
- A pattern when repeated at very low density

Do not place the herd signature immediately beside a full primary lockup. Do not recolor individual white sheep. Do not reverse the directions.

## Clear space and minimum size

Let `x` equal the width of one front leg in the primary mark.

- Keep at least `x` of empty space around every side of the mark.
- Keep at least `1.5x` around horizontal and stacked lockups.
- Treat the internal gap in the herd signature as protected space.
- Do not allow page edges, copy, photographs' focal points, or other logos to enter the clear-space area.

Minimum recommended sizes:

| Asset | Digital | Print / fabrication |
| --- | ---: | ---: |
| Primary mark | 24 px high | 0.375 in high |
| Horizontal lockup | 200 px wide | 2.5 in wide |
| Stacked lockup | 140 px wide | 1.75 in wide |
| Herd signature | 240 px wide | 3 in wide |
| Embroidered primary mark | — | 1.5 in high |

For vinyl, routing, or embroidery, run one physical proof at final size before ordering a full production batch. Preserve the eye and shoulder counter; if either closes, increase the output size rather than altering the artwork.

## Color

### Core palette

| Token | Hex | Use |
| --- | --- | --- |
| Charcoal | `#121411` | Primary mark, typography, dark fields |
| Warm Bone | `#F3F0E8` | Main light field, reversed logo, calm negative space |
| Pasture Green | `#355A3F` | Restrained accent, links, CTA states, favicon field |
| Sage | `#A9B7A4` | Rules, quiet metadata, secondary surfaces |

Charcoal on Warm Bone has a WCAG contrast ratio of approximately 16.3:1. Pasture Green on Warm Bone is approximately 6.9:1. Both combinations support normal-size interface text.

### Color behavior

- Lead with Charcoal and Warm Bone. The identity should still feel complete in one color.
- Keep Pasture Green to roughly 10% or less of a typical composition.
- Use Sage for atmosphere and organization, not primary calls to action.
- On photographs and video, use the reversed Bone artwork over a sufficiently dark, quiet region. Add a localized dark scrim only when necessary for contrast.
- Never apply gradients inside the logo.
- Avoid bright turf green, blue-corporate palettes, gold-luxury clichés, and faux-paper textures inside production marks.

## Typography

### Logo typography

The wordmark is custom assembled and supplied as vector outlines. It is not a text style for headlines or body copy.

### Digital typography

Recommended system:

- Display and navigation: `Manrope`, weights 600–700
- Body and interface: `Inter`, weights 400–600
- System fallback: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Principles:

- Use large type because there is something meaningful to say, not as decoration.
- Keep display tracking between `-0.04em` and `-0.02em`.
- Keep body tracking at normal spacing and line-height near 1.5.
- Reserve widely tracked uppercase for short utility labels only.
- Avoid script, farmhouse, western, slab-serif, and novelty animal fonts.
- Do not set every section in giant centered headlines; use a visible hierarchy and editorial pacing.

## Motion

Motion should communicate decision, then resolve. It should not turn the sheep into a mascot.

### Hero narrative

1. The white herd advances in a shared direction.
2. The black sheep holds for approximately 250–400 ms.
3. It looks back, turns, and moves against the herd.
4. The camera follows the black sheep into Jeffrey's real property work.
5. The interface settles; the primary logo does not keep moving.

### Herd signature animation

- Let the three outline sheep drift right by 4–6% of the signature width.
- Hold the black sheep briefly, then send it left by 10–14%.
- Total duration: 1.2–1.8 seconds.
- Preferred easing: cubic-bezier `(0.22, 1, 0.36, 1)`.
- A small change in velocity is enough; do not bounce the animals vertically.
- Play once on meaningful entry, not continuously on every scroll tick.

For `prefers-reduced-motion: reduce`, show the static final herd signature immediately and replace scroll-scrubbed video with a poster frame plus direct content access.

Never use elastic easing, perpetual floating, random sheep movement, logo morphing, particle explosions, typewriter copy, or cursor-chasing effects.

## Photography

Real work is the proof layer. Use Jeffrey's supplied project photographs and authorized images from the existing Danaher site; the old site's styling is not a reference.

### Selection

- Favor finished grounds, visible mower striping, crisp edging, healthy planting, clean interiors, snow equipment in action, and specialty-care details.
- Include people, equipment, and process when they add credibility.
- Prefer images with a clear subject and useful negative space over busy phone-photo collages.
- Pair wide establishing photographs with tight evidence shots.
- Do not fabricate before/after results, client properties, employees, or equipment with generative imagery.

### Treatment

- Keep greens believable. Do not push lawns into neon saturation.
- Correct exposure and white balance before applying a style.
- Use a neutral-to-slightly-warm grade with controlled highlights and deep, clean blacks.
- Crop deliberately for the layout; do not stretch or place every image inside rounded cards.
- Use full-bleed interruptions and editorial crops more often than tiled galleries.
- When copy overlays a photograph, target at least 4.5:1 contrast and protect the subject's face or key work detail.

The cinematic sheep footage is the only deliberately surreal imagery. Once it hands off to the business, the site should become materially real.

## Voice

The voice is assured, hardworking, dry, and local.

Use:

- Short declarative headlines
- Specific services and proof
- Plain descriptions of what the team handles
- One restrained sheep line where it earns a smile

Avoid:

- Sheep puns in every section
- Inflated luxury language
- Generic phrases such as “elevate your outdoor oasis”
- Unsupported superlatives
- Corporate jargon and long mission-statement blocks

## Misuse

Do not:

- Add an enclosure, crest, house roof, blade of grass, or landscaping tool
- Outline the primary silhouette
- Fill the primary mark with photography or texture
- Stretch, skew, rotate, crop, or rearrange a lockup
- Change the number or direction of animals in the herd signature
- Add a divider between the black sheep and the herd
- Use the old `LANDSCAPING` descriptor in place of `PROPERTY MANAGEMENT`
- Put the logo over visually noisy footage without contrast protection
- Animate the mark simply because motion is available

## Production note

These SVGs are the source-of-truth web and vector masters. Export PNG or WebP derivatives only for platforms that cannot accept SVG. Keep those exports in sRGB, preserve transparency, and generate them from these masters rather than screenshots.
