import { useState } from 'react'
import { contactAPI } from '../services/api'
import { ArrowUpRight, CheckCircle2, AlertCircle, Github, Linkedin, Mail } from 'lucide-react'

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
      // Send directly to sanjeevpkadakol1@gmail.com via FormSubmit AJAX
      const payload = {
        name: formData.name,
        email: formData.email,
        _subject: formData.subject ? `[Structured Portfolio] ${formData.subject}` : `[Structured Portfolio] Message from ${formData.name}`,
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

      try {
        await contactAPI.submit(formData)
      } catch (err) {
        // secondary logging
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

  const channels = [
    { label: "Email", value: "sanjeevpkadakol1@gmail.com", href: "mailto:sanjeevpkadakol1@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/sanjeev-kadakol", href: "https://www.linkedin.com/in/sanjeev-kadakol" },
    { label: "GitHub", value: "github.com/Sanjeevkadakol", href: "https://github.com/Sanjeevkadakol" }
  ]

  return (
    <section id="contact" className="w-full py-20 md:py-28 px-6 md:px-12 bg-ink text-paper selection:bg-paper selection:text-ink">
      <div className="max-w-page mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <span className="font-helvetica text-[11px] uppercase tracking-widest text-ash block">
              07 • Direct Inquiries
            </span>
            <h2 className="font-davinci text-3xl sm:text-4xl md:text-[43px] font-normal leading-[1.1] tracking-[-0.215px] text-paper">
              Start a Conversation
            </h2>
            <p className="font-helvetica text-sm text-ash leading-relaxed">
              Dispatches directly to <strong className="text-paper font-medium">sanjeevpkadakol1@gmail.com</strong> for RAG pipelines, machine learning systems, or engineering roles.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-helvetica text-xs text-ash uppercase tracking-widest">
              Bengaluru, IN
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Channels Directory in 9px Dark Card */}
          <div className="lg:col-span-5 bg-[#111111] rounded-cards p-7 sm:p-8 border border-[#262626] space-y-6">
            <div>
              <h3 className="font-davinci text-2xl text-paper font-normal mb-2 leading-tight">
                Direct Channels
              </h3>
              <p className="font-helvetica text-xs text-ash leading-relaxed">
                Feel free to reach out directly via email or connect through professional networks.
              </p>
            </div>

            <div className="space-y-3">
              {channels.map((channel, idx) => {
                const isExternal = channel.href.startsWith('http')
                return (
                  <a
                    key={idx}
                    href={channel.href}
                    {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex items-center justify-between p-4 bg-[#161616] rounded-cards border border-[#262626] hover:border-[#444444] transition-all group"
                  >
                    <div>
                      <span className="font-helvetica text-[10px] uppercase tracking-wider text-ash block">
                        {channel.label}
                      </span>
                      <span className="font-helvetica text-xs sm:text-sm font-medium text-paper">
                        {channel.value}
                      </span>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-ash group-hover:text-paper group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Right Column: 9px Dark Form Card */}
          <div className="lg:col-span-7 bg-[#111111] rounded-cards p-7 sm:p-8 border border-[#262626]">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-helvetica text-[11px] uppercase tracking-wider text-ash block mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full bg-[#161616] border border-[#262626] rounded-cards px-4 py-2.5 text-paper text-xs font-helvetica focus:outline-none focus:border-paper transition-colors"
                  />
                </div>
                <div>
                  <label className="font-helvetica text-[11px] uppercase tracking-wider text-ash block mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@organization.com"
                    className="w-full bg-[#161616] border border-[#262626] rounded-cards px-4 py-2.5 text-paper text-xs font-helvetica focus:outline-none focus:border-paper transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="font-helvetica text-[11px] uppercase tracking-wider text-ash block mb-2">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Inquiry regarding AI/ML Engineering"
                  className="w-full bg-[#161616] border border-[#262626] rounded-cards px-4 py-2.5 text-paper text-xs font-helvetica focus:outline-none focus:border-paper transition-colors"
                />
              </div>

              <div>
                <label className="font-helvetica text-[11px] uppercase tracking-wider text-ash block mb-2">
                  Message Body *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, or role..."
                  className="w-full bg-[#161616] border border-[#262626] rounded-cards px-4 py-2.5 text-paper text-xs font-helvetica focus:outline-none focus:border-paper transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-pill-white"
                >
                  {loading ? 'Transmitting...' : 'Send Message'}
                </button>

                <span className="font-helvetica text-[11px] text-ash">
                  Direct Response Guarantee
                </span>
              </div>

              {status === 'success' && (
                <div className="p-3.5 rounded-cards border border-paper/40 bg-[#161616] text-paper text-xs font-helvetica flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-paper shrink-0" />
                  <span>Your message has been dispatched directly to <strong>sanjeevpkadakol1@gmail.com</strong>.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-3.5 rounded-cards border border-red-500/40 bg-[#161616] text-paper text-xs font-helvetica flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Submission issue. Please email directly to sanjeevpkadakol1@gmail.com</span>
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
