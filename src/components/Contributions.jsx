import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Code2 } from 'lucide-react'

const Contributions = () => {
  const [activeTab, setActiveTab] = useState('github')

  // Realistically patterned contribution matrix matching 126+ commits in the last year
  const generateContributionDays = () => {
    const days = []
    const seed = [
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 2, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 3, 3, 0,
      0, 0, 0, 2, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 2,
      0, 0, 0, 0, 0, 0, 2,
      0, 0, 0, 0, 0, 1, 0,
      0, 0, 0, 4, 0, 0, 0,
      0, 0, 2, 0, 0, 0, 0,
      0, 0, 0, 3, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 2, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 2, 0, 0,
      0, 0, 0, 0, 0, 3, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0,
      0, 3, 0, 0, 0, 0, 0,
      0, 2, 0, 0, 2, 3, 2
    ]
    for (let i = 0; i < 52 * 7; i++) {
      days.push(seed[i % seed.length] || 0)
    }
    return days
  }

  const contributionDays = generateContributionDays()

  const pinnedRepos = [
    {
      name: "AI-Driven-Zero-Day-Attack-Detection",
      lang: "Python",
      langColor: "bg-[#3572A5]",
      desc: "Hybrid ML intrusion detection & mitigation system with Isolation Forest & XGBoost.",
      link: "https://github.com/Sanjeevkadakol/AI-Driven-Zero-Day-Attack-Detection"
    },
    {
      name: "AI-Powered-Comprehension-Learning-System",
      lang: "TypeScript",
      langColor: "bg-[#3178c6]",
      desc: "Adaptive RAG learning platform generating personalized explanations from voice/text.",
      link: "https://github.com/Sanjeevkadakol/AI-Powered-Comprehension-Learning-System"
    },
    {
      name: "RAG-Chatbot",
      lang: "TypeScript",
      langColor: "bg-[#3178c6]",
      desc: "Semantic document search chatbot using LangChain, vector retrieval, and OpenAI APIs.",
      link: "https://github.com/Sanjeevkadakol/RAG-Chatbot"
    },
    {
      name: "Neighbour_node",
      lang: "JavaScript",
      langColor: "bg-[#f1e05a]",
      desc: "Secure multi-tenant community platform with GPS-based geofencing and role permissions.",
      link: "https://github.com/Sanjeevkadakol/Neighbour_node"
    },
    {
      name: "Spotter_Trip_planner",
      lang: "JavaScript",
      langColor: "bg-[#f1e05a]",
      desc: "Intelligent travel itinerary generator and route planning web application.",
      link: "https://github.com/Sanjeevkadakol"
    },
    {
      name: "portfolio",
      lang: "JavaScript",
      langColor: "bg-[#f1e05a]",
      desc: "Personal portfolio website engineered with React, Tailwind CSS, and Vite.",
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

  // Official GitHub Dark emerald color tiers
  const getHeatmapColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-[#0e4429] border-[#0e4429]'
      case 2:
        return 'bg-[#006d32] border-[#006d32]'
      case 3:
        return 'bg-[#26a641] border-[#26a641]'
      case 4:
        return 'bg-[#39d353] border-[#39d353]'
      default:
        return 'bg-[#161b22] border-[#21262d]'
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

          {/* Toggle Switcher */}
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

        {/* Tab 1: GitHub View (Authentic Emerald Green on Dark Canvas) */}
        {activeTab === 'github' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Authentic GitHub Heatmap Card */}
            <div className="bg-[#0d1117] text-[#c9d1d9] rounded-cards p-6 sm:p-8 border border-[#30363d] shadow-xl">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#21262d] gap-4 mb-6">
                <div className="space-y-1">
                  <span className="font-helvetica text-[11px] text-[#7d8590] uppercase tracking-wider block">
                    COMMIT VELOCITY
                  </span>
                  <h3 className="font-helvetica text-xl sm:text-2xl text-[#f0f6fc] font-normal">
                    126 contributions in the last year
                  </h3>
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-[#1f6feb] text-white text-xs rounded-md font-helvetica font-medium">
                    2026
                  </span>
                  <a
                    href="https://github.com/Sanjeevkadakol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#21262d] hover:bg-[#30363d] text-[#c9d1d9] text-xs font-helvetica border border-[#30363d] transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>github.com/Sanjeevkadakol</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Heatmap Matrix with Authentic Mon/Wed/Fri Row Labels */}
              <div className="overflow-x-auto pb-4 pt-2">
                <div className="min-w-[760px]">
                  {/* Months Header */}
                  <div className="flex justify-between text-[11px] font-helvetica text-[#7d8590] mb-2.5 pl-8 pr-1 font-mono">
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

                  <div className="flex gap-2">
                    {/* Day Names Column */}
                    <div className="flex flex-col justify-between text-[10px] font-helvetica text-[#7d8590] py-0.5 font-mono select-none">
                      <span className="h-3 leading-3">Mon</span>
                      <span className="h-3 leading-3">Wed</span>
                      <span className="h-3 leading-3">Fri</span>
                    </div>

                    {/* 52-Week Grid */}
                    <div className="grid grid-flow-col grid-rows-7 gap-[3.5px] flex-1">
                      {contributionDays.map((level, idx) => (
                        <div
                          key={idx}
                          className={`w-[11px] h-[11px] rounded-[2px] border ${getHeatmapColor(level)} transition-transform hover:scale-125`}
                          title={`Contributions: level ${level}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Legend Footer */}
                  <div className="flex items-center justify-between text-xs font-helvetica text-[#7d8590] mt-5 pt-3 border-t border-[#21262d]">
                    <a
                      href="https://github.com/Sanjeevkadakol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#58a6ff] hover:underline"
                    >
                      Learn how we count contributions
                    </a>
                    <div className="flex items-center gap-1.5 text-[11px]">
                      <span>Less</span>
                      <span className="w-3 h-3 rounded-[2px] bg-[#161b22] border border-[#21262d]" />
                      <span className="w-3 h-3 rounded-[2px] bg-[#0e4429] border border-[#0e4429]" />
                      <span className="w-3 h-3 rounded-[2px] bg-[#006d32] border border-[#006d32]" />
                      <span className="w-3 h-3 rounded-[2px] bg-[#26a641] border border-[#26a641]" />
                      <span className="w-3 h-3 rounded-[2px] bg-[#39d353] border border-[#39d353]" />
                      <span>More</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pinned Repos Grid (Authentic Dark Theme) */}
            <div className="space-y-4">
              <span className="font-helvetica text-[11px] text-graphite uppercase tracking-widest block font-medium">
                Pinned Public Repositories
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {pinnedRepos.map((repo, idx) => (
                  <a
                    key={idx}
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0d1117] rounded-cards p-6 border border-[#30363d] flex flex-col justify-between hover:border-[#58a6ff] transition-all group shadow-sm"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-helvetica text-[10px] text-[#7d8590] font-mono">
                          REPO // 0{idx + 1}
                        </span>
                        <span className="font-helvetica text-[10px] px-2 py-0.5 rounded-full border border-[#30363d] bg-[#161b22] text-[#7d8590]">
                          Public
                        </span>
                      </div>
                      <h4 className="font-helvetica text-sm font-semibold text-[#58a6ff] group-hover:underline mb-2 line-clamp-1">
                        {repo.name}
                      </h4>
                      <p className="font-helvetica text-xs text-[#7d8590] leading-relaxed mb-4 line-clamp-2">
                        {repo.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#21262d] text-xs font-helvetica text-[#7d8590]">
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                        <span>{repo.lang}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#7d8590] group-hover:text-[#58a6ff] transition-transform" />
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
            <div className="bg-[#1a1a1a] text-white rounded-cards p-7 sm:p-8 border border-[#2e2e2e] shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#2e2e2e] gap-4 mb-8">
                <div>
                  <span className="font-helvetica text-[10px] text-[#8a8a8a] uppercase tracking-wider block mb-1">
                    ALGORITHMIC SOLVING
                  </span>
                  <h3 className="font-davinci text-2xl text-white font-normal">
                    LeetCode Profile • @sanjeevpkadakol1
                  </h3>
                </div>
                <a
                  href="https://leetcode.com/u/sanjeevpkadakol1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-white shrink-0 font-medium"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>leetcode.com/u/sanjeevpkadakol1</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Total Solved Box */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-[#242424] rounded-cards border border-[#333333] text-center">
                  <span className="font-helvetica text-[11px] uppercase tracking-wider text-[#8a8a8a] mb-2">
                    Total Solved
                  </span>
                  <span className="font-davinci text-5xl sm:text-6xl text-white font-normal mb-1">
                    {leetcodeStats.totalSolved}
                  </span>
                  <span className="font-helvetica text-xs text-[#8a8a8a]">
                    / {leetcodeStats.totalQuestions} Questions
                  </span>
                  <div className="mt-4 pt-4 border-t border-[#333333] w-full flex items-center justify-center gap-2">
                    <span className="font-helvetica text-xs text-[#8a8a8a]">Global Rank:</span>
                    <span className="font-helvetica text-xs font-medium text-[#ffa116]">
                      #{leetcodeStats.ranking}
                    </span>
                  </div>
                </div>

                {/* Difficulty Cards */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="bg-[#242424] p-6 rounded-cards border border-[#333333] flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-helvetica text-xs font-medium uppercase text-[#00b8a3]">
                        Easy
                      </span>
                      <span className="text-xs font-helvetica text-[#8a8a8a] font-mono">
                        {Math.round((leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100)}%
                      </span>
                    </div>
                    <div>
                      <span className="font-davinci text-3xl text-white block">
                        {leetcodeStats.easy.solved}
                      </span>
                      <span className="font-helvetica text-[11px] text-[#8a8a8a]">
                        / {leetcodeStats.easy.total} Solved
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#00b8a3] rounded-full"
                        style={{ width: `${(leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-[#242424] p-6 rounded-cards border border-[#333333] flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-helvetica text-xs font-medium uppercase text-[#ffc01e]">
                        Medium
                      </span>
                      <span className="text-xs font-helvetica text-[#8a8a8a] font-mono">
                        {Math.round((leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100)}%
                      </span>
                    </div>
                    <div>
                      <span className="font-davinci text-3xl text-white block">
                        {leetcodeStats.medium.solved}
                      </span>
                      <span className="font-helvetica text-[11px] text-[#8a8a8a]">
                        / {leetcodeStats.medium.total} Solved
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#ffc01e] rounded-full"
                        style={{ width: `${(leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-[#242424] p-6 rounded-cards border border-[#333333] flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-helvetica text-xs font-medium uppercase text-[#ff375f]">
                        Hard
                      </span>
                      <span className="text-xs font-helvetica text-[#8a8a8a] font-mono">
                        {Math.round((leetcodeStats.hard.solved / leetcodeStats.hard.total) * 100)}%
                      </span>
                    </div>
                    <div>
                      <span className="font-davinci text-3xl text-white block">
                        {leetcodeStats.hard.solved}
                      </span>
                      <span className="font-helvetica text-[11px] text-[#8a8a8a]">
                        / {leetcodeStats.hard.total} Solved
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1a1a1a] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#ff375f] rounded-full"
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
