import { useTheme } from '../../../../hooks/useTheme'
import * as S from './styles'

interface NavProps {
  scrollY: number
  activeSection: string
}

const NAV_SECTIONS = ['about', 'experience', 'projects', 'blog', 'contact']

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav({ scrollY, activeSection }: NavProps) {
  const { theme, toggle } = useTheme()

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[16px] backdrop-saturate-150"
      style={S.navBar(scrollY, theme)}
    >
      <div className="nav-inner" style={S.navInner}>
        <button onClick={() => scrollTo('hero')} style={S.logo}>
          N<span style={S.logoAccent}>M</span>
        </button>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-8">
          {NAV_SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`nav-link ${activeSection === s ? 'active' : ''}`}
            >
              {s}
            </button>
          ))}
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="sm:hidden flex items-center gap-3">
          <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme" style={S.mobileToggle}>
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="sm:hidden flex justify-center gap-5 pb-2 px-4 overflow-x-auto">
        {NAV_SECTIONS.map((s) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className={`nav-link ${activeSection === s ? 'active' : ''}`}
          >
            {s}
          </button>
        ))}
      </div>
    </nav>
  )
}
