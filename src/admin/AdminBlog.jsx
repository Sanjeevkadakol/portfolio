import { useState, useEffect } from 'react'
import { blogAPI } from '../services/api'
import './AdminPages.css'

const AdminBlog = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingPost, setEditingPost] = useState(null)

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        excerpt: '',
        image: '',
        category: 'tech',
        tags: '',
        status: 'published'
    })

    useEffect(() => {
        fetchPosts()
    }, [])

    const fetchPosts = async () => {
        try {
            const response = await blogAPI.getAllAdmin()
            setPosts(response.data.data)
            setLoading(false)
        } catch (err) {
            setError('Failed to fetch blog posts')
            setLoading(false)
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
            try {
                await blogAPI.delete(id)
                setPosts(posts.filter(p => p._id !== id))
            } catch (err) {
                alert('Failed to delete post')
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const postData = {
                ...formData,
                tags: typeof formData.tags === 'string'
                    ? formData.tags.split(',').map(t => t.trim())
                    : formData.tags
            }

            if (editingPost) {
                const response = await blogAPI.update(editingPost._id, postData)
                setPosts(posts.map(p => p._id === editingPost._id ? response.data.data : p))
            } else {
                const response = await blogAPI.create(postData)
                setPosts([response.data.data, ...posts])
            }
            closeModal()
        } catch (err) {
            alert(err.response?.data?.message || 'Operation failed')
        }
    }

    const openModal = (post = null) => {
        if (post) {
            setEditingPost(post)
            setFormData({
                title: post.title,
                content: post.content,
                excerpt: post.excerpt,
                image: post.image,
                category: post.category,
                tags: post.tags.join(', '),
                status: post.status
            })
        } else {
            setEditingPost(null)
            setFormData({
                title: '',
                content: '',
                excerpt: '',
                image: '',
                category: 'tech',
                tags: '',
                status: 'published'
            })
        }
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setEditingPost(null)
    }

    if (loading) return <div className="loading">Loading blog posts...</div>
    if (error) return <div className="error-message">{error}</div>

    return (
        <div className="admin-page">
            <div className="admin-header">
                <h2>Manage Blog Posts</h2>
                <button onClick={() => openModal()} className="btn-add">
                    + New Post
                </button>
            </div>

            <div className="table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Views</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr key={post._id}>
                                <td>{post.title}</td>
                                <td>{post.category}</td>
                                <td>{post.views}</td>
                                <td>
                                    <span className={`badge ${post.status === 'published' ? 'badge-success' : 'badge-warning'}`}>
                                        {post.status}
                                    </span>
                                </td>
                                <td className="actions-cell">
                                    <button onClick={() => openModal(post)} className="btn-edit">Edit</button>
                                    <button onClick={() => handleDelete(post._id)} className="btn-delete">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>{editingPost ? 'Edit Post' : 'New Blog Post'}</h3>
                            <button onClick={closeModal} className="btn-close">&times;</button>
                        </div>

                        <form onSubmit={handleSubmit} className="admin-form">
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Excerpt (Short summary)</label>
                                <textarea
                                    value={formData.excerpt}
                                    onChange={e => setFormData({ ...formData, excerpt: e.target.value })}
                                    required
                                    rows="3"
                                />
                            </div>

                            <div className="form-group">
                                <label>Content (HTML/Markdown)</label>
                                <textarea
                                    value={formData.content}
                                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                                    required
                                    rows="10"
                                />
                            </div>

                            <div className="form-group">
                                <label>Tags (comma separated)</label>
                                <input
                                    type="text"
                                    value={formData.tags}
                                    onChange={e => setFormData({ ...formData, tags: e.target.value })}
                                    placeholder="React, Tutorial, AI"
                                />
                            </div>

                            <div className="form-group">
                                <label>Category</label>
                                <select
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option value="tech">Tech</option>
                                    <option value="personal">Personal</option>
                                    <option value="tutorial">Tutorial</option>
                                    <option value="news">News</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Image URL</label>
                                <input
                                    type="text"
                                    value={formData.image}
                                    onChange={e => setFormData({ ...formData, image: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Status</label>
                                <select
                                    value={formData.status}
                                    onChange={e => setFormData({ ...formData, status: e.target.value })}
                                >
                                    <option value="published">Published</option>
                                    <option value="draft">Draft</option>
                                </select>
                            </div>

                            <div className="form-actions">
                                <button type="button" onClick={closeModal} className="btn-secondary">Cancel</button>
                                <button type="submit" className="btn-primary">
                                    {editingPost ? 'Update Post' : 'Create Post'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminBlog
