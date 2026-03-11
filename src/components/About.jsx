import './About.css'

const stats = [
  { num: '3',  label: 'Projects' },
  { num: '5',  label: 'Certs'    },
  { num: '🔥', label: 'Fresher'  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-image-wrap reveal">
        <div className="about-img-placeholder">
          <span className="img-corner tl" />
          <span className="img-corner tr" />
          <span className="img-corner bl" />
          <span className="img-corner br" />
          {/* Replace with: <img src="/assets/images/profile.jpg" alt="Alex Mercer" /> */}
           <img src="/profile.jpg" alt="Ashutosh Kumar" />
        </div>
        <div className="about-accent-box">
          <strong>2025</strong>
          Ready to Ship
        </div>
      </div>

      <div className="about-text reveal">
        <div className="section-label">About Me</div>
        <h2 className="section-title">Who I<br />Am</h2>

        <p>
          I'm a web developer from Bengaluru with a knack for turning ideas into
          fast, functional, and visually sharp web applications. My stack revolves around
          React, Node.js, Python, and MongoDB — I enjoy working across the full spectrum
          from UI to API.
        </p>
        <p>
          Fresh into the industry but not new to building — I've shipped real projects,
          earned certifications, and I'm always exploring new tools and patterns.
          Currently employed but open to exciting opportunities that push me further.
        </p>

        <div className="about-stats">
          {stats.map(({ num, label }) => (
            <div className="stat" key={label}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
