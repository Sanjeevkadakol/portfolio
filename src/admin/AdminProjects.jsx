import { useState, useEffect } from 'react'
import { projectsAPI } from '../services/api'
import { motion, AnimatePresence } from 'framer-motion'
import validator from 'validator'
import './AdminPages.css'

const AdminProjects = () => {
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingProject, setEditingProject] = useState(null)

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: '',
        technologies: '',
        category: 'fullstack',
        liveUrl: '',
        githubUrl: '',
        featured: false,
        status: 'published'
    })

    // Validation state
    const [formErrors, setFormErrors] = useState({})

    useEffect(() => {
        fetchProjects()
    }, [])

    const fetchProjects = async () => {
        try {
            const response = await projectsAPI.getAllAdmin()
            setProjects(response.data.data)
            setLoading(false)
        } catch (err) {
            setError('Failed to fetch projects')
            setLoading(false)
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            try {
                await projectsAPI.delete(id)
                setProjects(projects.filter(p => p._id !== id))
            } catch (err) {
                alert('Failed to delete project')
            }
        }
    }

    const validateForm = () => {
        const errors = {}

        if (!formData.title.trim()) errors.title = 'Title is required'
        if (!formData.description.trim()) errors.description = 'Description is required'

        if (formData.image && !validator.isURL(formData.image)) {
            errors.image = 'Please enter a valid image URL'
        }

        if (formData.liveUrl && !validator.isURL(formData.liveUrl)) {
            errors.liveUrl = 'Please enter a valid URL'
        }

        if (formData.githubUrl && !validator.isURL(formData.githubUrl)) {
            errors.githubUrl = 'Please enter a valid GitHub URL'
        }

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) return

        try {
            // Convert technologies string to array
            const projectData = {
                ...formData,
                technologies: typeof formData.technologies === 'string'
                    ? formData.technologies.split(',').map(t => t.trim()).filter(Boolean)
                    : formData.technologies
            }

            if (editingProject) {
                const response = await projectsAPI.update(editingProject._id, projectData)
                setProjects(projects.map(p => p._id === editingProject._id ? response.data.data : p))
            } else {
                const response = await projectsAPI.create(projectData)
                setProjects([response.data.data, ...projects])
            }
            closeModal()
        } catch (err) {
            alert(err.response?.data?.message || 'Operation failed')
        }
    }

    const openModal = (project = null) => {
        setFormErrors({})
        if (project) {
            setEditingProject(project)
            setFormData({
                title: project.title,
                description: project.description,
                image: project.image,
                technologies: project.technologies.join(', '),
                category: project.category,
                liveUrl: project.liveUrl,
                githubUrl: project.githubUrl,
                featured: project.featured,
                status: project.status
            })
        } else {
            setEditingProject(null)
            setFormData({
                title: '',
                description: '',
                image: '',
                technologies: '',
                category: 'fullstack',
                liveUrl: '',
                githubUrl: '',
                featured: false,
                status: 'published'
            })
        }
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setEditingProject(null)
        setFormErrors({})
    }

    if (loading) return <div className="loading">Loading projects...</div>
    if (error) return <div className="error-message">{error}</div>

    return (
        <motion.div
            className="admin-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="admin-header">
                <h2>Manage Projects</h2>
                <button onClick={() => openModal()} className="btn-add">
                    + Add New Project
                </button>
            </div>

            <div className="table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Featured</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <AnimatePresence>
                            {projects.map(project => (
                                <motion.tr
                                    key={project._id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    layout
                                >
                                    <td>{project.title}</td>
                                    <td>{project.category}</td>
                                    <td>
                                        <span className={`badge ${project.status === 'published' ? 'badge-success' : 'badge-warning'}`}>
                                            {project.status}
                                        </span>
                                    </td>
                                    <td>{project.featured ? 'Yes' : 'No'}</td>
                                    <td className="actions-cell">
                                        <button onClick={() => openModal(project)} className="btn-edit">Edit</button>
                                        <button onClick={() => handleDelete(project._id)} className="btn-delete">Delete</button>
                                    </td>
                                </motion.tr>
                            ))}
                        </AnimatePresence>
                    </tbody>
                </table>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        >
                            <div className="modal-header">
                                <h3>{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
                                <button onClick={closeModal} className="btn-close">&times;</button>
                            </div>

                            <form onSubmit={handleSubmit} className="admin-form">
                                <div className="form-group">
                                    <label>Title</label>
                                    <input
                                        type="text"
                                        value={formData.title}
                                        onChange={e => setFormData({ ...formData, title: e.target.value })}
                                        className={formErrors.title ? 'input-error' : ''}
                                    />
                                    {formErrors.title && <span className="validation-msg">{formErrors.title}</span>}
                                </div>

                                <div className="form-group">
                                    <label>Description</label>
                                    <textarea
                                        value={formData.description}
                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                        className={formErrors.description ? 'input-error' : ''}
                                    />
                                    {formErrors.description && <span className="validation-msg">{formErrors.description}</span>}
                                </div>

                                <div className="form-group">
                                    <label>Technologies (comma separated)</label>
                                    <input
                                        type="text"
                                        value={formData.technologies}
                                        onChange={e => setFormData({ ...formData, technologies: e.target.value })}
                                        placeholder="React, Node.js, MongoDB"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Category</label>
                                    <select
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        <option value="web">Web</option>
                                        <option value="mobile">Mobile</option>
                                        <option value="backend">Backend</option>
                                        <option value="fullstack">Full Stack</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label>Image URL</label>
                                    <input
                                        type="text"
                                        value={formData.image}
                                        onChange={e => setFormData({ ...formData, image: e.target.value })}
                                        placeholder="https://example.com/image.png"
                                        className={formErrors.image ? 'input-error' : ''}
                                    />
                                    {formErrors.image && <span className="validation-msg">{formErrors.image}</span>}
                                </div>

                                <div className="form-group">
                                    <label>Live URL</label>
                                    <input
                                        type="text"
                                        value={formData.liveUrl}
                                        onChange={e => setFormData({ ...formData, liveUrl: e.target.value })}
                                        className={formErrors.liveUrl ? 'input-error' : ''}
                                    />
                                    {formErrors.liveUrl && <span className="validation-msg">{formErrors.liveUrl}</span>}
                                </div>

                                <div className="form-group">
                                    <label>GitHub URL</label>
                                    <input
                                        type="text"
                                        value={formData.githubUrl}
                                        onChange={e => setFormData({ ...formData, githubUrl: e.target.value })}
                                        className={formErrors.githubUrl ? 'input-error' : ''}
                                    />
                                    {formErrors.githubUrl && <span className="validation-msg">{formErrors.githubUrl}</span>}
                                </div>

                                <div className="form-group">
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={formData.featured}
                                            onChange={e => setFormData({ ...formData, featured: e.target.checked })}
                                        /> Featured Project
                                    </label>
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
                                        {editingProject ? 'Update Project' : 'Create Project'}
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default AdminProjects
