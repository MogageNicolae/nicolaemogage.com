import type { CSSProperties } from 'react'

export const footerBorder: CSSProperties = {
  borderTop: '1px solid var(--border)',
}

export const copyright: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.7rem',
  fontWeight: 500,
  color: 'var(--text-muted)',
  letterSpacing: '0.05em',
}

export const footerLink: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.7rem',
  fontWeight: 500,
  color: 'var(--text-muted)',
  textDecoration: 'none',
  letterSpacing: '0.05em',
}
