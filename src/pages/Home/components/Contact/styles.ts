import type { CSSProperties } from 'react'

export const subtitle: CSSProperties = {
  fontSize: '1.05rem',
  lineHeight: 1.7,
  color: 'var(--text-secondary)',
  marginBottom: 40,
}

export const contactLink: CSSProperties = {
  transition: 'opacity 0.3s',
}

export const iconCircle: CSSProperties = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  background: 'var(--accent-dim)',
  color: 'var(--accent)',
}

export const contactLabel: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.65rem',
  fontWeight: 600,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
}

export const contactValue: CSSProperties = {
  fontSize: '0.95rem',
  color: 'var(--text-primary)',
}

export const honeypot: CSSProperties = {
  display: 'none',
}

export const textareaResize: CSSProperties = {
  resize: 'vertical',
}
