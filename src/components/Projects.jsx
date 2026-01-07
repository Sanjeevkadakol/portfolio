import { useState } from 'react'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Hand Gesture Volume Adjuster',
      description: 'A computer vision application that allows users to control system volume using hand gestures captured via webcam.',
      image: '🖐️',
      tags: ['Python', 'OpenCV', 'Computer Vision'],
      category: 'ml',
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Worm Prediction in Community Networks',
      description: 'A machine learning model to predict the spread of worm attacks in community networks using graph data.',
      image: '🦠',
      tags: ['Machine Learning', 'Graph Theory', 'Python'],
      category: 'ml',
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Deforestation Rate Predictor',
      description: 'An environmental analytics tool that predicts deforestation rates using historical data and regression models.',
      image: '🌲',
      tags: ['Data Science', 'Regression Analysis', 'Python'],
      category: 'ml',
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Mental Health Chatbot',
      description: 'An AI-powered sympathetic chatbot designed to provide mental health support and conversation.',
      image: '🤖',
      tags: ['Gen AI', 'NLP', 'Python'],
      category: 'ai',
      link: '#',
      github: '#'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'ai', label: 'Gen AI' }
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

