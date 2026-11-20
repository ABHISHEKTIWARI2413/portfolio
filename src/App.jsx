import React from 'react'
import { Sparkles, ArrowRight, Download, Mail, Code2, Database, Award, Layers } from 'lucide-react'
import { Container, Button, Card, Badge, SectionHeading } from './components/ui'

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090d] text-gray-200 relative selection:bg-purple-500/30 selection:text-purple-200">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full" />
        <div className="absolute top-[40%] -right-40 w-[500px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[500px] bg-indigo-600/10 blur-[140px] rounded-full" />
      </div>

      <main className="relative z-10 py-16 sm:py-24 space-y-20">
        <Container>
          <SectionHeading
            tag="Design System Ready"
            tagIcon={Sparkles}
            title="Abhishek Tiwari"
            accentTitle="Design System"
            subtitle="Premium, dark-mode design system with typography, color tokens, and accessible reusable components."
          />

          {/* Interactive Button Showcase */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button variant="primary" icon={ArrowRight} iconPosition="right">
              Explore My Work
            </Button>
            <Button variant="secondary" icon={Download}>
              Download Resume
            </Button>
            <Button variant="outline" icon={Mail}>
              Contact Me
            </Button>
            <Button variant="ghost">
              Learn More
            </Button>
          </div>

          {/* Card & Badge Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card glowOnHover>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Modern Typography</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Refined hierarchy with balanced weights, responsive scales, and high-contrast text rendering.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="purple">Headings</Badge>
                <Badge variant="default">Body Sans</Badge>
              </div>
            </Card>

            <Card glowOnHover>
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Glassmorphism Cards</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Multi-layered glass cards featuring backdrop blurs, subtle gradient borders, and soft elevation.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="blue">Backdrop Blur</Badge>
                <Badge variant="indigo">Hover Lift</Badge>
              </div>
            </Card>

            <Card glowOnHover>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Component Library</h3>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                Modular and reusable UI building blocks crafted for clean integration across all portfolio sections.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="emerald">Accessible</Badge>
                <Badge variant="outline">Responsive</Badge>
              </div>
            </Card>
          </div>
        </Container>
      </main>
    </div>
  )
}
