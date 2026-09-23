# The Suit Hire — website

One-page site for The Suit Hire, 9 Cilliers Street, Suideroord, Johannesburg South.

Built with Vite + React 19 + TypeScript, Tailwind v4 (via `@tailwindcss/vite`), and
framer-motion. Styling is real CSS in per-component stylesheets, with the brand tokens
as CSS custom properties in `src/index.css`.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

```bash
npm run build    # type-checks, then writes dist/
npm run preview  # serves the built dist/ locally
npm run lint
```

## Putting it online

`npm run build` produces a `dist/` folder of plain static files. Drag that folder onto
[Netlify Drop](https://app.netlify.com/drop) or connect the repo to Netlify, Vercel or
Cloudflare Pages — there is no server or database, so any static host works.

## What to change, and where

| You want to change | Edit |
| --- | --- |
| Phone number, WhatsApp text, address, trading hours, review count, social links | `src/site.ts` — every one of these appears in several places and they all read from here |
| The reviews shown | `src/components/Reviews.tsx` |
| The FAQ | `src/components/Faq.tsx` |
| Headline, hero copy, step names | `src/components/Hero.tsx` |
| Weddings / Matric copy and photo choices | `src/App.tsx` |
| "Meet David" copy | `src/components/About.tsx` |
| Colours, spacing, fonts | `:root` in `src/index.css` |

Trading hours also appear a second time, in the structured-data block at the bottom of
`index.html`. That block is what lets Google show your hours, phone number and star
rating in search results, so keep it in step with `src/site.ts` **and** with the real
Google Business Profile.

## Before this goes live

Three things need David's input or a decision:

1. **Two FAQ answers are deliberately vague.** "What does a hire include?" and "How long
   do I keep it, and is there a deposit?" currently say David will confirm at the fitting,
   because nobody has stated the real terms. Real specifics convert better — replace them.
   See the comment at the top of `src/components/Faq.tsx`.
2. **The domain is a placeholder.** `index.html` has
   `<link rel="canonical" href="https://thesuithire.co.za/" />` with a TODO above it.
   Point it at the real domain once registered. As of the build, `thesuithire.com` did not
   resolve.
3. **Add the website to the Google Business Profile.** The listing currently shows "Add
   website", so the 5.0-from-85-reviews profile sends nobody here.

## Photographs

`public/photos/` holds ten photographs taken from the business's own Instagram
(`@thesuithiresa`). Originals are in `Mediaa/instagram/`.

Two images from that Instagram feed were **deliberately excluded**: `ig-02` is a press
photograph of Paul Newman and `ig-05` is a press photograph of Marlon Brando and Frank
Sinatra. They are fine as mood posts on social media; putting famous press photographs on
a commercial website is a copyright and publicity-rights exposure. Do not add them back.

Two things worth improving when there is time:

- Every photo is **640px on its long edge** — that is all Instagram serves publicly. The
  layout is built around this (the hero photo sits in a column rather than full-bleed
  precisely so it is not upscaled), but originals off David's phone would be sharper,
  especially in the hero. Drop replacements into `public/photos/` under the same
  filenames and nothing else needs to change.
- The photographs show identifiable customers. They are already public on the business's
  own social accounts, but it is worth being comfortable that those customers are happy to
  appear on the website too — particularly the wedding couples.

## Logo files

- `public/logo-mark.png` — the supplied artwork with its dark plate keyed out, so it sits
  on any surface. This is what the footer uses.
- `public/logo.png` — the original, on its solid plate. Kept for anywhere a solid
  background is wanted, and referenced by the structured data.
- `public/favicon.svg` — a copper bow-tie mark, drawn to read at 16px where the full
  script lettering would not.

## Notes on the build

- Brand colours were sampled from the supplied logo rather than picked by eye: the plate
  reads `#202020`, the lettering `#f8f8f8`, and the flourishes cluster tightly around
  `#b4805c`. The site deepens the field to `#141311` so the copper reads warmer against it.
- One typographic gesture: a single Playfair Display italic phrase per heading, in copper.
  Everything else is DM Sans.
- Text contrast was measured, not assumed — the lowest pair on the page is the copper
  eyebrow at 7.4:1, well clear of the 4.5:1 requirement.
- Every interactive target measures at least 44×44px. A few small links (the phone
  numbers, the map link) use the `.tap-out` helper in `src/index.css`, which grows the hit
  area with a pseudo-element without moving the text.
- `prefers-reduced-motion` is honoured in CSS, and `MotionConfig reducedMotion="user"` in
  `src/App.tsx` covers the framer-motion entrances that a media query cannot reach.
- Cumulative Layout Shift measures 0.
