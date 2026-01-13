import { useState, useEffect } from 'react'
import { skillsAPI } from '../services/api'
import './Certifications.css'

const Certifications = () => {
    const [certs, setCerts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchCerts = async () => {
            try {
                const response = await skillsAPI.getAll()
                if (response.data.success) {
                    // Filter only certifications
                    const allSkills = response.data.data
                    setCerts(allSkills.filter(s => s.category === 'certification'))
                }
            } catch (err) {
                console.error('Error fetching certifications:', err)
            } finally {
                setLoading(false)
            }
        }
        fetchCerts()
    }, [])

    if (loading) return null // Or a small spinner, but usually fast

    if (certs.length === 0) return null

    return (
        <section id="certifications" className="certifications">
            <div className="certifications-container">
                <h2 className="section-title">Certifications</h2>
                <p className="section-subtitle">Professional Achievements</p>

                <div className="certifications-list">
                    {certs.map((cert) => (
                        <div key={cert._id} className="certification-item">
                            <div className="cert-icon-wrapper">
                                {cert.icon && cert.icon.startsWith('http') ? (
                                    <img src={cert.icon} alt={cert.name} className="cert-img" />
                                ) : (
                                    <span className="cert-emoji">🏅</span>
                                )}
                            </div>
                            <div className="cert-details">
                                <h3 className="cert-name">{cert.name}</h3>
                                <span className="cert-badge">Verified</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Certifications
