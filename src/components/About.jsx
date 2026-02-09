import SectionWrapper from './ui/SectionWrapper'
import { User, Target, Zap, Brain, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'
// import './About.css' // Removing old CSS to use Tailwind/SectionWrapper styles

const About = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionWrapper
      id="about"
      title="About Me"
      subtitle="GET TO KNOW ME"
      subtitleIcon={<User className="w-4 h-4" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="space-y-6 text-white/80 leading-relaxed text-lg">
          <p>
            Aspiring <span className="text-[#88734C] font-medium">AI/ML Engineer</span> with a solid academic background in computer science.
            Passionate about applying machine learning and data science principles to combat financial crime.
          </p>
          <p>
            Seeking an opportunity to leverage my skills in <span className="text-[#A9BBC8] font-medium">Python, Machine Learning, and Data Analysis</span> to contribute to the development of innovative anti-money laundering solutions.
          </p>
          <p>
            I am an organized and dependable professional, successful at managing multiple priorities with a positive attitude. I'm always willing to take on added responsibilities to meet team goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#88734C]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2 text-[#88734C]">
                <Target className="w-5 h-5" />
                <h3 className="font-medium text-white">Goal-Oriented</h3>
              </div>
              <p className="text-sm text-white/60">Focused on combating financial crime through AI/ML</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#88734C]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2 text-[#88734C]">
                <Brain className="w-5 h-5" />
                <h3 className="font-medium text-white">AI/ML Enthusiast</h3>
              </div>
              <p className="text-sm text-white/60">Passionate about ML and Data Science</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#88734C]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2 text-[#88734C]">
                <Zap className="w-5 h-5" />
                <h3 className="font-medium text-white">Problem Solver</h3>
              </div>
              <p className="text-sm text-white/60">Applying principals to real-world challenges</p>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#88734C]/50 transition-colors">
              <div className="flex items-center gap-3 mb-2 text-[#88734C]">
                <Sparkles className="w-5 h-5" />
                <h3 className="font-medium text-white">Team Player</h3>
              </div>
              <p className="text-sm text-white/60">Organized, dependable, and collaborative</p>
            </div>
          </div>
        </div>

        {/* Right Column: Visuals/Stats */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-8">
              <StatCard
                icon="https://cdn-icons-png.flaticon.com/512/1087/1087815.png"
                label="4 Projects"
                style={{ height: '100%' }}
                onClick={() => scrollToSection('projects')}
              />
              <StatCard
                icon="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                label="6 Certifications"
                onClick={() => scrollToSection('certifications')}
              />
            </div>
            <div className="space-y-4">
              <StatCard
                icon="https://cdn-icons-png.flaticon.com/512/3406/3406828.png"
                label="6 Courses"
                style={{ height: '100%' }}
                onClick={() => scrollToSection('certifications')}
              />
              <StatCard
                icon="https://cdn-icons-png.flaticon.com/512/4248/4248443.png"
                label="Skills"
                onClick={() => scrollToSection('skills')}
              />
            </div>
          </div>
          {/* Decorative blob behind images */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#88734C]/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        </div>
      </div>
    </SectionWrapper>
  )
}

function StatCard({ icon, label, style, onClick }) {
  return (
    <motion.div
      className={`bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex flex-col items-center justify-center text-center gap-3 group ${onClick ? 'cursor-pointer' : ''}`}
      whileHover={{ y: -5 }}
      whileTap={onClick ? { scale: 0.95 } : {}}
      style={style}
      onClick={onClick}
    >
      <div className="w-16 h-16 p-3 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <img src={icon} alt={label} className="w-full h-full object-contain" />
      </div>
      <span className="font-medium text-white group-hover:text-[#88734C] transition-colors">{label}</span>
    </motion.div>
  )
}

export default About

