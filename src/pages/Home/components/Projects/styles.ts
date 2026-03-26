import type { CSSProperties } from 'react'

export const grid: CSSProperties = {
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
}

export const linkWrapper: CSSProperties = {
  display: 'block',
  height: '100%',
}

export const yearLabel: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.72rem',
  fontWeight: 500,
  color: 'var(--text-muted)',
}

export const iconColor: CSSProperties = {
  color: 'var(--text-muted)',
}

export const projectTitle: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.3rem',
  fontWeight: 700,
  marginBottom: 12,
  letterSpacing: '-0.01em',
}

export const projectDescription: CSSProperties = {
  fontSize: '0.95rem',
  lineHeight: 1.65,
  color: 'var(--text-secondary)',
  marginBottom: 20,
  flex: 1,
}
