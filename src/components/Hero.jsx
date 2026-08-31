import { motion } from 'framer-motion'
import { Download } from 'lucide-react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="relative w-full min-h-[80vh] pt-32 pb-24 md:pt-44 md:pb-32 px-6 md:px-12 bg-putty text-ink flex flex-col items-center justify-center text-center selection:bg-ink selection:text-paper border-b border-vellum"
    >
      <div className="max-w-page mx-auto w-full flex flex-col items-center text-center my-auto">
        {/* Top Minimal Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-helvetica text-[11px] sm:text-xs tracking-widest uppercase text-graphite mb-5"
        >
          Engineering Portfolio • Bengaluru, India
        </motion.div>

        {/* Name Headline in Davinci Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-davinci text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.1] tracking-[-0.02em] text-ink mb-4"
        >
          Sanjeev Kadakol
        </motion.h1>

        {/* Role & Degree */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-1.5 mb-8 max-w-xl"
        >
          <p className="font-davinci text-xl sm:text-2xl text-ink font-normal">
            AI/ML & Full Stack Developer
          </p>
          <p className="font-helvetica text-xs sm:text-sm text-graphite">
            B.E. in AIML from BMS Institute of Technology & Management
          </p>
        </motion.div>

        {/* Inline Stat Pairs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 font-helvetica text-xs sm:text-sm font-medium text-ink mb-9"
        >
          <div>
            <span className="text-graphite mr-1.5 font-normal uppercase text-[10px]">DEGREE:</span>
            <span>B.E. AI & ML</span>
          </div>
          <span className="text-vellum hidden sm:inline">|</span>
          <div>
            <span className="text-graphite mr-1.5 font-normal uppercase text-[10px]">CGPA:</span>
            <span>8.10 / 10.0</span>
          </div>
          <span className="text-vellum hidden sm:inline">|</span>
          <div>
            <span className="text-graphite mr-1.5 font-normal uppercase text-[10px]">STATUS:</span>
            <span>Open for Roles</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-pill-black"
          >
            Explore Projects
          </button>
          <a
            href="/resume.pdf"
            download="Sanjeev_Kadakol_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="font-helvetica text-xs text-ink hover:underline flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
