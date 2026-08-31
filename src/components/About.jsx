import { motion } from 'framer-motion'
import { Download, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'

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
      title: "Full Stack Development",
      desc: "Developing responsive frontend client apps in React & Next.js alongside high-throughput backend APIs with FastAPI and Flask."
    },
    {
      title: "Core Computer Science",
      desc: "Deep grounding in Data Structures & Algorithms, Database Management Systems, Agentic AI, and Cloud deployment."
    }
  ]

  return (
    <section id="about" className="w-full py-24 md:py-32 px-6 md:px-12 bg-transparent text-ink border-t border-ink/10 selection:bg-lemon selection:text-ink">
      <div className="max-w-page mx-auto">
        {/* Section Headline in 42px Prody */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
            <span className="font-suisse-book text-xs uppercase tracking-widest text-ink/60">
              01 • About & Profile
            </span>
          </div>
          <h2 className="font-prody text-4xl sm:text-5xl lg:text-[42px] font-normal leading-[1.15] text-ink">
            Academic Foundation & Engineering Profile
          </h2>
          <p className="font-suisse text-base text-ink/75 leading-relaxed">
            AI & Machine Learning engineer with hands-on experience training predictive models and shipping full-stack products.
          </p>
        </div>

        {/* Profile Grid: Left Bio & Stats + Right Photo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          {/* Left Column (8 Cols): Academic Specs, Bio, Stats, & Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-cream rounded-cards p-8 sm:p-[37px] border border-ink/15 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              {/* Degree Header */}
              <div className="border-b border-ink/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-wider block mb-1">
                    B.E. Degree • 2023 – 2027
                  </span>
                  <h3 className="font-prody text-2xl sm:text-3xl text-ink font-normal leading-tight">
                    Artificial Intelligence & Machine Learning
                  </h3>
                  <p className="font-suisse text-sm font-medium text-ink/75 mt-1">
                    BMS Institute of Technology & Management • Bengaluru
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-wider block">Cumulative GPA</span>
                  <span className="font-prody text-2xl sm:text-3xl font-normal text-ink">8.10 / 10.0</span>
                </div>
              </div>

              {/* Bio Narrative */}
              <div className="space-y-4 font-suisse text-base text-ink/80 leading-relaxed">
                <p className="font-prody text-xl sm:text-2xl text-ink font-normal leading-snug">
                  "Combining analytical machine learning with clean, modern full stack development to create autonomous, high-impact products."
                </p>
                <p>
                  I am an AI & Machine Learning engineer based in Bengaluru. Across 4 internships spanning data analytics, predictive AI modeling, and full-stack web engineering, I’ve specialized in converting complex algorithms and data pipelines into production-ready software.
                </p>
                <p>
                  Experience across <strong className="text-ink font-medium">HEProAI</strong> (AI/ML), <strong className="text-ink font-medium">Bluestock Fintech</strong> (Data Analytics), <strong className="text-ink font-medium">Webstack Academy</strong> (Full Stack Dev), and <strong className="text-ink font-medium">EazyByts</strong> (Web Dev).
                </p>
              </div>
            </div>

            {/* Stats Row & Resume Download Button */}
            <div className="pt-6 border-t border-ink/10 space-y-6">
              {/* Quick Numbers Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <span className="font-prody text-3xl text-ink block">04</span>
                  <span className="font-suisse-book text-xs text-ink/60">Internships Done</span>
                </div>
                <div>
                  <span className="font-prody text-3xl text-ink block">04</span>
                  <span className="font-suisse-book text-xs text-ink/60">Projects Shipped</span>
                </div>
                <div>
                  <span className="font-prody text-3xl text-ink block">06</span>
                  <span className="font-suisse-book text-xs text-ink/60">Certifications</span>
                </div>
                <div>
                  <span className="font-prody text-3xl text-ink block">8.10</span>
                  <span className="font-suisse-book text-xs text-ink/60">CGPA</span>
                </div>
              </div>

              {/* Download Resume Action */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="/resume.pdf"
                  download="Sanjeev_Kadakol_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lemon-pill"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
                <span className="font-suisse-book text-xs text-ink/50">
                  Updated Resume (PDF)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column (4 Cols): Portrait Photo Card with 37px Radius */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 bg-cream rounded-cards p-6 sm:p-7 border border-ink/15 flex flex-col justify-between"
          >
            <div>
              {/* 37px Clipped Photo Frame */}
              <div className="relative w-full h-72 sm:h-80 rounded-[28px] overflow-hidden border border-ink/15 bg-ink/5 mb-6">
                <img
                  src="/sanjeev.jpg"
                  alt="Sanjeev Kadakol"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* ID Details */}
              <div className="space-y-1">
                <h4 className="font-suisse text-lg font-semibold text-ink">
                  Sanjeev Kadakol
                </h4>
                <p className="font-suisse-book text-xs text-ink/60 uppercase tracking-wider">
                  AI/ML & Full Stack Developer
                </p>
                <p className="font-suisse-book text-xs text-ink/50">
                  BMSIT&M • Bengaluru, India
                </p>
              </div>
            </div>

            {/* Status & Quick Links */}
            <div className="pt-6 border-t border-ink/10 space-y-4 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-suisse text-xs text-ink/80 font-medium">
                  Open to Opportunities
                </span>
              </div>

              <div className="flex items-center gap-3 text-ink/70">
                <a
                  href="https://github.com/Sanjeevkadakol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-ink/15 hover:border-ink hover:text-ink transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanjeev-kadakol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-ink/15 hover:border-ink hover:text-ink transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:sanjeevpkadakol1@gmail.com"
                  className="p-2 rounded-full border border-ink/15 hover:border-ink hover:text-ink transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
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
