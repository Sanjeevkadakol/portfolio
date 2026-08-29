import { motion } from 'framer-motion'

const PaintingPanel = () => {
  return (
    <section
      id="manifesto"
      className="relative w-full min-h-[80vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden bg-ink py-20 px-6"
    >
      {/* Full-Bleed Atmospheric Renaissance Oil Painting Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-65 pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=2808&auto=format&fit=crop')`,
        }}
      />

      {/* Dark Vignette Overlay for Crisp Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90 pointer-events-none" />

      {/* Solid Opaque Floating Notched Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 25 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        className="relative z-10 w-full max-w-[480px] bg-[#000000] text-white p-8 sm:p-10 rounded-cards border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between"
      >
        {/* Top Card Meta Header */}
        <div className="flex items-center justify-between border-b border-white/20 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="font-grotesk text-xs uppercase tracking-widest text-white font-medium">
              Core Discipline
            </span>
          </div>
          <span className="font-mono text-xs text-white/70 uppercase tracking-widest">
            01 / EXHIBIT
          </span>
        </div>

        {/* Center Content with High Contrast Typography */}
        <div className="space-y-4 mb-8">
          <h3 className="font-davinci text-2xl sm:text-4xl font-medium tracking-tight text-white leading-tight">
            Artificial Intelligence & Machine Learning
          </h3>
          
          <p className="font-grotesk text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
            Bridging algorithmic research with production software. Designing RAG pipelines, LLM-orchestrated workflows, and predictive analytics that solve high-stakes challenges.
          </p>

          {/* Clean Crisp Tech Badges */}
          <div className="pt-3 flex flex-wrap gap-2">
            <span className="text-[11px] font-grotesk uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full border border-white/25 text-white font-medium">
              LangChain & RAG
            </span>
            <span className="text-[11px] font-grotesk uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full border border-white/25 text-white font-medium">
              FastAPI & React
            </span>
            <span className="text-[11px] font-grotesk uppercase tracking-wider px-3 py-1 bg-white/10 rounded-full border border-white/25 text-white font-medium">
              Pinecone & FAISS
            </span>
          </div>
        </div>

        {/* Bottom Card Footer */}
        <div className="border-t border-white/20 pt-4 flex items-center justify-between">
          <span className="font-grotesk text-[10px] uppercase tracking-[0.25em] text-white font-semibold">
            SCROLL DOWN ↓
          </span>
          <span className="font-grotesk text-[10px] uppercase tracking-widest text-white/70">
            BMSIT&M • 2023–2027
          </span>
        </div>
      </motion.div>
    </section>
  )
}

export default PaintingPanel
