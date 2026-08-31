const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-transparent text-ink py-12 px-6 md:px-12 border-t border-ink/10 font-suisse-book text-xs selection:bg-lemon selection:text-ink">
      <div className="max-w-page mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Minimal Wordmark */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
          <span className="font-suisse text-sm font-medium text-ink">
            sanjeev kadakol
          </span>
          <span className="text-ink/40 ml-2">© 2026 • AI & ML Engineer</span>
        </div>

        {/* Center: Clean Text Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-ink/75">
          <a
            href="https://github.com/Sanjeevkadakol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/sanjeev-kadakol"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="mailto:sanjeevpkadakol1@gmail.com"
            className="hover:text-ink transition-colors"
          >
            Email
          </a>
          <span>•</span>
          <button
            onClick={scrollToTop}
            className="hover:text-ink transition-colors focus:outline-none"
          >
            Back To Top ↑
          </button>
        </div>

        {/* Right Note */}
        <div className="text-ink/50 text-[11px]">
          BMSIT&M • CGPA 8.10
        </div>
      </div>
    </footer>
  )
}

export default Footer
