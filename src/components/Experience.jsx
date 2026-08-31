import { motion } from 'framer-motion'
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react'

const experiences = [
  {
    company: "HEProAI",
    role: "AI & Machine Learning Intern",
    period: "Feb 2026 – Mar 2026",
    location: "Bengaluru, Karnataka, India",
    tag: "AI Modeling & Analytics",
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop",
    bullets: [
      "Engineered AI-driven student analytics and recommendation algorithms using Python, Pandas, NumPy, and Scikit-learn.",
      "Formulated predictive scoring frameworks for academic performance, wellness index, productivity, and career readiness."
    ],
    skills: ["Python", "Scikit-learn", "Pandas", "Predictive Analytics"]
  },
  {
    company: "Bluestock Fintech",
    role: "Data Analyst Intern",
    period: "Apr 2026 – May 2026",
    location: "Bengaluru, Karnataka, India • Remote",
    tag: "Financial Analytics & BI",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=600&auto=format&fit=crop",
    bullets: [
      "Evaluated financial market datasets using Python, SQL, and Pandas to automate analytical workflows and generate business intelligence.",
      "Constructed interactive data reports and visual dashboards to detect trends, enhance risk management, and optimize strategies."
    ],
    skills: ["Python", "SQL", "Pandas", "Financial Analytics"]
  },
  {
    company: "Webstack Academy (WSA)",
    role: "Full stack Web Dev Intern",
    period: "Mar 2026 · 1 mo",
    location: "Bengaluru, Karnataka, India • Remote",
    tag: "Full Stack Development",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    bullets: [
      "Engineered responsive full stack applications and interactive client interfaces using modern frontend and backend architectures.",
      "Implemented RESTful API endpoints, component-driven layouts, and modular web features with robust performance standards."
    ],
    skills: ["Full Stack Development", "React", "APIs", "Web Technologies"]
  },
  {
    company: "EazyByts.com",
    role: "Web Developer Intern",
    period: "Jan 2026 · 1 mo",
    location: "Bengaluru, Karnataka, India • Remote",
    tag: "UI Architecture & Dev",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
    bullets: [
      "Designed and implemented clean, responsive user interfaces focusing on user experience, cross-device compatibility, and accessibility.",
      "Collaborated on frontend development workflows, component styling, and performance optimization for interactive web modules."
    ],
    skills: ["UI Architecture", "Web Development", "JavaScript", "HTML/CSS"]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 md:py-28 px-6 md:px-12 bg-ink text-paper selection:bg-paper selection:text-ink">
      <div className="max-w-page mx-auto">
        {/* Section Header in Davinci Display 43px/52px */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="font-helvetica text-[11px] uppercase tracking-widest text-ash block">
              02 • Trajectory & Industry Roles
            </span>
            <h2 className="font-davinci text-3xl sm:text-4xl md:text-[43px] font-normal leading-[1.1] tracking-[-0.215px] text-paper">
              Work Experience & Internships
            </h2>
            <p className="font-helvetica text-sm text-ash leading-relaxed">
              4 specialized internships across machine learning engineering, data analytics, and full-stack software development.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-helvetica text-xs text-ash uppercase tracking-widest">
              04 Positions
            </span>
          </div>
        </div>

        {/* 2x2 Grid of 9px Dark Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#111111] rounded-cards p-7 border border-[#262626] flex flex-col justify-between hover:border-[#404040] transition-colors"
            >
              <div>
                {/* Header Meta */}
                <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-5">
                  <span className="font-helvetica text-[10px] uppercase tracking-wider text-ash font-mono">
                    INDEX // 0{idx + 1}
                  </span>
                  <span className="font-helvetica text-[11px] px-2.5 py-0.5 rounded-full border border-[#333333] bg-[#1a1a1a] text-ash">
                    {exp.tag}
                  </span>
                </div>

                <h3 className="font-davinci text-xl sm:text-2xl text-paper font-normal mb-1">
                  {exp.role}
                </h3>
                <h4 className="font-helvetica text-sm text-paper/85 font-medium mb-3">
                  {exp.company}
                </h4>

                <div className="flex flex-wrap items-center gap-4 text-xs font-helvetica text-ash mb-5">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="font-helvetica text-xs text-ash leading-relaxed flex items-start gap-2">
                      <span className="text-paper/40 mt-0.5">—</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-[#222222] flex flex-wrap gap-1.5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-helvetica text-[11px] px-2.5 py-0.5 rounded-cards border border-[#2a2a2a] bg-[#161616] text-ash"
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
