import React, { useState } from 'react'
import {
  Palette,
  Eye,
  Sparkles,
  CheckCircle2,
  X,
  ExternalLink,
} from 'lucide-react'
import { graphicDesigns } from '../../data/portfolioData'
import { Container, SectionHeading, Card, Badge, Button } from '../ui'

export default function GraphicDesign() {
  const [selectedDesign, setSelectedDesign] = useState(null)

  return (
    <section id="designs" className="py-20 sm:py-28 relative">
      <Container size="lg">
        <SectionHeading
          tag="Creative Portfolio"
          tagIcon={Palette}
          title="Graphic Design &"
          accentTitle="Visual Media"
          subtitle="Showcasing commercial advertisements, promotional posters, and digital branding assets designed with Canva, Figma, and AI creative tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {graphicDesigns.map((design, index) => {
            const number = `0${index + 1}.`

            return (
              <Card
                key={design.id}
                className="flex flex-col justify-between hover:border-[#c9f31d]/60 transition-all duration-300 group p-6 sm:p-7"
              >
                <div>
                  {/* Visual Banner Preview */}
                  <div className="relative w-full h-52 rounded-2xl bg-[#121212] border border-white/[0.08] overflow-hidden mb-6 group-hover:border-[#c9f31d]/40 transition-colors">
                    <img
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Number Overlay */}
                    <div className="absolute top-3 left-3 font-['Urbanist'] font-black text-xl text-[#c9f31d] bg-[#0c0c0c]/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                      {number}
                    </div>

                    {/* Tool Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="lime" size="sm">
                        <Sparkles className="w-3 h-3 mr-1" />
                        {design.badge}
                      </Badge>
                    </div>

                    {/* Quick View Button on Hover */}
                    <button
                      type="button"
                      onClick={() => setSelectedDesign(design)}
                      className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-['Urbanist'] font-bold text-sm cursor-pointer"
                    >
                      <Eye className="w-5 h-5 text-[#c9f31d]" />
                      <span>View Details</span>
                    </button>
                  </div>

                  {/* Category Type */}
                  <span className="text-xs font-['Urbanist'] font-semibold text-[#c9f31d] uppercase tracking-wider block mb-2">
                    {design.type}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-['Urbanist'] text-white mb-3 group-hover:text-[#c9f31d] transition-colors leading-snug">
                    {design.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-['Plus_Jakarta_Sans']">
                    {design.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-['Urbanist'] font-bold">
                      Design Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {design.highlights.map((highlight, hIdx) => (
                        <li
                          key={hIdx}
                          className="text-xs text-gray-300 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#c9f31d] mt-0.5 shrink-0" />
                          <span className="font-['Plus_Jakarta_Sans']">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Tool Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-white/[0.06]">
                    {design.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-gray-300 border border-white/[0.06] font-['Plus_Jakarta_Sans']"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button
                    variant="dark"
                    size="sm"
                    onClick={() => setSelectedDesign(design)}
                    icon={Eye}
                    iconPosition="right"
                    className="w-full justify-center text-xs"
                  >
                    Explore Graphic
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>

      {/* Modal Dialog for Design Detail Preview */}
      {selectedDesign && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedDesign(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-8 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedDesign(null)}
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 rounded-full bg-[#1c1c1c] border border-white/10 text-gray-400 hover:text-white hover:border-[#c9f31d] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden border border-white/10 mb-6 bg-[#090909]">
              <img
                src={selectedDesign.image}
                alt={selectedDesign.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Content */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Badge variant="lime" size="sm">
                  {selectedDesign.type}
                </Badge>
                <span className="text-xs text-gray-400 font-mono">
                  {selectedDesign.badge}
                </span>
              </div>

              <h3 className="text-2xl font-bold font-['Urbanist'] text-white">
                {selectedDesign.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed font-['Plus_Jakarta_Sans']">
                {selectedDesign.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-['Urbanist'] font-bold mb-2">
                  Design Specifications & Techniques:
                </h4>
                <ul className="space-y-2">
                  {selectedDesign.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#c9f31d] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {selectedDesign.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-[#1a1a1a] text-gray-300 border border-white/10 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Button
                  variant="lime"
                  size="sm"
                  onClick={() => setSelectedDesign(null)}
                  icon={ExternalLink}
                  iconPosition="right"
                >
                  Close Preview
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
