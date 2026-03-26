import type { CSSProperties } from 'react'

export const navBar = (scrollY: number, theme: string): CSSProperties => ({
  background: 'var(--nav-bg)',
  borderBottom: `1px solid ${scrollY > 40 ? 'var(--border)' : theme === 'light' ? 'var(--border)' : 'transparent'}`,
  transition: 'border-color 0.3s',
})

export const navInner: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 64,
}

export const logo: CSSProperties = {
  fontFamily: 'var(--font-heading)',
  fontWeight: 800,
  fontSize: '1.1rem',
  color: 'var(--text-primary)',
  letterSpacing: '-0.02em',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
}

export const logoAccent: CSSProperties = {
  color: 'var(--accent)',
}

export const mobileToggle: CSSProperties = {
  width: 36,
  height: 36,
  fontSize: '0.85rem',
}
