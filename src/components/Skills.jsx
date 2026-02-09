import { useState, useEffect } from 'react'
import { skillsAPI } from '../services/api'
import SplitSectionLayout from './ui/SplitSectionLayout'
import { Cpu, Globe, Palette, Database, Shield } from 'lucide-react'
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
      icon: <Cpu className="w-6 h-6" />,
      skills: skills.filter(s => s.category === 'ai-ml')
    },
    {
      category: 'Web Development',
      id: 'web-dev',
      icon: <Globe className="w-6 h-6" />,
      skills: skills.filter(s => s.category === 'web-dev')
    },
    {
      category: 'Design & Soft Skills',
      id: 'design',
      icon: <Palette className="w-6 h-6" />,
      skills: skills.filter(s => s.category === 'design')
    },
    {
      category: 'Cyber Security and Data Analytics',
      id: 'cyber-security',
      icon: <Shield className="w-6 h-6" />,
      skills: [{ name: 'Cyber Security and Data Analytics' }]
    }
  ]

  // Filter categories that have skills and format for SplitSectionLayout
  const items = skillCategories
    .filter(cat => cat.skills.length > 0)
    .map(cat => ({
      title: cat.category,
      description: cat.skills.map(s => s.name).join(", "), // List skills in description
      icon: cat.icon
    }));

  if (loading) return <div className="loading-container"><div className="loading-spinner"></div>Loading skills...</div>

  return (
    <SplitSectionLayout
      id="skills"
      title="Skills & Technologies"
      subtitle="TECHNICAL EXPERTISE"
      subtitleIcon={<Database className="w-4 h-4" />}
      description="A comprehensive toolkit of technologies and methodologies I employ to build scalable and efficient solutions."
      items={items}
      centerImage="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2940&auto=format&fit=crop"
    />
  )
}

export default Skills
