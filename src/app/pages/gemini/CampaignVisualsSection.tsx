import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

const visuals = [
  {
    src: `${BASE}gemini/gemini-billboard.png`,
    alt: 'Gemini Billboard',
    title: 'Billboard',
    description: 'Outdoor campaign key visual',
  },
  {
    src: `${BASE}gemini/gemini-poster-collage.png`,
    alt: 'Gemini Poster Collage',
    title: 'Poster Collage',
    description: 'Campaign poster series',
  },
  {
    src: `${BASE}gemini/gemini-mascot.png`,
    alt: 'Gemini Mascot',
    title: 'Mascot',
    description: 'Gemini guide character',
  },
  {
    src: `${BASE}gemini/gemini-young-ones-v2.png`,
    alt: 'Gemini Young Ones Campaign',
    title: 'Young Ones',
    description: 'Campaign execution',
  },
];

export function CampaignVisualsSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-black py-24 overflow-visible">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_20%,rgba(7,142,250,0.08),transparent_50%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-8 w-full overflow-visible">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Campaign <span className="text-[#078EFA]">Visuals</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Key art and deliverables from the Final Submission
          </p>
          <div className="flex justify-center mt-4">
            <Sparkles className="w-6 h-6 text-[#078EFA]" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {visuals.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
              className="group"
              style={{ overflow: 'visible' }}
            >
              <div className="relative rounded-2xl border-2 border-white/10 bg-white/5 overflow-hidden hover:border-[#078EFA]/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-contain max-h-[500px] object-top"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
