import React from 'react'
import {
  Terminal,
  Database,
  Code2,
  GitBranch,
  Palette,
  Sparkles,
  Cpu,
} from 'lucide-react'
import { Container, SectionHeading, Card, Badge } from '../ui'

export default function Skills() {
  const skillsList = [
    {
      name: 'Python',
      domain: 'Core Programming',
      level: 'Proficient',
      icon: Terminal,
      description:
        'Data structures, statistical computation, scientific libraries, and algorithm implementation for analytical tasks.',
    },
    {
      name: 'SQL & DBMS',
      domain: 'Database Engineering',
      level: 'Verified',
      icon: Database,
      description:
        'Relational data modeling, complex SQL queries, aggregations, and performance-tuned database schemas.',
    },
    {
      name: 'Web Development',
      domain: 'Frontend & Web',
      level: 'Applied',
      icon: Code2,
      description:
        'Building responsive, fast, and accessible user interfaces with modern HTML5, CSS3, Tailwind CSS, and JavaScript.',
    },
    {
      name: 'Git & GitHub',
      domain: 'Version Control',
      level: 'Workflow Standard',
      icon: GitBranch,
      description:
        'Branching strategies, repository management, collaborative workflows, and deployment pipelines.',
    },
    {
      name: 'Figma & Canva',
      domain: 'Design & Prototyping',
      level: 'Proficient',
      icon: Palette,
      description:
        'Crafting modern UI wireframes, high-fidelity prototypes, brand design systems, and creative visual assets.',
    },
    {
      name: 'AI Tools & Framer',
      domain: 'Modern Workflow',
      level: 'Applied',
      icon: Sparkles,
      description:
        'Accelerating development, design, and productivity using Claude, ChatGPT, and Framer for modern digital creations.',
    },
  ]

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <Container size="lg">
        <SectionHeading
          tag="My Skills"
          tagIcon={Cpu}
          title="Experience The Best"
          accentTitle="Digital & Analytical Skills"
          subtitle="A comprehensive overview of confirmed technical disciplines, programming languages, and engineering tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsList.map((skill, index) => {
            const Icon = skill.icon

            return (
              <Card
                key={index}
                className="hover:border-[#c9f31d]/60 group transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Level */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#1c1c1c] border border-white/10 flex items-center justify-center text-[#c9f31d] group-hover:scale-105 group-hover:bg-[#c9f31d] group-hover:text-black transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="lime" size="sm">
                      {skill.level}
                    </Badge>
                  </div>

                  {/* Title & Domain */}
                  <span className="text-xs font-['Urbanist'] font-semibold text-gray-400 uppercase tracking-wider block mb-1">
                    {skill.domain}
                  </span>
                  <h3 className="text-2xl font-bold font-['Urbanist'] text-white mb-3 group-hover:text-[#c9f31d] transition-colors">
                    {skill.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Accent line */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">BTech Data Science</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9f31d]" />
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
