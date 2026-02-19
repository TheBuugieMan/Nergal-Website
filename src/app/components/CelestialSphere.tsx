import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function CelestialSphere() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]"
      animate={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      transition={{ type: "spring", stiffness: 50, damping: 30 }}
    >
      {/* Outer atmospheric glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 0, 0, 0.3) 0%, rgba(255, 215, 0, 0.1) 40%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Rotating ring */}
      <motion.div
        className="absolute inset-12 rounded-full border border-[#FFD700] opacity-20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Main sphere */}
      <motion.div
        className="absolute inset-16 rounded-full overflow-hidden"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #FFD700 0%, #ff8c00 30%, #8B0000 60%, #2a0505 100%)',
          boxShadow: `
            0 0 100px rgba(255, 215, 0, 0.4),
            inset -30px -30px 80px rgba(0, 0, 0, 0.6),
            inset 30px 30px 60px rgba(255, 215, 0, 0.1)
          `,
        }}
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Surface texture - crater-like shadows */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 60 + 40}px`,
                height: `${Math.random() * 60 + 40}px`,
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`,
                background: 'radial-gradient(circle, rgba(0, 0, 0, 0.3) 0%, transparent 70%)',
              }}
              animate={{
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Bright crimson glow spots */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 60% 40%, rgba(139, 0, 0, 0.6) 0%, transparent 40%)',
          }}
          animate={{
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Inner crimson glow */}
      <motion.div
        className="absolute inset-24 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 0, 0, 0.5) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1.3, 0.9, 1.3],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orbiting particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FFD700] rounded-full"
          style={{
            left: '50%',
            top: '50%',
            boxShadow: '0 0 8px rgba(255, 215, 0, 0.8)',
          }}
          animate={{
            x: [
              0,
              Math.cos((i * Math.PI * 2) / 12) * 280,
              Math.cos((i * Math.PI * 2) / 12 + Math.PI) * 280,
              0
            ],
            y: [
              0,
              Math.sin((i * Math.PI * 2) / 12) * 280,
              Math.sin((i * Math.PI * 2) / 12 + Math.PI) * 280,
              0
            ],
            opacity: [0, 1, 1, 0],
            scale: [0, 1.2, 1.2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
}
