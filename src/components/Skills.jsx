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
      { name: "Pinecone", category: "Managed Vector Database", icon: "🌲" },
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
    <section id="skills" className="w-full py-24 md:py-32 px-6 md:px-12 bg-cream text-ink border-t border-ink/10 selection:bg-lemon selection:text-ink">
      <div className="max-w-page mx-auto">
        {/* Section Header in Prody */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
              <span className="font-suisse-book text-xs uppercase tracking-widest text-ink/60">
                05 • Tech Arsenal
              </span>
            </div>
            <h2 className="font-prody text-4xl sm:text-5xl lg:text-[42px] font-normal leading-[1.15] text-ink">
              Technical Arsenal & Stack
            </h2>
            <p className="font-suisse text-base text-ink/75 leading-relaxed">
              Organized into 3 focused divisions across core programming languages, AI/ML frameworks, and developer tools.
            </p>
          </div>

          {/* 3 Main Divisions Pill Toggle Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full border border-ink/15 bg-cream">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-suisse font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-ink text-cream shadow-sm'
                    : 'text-ink/70 hover:text-ink'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeTab === tab.id ? 'bg-lemon text-ink font-semibold' : 'bg-ink/10 text-ink/70'}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Arsenal Grid (37px Radius Cards) */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {techArsenal[activeTab].map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="bg-cream rounded-[28px] p-6 border border-ink/15 flex flex-col justify-between hover:border-ink/40 hover:-translate-y-1 transition-all duration-200 group"
            >
              <div>
                {/* Icon Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl p-2.5 rounded-[18px] bg-ink/5 border border-ink/10 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-lemon border border-ink opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Tech Title */}
                <h3 className="font-suisse text-lg sm:text-xl font-semibold text-ink mb-1 group-hover:underline underline-offset-2">
                  {tech.name}
                </h3>
                <p className="font-suisse-book text-xs text-ink/60">
                  {tech.category}
                </p>
              </div>

              <div className="pt-4 border-t border-ink/10 mt-4 flex items-center justify-between">
                <span className="font-suisse-book text-[11px] text-ink/40">
                  Pillar // 0{idx + 1}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-lemon border border-ink/40" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
