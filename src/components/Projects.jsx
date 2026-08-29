import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: "AI-Driven Zero-Day Attack Detection & Node Isolation",
    category: "Cybersecurity & Hybrid ML",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
    tech: ["FastAPI", "Isolation Forest", "XGBoost", "Python", "Pandas", "Network Security"],
    description: "Hybrid ML intrusion mitigation system combining Isolation Forest anomaly pre-filtering with XGBoost worm classification for real-time embedded node isolation and interactive network simulation.",
    link: "https://github.com/Sanjeevkadakol/AI-Driven-Zero-Day-Attack-Detection"
  },
  {
    title: "DocInsight AI – RAG Chatbot",
    category: "Vector Retrieval & Search",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    tech: ["Python", "FastAPI", "React", "LangChain", "FAISS", "Pinecone"],
    description: "Semantic document search chatbot leveraging Retrieval-Augmented Generation for natural-language document interaction, vector embeddings, and contextual question answering.",
    link: "https://github.com/Sanjeevkadakol/RAG-Chatbot"
  },
  {
    title: "NeighborNode – Geofenced Community Platform",
    category: "Full-Stack Security Architecture",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    tech: ["Flask", "React", "Next.js", "SQLAlchemy", "SQLite"],
    description: "Multi-tenant community management platform with GPS-based geofencing, role-based access control, and responsive web components for location-aware secure operations.",
    link: "https://github.com/Sanjeevkadakol/Neighbour_node"
  },
  {
    title: "AI-Powered Comprehension Learning System",
    category: "RAG & LLM Workflows",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    tech: ["Python", "FastAPI", "React", "LangChain", "Pinecone", "RAG"],
    description: "Adaptive educational platform using Retrieval-Augmented Generation (RAG) to generate personalized explanations from voice and text inputs with context-aware semantic retrieval.",
    link: "https://github.com/Sanjeevkadakol/AI-Powered-Comprehension-Learning-System"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="w-full py-24 md:py-32 px-6 md:px-12 bg-cream text-ink border-t border-ink/10 selection:bg-lemon selection:text-ink">
      <div className="max-w-page mx-auto">
        {/* Section Header in Prody */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
              <span className="font-suisse-book text-xs uppercase tracking-widest text-ink/60">
                03 • Featured Work
              </span>
            </div>
            <h2 className="font-prody text-4xl sm:text-5xl lg:text-[42px] font-normal leading-[1.15] text-ink">
              Selected Projects & Repositories
            </h2>
            <p className="font-suisse text-base text-ink/75 leading-relaxed">
              Open-source applications, hybrid ML pipelines, security architectures, and full-stack software systems.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-widest">
              4 Featured Works
            </span>
          </div>
        </div>

        {/* 2x2 Grid of Image-First Cards with 37px Radius */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream rounded-cards p-7 sm:p-8 border border-ink/15 flex flex-col justify-between hover:border-ink/40 transition-all duration-200 group"
            >
              <div>
                {/* Edge-to-Edge Image with 28px Inner Clip */}
                <div className="relative w-full h-56 rounded-[28px] overflow-hidden mb-6 border border-ink/10 bg-ink/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay Category Tag Bottom-Left */}
                  <div className="absolute bottom-3 left-3 bg-cream/90 backdrop-blur-sm px-3.5 py-1 rounded-full border border-ink/15">
                    <span className="font-suisse text-xs text-ink font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Title in Prody */}
                <h3 className="font-prody text-2xl sm:text-3xl font-normal text-ink mb-3 leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-suisse text-xs sm:text-sm text-ink/75 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-ink/10">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-suisse text-[11px] px-3 py-1 rounded-pills bg-cream border border-ink/15 text-ink/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action CTA Pill */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lemon-pill w-full text-xs sm:text-sm"
                >
                  <span>View Repository</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
