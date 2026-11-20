import React from 'react'
import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'left',
  download,
  target,
  rel,
  className = '',
  disabled = false,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none rounded-xl'

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  }

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white shadow-lg shadow-purple-600/20 hover:shadow-purple-600/35 hover:brightness-110 active:scale-[0.98]',
    secondary:
      'bg-white/[0.06] hover:bg-white/[0.1] text-gray-200 hover:text-white border border-white/10 hover:border-white/20 backdrop-blur-md active:scale-[0.98]',
    outline:
      'border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:border-purple-500/50 active:scale-[0.98]',
    ghost:
      'text-gray-400 hover:text-white hover:bg-white/5 active:scale-[0.98]',
  }

  const computedClassName = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${
    variantClasses[variant] || variantClasses.primary
  } ${className}`

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  )

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:')
    return (
      <motion.a
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        download={download}
        target={target || (isExternal && !href.startsWith('mailto:') ? '_blank' : undefined)}
        rel={rel || (isExternal ? 'noopener noreferrer' : undefined)}
        className={computedClassName}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.98 }}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={computedClassName}
      {...props}
    >
      {content}
    </motion.button>
  )
}
