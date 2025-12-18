import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Sanjeev Kadakol</span>
          </h1>
          <h2 className="hero-subtitle">AI/ML Engineer</h2>
          <p className="hero-description">
            Aspiring AI/ML Engineer with a solid academic background in computer science.
            Passionate about applying machine learning and data science principles to combat financial crime.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <div className="avatar-placeholder">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="50" fill="url(#gradient)"/>
                <circle cx="50" cy="40" r="15" fill="white"/>
                <path d="M30 75 Q30 60 50 60 Q70 60 70 75" fill="white"/>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="100">
                    <stop offset="0%" stopColor="#6366f1"/>
                    <stop offset="100%" stopColor="#8b5cf6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="floating-elements">
              <div className="floating-element element-1">🤖</div>
              <div className="floating-element element-2">🧠</div>
              <div className="floating-element element-3">📊</div>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Hero

