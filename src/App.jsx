import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './styles/globals.css'

export default function App() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80)
          }
        })
      },
      { threshold: 0.12 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
