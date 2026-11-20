import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Terminal } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.2),rgba(255,255,255,0))]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl text-center space-y-6"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <span>Task 1 Initialized</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Abhishek Tiwari Portfolio
        </h1>

        <p className="text-gray-400 text-base sm:text-lg">
          Data Science Student | Exploring AI, Technology & Innovation
        </p>

        <div className="flex items-center justify-center gap-2 text-xs font-mono text-gray-500">
          <Terminal className="w-3.5 h-3.5" />
          <span>React + Vite + Tailwind CSS + Framer Motion</span>
        </div>
      </motion.div>
    </div>
  )
}
