import { useRef, useState, useEffect } from 'react'
import type { ReactNode, CSSProperties } from 'react'
import * as S from './styles'

interface FadeInProps {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}

export default function FadeIn({ children, delay = 0, className = '', style }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold: 0.15 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(visible ? S.visible : S.hidden),
        ...S.getTransition(delay),
      }}
    >
      {children}
    </div>
  )
}
