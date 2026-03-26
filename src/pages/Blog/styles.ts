import type { CSSProperties } from 'react'

export const pageWrapper: CSSProperties = {
  background: 'var(--bg)',
  color: 'var(--text-primary)',
}

export const contentPadding: CSSProperties = {
  paddingTop: 80,
  paddingBottom: 80,
}

export const container: CSSProperties = {
  maxWidth: 800,
  margin: '0 auto',
}

export const backLink: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  transition: 'color 0.3s',
  marginBottom: 40,
  display: 'inline-flex',
}

export const pageTitle: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  marginBottom: 16,
}

export const accentDot: CSSProperties = {
  color: 'var(--accent)',
}

export const tagFilters: CSSProperties = {
  marginBottom: 40,
}

export const activeTagStyle: CSSProperties = {
  background: 'var(--accent)',
  color: 'var(--bg)',
  cursor: 'pointer',
}

export const inactiveTagStyle: CSSProperties = {
  cursor: 'pointer',
}

export const blogTitle: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.15rem',
  fontWeight: 600,
  color: 'var(--text-primary)',
  transition: 'color 0.3s',
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

export const emptyState: CSSProperties = {
  color: 'var(--text-muted)',
  textAlign: 'center',
  padding: '80px 0',
}
