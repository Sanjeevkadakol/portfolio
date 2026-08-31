import { motion } from 'framer-motion'

const skillCategories = [
  {
    name: "Programming Languages",
    skills: ["Python", "C", "SQL", "JavaScript", "HTML", "CSS"],
    description: "Core algorithmic foundations, backend development, relational querying, and user interface scripting."
  },
  {
    name: "AI/ML & Frameworks",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "RAG", "Agentic AI"],
    description: "Deep learning models, predictive scoring pipelines, semantic retrieval, and autonomous LLM orchestration."
  },
  {
    name: "Data & Databases",
    skills: ["Pandas", "NumPy", "SQL", "NeonDB", "Pinecone", "FAISS"],
    description: "Vector database indexing, low-latency similarity search, statistical exploration, and relational schemas."
  },
  {
    name: "Web Development",
    skills: ["React", "Next.js", "JavaScript", "HTML", "CSS", "REST APIs", "Flask", "FastAPI"],
    description: "Component-based web applications, asynchronous API endpoints, and full-stack software architectures."
  },
  {
    name: "Developer Tools",
    skills: ["Git", "GitHub", "Docker", "Vercel", "Jupyter Notebook"],
    description: "Version control workflows, containerization, cloud hosting pipelines, and interactive data notebooks."
  },
  {
    name: "Core Concepts",
    skills: ["DSA", "DBMS", "Full Stack Development", "Agentic AI", "Cloud Computing"],
    description: "Algorithmic problem solving, database normalization, system design principles, and cloud deployments."
  }
]

const Skills = () => {
  return (
    <section id="skills" className="w-full py-24 md:py-32 px-6 md:px-12 bg-cream text-ink border-t border-ink/10 selection:bg-lemon selection:text-ink">
      <div className="max-w-page mx-auto">
        {/* Section Header in Prody */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
              <span className="font-suisse-book text-xs uppercase tracking-widest text-ink/60">
                04 • Competencies
              </span>
            </div>
            <h2 className="font-prody text-4xl sm:text-5xl lg:text-[42px] font-normal leading-[1.15] text-ink">
              Technical Taxonomy & Domains
            </h2>
            <p className="font-suisse text-base text-ink/75 leading-relaxed">
              Comprehensive toolset across machine learning, vector architectures, and full-stack development.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-widest">
              6 Core Pillars
            </span>
          </div>
        </div>

        {/* 6 Categories Grid with 37px Radius Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cream rounded-cards p-8 sm:p-[37px] border border-ink/15 flex flex-col justify-between hover:border-ink/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-suisse-book text-xs text-ink/50">
                    Pillar 0{idx + 1}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
                </div>

                <h3 className="font-suisse text-xl sm:text-2xl font-semibold text-ink mb-3 leading-tight">
                  {category.name}
                </h3>
                <p className="font-suisse text-xs sm:text-sm text-ink/70 leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              <div className="pt-4 border-t border-ink/10">
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-suisse text-[11px] px-3 py-1 rounded-pills bg-cream border border-ink/15 text-ink/85"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
