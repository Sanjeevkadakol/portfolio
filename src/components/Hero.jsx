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
      className="relative w-full min-h-[80vh] pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 bg-putty text-ink flex flex-col items-center justify-center text-center selection:bg-ink selection:text-paper border-b border-vellum"
    >
      <div className="max-w-page mx-auto w-full flex flex-col items-center text-center my-auto">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-helvetica text-[11px] tracking-widest uppercase text-graphite mb-6"
        >
          Engineering Portfolio • Bengaluru, India
        </motion.div>

        {/* Main Line: Sanjeev Kadakol */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-davinci text-5xl sm:text-7xl md:text-8xl font-normal leading-[1.05] tracking-[-0.03em] text-ink mb-4"
        >
          Sanjeev Kadakol
        </motion.h1>

        {/* Subtitle Lines: Role & Degree Specification */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2 mb-8 max-w-2xl"
        >
          <p className="font-helvetica text-lg sm:text-xl md:text-2xl text-ink font-medium tracking-tight">
            AI/ML & Full Stack Developer
          </p>
          <p className="font-helvetica text-sm sm:text-base text-graphite font-normal">
            B.E. in AIML from BMS Institute of Technology & Management
          </p>
        </motion.div>

        {/* Inline Stat Pairs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 font-helvetica text-xs sm:text-sm font-medium text-ink mb-10 pb-6 border-b border-vellum/60 w-full max-w-md"
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
