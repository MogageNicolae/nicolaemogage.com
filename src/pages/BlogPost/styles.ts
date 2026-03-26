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
  maxWidth: 720,
  margin: '0 auto',
}

export const backLink: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.75rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
  marginBottom: 40,
  display: 'inline-flex',
}

export const header: CSSProperties = {
  marginBottom: 48,
}

export const postTitle: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: 'clamp(2rem, 4vw, 2.8rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  lineHeight: 1.15,
  marginBottom: 16,
}

export const postMeta: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.72rem',
  fontWeight: 500,
  color: 'var(--text-muted)',
  letterSpacing: '0.05em',
}

export const tagsWrapper: CSSProperties = {
  marginTop: 16,
}

export const contentH2: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.5rem',
  fontWeight: 700,
  marginTop: 48,
  marginBottom: 16,
  color: 'var(--text-primary)',
  letterSpacing: '-0.01em',
}

export const contentH3: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '1.2rem',
  fontWeight: 700,
  marginTop: 40,
  marginBottom: 12,
  color: 'var(--text-primary)',
}

export const contentList: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  margin: '16px 0',
}

export const contentListItem: CSSProperties = {
  color: 'var(--text-secondary)',
  lineHeight: 1.7,
  paddingLeft: 20,
  position: 'relative',
}

export const contentParagraph: CSSProperties = {
  color: 'var(--text-secondary)',
  lineHeight: 1.8,
  margin: '16px 0',
  fontSize: '1.05rem',
}
