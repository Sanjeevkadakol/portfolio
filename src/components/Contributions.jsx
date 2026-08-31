import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Code2, GitFork, Star, CheckCircle2 } from 'lucide-react'

const Contributions = () => {
  const [activeTab, setActiveTab] = useState('github')

  // Sample contribution matrix representing the user's active streak (52 weeks x 7 days)
  const generateContributionDays = () => {
    const days = []
    const seed = [
      0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 3, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0,
      1, 2, 0, 0, 3, 4, 1, 0, 0, 2, 1, 0, 0, 0, 1, 2, 3, 0, 0, 1, 0, 2, 0, 0, 1, 3, 4, 2, 0, 0,
      0, 1, 2, 0, 0, 3, 1, 0, 0, 2, 0, 0, 1, 2, 4, 3, 0, 0, 2, 1, 0, 0, 3, 4, 2, 0, 1, 0, 0, 2,
      0, 1, 3, 2, 0, 0, 1, 0, 2, 3, 4, 1, 0, 0, 2, 1, 0, 0, 1, 2, 0, 0, 3, 2, 0, 1, 4, 3, 0, 0
    ]
    for (let i = 0; i < 52 * 7; i++) {
      const level = seed[i % seed.length]
      days.push(level)
    }
    return days
  }

  const contributionDays = generateContributionDays()

  const pinnedRepos = [
    {
      name: "AI-Driven-Zero-Day-Attack-Detection",
      lang: "Python",
      langColor: "bg-blue-600",
      desc: "Hybrid ML intrusion detection & mitigation system with Isolation Forest & XGBoost.",
      link: "https://github.com/Sanjeevkadakol/AI-Driven-Zero-Day-Attack-Detection"
    },
    {
      name: "AI-Powered-Comprehension-Learning-System",
      lang: "TypeScript",
      langColor: "bg-blue-500",
      desc: "Adaptive RAG learning platform generating personalized explanations from voice/text.",
      link: "https://github.com/Sanjeevkadakol/AI-Powered-Comprehension-Learning-System"
    },
    {
      name: "RAG-Chatbot",
      lang: "TypeScript",
      langColor: "bg-blue-500",
      desc: "Semantic document search chatbot using LangChain, vector retrieval, and OpenAI APIs.",
      link: "https://github.com/Sanjeevkadakol/RAG-Chatbot"
    },
    {
      name: "Neighbour_node",
      lang: "HTML / JS",
      langColor: "bg-orange-500",
      desc: "Secure multi-tenant community platform with GPS-based geofencing and role permissions.",
      link: "https://github.com/Sanjeevkadakol/Neighbour_node"
    },
    {
      name: "Spotter_Trip_planner",
      lang: "JavaScript",
      langColor: "bg-yellow-500",
      desc: "Intelligent travel itinerary generator and route planning web application.",
      link: "https://github.com/Sanjeevkadakol"
    },
    {
      name: "portfolio",
      lang: "JavaScript / React",
      langColor: "bg-yellow-500",
      desc: "Modern personal portfolio website designed with the Airtree aesthetic system.",
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
        return 'bg-emerald-200 border-emerald-300'
      case 2:
        return 'bg-emerald-400 border-emerald-500'
      case 3:
        return 'bg-emerald-600 border-emerald-700'
      case 4:
        return 'bg-emerald-800 border-emerald-900'
      default:
        return 'bg-cream border-ink/10'
    }
  }

  return (
    <section id="contributions" className="w-full py-24 md:py-32 px-6 md:px-12 bg-transparent text-ink border-t border-ink/10 selection:bg-lemon selection:text-ink">
      <div className="max-w-page mx-auto">
        {/* Section Header in Prody */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
              <span className="font-suisse-book text-xs uppercase tracking-widest text-ink/60">
                04 • Open Source & Code Activity
              </span>
            </div>
            <h2 className="font-prody text-4xl sm:text-5xl lg:text-[42px] font-normal leading-[1.15] text-ink">
              Contributions & Problem Solving
            </h2>
            <p className="font-suisse text-base text-ink/75 leading-relaxed">
              Consistent open-source code commits, repository maintenance, and algorithmic data structure problem solving.
            </p>
          </div>

          {/* Interactive Toggle Pills */}
          <div className="flex items-center gap-2 p-1.5 rounded-full border border-ink/15 bg-cream">
            <button
              onClick={() => setActiveTab('github')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-suisse font-medium transition-all ${
                activeTab === 'github'
                  ? 'bg-ink text-cream shadow-sm'
                  : 'text-ink/70 hover:text-ink'
              }`}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </button>
            <button
              onClick={() => setActiveTab('leetcode')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-suisse font-medium transition-all ${
                activeTab === 'leetcode'
                  ? 'bg-ink text-cream shadow-sm'
                  : 'text-ink/70 hover:text-ink'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode</span>
            </button>
          </div>
        </div>

        {/* Tab 1: GitHub Activity View */}
        {activeTab === 'github' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Heatmap Activity Card with 37px Radius */}
            <div className="bg-cream rounded-cards p-8 sm:p-[37px] border border-ink/15">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-ink/10 gap-4 mb-6">
                <div>
                  <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-wider block mb-1">
                    Annual Commit Velocity
                  </span>
                  <h3 className="font-prody text-2xl sm:text-3xl font-normal text-ink">
                    126+ Contributions in the last year
                  </h3>
                </div>
                <a
                  href="https://github.com/Sanjeevkadakol"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lemon-pill shrink-0"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/Sanjeevkadakol</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Heatmap Calendar Grid */}
              <div className="overflow-x-auto pb-4 pt-2">
                <div className="min-w-[700px]">
                  {/* Month Labels */}
                  <div className="flex justify-between text-[11px] font-suisse-book text-ink/50 mb-2 px-1">
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

                  {/* 7 Rows x 52 Columns Matrix */}
                  <div className="grid grid-flow-col grid-rows-7 gap-1.5">
                    {contributionDays.map((level, idx) => (
                      <div
                        key={idx}
                        className={`w-3 h-3 rounded-[3px] border ${getHeatmapColor(level)} transition-transform hover:scale-125`}
                        title={`Day ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Legend Footer */}
                  <div className="flex items-center justify-between text-xs font-suisse-book text-ink/50 mt-4 pt-2">
                    <span>Active GitHub commit history</span>
                    <div className="flex items-center gap-1.5">
                      <span>Less</span>
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-cream border border-ink/10" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-200 border border-emerald-300" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400 border border-emerald-500" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-600 border border-emerald-700" />
                      <span className="w-2.5 h-2.5 rounded-[2px] bg-emerald-800 border border-emerald-900" />
                      <span>More</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pinned Repositories Grid (37px Radius Cards) */}
            <div className="space-y-4">
              <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-widest block">
                Pinned Public Repositories
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {pinnedRepos.map((repo, idx) => (
                  <a
                    key={idx}
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cream rounded-cards p-6 border border-ink/15 flex flex-col justify-between hover:border-ink/40 hover:-translate-y-0.5 transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-suisse text-xs text-ink/40 font-mono">
                          repo // 0{idx + 1}
                        </span>
                        <span className="font-suisse-book text-[10px] px-2 py-0.5 rounded-full border border-ink/15 bg-cream text-ink/60">
                          Public
                        </span>
                      </div>
                      <h4 className="font-suisse text-base font-semibold text-ink group-hover:underline underline-offset-2 mb-2 line-clamp-1">
                        {repo.name}
                      </h4>
                      <p className="font-suisse text-xs text-ink/70 leading-relaxed mb-4 line-clamp-2">
                        {repo.desc}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-ink/10 text-xs font-suisse-book text-ink/60">
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${repo.langColor}`} />
                        <span>{repo.lang}</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-ink transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: LeetCode Metrics View */}
        {activeTab === 'leetcode' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Main LeetCode Summary Card with 37px Radius */}
            <div className="bg-cream rounded-cards p-8 sm:p-[37px] border border-ink/15">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-ink/10 gap-4 mb-8">
                <div>
                  <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-wider block mb-1">
                    Algorithmic Problem Solving
                  </span>
                  <h3 className="font-prody text-2xl sm:text-3xl font-normal text-ink">
                    LeetCode Profile • @sanjeevpkadakol1
                  </h3>
                </div>
                <a
                  href="https://leetcode.com/u/sanjeevpkadakol1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-lemon-pill shrink-0"
                >
                  <Code2 className="w-4 h-4" />
                  <span>leetcode.com/u/sanjeevpkadakol1</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Solved Progress Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Total Solved Hero Circle */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-cream rounded-[28px] border border-ink/15 text-center">
                  <span className="font-suisse-book text-xs uppercase tracking-wider text-ink/50 mb-2">
                    Total Solved
                  </span>
                  <span className="font-prody text-6xl sm:text-7xl text-ink font-normal leading-none mb-2">
                    {leetcodeStats.totalSolved}
                  </span>
                  <span className="font-suisse text-xs text-ink/50">
                    / {leetcodeStats.totalQuestions} Questions
                  </span>
                  <div className="mt-4 pt-4 border-t border-ink/10 w-full flex items-center justify-center gap-2">
                    <span className="font-suisse-book text-xs text-ink/60">Global Rank:</span>
                    <span className="font-suisse text-xs font-semibold text-ink">
                      #{leetcodeStats.ranking}
                    </span>
                  </div>
                </div>

                {/* Difficulty Breakdown Cards */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Easy Card */}
                  <div className="bg-cream p-6 rounded-[24px] border border-ink/15 flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-suisse text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        Easy
                      </span>
                      <span className="text-xs font-suisse-book text-ink/50">
                        {Math.round((leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100)}%
                      </span>
                    </div>
                    <div>
                      <span className="font-prody text-3xl text-ink block">
                        {leetcodeStats.easy.solved}
                      </span>
                      <span className="font-suisse-book text-xs text-ink/50">
                        / {leetcodeStats.easy.total} Solved
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-ink/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-600 rounded-full"
                        style={{ width: `${(leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Medium Card */}
                  <div className="bg-cream p-6 rounded-[24px] border border-ink/15 flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-suisse text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full border border-amber-200">
                        Medium
                      </span>
                      <span className="text-xs font-suisse-book text-ink/50">
                        {Math.round((leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100)}%
                      </span>
                    </div>
                    <div>
                      <span className="font-prody text-3xl text-ink block">
                        {leetcodeStats.medium.solved}
                      </span>
                      <span className="font-suisse-book text-xs text-ink/50">
                        / {leetcodeStats.medium.total} Solved
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-ink/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: `${(leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Hard Card */}
                  <div className="bg-cream p-6 rounded-[24px] border border-ink/15 flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-suisse text-xs font-semibold uppercase tracking-wider text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full border border-rose-200">
                        Hard
                      </span>
                      <span className="text-xs font-suisse-book text-ink/50">
                        {Math.round((leetcodeStats.hard.solved / leetcodeStats.hard.total) * 100)}%
                      </span>
                    </div>
                    <div>
                      <span className="font-prody text-3xl text-ink block">
                        {leetcodeStats.hard.solved}
                      </span>
                      <span className="font-suisse-book text-xs text-ink/50">
                        / {leetcodeStats.hard.total} Solved
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-ink/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-rose-600 rounded-full"
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
