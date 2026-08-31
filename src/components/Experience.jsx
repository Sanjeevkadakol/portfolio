import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    company: "HEProAI",
    role: "AI & Machine Learning Intern",
    period: "Feb 2026 – Mar 2026",
    location: "Bengaluru, Karnataka, India",
    tag: "AI Modeling & Analytics",
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
    bullets: [
      "Designed and implemented clean, responsive user interfaces focusing on user experience, cross-device compatibility, and accessibility.",
      "Collaborated on frontend development workflows, component styling, and performance optimization for interactive web modules."
    ],
    skills: ["UI Architecture", "Web Development", "JavaScript", "HTML/CSS"]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="w-full py-20 md:py-28 px-6 md:px-12 bg-putty text-ink border-b border-vellum selection:bg-ink selection:text-paper">
      <div className="max-w-page mx-auto">
        {/* Section Header in Davinci Display */}
        <div className="mb-14">
          <h2 className="font-davinci text-3xl sm:text-4xl md:text-[43px] font-normal leading-[1.1] tracking-[-0.215px] text-ink">
            Work Experience & Internships
          </h2>
        </div>

        {/* 2x2 Grid of 9px Bone Cards on Putty Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-bone rounded-cards p-7 border border-vellum flex flex-col justify-between hover:border-graphite transition-colors shadow-sm"
            >
              <div>
                {/* Clean Header Tag without micro INDEX */}
                <div className="flex items-center justify-between pb-4 border-b border-vellum mb-5">
                  <span className="font-helvetica text-xs text-ink font-medium tracking-wide">
                    {exp.company}
                  </span>
                  <span className="font-helvetica text-[11px] px-3 py-1 rounded-full border border-vellum bg-putty/50 text-ink font-medium">
                    {exp.tag}
                  </span>
                </div>

                <h3 className="font-davinci text-xl sm:text-2xl text-ink font-normal mb-2 leading-snug">
                  {exp.role}
                </h3>

                <div className="flex flex-wrap items-center gap-4 text-xs font-helvetica text-graphite mb-5">
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
                    <li key={bIdx} className="font-helvetica text-xs text-graphite leading-relaxed flex items-start gap-2">
                      <span className="text-ink mt-0.5">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills Tags */}
              <div className="pt-4 border-t border-vellum flex flex-wrap gap-1.5">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="font-helvetica text-[11px] px-2.5 py-0.5 rounded-cards border border-vellum bg-putty/30 text-graphite font-medium"
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
