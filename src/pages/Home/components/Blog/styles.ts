import type { CSSProperties } from 'react'

export const blogTitle: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.15rem',
  fontWeight: 600,
  color: 'var(--text-primary)',
  transition: 'color 0.3s',
  letterSpacing: '-0.01em',
}

export const blogTag: CSSProperties = {
  marginLeft: 12,
  verticalAlign: 'middle',
}

export const blogMeta: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.72rem',
  fontWeight: 500,
  color: 'var(--text-muted)',
  whiteSpace: 'nowrap',
}

export const viewAllLink: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.78rem',
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
}

export const viewAllArrow: CSSProperties = {
  fontSize: '1.1rem',
}
