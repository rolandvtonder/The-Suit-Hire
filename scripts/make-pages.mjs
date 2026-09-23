/* Writes the seven HTML entry points.

   Generated rather than hand-copied so the shared <head> — fonts, favicon,
   viewport, structured data — is identical across every page by construction.
   Each page contributes only what genuinely differs: its path, title,
   description, and the photograph a shared link should preview with. */

import { writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE = 'https://rolandvtonder.github.io/The-Suit-Hire'
const root = process.argv[2] ?? fileURLToPath(new URL('..', import.meta.url))

const pages = [
  {
    dir: '',
    title: 'The Suit Hire — Tuxedo & Suit Rentals, Johannesburg South',
    description:
      'Tuxedo and suit hire for weddings, matric dances and formal occasions. Fitted in person by David in Suideroord, Johannesburg South. 5.0 from 85 Google reviews.',
    image: 'photos/hero-party.jpg',
    schema: true,
  },
  {
    dir: 'weddings',
    title: 'Wedding Suit & Tuxedo Hire, Johannesburg South — The Suit Hire',
    description:
      'Hire suits and tuxedos for the whole wedding party. Groom, groomsmen, fathers and page boys fitted and matched as one set, in Suideroord, Johannesburg South.',
    image: 'photos/hero-party.jpg',
  },
  {
    dir: 'matric',
    title: 'Matric Dance Suit & Tuxedo Hire, Johannesburg South — The Suit Hire',
    description:
      'Matric dance and prom suit hire in Johannesburg South. Black tie, dinner jackets and slim-cut suits, fitted in person. Book early — matric season fills up fast.',
    image: 'photos/matric-couple.jpg',
  },
  {
    dir: 'about',
    title: 'Meet David — The Suit Hire, Suideroord',
    description:
      'The Suit Hire is a one-man shop in Suideroord. David takes the measurements, pulls the options, and tells you honestly what will not work.',
    image: 'photos/detail-accessories.jpg',
  },
  {
    dir: 'reviews',
    title: 'Reviews — 5.0 from 85 Google Reviews — The Suit Hire',
    description:
      'What customers say about hiring from The Suit Hire in Johannesburg South, quoted verbatim from the Google Business Profile.',
    image: 'photos/wedding-couple.jpg',
  },
  {
    dir: 'faq',
    title: 'How Suit Hire Works & Common Questions — The Suit Hire',
    description:
      'How hiring works start to finish, and straight answers on booking ahead, fittings, what is included, and dressing a whole wedding party.',
    image: 'photos/range-grey.jpg',
  },
  {
    dir: 'visit',
    title: 'Visit Us — 9 Cilliers Street, Suideroord, Johannesburg South',
    description:
      'Find The Suit Hire at 9 Cilliers Street, Suideroord, Johannesburg South. Trading hours, directions and how to book a fitting on WhatsApp.',
    image: 'photos/wedding-navy.jpg',
  },
]

const schema = `
    <!--
      Local-business structured data, on the home page only — repeating it on
      every page would declare seven businesses. This is what lets Google show
      the star rating, hours and phone number directly in search results, so it
      has to stay in step with the real Google Business Profile listing.
    -->
    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ClothingStore",
        "name": "The Suit Hire",
        "description": "Tuxedo and suit rentals for weddings, matric dances and formal occasions in Johannesburg South.",
        "url": "${SITE}/",
        "image": "${SITE}/logo.png",
        "telephone": "+27838520155",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "9 Cilliers Street",
          "addressLocality": "Suideroord, Johannesburg South",
          "postalCode": "2091",
          "addressRegion": "Gauteng",
          "addressCountry": "ZA"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "reviewCount": "85"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/thesuithire/",
          "https://www.instagram.com/thesuithiresa/"
        ]
      }
    </script>
`

const html = (p) => {
  const canonical = p.dir ? `${SITE}/${p.dir}/` : `${SITE}/`
  // Vite rewrites these leading-slash public paths to sit under `base`.
  const depth = p.dir ? '../' : ''
  return `<!doctype html>
<html lang="en-ZA">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#141311" />

    <title>${p.title}</title>
    <meta name="description" content="${p.description}" />
    <!-- TODO: when a custom domain is registered, change SITE in the page
         generator and set \`base\` back to '/' in vite.config.ts. -->
    <link rel="canonical" href="${canonical}" />

    <!-- Social scrapers do not resolve relative paths, so these stay absolute. -->
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="The Suit Hire" />
    <meta property="og:title" content="${p.title}" />
    <meta property="og:description" content="${p.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${SITE}/${p.image}" />
    <meta property="og:locale" content="en_ZA" />
    <meta name="twitter:card" content="summary_large_image" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&display=swap"
      rel="stylesheet"
    />
${p.schema ? schema : ''}  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="${depth}src/main.tsx"></script>
  </body>
</html>
`
}

for (const p of pages) {
  const dir = p.dir ? resolve(root, p.dir) : root
  mkdirSync(dir, { recursive: true })
  writeFileSync(resolve(dir, 'index.html'), html(p))
  console.log(`  ${p.dir || '(home)'}/index.html`)
}
