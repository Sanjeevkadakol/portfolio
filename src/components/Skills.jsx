import { useState, useEffect } from 'react'
import { skillsAPI } from '../services/api'
import './Skills.css'

const Skills = () => {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await skillsAPI.getAll()
        if (response.data.success) {
          setSkills(response.data.data)
        }
      } catch (err) {
        console.error('Error fetching skills:', err)
        setError('Failed to load skills')
      } finally {
        setLoading(false)
      }
    }
    fetchSkills()
  }, [])

  // Group skills by category
  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      id: 'ai-ml',
      icon: '🤖',
      skills: skills.filter(s => s.category === 'ai-ml')
    },
    {
      category: 'Web Development',
      id: 'web-dev',
      icon: '🌐',
      skills: skills.filter(s => s.category === 'web-dev')
    },
    {
      category: 'Design & Soft Skills',
      id: 'design',
      icon: '🎨',
      skills: skills.filter(s => s.category === 'design')
    },
    {
      category: 'Certifications',
      id: 'certification',
      icon: '📜',
      skills: skills.filter(s => s.category === 'certification')
    }
  ]

  // Filter categories that have skills
  const activeCategories = skillCategories.filter(cat => cat.skills.length > 0)

  if (loading) return <div className="loading-container"><div className="loading-spinner"></div>Loading skills...</div>

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="skills-grid">
            {activeCategories.length > 0 ? (
              activeCategories.map((category, index) => (
                <div key={index} className="skill-category">
                  <div className="category-header">
                    <span className="category-icon">{category.icon}</span>
                    <h3 className="category-title">{category.category}</h3>
                  </div>
                  <div className="skills-list">
                    {category.skills.map((skill) => (
                      <div key={skill._id} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.proficiency}%</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <p className="no-skills">No skills added yet.</p>
            )}
          </div>
        )}

        {/* Tech Stack Visuals - Simplified or Fetched if needed */}
        <div className="tech-stack">
          <h3 className="tech-stack-title">Tech Stack</h3>
          <div className="tech-icons">
            {skills.filter(s => s.name !== 'Gen AI').slice(0, 8).map((skill) => (
              <div key={skill._id} className="tech-item">
                <div className="tech-icon">
                  {skill.icon && skill.icon.startsWith('http') ? (
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
                  ) : (
                    skill.icon || '🔹'
                  )}
                </div>
                <span className="tech-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

