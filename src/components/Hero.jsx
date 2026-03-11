import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid-bg" />
      <div className="hero-blob" />
      <div className="hero-blob hero-blob2" />

      <div className="hero-label">Web Developer — 2025</div>

      <h1 className="hero-name">
        Ashutosh
        <span>Kumar</span>
      </h1>

      <div className="hero-bottom">
        <p className="hero-desc">
          A passionate web developer crafting clean, performant digital experiences.
          Based in Bengaluru — building for the world.
        </p>
        <a href="#projects" className="hero-cta">
          View Work
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  )
}
