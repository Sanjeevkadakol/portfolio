import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
      image: '🛒',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: '📋',
      tags: ['React', 'Firebase', 'TypeScript'],
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather dashboard with location-based forecasts and interactive charts.',
      image: '🌤️',
      tags: ['React', 'API', 'Chart.js'],
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Mobile Fitness App',
      description: 'A mobile-first fitness tracking application with workout plans and progress tracking.',
      image: '💪',
      tags: ['React Native', 'Firebase'],
      category: 'mobile',
      link: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing projects and skills.',
      image: '🎨',
      tags: ['React', 'CSS3', 'Vite'],
      category: 'web',
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'API Integration Tool',
      description: 'A developer tool for testing and integrating various APIs with a clean interface.',
      image: '🔧',
      tags: ['Node.js', 'Express', 'REST API'],
      category: 'backend',
      link: '#',
      github: '#'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'backend', label: 'Backend' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className="project-overlay">
                  <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>🔗</span> Live Demo
                  </a>
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>💻</span> Code
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

