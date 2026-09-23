import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  /*
    GitHub Pages serves a project site from a subdirectory — this one lives at
    rolandvtonder.github.io/The-Suit-Hire/, not at the domain root. Without this
    every built asset would be requested from /assets/... and 404.

    If the site later moves to its own domain (thesuithire.co.za or similar),
    change this back to '/' and update the asset helper's callers accordingly —
    see the note on `asset` in src/site.ts.
  */
  base: '/The-Suit-Hire/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
