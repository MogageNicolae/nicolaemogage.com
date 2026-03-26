import { profile, socials } from '../../../../data/profile'
import { container } from '../../styles'
import * as S from './styles'

const FOOTER_LINKS = [
  { label: 'GitHub', href: socials.github },
  { label: 'LinkedIn', href: socials.linkedin },
  { label: 'X', href: socials.twitter },
]

export default function Footer() {
  return (
    <footer className="footer-padding" style={S.footerBorder}>
      <div style={container} className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <span style={S.copyright}>
          &copy; {new Date().getFullYear()} {profile.name}. Crafted with intent.
        </span>
        <div className="flex gap-6">
          {FOOTER_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:!text-[var(--accent)] transition-colors"
              style={S.footerLink}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
