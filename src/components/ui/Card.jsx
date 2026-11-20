import React from 'react'
import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  interactive = true,
  glowOnHover = false,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-card rounded-2xl p-6 sm:p-7 relative overflow-hidden ${
        glowOnHover ? 'hover:border-purple-500/40' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
