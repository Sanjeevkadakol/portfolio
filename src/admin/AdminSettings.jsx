import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { motion } from 'framer-motion'
import './AdminPages.css'

const AdminSettings = () => {
    const { settings, updateSettings } = useTheme()
    const [formData, setFormData] = useState(null)
    const [saving, setSaving] = useState(false)
    const [message, setMessage] = useState(null)

    useEffect(() => {
        if (settings) {
            setFormData(JSON.parse(JSON.stringify(settings))) // Deep copy
        }
    }, [settings])

    const handleChange = (e, section, field) => {
        if (section) {
            setFormData({
                ...formData,
                [section]: {
                    ...formData[section],
                    [field]: e.target.value
                }
            })
        } else {
            setFormData({
                ...formData,
                [field]: e.target.value
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSaving(true)
        setMessage(null)

        const result = await updateSettings(formData)

        if (result.success) {
            setMessage({ type: 'success', text: 'Settings updated successfully!' })
        } else {
            setMessage({ type: 'error', text: 'Failed to update settings.' })
        }
        setSaving(false)
    }

    if (!formData) return <div className="loading">Loading settings...</div>

    return (
        <motion.div
            className="admin-page"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <div className="admin-header">
                <h2>Site Settings & Theme</h2>
            </div>

            <form onSubmit={handleSubmit} className="admin-form settings-form">
                <div className="form-section">
                    <h3>General Information</h3>
                    <div className="form-group">
                        <label>Site Name</label>
                        <input
                            type="text"
                            value={formData.siteName}
                            onChange={(e) => handleChange(e, null, 'siteName')}
                        />
                    </div>
                    <div className="form-group">
                        <label>Site Description</label>
                        <textarea
                            value={formData.siteDescription}
                            onChange={(e) => handleChange(e, null, 'siteDescription')}
                        />
                    </div>
                </div>

                <div className="form-section">
                    <h3>Theme Colors</h3>
                    <div className="color-pickers">
                        <div className="form-group">
                            <label>Theme Mode</label>
                            <select
                                value={formData.theme.mode}
                                onChange={(e) => handleChange(e, 'theme', 'mode')}
                            >
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                                <option value="auto">Auto (System)</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Primary Color</label>
                            <div className="color-input-wrapper">
                                <input
                                    type="color"
                                    value={formData.theme.primaryColor}
                                    onChange={(e) => handleChange(e, 'theme', 'primaryColor')}
                                />
                                <input
                                    type="text"
                                    value={formData.theme.primaryColor}
                                    onChange={(e) => handleChange(e, 'theme', 'primaryColor')}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Secondary Color</label>
                            <div className="color-input-wrapper">
                                <input
                                    type="color"
                                    value={formData.theme.secondaryColor}
                                    onChange={(e) => handleChange(e, 'theme', 'secondaryColor')}
                                />
                                <input
                                    type="text"
                                    value={formData.theme.secondaryColor}
                                    onChange={(e) => handleChange(e, 'theme', 'secondaryColor')}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="form-section">
                    <h3>Social Links</h3>
                    <div className="form-group">
                        <label>GitHub URL</label>
                        <input
                            type="text"
                            value={formData.socialLinks?.github || ''}
                            onChange={(e) => handleChange(e, 'socialLinks', 'github')}
                        />
                    </div>
                    <div className="form-group">
                        <label>LinkedIn URL</label>
                        <input
                            type="text"
                            value={formData.socialLinks?.linkedin || ''}
                            onChange={(e) => handleChange(e, 'socialLinks', 'linkedin')}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="text"
                            value={formData.socialLinks?.email || ''}
                            onChange={(e) => handleChange(e, 'socialLinks', 'email')}
                        />
                    </div>
                </div>

                {message && (
                    <div className={`message ${message.type === 'error' ? 'error-message' : 'success-message'}`}>
                        {message.text}
                    </div>
                )}

                <div className="form-actions">
                    <button type="submit" className="btn-primary" disabled={saving}>
                        {saving ? 'Saving...' : 'Save Settings'}
                    </button>
                </div>
            </form>
        </motion.div>
    )
}

export default AdminSettings
