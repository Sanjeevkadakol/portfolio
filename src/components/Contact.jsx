import { useState } from 'react'
import { contactAPI } from '../services/api'
import { ArrowUpRight, CheckCircle2, AlertCircle, Mail } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setLoading(true)
    setStatus('')

    try {
      // Send directly to sanjeevpkadakol1@gmail.com via FormSubmit AJAX service
      const payload = {
        name: formData.name,
        email: formData.email,
        _subject: formData.subject ? `[Portfolio] ${formData.subject}` : `[Portfolio] New Message from ${formData.name}`,
        message: formData.message,
        _replyto: formData.email,
        _template: 'table',
        _captcha: 'false'
      }

      await fetch('https://formsubmit.co/ajax/sanjeevpkadakol1@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      })

      // Also record in backend API if available
      try {
        await contactAPI.submit(formData)
      } catch (err) {
        // Backend logging is secondary to email delivery
      }

      setStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setStatus(''), 8000)
    } catch (error) {
      console.error('Contact submission error:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 8000)
    } finally {
      setLoading(false)
    }
  }

  const mailtoLink = `mailto:sanjeevpkadakol1@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`

  const channels = [
    { label: "Email", value: "sanjeevpkadakol1@gmail.com", href: "mailto:sanjeevpkadakol1@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/sanjeev-kadakol", href: "https://www.linkedin.com/in/sanjeev-kadakol" },
    { label: "GitHub", value: "github.com/Sanjeevkadakol", href: "https://github.com/Sanjeevkadakol" }
  ]

  return (
    <section id="contact" className="w-full py-24 md:py-32 px-6 md:px-12 bg-cream text-ink border-t border-ink/10 selection:bg-lemon selection:text-ink">
      <div className="max-w-page mx-auto">
        {/* Section Header in Prody */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-lemon border border-ink" />
              <span className="font-suisse-book text-xs uppercase tracking-widest text-ink/60">
                06 • Direct Inquiries
              </span>
            </div>
            <h2 className="font-prody text-4xl sm:text-5xl lg:text-[42px] font-normal leading-[1.15] text-ink">
              Let’s Connect & Collaborate
            </h2>
            <p className="font-suisse text-base text-ink/75 leading-relaxed">
              Messages submitted here are delivered directly to <strong className="text-ink font-medium">sanjeevpkadakol1@gmail.com</strong>.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-suisse-book text-xs text-ink/50 uppercase tracking-widest">
              Bengaluru, IN
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Channels Information Card */}
          <div className="lg:col-span-5 bg-cream rounded-cards p-8 sm:p-[37px] border border-ink/15 space-y-8">
            <div>
              <h3 className="font-prody text-2xl sm:text-3xl font-normal text-ink mb-3 leading-tight">
                Start a Conversation
              </h3>
              <p className="font-suisse text-sm text-ink/70 leading-relaxed">
                Whether you’d like to discuss RAG pipelines, machine learning systems, or engineering opportunities, feel free to reach out directly.
              </p>
            </div>

            {/* Channels Directory */}
            <div className="space-y-3">
              {channels.map((channel, idx) => {
                const isExternal = channel.href.startsWith('http')
                return (
                  <a
                    key={idx}
                    href={channel.href}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center justify-between p-4 bg-cream rounded-[18px] border border-ink/10 hover:border-ink/40 transition-all group"
                  >
                    <div>
                      <span className="font-suisse-book text-[11px] uppercase tracking-wider text-ink/50 block">
                        {channel.label}
                      </span>
                      <span className="font-suisse text-sm font-medium text-ink">
                        {channel.value}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right Column: 37px Rounded Form Card */}
          <div className="lg:col-span-7 bg-cream rounded-cards p-8 sm:p-[37px] border border-ink/15">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="font-suisse text-xs uppercase tracking-wider text-ink/70 block mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full bg-cream border border-ink/20 rounded-nav px-4 py-3 text-ink text-sm font-suisse-book focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
                <div>
                  <label className="font-suisse text-xs uppercase tracking-wider text-ink/70 block mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@organization.com"
                    className="w-full bg-cream border border-ink/20 rounded-nav px-4 py-3 text-ink text-sm font-suisse-book focus:outline-none focus:border-ink transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-suisse text-xs uppercase tracking-wider text-ink/70 block mb-2 font-medium">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry regarding AI/ML Engineering"
                  className="w-full bg-cream border border-ink/20 rounded-nav px-4 py-3 text-ink text-sm font-suisse-book focus:outline-none focus:border-ink transition-colors"
                />
              </div>

              <div>
                <label className="font-suisse text-xs uppercase tracking-wider text-ink/70 block mb-2 font-medium">
                  Message Body *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, or role..."
                  className="w-full bg-cream border border-ink/20 rounded-nav px-4 py-3 text-ink text-sm font-suisse-book focus:outline-none focus:border-ink transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-lemon-pill"
                >
                  {loading ? 'Transmitting...' : 'Send Message'}
                </button>

                <span className="font-suisse-book text-xs text-ink/50 hidden sm:inline-block">
                  Direct Response Guarantee
                </span>
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-nav border border-ink bg-cream text-ink text-xs font-suisse flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-ink shrink-0" />
                  <span>Your message has been dispatched directly to <strong>sanjeevpkadakol1@gmail.com</strong>. Thank you!</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-nav border border-ink/30 bg-cream text-ink text-xs font-suisse flex items-center gap-2.5">
                  <AlertCircle className="w-4 h-4 text-ink shrink-0" />
                  <span>Submission encountered an issue. Please click "Or open in default mail app" or write directly to sanjeevpkadakol1@gmail.com</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
