import { useState, useEffect } from 'react'
import { projectsAPI } from '../services/api'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectsAPI.getAll()
        if (response.data.success) {
          setProjects(response.data.data)
        }
      } catch (err) {
        console.error('Error fetching projects:', err)
        setError('Failed to load projects')
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'ai', label: 'Gen AI' },
    { id: 'web', label: 'Web Development' },
    { id: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  if (loading) return <div className="loading-container"><div className="loading-spinner"></div>Loading projects...</div>
  if (error) return <div className="error-message">Error: {error}</div>

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(project => (
              <div key={project._id} className="project-card">
                <div className="project-image">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-img-cover" />
                  ) : (
                    <div className="project-icon">📁</div>
                  )}
                  <div className="project-overlay">
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>🔗</span> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                        <span>💻</span> Code
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tags">
                    {project.technologies && project.technologies.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">No projects found in this category.</div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects

