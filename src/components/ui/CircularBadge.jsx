import React from 'react'
import { ArrowDownRight } from 'lucide-react'

export default function CircularBadge({
  text = 'DATA SCIENCE • DEVELOPER • INNOVATION •',
  className = '',
}) {
  return (
    <div className={`relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center ${className}`}>
      {/* Spinning SVG with Circular Text */}
      <svg
        className="w-full h-full animate-spin-slow select-none pointer-events-none"
        viewBox="0 0 100 100"
      >
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[8.5px] font-['Urbanist'] font-bold tracking-[2.8px] uppercase fill-gray-400">
          <textPath href="#circlePath" startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>

      {/* Center glowing circular pill */}
      <div className="absolute w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#c9f31d] text-black flex items-center justify-center shadow-lg shadow-[#c9f31d]/30">
        <ArrowDownRight className="w-5 h-5 -rotate-45" />
      </div>
    </div>
  )
}
