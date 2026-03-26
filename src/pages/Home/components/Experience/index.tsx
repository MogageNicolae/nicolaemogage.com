import FadeIn from '../../../../components/FadeIn'
import CategoryIcon from '../../../../components/TechIcon'
import {
  experience,
  education,
  leadership,
  techStack,
  techCategories,
} from '../../../../data/profile'
import {
  container,
  sectionHeading,
  subHeading,
  accentDot,
  cardTitle,
  cardCompany,
  metaText,
  bulletItem,
  bulletDot,
  defaultCursor,
  categoryLabel,
} from '../../styles'
import * as S from './styles'

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div style={container}>
        <FadeIn>
          <h2 className="mb-14" style={sectionHeading}>
            Where I've worked<span style={accentDot}>.</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-6">
          {experience.map((exp, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="project-card" style={defaultCursor}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 style={cardTitle}>{exp.role}</h3>
                    <span style={cardCompany}>{exp.company}</span>
                    {exp.project && <span style={S.projectName}>{exp.project}</span>}
                  </div>
                  <div className="flex items-center gap-3" style={metaText}>
                    <span>{exp.period}</span>
                    <span>· {exp.location}</span>
                  </div>
                </div>
                <ul className="flex flex-col gap-1.5 mb-3">
                  {exp.description.map((d, j) => (
                    <li key={j} style={bulletItem}>
                      <span style={bulletDot} />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((t, j) => (
                    <span key={j} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Education */}
        <FadeIn>
          <h3 className="mt-20 mb-8" style={subHeading}>
            Education<span style={accentDot}>.</span>
          </h3>
        </FadeIn>
        <div className="flex flex-col gap-6">
          {education.map((edu, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="project-card" style={defaultCursor}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h3 style={cardTitle}>{edu.degree}</h3>
                    <span style={cardCompany}>{edu.school}</span>
                  </div>
                  <div className="flex items-center gap-3" style={metaText}>
                    <span>{edu.period}</span>
                    <span>· {edu.location}</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Leadership */}
        <FadeIn>
          <h3 className="mt-20 mb-8" style={subHeading}>
            Leadership<span style={accentDot}>.</span>
          </h3>
        </FadeIn>
        <div className="flex flex-col gap-6">
          {leadership.map((item, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div className="project-card" style={defaultCursor}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 style={cardTitle}>{item.role}</h3>
                    <span style={cardCompany}>{item.organization}</span>
                  </div>
                  <span style={metaText}>{item.period}</span>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {item.description.map((d, j) => (
                    <li key={j} style={bulletItem}>
                      <span style={bulletDot} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Tech Stack */}
        <FadeIn>
          <h3 className="mt-20 mb-8" style={subHeading}>
            Tech stack<span style={accentDot}>.</span>
          </h3>
        </FadeIn>
        {(() => {
          const cats = Object.keys(techCategories) as (keyof typeof techCategories)[]
          const topRow = cats.slice(0, 2)
          const bottomRow = cats.slice(2)
          const renderCard = (cat: (typeof cats)[number], delay: number) => {
            const items = techStack.filter((t) => t.category === cat)
            if (!items.length) return null
            return (
              <FadeIn key={cat} delay={delay}>
                <div className="project-card" style={defaultCursor}>
                  <div style={{ ...categoryLabel, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CategoryIcon category={cat} />
                    {techCategories[cat]}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((t, j) => (
                      <span key={j} className="tag">{t.name}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )
          }
          return (
            <>
              <div className="grid sm:grid-cols-2 gap-6" style={{ marginBottom: 25 }}>
                {topRow.map((cat, i) => renderCard(cat, i * 0.06))}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {bottomRow.map((cat, i) => renderCard(cat, (i + 2) * 0.06))}
              </div>
            </>
          )
        })()}
      </div>
    </section>
  )
}
