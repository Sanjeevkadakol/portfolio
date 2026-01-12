import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PortfolioApp from './App.jsx'
import AdminLogin from './admin/AdminLogin.jsx'
import Dashboard from './admin/Dashboard.jsx'
import AdminProjects from './admin/AdminProjects.jsx'
import AdminBlog from './admin/AdminBlog.jsx'
import AdminSkills from './admin/AdminSkills.jsx'
import AdminSettings from './admin/AdminSettings.jsx'

// ... existing imports ...

// ... existing code ...

        <Route path="/admin/contacts" element={<PrivateRoute><AdminContacts /></PrivateRoute>} />
        <Route path="/admin/settings" element={<PrivateRoute><AdminSettings /></PrivateRoute>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes >
    </BrowserRouter >
  )
}

export default AppRouter

