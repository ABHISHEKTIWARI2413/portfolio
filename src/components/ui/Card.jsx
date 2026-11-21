import React from 'react'
import { motion } from 'framer-motion'

export default function Card({
  children,
  className = '',
  glowOnHover = false,
  ...props
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`card-xabed p-6 sm:p-8 relative overflow-hidden ${
        glowOnHover ? 'hover:border-[#c9f31d]/60' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
