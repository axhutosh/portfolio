import { useState } from 'react'
import projects from '../data/projects'
import './Projects.css'

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="project-thumb"
        style={{ background: project.gradient }}
      >
        <div
          className="project-thumb-inner"
          style={{ transform: hovered ? 'scale(1.08)' : 'scale(1)' }}
        >
          {String(project.id).padStart(2, '0')}
        </div>
        <div className="project-overlay" style={{ opacity: hovered ? 1 : 0 }}>
          
            <a href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-overlay-text"
            style={{ transform: hovered ? 'translateY(0)' : 'translateY(10px)' }}
          >
            View Project
          </a>
        </div>
      </div>
      <div className="project-info">
        <div className="project-tag">{project.tag}</div>
        <div className="project-title">{project.title}</div>
        <p className="project-desc">{project.desc}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-label reveal">Selected Work</div>
      <h2 className="section-title reveal">Projects</h2>

      <div className="projects-grid reveal">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}