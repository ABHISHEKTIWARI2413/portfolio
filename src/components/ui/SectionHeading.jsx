import React from 'react'
import Badge from './Badge'

export default function SectionHeading({
  tag,
  tagIcon,
  title,
  accentTitle,
  subtitle,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center'

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        isCenter ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-3xl'
      } ${className}`}
    >
      {tag && (
        <div className={`mb-4 flex ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <Badge variant="lime" size="md" icon={tagIcon}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c9f31d] animate-pulse mr-1" />
            {tag}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Urbanist'] tracking-tight text-white mb-4 leading-tight">
        {title}{' '}
        {accentTitle && <span className="text-[#c9f31d]">{accentTitle}</span>}
      </h2>

      {subtitle && (
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed font-['Plus_Jakarta_Sans']">
          {subtitle}
        </p>
      )}
    </div>
  )
}
