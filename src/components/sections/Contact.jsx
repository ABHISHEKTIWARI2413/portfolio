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
      {/* Background glow accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c9f31d]/10 blur-[160px] rounded-full pointer-events-none" />

      <Container size="lg">
        <SectionHeading
          tag="Let's Collaborate"
          tagIcon={MessageSquare}
          title="Have A Project In Mind?"
          accentTitle="Let's Talk."
          subtitle="Seeking internship opportunities, collaborative projects, or conversations in Data Science & AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Left Column: Direct Contact & Profiles */}
          <div className="lg:col-span-5 space-y-5">
            <Card className="border-white/10 hover:border-[#c9f31d]/40">
              <h3 className="text-2xl font-bold font-['Urbanist'] text-white mb-2">
                Direct Contact
              </h3>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed font-['Plus_Jakarta_Sans']">
                Reach out directly via email or connect with me on professional platforms.
              </p>

              {/* Email Copy Card */}
              <div className="p-4 rounded-2xl bg-[#1a1a1a] border border-white/[0.08] mb-5">
                <span className="text-[11px] font-['Urbanist'] font-bold text-[#c9f31d] uppercase tracking-wider block mb-1">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-bold font-['Urbanist'] text-white hover:text-[#c9f31d] transition-colors truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/[0.06] hover:bg-[#c9f31d] hover:text-black text-gray-300 transition-colors shrink-0"
                    title="Copy Email to Clipboard"
                    aria-label="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-[#c9f31d] mt-1.5 font-mono">
                    ✓ Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Status Notice */}
              <div className="flex items-center gap-2.5 p-3.5 rounded-2xl bg-[#c9f31d]/10 border border-[#c9f31d]/25 text-[#c9f31d] text-xs font-['Urbanist'] font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#c9f31d] animate-pulse" />
                <span>Actively reviewing student internships and project roles</span>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-['Urbanist'] font-bold block">
                  Professional Profiles:
                </span>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-2xl bg-[#161616] border border-white/[0.08] hover:border-[#c9f31d]/50 hover:bg-[#1c1c1c] text-gray-300 hover:text-white transition-all text-xs font-['Urbanist'] font-bold"
                  >
                    <GithubIcon className="w-4 h-4 text-[#c9f31d]" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-500 ml-auto" />
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-2xl bg-[#161616] border border-white/[0.08] hover:border-[#c9f31d]/50 hover:bg-[#1c1c1c] text-gray-300 hover:text-white transition-all text-xs font-['Urbanist'] font-bold"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#c9f31d]" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-gray-500 ml-auto" />
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Direct Message Launcher */}
          <div className="lg:col-span-7">
            <Card className="h-full flex flex-col justify-between border-white/10 hover:border-[#c9f31d]/40">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-[#c9f31d] text-black flex items-center justify-center font-bold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <h3 className="text-2xl font-bold font-['Urbanist'] text-white">
                    Send A Message
                  </h3>
                </div>
                <p className="text-sm text-gray-400 mb-6 font-['Plus_Jakarta_Sans']">
                  Compose your note below. Clicking Send will launch your email client with your message pre-loaded directly to Abhishek.
                </p>

                <form onSubmit={handleSendEmail} className="space-y-4">
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-['Urbanist'] font-bold uppercase tracking-wider text-gray-400 mb-1.5"
                    >
                      Subject / Topic
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Internship Opportunity / Project Collaboration"
                      className="w-full px-4 py-3 rounded-2xl bg-[#161616] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9f31d] transition-all font-['Plus_Jakarta_Sans']"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-['Urbanist'] font-bold uppercase tracking-wider text-gray-400 mb-1.5"
                    >
                      Your Note
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#161616] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#c9f31d] transition-all font-['Plus_Jakarta_Sans'] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="lime"
                      size="lg"
                      icon={Send}
                      iconPosition="right"
                      className="w-full justify-center"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] text-center">
                <p className="text-xs text-gray-500 font-mono">
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
