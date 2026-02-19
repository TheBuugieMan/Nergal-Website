import { motion } from 'motion/react';

export function ConstellationLines() {
  // Define constellation points and connections
  const constellations = [
    // Left side constellation
    { 
      points: [
        { x: 15, y: 20 },
        { x: 20, y: 35 },
        { x: 10, y: 50 },
        { x: 25, y: 60 },
      ]
    },
    // Right side constellation
    {
      points: [
        { x: 85, y: 25 },
        { x: 90, y: 40 },
        { x: 80, y: 55 },
        { x: 88, y: 70 },
      ]
    },
    // Top constellation
    {
      points: [
        { x: 40, y: 15 },
        { x: 50, y: 10 },
        { x: 60, y: 15 },
      ]
    },
  ];

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      {constellations.map((constellation, cIndex) => (
        <g key={cIndex}>
          {/* Draw lines between points */}
          {constellation.points.map((point, i) => {
            if (i === constellation.points.length - 1) return null;
            const nextPoint = constellation.points[i + 1];
            return (
              <motion.line
                key={i}
                x1={`${point.x}%`}
                y1={`${point.y}%`}
                x2={`${nextPoint.x}%`}
                y2={`${nextPoint.y}%`}
                stroke="rgba(255, 215, 0, 0.3)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 2,
                  delay: cIndex * 0.5 + i * 0.3,
                  ease: "easeInOut"
                }}
              />
            );
          })}
          
          {/* Draw star points */}
          {constellation.points.map((point, i) => (
            <motion.g key={`star-${i}`}>
              <motion.circle
                cx={`${point.x}%`}
                cy={`${point.y}%`}
                r="3"
                fill="#FFD700"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: cIndex * 0.5 + i * 0.3 + 0.5,
                }}
              />
              {/* Glow effect */}
              <motion.circle
                cx={`${point.x}%`}
                cy={`${point.y}%`}
                r="8"
                fill="rgba(255, 215, 0, 0.2)"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                  duration: 2,
                  delay: cIndex * 0.5 + i * 0.3 + 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.g>
          ))}
        </g>
      ))}
    </svg>
  );
}
