import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ashutosh Kumar. All rights reserved.</p>
      <div className="footer-dot" />
      <p>Designed & Built with passion — Bengaluru 🇮🇳</p>
    </footer>
  )
}
