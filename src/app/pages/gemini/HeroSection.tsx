import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { useRef } from 'react';
import mascotImage from '../../../assets/19528fcd7fc876e73b17607bb4bfec4b047f8104.png';

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
    layoutEffect: false,
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#078EFA] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 50 - 25],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative h-full flex items-center justify-center px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
            className="text-center md:text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
                You Don't Have to <span className="text-[#078EFA]">Figure It Out</span> Alone.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
              className="text-2xl md:text-3xl text-white/90 mb-8"
            >
              Gemini helps you find your way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Sparkles className="inline-block w-6 h-6 text-[#078EFA] mr-2" />
              <span className="text-white/70 text-lg">Where Thoughts Become Reality</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl overflow-hidden border-4 border-[#078EFA]/30 shadow-[0_0_60px_rgba(7,142,250,0.3)]">
                <img
                  src="https://images.unsplash.com/photo-1758520145147-c30bc656f314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHN0dWR5aW5nJTIwYWxvbmUlMjBuaWdodCUyMGRlc2t8ZW58MXx8fHwxNzcxNzg5MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Student studying at night"
                  className="w-full h-full object-cover mix-blend-luminosity opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#078EFA]/30 via-[#AD89EB]/20 to-transparent" />
              </div>

              <motion.div
                className="absolute -right-8 top-1/3 w-40 h-40"
                initial={{ opacity: 0, scale: 0.5, x: 50 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  y: [0, -15, 0],
                }}
                transition={{
                  opacity: { duration: 1.5, delay: 1.5, ease: 'easeOut' },
                  scale: { duration: 1.5, delay: 1.5, ease: 'easeOut' },
                  x: { duration: 1.5, delay: 1.5, ease: 'easeOut' },
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2.5,
                  },
                }}
              >
                <div className="relative w-full h-full">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#078EFA] to-[#AD89EB] rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  <motion.div
                    className="relative w-full h-full flex items-center justify-center"
                    animate={{
                      rotate: [-2, 2, -2],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <img
                      src={mascotImage}
                      alt="Gemini Mascot"
                      className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(7,142,250,0.8)] relative z-10"
                    />
                  </motion.div>

                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-[#078EFA] rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [0, Math.cos((i * Math.PI) / 6) * 70],
                        y: [0, Math.sin((i * Math.PI) / 6) * 70],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: 'easeOut',
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2.5,
          duration: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[#078EFA]/70 text-sm tracking-wider uppercase">Scroll</span>
          <div className="w-6 h-10 border-2 border-[#078EFA]/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-[#078EFA] rounded-full"
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

