import { useState } from 'react'
import FadeIn from '../../../../components/FadeIn'
import { profile, socials } from '../../../../data/profile'
import { container, sectionHeading, sectionBg, accentDot } from '../../styles'
import * as S from './styles'

const CONTACT_LINKS = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  )},
  { label: 'GitHub', value: 'MogageNicolae', href: socials.github, icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
  )},
  { label: 'LinkedIn', value: 'nicolae-mogage', href: socials.linkedin, icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
]

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)
    data.append('_subject', `New message from ${window.location.hostname}`)
    data.append('_captcha', 'false')
    data.append('_template', 'table')

    try {
      const res = await fetch('https://formsubmit.co/ajax/dca5f307bb19a6b39423c6aa6a8620c3', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding" style={sectionBg}>
      <div style={container}>
        {/* Row 1: Header */}
        <FadeIn>
          <h2 className="mb-5" style={sectionHeading}>
            Let's work together<span style={accentDot}>.</span>
          </h2>
          <p style={S.subtitle}>
            Have a project in mind, a research collaboration, or just want to say hello? I'd love to hear from you.
          </p>
        </FadeIn>

        {/* Row 2: Links + Form */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-12">
          <FadeIn delay={0.1}>
            <div className="flex flex-col gap-4">
              {CONTACT_LINKS.map((c, i) => (
                <a key={i} href={c.href} target={c.label === 'Email' ? undefined : '_blank'} rel={c.label === 'Email' ? undefined : 'noopener noreferrer'} className="flex items-center gap-3.5 no-underline" style={S.contactLink}>
                  <span className="flex items-center justify-center shrink-0" style={S.iconCircle}>
                    {c.icon}
                  </span>
                  <div>
                    <div style={S.contactLabel}>{c.label}</div>
                    <div style={S.contactValue}>{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input type="text" name="_honey" style={S.honeypot} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input className="input-field" name="name" placeholder="Name" required />
                <input className="input-field" name="email" type="email" placeholder="Email" required />
              </div>
              <input className="input-field" name="_subject" placeholder="Subject" />
              <textarea className="input-field" name="message" placeholder="Your message..." rows={5} style={S.textareaResize} required />

              <button type="submit" className="cta-button self-start" disabled={status === 'sending' || status === 'sent'}>
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
              </button>

              {status === 'error' && (
                <p style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
