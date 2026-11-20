import React from 'react'
import {
  FolderGit2,
  ShieldAlert,
  Gamepad2,
  Users2,
  Info,
} from 'lucide-react'
import { projects } from '../../data/portfolioData'
import { Container, SectionHeading, Card, Badge, Button, GithubIcon } from '../ui'

export default function Projects() {
  const getProjectIcon = (id) => {
    switch (id) {
      case 'campusxchange':
        return Users2
      case 'scamshield-ai':
        return ShieldAlert
      case 'project-rush':
        return Gamepad2
      default:
        return FolderGit2
    }
  }

  const handleDemoClick = (e, project) => {
    e.preventDefault()
    alert(`"${project.title}" is currently in ${project.status.toLowerCase()} phase. In compliance with verified portfolio standards, no fabricated live links are used.`)
  }

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <Container>
        <SectionHeading
          tag="Featured Projects"
          tagIcon={FolderGit2}
          title="Innovative Concepts &"
          accentTitle="Active Builds"
          subtitle="Explore selected academic, campus-focused, and machine learning software concepts developed with modern architectures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const Icon = getProjectIcon(project.id)

            return (
              <Card
                key={project.id}
                className="flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div>
                  {/* Visual Header / Concept Banner */}
                  <div className="w-full h-44 rounded-xl bg-gradient-to-br from-[#181a28] to-[#0f111a] border border-white/[0.08] relative overflow-hidden flex flex-col items-center justify-center p-6 text-center mb-6 group-hover:border-purple-500/30 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-blue-600/10 pointer-events-none" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-[#090b14] border border-white/10 flex items-center justify-center text-purple-400 mb-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="text-xs font-mono text-gray-400">
                      {project.type}
                    </span>

                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" size="sm" className="bg-[#090a10]/80 backdrop-blur-sm border-white/10 text-gray-300">
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-mono">
                      Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {project.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="text-xs text-gray-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
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
                      <Badge key={tIdx} variant="default" size="sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2.5">
                    <Button
                      variant="secondary"
                      size="sm"
                      href={project.githubUrl}
                      target="_blank"
                      icon={GithubIcon}
                      className="flex-1 justify-center"
                    >
                      Repository
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => handleDemoClick(e, project)}
                      icon={Info}
                      className="flex-1 justify-center text-gray-300"
                    >
                      Status
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 font-mono">
            * All project entries represent genuine student concepts and active builds. In compliance with portfolio guidelines, unfinished concepts are not falsely claimed as deployed.
          </p>
        </div>
      </Container>
    </section>
  )
}
