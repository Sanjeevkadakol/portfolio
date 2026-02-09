import { useState, useEffect } from 'react'
import { Dock, DockIcon, DockItem, DockLabel } from './ui/dock'
import {
  Home,
  User,
  FolderOpenDot,
  Cpu,
  Award,
  MessageSquare,
  Github,
  Linkedin,
  Mail
} from 'lucide-react'
import './Navbar.css'

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="w-full h-full" /> },
    { id: 'about', label: 'About', icon: <User className="w-full h-full" /> },
    { id: 'projects', label: 'Projects', icon: <FolderOpenDot className="w-full h-full" /> },
    { id: 'skills', label: 'Skills', icon: <Cpu className="w-full h-full" /> },
    { id: 'certifications', label: 'Certifications', icon: <Award className="w-full h-full" /> },
    { id: 'contact', label: 'Contact', icon: <MessageSquare className="w-full h-full" /> },
  ]

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          Portfolio
        </div>

        {/* Desktop Dock Navigation */}
        <div className="hidden md:flex flex-1 justify-end">
          <Dock className="bg-transparent border-0 p-0 m-0 gap-6">
            {navItems.map((item) => (
              <DockItem
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`aspect-square rounded-full transition-colors ${activeSection === item.id ? 'bg-[#88734C]/20 text-[#88734C]' : 'bg-transparent hover:bg-white/5 text-white/60 hover:text-[#88734C]'}`}
              >
                <DockLabel>{item.label}</DockLabel>
                <DockIcon>{item.icon}</DockIcon>
              </DockItem>
            ))}
          </Dock>
        </div>

        <button
          className="mobile-menu-toggle md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <ul className={`nav-menu md:hidden ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.id)
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

