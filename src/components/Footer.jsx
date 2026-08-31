const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-chalk text-ink py-10 px-6 md:px-12 border-t border-vellum font-helvetica text-xs selection:bg-ink selection:text-paper">
      <div className="max-w-page mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Circled 'S' Monogram & Name */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border-[1.5px] border-ink flex items-center justify-center font-davinci text-xs font-medium">
            S
          </div>
          <span className="font-helvetica text-xs font-medium text-ink">
            Sanjeev Kadakol
          </span>
          <span className="text-graphite ml-1 text-[11px]">© 2026 • AI & ML Engineer</span>
        </div>

        {/* Center: Clean Helvetica Now Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-graphite">
          <a
            href="https://github.com/Sanjeevkadakol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink hover:underline transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/sanjeev-kadakol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink hover:underline transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://leetcode.com/u/sanjeevpkadakol1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink hover:underline transition-colors"
          >
            LeetCode
          </a>
          <span>•</span>
          <a
            href="mailto:sanjeevpkadakol1@gmail.com"
            className="hover:text-ink hover:underline transition-colors"
          >
            Email
          </a>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="hover:text-ink hover:underline transition-colors focus:outline-none"
          >
            Back To Top ↑
          </button>
        </div>

        {/* Right Note */}
        <div className="text-graphite text-[11px]">
          BMSIT&M • CGPA 8.10
        </div>
      </div>
    </footer>
  )
}

export default Footer
