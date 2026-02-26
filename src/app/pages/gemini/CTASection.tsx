import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#078EFA]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: 'spring' }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <div className="relative w-32 h-32">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#078EFA] to-[#AD89EB] rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <div className="absolute inset-4 bg-gradient-to-br from-[#078EFA] to-[#AD89EB] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(7,142,250,0.9)] border-4 border-white/20">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-[#078EFA]">Start Small.</span>
          </h2>
          <h2 className="text-5xl md:text-8xl font-bold mb-12 leading-tight">
            Ignite <span className="text-[#078EFA]">Exponential</span> Learning.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto"
        >
          Every question you ask. Every idea you explore. Every challenge you overcome.
          <br />
          <span className="text-[#078EFA]">It all starts with one curious mind.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 flex-wrap relative"
        >
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${50 + Math.cos((i * Math.PI) / 4) * 150}%`,
                top: `${50 + Math.sin((i * Math.PI) / 4) * 150}%`,
              }}
              animate={{
                scale: [0, 1, 0],
                rotate: [0, 180, 360],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <Sparkles className="w-4 h-4 text-[#078EFA]" />
            </motion.div>
          ))}

          <motion.button
            type="button"
            whileHover={{
              scale: 1.05,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-[#078EFA] to-[#AD89EB] rounded-full shadow-[0_0_40px_rgba(7,142,250,0.5)] hover:shadow-[0_0_80px_rgba(7,142,250,0.8)] transition-all duration-300 overflow-hidden"
          >
            <motion.div className="absolute inset-0 bg-gradient-to-r from-[#AD89EB] to-[#078EFA] opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-500" />

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />

            <span className="relative flex items-center gap-2">
              Explore Gemini
              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-lg text-[#078EFA]/60 tracking-widest uppercase mb-4">Where Thoughts Become Reality</p>
          <div className="flex items-center justify-center gap-3">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="w-5 h-5 text-[#078EFA]" />
            </motion.div>
            <p className="text-3xl font-bold text-[#078EFA]">Google Gemini</p>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="w-5 h-5 text-[#078EFA]" />
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.1, 0.6, 0.1],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4 + i * 0.3,
                repeat: Infinity,
                delay: i * 0.3,
                ease: 'easeInOut',
              }}
            >
              <Sparkles className="w-6 h-6 text-[#078EFA]/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

