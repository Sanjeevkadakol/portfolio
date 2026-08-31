import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Code2, ChevronDown } from 'lucide-react'

const Contributions = () => {
  const [activeTab, setActiveTab] = useState('github')
  const [selectedYear, setSelectedYear] = useState('2026')

  // Exact 53-week matrix matching Sanjeev's real GitHub profile (141 contributions)
  const generateContributionDays = () => {
    const matrix = Array.from({ length: 53 * 7 }, () => 0)

    // Helper: set (week, dayIndex) where day 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
    const setDay = (week, day, lvl) => {
      if (week >= 0 && week < 53 && day >= 0 && day < 7) {
        matrix[week * 7 + day] = lvl
      }
    }

    // Oct
    setDay(5, 1, 1)
    setDay(6, 2, 2)
    // Dec
    setDay(14, 5, 3)
    setDay(14, 6, 3)
    // Jan
    setDay(17, 3, 3)
    setDay(19, 2, 4)
    // Feb
    setDay(21, 1, 2)
    setDay(21, 2, 3)
    setDay(22, 2, 2)
    setDay(23, 2, 4)
    setDay(22, 6, 2)
    setDay(23, 6, 2)
    setDay(24, 5, 2)
    // Mar
    setDay(26, 2, 2)
    setDay(28, 4, 3)
    // Apr
    setDay(33, 0, 2)
    setDay(34, 2, 2)
    // May
    setDay(37, 5, 3)
    setDay(38, 3, 3)
    setDay(38, 6, 4)
    // Jun
    setDay(41, 4, 2)
    setDay(42, 3, 3)
    setDay(45, 3, 2)
    // Jul
    setDay(47, 2, 4)
    setDay(48, 5, 2)
    setDay(50, 4, 2)
    setDay(50, 6, 1)
    // Aug
    setDay(52, 0, 2)
    setDay(52, 1, 4)
    setDay(52, 2, 4)
    setDay(52, 4, 3)
    setDay(52, 5, 3)
    setDay(52, 6, 3)

    return matrix
  }

  const contributionDays = generateContributionDays()


  const leetcodeStats = {
    totalSolved: 89,
    totalQuestions: 4041,
    ranking: "1,803,865",
    easy: { solved: 30, total: 962 },
    medium: { solved: 46, total: 2109 },
    hard: { solved: 13, total: 970 }
  }

  // Official GitHub Dark emerald levels
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
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
          <h2 className="font-davinci text-3xl sm:text-4xl md:text-[43px] font-normal leading-[1.1] tracking-[-0.215px] text-ink">
            Open Source & Problem Solving
          </h2>

          {/* Toggle Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-full border border-vellum bg-bone shadow-sm">
            <button
              onClick={() => setActiveTab('github')}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-helvetica transition-all ${
                activeTab === 'github'
                  ? 'bg-[#e5a910] text-ink font-semibold border border-ink/15 shadow-sm'
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
                  ? 'bg-[#e5a910] text-ink font-semibold border border-ink/15 shadow-sm'
                  : 'text-graphite hover:text-ink'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>LeetCode</span>
            </button>
          </div>
        </div>

        {/* Tab 1: GitHub View (100% Authentic Profile Replica) */}
        {activeTab === 'github' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Outer Dark Wrapper matching authentic GitHub Dark UI */}
            <div className="bg-[#0d1117] text-[#c9d1d9] rounded-cards p-6 sm:p-8 border border-[#30363d] shadow-2xl">
              {/* Header: "141 contributions in the last year" + "Contribution settings ▾" */}
              <div className="flex items-center justify-between pb-4 mb-4">
                <h3 className="font-helvetica text-base sm:text-lg text-[#f0f6fc] font-normal">
                  141 contributions in the last year
                </h3>

                <div className="flex items-center gap-4">
                  <div className="hidden sm:flex items-center gap-1 text-xs text-[#7d8590] hover:text-[#58a6ff] cursor-pointer">
                    <span>Contribution settings</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                  <a
                    href="https://github.com/Sanjeevkadakol"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-[#58a6ff] hover:underline"
                  >
                    <span>@Sanjeevkadakol</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Inner Layout: Heatmap Box + Right Year Sidebar */}
              <div className="flex flex-col lg:flex-row gap-5 items-start">
                {/* Bordered Heatmap Box */}
                <div className="flex-1 w-full bg-[#0d1117] rounded-md border border-[#30363d] p-4 sm:p-5 overflow-x-auto">
                  <div className="min-w-[720px]">
                    {/* Months Header */}
                    <div className="flex justify-between text-[11px] font-helvetica text-[#7d8590] mb-2.5 pl-8 pr-2 font-mono select-none">
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

                    <div className="flex gap-2.5">
                      {/* Day Labels */}
                      <div className="flex flex-col justify-between text-[10px] font-helvetica text-[#7d8590] py-0.5 font-mono select-none">
                        <span className="h-3 leading-3">Mon</span>
                        <span className="h-3 leading-3">Wed</span>
                        <span className="h-3 leading-3">Fri</span>
                      </div>

                      {/* 53-Week Grid */}
                      <div className="grid grid-flow-col grid-rows-7 gap-[3px] flex-1">
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
                    <div className="flex items-center justify-between text-xs font-helvetica text-[#7d8590] mt-4 pt-3 select-none">
                      <a
                        href="https://github.com/Sanjeevkadakol"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-[#7d8590] hover:text-[#58a6ff] hover:underline"
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

                {/* Right Year List */}
                <div className="flex lg:flex-col gap-2 shrink-0">
                  {['2026', '2025', '2024', '2023'].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setSelectedYear(yr)}
                      className={`px-4 py-1.5 rounded-md text-xs font-helvetica font-medium transition-colors text-left ${
                        selectedYear === yr
                          ? 'bg-[#1f6feb] text-white'
                          : 'text-[#7d8590] hover:text-white hover:bg-[#21262d]'
                      }`}
                    >
                      {yr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </motion.div>
        )}

        {/* Tab 2: LeetCode View (Clean Bone Card Style) */}
        {activeTab === 'leetcode' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-bone text-ink rounded-cards p-7 sm:p-8 border border-vellum shadow-sm">
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
                  className="btn-pill-black shrink-0 font-medium"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>leetcode.com/u/sanjeevpkadakol1</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Total Solved Box */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-putty/30 rounded-cards border border-vellum text-center">
                  <span className="font-helvetica text-[11px] uppercase tracking-wider text-graphite mb-2 font-medium">
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
                    <span className="font-helvetica text-xs font-semibold text-ink">
                      #{leetcodeStats.ranking}
                    </span>
                  </div>
                </div>

                {/* Difficulty Cards */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="bg-putty/30 p-6 rounded-cards border border-vellum flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-helvetica text-xs font-semibold uppercase text-emerald-700">
                        Easy
                      </span>
                      <span className="text-xs font-helvetica text-graphite font-mono">
                        {Math.round((leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100)}%
                      </span>
                    </div>
                    <div>
                      <span className="font-davinci text-3xl text-ink block font-normal">
                        {leetcodeStats.easy.solved}
                      </span>
                      <span className="font-helvetica text-[11px] text-graphite">
                        / {leetcodeStats.easy.total} Solved
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-vellum rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-600 rounded-full"
                        style={{ width: `${(leetcodeStats.easy.solved / leetcodeStats.easy.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-putty/30 p-6 rounded-cards border border-vellum flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-helvetica text-xs font-semibold uppercase text-amber-700">
                        Medium
                      </span>
                      <span className="text-xs font-helvetica text-graphite font-mono">
                        {Math.round((leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100)}%
                      </span>
                    </div>
                    <div>
                      <span className="font-davinci text-3xl text-ink block font-normal">
                        {leetcodeStats.medium.solved}
                      </span>
                      <span className="font-helvetica text-[11px] text-graphite">
                        / {leetcodeStats.medium.total} Solved
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-vellum rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#e5a910] rounded-full"
                        style={{ width: `${(leetcodeStats.medium.solved / leetcodeStats.medium.total) * 100}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-putty/30 p-6 rounded-cards border border-vellum flex flex-col justify-between space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-helvetica text-xs font-semibold uppercase text-red-700">
                        Hard
                      </span>
                      <span className="text-xs font-helvetica text-graphite font-mono">
                        {Math.round((leetcodeStats.hard.solved / leetcodeStats.hard.total) * 100)}%
                      </span>
                    </div>
                    <div>
                      <span className="font-davinci text-3xl text-ink block font-normal">
                        {leetcodeStats.hard.solved}
                      </span>
                      <span className="font-helvetica text-[11px] text-graphite">
                        / {leetcodeStats.hard.total} Solved
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-vellum rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-600 rounded-full"
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
