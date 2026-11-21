import React from 'react'
import { Sparkles, ArrowUpRight, Mail } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'
import { Container, SectionHeading, Card, Button, Badge } from '../ui'

export default function About() {
  const specialties = [
    { title: 'Web Application Platforms', count: 'Live on Vercel' },
    { title: 'Data Analytics & Modeling', count: 'Python & SQL' },
    { title: 'Interactive 2D Games', count: 'Live on Netlify' },
    { title: 'Machine Learning Concepts', count: 'Foundational' },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <Container size="lg">
        <SectionHeading
          tag="Why Choose Me"
          tagIcon={Sparkles}
          title="Showcasing Talent One Project At A Time."
          accentTitle="Bringing Ideas To Life."
          subtitle="A dedicated BTech Data Science undergraduate driven to bridge computational mathematics, algorithms, and real-world software engineering."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Card */}
          <div className="lg:col-span-7">
            <Card className="h-full flex flex-col justify-between border-white/10 hover:border-[#c9f31d]/50">
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden border border-[#c9f31d]/60 bg-[#161616] p-[1px] shadow-md shrink-0">
                    <img
                      src="/abhishek.png"
                      alt="Abhishek Tiwari"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-['Urbanist'] text-white">
                      About Abhishek Tiwari
                    </h3>
                    <p className="text-xs font-mono text-[#c9f31d]">PSIT Kanpur • BTech Data Science</p>
                  </div>
                </div>

                <div className="space-y-4 text-gray-300 text-base leading-relaxed font-['Plus_Jakarta_Sans']">
                  {personalInfo.bio.map((para, idx) => (
                    <p key={idx} className="text-gray-300/90">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#c9f31d] animate-ping" />
                  <span className="text-xs text-gray-300 font-semibold font-['Urbanist']">
                    Currently Open for Internships & Collaborations
                  </span>
                </div>
                <Button
                  variant="lime"
                  size="sm"
                  href="#projects"
                  icon={ArrowUpRight}
                  iconPosition="right"
                >
                  View My Work
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column: Stats & Specialties as in Xabed */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {/* Top Stat Banner */}
            <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#111111] border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-5xl sm:text-6xl font-black font-['Urbanist'] text-white">
                  2<span className="text-[#c9f31d]">+</span>
                </span>
                <Badge variant="lime">Experience</Badge>
              </div>
              <h4 className="text-lg font-bold font-['Urbanist'] text-white mb-1">
                Years of Dedicated Learning
              </h4>
              <p className="text-xs text-gray-400">
                Rigorous study in computational mathematics, machine learning theory, and modern web development.
              </p>
            </Card>

            {/* Quick Email Banner */}
            <div className="p-5 rounded-3xl bg-[#161616] border border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#c9f31d] text-black flex items-center justify-center font-bold">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-['Urbanist'] font-bold text-gray-400 uppercase tracking-wider block">
                    For Any Opportunity:
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-bold font-['Urbanist'] text-white hover:text-[#c9f31d] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Specialties Grid */}
            <div className="grid grid-cols-2 gap-3">
              {specialties.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#131313] border border-white/[0.08] hover:border-[#c9f31d]/40 transition-colors"
                >
                  <span className="text-xs text-[#c9f31d] font-mono block mb-1">
                    {item.count}
                  </span>
                  <h5 className="text-sm font-bold font-['Urbanist'] text-white">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
