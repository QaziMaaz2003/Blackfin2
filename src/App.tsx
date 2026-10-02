import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer, Header } from './sections/Chrome'
import Home from './pages/Home'
import About from './pages/About'
import Platforms from './pages/Platforms'
import HowLowCode from './pages/HowLowCode'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

/** Scroll-reveal (Divi equivalent: Module > Advanced > Animation > Fade Up). */
function Reveal() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.documentElement.classList.add('js-reveal')
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    // wait a tick so the new route's DOM is mounted
    const t = setTimeout(() => document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => io.observe(el)), 50)
    return () => {
      clearTimeout(t)
      io.disconnect()
    }
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Reveal />
      <Header />
      <main id="et-main-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/how-low-code-works" element={<HowLowCode />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
