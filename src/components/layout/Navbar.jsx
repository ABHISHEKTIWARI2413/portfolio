import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { navItems, personalInfo } from '../../data/portfolioData'
import { Button } from '../ui'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
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
    <header className="sticky top-4 z-50 px-4 sm:px-6 w-full max-w-6xl mx-auto">
      <div className="glass-header rounded-full px-5 sm:px-7 py-3 flex items-center justify-between shadow-2xl shadow-black/60 border border-white/10">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-[#c9f31d]/60 bg-[#161616] p-[1px] shadow-md group-hover:border-[#c9f31d] transition-colors">
            <img
              src="/abhishek.png"
              alt="Abhishek Tiwari"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <span className="font-['Urbanist'] font-extrabold text-xl sm:text-2xl text-white tracking-tight group-hover:opacity-90 transition-opacity">
            {personalInfo.name.split(' ')[0]}
            <span className="text-[#c9f31d]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#181818]/70 px-3 py-1.5 rounded-full border border-white/[0.06]">
          {navItems.map((item) => {
            const id = item.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs font-['Urbanist'] font-semibold px-4 py-1.5 rounded-full transition-all duration-200 relative ${
                  isActive
                    ? 'text-black bg-[#c9f31d]'
                    : 'text-gray-300 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {item.name}
              </a>
            )
          })}
        </nav>

        {/* Right CTA Button ("Let's Talk") */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="lime"
            size="sm"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            icon={ArrowUpRight}
            iconPosition="right"
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full text-white bg-white/[0.08] border border-white/10 hover:border-[#c9f31d]/40 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#c9f31d]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-5 rounded-3xl bg-[#0f0f0f] border border-white/10 shadow-2xl shadow-black/80 space-y-2"
          >
            {navItems.map((item) => {
              const id = item.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 rounded-2xl text-sm font-['Urbanist'] font-bold transition-colors ${
                    isActive
                      ? 'bg-[#c9f31d] text-black'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </a>
              )
            })}
            <div className="pt-3 border-t border-white/10 mt-3">
              <Button
                variant="lime"
                size="md"
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full justify-center"
              >
                Let's Talk
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
