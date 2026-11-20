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
        isCenter ? 'text-center mx-auto max-w-2xl' : 'text-left max-w-2xl'
      } ${className}`}
    >
      {tag && (
        <div className={`mb-4 flex ${isCenter ? 'justify-center' : 'justify-start'}`}>
          <Badge variant="purple" size="md" icon={tagIcon} className="glow-pill">
            {tag}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
        {title}{' '}
        {accentTitle && <span className="text-gradient-accent">{accentTitle}</span>}
      </h2>

      {subtitle && (
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}

