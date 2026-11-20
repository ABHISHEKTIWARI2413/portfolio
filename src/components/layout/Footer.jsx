import React from 'react'
import { ArrowUp, Mail } from 'lucide-react'
import { personalInfo, navItems } from '../../data/portfolioData'
import { Container, GithubIcon, LinkedinIcon } from '../ui'

const currentYear = new Date().getFullYear()

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/[0.08] bg-[#07080c] py-12 relative z-10">
      <Container size="lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          {/* Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={scrollToTop}
              className="text-lg font-bold text-white hover:text-purple-300 transition-colors"
            >
              {personalInfo.name}
            </a>
            <p className="text-xs text-gray-400 mt-1 max-w-sm">
              {personalInfo.headline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-400">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.email}
              aria-label="Email"
              className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 hover:text-white transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <p>
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  )
}
