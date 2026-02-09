import { useState, useEffect } from 'react'
import { projectsAPI } from '../services/api'
import SplitSectionLayout from './ui/SplitSectionLayout'
import { Rocket, Box, Code, Layers } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectsAPI.getAll()
        if (response.data.success) {
          const formattedProjects = response.data.data.map((project, index) => ({
            title: project.title,
            description: project.description,
            icon: <Code className="w-6 h-6" />, // Default icon
            link: project.link || project.githubUrl || '#'
          }));
          setProjects(formattedProjects)
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

  const stats = [
    { icon: <Rocket className="w-6 h-6" />, value: projects.length, label: "Total Projects", suffix: "" },
    { icon: <Code className="w-6 h-6" />, value: "Python, React, Node.js, ML, NLP", label: "Skills Learnt", suffix: "" },
  ];

  if (loading) return <div className="loading-container"><div className="loading-spinner"></div>Loading projects...</div>
  if (error) return <div className="error-message">Error: {error}</div>

  return (
    <SplitSectionLayout
      id="projects"
      title="My Projects"
      subtitle="SELECTED WORK"
      subtitleIcon={<Box className="w-4 h-4" />}
      description="A selection of recent projects I've worked on, ranging from web applications to machine learning models."
      items={projects}
      stats={stats}
      centerImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2944&auto=format&fit=crop"
    />
  )
}

export default Projects
