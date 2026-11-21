import React from 'react'
import {
  GraduationCap,
  Calendar,
  Building,
  Trophy,
  Rocket,
  CheckCircle2,
  BookOpen,
  Award,
} from 'lucide-react'
import { educationData, achievements } from '../../data/portfolioData'
import { Container, SectionHeading, Card, Badge } from '../ui'

export default function Education() {
  const getAchievementIcon = (iconName) => {
    switch (iconName) {
      case 'Trophy':
        return Trophy
      case 'Rocket':
        return Rocket
      default:
        return CheckCircle2
    }
  }

  return (
    <section id="education" className="py-20 sm:py-28 relative">
      <Container size="lg">
        <SectionHeading
          tag="Education Experience"
          tagIcon={GraduationCap}
          title="Academic Foundation &"
          accentTitle="Technical Milestones"
          subtitle="Rigorous academic preparation in Data Science paired with hands-on technical learning milestones."
        />

        {/* Education Timeline Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {educationData.map((edu, idx) => (
            <div key={idx} className="lg:col-span-7">
              <Card className="h-full border-white/10 hover:border-[#c9f31d]/50 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-[#c9f31d]">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-['Urbanist'] font-bold text-[#c9f31d] uppercase tracking-wider">
                          Undergraduate Degree
                        </span>
                        <h3 className="text-2xl font-bold font-['Urbanist'] text-white">
                          {edu.degree}
                        </h3>
                      </div>
                    </div>
                    <Badge variant="lime" size="md">
                      {edu.branch}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="flex items-center gap-2.5 text-sm text-gray-300 font-['Urbanist'] font-semibold">
                      <Building className="w-4 h-4 text-[#c9f31d] shrink-0" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-gray-400 font-mono">
                      <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
                      <span>{edu.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                    {edu.description}
                  </p>

                  <div className="space-y-2.5">
                    <span className="text-xs font-['Urbanist'] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-[#c9f31d]" />
                      Core Coursework & Practical Labs
                    </span>
                    <div className="space-y-2">
                      {edu.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-[#c9f31d] mt-0.5 shrink-0" />
                          <span className="font-['Plus_Jakarta_Sans']">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>Pranveer Singh Institute of Technology</span>
                  <span>Kanpur, India</span>
                </div>
              </Card>
            </div>
          ))}

          {/* Academic Focus Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            <Card className="h-full bg-gradient-to-br from-[#181818] to-[#101010] border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-[#c9f31d] text-black flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-['Urbanist'] text-white">
                    Data Science Focus
                  </h4>
                  <p className="text-xs text-gray-400">Second Year Technical Core</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-5 font-['Plus_Jakarta_Sans']">
                Comprehensive academic modules focused on mathematical modeling, database systems, predictive machine learning, and computational statistics.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-300">
                  <span className="text-[#c9f31d] font-bold font-['Urbanist'] block">Data Structures</span>
                  Algorithms & efficiency
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-300">
                  <span className="text-[#c9f31d] font-bold font-['Urbanist'] block">DBMS & SQL</span>
                  Schemas & querying
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-300">
                  <span className="text-[#c9f31d] font-bold font-['Urbanist'] block">Machine Learning</span>
                  Model algorithms
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-300">
                  <span className="text-[#c9f31d] font-bold font-['Urbanist'] block">Python Analytics</span>
                  NumPy, Pandas, Visuals
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Achievements Subsection */}
        <div>
          <div className="mb-8">
            <Badge variant="lime" size="md" className="mb-3">
              Milestones
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Urbanist'] text-white">
              Key Achievements & Hackathons
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, aIdx) => {
              const Icon = getAchievementIcon(item.icon)
              return (
                <Card key={aIdx} className="hover:border-[#c9f31d]/50 transition-all">
                  <div className="w-11 h-11 rounded-2xl bg-[#1d1d1d] border border-white/10 flex items-center justify-center text-[#c9f31d] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-['Urbanist'] font-bold text-[#c9f31d] block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-lg font-bold font-['Urbanist'] text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-['Plus_Jakarta_Sans']">
                    {item.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
