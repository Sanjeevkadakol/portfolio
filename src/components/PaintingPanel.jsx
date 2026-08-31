import { motion } from 'framer-motion'

const PaintingPanel = () => {
  return (
    <section
      id="exhibit"
      className="relative w-full min-h-[85vh] md:min-h-[92vh] flex items-center justify-center overflow-hidden py-24 px-6 border-y border-vellum selection:bg-paper selection:text-ink"
    >
      {/* Full-Bleed Classical Renaissance Landscape Oil Painting */}
      <div 
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2808&auto=format&fit=crop')`,
        }}
      />

      {/* Subtle Warm Glaze Overlay */}
      <div className="absolute inset-0 bg-putty/25 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      {/* Floating Notched Product Card matching Structured Style Reference */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 w-full max-w-[420px] bg-[#000000] text-[#ffffff] p-8 sm:p-9 rounded-[9px] border border-[#333333] shadow-2xl flex flex-col justify-between min-h-[380px]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%)'
        }}
      >
        {/* Top Headline in Davinci Serif */}
        <div className="space-y-4 pt-2">
          <h3 className="font-davinci text-2xl sm:text-3xl text-paper font-normal leading-[1.15] tracking-[-0.3px]">
            Combining intelligent machine learning with clean full stack engineering
          </h3>
          
          <p className="font-helvetica text-xs text-ash leading-relaxed">
            Specializing in RAG architectures, predictive machine learning pipelines, and responsive web applications that convert complex algorithms into production-ready software.
          </p>
        </div>

        {/* Bottom Notched Card Footer with 'SCROLL' and dashes */}
        <div className="pt-6 border-t border-[#222222] mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-helvetica text-[10px] uppercase tracking-[0.25em] text-paper font-medium">
              SCROLL
            </span>
            <span className="text-ash text-xs tracking-widest">— — —</span>
          </div>
          <span className="font-helvetica text-[10px] text-ash uppercase tracking-wider">
            BMSIT&M • 2023–2027
          </span>
        </div>
      </motion.div>
    </section>
  )
}

export default PaintingPanel
