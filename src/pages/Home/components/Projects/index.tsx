import FadeIn from '../../../../components/FadeIn'
import { projects } from '../../../../data/profile'
import { container, sectionHeading, sectionBg, accentDot, defaultCursor } from '../../styles'
import * as S from './styles'

export default function Projects() {
  return (
    <section id="projects" className="section-padding relative" style={sectionBg}>
      <div style={container}>
        <FadeIn>
          <h2 className="mb-14" style={sectionHeading}>
            Things I've built<span style={accentDot}>.</span>
          </h2>
        </FadeIn>

        <div className="grid gap-6" style={S.grid}>
          {projects.map((p, i) => {
            const CardWrapper = p.githubUrl
              ? ({ children }: { children: React.ReactNode }) => (
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="no-underline" style={S.linkWrapper}>
                    {children}
                  </a>
                )
              : ({ children }: { children: React.ReactNode }) => <>{children}</>

            return (
              <FadeIn key={i} delay={i * 0.1}>
                <CardWrapper>
                  <div className="project-card" style={p.githubUrl ? undefined : defaultCursor}>
                    <div className="flex justify-between items-start mb-4">
                      <span style={S.yearLabel}>{p.year}</span>
                      <div className="flex items-center gap-2">
                        {p.status && <span className="status-badge">{p.status}</span>}
                        {p.githubUrl && (
                          <span className="flex items-center gap-1" style={S.iconColor}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                          </span>
                        )}
                      </div>
                    </div>
                    <h3 style={S.projectTitle}>{p.title}</h3>
                    <p style={S.projectDescription}>{p.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.technologies.map((t, j) => (
                        <span key={j} className="tag">{t}</span>
                      ))}
                    </div>
                  </div>
                </CardWrapper>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
