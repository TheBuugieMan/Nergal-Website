import { motion } from 'motion/react';

export function AnimatedHands() {
  return (
    <>
      {/* Left Hand - SVG silhouette */}
      <motion.div
        className="absolute left-0 bottom-0 w-[40%] md:w-[35%] h-[60vh] pointer-events-none"
        initial={{ x: -200, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1,
          y: [0, -20, 0],
        }}
        transition={{
          x: { duration: 1.5, ease: "easeOut" },
          opacity: { duration: 1.5, ease: "easeOut" },
          y: { 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          },
        }}
        style={{ zIndex: 5 }}
      >
        <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="handGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 0, 0, 0.9)" />
              <stop offset="50%" stopColor="rgba(20, 20, 20, 0.8)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0.9)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Palm and fingers reaching upward */}
          <g filter="url(#glow)">
            {/* Palm base */}
            <motion.path
              d="M 80 600 L 60 580 L 50 520 L 55 460 L 70 420 L 100 400 L 200 405 L 230 420 L 240 460 L 235 520 L 220 580 L 200 600 Z"
              fill="url(#handGradientLeft)"
              stroke="rgba(255, 215, 0, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            
            {/* Thumb */}
            <motion.path
              d="M 70 420 L 55 380 L 50 340 L 55 300 L 70 270 L 95 260 L 120 270 L 135 300 L 135 340 L 125 380 L 100 400 Z"
              fill="url(#handGradientLeft)"
              stroke="rgba(255, 215, 0, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
            
            {/* Index finger */}
            <motion.path
              d="M 105 405 L 110 350 L 115 280 L 120 200 L 125 140 L 130 100 L 140 80 L 155 75 L 170 80 L 175 100 L 172 140 L 168 200 L 162 280 L 155 350 L 150 405 Z"
              fill="url(#handGradientLeft)"
              stroke="rgba(255, 215, 0, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
            
            {/* Middle finger */}
            <motion.path
              d="M 145 405 L 150 340 L 155 260 L 160 180 L 165 110 L 170 60 L 175 30 L 185 15 L 200 10 L 215 15 L 220 30 L 218 60 L 215 110 L 210 180 L 203 260 L 195 340 L 190 405 Z"
              fill="url(#handGradientLeft)"
              stroke="rgba(255, 215, 0, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.9 }}
            />
            
            {/* Ring finger */}
            <motion.path
              d="M 185 405 L 190 350 L 195 280 L 200 210 L 205 150 L 210 110 L 215 85 L 225 70 L 240 65 L 255 70 L 260 85 L 258 110 L 255 150 L 250 210 L 243 280 L 235 350 L 228 405 Z"
              fill="url(#handGradientLeft)"
              stroke="rgba(255, 215, 0, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.0 }}
            />
            
            {/* Pinky */}
            <motion.path
              d="M 220 405 L 225 370 L 230 320 L 235 260 L 240 210 L 245 180 L 250 160 L 260 145 L 275 140 L 290 145 L 295 160 L 293 180 L 290 210 L 285 260 L 278 320 L 270 370 L 263 405 Z"
              fill="url(#handGradientLeft)"
              stroke="rgba(255, 215, 0, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.1 }}
            />

            {/* Subtle golden highlights */}
            <motion.ellipse
              cx="140"
              cy="450"
              rx="40"
              ry="60"
              fill="rgba(255, 215, 0, 0.05)"
              animate={{
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>
      </motion.div>

      {/* Right Hand - mirrored */}
      <motion.div
        className="absolute right-0 bottom-0 w-[40%] md:w-[35%] h-[60vh] pointer-events-none"
        initial={{ x: 200, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1,
          y: [0, -25, 0],
        }}
        transition={{
          x: { duration: 1.5, ease: "easeOut" },
          opacity: { duration: 1.5, ease: "easeOut" },
          y: { 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1.5
          },
        }}
        style={{ zIndex: 5, transform: 'scaleX(-1)' }}
      >
        <svg viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="handGradientRight" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(0, 0, 0, 0.9)" />
              <stop offset="50%" stopColor="rgba(20, 20, 20, 0.8)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0.9)" />
            </linearGradient>
          </defs>
          
          <g filter="url(#glow)">
            <motion.path
              d="M 80 600 L 60 580 L 50 520 L 55 460 L 70 420 L 100 400 L 200 405 L 230 420 L 240 460 L 235 520 L 220 580 L 200 600 Z"
              fill="url(#handGradientRight)"
              stroke="rgba(255, 215, 0, 0.2)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.6 }}
            />
            <motion.path
              d="M 70 420 L 55 380 L 50 340 L 55 300 L 70 270 L 95 260 L 120 270 L 135 300 L 135 340 L 125 380 L 100 400 Z"
              fill="url(#handGradientRight)"
              stroke="rgba(255, 215, 0, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8 }}
            />
            <motion.path
              d="M 105 405 L 110 350 L 115 280 L 120 200 L 125 140 L 130 100 L 140 80 L 155 75 L 170 80 L 175 100 L 172 140 L 168 200 L 162 280 L 155 350 L 150 405 Z"
              fill="url(#handGradientRight)"
              stroke="rgba(255, 215, 0, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.9 }}
            />
            <motion.path
              d="M 145 405 L 150 340 L 155 260 L 160 180 L 165 110 L 170 60 L 175 30 L 185 15 L 200 10 L 215 15 L 220 30 L 218 60 L 215 110 L 210 180 L 203 260 L 195 340 L 190 405 Z"
              fill="url(#handGradientRight)"
              stroke="rgba(255, 215, 0, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.0 }}
            />
            <motion.path
              d="M 185 405 L 190 350 L 195 280 L 200 210 L 205 150 L 210 110 L 215 85 L 225 70 L 240 65 L 255 70 L 260 85 L 258 110 L 255 150 L 250 210 L 243 280 L 235 350 L 228 405 Z"
              fill="url(#handGradientRight)"
              stroke="rgba(255, 215, 0, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.1 }}
            />
            <motion.path
              d="M 220 405 L 225 370 L 230 320 L 235 260 L 240 210 L 245 180 L 250 160 L 260 145 L 275 140 L 290 145 L 295 160 L 293 180 L 290 210 L 285 260 L 278 320 L 270 370 L 263 405 Z"
              fill="url(#handGradientRight)"
              stroke="rgba(255, 215, 0, 0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            />
            <motion.ellipse
              cx="140"
              cy="450"
              rx="40"
              ry="60"
              fill="rgba(255, 215, 0, 0.05)"
              animate={{
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        </svg>
      </motion.div>
    </>
  );
}
