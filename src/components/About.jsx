import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail } from 'lucide-react'

const About = () => {
  const pillars = [
    {
      num: "01",
      title: "RAG & LLM Architectures",
      desc: "Specializing in semantic vector indexing, chunking strategies, embeddings, FAISS, and LangChain orchestration."
    },
    {
      num: "02",
      title: "Predictive Analytics & ML",
      desc: "Applying Scikit-learn, PyTorch, TensorFlow, Pandas, and NumPy for predictive scoring and end-to-end data workflows."
    },
    {
      num: "03",
      title: "Full Stack Development",
      desc: "Developing responsive client applications in React & Next.js alongside high-throughput APIs with FastAPI and Flask."
    },
    {
      num: "04",
      title: "Core Computer Science",
      desc: "Deep grounding in Data Structures & Algorithms, Database Management Systems, Agentic AI, and Cloud deployment."
    }
  ]

  return (
    <section id="about" className="w-full py-20 md:py-28 px-6 md:px-12 bg-putty text-ink border-b border-vellum selection:bg-ink selection:text-paper">
      <div className="max-w-page mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="font-helvetica text-[11px] uppercase tracking-widest text-graphite block">
            01 • Profile & Background
          </span>
          <h2 className="font-davinci text-3xl sm:text-4xl md:text-[43px] font-normal leading-[1.1] tracking-[-0.215px] text-ink">
            Academic Foundation & Philosophy
          </h2>
          <p className="font-helvetica text-sm text-graphite leading-relaxed">
            AI & Machine Learning engineer combining predictive model development with robust, full-stack software systems.
          </p>
        </div>

        {/* Profile Grid: Left Bio & Stats (Bone Cards) + Right Portrait Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch">
          {/* Left Column (8 Cols): Academic Specs, Bio, Stats, & Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 bg-bone rounded-cards p-7 sm:p-8 border border-vellum flex flex-col justify-between space-y-6"
          >
            <div className="space-y-5">
              {/* Degree Header */}
              <div className="border-b border-vellum pb-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
                <div>
                  <span className="font-helvetica text-[10px] text-graphite uppercase tracking-wider block mb-1">
                    B.E. DEGREE • 2023 – 2027
                  </span>
                  <h3 className="font-davinci text-xl sm:text-2xl text-ink font-normal leading-snug">
                    Bachelor of Engineering — Artificial Intelligence & Machine Learning
                  </h3>
                  <p className="font-helvetica text-xs text-graphite mt-1">
                    BMS Institute of Technology & Management • Bengaluru, India
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span className="font-helvetica text-[10px] text-graphite uppercase tracking-wider block">CGPA</span>
                  <span className="font-davinci text-2xl font-normal text-ink">8.10 / 10.0</span>
                </div>
              </div>

              {/* Bio Narrative in Structured Editorial Voice */}
              <div className="space-y-3 font-helvetica text-xs sm:text-sm text-graphite leading-relaxed">
                <p className="font-davinci text-lg sm:text-xl text-ink font-normal italic leading-snug">
                  "Combining analytical machine learning with clean, modern full stack development to build autonomous, high-impact software."
                </p>
                <p>
                  I am an AI & Machine Learning engineer based in Bengaluru. Across internships in data analytics, AI modeling, and full-stack engineering, I’ve specialized in converting complex algorithms and data pipelines into production-ready software.
                </p>
                <p>
                  Experience completed across <strong className="text-ink font-medium">HEProAI</strong> (AI & ML), <strong className="text-ink font-medium">Bluestock Fintech</strong> (Data Analytics), <strong className="text-ink font-medium">Webstack Academy</strong> (Full-Stack Dev), and <strong className="text-ink font-medium">EazyByts</strong> (Web Dev).
                </p>
              </div>
            </div>

            {/* Stats Row & Resume Download Button */}
            <div className="pt-5 border-t border-vellum space-y-5">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <span className="font-davinci text-2xl sm:text-3xl text-ink block">04</span>
                  <span className="font-helvetica text-[11px] text-graphite">Internships Done</span>
                </div>
                <div>
                  <span className="font-davinci text-2xl sm:text-3xl text-ink block">04</span>
                  <span className="font-helvetica text-[11px] text-graphite">Projects Shipped</span>
                </div>
                <div>
                  <span className="font-davinci text-2xl sm:text-3xl text-ink block">06</span>
                  <span className="font-helvetica text-[11px] text-graphite">Certifications</span>
                </div>
                <div>
                  <span className="font-davinci text-2xl sm:text-3xl text-ink block">8.10</span>
                  <span className="font-helvetica text-[11px] text-graphite">CGPA</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <a
                  href="/resume.pdf"
                  download="Sanjeev_Kadakol_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-black"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column (4 Cols): Portrait Photo in 9px Bone Card */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 bg-bone rounded-cards p-6 border border-vellum flex flex-col justify-between"
          >
            <div>
              {/* 9px Framed Photo */}
              <div className="relative w-full h-64 sm:h-72 rounded-cards overflow-hidden border border-vellum bg-ash/20 mb-5">
                <img
                  src="/sanjeev.jpg"
                  alt="Sanjeev Kadakol"
                  className="w-full h-full object-cover object-top filter grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* ID Details */}
              <div className="space-y-1">
                <h4 className="font-davinci text-xl font-normal text-ink">
                  Sanjeev Kadakol
                </h4>
                <p className="font-helvetica text-xs text-graphite">
                  AI/ML & Full Stack Developer
                </p>
                <p className="font-helvetica text-[11px] text-graphite/70">
                  BMSIT&M • Bengaluru, India
                </p>
              </div>
            </div>

            {/* Status & Social Links */}
            <div className="pt-4 border-t border-vellum mt-5 space-y-3">
              <div className="flex items-center gap-2 font-helvetica text-xs text-ink font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-ink" />
                <span>Open for Opportunities</span>
              </div>

              <div className="flex items-center gap-3 text-ink">
                <a
                  href="https://github.com/Sanjeevkadakol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-cards border border-vellum hover:border-ink transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanjeev-kadakol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-cards border border-vellum hover:border-ink transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:sanjeevpkadakol1@gmail.com"
                  className="p-1.5 rounded-cards border border-vellum hover:border-ink transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Pillars Grid (9px Bone Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-bone rounded-cards p-6 border border-vellum flex flex-col justify-between hover:border-graphite transition-colors"
            >
              <div>
                <span className="font-helvetica text-[11px] text-graphite/60 font-mono block mb-3">
                  {pillar.num}
                </span>
                <h4 className="font-davinci text-lg text-ink font-normal mb-2 leading-snug">
                  {pillar.title}
                </h4>
                <p className="font-helvetica text-xs text-graphite leading-relaxed">
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
