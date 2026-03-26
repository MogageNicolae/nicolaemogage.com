import type { CSSProperties } from 'react'

export const container: CSSProperties = {
  maxWidth: 1140,
  margin: '0 auto',
}

export const sectionHeading: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'clamp(2rem, 4vw, 3rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
}

export const subHeading: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  padding: '12px',
}

export const accentDot: CSSProperties = {
  color: 'var(--accent)',
}

export const sectionBg: CSSProperties = {
  background: 'var(--bg-secondary)',
  transition: 'background 0.5s',
}

export const cardTitle: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.15rem',
  fontWeight: 700,
}

export const cardCompany: CSSProperties = {
  color: 'var(--accent)',
  fontFamily: 'var(--font-heading)',
  fontSize: '0.85rem',
  fontWeight: 600,
}

export const metaText: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.7rem',
  fontWeight: 500,
  color: 'var(--text-muted)',
  letterSpacing: '0.05em',
}

export const bulletItem: CSSProperties = {
  fontSize: '0.95rem',
  lineHeight: 1.65,
  color: 'var(--text-secondary)',
  paddingLeft: 16,
  position: 'relative',
}

export const bulletDot: CSSProperties = {
  position: 'absolute',
  left: 0,
  top: 10,
  width: 5,
  height: 5,
  borderRadius: '50%',
  background: 'var(--border)',
}

export const defaultCursor: CSSProperties = {
  cursor: 'default',
}

export const categoryLabel: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.72rem',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: 14,
}
