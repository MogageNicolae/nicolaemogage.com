import type { CSSProperties } from 'react'

export const headingMargin: CSSProperties = {
  marginBottom: 48,
}

export const emphasisText: CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontWeight: 400,
  color: 'var(--accent)',
}

export const avatarWrapper: CSSProperties = {
  width: '100%',
  maxWidth: 280,
  aspectRatio: '1',
  borderRadius: 16,
  border: '1px solid var(--border)',
  background: 'var(--bg-card)',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const avatarImg: CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
}

export const bioText: CSSProperties = {
  fontSize: '1.05rem',
  lineHeight: 1.8,
  color: 'var(--text-secondary)',
  textAlign: 'justify',
}

export const quoteCard: CSSProperties = {
  border: '1px solid var(--border)',
  background: 'var(--bg-card)',
  borderRadius: 12,
  padding: '28px 32px',
  marginTop: 8,
  transition: 'background 0.5s',
}

export const quoteText: CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: '1.15rem',
  fontStyle: 'italic',
  lineHeight: 1.7,
  color: 'var(--text-secondary)',
  marginBottom: 14,
}

export const quoteAuthor: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.68rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--accent)',
}
