import { Link } from 'react-router-dom'
import FadeIn from '../../../../components/FadeIn'
import { blogPosts } from '../../../../data/profile'
import { container, sectionHeading, accentDot } from '../../styles'
import * as S from './styles'

export default function Blog() {
  return (
    <section id="blog" className="section-padding">
      <div style={container}>
        <FadeIn>
          <h2 className="mb-12" style={sectionHeading}>
            Latest thoughts<span style={accentDot}>.</span>
          </h2>
        </FadeIn>

        <div>
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.08}>
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

        <FadeIn delay={0.3}>
          <div className="mt-10">
            <Link
              to="/blog"
              className="no-underline inline-flex items-center gap-2"
              style={S.viewAllLink}
            >
              View All Posts <span style={S.viewAllArrow}>→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
