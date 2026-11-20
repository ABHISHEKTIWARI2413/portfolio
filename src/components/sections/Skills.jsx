import React from 'react'
import { Cpu, Terminal, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react'
import { skillCategories } from '../../data/portfolioData'
import { Container, SectionHeading, Card, Badge } from '../ui'

export default function Skills() {
  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming':
        return Terminal
      case 'Data Science':
        return Database
      case 'Tools & Environment':
        return Wrench
      case 'AI & Technology':
        return Sparkles
      default:
        return Cpu
    }
  }

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          tag="Technical Skills"
          tagIcon={Cpu}
          title="Disciplined Foundations,"
          accentTitle="Modern Tooling"
          subtitle="Confirmed technical proficiencies organized by domain. Reflecting verified coursework and active development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((group, index) => {
            const Icon = getCategoryIcon(group.category)

            return (
              <Card
                key={index}
                className="hover:border-purple-500/35 transition-all duration-300 relative group"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                        {group.category}
                      </h3>
                      <p className="text-xs text-gray-400">{group.description}</p>
                    </div>
                  </div>
                  <Badge variant={group.color} size="sm">
                    {group.skills.length} Skills
                  </Badge>
                </div>

                {/* Skill Items List */}
                <div className="space-y-3 mt-4">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                        <span className="text-sm font-medium text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.05]">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            )
          })}
        </div>

        {/* PRD Compliance Notice / Honest Disclaimer */}
        <div className="mt-10 max-w-xl mx-auto text-center">
          <p className="text-xs text-gray-500 font-mono">
            * Note: Skills displayed reflect verified coursework, hands-on practice, and ongoing learning milestones without false seniority claims.
          </p>
        </div>
      </Container>
    </section>
  )
}
