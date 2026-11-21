import React from 'react'
import { Award, ShieldCheck } from 'lucide-react'
import { certifications } from '../../data/portfolioData'
import { Container, SectionHeading, Card, Badge } from '../ui'

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28 relative">
      <Container size="lg">
        <SectionHeading
          tag="Certifications"
          tagIcon={Award}
          title="Verified Learning &"
          accentTitle="Course Certifications"
          subtitle="Confirmed certifications reflecting dedication to continuous learning and fundamental skill acquisition."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="flex flex-col justify-between hover:border-[#c9f31d]/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-[#1d1d1d] border border-white/10 flex items-center justify-center text-[#c9f31d]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <Badge variant="lime" size="sm">
                    Verified
                  </Badge>
                </div>

                <h3 className="text-xl font-bold font-['Urbanist'] text-white mb-1.5 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-sm text-[#c9f31d] font-semibold font-['Urbanist'] mb-4">
                  {cert.issuer}
                </p>

                <div className="space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-gray-500 font-['Urbanist'] font-bold">
                    Competencies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 rounded-lg bg-white/[0.04] text-gray-300 border border-white/[0.06] font-['Plus_Jakarta_Sans']"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
