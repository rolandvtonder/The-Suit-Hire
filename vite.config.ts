import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

/*
  Seven real pages, not a client-side router.

  This is a brochure site for a local business, so search visibility matters
  more than instant in-app navigation. Each route is a genuine HTML file with
  its own <title>, description and canonical URL, which means Google indexes
  "matric dance suit hire" and "wedding suit hire" as separate pages instead of
  one blob. It also sidesteps the usual GitHub Pages problem: a single-page
  router 404s on a deep link unless you smuggle the app through a 404.html, and
  that serves real visitors a 404 status. Static files just work.

  Every page loads the same src/main.tsx, which picks its component from the
  URL — so the bundle is shared and there is one entry point to reason about.
*/
const routes = ['weddings', 'matric', 'about', 'reviews', 'faq', 'visit']

const at = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  /*
    GitHub Pages serves a project site from a subdirectory — this one lives at
    rolandvtonder.github.io/The-Suit-Hire/, not at the domain root. Without this
    every built asset would be requested from /assets/... and 404.

    If the site later moves to its own domain, change this back to '/' and
    update the absolute URLs in the page <head>s — see README.
  */
  base: '/The-Suit-Hire/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        home: at('./index.html'),
        ...Object.fromEntries(routes.map((r) => [r, at(`./${r}/index.html`)])),
      },
    },
  },
})
