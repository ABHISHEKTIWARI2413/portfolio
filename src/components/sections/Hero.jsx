import React from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  Download,
  Mail,
  Sparkles,
  Code2,
} from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'
import { Container, Button, Badge, GithubIcon, LinkedinIcon } from '../ui'

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault()
    const projectsEl = document.getElementById('projects')
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollToContact = (e) => {
    e.preventDefault()
    const contactEl = document.getElementById('contact')
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' })
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
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-8 pb-16 sm:py-20 overflow-hidden"
    >
      {/* Background radial spotlights & subtle glow */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] sm:w-[800px] sm:h-[450px] bg-gradient-to-b from-purple-600/15 via-indigo-600/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/2 -right-20 w-[350px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full" />
      </div>

      <Container size="default" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Status & Department Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex flex-wrap items-center justify-center gap-2"
          >
            <Badge variant="purple" size="md" icon={Sparkles} className="glow-pill">
              {personalInfo.educationQuick}
            </Badge>
            <Badge variant="default" size="md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
              {personalInfo.status}
            </Badge>
          </motion.div>

          {/* Initials-based Avatar (clean initials avatar, no fake photo as required by PRD) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-6 group"
          >
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-blue-500 p-[2px] shadow-2xl shadow-purple-600/25 group-hover:shadow-purple-600/40 transition-shadow">
              <div className="w-full h-full bg-[#0d0f1a] rounded-[22px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-tr from-white via-purple-200 to-indigo-300 bg-clip-text text-transparent">
                  {personalInfo.initials}
                </span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-[#141726] border border-purple-500/30 rounded-xl p-1.5 text-purple-300 shadow-md">
              <Code2 className="w-4 h-4" />
            </div>
          </motion.div>

          {/* Name & Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl font-medium text-purple-300/90 mb-6 max-w-2xl leading-relaxed"
          >
            {personalInfo.headline}
          </motion.h2>

          {/* Professional Introduction */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl"
          >
            {personalInfo.introduction}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              href="#projects"
              onClick={handleScrollToProjects}
              icon={ArrowDown}
              iconPosition="right"
              className="w-full sm:w-auto shadow-purple-600/25"
            >
              Explore My Work
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={personalInfo.resumeUrl}
              onClick={handleResumeClick}
              icon={Download}
              className="w-full sm:w-auto"
            >
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="#contact"
              onClick={handleScrollToContact}
              icon={Mail}
              className="w-full sm:w-auto"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Profiles & Email */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center gap-4 text-gray-400"
          >
            <span className="text-xs uppercase tracking-widest text-gray-500 font-mono">
              Connect
            </span>
            <div className="h-3 w-[1px] bg-white/10" />

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.socials.email}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
