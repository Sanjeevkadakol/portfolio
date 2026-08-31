import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const certifications = [
  {
    title: "Foundations of Prompt Engineering",
    issuer: "AWS Training & Certification",
    category: "Generative AI & LLMs",
    date: "July 2026",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
    description: "Official completion certificate issued by AWS Training & Certification covering prompt design, contextual grounding, and LLM optimization.",
    link: null
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM Developer Skills Network / Cognitive Class",
    category: "Databases & Data Engineering",
    date: "July 2026",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=400&auto=format&fit=crop",
    description: "Verified course DB0101EN by IBM Skills Network covering relational schema design, SQL querying, constraints, and database manipulation.",
    link: "https://courses.cognitiveclass.ai/certificates/b190c3c7e77a43788b5d61c72483548f"
  },
  {
    title: "Machine Learning & Data Science with AWS",
    issuer: "AWS Cloud ML",
    category: "Cloud Native ML Pipelines",
    date: "2026",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
    description: "Cloud-native machine learning model deployment, SageMaker pipelines, S3 storage, and scalable data science workflows on AWS.",
    link: null
  },
  {
    title: "Python Fundamentals",
    issuer: "Full Stack Development Core",
    category: "Algorithms & Modular Software",
    date: "2025",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=400&auto=format&fit=crop",
    description: "Mastery of Python programming, core data structures, algorithmic problem solving, and object-oriented architecture.",
    link: null
  },
  {
    title: "Generative AI Models and Tools",
    issuer: "Applied AI",
    category: "LLM Workflows & RAG",
    date: "2026",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=400&auto=format&fit=crop",
    description: "Specialized expertise in Large Language Models (LLMs), LangChain orchestration, vector search, and agentic workflows.",
    link: null
  },
  {
    title: "Cyber Security and Data Analytics",
    issuer: "Security Architecture",
    category: "Threat Analysis & Data Protection",
    date: "2025",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop",
    description: "Advanced training in threat detection architectures, data-driven security analysis, risk assessment, and secure protocols.",
    link: null
  }
]

const Certifications = () => {
  return (
    <section id="certifications" className="w-full py-24 md:py-32 px-6 md:px-12 bg-transparent text-ink border-t border-ink/10 selection:bg-lemon selection:text-ink">
      <div className="max-w-page mx-auto">
        {/* Section Header in Prody */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
              <span className="font-suisse-book text-xs uppercase tracking-widest text-ink/60">
                05 • Accreditations
              </span>
            </div>
            <h2 className="font-prody text-4xl sm:text-5xl lg:text-[42px] font-normal leading-[1.15] text-ink">
              Certifications & Qualifications
            </h2>
            <p className="font-suisse text-base text-ink/75 leading-relaxed">
              Verified credentials from AWS, IBM Developer Skills Network, and specialized full stack development programs.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-widest">
              6 Verified Credentials
            </span>
          </div>
        </div>

        {/* 6 Cards Grid (3 Columns) with 37px Radius */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-cream rounded-cards p-8 border border-ink/15 flex flex-col justify-between hover:border-ink/40 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-suisse-book text-xs text-ink/50">
                    Credential 0{index + 1}
                  </span>
                  <span className="font-suisse-book text-xs text-ink/70 px-2.5 py-0.5 rounded-full border border-ink/15 bg-cream">
                    {cert.date}
                  </span>
                </div>

                <span className="font-suisse-book text-[11px] text-ink/60 uppercase tracking-wider block mb-1">
                  {cert.issuer}
                </span>
                <h3 className="font-prody text-2xl font-normal text-ink mb-3 leading-snug">
                  {cert.title}
                </h3>
                <p className="font-suisse text-xs sm:text-sm text-ink/70 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div className="border-t border-ink/10 pt-4 flex items-center justify-between">
                <span className="font-suisse text-xs font-medium text-ink">
                  Verified Credential
                </span>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-suisse-book text-xs text-ink hover:underline"
                  >
                    <span>Verify Link</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
