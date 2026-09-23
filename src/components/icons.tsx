/* Inline SVG only — no icon dependency.

   Every glyph is drawn on a 24-unit grid at 1.5 stroke unless noted, so the
   set keeps one weight across the page. Icons here are decorative by default:
   each is aria-hidden and non-focusable, and the component that uses one is
   responsible for supplying the accessible name. */

type IconProps = { className?: string }

const base = {
  fill: 'none',
  'aria-hidden': true,
  focusable: 'false',
} as const

const stroke = {
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

/** Bow-tie mark. Echoes the logo's structure — a centred knot with two flared
    wings — at a size where the logo's own script lettering would go muddy. */
export function BowMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" {...base}>
      <rect x="1" y="1" width="38" height="38" rx="11" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M17.4 15.2 9.6 12.6a1.3 1.3 0 0 0-1.7 1.2v12.4a1.3 1.3 0 0 0 1.7 1.2l7.8-2.6Z"
        {...stroke}
        strokeWidth="1.4"
      />
      <path
        d="M22.6 15.2l7.8-2.6a1.3 1.3 0 0 1 1.7 1.2v12.4a1.3 1.3 0 0 1-1.7 1.2l-7.8-2.6Z"
        {...stroke}
        strokeWidth="1.4"
      />
      <rect x="16.8" y="14.4" width="6.4" height="11.2" rx="2" {...stroke} strokeWidth="1.4" />
    </svg>
  )
}

export function Chevron({ className }: IconProps) {
  return (
    <svg className={className} width="10" height="7" viewBox="0 0 10 7" {...base}>
      <path d="M1 1.4 5 5.4 9 1.4" {...stroke} strokeWidth="1.4" />
    </svg>
  )
}

export function MenuGlyph({ className }: IconProps) {
  return (
    <svg className={className} width="20" height="12" viewBox="0 0 20 12" {...base}>
      <path d="M0 1h20M0 6h20M0 11h20" {...stroke} strokeWidth="1.4" />
    </svg>
  )
}

export function CloseGlyph({ className }: IconProps) {
  return (
    <svg className={className} width="15" height="15" viewBox="0 0 15 15" {...base}>
      <path d="M1 1l13 13M14 1L1 14" {...stroke} strokeWidth="1.4" />
    </svg>
  )
}

/** Solid mark — this one is filled rather than stroked because it sits inside
    the CTA's copper tile, where a hairline would disappear. */
export function WhatsApp({ className, size = 20 }: IconProps & { size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base}>
      <path
        d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.23-8.24 8.23Zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.49-.4-.42-.55-.43l-.47-.01c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.74 2.65 4.21 3.71.59.26 1.05.41 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Phone({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" {...base}>
      <path
        d="M6.3 3.5h3.1l1.5 3.9-2 1.3a12.4 12.4 0 0 0 5.4 5.4l1.3-2 3.9 1.5v3.1a2 2 0 0 1-2.2 2A17.6 17.6 0 0 1 4.3 5.7a2 2 0 0 1 2-2.2Z"
        {...stroke}
      />
    </svg>
  )
}

export function Pin({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" {...base}>
      <path d="M12 21.5c4.3-4.6 6.5-8.1 6.5-10.8a6.5 6.5 0 0 0-13 0c0 2.7 2.2 6.2 6.5 10.8Z" {...stroke} />
      <circle cx="12" cy="10.5" r="2.5" {...stroke} />
    </svg>
  )
}

export function Clock({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" {...base}>
      <circle cx="12" cy="12" r="8.8" {...stroke} />
      <path d="M12 7.2V12l3.2 2" {...stroke} />
    </svg>
  )
}

/** Filled star for the rating rows. */
export function Star({ className }: IconProps) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 20 20" {...base}>
      <path
        d="M10 1.4 12.5 7l6.1.6-4.6 4.1 1.3 6-5.3-3.1L4.7 17.7l1.3-6L1.4 7.6 7.5 7Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Facebook({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" {...base}>
      <path
        d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5H16.7V3.6A21 21 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.12V9.9H7.6V13h2.7v8Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Instagram({ className }: IconProps) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" {...base}>
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" {...stroke} />
      <circle cx="12" cy="12" r="4.1" {...stroke} />
      <circle cx="17.1" cy="6.9" r="1.1" fill="currentColor" />
    </svg>
  )
}

/* Step-rail glyphs ----------------------------------------------------------
   One per stage of the hire, in the order the customer actually meets them. */

const step = { width: 24, height: 24, viewBox: '0 0 24 24', ...base } as const

/** 01 — message David. */
export function StepMessage({ className }: IconProps) {
  return (
    <svg className={className} {...step}>
      <path d="M20.4 12.3c0 3.9-3.6 7-8 7a9.3 9.3 0 0 1-2.6-.36L4.8 20.4l1.3-3.5a6.6 6.6 0 0 1-2.5-4.6c0-3.87 3.6-7 8-7s8.8 3.13 8.8 7Z" {...stroke} />
    </svg>
  )
}

/** 02 — get measured. A tape measure rather than a ruler; the fitting is the
    thing the reviews keep singling out. */
export function StepTape({ className }: IconProps) {
  return (
    <svg className={className} {...step}>
      <rect x="2.4" y="8.4" width="19.2" height="7.2" rx="2.4" {...stroke} />
      <path d="M7 8.4v2.6M11 8.4v3.6M15 8.4v2.6M19 8.4v3.6" {...stroke} />
    </svg>
  )
}

/** 03 — choose the look. */
export function StepHanger({ className }: IconProps) {
  return (
    <svg className={className} {...step}>
      <path d="M12 8.6V7.4a2.1 2.1 0 1 1 2.1-2.1" {...stroke} />
      <path d="M12 8.6 3.4 14.6c-.9.6-.5 2 .6 2h16c1.1 0 1.5-1.4.6-2L12 8.6Z" {...stroke} />
    </svg>
  )
}

/** 04 — collect and go. */
export function StepBowtie({ className }: IconProps) {
  return (
    <svg className={className} {...step}>
      <path d="M9.9 9.5 4.3 7.6a1 1 0 0 0-1.3.95v6.9a1 1 0 0 0 1.3.95l5.6-1.9Z" {...stroke} />
      <path d="M14.1 9.5l5.6-1.9a1 1 0 0 1 1.3.95v6.9a1 1 0 0 1-1.3.95l-5.6-1.9Z" {...stroke} />
      <rect x="9.4" y="8.8" width="5.2" height="6.4" rx="1.6" {...stroke} />
    </svg>
  )
}

/** Scroll affordance inside the hero's centre badge. */
export function ArrowDown({ className }: IconProps) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" {...base}>
      <path d="M7 1.4v11.2M2.6 8.4 7 12.8l4.4-4.4" {...stroke} strokeWidth="1.3" />
    </svg>
  )
}
