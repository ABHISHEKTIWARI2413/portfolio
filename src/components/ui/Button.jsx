import React from 'react'
import { motion } from 'framer-motion'

export default function Button({
  children,
  variant = 'lime',
  size = 'md',
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  download,
  target,
  rel,
  className = '',
  disabled = false,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center font-["Urbanist"] font-bold transition-all duration-300 select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed rounded-full group'

  const sizeClasses = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2.5',
    lg: 'text-base px-8 py-3.5 gap-3',
  }

  const variantClasses = {
    lime: 'bg-[#c9f31d] text-black hover:bg-[#bce617] shadow-lg shadow-[#c9f31d]/20 active:scale-[0.98]',
    primary: 'bg-[#c9f31d] text-black hover:bg-[#bce617] shadow-lg shadow-[#c9f31d]/20 active:scale-[0.98]',
    secondary: 'bg-[#161616] text-white hover:text-white border border-white/10 hover:border-[#c9f31d]/50 hover:bg-[#1e1e1e] active:scale-[0.98]',
    dark: 'bg-[#161616] text-white hover:text-white border border-white/10 hover:border-[#c9f31d]/50 hover:bg-[#1e1e1e] active:scale-[0.98]',
    outline: 'border border-[#c9f31d]/40 text-[#c9f31d] hover:bg-[#c9f31d]/10 hover:border-[#c9f31d] active:scale-[0.98]',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/5 active:scale-[0.98]',
  }

  const computedClassName = `${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${
    variantClasses[variant] || variantClasses.lime
  } ${className}`

  const isLime = variant === 'lime' || variant === 'primary'

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <span className={`inline-flex items-center justify-center transition-transform group-hover:-translate-x-0.5`}>
          <Icon className="w-4 h-4 shrink-0" />
        </span>
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <span
          className={`inline-flex items-center justify-center rounded-full p-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
            isLime ? 'bg-black/10' : 'bg-white/10 text-white'
          }`}
        >
          <Icon className="w-3.5 h-3.5 shrink-0" />
        </span>
      )}
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
