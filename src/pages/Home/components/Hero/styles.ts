import type { CSSProperties } from 'react'

export const accentGlow: CSSProperties = {
  top: '10%',
  right: '-8%',
  width: 600,
  height: 600,
  borderRadius: '50%',
  background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
  filter: 'blur(100px)',
}

export const wrapper: CSSProperties = {
  maxWidth: 1140,
  margin: '0 auto',
  width: '100%',
  paddingTop: 80,
}

export const titleLabel: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.85rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
  marginBottom: 12,
}

export const name: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  color: 'var(--text-primary)',
}

export const headline: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
  fontWeight: 800,
  lineHeight: 1.1,
  letterSpacing: '-0.03em',
}

export const headlineSub: CSSProperties = {
  color: 'var(--text-muted)',
  fontSize: 'clamp(1.6rem, 3.8vw, 2.6rem)',
}

export const bio: CSSProperties = {
  fontSize: '1.25rem',
  lineHeight: 1.7,
  color: 'var(--text-secondary)',
  marginBottom: 32,
}

export const socialsRow: CSSProperties = {
  marginTop: 32,
  paddingTop: 24,
  borderTop: '1px solid var(--border)',
}

