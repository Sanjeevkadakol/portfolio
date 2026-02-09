import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Background from './components/Background'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 100

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
    <ThemeProvider>
      <div className="App">
        <Background />
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App

