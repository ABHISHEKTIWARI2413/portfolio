import React, { useState } from 'react'
import {
  Mail,
  Send,
  Copy,
  Check,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'
import { Container, SectionHeading, Card, Button, GithubIcon, LinkedinIcon } from '../ui'

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSendEmail = (e) => {
    e.preventDefault()
    const subjectParam = encodeURIComponent(subject || 'Portfolio Inquiry: Hello Abhishek')
    const bodyParam = encodeURIComponent(message || 'Hi Abhishek,\n\nI came across your portfolio and wanted to connect regarding...')
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectParam}&body=${bodyParam}`
  }

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          tag="Get In Touch"
          tagIcon={MessageSquare}
          title="Let's Build Something"
          accentTitle="Great Together."
          subtitle="Seeking internship opportunities, collaborative projects, or technical conversations in Data Science & AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-5">
            <Card className="border-purple-500/25">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                Feel free to reach out directly via email or connect across my professional profiles.
              </p>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-4">
                <span className="text-xs font-mono text-purple-300 block mb-1">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-purple-300 transition-colors truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-white/[0.05] hover:bg-purple-500/20 text-gray-300 hover:text-purple-300 transition-colors shrink-0"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-400 mt-1 font-mono">
                    ✓ Email copied to clipboard!
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Actively reviewing internship and junior roles</span>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-mono block">
                  Professional Profiles
                </span>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 hover:bg-white/[0.06] text-gray-300 hover:text-white transition-all text-xs font-medium"
                  >
                    <GithubIcon className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-500 ml-auto" />
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 hover:bg-white/[0.06] text-gray-300 hover:text-white transition-all text-xs font-medium"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-500 ml-auto" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Direct Message Launcher via Mailto */}
          <div className="lg:col-span-7">
            <Card className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Send a Message</h3>
                </div>
                <p className="text-sm text-gray-400 mb-6">
                  Compose your note below. Clicking Send will launch your default email client with your message pre-loaded directly to Abhishek.
                </p>

                <form onSubmit={handleSendEmail} className="space-y-4">
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5"
                    >
                      Subject / Topic
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Internship Opportunity / Campus Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-1.5"
                    >
                      Your Note
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={Send}
                      iconPosition="right"
                      className="w-full justify-center"
                    >
                      Open in Email Client
                    </Button>
                  </div>
                </form>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-center">
                <p className="text-xs text-gray-500">
                  Direct connection via mailto protocol. No backend server or unconfirmed third-party forms required.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  )
}
