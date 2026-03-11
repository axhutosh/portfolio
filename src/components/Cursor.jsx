import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current

    const onMove = (e) => {
      pos.current.mx = e.clientX
      pos.current.my = e.clientY
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'
    }

    const animate = () => {
      pos.current.rx += (pos.current.mx - pos.current.rx) * 0.12
      pos.current.ry += (pos.current.my - pos.current.ry) * 0.12
      ring.style.left = pos.current.rx + 'px'
      ring.style.top  = pos.current.ry + 'px'
      requestAnimationFrame(animate)
    }

    const onEnter = () => {
      cursor.style.width  = '18px'
      cursor.style.height = '18px'
      ring.style.width    = '56px'
      ring.style.height   = '56px'
      ring.style.opacity  = '0.8'
    }

    const onLeave = () => {
      cursor.style.width  = '10px'
      cursor.style.height = '10px'
      ring.style.width    = '36px'
      ring.style.height   = '36px'
      ring.style.opacity  = '0.5'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, .project-card, .skill-tag').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    const raf = requestAnimationFrame(animate)
    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
