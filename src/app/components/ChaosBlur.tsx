import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function ChaosBlur() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="relative w-[600px] h-[600px] md:w-[700px] md:h-[700px]"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: "spring", stiffness: 30, damping: 20 }}
    >
      {/* Chaotic Energy Core */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 215, 0, 0.8) 0%, rgba(255, 140, 0, 0.6) 20%, rgba(139, 0, 0, 0.4) 40%, rgba(255, 215, 0, 0.2) 60%, transparent 80%)',
          filter: 'blur(60px)',
        }}
        animate={{
          scale: [1, 1.3, 0.9, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Swirling chaos layers */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${
              i % 2 === 0 
                ? 'rgba(255, 215, 0, 0.3) 0%, rgba(139, 0, 0, 0.2) 50%, transparent 70%'
                : 'rgba(139, 0, 0, 0.3) 0%, rgba(255, 140, 0, 0.2) 50%, transparent 70%'
            })`,
            filter: `blur(${40 + i * 10}px)`,
            transform: `scale(${1 + i * 0.1})`,
          }}
          animate={{
            rotate: i % 2 === 0 ? [0, 360] : [360, 0],
            scale: [1 + i * 0.1, 1.2 + i * 0.1, 1 + i * 0.1],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Pulsing energy waves */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`wave-${i}`}
          className="absolute inset-0 rounded-full border-2"
          style={{
            borderColor: i % 2 === 0 ? 'rgba(255, 215, 0, 0.3)' : 'rgba(139, 0, 0, 0.3)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 2.5, 3],
            opacity: [0.6, 0.3, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Energy particles */}
      {[...Array(30)].map((_, i) => {
        const angle = (i * Math.PI * 2) / 30;
        const radius = 150 + Math.random() * 100;
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-3 h-3 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              background: i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF8C00' : '#8B0000',
              boxShadow: `0 0 12px ${i % 3 === 0 ? '#FFD700' : i % 3 === 1 ? '#FF8C00' : '#8B0000'}`,
            }}
            animate={{
              x: [
                0,
                Math.cos(angle) * radius,
                Math.cos(angle + Math.PI) * radius * 1.5,
                0
              ],
              y: [
                0,
                Math.sin(angle) * radius,
                Math.sin(angle + Math.PI) * radius * 1.5,
                0
              ],
              opacity: [0, 1, 0.8, 0],
              scale: [0, 1.5, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Chaotic lightning/energy streaks */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 12;
          return (
            <motion.line
              key={`streak-${i}`}
              x1="50%"
              y1="50%"
              x2={`${50 + Math.cos(angle) * 40}%`}
              y2={`${50 + Math.sin(angle) * 40}%`}
              stroke={i % 2 === 0 ? '#FFD700' : '#8B0000'}
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Central bright core */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, #FFD700 0%, #FF8C00 40%, transparent 70%)',
          boxShadow: '0 0 80px rgba(255, 215, 0, 0.8), 0 0 120px rgba(255, 140, 0, 0.6)',
        }}
        animate={{
          scale: [1, 1.5, 1.2, 1],
          opacity: [0.8, 1, 0.9, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
