import { useState, useEffect } from 'react'
import { skillsAPI } from '../services/api'
import './AdminPages.css'

const AdminSkills = () => {
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingSkill, setEditingSkill] = useState(null)

    const [formData, setFormData] = useState({
        name: '',
        category: 'frontend',
        icon: '',
        proficiency: 50,
        status: 'active'
    })

    useEffect(() => {
        fetchSkills()
    }, [])

    const fetchSkills = async () => {
        try {
            const response = await skillsAPI.getAll()
            setSkills(response.data.data)
            setLoading(false)
        } catch (err) {
            setError('Failed to fetch skills')
            setLoading(false)
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this skill?')) {
            try {
                await skillsAPI.delete(id)
                setSkills(skills.filter(s => s._id !== id))
            } catch (err) {
                alert('Failed to delete skill')
            }
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (editingSkill) {
                const response = await skillsAPI.update(editingSkill._id, formData)
                setSkills(skills.map(s => s._id === editingSkill._id ? response.data.data : s))
            } else {
                const response = await skillsAPI.create(formData)
                setSkills([response.data.data, ...skills])
            }
            closeModal()
        } catch (err) {
            alert(err.response?.data?.message || 'Operation failed')
        }
    }

    const openModal = (skill = null) => {
        if (skill) {
            setEditingSkill(skill)
            setFormData({
                name: skill.name,
                category: skill.category,
                icon: skill.icon || '',
                proficiency: skill.proficiency,
                status: skill.status || 'active'
            })
        } else {
            setEditingSkill(null)
            setFormData({
                name: '',
                category: 'frontend',
                icon: '',
                proficiency: 50,
                status: 'active'
            })
        }
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setEditingSkill(null)
    }

    if (loading) return <div className="loading">Loading skills...</div>
    if (error) return <div className="error-message">{error}</div>

    return (
        <div className="admin-page">
            <div className="admin-header">
                <h2>Manage Skills</h2>
                <button onClick={() => openModal()} className="btn-add">
                    + Add Skill
                </button>
            </div>

            <div className="table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Proficiency</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {skills.map(skill => (
                            <tr key={skill._id}>
                                <td>{skill.name}</td>
                                <td>{skill.category}</td>
                                <td>{skill.proficiency}%</td>
                                <td className="actions-cell">
                                    <button onClick={() => openModal(skill)} className="btn-edit">Edit</button>
                                    <button onClick={() => handleDelete(skill._id)} className="btn-delete">Delete</button>
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
                            <h3>{editingSkill ? 'Edit Skill' : 'Add New Skill'}</h3>
                            <button onClick={closeModal} className="btn-close">&times;</button>
                        </div>

                        <form onSubmit={handleSubmit} className="admin-form">
                            <div className="form-group">
                                <label>Skill Name</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Category</label>
                                <select
                                    value={formData.category}
                                    onChange={e => setFormData({ ...formData, category: e.target.value })}
                                >
                                    <option value="frontend">Frontend</option>
                                    <option value="backend">Backend</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="tools">Tools</option>
                                    <option value="soft-skills">Soft Skills</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Proficiency (0-100)</label>
                                <input
                                    type="number"
                                    min="0"
                                    max="100"
                                    value={formData.proficiency}
                                    onChange={e => setFormData({ ...formData, proficiency: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Icon URL (Optional)</label>
                                <input
                                    type="text"
                                    value={formData.icon}
                                    onChange={e => setFormData({ ...formData, icon: e.target.value })}
                                />
                            </div>

                            <div className="form-actions">
                                <button type="button" onClick={closeModal} className="btn-secondary">Cancel</button>
                                <button type="submit" className="btn-primary">
                                    {editingSkill ? 'Update Skill' : 'Add Skill'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AdminSkills
