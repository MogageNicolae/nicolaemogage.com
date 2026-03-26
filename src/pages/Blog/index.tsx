import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../../components/FadeIn'
import { useTheme } from '../../hooks/useTheme'
import { blogPosts } from '../../data/profile'
import * as S from './styles'

export default function Blog() {
  useTheme()
  const allTags = [...new Set(blogPosts.flatMap((p) => p.tags))]
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag ? blogPosts.filter((p) => p.tags.includes(activeTag)) : blogPosts

  return (
    <div className="min-h-dvh" style={S.pageWrapper}>
      <div className="grain-overlay" />
      <div className="section-padding" style={S.contentPadding}>
        <div style={S.container}>
          <Link to="/" state={{ scrollTo: 'blog' }} className="inline-flex items-center gap-2 no-underline" style={S.backLink}>
            ← Home
          </Link>

          <FadeIn>
            <h1 style={S.pageTitle}>
              All posts<span style={S.accentDot}>.</span>
            </h1>
          </FadeIn>

          {/* Tag filter */}
          <div className="flex flex-wrap gap-2" style={S.tagFilters}>
            <button
              onClick={() => setActiveTag(null)}
              className="tag"
              style={activeTag === null ? S.activeTagStyle : S.inactiveTagStyle}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className="tag"
                style={activeTag === tag ? S.activeTagStyle : S.inactiveTagStyle}
              >
                {tag}
              </button>
            ))}
          </div>

          <div>
            {filtered.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.06}>
                <Link to={`/blog/${post.slug}`} className="no-underline">
                  <div className="blog-row">
                    <div>
                      <span className="blog-title" style={S.blogTitle}>{post.title}</span>
                      <span className="tag" style={S.blogTag}>{post.tags[0]}</span>
                    </div>
                    <span style={S.blogMeta}>{post.readingTime}</span>
                    <span style={S.blogMeta}>
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={S.emptyState}>No posts found for this tag.</p>
          )}
        </div>
      </div>
    </div>
  )
}
