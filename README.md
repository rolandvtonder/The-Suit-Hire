# The Suit Hire — website

Seven-page site for The Suit Hire, 9 Cilliers Street, Suideroord, Johannesburg South.

Built with Vite + React 19 + TypeScript, Tailwind v4 (via `@tailwindcss/vite`), and
framer-motion. Styling is real CSS in per-component stylesheets, with the brand tokens
as CSS custom properties in `src/index.css`.

## Running it

```bash
npm install
npm run dev
```

Vite prints the URL — note it includes the `/The-Suit-Hire/` prefix, because that is
where the site is served in production and dev matches it.

```bash
npm run build    # type-checks, then writes dist/
npm run preview  # serves the built dist/ locally
npm run lint
npm run pages    # regenerates the seven HTML entry points
```

## How the pages work

Seven real HTML files, not a client-side router:

| URL | Page |
| --- | --- |
| `/` | Home — cinematic hero, section cards, the four hire steps |
| `/weddings/` | Weddings & groom parties |
| `/matric/` | Matric dance & prom |
| `/about/` | Meet David |
| `/reviews/` | Reviews |
| `/faq/` | How it works + the usual questions |
| `/visit/` | Address, hours, directions |

Each one is a genuine file with its own `<title>`, description and canonical URL, so
Google can index "matric dance suit hire" and "wedding suit hire" as separate pages
rather than one blob. It also avoids the usual GitHub Pages trap: a single-page router
404s on a deep link unless you smuggle the app through a `404.html`, and that serves real
visitors a 404 status.

All seven load the same `src/main.tsx`, which picks its component from the URL
(`currentPageKey` in `src/site.ts`). So there is one bundle and one entry point.

**The HTML files are generated.** Do not hand-edit them — change
`scripts/make-pages.mjs` and run `npm run pages`. That keeps the shared `<head>` (fonts,
favicon, viewport, structured data) identical across every page by construction.

## Putting it online

Live at **https://rolandvtonder.github.io/The-Suit-Hire/**, deployed automatically by
`.github/workflows/deploy.yml` on every push to `main`. Progress shows in the Actions tab.

If Pages ever stops serving the built site, check **Settings → Pages → Build and
deployment → Source** is set to **GitHub Actions**. On "Deploy from a branch" it serves
the repository as-is, which hands the browser an `index.html` pointing at
`/src/main.tsx` — a TypeScript module no browser can run — and the page comes up blank.

### Moving to a custom domain later

GitHub Pages serves this from a subdirectory, so `vite.config.ts` sets
`base: '/The-Suit-Hire/'`. On a custom domain the site sits at the root instead:

1. Set `base` back to `'/'` in `vite.config.ts`.
2. Change `SITE` at the top of `scripts/make-pages.mjs` and run `npm run pages`.

Nothing else changes — every runtime asset path and internal link goes through the
`asset()` and `url()` helpers in `src/site.ts`, which read `base` at build time.

The build is plain static files, so it will also run on Netlify, Vercel or Cloudflare
Pages: build command `npm run build`, publish directory `dist`.

## What to change, and where

| You want to change | Edit |
| --- | --- |
| Phone, WhatsApp text, address, hours, review count, socials, the page list | `src/site.ts` — each appears in several places and they all read from here |
| Page titles and search descriptions | `scripts/make-pages.mjs`, then `npm run pages` |
| Hero headline, backdrop photos, quadrant copy | `src/components/CinematicHero.tsx` |
| Home-page cards | `src/components/Teasers.tsx` |
| The four hire steps | `src/components/Steps.tsx` |
| Weddings / Matric copy and photo choices | `src/pages/Weddings.tsx`, `src/pages/Matric.tsx` |
| The reviews shown | `src/components/Reviews.tsx` |
| The FAQ | `src/components/Faq.tsx` |
| "Meet David" copy | `src/components/About.tsx` |
| The closing booking strip | `src/components/VisitStrip.tsx` |
| Colours, spacing, fonts | `:root` in `src/index.css` |

Trading hours also appear in the structured-data block generated into the home page.
That block is what lets Google show hours, phone number and star rating directly in
search results, so keep `src/site.ts`, `scripts/make-pages.mjs` and the real Google
Business Profile in step with each other.

## Before this goes live

1. **Two FAQ answers are deliberately vague.** "What does a hire include?" and "How long
   do I keep it, and is there a deposit?" currently say David will confirm at the fitting,
   because nobody has stated the real terms. Real specifics convert better — replace them.
   See the comment at the top of `src/components/Faq.tsx`.
2. **Add the website to the Google Business Profile.** The listing showed "Add website",
   so the 5.0-from-85-reviews profile currently sends nobody here.
3. **A custom domain** would read better than a github.io URL on a business card. See
   above for the two files to change.

## Photographs

`public/photos/` holds ten photographs from the business's own Instagram
(`@thesuithiresa`). Originals are in `Mediaa/instagram/`.

Two images from that feed are **deliberately excluded** from both the site and this
repository: `ig-02` is a press photograph of Paul Newman and `ig-05` is one of Marlon
Brando and Frank Sinatra. They are fine as mood posts on social media; putting famous
press photographs on a commercial website is a copyright and publicity-rights exposure.
They are listed in `.gitignore`. Do not add them back.

Two things worth improving when there is time:

- Every photo is **640px on its long edge** — all Instagram serves publicly. Fine for the
  cards and mosaics, softer than ideal behind the hero. Originals off David's phone would
  be sharper: drop replacements into `public/photos/` under the same filenames and
  nothing else needs to change.
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
- The hero backdrop crossfades four photographs on a six-second cycle, with a slow scale
  drift, because there is no video of the shop. Reduced-motion viewers get the first frame
  and nothing moves.
- Several sizes in `CinematicHero.css` are measured rather than chosen, and the comments
  record the measurement. The headline ceiling in particular is set by the width
  "remembered for life." needs — raise it and the last word orphans onto its own line.
- Text contrast was measured, not assumed: every pair on the page clears 4.5:1.
- Every interactive target measures at least 44×44px. Small standalone links (phone
  numbers, the map link) use the `.tap-out` helper in `src/index.css`, which grows the hit
  area with a pseudo-element without moving the text.
- `prefers-reduced-motion` is honoured in CSS, and `MotionConfig reducedMotion="user"` in
  `src/App.tsx` covers the framer-motion entrances a media query cannot reach.
