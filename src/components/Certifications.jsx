import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const certifications = [
  {
    title: "Foundations of Prompt Engineering",
    issuer: "AWS Training & Certification",
    category: "Generative AI & LLMs",
    date: "July 2026",
    description: "Official completion certificate issued by AWS Training & Certification covering prompt design, contextual grounding, and LLM optimization.",
    link: null
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM Developer Skills Network / Cognitive Class",
    category: "Databases & Data Engineering",
    date: "July 2026",
    description: "Verified course DB0101EN by IBM Skills Network covering relational schema design, SQL querying, constraints, and database manipulation.",
    link: "https://courses.cognitiveclass.ai/certificates/b190c3c7e77a43788b5d61c72483548f"
  },
  {
    title: "Machine Learning & Data Science with AWS",
    issuer: "AWS Cloud ML",
    category: "Cloud Native ML Pipelines",
    date: "2026",
    description: "Cloud-native machine learning model deployment, SageMaker pipelines, S3 storage, and scalable data science workflows on AWS.",
    link: null
  },
  {
    title: "Python Fundamentals",
    issuer: "Full Stack Development Core",
    category: "Algorithms & Modular Software",
    date: "2025",
    description: "Mastery of Python programming, core data structures, algorithmic problem solving, and object-oriented architecture.",
    link: null
  },
  {
    title: "Generative AI Models and Tools",
    issuer: "Applied AI",
    category: "LLM Workflows & RAG",
    date: "2026",
    description: "Specialized expertise in Large Language Models (LLMs), LangChain orchestration, vector search, and agentic workflows.",
    link: null
  },
  {
    title: "Cyber Security and Data Analytics",
    issuer: "Security Architecture",
    category: "Threat Analysis & Data Protection",
    date: "2025",
    description: "Advanced training in threat detection architectures, data-driven security analysis, risk assessment, and secure protocols.",
    link: null
  }
]

const Certifications = () => {
  return (
    <section id="certifications" className="w-full py-20 md:py-28 px-6 md:px-12 bg-putty text-ink border-b border-vellum selection:bg-ink selection:text-paper">
      <div className="max-w-page mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="font-helvetica text-[11px] uppercase tracking-widest text-graphite block font-medium">
              06 • Accreditations
            </span>
            <h2 className="font-davinci text-3xl sm:text-4xl md:text-[43px] font-normal leading-[1.1] tracking-[-0.215px] text-ink">
              Certifications & Qualifications
            </h2>
            <p className="font-helvetica text-sm text-graphite leading-relaxed">
              Verified credentials from AWS, IBM Developer Skills Network, and specialized engineering programs.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-helvetica text-xs text-graphite uppercase tracking-widest font-medium">
              06 Credentials
            </span>
          </div>
        </div>

        {/* 3x2 Grid of 9px Bone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-bone rounded-cards p-6 border border-vellum flex flex-col justify-between hover:border-graphite transition-all group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-vellum mb-4">
                  <span className="font-helvetica text-[11px] uppercase tracking-wider text-ink font-medium">
                    {cert.issuer}
                  </span>
                  <span className="font-helvetica text-[11px] text-graphite font-medium">
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-davinci text-lg sm:text-xl text-ink font-normal mb-2 leading-snug">
                  {cert.title}
                </h3>

                <p className="font-helvetica text-xs text-graphite leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-vellum flex items-center justify-between">
                <span className="font-helvetica text-[11px] px-2.5 py-0.5 rounded-cards border border-vellum bg-putty/30 text-graphite font-medium">
                  {cert.category}
                </span>

                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-helvetica text-xs text-ink hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>Verify</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="font-helvetica text-[11px] text-graphite/70 font-medium">
                    Verified
                  </span>
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
