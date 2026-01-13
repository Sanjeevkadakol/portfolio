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
              <img
                src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
                alt="AI/ML"
                style={{ width: '80px', height: '80px', marginBottom: '1rem' }}
              />
              <div className="stat-label">AI/ML Expert</div>
            </div>
            <div className="stat-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
                alt="Neural Networks"
                style={{ width: '80px', height: '80px', marginBottom: '1rem' }}
              />
              <div className="stat-label">Neural Networks</div>
            </div>
            <div className="stat-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
                style={{ width: '80px', height: '80px', marginBottom: '1rem' }}
              />
              <div className="stat-label">Python Master</div>
            </div>
            <div className="stat-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2920/2920329.png"
                alt="Data Science"
                style={{ width: '80px', height: '80px', marginBottom: '1rem' }}
              />
              <div className="stat-label">Data Science</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

