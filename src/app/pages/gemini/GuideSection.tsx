import { motion, useScroll, useTransform } from 'motion/react';
import { Compass } from 'lucide-react';
import { useRef } from 'react';
import mascotImage from '../../../assets/19528fcd7fc876e73b17607bb4bfec4b047f8104.png';

export function GuideSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.9]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-gradient-to-b from-[#0a0a0a] via-[#0a0516] to-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(7,142,250,0.2),rgba(173,137,235,0.15),transparent_60%)]" />

      <motion.div style={{ scale, opacity }} className="relative max-w-6xl mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, type: 'spring', bounce: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <motion.div className="relative">
            <div className="relative w-80 h-80">
              <motion.div
                className="absolute inset-[-40%] bg-gradient-to-br from-[#078EFA] to-[#AD89EB] rounded-full blur-[80px]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.div
                className="absolute inset-[-20%] bg-gradient-to-br from-[#AD89EB] to-[#078EFA] rounded-full blur-[60px]"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />

              <motion.div
                className="relative w-full h-full flex items-center justify-center"
                animate={{
                  y: [0, -20, 0],
                  rotate: [-3, 3, -3],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                  rotate: {
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  },
                }}
              >
                <img
                  src={mascotImage}
                  alt="Your Gemini Guide"
                  className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(7,142,250,0.9)] relative z-10"
                />
              </motion.div>

              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                  animate={{
                    x: [0, Math.cos((i * Math.PI) / 8) * 180, Math.cos((i * Math.PI) / 8) * 200],
                    y: [0, Math.sin((i * Math.PI) / 8) * 180, Math.sin((i * Math.PI) / 8) * 200],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Meet Your <span className="text-[#078EFA]">Personal Guide</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl text-white"
            >
              Gemini isn't just a tool—it's your learning companion.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-white/80"
            >
              It helps you break down complex problems, discover new perspectives, and build confidence in your learning
              journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 pt-8"
            >
              <div className="flex items-center gap-2 bg-[#078EFA]/20 px-6 py-3 rounded-full border-2 border-[#078EFA]/40">
                <Compass className="w-5 h-5 text-[#078EFA]" />
                <span className="text-white">Always there to guide</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

