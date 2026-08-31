import { useState, useEffect } from 'react'

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
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${isScrolled ? 'bg-cream/95 backdrop-blur-sm border-b border-ink/10' : 'bg-cream'}`}>
      <div className="max-w-page mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Left: Wordmark in SuisseIntl ~21px */}
        <button
          onClick={() => scrollToSection('home')}
          className="font-suisse text-xl sm:text-[21px] font-normal tracking-tight text-ink hover:opacity-80 transition-opacity focus:outline-none"
        >
          Portfolio
        </button>

        {/* Center/Right: Links with 4px circle outline dot + Filled Yellow CTA */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-2 font-suisse-book text-[13px] text-ink/80 hover:text-ink transition-colors focus:outline-none py-2"
              >
                {/* 4px Circle Outline Dot */}
                <span className={`w-1.5 h-1.5 rounded-full border border-ink ${activeSection === item.id ? 'bg-lemon' : 'bg-transparent'}`} />
                <span className={activeSection === item.id ? 'font-medium text-ink' : ''}>
                  {item.label}
                </span>
              </button>
            ))}
          </nav>

          {/* Filled Electric Lemon Pill Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-lemon-pill"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-ink focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col items-end gap-1.5">
            <span className={`h-0.5 bg-ink transition-all duration-200 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
            <span className={`h-0.5 bg-ink transition-all duration-200 ${isMobileMenuOpen ? 'opacity-0' : 'w-4'}`} />
            <span className={`h-0.5 bg-ink transition-all duration-200 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream border-b border-ink/10 px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="flex items-center gap-2.5 w-full text-left font-suisse-book text-sm text-ink py-1.5"
            >
              <span className={`w-1.5 h-1.5 rounded-full border border-ink ${activeSection === item.id ? 'bg-lemon' : 'bg-transparent'}`} />
              <span>{item.label}</span>
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-lemon-pill w-full mt-3"
          >
            Get in touch
          </button>
        </div>
      )}
    </header>
  )
}

export default Navbar
