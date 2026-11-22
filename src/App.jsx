import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import GraphicDesign from './components/sections/GraphicDesign'
import Education from './components/sections/Education'
import Certifications from './components/sections/Certifications'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#070707] text-[#e3e3e3] relative selection:bg-[#c9f31d] selection:text-black font-['Plus_Jakarta_Sans']">
      {/* Background ambient lighting - Xabed electric lime spotlights */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[#c9f31d]/[0.07] blur-[160px] rounded-full" />
        <div className="absolute top-[35%] -right-40 w-[600px] h-[500px] bg-[#c9f31d]/[0.05] blur-[180px] rounded-full" />
        <div className="absolute top-[65%] -left-40 w-[600px] h-[500px] bg-[#c9f31d]/[0.05] blur-[180px] rounded-full" />
        <div className="absolute -bottom-40 right-1/4 w-[700px] h-[500px] bg-[#c9f31d]/[0.06] blur-[160px] rounded-full" />
      </div>

      {/* Main Layout Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <Skills />
          <About />
          <Projects />
          <GraphicDesign />
          <Education />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  )
}
