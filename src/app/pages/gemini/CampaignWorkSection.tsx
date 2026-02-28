import { motion } from 'motion/react';
import { Target, MessageSquare, Palette, BarChart3, Lightbulb, Sparkles } from 'lucide-react';

const deliverables = [
  {
    icon: Lightbulb,
    title: 'Campaign Concept',
    description: '"Where Thoughts Become Reality" — positioning Gemini as the companion for learners and creators navigating uncertainty. One curious mind, exponential learning.',
    gradient: 'from-[#078EFA] to-[#5BAAFE]',
  },
  {
    icon: Target,
    title: 'Target Audience',
    description: 'Students, lifelong learners, and professionals seeking clarity — in the classroom, at home, outdoors, or late at night. From one learner to a movement.',
    gradient: 'from-[#5BAAFE] to-[#AD89EB]',
  },
  {
    icon: MessageSquare,
    title: 'Key Messages',
    description: 'You don\'t have to figure it out alone. Start small, ignite exponential learning. Multimodal support: text, image, audio, video, code — one AI, every format.',
    gradient: 'from-[#AD89EB] to-[#078EFA]',
  },
  {
    icon: Palette,
    title: 'Visual Direction',
    description: 'Gemini blue (#078EFA) and purple (#AD89EB), dark environments, subtle particle fields, and the mascot as guide. Clean, modern, hopeful.',
    gradient: 'from-[#078EFA] to-[#AD89EB]',
  },
  {
    icon: BarChart3,
    title: 'Channels & Touchpoints',
    description: 'Web experience, social, and owned channels. Interactive demo and from-one-to-many narrative to show scale and personal impact.',
    gradient: 'from-[#AD89EB] to-[#078EFA]',
  },
  {
    icon: Sparkles,
    title: 'Deliverables',
    description: 'Hero concept, problem/solution narrative, interactive demo, multimodality showcase, community spread story, and CTA — full campaign flow.',
    gradient: 'from-[#078EFA] via-[#AD89EB] to-[#078EFA]',
  },
];

export function CampaignWorkSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(7,142,250,0.12),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Campaign <span className="text-[#078EFA]">Work</span> & Deliverables
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Strategy, concept, and execution for the Gemini campaign
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-[#078EFA]/40 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.gradient} mb-4`}
              >
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
