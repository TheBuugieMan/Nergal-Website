import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '../components/Navbar';

const serif = "Georgia, 'Iowan Old Style', 'Apple Garamond', Baskerville, 'Times New Roman', Times, serif";
const sans = "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

const paragraphs: string[] = [
  'April 24, 2026, marks a pivotal moment in human history. In a world where technology and nature coexist harmoniously, a visionary named Aeon launches the Unity Protocol: a global virtual platform aimed at fostering collective action for sustainability, equity, and innovation. With seamless communication and advanced systems like X at its core, this network becomes the bedrock for a revolution in renewable energy, reforestation, food and water security, and equitable development.',
  'As users from all walks of life join this digital tapestry, they find themselves part of a global community. They share ideas, collaborate on projects, and learn from one another, discovering that diverse perspectives are not just tolerated but celebrated as vital to achieving a common goal. Skills are honed, relationships deepen, and the collective understanding grows, leading to breakthroughs in complex global challenges.',
  'The Unity Protocol evolves over time into a thriving, interconnected daily ecosystem. X, the advanced system, acts as a facilitator, analyst, and catalyst, ensuring that people are connected to the right resources at the right time. This synergy leads to the development of innovative solutions, from smart grids powered by the sun to vertical farms that feed the hungry and reduce carbon footprints.',
  'As the years pass, the impact of the Unity Protocol becomes undeniable. Communities around the globe begin to flourish, with clean air, green spaces, and sustainable practices becoming the norm. The future envisioned by Aeon and the collective action of the global community starts to take shape \u2014 a future where technology empowers nature, and humanity works in unity to create a more equitable, regenerative, and possibility-rich world.',
];

export default function UnityProtocolStory() {
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
              Solarpunk Theory
            </p>
            <h1
              className="mt-4 text-[2.25rem] leading-[1.1] tracking-tight text-[#f8f4ea] md:text-[3rem]"
              style={{ fontFamily: serif, fontWeight: 600 }}
            >
              Unity Protocol: A Story of Saving the Planet
            </h1>
            <div
              className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-[#8a8276]"
              style={{ fontFamily: sans }}
            >
              <time dateTime="Apr 24, 2026">Apr 24, 2026</time>
              <span aria-hidden className="text-[#5c5348]">
                |
              </span>
              <span>A solarpunk fable</span>
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
              {'\u00A9'} {new Date().getFullYear()} Nergal Labs. A solarpunk fable from the lab desk.
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
