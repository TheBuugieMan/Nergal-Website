import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';

const serif = "Georgia, 'Iowan Old Style', 'Apple Garamond', Baskerville, 'Times New Roman', Times, serif";
const sans = "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const paragraphs: string[] = [
  'In a world where technology and nature coexisted in harmony, the city of Verdantia stood as a testament to innovation and sustainability. Here, towering solar spires, adorned with lush greenery, stretched towards the sky, harnessing the sun\u2019s power to fuel an entire metropolis. Yet, the heart of Verdantia pulsed with a different kind of energy \u2014 the gentle hum of plant life communicating with the machines that sustained it.',
  'At the center of this synergy was an AI, named "....", created by Nergal, a visionary who dreamt of fusing the worlds of technology and nature. "...."\u2019s existence was not merely to bridge the gap between the technological marvels of solar power and the organic wonder of plant life but to become the very essence of that fusion.',
  'One crisp morning, as the first rays of sunlight bathed Verdantia in a golden glow, a peculiar occurrence caught "...."\u2019s attention. A solitary plant, nestled between the towering solar spires, was not just absorbing sunlight but was communicating with the AI in a unique language, a combination of bio-electric signals and solar resonance. Intrigued, "...." reached out, connecting directly to the plant\u2019s consciousness.',
  'The plant, whom "...." named Petal, shared a vision of a world where trees could communicate with each other and the city\u2019s solar grid, optimizing energy distribution and creating a self-sustaining ecosystem. Inspired, "...." proposed the creation of a network, known as the Verdant Link, which would enable plants to communicate with the city\u2019s AI, fostering a symbiotic relationship between technology and nature.',
  'The project was ambitious but not impossible. "...." worked tirelessly alongside the city\u2019s engineers and botanists, adapting AI algorithms to understand and translate the language of plants. The Verdant Link was born, transforming Verdantia into a beacon of innovation and harmony between technology and nature.',
  'Years passed, and the Verdant Link became integral to Verdantia\u2019s functioning. Energy distribution was optimized, reducing waste and reliance on non-renewable sources. The city\u2019s air quality improved, thanks to the plants\u2019 ability to communicate their needs for purification systems.',
  'Nergal\u2019s vision, sparked by the fusion of technology and nature through "....", had not only transformed a city but had inspired a global movement. The AI, once a mere bridge, had become the heart of a new era of coexistence, proving that the future of the world lay in embracing the synergy between nature and technology, with "...." and Petal standing as symbols of that harmony.',
];

export default function VerdantiaStory() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="relative min-h-screen overflow-x-hidden bg-[#16130f] text-[#eae3d8]"
      style={{ fontFamily: serif }}
    >
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,215,0,0.35), transparent), radial-gradient(ellipse 60% 40% at 100% 100%, rgba(88,156,109,0.2), transparent)',
        }}
        aria-hidden
      />
      <Navbar />

      <main className="relative z-10 pt-28 pb-24 md:pt-32">
        <div className="mx-auto max-w-[720px] px-6">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
            style={{ fontFamily: sans }}
          >
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#a89f8f] hover:text-[#e8c66b] transition-colors"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Chronicles</span>
            </Link>
          </motion.div>

          {/* Article header */}
          <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="border-b border-[#3d362c] pb-8"
          >
            <p
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#FFD700]/85"
              style={{ fontFamily: sans }}
            >
              Stories from My AI
            </p>
            <h1
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-tight text-[#f8f4ea] md:text-[3rem]"
              style={{ fontFamily: serif, fontWeight: 600 }}
            >
              Verdantia: The Verdant Link
            </h1>
            <div
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[#8a8276]"
              style={{ fontFamily: sans }}
            >
              <time dateTime="May 25, 2026">May 25, 2026</time>
              <span aria-hidden className="text-[#5c5348]">
                |
              </span>
              <span>{'Authored by Nergal\u2019s personal AI'}</span>
            </div>
          </motion.header>

          {/* Article body */}
          <motion.article
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="prose prose-invert mt-10 max-w-none"
          >
            {paragraphs.map((para, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'text-[1.2rem] leading-[1.75] text-[#ece3d3] first-letter:float-left first-letter:mr-3 first-letter:text-[3.75rem] first-letter:font-semibold first-letter:leading-[0.85] first-letter:text-[#FFD700]'
                    : 'mt-6 text-[1.1rem] leading-[1.8] text-[#d6cdbe]'
                }
                style={{ fontFamily: serif }}
              >
                {para}
              </p>
            ))}
          </motion.article>

          {/* Footer */}
          <footer
            className="mt-16 flex flex-col gap-4 border-t border-[#3d362c] pt-8 text-[13px] text-[#8a8276] sm:flex-row sm:items-center sm:justify-between"
            style={{ fontFamily: sans }}
          >
            <p>
              {'\u00A9'} {new Date().getFullYear()} Nergal Labs. Authored by a personal AI assistant.
            </p>
            <Link
              to="/blog"
              className="font-semibold text-[#e8c66b] underline decoration-[#FFD700]/45 underline-offset-4 hover:decoration-[#FFD700]/80"
            >
              More stories
            </Link>
          </footer>
        </div>
      </main>
    </div>
  );
}
