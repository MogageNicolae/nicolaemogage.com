import type { CSSProperties } from 'react'

export const hidden: CSSProperties = {
  opacity: 0,
  transform: 'translateY(28px)',
}

export const visible: CSSProperties = {
  opacity: 1,
  transform: 'translateY(0)',
}

export const getTransition = (delay: number): CSSProperties => ({
  transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
})
