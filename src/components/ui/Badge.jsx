import React from 'react'

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  icon: Icon,
  className = '',
  ...props
}) {
  const baseClasses = 'inline-flex items-center font-medium rounded-full select-none'

  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 gap-2',
  }

  const variantClasses = {
    default: 'bg-white/5 text-gray-300 border border-white/10',
    purple: 'bg-purple-500/10 text-purple-300 border border-purple-500/25',
    blue: 'bg-blue-500/10 text-blue-300 border border-blue-500/25',
    indigo: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/25',
    emerald: 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/25',
    outline: 'border border-gray-700 text-gray-400',
  }

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size] || sizeClasses.md} ${
        variantClasses[variant] || variantClasses.default
      } ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  )
}

