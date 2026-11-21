import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
} from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'
import { Container, Button, CircularBadge, GithubIcon, LinkedinIcon } from '../ui'

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault()
    const projectsEl = document.getElementById('projects')
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleResumeClick = (e) => {
    if (personalInfo.resumeUrl === '#resume') {
      e.preventDefault()
      alert('Abhishek Tiwari\'s verified resume will be downloadable here. Resume placeholder configured as per PRD.')
    }
  }

  return (
    <section
      id="home"
      className="relative pt-10 pb-20 sm:pt-16 sm:pb-28 overflow-hidden"
    >
      {/* Background ambient glow - signature neon lime */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#c9f31d]/10 blur-[150px] rounded-full pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#161616] border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#c9f31d] animate-pulse" />
              <span className="text-xs font-['Urbanist'] font-bold uppercase tracking-wider text-white">
                HI, I AM {personalInfo.name.toUpperCase()}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-['Urbanist'] tracking-tight text-white leading-[1.08]"
            >
              A Creative <span className="text-[#c9f31d]">Data Science</span> Student & Developer
            </motion.h1>

            {/* Subtitle Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl font-['Plus_Jakarta_Sans']"
            >
              {personalInfo.introduction}
            </motion.p>

            {/* Button Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Button
                variant="lime"
                size="lg"
                href={personalInfo.resumeUrl}
                onClick={handleResumeClick}
                icon={ArrowDown}
                iconPosition="right"
              >
                Download CV
              </Button>
              <Button
                variant="dark"
                size="lg"
                href="#projects"
                onClick={handleScrollToProjects}
                icon={ArrowUpRight}
                iconPosition="right"
              >
                Explore Projects
              </Button>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-3 pt-6 text-gray-400"
            >
              <span className="text-xs font-['Urbanist'] uppercase tracking-widest text-gray-500 font-semibold">
                Follow Me:
              </span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-[#141414] border border-white/10 text-gray-300 hover:text-black hover:bg-[#c9f31d] hover:border-[#c9f31d] transition-all duration-200"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-[#141414] border border-white/10 text-gray-300 hover:text-black hover:bg-[#c9f31d] hover:border-[#c9f31d] transition-all duration-200"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.email}
                aria-label="Send Email"
                className="p-2.5 rounded-full bg-[#141414] border border-white/10 text-gray-300 hover:text-black hover:bg-[#c9f31d] hover:border-[#c9f31d] transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Visual Showcase Card with Reference Neon Arch Portrait & Rotating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* The Main Hero Card */}
            <div className="relative w-full max-w-[430px] rounded-3xl p-5 sm:p-6 bg-gradient-to-b from-[#181818] via-[#121212] to-[#0c0c0c] border border-white/10 shadow-2xl flex flex-col items-center overflow-hidden group">
              {/* Internal Accent Glow - Electric Lime */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#c9f31d]/20 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#c9f31d]/10 blur-[70px] rounded-full pointer-events-none" />

              {/* Exact Reference Arch Portrait */}
              <div className="relative w-full aspect-[800/920] rounded-2xl bg-[#0f0f0f] border border-white/[0.08] flex items-center justify-center overflow-hidden shadow-inner">
                <img
                  src="/abhishek_reference.png"
                  alt="Abhishek Tiwari"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Floating pill badge top left */}
                <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-[#0d0d0d]/90 backdrop-blur-md border border-white/10 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#c9f31d] animate-pulse" />
                  <span className="text-[11px] font-['Urbanist'] font-bold text-white uppercase tracking-wider">
                    Data Science
                  </span>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="w-full mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold font-['Urbanist'] text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs font-['Urbanist'] text-[#c9f31d] font-semibold">
                    {personalInfo.educationQuick}
                  </p>
                </div>
                <div className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-[11px] font-mono text-gray-400">
                  Kanpur, IN
                </div>
              </div>
            </div>

            {/* Rotating Circular Badge overlay from Xabed */}
            <div className="absolute -bottom-6 -right-3 sm:-right-6 z-30">
              <CircularBadge text="DATA SCIENCE • DEVELOPER • INNOVATION •" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
