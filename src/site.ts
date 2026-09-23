/* ---------------------------------------------------------------------------
   Single source of truth for everything David might need to change.

   Phone, hours, address and the review count all appear in more than one place
   on the page (and again in the structured data in index.html). Keeping them
   here means a change is one edit, not a search-and-replace.
   --------------------------------------------------------------------------- */

/*
  Vite rewrites asset URLs it can see — the ones in index.html and in CSS url()
  — to sit under `base`. It cannot rewrite a path written as a string inside a
  component, so "/photos/hero-party.jpg" would stay absolute and 404 on GitHub
  Pages, which serves this site from /The-Suit-Hire/.

  Every runtime reference to something in public/ goes through here instead.
  BASE_URL is whatever `base` is set to in vite.config.ts, so this keeps working
  if the site moves to its own domain and base goes back to '/'.
*/
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const PHONE_DISPLAY = '083 852 0155'
export const PHONE_TEL = '+27838520155'

/** wa.me wants the international number with no +, spaces or dashes. */
export const WHATSAPP = `https://wa.me/27838520155?text=${encodeURIComponent(
  "Hi David, I'd like to book a fitting at The Suit Hire.",
)}`

export const ADDRESS_LINES = ['9 Cilliers Street', 'Suideroord', 'Johannesburg South, 2091']

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=The+Suit+Hire+9+Cilliers+St+Suideroord+Johannesburg+South+2091'

export const FACEBOOK = 'https://www.facebook.com/thesuithire/'
export const INSTAGRAM = 'https://www.instagram.com/thesuithiresa/'

export const RATING = '5.0'
export const REVIEW_COUNT = '85'

export const HOURS = [
  { day: 'Monday', time: 'Closed' },
  { day: 'Tuesday', time: '9:00 – 17:30' },
  { day: 'Wednesday', time: '9:00 – 17:30' },
  { day: 'Thursday', time: '9:00 – 17:30' },
  { day: 'Friday', time: '9:00 – 17:30' },
  { day: 'Saturday', time: '9:00 – 14:00' },
  { day: 'Sunday', time: 'Closed' },
] as const
