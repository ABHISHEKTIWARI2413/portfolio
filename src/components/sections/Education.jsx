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
      <Container>
        <SectionHeading
          tag="Education & Growth"
          tagIcon={GraduationCap}
          title="Academic Foundation &"
          accentTitle="Milestones"
          subtitle="Rigorous academic preparation in Data Science paired with hands-on technical learning milestones."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Main Education Card */}
          {educationData.map((edu, idx) => (
            <div key={idx} className="lg:col-span-7">
              <Card className="h-full border-purple-500/25 relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono text-purple-300 uppercase tracking-wider">
                          Undergraduate Degree
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {edu.degree}
                        </h3>
                      </div>
                    </div>
                    <Badge variant="purple" size="md">
                      {edu.branch}
                    </Badge>
                  </div>

                  {/* Institution & Year Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                    <div className="flex items-center gap-2.5 text-sm text-gray-300">
                      <Building className="w-4 h-4 text-purple-400 shrink-0" />
                      <span className="font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm text-gray-400">
                      <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                      <span>{edu.year}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {edu.description}
                  </p>

                  {/* Coursework Focus */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-400 flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                      Academic & Practical Focus
                    </span>
                    <div className="space-y-2">
                      {edu.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-sm text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-gray-500">
                  <span>Pranveer Singh Institute of Technology</span>
                  <span>Kanpur, India</span>
                </div>
              </Card>
            </div>
          ))}

          {/* Quick Academic Highlights side card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <Card className="flex-1 bg-gradient-to-b from-[#141724] to-[#0e101a] border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Data Science Specialization</h4>
                  <p className="text-xs text-gray-400">Second Year Focus Areas</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Structured curriculum prioritizing mathematical models, predictive algorithms, computational statistics, and database systems.
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-300">
                  <span className="text-purple-300 font-semibold block">Data Structures</span>
                  Fundamental logic & algorithms
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-300">
                  <span className="text-blue-300 font-semibold block">DBMS & SQL</span>
                  Relational schemas & querying
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-300">
                  <span className="text-indigo-300 font-semibold block">Machine Learning</span>
                  Supervised & model evaluation
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-gray-300">
                  <span className="text-emerald-300 font-semibold block">Python Analytics</span>
                  Pandas, NumPy, statistical graphs
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Section 8: Achievements */}
        <div className="pt-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <Badge variant="blue" size="md" icon={Trophy} className="mb-3 glow-pill">
              Milestones
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Key Achievements & Milestones
            </h3>
            <p className="text-sm text-gray-400 mt-2">
              Recognized student activities and milestones achieved throughout my college journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((item, aIdx) => {
              const Icon = getAchievementIcon(item.icon)
              return (
                <Card key={aIdx} className="hover:border-purple-500/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-purple-400 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base font-semibold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
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
