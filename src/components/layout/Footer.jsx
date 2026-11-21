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
    <footer className="border-t border-white/[0.08] bg-[#090909] py-14 relative z-10">
      <Container size="lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          {/* Brand Identity */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a
              href="#home"
              onClick={scrollToTop}
              className="text-2xl font-black font-['Urbanist'] text-white hover:opacity-90 transition-opacity"
            >
              {personalInfo.name.split(' ')[0]}
              <span className="text-[#c9f31d]">.</span>
            </a>
            <p className="text-xs text-gray-400 mt-1 max-w-sm font-['Plus_Jakarta_Sans']">
              {personalInfo.headline}
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-['Urbanist'] font-bold uppercase tracking-wider text-gray-400">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-[#c9f31d] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Social Profiles & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-full bg-[#161616] border border-white/10 text-gray-300 hover:text-black hover:bg-[#c9f31d] hover:border-[#c9f31d] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-full bg-[#161616] border border-white/10 text-gray-300 hover:text-black hover:bg-[#c9f31d] hover:border-[#c9f31d] transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.email}
              aria-label="Email"
              className="p-2.5 rounded-full bg-[#161616] border border-white/10 text-gray-300 hover:text-black hover:bg-[#c9f31d] hover:border-[#c9f31d] transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-full bg-[#c9f31d] text-black font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#c9f31d]/20 ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-['Urbanist'] font-medium gap-3">
          <p>© {currentYear} Abhishek Tiwari. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Inspired by Xabed • Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  )
}
