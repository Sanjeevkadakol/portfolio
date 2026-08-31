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
      {/* 1. Classical Renaissance Painting Exhibit Panel with Floating Notched Cards */}
      <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-24 px-6 md:px-12 border-b border-vellum">
        {/* Full-Bleed Renaissance Landscape Oil Painting */}
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2808&auto=format&fit=crop')`,
          }}
        />

        {/* Warm Glaze & Dark Vignette for High Contrast */}
        <div className="absolute inset-0 bg-putty/10 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-black/45 pointer-events-none" />

        {/* Floating Exhibit Cards Container */}
        <div className="relative z-10 max-w-page mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column (7 Cols): Notched Manifesto & Academic Foundation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#000000] text-[#ffffff] p-8 sm:p-10 rounded-cards border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)'
            }}
          >
            <div className="space-y-6">
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="font-helvetica text-[10px] uppercase tracking-widest text-[#a3a3a3] font-medium">
                  01 • FOUNDATION & VISION
                </span>
                <span className="font-helvetica text-[10px] text-[#a3a3a3] font-mono">
                  BMSIT&M • 2023–2027
                </span>
              </div>

              {/* Manifesto Headline in Crisp Pure White Davinci Serif */}
              <h3 className="font-davinci text-2xl sm:text-3xl md:text-4xl text-[#ffffff] font-normal leading-[1.15] tracking-[-0.02em]">
                Combining intelligent machine learning with clean full stack engineering
              </h3>

              {/* Body Narrative in Bright High-Contrast Text */}
              <div className="space-y-3 font-helvetica text-xs sm:text-sm text-[#d4d4d4] leading-relaxed">
                <p>
                  I am an AI & Machine Learning engineer based in Bengaluru. Across internships spanning data analytics, predictive modeling, and full-stack web development, I’ve specialized in converting complex algorithms and data pipelines into production-ready software.
                </p>
                <p>
                  Experience completed across <strong className="text-[#ffffff] font-semibold">HEProAI</strong>, <strong className="text-[#ffffff] font-semibold">Bluestock Fintech</strong>, <strong className="text-[#ffffff] font-semibold">Webstack Academy</strong>, and <strong className="text-[#ffffff] font-semibold">EazyByts</strong>.
                </p>
              </div>

              {/* Stats Row in Bright White */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-white/15">
                <div>
                  <span className="font-davinci text-2xl sm:text-3xl text-[#ffffff] font-normal block">04</span>
                  <span className="font-helvetica text-[11px] text-[#a3a3a3]">Internships Done</span>
                </div>
                <div>
                  <span className="font-davinci text-2xl sm:text-3xl text-[#ffffff] font-normal block">04</span>
                  <span className="font-helvetica text-[11px] text-[#a3a3a3]">Projects Shipped</span>
                </div>
                <div>
                  <span className="font-davinci text-2xl sm:text-3xl text-[#ffffff] font-normal block">06</span>
                  <span className="font-helvetica text-[11px] text-[#a3a3a3]">Certifications</span>
                </div>
                <div>
                  <span className="font-davinci text-2xl sm:text-3xl text-[#ffffff] font-normal block">8.10</span>
                  <span className="font-helvetica text-[11px] text-[#a3a3a3]">CGPA</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Row with 'SCROLL' and Resume CTA */}
            <div className="pt-6 border-t border-white/15 mt-6 flex flex-wrap items-center justify-between gap-4">
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
          </motion.div>

          {/* Right Column (5 Cols): Notched Portrait Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 bg-[#000000] text-[#ffffff] p-8 rounded-cards border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)'
            }}
          >
            <div>
              {/* Photo Frame */}
              <div className="relative w-full h-64 sm:h-72 rounded-[9px] overflow-hidden border border-white/20 bg-[#111111] mb-5">
                <img
                  src="/sanjeev.jpg"
                  alt="Sanjeev Kadakol"
                  className="w-full h-full object-cover object-top filter contrast-105 hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Profile Details in Bright High-Contrast White */}
              <div className="space-y-1">
                <h4 className="font-davinci text-2xl font-normal text-[#ffffff]">
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
            <div className="pt-4 border-t border-white/15 mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 font-helvetica text-xs text-[#ffffff]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-medium">Open for Roles</span>
              </div>

              <div className="flex items-center gap-2 text-[#ffffff]">
                <a
                  href="https://github.com/Sanjeevkadakol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-cards border border-white/20 hover:border-white hover:bg-white/10 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanjeev-kadakol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-cards border border-white/20 hover:border-white hover:bg-white/10 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:sanjeevpkadakol1@gmail.com"
                  className="p-2 rounded-cards border border-white/20 hover:border-white hover:bg-white/10 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
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
