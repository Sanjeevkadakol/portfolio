
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { projectsAPI, blogAPI, contactAPI, skillsAPI } from '../services/api'
import {
  LayoutDashboard,
  FolderGit2,
  FileText,
  Cpu,
  MessageSquare,
  Settings,
  LogOut,
  TrendingUp,
  Users,
  Eye
} from 'lucide-react'
import './Dashboard.css'

const Dashboard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    blogPosts: 0,
    contacts: 0,
    skills: 0
  })
  const [recentProjects, setRecentProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [projectsRes, blogRes, contactsRes, skillsRes] = await Promise.all([
        projectsAPI.getAllAdmin(),
        blogAPI.getAllAdmin(),
        contactAPI.getAll(),
        skillsAPI.getAll()
      ])

      setStats({
        projects: projectsRes.data.count || 0,
        blogPosts: blogRes.data.count || 0,
        contacts: contactsRes.data.count || 0,
        skills: skillsRes.data.count || 0
      })

      // Assume projectsRes.data.data contains the array
      if (projectsRes.data.data) {
        setRecentProjects(projectsRes.data.data.slice(0, 5))
      }

    } catch (error) {
      console.error('Error fetching dashboard data:', error)
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
    return <div className="dashboard-loading">Loading Dashboard...</div>
  }

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>PortEasy CMS</h2>
          <p>Admin Panel</p>
        </div>

        <nav className="sidebar-nav">
          <Link to="/admin/dashboard" className="nav-item active">
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </Link>
          <Link to="/admin/projects" className="nav-item">
            <FolderGit2 size={20} />
            <span>Projects</span>
          </Link>
          <Link to="/admin/blog" className="nav-item">
            <FileText size={20} />
            <span>Blog Posts</span>
          </Link>
          <Link to="/admin/skills" className="nav-item">
            <Cpu size={20} />
            <span>Skills</span>
          </Link>
          <Link to="/admin/contacts" className="nav-item">
            <MessageSquare size={20} />
            <span>Messages</span>
          </Link>
          <Link to="/admin/settings" className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </Link>
        </nav>

        <div className="sidebar-footer">
          <button onClick={handleLogout} className="logout-btn">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="content-header">
          <h1>Dashboard Overview</h1>
          <div className="user-profile">
            <span className="user-initial">A</span>
            <span className="user-name">Admin</span>
          </div>
        </header>

        <div className="stats-grid">
          <div className="stat-card blue">
            <div className="stat-icon">
              <FolderGit2 size={24} />
            </div>
            <div className="stat-info">
              <h3>Total Projects</h3>
              <p className="value">{stats.projects}</p>
            </div>
            <div className="stat-chart">
              <TrendingUp size={40} className="chart-icon" />
            </div>
          </div>

          <div className="stat-card purple">
            <div className="stat-icon">
              <FileText size={24} />
            </div>
            <div className="stat-info">
              <h3>Blog Articles</h3>
              <p className="value">{stats.blogPosts}</p>
            </div>
            <div className="stat-chart">
              <Eye size={40} className="chart-icon" />
            </div>
          </div>

          <div className="stat-card green">
            <div className="stat-icon">
              <Cpu size={24} />
            </div>
            <div className="stat-info">
              <h3>Skills Listed</h3>
              <p className="value">{stats.skills}</p>
            </div>
          </div>

          <div className="stat-card orange">
            <div className="stat-icon">
              <MessageSquare size={24} />
            </div>
            <div className="stat-info">
              <h3>New Messages</h3>
              <p className="value">{stats.contacts}</p>
            </div>
            <div className="stat-chart">
              <Users size={40} className="chart-icon" />
            </div>
          </div>
        </div>

        <section className="recent-activity">
          <div className="section-header">
            <h2>Recent Projects</h2>
            <Link to="/admin/projects" className="view-all">View All</Link>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentProjects.length > 0 ? (
                  recentProjects.map((project, index) => (
                    <tr key={index}>
                      <td>{project.title}</td>
                      <td><span className="badge category">{project.category}</span></td>
                      <td><span className="badge status">Active</span></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'center' }}>No projects found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
