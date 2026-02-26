import { motion } from 'motion/react';
import { useState } from 'react';
import { Type, Image, Volume2, Video, Code } from 'lucide-react';

const capabilities = [
  {
    icon: Type,
    title: 'Text',
    description: 'Ask questions, get explanations, brainstorm ideas',
    color: 'from-[#078EFA] to-[#078EFA]',
    bgColor: 'bg-[#078EFA]/10',
    borderColor: 'border-[#078EFA]/30',
    hoverBg: 'hover:bg-[#078EFA]/20',
  },
  {
    icon: Image,
    title: 'Image',
    description: 'Upload diagrams, analyze visual content, get insights',
    color: 'from-[#AD89EB] to-[#078EFA]',
    bgColor: 'bg-[#AD89EB]/10',
    borderColor: 'border-[#AD89EB]/30',
    hoverBg: 'hover:bg-[#AD89EB]/20',
  },
  {
    icon: Volume2,
    title: 'Audio',
    description: 'Voice conversations, lecture transcripts, audio analysis',
    color: 'from-[#078EFA] to-[#5BAAFE]',
    bgColor: 'bg-[#078EFA]/10',
    borderColor: 'border-[#078EFA]/30',
    hoverBg: 'hover:bg-[#078EFA]/20',
  },
  {
    icon: Video,
    title: 'Video',
    description: 'Understand video content, summarize lectures',
    color: 'from-[#5BAAFE] to-[#AD89EB]',
    bgColor: 'bg-[#5BAAFE]/10',
    borderColor: 'border-[#5BAAFE]/30',
    hoverBg: 'hover:bg-[#5BAAFE]/20',
  },
  {
    icon: Code,
    title: 'Code',
    description: 'Debug, learn programming, build projects',
    color: 'from-[#078EFA] to-[#AD89EB]',
    bgColor: 'bg-[#078EFA]/10',
    borderColor: 'border-[#078EFA]/30',
    hoverBg: 'hover:bg-[#078EFA]/20',
  },
];

export function MultimodalitySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden py-24">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, rgba(7, 142, 250, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(173, 137, 235, 0.2) 0%, transparent 50%)',
          }}
        />
      </div>

      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.line
          x1="20%"
          y1="50%"
          x2="50%"
          y2="40%"
          stroke="url(#gradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          viewport={{ once: true }}
        />
        <motion.line
          x1="50%"
          y1="40%"
          x2="80%"
          y2="50%"
          stroke="url(#gradient1)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
          viewport={{ once: true }}
        />
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#078EFA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#AD89EB" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            One Platform, <span className="text-[#078EFA]">Infinite Ways</span> to Learn
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Gemini understands you however you communicate
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  className={`absolute -inset-2 bg-gradient-to-r ${capability.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                  animate={
                    isHovered
                      ? {
                          scale: [1, 1.05, 1],
                          opacity: [0.4, 0.6, 0.4],
                        }
                      : {}
                  }
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div
                  className={`relative ${capability.bgColor} ${capability.borderColor} ${capability.hoverBg} border-2 rounded-2xl p-8 transition-all duration-300 cursor-pointer overflow-hidden group-hover:border-[#078EFA]/60`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={isHovered ? { x: '100%' } : {}}
                    transition={{ duration: 0.8 }}
                  />

                  <motion.div
                    className="relative mb-6"
                    animate={
                      isHovered
                        ? {
                            rotate: [0, -5, 5, 0],
                            scale: [1, 1.15, 1],
                          }
                        : {}
                    }
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${capability.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(7,142,250,0.5)]`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-3 text-white">{capability.title}</h3>
                  <p className="text-white/70 group-hover:text-white/90 transition-colors">{capability.description}</p>

                  <motion.div
                    className={`absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br ${capability.color} rounded-tl-[3rem] opacity-10 group-hover:opacity-20 transition-opacity`}
                    animate={isHovered ? { scale: 1.3, rotate: 10 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {isHovered && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 bg-[#078EFA] rounded-full"
                          style={{
                            left: '50%',
                            top: '20%',
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{
                            x: [0, (Math.random() - 0.5) * 100],
                            y: [0, (Math.random() - 0.5) * 100],
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            delay: i * 0.1,
                            ease: 'easeOut',
                          }}
                        />
                      ))}
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-white/70">Mix and match—use what works best for you</p>
        </motion.div>
      </div>
    </section>
  );
}

