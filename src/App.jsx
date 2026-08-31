import { useState, useEffect } from 'react'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contributions from './components/Contributions'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'contributions', 'skills', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 120

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-cream text-ink antialiased flex flex-col font-suisse selection:bg-lemon selection:text-ink">
      <Background />
      <Navbar activeSection={activeSection} />
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contributions />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
