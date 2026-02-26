import { motion } from 'motion/react';
import { Sparkles, Send } from 'lucide-react';
import { useState } from 'react';
import mascotImage from '../../../assets/19528fcd7fc876e73b17607bb4bfec4b047f8104.png';

export function InteractiveDemoSection() {
  const [showResponse, setShowResponse] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(7,142,250,0.08),transparent_70%)]" />

      <div className="relative max-w-5xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Try It <span className="text-[#078EFA]">Yourself</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">See how Gemini can help you navigate uncertainty</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative mb-8">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative bg-white/5 backdrop-blur-sm border-2 border-[#078EFA]/30 rounded-3xl p-6 shadow-lg hover:border-[#078EFA]/50 transition-colors"
            >
              <label className="text-white/60 text-sm mb-2 block">Ask Gemini...</label>
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  value="I don't know what I want to study."
                  readOnly
                  className="flex-1 bg-transparent text-white text-xl outline-none"
                />
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowResponse(true)}
                  className="w-12 h-12 bg-gradient-to-r from-[#078EFA] to-[#AD89EB] rounded-full flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(7,142,250,0.5)] transition-shadow"
                >
                  <Send className="w-5 h-5 text-white" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#078EFA] to-[#AD89EB] rounded-3xl blur-xl opacity-0"
              animate={showResponse ? { opacity: 0.2 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={showResponse ? { opacity: 1, y: 0, height: 'auto' } : { opacity: 0, y: 20, height: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="overflow-hidden"
          >
            <div className="relative bg-gradient-to-br from-[#078EFA]/10 to-[#AD89EB]/10 backdrop-blur-sm border-2 border-[#078EFA]/40 rounded-3xl p-8 shadow-[0_0_40px_rgba(7,142,250,0.2)]">
              <div className="flex gap-6 items-start">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -20 }}
                  animate={showResponse ? { opacity: 1, scale: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative flex-shrink-0"
                >
                  <div className="relative w-24 h-24">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#078EFA] to-[#AD89EB] rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <img
                        src={mascotImage}
                        alt="Gemini"
                        className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(7,142,250,0.6)] relative z-10"
                      />
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={showResponse ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex-1"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-[#078EFA]" />
                    <span className="text-[#078EFA] font-bold">Gemini</span>
                  </div>
                  <p className="text-white/90 text-lg leading-relaxed mb-4">
                    That's completely normal, and you're not alone. Many students feel this way. The good news? You don't
                    need to have it all figured out right now.
                  </p>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Let's start by exploring what excites you. What topics do you find yourself naturally curious about?
                    What problems in the world do you want to help solve?
                  </p>
                  <p className="text-white/80 leading-relaxed">
                    We can take this one step at a time together. Your path will become clearer as we explore.
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-white/10 border border-[#078EFA]/30 rounded-full text-sm text-white/80 hover:bg-white/20 transition-colors"
                    >
                      Explore career paths
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-white/10 border border-[#078EFA]/30 rounded-full text-sm text-white/80 hover:bg-white/20 transition-colors"
                    >
                      Discover my interests
                    </motion.button>
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-white/10 border border-[#078EFA]/30 rounded-full text-sm text-white/80 hover:bg-white/20 transition-colors"
                    >
                      Talk more
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {!showResponse && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-center text-white/50 text-sm mt-6"
            >
              Click the send button to see how Gemini responds
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}

