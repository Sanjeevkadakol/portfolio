import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Code2 } from 'lucide-react'

const Contributions = () => {
  const [activeTab, setActiveTab] = useState('github')

  const generateContributionDays = () => {
    const days = []
    const seed = [
      0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 3, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0,
      1, 2, 0, 0, 3, 4, 1, 0, 0, 2, 1, 0, 0, 0, 1, 2, 3, 0, 0, 1, 0, 2, 0, 0, 1, 3, 4, 2, 0, 0,
      0, 1, 2, 0, 0, 3, 1, 0, 0, 2, 0, 0, 1, 2, 4, 3, 0, 0, 2, 1, 0, 0, 3, 4, 2, 0, 1, 0, 0, 2,
      0, 1, 3, 2, 0, 0, 1, 0, 2, 3, 4, 1, 0, 0, 2, 1, 0, 0, 1, 2, 0, 0, 3, 2, 0, 1, 4, 3, 0, 0
    ]
    for (let i = 0; i < 52 * 7; i++) {
      days.push(seed[i % seed.length])
    }
    return days
  }

  const contributionDays = generateContributionDays()

  const pinnedRepos = [
    {
      name: "AI-Driven-Zero-Day-Attack-Detection",
      lang: "Python",
      desc: "Hybrid ML intrusion detection & mitigation system with Isolation Forest & XGBoost.",
      link: "https://github.com/Sanjeevkadakol/AI-Driven-Zero-Day-Attack-Detection"
    },
    {
      name: "AI-Powered-Comprehension-Learning-System",
      lang: "TypeScript",
      desc: "Adaptive RAG learning platform generating personalized explanations from voice/text.",
      link: "https://github.com/Sanjeevkadakol/AI-Powered-Comprehension-Learning-System"
    },
    {
      name: "RAG-Chatbot",
      lang: "TypeScript",
      desc: "Semantic document search chatbot using LangChain, vector retrieval, and OpenAI APIs.",
      link: "https://github.com/Sanjeevkadakol/RAG-Chatbot"
    },
    {
      name: "Neighbour_node",
      lang: "HTML / JS",
      desc: "Secure multi-tenant community platform with GPS-based geofencing and role permissions.",
      link: "https://github.com/Sanjeevkadakol/Neighbour_node"
    },
    {
      name: "Spotter_Trip_planner",
      lang: "JavaScript",
      desc: "Intelligent travel itinerary generator and route planning web application.",
      link: "https://github.com/Sanjeevkadakol"
    },
    {
      name: "portfolio",
      lang: "JavaScript / React",
      desc: "Modern personal portfolio website designed with the Structured aesthetic system.",
      link: "https://github.com/Sanjeevkadakol/portfolio"
    }
  ]

  const leetcodeStats = {
    totalSolved: 89,
    totalQuestions: 4041,
    ranking: "1,803,865",
    easy: { solved: 30, total: 962 },
    medium: { solved: 46, total: 2109 },
    hard: { solved: 13, total: 970 }
  }

  const getHeatmapColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-ink/25 border-ink/35'
      case 2:
        return 'bg-ink/50 border-ink/60'
      case 3:
        return 'bg-ink/80 border-ink'
      case 4:
        return 'bg-ink border-ink'
      default:
        return 'bg-putty/50 border-vellum'
    }
  }

  return (
    <section id="contributions" className="w-full py-20 md:py-28 px-6 md:px-12 bg-putty text-ink border-b border-vellum selection:bg-ink selection:text-paper">
      <div className="max-w-page mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="font-helvetica text-[11px] uppercase tracking-widest text-graphite block">
              04 • Code Activity & Problem Solving
            </span>
            <h2 className="font-davinci text-3xl sm:text-4xl md:text-[43px] font-normal leading-[1.1] tracking-[-0.215px] text-ink">
              Open Source & Problem Solving
            </h2>
            <p className="font-helvetica text-sm text-graphite leading-relaxed">
              Continuous commit history, open-source repositories, and algorithmic data structure mastery.
            </p>
          </div>

          {/* Toggle Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-full border border-vellum bg-bone">
            <button
              onClick={() => setActiveTab('github')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-helvetica transition-all ${
                activeTab === 'github'
                  ? 'bg-ink text-paper font-medium shadow-sm'
                  : 'text-graphite hover:text-ink'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </button>
            <button
              onClick={() => setActiveTab('leetcode')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-helvetica transition-all ${
                activeTab === 'leetcode'
                  ? 'bg-ink text-paper font-medium shadow-sm'
                  : 'text-graphite hover:text-ink'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode</span>
            </button>
          </div>
        </div>

        {/* Tab 1: GitHub View */}
        {activeTab === 'github' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Heatmap Bone Card */}
            <div className="bg-bone rounded-cards p-7 sm:p-8 border border-vellum">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-vellum gap-4 mb-6">
                <div>
                  <span className="font-helvetica text-[10px] text-graphite uppercase tracking-wider block mb-1">
                    COMMIT VELOCITY
                  </span>
                  <h3 className="font-davinci text-2xl text-ink font-normal">
                    126+ Contributions in the last year
                  </h3>
                </div>
                <a
                  href="https://github.com/Sanjeevkadakol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-black shrink-0"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/Sanjeevkadakol</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Heatmap Grid */}
              <div className="overflow-x-auto pb-4 pt-2">
                <div className="min-w-[700px]">
                  <div className="flex justify-between text-[10px] font-helvetica text-graphite mb-2 px-1 font-mono">
                    <span>Sep</span>
                    <span>Oct</span>
                    <span>Nov</span>
                    <span>Dec</span>
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                    <span>Jul</span>
                    <span>Aug</span>
                  </div>

                  <div className="grid grid-flow-col grid-rows-7 gap-1.5">
                    {contributionDays.map((level, idx) => (
                      <div
                        key={idx}
                        className={`w-3 h-3 rounded-[2px] border ${getHeatmapColor(level)} transition-transform hover:scale-125`}
                        title={`Activity level ${level}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-helvetica text-graphite mt-4 pt-2">
                    <span>GitHub public activity</span>
                    <div className="flex items-center gap-1.5 text-[10px]">
                      <span>Less</span>
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-putty/50 border border-vellum" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-ink/25 border border-ink/35" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-ink/50 border border-ink/60" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-ink/80 border border-ink" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-ink border border-ink" />
                      <span>More</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pinned Repos Grid */}
            <div className="space-y-4">
              <span className="font-helvetica text-[11px] text-graphite uppercase tracking-widest block">
                Pinned Public Repositories
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {pinnedRepos.map((repo, idx) => (
                  <a
                    key={idx}
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-bone rounded-cards p-6 border border-vellum flex flex-col justify-between hover:border-graphite transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-helvetica text-[10px] text-graphite font-mono">
                          REPO // 0{idx + 1}
                        </span>
                        <span className="font-helvetica text-[10px] px-2 py-0.5 rounded-cards border border-vellum bg-putty/30 text-graphite">
                          Public
                        </span>
                      </div>
                      <h4 className="font-davinci text-base font-normal text-ink group-hover:underline mb-2 line-clamp-1">
                        {repo.name}
                      </h4>
                      <p className="font-helvetica text-xs text-graphite leading-relaxed mb-4 line-clamp-2">
                        {repo.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-vellum text-xs font-helvetica text-graphite">
                      <span>{repo.lang}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-graphite group-hover:text-ink transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: LeetCode View */}
        {activeTab === 'leetcode' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-bone rounded-cards p-7 sm:p-8 border border-vellum">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-vellum gap-4 mb-8">
                <div>
                  <span className="font-helvetica text-[10px] text-graphite uppercase tracking-wider block mb-1">
                    ALGORITHMIC SOLVING
                  </span>
                  <h3 className="font-davinci text-2xl text-ink font-normal">
                    LeetCode Profile • @sanjeevpkadakol1
                  </h3>
                </div>
                <a
                  href="https://leetcode.com/u/sanjeevpkadakol1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-black shrink-0"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>leetcode.com/u/sanjeevpkadakol1</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Total Solved Box */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-putty/30 rounded-cards border border-vellum text-center">
                  <span className="font-helvetica text-[11px] uppercase tracking-wider text-graphite mb-2">
                    Total Solved
                  </span>
                  <span className="font-davinci text-5xl sm:text-6xl text-ink font-normal mb-1">
                    {leetcodeStats.totalSolved}
                  </span>
                  <span className="font-helvetica text-xs text-graphite">
                    / {leetcodeStats.totalQuestions} Questions
                  </span>
                  <div className="mt-4 pt-4 border-t border-vellum w-full flex items-center justify-center gap-2">
                    <span className="font-helvetica text-xs text-graphite">Global Rank:</span>
                    <span className="font-helvetica text-xs font-medium text-ink">
                      #{leetcodeStats.ranking}
                    </span>
                  </div>
                </div>

                {/* Difficulty Cards */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="bg-putty/30 p-6 rounded-cards border border-vellum flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-helvetica text-xs font-medium uppercase text-ink">
                        Easy
                      </span>
                      <span className="text-xs font-helvetica text-graphite font-mono">
                        {Math.round((leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100)}%
                      </span>
                    </div>
                    <div>
                      <span className="font-davinci text-3xl text-ink block">
                        {leetcodeStats.easy.solved}
                      </span>
                      <span className="font-helvetica text-[11px] text-graphite">
                        / {leetcodeStats.easy.total} Solved
                      </span>
                    </div>
                    <div className="w-full h-1 bg-vellum rounded-full overflow-hidden">
                      <div
                        className="h-full bg-ink rounded-full"
                        style={{ width: `${(leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-putty/30 p-6 rounded-cards border border-vellum flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-helvetica text-xs font-medium uppercase text-ink">
                        Medium
                      </span>
                      <span className="text-xs font-helvetica text-graphite font-mono">
                        {Math.round((leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100)}%
                      </span>
                    </div>
                    <div>
                      <span className="font-davinci text-3xl text-ink block">
                        {leetcodeStats.medium.solved}
                      </span>
                      <span className="font-helvetica text-[11px] text-graphite">
                        / {leetcodeStats.medium.total} Solved
                      </span>
                    </div>
                    <div className="w-full h-1 bg-vellum rounded-full overflow-hidden">
                      <div
                        className="h-full bg-ink rounded-full"
                        style={{ width: `${(leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-putty/30 p-6 rounded-cards border border-vellum flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-helvetica text-xs font-medium uppercase text-ink">
                        Hard
                      </span>
                      <span className="text-xs font-helvetica text-graphite font-mono">
                        {Math.round((leetcodeStats.hard.solved / leetcodeStats.hard.total) * 100)}%
                      </span>
                    </div>
                    <div>
                      <span className="font-davinci text-3xl text-ink block">
                        {leetcodeStats.hard.solved}
                      </span>
                      <span className="font-helvetica text-[11px] text-graphite">
                        / {leetcodeStats.hard.total} Solved
                      </span>
                    </div>
                    <div className="w-full h-1 bg-vellum rounded-full overflow-hidden">
                      <div
                        className="h-full bg-ink rounded-full"
                        style={{ width: `${(leetcodeStats.hard.solved / leetcodeStats.hard.total) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Contributions
