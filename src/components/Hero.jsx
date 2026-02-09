import { ArrowRight, MousePointer2 } from 'lucide-react';
import { motion } from "framer-motion";
import { LampContainer } from './ui/lamp';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen bg-black overflow-hidden selection:bg-[#88734C] selection:text-white">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center space-y-6 md:space-y-8 text-center"
        >
          <div className="inline-block">
            <span className="py-1 px-3 border border-[#88734C]/30 rounded-full text-xs font-mono text-[#88734C] tracking-widest uppercase bg-[#88734C]/10 backdrop-blur-sm">
              Portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-br from-white to-[#E5D5B8] py-4 bg-clip-text text-transparent tracking-tighter leading-none">
            Sanjeev<br />Kadakol
          </h1>

          <div className="text-xl md:text-2xl font-light tracking-widest text-white/80 uppercase">
            AI/ML Engineer
          </div>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-white/60 font-light leading-relaxed px-4">
            Aspiring AI/ML Engineer with a solid academic background in computer science.
            Passionate about applying machine learning and data science principles to combat financial crime.
          </p>

          <div className="pt-8 flex justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#88734C] text-white rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">View My Work</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent text-white rounded-full font-bold tracking-wide overflow-hidden transition-transform hover:scale-105 active:scale-95 backdrop-blur-sm border border-white/20 hover:bg-white/10"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>
        </motion.div>
      </LampContainer>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-pulse pointer-events-none z-20">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <MousePointer2 size={16} />
      </div>
    </section>
  );
};

export default Hero;
