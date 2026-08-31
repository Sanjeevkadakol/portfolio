import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

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
      className="relative w-full pt-32 pb-24 md:pt-40 md:pb-32 px-6 md:px-12 bg-transparent text-ink flex flex-col items-center justify-center text-center selection:bg-lemon selection:text-ink"
    >
      <div className="max-w-[960px] mx-auto flex flex-col items-center">
        {/* Subtle Category Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-pills border border-ink/15 bg-cream mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
          <span className="font-suisse-book text-xs tracking-wider text-ink">
            AI/ML & Full Stack Development • Bengaluru, India
          </span>
        </motion.div>

        {/* Signature Prody Display Headline at ~131px Scale */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-prody text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-normal leading-[1.12] tracking-tight text-ink mb-6"
        >
          Sanjeev Kadakol
        </motion.h1>

        {/* Role & Degree/College Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-1.5 max-w-[720px] mb-8 font-suisse"
        >
          <p className="text-lg sm:text-[21px] text-ink font-medium tracking-tight">
            AI/ML & Full Stack Developer
          </p>
          <p className="text-sm sm:text-base text-ink/70 font-normal">
            B.E. in AIML from BMS Institute of Technology & Management
          </p>
        </motion.div>

        {/* Stat Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-suisse text-ink/80 mb-10 pb-8 border-b border-ink/10 w-full max-w-[640px]"
        >
          <div>
            <span className="text-ink/50 mr-1.5">DEGREE:</span>
            <span className="font-medium text-ink">B.E. AI & ML</span>
          </div>
          <span className="text-ink/20 hidden sm:inline">•</span>
          <div>
            <span className="text-ink/50 mr-1.5">CGPA:</span>
            <span className="font-medium text-ink">8.10 / 10.0</span>
          </div>
          <span className="text-ink/20 hidden sm:inline">•</span>
          <div>
            <span className="text-ink/50 mr-1.5">STATUS:</span>
            <span className="font-medium text-ink">Open For Roles</span>
          </div>
        </motion.div>

        {/* Action Buttons: Filled Electric Lemon & Ghost Pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center gap-4"
        >
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-lemon-pill"
          >
            Explore Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="btn-ghost-pill"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
