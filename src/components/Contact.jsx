import { useState } from 'react'
import { contactAPI } from '../services/api'
import SectionWrapper from './ui/SectionWrapper'
import { Mail, MessageSquare, Send, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
// import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setStatus('error')
      return
    }

    setLoading(true)
    setStatus('')

    try {
      const response = await contactAPI.submit(formData)
      if (response.data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      }
    } catch (error) {
      console.error('Error submitting contact form:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 5000)
    } finally {
      setLoading(false)
    }
  }

  const socialLinks = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/sanjeev-kadakol' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/in/sanjeev-kadakol-6a015a2a1' },
    { name: 'Email', icon: <Mail className="w-5 h-5" />, url: 'mailto:sanjeevpkadakol1@gmail.com' },
    { name: 'Phone', icon: <div className="w-5 h-5 text-current">📞</div>, url: 'tel:+917676980166' }
  ]

  return (
    <SectionWrapper
      id="contact"
      title="Get In Touch"
      subtitle="LET'S CONNECT"
      subtitleIcon={<MessageSquare className="w-4 h-4" />}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Left Column: Contact Info */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-2xl font-light text-white mb-4">Let's work together</h3>
            <p className="text-white/70 leading-relaxed">
              Have a project in mind or want to discuss the latest in AI/ML? I'm always open to new opportunities and collaborations.
            </p>
          </div>

          <div className="space-y-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#88734C]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#88734C]/10 flex items-center justify-center text-[#88734C] group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>
                <span className="text-white group-hover:text-[#88734C] transition-colors">{link.name}</span>
              </a>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#88734C]/20 to-transparent border border-[#88734C]/20">
            <h4 className="text-white font-medium mb-2">Based in</h4>
            <p className="text-white/70">Bengaluru, India</p>
            <p className="text-white/70 text-sm mt-4">Open for remote opportunities</p>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/80">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-black/40 border ${errors.name ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#88734C] transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/80">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-black/40 border ${errors.email ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#88734C] transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-white/80">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#88734C] transition-colors"
                placeholder="Subject"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white/80">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your Message"
                className={`w-full bg-black/40 border ${errors.message ? 'border-red-500' : 'border-white/10'} rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#88734C] transition-colors resize-none`}
              ></textarea>
              {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#88734C] hover:bg-[#7a6743] text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 flex items-center gap-3 text-green-200"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-lg bg-red-500/20 border border-red-500/50 flex items-center gap-3 text-red-200"
              >
                <AlertCircle className="w-5 h-5" />
                <span>Something went wrong. Please try again later.</span>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact

