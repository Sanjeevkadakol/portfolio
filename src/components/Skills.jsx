import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      icon: '🤖',
      skills: [
        { name: 'Gen AI', level: 90 },
        { name: 'Machine Learning', level: 85 },
        { name: 'Agentic AI', level: 80 },
        { name: 'Foundations of AI', level: 85 }
      ]
    },
    {
      category: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'HTML / CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'Web Development', level: 88 }
      ]
    },
    {
      category: 'Design & Soft Skills',
      icon: '🎨',
      skills: [
        { name: 'UI/UX Design', level: 80 },
        { name: 'Communication', level: 90 }
      ]
    }
  ]

  const techStack = [
    { name: 'Gen AI', icon: '🧠' },
    { name: 'Machine Learning', icon: '🤖' },
    { name: 'Agentic AI', icon: '🕵️' },
    { name: 'HTML/CSS', icon: '🌐' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'UI/UX', icon: '🎨' },
    { name: 'Communication', icon: '🗣️' }
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
            {techStack.map((tech, index) => (
              <div key={index} className="tech-item">
                <div className="tech-icon">{tech.icon}</div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

