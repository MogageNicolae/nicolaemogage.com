import { useState, useEffect } from 'react'
import { useTheme } from '../../../../hooks/useTheme'
import * as S from './styles'

interface NavProps {
  scrollY: number
  activeSection: string
  onNavigate?: (section: string) => void
}

const NAV_SECTIONS = ['about', 'experience', 'projects', 'blog', 'contact']

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav({ scrollY, activeSection, onNavigate }: NavProps) {
  const { theme, toggle } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleNav(id: string) {
    onNavigate?.(id)
    scrollTo(id)
    setMobileOpen(false)
  }

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 640) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[16px] backdrop-saturate-150"
      style={S.navBar(scrollY, theme)}
    >
      <div className="nav-inner" style={S.navInner}>
        <button onClick={() => handleNav('hero')} style={S.logo}>
          N<span style={S.logoAccent}>M</span>
        </button>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => handleNav(s)}
              className={`nav-link ${activeSection === s ? 'active' : ''}`}
            >
              {s}
            </button>
          ))}
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="sm:hidden flex items-center gap-3">
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme" style={S.mobileToggle}>
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            className="mobile-hamburger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${mobileOpen ? 'open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu sm:hidden ${mobileOpen ? 'mobile-menu--open' : ''}`}>
        {NAV_SECTIONS.map((s) => (
          <button
            key={s}
            onClick={() => handleNav(s)}
            className={`mobile-menu-link ${activeSection === s ? 'active' : ''}`}
          >
            {s}
          </button>
        ))}
      </div>
    </nav>
  )
}
