import React from 'react'
import { User, Sparkles, Brain, Code2, Target, ArrowRight } from 'lucide-react'
import { personalInfo } from '../../data/portfolioData'
import { Container, SectionHeading, Card, Badge, Button } from '../ui'

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'Data & AI Focus',
      description:
        'Passionate about turning raw data into actionable models and exploring modern machine learning architectures.',
      badge: 'Analytical',
      color: 'purple',
    },
    {
      icon: Target,
      title: 'Problem-Solving Mindset',
      description:
        'Driven to build practical software that solves real campus, financial safety, and everyday human challenges.',
      badge: 'Practical Impact',
      color: 'blue',
    },
    {
      icon: Code2,
      title: 'Student Innovation',
      description:
        'Actively designing and prototyping projects like CampusXchange and ScamShield AI while advancing in academics.',
      badge: 'Collaborative',
      color: 'indigo',
    },
  ]

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <Container>
        <SectionHeading
          tag="About Me"
          tagIcon={User}
          title="Passion for Data,"
          accentTitle="Drive for Innovation"
          subtitle="A look into my academic journey, technical curiosities, and the motivations driving my software projects."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Card */}
          <div className="lg:col-span-7 space-y-6">
            <Card className="border-purple-500/20 shadow-xl shadow-purple-950/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Who I Am</h3>
                  <p className="text-xs text-purple-300 font-mono">BTech Data Science • PSIT Kanpur</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index} className="text-gray-300/90">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs text-gray-300 font-medium">Currently exploring Machine Learning & Web Solutions</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  href="#projects"
                  icon={ArrowRight}
                  iconPosition="right"
                >
                  View My Projects
                </Button>
              </div>
            </Card>
          </div>

          {/* Pillars & Attributes */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <Card
                  key={index}
                  className="hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-purple-400 shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-semibold text-white">{item.title}</h4>
                        <Badge variant={item.color} size="sm">
                          {item.badge}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
