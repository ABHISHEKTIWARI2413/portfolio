import React from 'react'
import {
  FolderGit2,
  Gamepad2,
  Users2,
  ArrowUpRight,
} from 'lucide-react'
import { projects } from '../../data/portfolioData'
import { Container, SectionHeading, Card, Badge, Button } from '../ui'

export default function Projects() {
  const getProjectIcon = (id) => {
    switch (id) {
      case 'campusshare':
        return Users2
      case 'dusk-compound-game':
        return Gamepad2
      default:
        return FolderGit2
    }
  }

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <Container size="lg">
        <SectionHeading
          tag="Latest Work"
          tagIcon={FolderGit2}
          title="All Projects &"
          accentTitle="Live Deployments"
          subtitle="Explore deployed web platforms and interactive browser games engineered with modern full-stack architectures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const Icon = getProjectIcon(project.id)
            const number = `0${index + 1}.`

            return (
              <Card
                key={project.id}
                className="flex flex-col justify-between hover:border-[#c9f31d]/60 transition-all duration-300 group p-7 sm:p-8"
              >
                <div>
                  {/* Top Header Banner with Number & Live Pulse */}
                  <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-[#1c1c1c] to-[#0f0f0f] border border-white/[0.08] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center mb-6 group-hover:border-[#c9f31d]/30 transition-colors">
                    {/* Background subtle glow */}
                    <div className="absolute inset-0 bg-[#c9f31d]/5 pointer-events-none" />

                    <div className="w-16 h-16 rounded-2xl bg-[#090909] border border-white/10 flex items-center justify-center text-[#c9f31d] mb-3 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>

                    <span className="text-xs font-['Urbanist'] font-bold uppercase tracking-widest text-gray-400">
                      {project.type}
                    </span>

                    {/* Left Top Number like Xabed */}
                    <div className="absolute top-4 left-4 font-['Urbanist'] font-black text-2xl text-[#c9f31d]">
                      {number}
                    </div>

                    {/* Right Top Status */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="lime" size="sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c9f31d] animate-pulse mr-1" />
                        Live
                      </Badge>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-extrabold font-['Urbanist'] text-white mb-3 group-hover:text-[#c9f31d] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-['Urbanist'] font-bold">
                      Key Capabilities:
                    </span>
                    <ul className="space-y-1.5">
                      {project.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="text-xs text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9f31d] mt-1.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-3 py-1 rounded-full bg-white/[0.04] text-gray-300 border border-white/[0.08] font-['Urbanist'] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Full-width Electric Lime Launch Button */}
                  <div className="pt-2">
                    <Button
                      variant="lime"
                      size="md"
                      href={project.demoUrl}
                      target="_blank"
                      icon={ArrowUpRight}
                      iconPosition="right"
                      className="w-full justify-center"
                    >
                      Launch Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-xs text-gray-500 font-mono">
            * All featured projects are live and deployed online with verified public access.
          </p>
        </div>
      </Container>
    </section>
  )
}
