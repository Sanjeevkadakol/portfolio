import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
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
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contributions', label: 'Contributions' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${isScrolled ? 'bg-putty/95 backdrop-blur-sm border-b border-vellum' : 'bg-transparent'}`}>
      <div className="max-w-page mx-auto px-6 md:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: 32px Circled 'S' Monogram */}
        <button
          onClick={() => scrollToSection('home')}
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Home"
        >
          <div className="w-8 h-8 rounded-full border-[1.5px] border-ink flex items-center justify-center font-davinci text-sm font-medium transition-transform group-hover:scale-105">
            S
          </div>
          <span className="font-helvetica text-xs uppercase tracking-wider text-ink font-medium hidden sm:inline-block">
            Sanjeev Kadakol
          </span>
        </button>

        {/* Center/Right: Clean Helvetica Now Links + Black Pill Button */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-helvetica text-xs transition-colors hover:underline underline-offset-4 focus:outline-none ${
                  activeSection === item.id
                    ? 'text-ink font-medium underline'
                    : 'text-graphite hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection('contact')}
            className="btn-pill-black ml-2"
          >
            Get In Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-ink hover:opacity-75 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-putty border-b border-vellum px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-helvetica text-left text-sm transition-colors py-1 ${
                  activeSection === item.id ? 'text-ink font-medium' : 'text-graphite'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-3 border-t border-vellum">
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-pill-black w-full"
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
