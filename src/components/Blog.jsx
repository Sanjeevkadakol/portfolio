import { useState, useEffect } from 'react'
import { blogAPI } from '../services/api'
import './Blog.css'

const Blog = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    fetchBlogPosts()
  }, [selectedCategory])

  const fetchBlogPosts = async () => {
    try {
      setLoading(true)
      const params = selectedCategory !== 'all' ? { category: selectedCategory } : {}
      const response = await blogAPI.getAll({ ...params, limit: 6 })
      if (response.data.success) {
        setPosts(response.data.data)
      }
    } catch (err) {
      console.error('Error fetching blog posts:', err)
      setError('Failed to load blog posts')
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength) + '...'
  }

  if (loading) {
    return (
      <section id="blog" className="blog">
        <div className="blog-container">
          <div className="section-header">
            <h2 className="section-title">Blog</h2>
            <p className="section-subtitle">Latest articles and insights</p>
          </div>
          <div className="loading">Loading blog posts...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="blog">
      <div className="blog-container">
        <div className="section-header">
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">Latest articles and insights</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {posts.length === 0 && !loading && (
          <div className="no-posts">
            <p>No blog posts available yet. Check back soon!</p>
          </div>
        )}

        {posts.length > 0 && (
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post._id} className="blog-card">
                {post.featuredImage && (
                  <div className="blog-image">
                    <img src={post.featuredImage} alt={post.title} />
                  </div>
                )}
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{formatDate(post.publishedAt || post.createdAt)}</span>
                    {post.category && (
                      <span className="blog-category">{post.category}</span>
                    )}
                  </div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{truncateText(post.excerpt || post.content)}</p>
                  <div className="blog-footer">
                    {post.tags && post.tags.length > 0 && (
                      <div className="blog-tags">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span key={idx} className="blog-tag">#{tag}</span>
                        ))}
                      </div>
                    )}
                    <a href={`/blog/${post.slug}`} className="blog-link">
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog

