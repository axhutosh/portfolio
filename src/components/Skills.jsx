import { skillBars, toolTags } from '../data/skills'
import './Skills.css'

function SkillBar({ name, pct, delay }) {
  return (
    <div className="skill-bar-row">
      <div className="skill-bar-header">
        <span>{name}</span>
        <span>{pct}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: `${pct}%`, animationDelay: `${delay}s` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="section-label reveal">What I Do</div>
      <h2 className="section-title reveal">Skills</h2>

      <div className="skills-layout">
        <div className="skills-categories reveal">
          {skillBars.map((cat) => (
            <div key={cat.category}>
              <div className="skill-cat-title">{cat.category}</div>
              <div className="skill-bars">
                {cat.items.map((item, i) => (
                  <SkillBar key={item.name} name={item.name} pct={item.pct} delay={0.1 + i * 0.1} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skill-tags-section reveal">
          <div className="skill-tags-title">Tools & Tech</div>
          <div className="skill-tags">
            {toolTags.map((tag) => (
              <span
                key={tag.name}
                className={`skill-tag${tag.featured ? ' featured' : ''}`}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
