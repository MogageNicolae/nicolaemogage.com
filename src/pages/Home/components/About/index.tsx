import FadeIn from '../../../../components/FadeIn'
import { about, profile } from '../../../../data/profile'
import { container, sectionHeading, sectionBg, accentDot } from '../../styles'
import * as S from './styles'

export default function About() {
  return (
    <section id="about" className="section-padding" style={sectionBg}>
      <div style={container}>
        <FadeIn>
          <h2 style={{ ...sectionHeading, ...S.headingMargin }}>
            {about.headline.before}{' '}
            <em style={S.emphasisText}>{about.headline.emphasis}</em>
            <span style={accentDot}>.</span>
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">
          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center md:items-start gap-6">
              <div style={S.avatarWrapper}>
                <img src={profile.avatarUrl} alt="Nicolae Mogage" style={S.avatarImg} />
              </div>

              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest, i) => (
                  <span key={i} className="tag">{interest}</span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-5" style={S.bioText}>
                {about.bio.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
                ))}
              </div>

              {about.quote && (
                <div style={S.quoteCard}>
                  <div style={S.quoteText}>"{about.quote.text}"</div>
                  <div style={S.quoteAuthor}>- {about.quote.author}</div>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
