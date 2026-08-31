import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "AI-Driven Zero-Day Attack Detection & Node Isolation",
    category: "Cybersecurity & Hybrid ML",
    description: "Hybrid machine learning pipeline combining Isolation Forest for anomaly pre-filtering and XGBoost for precise worm classification. Includes FastAPI real-time inference and automatic node isolation.",
    tags: ["Isolation Forest", "XGBoost", "FastAPI", "Python", "Incident Mitigation"],
    github: "https://github.com/Sanjeevkadakol/AI-Driven-Zero-Day-Attack-Detection",
    demo: "https://github.com/Sanjeevkadakol/AI-Driven-Zero-Day-Attack-Detection",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "AI-Powered Comprehension Learning System",
    category: "Generative AI & Adaptive Learning",
    description: "Adaptive learning platform leveraging Retrieval-Augmented Generation (RAG) to generate personalized explanations from voice and text student responses with semantic retrieval workflows.",
    tags: ["LangChain", "FastAPI", "React", "Pinecone", "RAG", "Python"],
    github: "https://github.com/Sanjeevkadakol/AI-Powered-Comprehension-Learning-System",
    demo: "https://github.com/Sanjeevkadakol/AI-Powered-Comprehension-Learning-System",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "DocInsight AI – RAG Chatbot",
    category: "Retrieval-Augmented Generation",
    description: "Intelligent PDF and technical documentation chatbot utilizing LangChain, semantic vector search, and FAISS indexing for accurate contextual querying and zero-hallucination answers.",
    tags: ["LangChain", "OpenAI", "FAISS", "Python", "FastAPI", "React"],
    github: "https://github.com/Sanjeevkadakol/RAG-Chatbot",
    demo: "https://github.com/Sanjeevkadakol/RAG-Chatbot",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "NeighborNode – Geofenced Community Platform",
    category: "Full-Stack Web Engineering",
    description: "Multi-tenant community management platform featuring GPS-based geofencing, role-based access control, incident dispatch, and responsive Next.js frontend with Flask & SQLAlchemy APIs.",
    tags: ["Flask", "React", "Next.js", "SQLAlchemy", "SQLite", "Geofencing"],
    github: "https://github.com/Sanjeevkadakol/Neighbour_node",
    demo: "https://github.com/Sanjeevkadakol/Neighbour_node",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 md:py-28 px-6 md:px-12 bg-putty text-ink border-b border-vellum selection:bg-ink selection:text-paper">
      <div className="max-w-page mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="font-helvetica text-[11px] uppercase tracking-widest text-graphite block font-medium">
              03 • Selected Repositories
            </span>
            <h2 className="font-davinci text-3xl sm:text-4xl md:text-[43px] font-normal leading-[1.1] tracking-[-0.215px] text-ink">
              Featured Engineering Projects
            </h2>
            <p className="font-helvetica text-sm text-graphite leading-relaxed">
              Open-source applications spanning hybrid machine learning, RAG pipelines, and full-stack software systems.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <a
              href="https://github.com/Sanjeevkadakol"
              target="_blank"
              rel="noopener noreferrer"
              className="font-helvetica text-xs text-ink hover:underline flex items-center gap-1 font-medium"
            >
              <span>View All Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* 2x2 Grid of 9px Bone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-bone rounded-cards overflow-hidden border border-vellum flex flex-col justify-between hover:border-graphite transition-all group shadow-sm"
            >
              <div>
                {/* Clean Project Visual without blurry overlay badges */}
                <div className="relative w-full h-56 sm:h-64 overflow-hidden border-b border-vellum bg-ash/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-7">
                  {/* Clean Category Subtitle */}
                  <span className="font-helvetica text-[11px] uppercase tracking-wider text-graphite block mb-2 font-medium">
                    {project.category}
                  </span>

                  <h3 className="font-davinci text-xl sm:text-2xl text-ink font-normal mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="font-helvetica text-xs sm:text-sm text-graphite leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-helvetica text-[11px] px-2.5 py-0.5 rounded-cards border border-vellum bg-putty/40 text-graphite font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button Footer */}
              <div className="p-7 pt-0 flex items-center justify-between border-t border-vellum mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-black"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <span className="font-helvetica text-xs text-graphite">
                  Open Source
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
