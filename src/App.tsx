import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function ScrollToSection() {
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const target = (location.state as { scrollTo?: string })?.scrollTo
    if (target) {
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      navigate(location.pathname, { replace: true })
    }
  }, [location, navigate])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </>
  )
}
