import { useEffect, useState } from 'react'
import './Navbar.css'

const links = ['about', 'projects', 'skills', 'contact']

export default function Navbar() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const onScroll = () => {
      let current = ''
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 120) current = s.id
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="navbar">
      <a href="#hero" className="nav-logo">AK</a>
      <ul className="nav-links">
        {links.map((link) => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={active === link ? 'active' : ''}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
