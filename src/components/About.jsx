import { motion } from 'framer-motion'

const About = () => {
  const pillars = [
    {
      title: "RAG & LLM Architectures",
      desc: "Specializing in semantic vector indexing, chunking strategies, embeddings, FAISS, Pinecone, and LangChain orchestration."
    },
    {
      title: "Predictive Analytics & ML",
      desc: "Applying Scikit-learn, PyTorch, TensorFlow, Pandas, and NumPy for predictive scoring and end-to-end data workflows."
    },
    {
      title: "Full-Stack Web Engineering",
      desc: "Developing responsive frontend client apps in React & Next.js alongside high-throughput APIs with FastAPI and Flask."
    },
    {
      title: "Core Computer Science",
      desc: "Deep grounding in Data Structures & Algorithms, Database Management Systems, Agentic AI, and Cloud deployment."
    }
  ]

  return (
    <section id="about" className="w-full py-24 md:py-32 px-6 md:px-12 bg-cream text-ink border-t border-ink/10 selection:bg-lemon selection:text-ink">
      <div className="max-w-page mx-auto">
        {/* Section Headline in 42px Prody */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
            <span className="font-suisse-book text-xs uppercase tracking-widest text-ink/60">
              01 • About & Foundation
            </span>
          </div>
          <h2 className="font-prody text-4xl sm:text-5xl lg:text-[42px] font-normal leading-[1.15] text-ink">
            Academic Foundation & Engineering Vision
          </h2>
          <p className="font-suisse text-base text-ink/75 leading-relaxed">
            Building intelligent software systems where data-driven machine learning models meet robust, scalable full-stack applications.
          </p>
        </div>

        {/* 37px Rounded Academic Card & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Main Degree Card with 37px Radius */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-cream rounded-cards p-8 sm:p-[37px] border border-ink/15 flex flex-col justify-between"
          >
            <div>
              <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-wider block mb-2">
                Degree Specification
              </span>
              <h3 className="font-prody text-2xl sm:text-3xl text-ink font-normal mb-2 leading-tight">
                Bachelor of Engineering
              </h3>
              <p className="font-suisse text-sm font-medium text-ink/80 mb-6">
                Artificial Intelligence & Machine Learning
              </p>
              
              <div className="space-y-1 border-t border-ink/10 pt-4">
                <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-wider block">
                  Institution
                </span>
                <p className="font-suisse text-base font-medium text-ink">
                  BMS Institute of Technology & Management
                </p>
                <p className="font-suisse text-xs text-ink/60">Bengaluru, Karnataka, India</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-ink/10 pt-6 mt-8">
              <div>
                <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-wider block">Cumulative GPA</span>
                <span className="font-prody text-2xl font-normal text-ink">8.10 / 10.0</span>
              </div>
              <div>
                <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-wider block">Graduation</span>
                <span className="font-prody text-2xl font-normal text-ink">2027</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 bg-cream rounded-cards p-8 sm:p-[37px] border border-ink/15 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4 font-suisse text-base text-ink/80 leading-relaxed">
              <p className="font-prody text-2xl sm:text-3xl text-ink font-normal leading-snug">
                "Combining analytical machine learning with clean, modern web engineering to create autonomous, high-impact products."
              </p>
              <p>
                I am an AI & Machine Learning engineer based in Bengaluru. Across internships in data analytics, AI modeling, and full-stack web development, I’ve specialized in converting complex algorithms and data pipelines into production-ready software.
              </p>
              <p>
                Having completed 4 internships across <strong className="text-ink font-medium">HEProAI</strong> (AI & ML), <strong className="text-ink font-medium">Bluestock Fintech</strong> (Data Analytics), <strong className="text-ink font-medium">Webstack Academy</strong> (Full-Stack Dev), and <strong className="text-ink font-medium">EazyByts</strong> (Web Dev), I bring a complete end-to-end development skill set.
              </p>
            </div>

            {/* Quick Numbers Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-ink/10 pt-6">
              <div>
                <span className="font-prody text-3xl text-ink block">04</span>
                <span className="font-suisse-book text-xs text-ink/60">Internships</span>
              </div>
              <div>
                <span className="font-prody text-3xl text-ink block">04</span>
                <span className="font-suisse-book text-xs text-ink/60">Projects</span>
              </div>
              <div>
                <span className="font-prody text-3xl text-ink block">06</span>
                <span className="font-suisse-book text-xs text-ink/60">Certifications</span>
              </div>
              <div>
                <span className="font-prody text-3xl text-ink block">8.10</span>
                <span className="font-suisse-book text-xs text-ink/60">GPA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars Grid (37px Radius Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cream rounded-cards p-7 border border-ink/15 flex flex-col justify-between hover:border-ink/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-suisse-book text-xs text-ink/50">0{idx + 1}</span>
                  <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
                </div>
                <h4 className="font-suisse text-lg font-semibold text-ink mb-2 leading-snug">
                  {pillar.title}
                </h4>
                <p className="font-suisse text-xs text-ink/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
