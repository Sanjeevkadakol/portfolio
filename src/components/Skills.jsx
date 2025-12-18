import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Web Development',
      icon: '🎨',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 88 }
      ]
    },
    {
      category: 'AI/ML & Data Science',
      icon: '🤖',
      skills: [
        { name: 'Machine Learning', level: 85 },
        { name: 'Artificial Intelligence', level: 80 },
        { name: 'Python', level: 90 },
        { name: 'Data Analysis', level: 85 }
      ]
    },
    {
      category: 'Programming Languages',
      icon: '💻',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'Java', level: 75 }
      ]
    },
    {
      category: 'Tools & Frameworks',
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'TensorFlow', level: 75 },
        { name: 'Pandas', level: 80 },
        { name: 'NumPy', level: 82 }
      ]
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.category}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stack">
          <h3 className="tech-stack-title">Tech Stack</h3>
          <div className="tech-icons">
            <div className="tech-icon" title="HTML">🌐</div>
            <div className="tech-icon" title="CSS">🎨</div>
            <div className="tech-icon" title="JavaScript">📜</div>
            <div className="tech-icon" title="Python">🐍</div>
            <div className="tech-icon" title="Machine Learning">🤖</div>
            <div className="tech-icon" title="Artificial Intelligence">🧠</div>
            <div className="tech-icon" title="TensorFlow">⚡</div>
            <div className="tech-icon" title="Pandas">🐼</div>
            <div className="tech-icon" title="NumPy">🔢</div>
            <div className="tech-icon" title="Git">🔀</div>
            <div className="tech-icon" title="Data Analysis">📊</div>
            <div className="tech-icon" title="Jupyter">📓</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

