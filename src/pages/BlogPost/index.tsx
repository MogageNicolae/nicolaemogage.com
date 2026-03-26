import { useParams, Link, Navigate } from 'react-router-dom'
import FadeIn from '../../components/FadeIn'
import { useTheme } from '../../hooks/useTheme'
import { blogPosts } from '../../data/profile'
import * as S from './styles'

export default function BlogPost() {
  useTheme()
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

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
