import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import mascotImage from '../../../assets/19528fcd7fc876e73b17607bb4bfec4b047f8104.png';

const students = [
  {
    image:
      'https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb20lMjBsZWFybmluZyUyMHRvZ2V0aGVyfGVufDF8fHx8MTc3MTc4OTIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    label: 'In the Classroom',
    position: { x: -200, y: -100 },
  },
  {
    image:
      'https://images.unsplash.com/photo-1768056878281-5a484402ec6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwc3R1ZHlpbmclMjBob21lJTIwd2luZG93JTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc3MTc4OTIwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    label: 'At Home',
    position: { x: 200, y: -100 },
  },
  {
    image:
      'https://images.unsplash.com/photo-1769000065838-6a76272588f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwb3V0ZG9vciUyMHJlYWRpbmclMjBwYXJrJTIwbmF0dXJlfGVufDF8fHx8MTc3MTc4OTIwMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    label: 'Outdoors',
    position: { x: -150, y: 120 },
  },
  {
    image:
      'https://images.unsplash.com/photo-1758520145147-c30bc656f314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudCUyMHN0dWR5aW5nJTIwYWxvbmUlMjBuaWdodCUyMGRlc2t8ZW58MXx8fHwxNzcxNzg5MjAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    label: 'Late Night',
    position: { x: 180, y: 130 },
  },
];

export function FromOneToManySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
    layoutEffect: false,
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 1]);
  const lightRadius = useTransform(scrollYProgress, [0.2, 0.6], [0, 500]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center bg-black overflow-hidden py-24">
      <div className="relative max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            From One Learner to a <span className="text-[#078EFA]">Movement</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            When knowledge spreads, everyone grows
          </p>
        </motion.div>

        <div className="relative h-[600px] flex items-center justify-center">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#078EFA]/30"
              initial={{ width: 0, height: 0, opacity: 0 }}
              whileInView={{
                width: [0, 200 + i * 150, 200 + i * 150],
                height: [0, 200 + i * 150, 200 + i * 150],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3,
                delay: 0.5 + i * 0.3,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              viewport={{ once: true }}
            />
          ))}

          <motion.div style={{ scale }} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              style={{
                width: lightRadius,
                height: lightRadius,
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-[#078EFA]/50 via-[#078EFA]/30 to-transparent rounded-full blur-3xl"
            />

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative w-32 h-32"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#078EFA] to-[#AD89EB] rounded-full blur-xl opacity-80" />
              <div className="absolute inset-2 bg-gradient-to-br from-[#078EFA] to-[#AD89EB] rounded-full border-4 border-white/20 flex items-center justify-center shadow-[0_0_60px_rgba(7,142,250,0.9)] overflow-hidden">
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <img src={mascotImage} alt="Gemini Spreading Knowledge" className="w-20 h-20 object-contain drop-shadow-lg" />
                </motion.div>
              </div>
            </motion.div>

            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 origin-left"
                style={{
                  rotate: angle,
                  width: 350,
                  height: 3,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 0.7 }}
                transition={{ duration: 1.2, delay: 0.5 + i * 0.08 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-[#078EFA] via-[#078EFA]/60 to-transparent"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              </motion.div>
            ))}

            {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
              <motion.div
                key={`beam-${i}`}
                className="absolute left-1/2 top-1/2 origin-left"
                style={{
                  rotate: angle,
                  width: 300,
                  height: 1,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 0.4 }}
                transition={{ duration: 1.5, delay: 0.7 + i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-gradient-to-r from-[#AD89EB]/50 to-transparent" />
              </motion.div>
            ))}
          </motion.div>

          {students.map((student, index) => (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2"
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0,
              }}
              whileInView={{
                x: student.position.x,
                y: student.position.y,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                delay: 0.8 + index * 0.12,
                type: 'spring',
                stiffness: 50,
              }}
              viewport={{ once: true }}
            >
              <motion.div whileHover={{ scale: 1.15, zIndex: 10 }} className="relative">
                <div className="w-40 h-40 rounded-2xl overflow-hidden border-4 border-[#078EFA]/40 shadow-[0_0_30px_rgba(7,142,250,0.3)]">
                  <img src={student.image} alt={student.label} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#078EFA]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-center">
                    <p className="text-sm font-bold text-white drop-shadow-lg">{student.label}</p>
                  </div>
                </div>

                <svg
                  className="absolute left-1/2 top-1/2 pointer-events-none"
                  style={{
                    width: Math.abs(student.position.x) + 100,
                    height: Math.abs(student.position.y) + 100,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={student.position.x > 0 ? '0%' : '100%'}
                    y2={student.position.y > 0 ? '0%' : '100%'}
                    stroke="url(#connectionGradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.12 }}
                    viewport={{ once: true }}
                  />
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#078EFA" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#078EFA" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-white/90">Your curiosity becomes a ripple that spreads everywhere</p>
        </motion.div>
      </div>
    </section>
  );
}

