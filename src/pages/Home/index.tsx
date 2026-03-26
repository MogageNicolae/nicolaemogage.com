import { useState, useEffect, useRef, useCallback } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SECTION_IDS = ['hero', 'about', 'experience', 'projects', 'blog', 'contact']

function detectSection(): string {
  const offset = 120
  let current = SECTION_IDS[0]
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id)
    if (el && el.getBoundingClientRect().top <= offset) current = id
  }
  return current
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('hero')
  const lockRef = useRef<number | null>(null)

  // Called when user clicks a nav link — immediately set active and
  // lock scroll detection for 800ms so the smooth scroll doesn't flicker
  const handleNavigate = useCallback((section: string) => {
    setActiveSection(section)
    if (lockRef.current) clearTimeout(lockRef.current)
    lockRef.current = window.setTimeout(() => { lockRef.current = null }, 800)
  }, [])

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY)
      if (!lockRef.current) {
        setActiveSection(detectSection())
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      <div className="grain-overlay" />
      <Nav scrollY={scrollY} activeSection={activeSection} onNavigate={handleNavigate} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Blog />
      <Contact />
      <Footer />
    </div>
  )
}
