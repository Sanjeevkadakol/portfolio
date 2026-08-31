import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'

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
      className="relative w-full min-h-[90vh] pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 bg-putty text-ink flex flex-col justify-between overflow-hidden selection:bg-ink selection:text-paper border-b border-vellum"
    >
      <div className="max-w-page mx-auto w-full flex flex-col items-center text-center my-auto">
        {/* Top Minimal Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-helvetica text-[11px] sm:text-xs tracking-widest uppercase text-graphite mb-6"
        >
          Engineering Portfolio • Bengaluru, India
        </motion.div>

        {/* Display Subheading in Davinci 43px/52px */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-davinci text-3xl sm:text-5xl md:text-[52px] font-normal leading-[1.08] tracking-[-0.47px] text-ink mb-4 max-w-3xl"
        >
          AI/ML & Full Stack Development
        </motion.h2>

        {/* Subtitle / Academic Line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-helvetica text-sm sm:text-base text-graphite mb-8 max-w-xl leading-relaxed"
        >
          B.E. in AIML from BMS Institute of Technology & Management
        </motion.p>

        {/* Inline Stat Pairs in Structured Style (TVL / APY layout) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 font-helvetica text-xs sm:text-sm font-medium text-ink mb-8"
        >
          <div>
            <span className="text-graphite mr-2 font-normal uppercase text-[11px]">DEGREE:</span>
            <span>B.E. AI & ML</span>
          </div>
          <span className="text-vellum hidden sm:inline">|</span>
          <div>
            <span className="text-graphite mr-2 font-normal uppercase text-[11px]">CGPA:</span>
            <span>8.10 / 10.0</span>
          </div>
          <span className="text-vellum hidden sm:inline">|</span>
          <div>
            <span className="text-graphite mr-2 font-normal uppercase text-[11px]">STATUS:</span>
            <span>Open for Roles</span>
          </div>
        </motion.div>

        {/* Action Button & Ghost Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-6"
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

      {/* Signature Monumental 374px Davinci Hero Wordmark */}
      <div className="w-full overflow-hidden text-center select-none pt-12 md:pt-16">
        <motion.h1
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-davinci text-[58px] sm:text-[110px] md:text-[160px] lg:text-[220px] xl:text-[280px] font-normal leading-[0.84] tracking-[-3.37px] text-ink whitespace-nowrap opacity-95"
        >
          SANJEEV KADAKOL
        </motion.h1>
      </div>
    </section>
  )
}

export default Hero
