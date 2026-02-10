import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PortfolioApp from './App.jsx'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioApp />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
