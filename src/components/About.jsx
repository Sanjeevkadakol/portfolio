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
    <section id="about" className="w-full bg-putty text-ink border-b border-vellum selection:bg-paper selection:text-ink">
      {/* 1. Classical Renaissance Painting Exhibit Panel with Single Unified Master Card */}
      <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 md:px-12 border-b border-vellum">
        {/* Full-Bleed Renaissance Landscape Oil Painting */}
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2808&auto=format&fit=crop')`,
          }}
        />

        {/* Warm Glaze & Dark Vignette */}
        <div className="absolute inset-0 bg-putty/10 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

        {/* Single Unified Master Notched Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-5xl w-full bg-[#000000] text-[#ffffff] p-6 sm:p-9 md:p-10 rounded-cards border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)]"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)'
          }}
        >
          {/* Card Top Meta Header */}
          <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
            <span className="font-helvetica text-[10px] uppercase tracking-widest text-[#a3a3a3] font-medium">
              01 • FOUNDATION & PROFILE
            </span>
            <span className="font-helvetica text-[10px] text-[#a3a3a3] font-mono">
              BMSIT&M • 2023–2027
            </span>
          </div>

          {/* Master 2-Column Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column (7 Cols): Manifesto, Narrative, Stats, & Resume CTA */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="font-davinci text-2xl sm:text-3xl md:text-[34px] text-[#ffffff] font-normal leading-[1.18] tracking-[-0.02em]">
                  Combining intelligent machine learning with clean full stack engineering
                </h3>

                <div className="space-y-2.5 font-helvetica text-xs sm:text-[13px] text-[#d4d4d4] leading-relaxed">
                  <p>
                    I am an AI & Machine Learning engineer based in Bengaluru. Across internships spanning data analytics, predictive modeling, and full-stack web development, I’ve specialized in converting complex algorithms and data pipelines into production-ready software.
                  </p>
                  <p>
                    Experience completed across <strong className="text-[#ffffff] font-semibold">HEProAI</strong>, <strong className="text-[#ffffff] font-semibold">Bluestock Fintech</strong>, <strong className="text-[#ffffff] font-semibold">Webstack Academy</strong>, and <strong className="text-[#ffffff] font-semibold">EazyByts</strong>.
                  </p>
                </div>

                {/* Inline Stats Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/15">
                  <div>
                    <span className="font-davinci text-2xl text-[#ffffff] font-normal block">04</span>
                    <span className="font-helvetica text-[10px] text-[#a3a3a3]">Internships Done</span>
                  </div>
                  <div>
                    <span className="font-davinci text-2xl text-[#ffffff] font-normal block">04</span>
                    <span className="font-helvetica text-[10px] text-[#a3a3a3]">Projects Shipped</span>
                  </div>
                  <div>
                    <span className="font-davinci text-2xl text-[#ffffff] font-normal block">06</span>
                    <span className="font-helvetica text-[10px] text-[#a3a3a3]">Certifications</span>
                  </div>
                  <div>
                    <span className="font-davinci text-2xl text-[#ffffff] font-normal block">8.10</span>
                    <span className="font-helvetica text-[10px] text-[#a3a3a3]">CGPA</span>
                  </div>
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-helvetica text-[10px] uppercase tracking-[0.25em] text-[#ffffff] font-semibold">
                    SCROLL
                  </span>
                  <span className="text-[#888888] text-xs tracking-widest">— — —</span>
                </div>

                <a
                  href="/resume.pdf"
                  download="Sanjeev_Kadakol_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-white font-medium"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Column (5 Cols): Framed Photo & Verified Identity */}
            <div className="lg:col-span-5 bg-[#0d0d0d] p-5 sm:p-6 rounded-cards border border-white/15 flex flex-col justify-between">
              <div>
                {/* Framed Photo */}
                <div className="relative w-full h-56 sm:h-64 rounded-[9px] overflow-hidden border border-white/15 bg-[#161616] mb-4">
                  <img
                    src="/sanjeev.jpg"
                    alt="Sanjeev Kadakol"
                    className="w-full h-full object-cover object-top filter contrast-105 hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Profile Details */}
                <div className="space-y-1">
                  <h4 className="font-davinci text-xl sm:text-2xl font-normal text-[#ffffff]">
                    Sanjeev Kadakol
                  </h4>
                  <p className="font-helvetica text-xs text-[#d4d4d4] font-medium">
                    AI/ML & Full Stack Developer
                  </p>
                  <p className="font-helvetica text-[11px] text-[#a3a3a3]">
                    BMSIT&M • Bengaluru, India
                  </p>
                </div>
              </div>

              {/* Status & Social Networks */}
              <div className="pt-4 border-t border-white/15 mt-5 flex items-center justify-between">
                <div className="flex items-center gap-2 font-helvetica text-xs text-[#ffffff]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium">Open for Roles</span>
                </div>

                <div className="flex items-center gap-2 text-[#ffffff]">
                  <a
                    href="https://github.com/Sanjeevkadakol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-cards border border-white/20 hover:border-white hover:bg-white/10 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sanjeev-kadakol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-cards border border-white/20 hover:border-white hover:bg-white/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="mailto:sanjeevpkadakol1@gmail.com"
                    className="p-1.5 rounded-cards border border-white/20 hover:border-white hover:bg-white/10 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2. 4 Foundation Pillars Grid on Putty Canvas */}
      <div className="py-20 md:py-24 px-6 md:px-12 max-w-page mx-auto">
        <div className="mb-10">
          <span className="font-helvetica text-[11px] uppercase tracking-widest text-graphite block mb-2 font-medium">
            CORE CAPABILITIES
          </span>
          <h4 className="font-davinci text-2xl sm:text-3xl text-ink font-normal">
            Engineering Pillars & Focus Areas
          </h4>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-bone rounded-cards p-6 border border-vellum flex flex-col justify-between hover:border-graphite transition-colors shadow-sm"
            >
              <div>
                <span className="font-helvetica text-[11px] text-graphite/60 font-mono block mb-3">
                  {pillar.num}
                </span>
                <h5 className="font-davinci text-lg text-ink font-normal mb-2 leading-snug">
                  {pillar.title}
                </h5>
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
