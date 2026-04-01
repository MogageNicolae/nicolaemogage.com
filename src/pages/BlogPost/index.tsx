import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import FadeIn from '../../components/FadeIn'
import { useTheme } from '../../hooks/useTheme'
import { blogPosts } from '../../data/profile'
import * as S from './styles'

export default function BlogPost() {
  useTheme()
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    if (!post) return
    const title = `${post.title} | Nicolae Mogage`
    document.title = title
    document.querySelector('meta[name="description"]')?.setAttribute('content', post.excerpt)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', post.excerpt)
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', `https://nicolaemogage.com/blog/${post.slug}`)
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `https://nicolaemogage.com/blog/${post.slug}`)
    return () => {
      document.title = 'Nicolae Mogage | AI/ML Engineer & Full Stack Developer'
      document.querySelector('meta[name="description"]')?.setAttribute('content', 'Nicolae Mogage - AI/ML Engineer at RebelDot, Cluj-Napoca. Building multi-agent LangGraph systems, RAG pipelines, fine-tuned models, and full-stack AI products with Python, .NET, and React.')
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', 'Nicolae Mogage | AI/ML Engineer & Full Stack Developer')
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', 'Engineering AI systems from research to production. Multi-agent architectures, RAG pipelines, and full-stack AI products.')
      document.querySelector('meta[property="og:url"]')?.setAttribute('content', 'https://nicolaemogage.com')
      document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://nicolaemogage.com')
    }
  }, [post])

  if (!post) return <Navigate to="/blog" replace />

  const renderContent = (content: string) => {
    return content
      .trim()
      .split('\n\n')
      .map((block, i) => {
        const trimmed = block.trim()
        if (!trimmed) return null
        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={i} style={S.contentH3}>
              {trimmed.slice(4)}
            </h3>
          )
        }
        if (trimmed.startsWith('## ')) {
          return (
            <h2 key={i} style={S.contentH2}>
              {trimmed.slice(3)}
            </h2>
          )
        }
        if (trimmed.startsWith('- ')) {
          const items = trimmed.split('\n').filter((l) => l.trim().startsWith('- '))
          return (
            <ul key={i} style={S.contentList}>
              {items.map((item, j) => (
                <li
                  key={j}
                  style={S.contentListItem}
                  dangerouslySetInnerHTML={{
                    __html:
                      '<span style="position:absolute;left:0;top:10px;width:6px;height:6px;border-radius:50%;background:var(--accent)"></span>' +
                      item.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text-primary)">$1</strong>'),
                  }}
                />
              ))}
            </ul>
          )
        }
        return (
          <p
            key={i}
            style={S.contentParagraph}
            dangerouslySetInnerHTML={{
              __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text-primary)">$1</strong>'),
            }}
          />
        )
      })
  }

  return (
    <div className="min-h-dvh" style={S.pageWrapper}>
      <div className="grain-overlay" />
      <div className="section-padding" style={S.contentPadding}>
        <div style={S.container}>
          <FadeIn>
            <Link to="/blog" className="inline-flex items-center gap-2 no-underline" style={S.backLink}>
              ← Back to blog
            </Link>

            <header style={S.header}>
              <h1 style={S.postTitle}>{post.title}</h1>
              <div className="flex items-center gap-4" style={S.postMeta}>
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
              <div className="flex flex-wrap gap-2" style={S.tagsWrapper}>
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </header>

            <article>{renderContent(post.content)}</article>
          </FadeIn>
        </div>
      </div>
    </div>
  )
}
