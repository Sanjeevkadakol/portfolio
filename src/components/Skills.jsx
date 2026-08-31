import { useState } from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages')

  const techArsenal = {
    languages: [
      { name: "Python", category: "Core Backend & AI", icon: "🐍" },
      { name: "C", category: "Systems & Algorithms", icon: "⚙️" },
      { name: "SQL", category: "Querying & Relational", icon: "🗄️" },
      { name: "JavaScript", category: "Full-Stack Scripting", icon: "⚡" },
      { name: "TypeScript", category: "Type-Safe Full-Stack", icon: "🔷" },
      { name: "HTML5", category: "Semantic Web Structure", icon: "🌐" },
      { name: "CSS3", category: "Responsive UI & Styling", icon: "🎨" }
    ],
    frameworks: [
      { name: "PyTorch", category: "Deep Learning & Tensors", icon: "🔥" },
      { name: "TensorFlow", category: "Machine Learning Models", icon: "🧠" },
      { name: "Scikit-Learn", category: "Predictive ML & Scoring", icon: "📊" },
      { name: "LangChain", category: "RAG & LLM Orchestration", icon: "🦜" },
      { name: "FastAPI", category: "High-Throughput APIs", icon: "🚀" },
      { name: "React", category: "Component UI Architecture", icon: "⚛️" },
      { name: "Next.js", category: "Server-Side & Web Apps", icon: "▲" },
      { name: "Flask", category: "Python Web Framework", icon: "🧪" },
      { name: "Pandas", category: "Data Manipulation", icon: "🐼" },
      { name: "NumPy", category: "Numerical Operations", icon: "🔢" }
    ],
    tools: [
      { name: "Git", category: "Version Control", icon: "🌱" },
      { name: "GitHub", category: "Collaboration & CI/CD", icon: "🐙" },
      { name: "Docker", category: "Containerization", icon: "🐳" },
      { name: "FAISS", category: "Vector Similarity Search", icon: "🔍" },
      { name: "NeonDB", category: "Serverless PostgreSQL", icon: "🐘" },
      { name: "Vercel", category: "Cloud Edge Hosting", icon: "▲" },
      { name: "Jupyter", category: "Interactive Data Notebooks", icon: "🪐" },
      { name: "SQLAlchemy", category: "Python ORM & SQLite", icon: "🔗" }
    ]
  }

  const tabs = [
    { id: 'languages', label: 'Languages', count: techArsenal.languages.length },
    { id: 'frameworks', label: 'Frameworks', count: techArsenal.frameworks.length },
    { id: 'tools', label: 'Tools & Databases', count: techArsenal.tools.length }
  ]

  return (
    <section id="skills" className="w-full py-20 md:py-28 px-6 md:px-12 bg-putty text-ink border-b border-vellum selection:bg-ink selection:text-paper">
      <div className="max-w-page mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="font-helvetica text-[11px] uppercase tracking-widest text-graphite block font-medium">
              05 • Technical Arsenal
            </span>
            <h2 className="font-davinci text-3xl sm:text-4xl md:text-[43px] font-normal leading-[1.1] tracking-[-0.215px] text-ink">
              Taxonomy & Skill Stack
            </h2>
            <p className="font-helvetica text-sm text-graphite leading-relaxed">
              Organized into 3 focused divisions across programming languages, AI/ML frameworks, and developer tools.
            </p>
          </div>

          {/* 3 Main Divisions Pill Toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-full border border-vellum bg-bone">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-helvetica transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#e5a910] text-ink font-semibold border border-ink/20 shadow-sm'
                    : 'text-graphite hover:text-ink'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${activeTab === tab.id ? 'bg-ink/10 text-ink font-bold' : 'bg-putty text-graphite'}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Arsenal Grid (9px Bone Cards) */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {techArsenal[activeTab].map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: idx * 0.03 }}
              className="bg-bone rounded-cards p-6 border border-vellum flex flex-col justify-between hover:border-graphite transition-all group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl p-2 rounded-cards bg-putty/40 border border-vellum">
                    {tech.icon}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                </div>

                <h3 className="font-davinci text-lg text-ink font-normal mb-1 group-hover:underline">
                  {tech.name}
                </h3>
                <p className="font-helvetica text-xs text-graphite">
                  {tech.category}
                </p>
              </div>

              <div className="pt-3 border-t border-vellum mt-4 flex items-center justify-between">
                <span className="font-helvetica text-[10px] text-graphite uppercase tracking-wider font-medium">
                  Verified Tool
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
