import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-gray-200 relative selection:bg-purple-500/30 selection:text-purple-200">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full" />
        <div className="absolute top-[35%] -right-40 w-[600px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute top-[65%] -left-40 w-[600px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full" />
        <div className="absolute -bottom-40 right-1/3 w-[700px] h-[500px] bg-purple-600/10 blur-[160px] rounded-full" />
      </div>

      {/* Main Layout Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}
