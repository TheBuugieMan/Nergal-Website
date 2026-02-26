import { motion, useScroll, useTransform } from 'motion/react';
import { Book, FileText, Clock } from 'lucide-react';
import { useRef } from 'react';
import mascotImage from '../../../assets/19528fcd7fc876e73b17607bb4bfec4b047f8104.png';

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const mascotOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 0.15]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center bg-gradient-to-b from-black via-[#000000] to-[#0a0a0a] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.8)_100%)]" />

      <motion.div
        style={{ opacity: mascotOpacity }}
        className="absolute right-[10%] top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#078EFA] to-[#AD89EB] rounded-full blur-3xl opacity-30" />
          <img
            src={mascotImage}
            alt="Gemini Guide"
            className="w-full h-full object-contain opacity-40 drop-shadow-[0_0_40px_rgba(7,142,250,0.3)]"
          />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: backgroundY }} className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-[10%] rotate-12">
          <Book className="w-24 h-24 text-[#078EFA]/30" />
        </div>
        <div className="absolute top-40 right-[15%] -rotate-12">
          <FileText className="w-20 h-20 text-[#078EFA]/30" />
        </div>
        <div className="absolute bottom-32 left-[20%] rotate-6">
          <Clock className="w-28 h-28 text-[#AD89EB]/30" />
        </div>
      </motion.div>

      <motion.div style={{ opacity }} className="relative max-w-5xl mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Many students feel <span className="text-[#078EFA]">lost, overwhelmed,</span> and unsure of their path.
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
          >
            The pressure to succeed, endless assignments, and uncertainty about the future can feel crushing.
          </motion.p>
        </motion.div>

        <div className="relative h-64 mt-16">
          {[
            { text: 'Essay Due', delay: 0, x: -100, y: -40, rotate: -15 },
            { text: 'Midterms', delay: 0.2, x: 100, y: 20, rotate: 12 },
            { text: 'Group Project', delay: 0.4, x: -50, y: 50, rotate: 8 },
            { text: 'Career?', delay: 0.6, x: 80, y: -20, rotate: -10 },
            { text: 'Finals Week', delay: 0.8, x: -80, y: 30, rotate: 15 },
          ].map((note, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              whileInView={{
                opacity: 0.7,
                scale: 1,
                x: note.x,
                y: note.y,
              }}
              transition={{
                duration: 0.8,
                delay: note.delay,
                type: 'spring',
              }}
              viewport={{ once: true }}
              style={{ rotate: note.rotate }}
            >
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  x: [0, Math.sin(i * 1.5) * 8, 0],
                  rotate: [note.rotate, note.rotate + 4, note.rotate],
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="bg-white/10 backdrop-blur-sm p-4 shadow-lg border-2 border-[#078EFA]/30 min-w-[120px] rounded-2xl"
              >
                <p className="text-white font-medium">{note.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

