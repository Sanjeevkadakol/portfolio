import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PortfolioApp from './App.jsx'
import AdminLogin from './admin/AdminLogin.jsx'
import Dashboard from './admin/Dashboard.jsx'
import AdminProjects from './admin/AdminProjects.jsx'
import AdminBlog from './admin/AdminBlog.jsx'
import AdminSkills from './admin/AdminSkills.jsx'
import AdminContacts from './admin/AdminContacts.jsx'
import AdminSettings from './admin/AdminSettings.jsx'

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  return token ? children : <Navigate to="/admin/login" />
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioApp />} />
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* Protected Routes (Login Bypassed) */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/projects" element={<AdminProjects />} />
        <Route path="/admin/blog" element={<AdminBlog />} />
        <Route path="/admin/skills" element={<AdminSkills />} />
        <Route path="/admin/contacts" element={<AdminContacts />} />
        <Route path="/admin/settings" element={<AdminSettings />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
