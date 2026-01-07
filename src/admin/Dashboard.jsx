import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { projectsAPI, blogAPI, contactAPI } from '../services/api'
import './Dashboard.css'

const Dashboard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    blogPosts: 0,
    contacts: 0,
  })
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const [projectsRes, blogRes, contactsRes] = await Promise.all([
        projectsAPI.getAllAdmin(),
        blogAPI.getAllAdmin(),
        contactAPI.getAll(),
      ])

      setStats({
        projects: projectsRes.data.count || 0,
        blogPosts: blogRes.data.count || 0,
        contacts: contactsRes.data.count || 0,
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/admin/login')
  }

  if (loading) {
    return <div className="dashboard-loading">Loading...</div>
  }

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>CMS Dashboard</h1>
        <button onClick={handleLogout} className="btn-logout">
          Logout
        </button>
      </header>

      <div className="dashboard-stats">
        <div className="stat-card">
          <h3>Projects</h3>
          <p className="stat-number">{stats.projects}</p>
          <button onClick={() => navigate('/admin/projects')} className="stat-link">
            Manage Projects →
          </button>
        </div>

        <div className="stat-card">
          <h3>Blog Posts</h3>
          <p className="stat-number">{stats.blogPosts}</p>
          <button onClick={() => navigate('/admin/blog')} className="stat-link">
            Manage Blog →
          </button>
        </div>

        <div className="stat-card">
          <h3>Contact Messages</h3>
          <p className="stat-number">{stats.contacts}</p>
          <button onClick={() => navigate('/admin/contacts')} className="stat-link">
            View Messages →
          </button>
        </div>
      </div>

      <div className="dashboard-actions">
        <button onClick={() => navigate('/admin/projects')} className="action-btn">
          Manage Projects
        </button>
        <button onClick={() => navigate('/admin/blog')} className="action-btn">
          Manage Blog
        </button>
        <button onClick={() => navigate('/admin/skills')} className="action-btn">
          Manage Skills
        </button>
        <button onClick={() => navigate('/admin/settings')} className="action-btn">
          Settings
        </button>
      </div>
    </div>
  )
}

export default Dashboard

