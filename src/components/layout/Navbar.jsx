import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navItems, personalInfo } from '../../data/portfolioData'
import { Container, Button } from '../ui'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Toggle background blur intensity
      setScrolled(window.scrollY > 20)

      // Active section detection
      const sectionIds = navItems.map((item) => item.href.replace('#', ''))
      const scrollPosition = window.scrollY + 200

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(targetId)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/30 py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <Container size="lg">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 p-[1px] shadow-md shadow-purple-600/20">
              <div className="w-full h-full bg-[#0d0e17] rounded-[11px] flex items-center justify-center group-hover:bg-[#131522] transition-colors">
                <span className="text-sm font-bold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent">
                  {personalInfo.initials}
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-white tracking-tight group-hover:text-purple-300 transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] text-gray-400 font-mono hidden sm:inline-block">
                Data Science
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#13151f]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/[0.08]">
            {navItems.map((item) => {
              const id = item.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 relative ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-500/40 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              )
            })}
          </nav>

          {/* Right Action Button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              icon={ArrowUpRight}
              iconPosition="right"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-300 hover:text-white bg-white/[0.05] border border-white/10 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0a0c13] border-b border-white/10"
          >
            <Container className="py-4 space-y-1">
              {navItems.map((item) => {
                const id = item.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </a>
                )
              })}
              <div className="pt-3 border-t border-white/10 mt-2">
                <Button
                  variant="primary"
                  size="sm"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full justify-center"
                >
                  Contact Abhishek
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

