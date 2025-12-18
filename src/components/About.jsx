import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Aspiring AI/ML Engineer with a solid academic background in computer science.
              Passionate about applying machine learning and data science principles to combat financial crime.
            </p>
            <p>
              Seeking an opportunity to leverage my skills in Python, machine learning, and data analysis
              to contribute to the development of innovative anti-money laundering solutions.
            </p>
            <p>
              Organized and dependable candidate successful at managing multiple priorities with a positive attitude.
              Willingness to take on added responsibilities to meet team goals.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div>
                  <h3>Goal-Oriented</h3>
                  <p>Focused on combating financial crime through AI/ML</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🤖</div>
                <div>
                  <h3>AI/ML Enthusiast</h3>
                  <p>Passionate about machine learning and data science</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">💡</div>
                <div>
                  <h3>Problem Solver</h3>
                  <p>Applying ML principles to solve real-world challenges</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🤝</div>
                <div>
                  <h3>Team Player</h3>
                  <p>Organized and dependable, ready to contribute</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">AI/ML</div>
              <div className="stat-label">Specialization</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Python</div>
              <div className="stat-label">Primary Language</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedicated</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">Ready</div>
              <div className="stat-label">To Contribute</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

