import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const experiences = [
  {
    company: "Bluestock Fintech",
    role: "Data Analyst Intern",
    period: "Apr 2026 – May 2026",
    location: "Bengaluru, IN • Remote",
    tag: "Fintech & Data Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    bullets: [
      "Analyzed financial datasets using Python, SQL, Pandas, and Excel to generate business insights and automate reporting workflows.",
      "Created interactive reports and visualizations to identify trends, improve decision-making, and optimize business performance."
    ],
    skills: ["Python", "SQL", "Pandas", "Excel", "Data Visualization"]
  },
  {
    company: "HEProAI",
    role: "AI & Machine Learning Intern",
    period: "Feb 2026 – Mar 2026",
    location: "Bengaluru, IN • Remote",
    tag: "AI Modeling & Scoring",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop",
    bullets: [
      "Developed AI-driven student analytics and recommendation models using Python, Pandas, NumPy, and Scikit-learn to support academic performance and personalized mentoring.",
      "Built predictive scoring frameworks for academic performance, wellness, productivity, and career readiness using data-driven machine learning techniques."
    ],
    skills: ["Python", "Scikit-learn", "NumPy", "Pandas", "Predictive Analytics"]
  },
  {
    company: "Webstack Academy (WSA)",
    role: "Full stack Web Dev Intern",
    period: "Mar 2026 · 1 mo",
    location: "Bengaluru, Karnataka, India • Remote",
    tag: "Full-Stack Web Engineering",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    bullets: [
      "Engineered responsive full-stack web applications and interactive client interfaces using modern frontend and backend architectures.",
      "Implemented RESTful API endpoints, component-driven layouts, and modular web features with robust performance and clean code standards."
    ],
    skills: ["Full-Stack Development", "Frontend Dev", "Backend APIs", "Web Technologies"]
  },
  {
    company: "EazyByts.com",
    role: "Web Developer Intern",
    period: "Jan 2026 · 1 mo",
    location: "Bengaluru, Karnataka, India • Remote",
    tag: "UI Architecture & Development",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    bullets: [
      "Designed and implemented clean, responsive user interfaces focusing on user experience, cross-device responsiveness, and accessibility.",
      "Collaborated on frontend development workflows, component styling, and performance optimization for interactive web modules."
    ],
    skills: ["User Interface Design", "Web Development", "Responsive UI", "JavaScript"]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="w-full py-24 md:py-32 px-6 md:px-12 bg-transparent text-ink border-t border-ink/10 selection:bg-lemon selection:text-ink">
      <div className="max-w-page mx-auto">
        {/* Section Header in Prody */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
              <span className="font-suisse-book text-xs uppercase tracking-widest text-ink/60">
                02 • Experience & Trajectory
              </span>
            </div>
            <h2 className="font-prody text-4xl sm:text-5xl lg:text-[42px] font-normal leading-[1.15] text-ink">
              Work Experience & Internships
            </h2>
            <p className="font-suisse text-base text-ink/75 leading-relaxed">
              Real-world engineering contributions across fintech analytics, predictive AI systems, and full-stack software development.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-widest">
              4 Roles Completed
            </span>
          </div>
        </div>

        {/* 4 Cards Grid with 37px Radius */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-cream rounded-cards p-8 sm:p-[37px] border border-ink/15 flex flex-col justify-between hover:border-ink/40 transition-all duration-200 group"
            >
              <div>
                {/* Card Top Header */}
                <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-6">
                  <div>
                    <h4 className="font-suisse text-base font-semibold text-ink">
                      {exp.company}
                    </h4>
                    <span className="font-suisse-book text-xs text-ink/50">
                      {exp.location}
                    </span>
                  </div>
                  <span className="font-suisse-book text-xs text-ink/80 px-3 py-1 bg-cream rounded-full border border-ink/20">
                    {exp.period}
                  </span>
                </div>

                {/* 37px Clipped Image Banner */}
                <div className="w-full h-40 rounded-[24px] overflow-hidden mb-6 border border-ink/10 bg-ink/5">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Role Title in Prody/Suisse */}
                <div className="mb-4">
                  <span className="font-suisse-book text-xs uppercase tracking-wider text-ink/60 block mb-1">
                    {exp.tag}
                  </span>
                  <h3 className="font-prody text-2xl sm:text-3xl text-ink font-normal leading-tight">
                    {exp.role}
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 font-suisse text-xs sm:text-sm text-ink/75 leading-relaxed mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-ink/30 font-mono mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-ink/10 flex flex-wrap gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-suisse text-[11px] px-3 py-1 rounded-pills bg-cream border border-ink/15 text-ink/85"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
