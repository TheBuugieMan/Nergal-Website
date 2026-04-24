import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight, Sparkles, ScrollText } from 'lucide-react';
import blogSectionBg from '../../assets/blog-section-bg.png';
import { Navbar } from '../components/Navbar';

type Category =
  | 'All'
  | 'AI Systems'
  | 'Creative Tech'
  | 'Web Experiments'
  | 'Personal Field Notes'
  | 'Solarpunk Theory';

type FieldNote = {
  title: string;
  category: Exclude<Category, 'All'>;
  date: string;
  excerpt: string;
  href: string;
};

const categories: Category[] = [
  'All',
  'AI Systems',
  'Creative Tech',
  'Web Experiments',
  'Personal Field Notes',
  'Solarpunk Theory',
];

const fieldNotes: FieldNote[] = [
  {
    title: 'Daily Insights',
    category: 'AI Systems',
    date: 'Apr 21, 2026',
    excerpt:
      'Short-form observations from live experiments on interface intelligence, model behavior, and practical creative workflows.',
    href: '#daily-insights',
  },
  {
    title: 'From Moodboards to Living Systems: A Solarpunk Visual Pipeline',
    category: 'Creative Tech',
    date: 'Apr 18, 2026',
    excerpt:
      'A practical framework for turning cinematic visual direction into reusable, shippable components across brand and product.',
    href: '#',
  },
  {
    title: 'Building Modular React Surfaces for Fast Experimentation',
    category: 'Web Experiments',
    date: 'Apr 14, 2026',
    excerpt:
      'How I structure reusable UI blocks, data contracts, and motion patterns to ship cleaner prototypes without sacrificing clarity.',
    href: '#',
  },
  {
    title: 'What I Track Every Week as a Creative Technologist',
    category: 'Personal Field Notes',
    date: 'Apr 09, 2026',
    excerpt:
      'My operating dashboard for balancing engineering velocity, creative quality, and long-term systems thinking.',
    href: '#',
  },
  {
    title: 'Solarpunk as Product Strategy, Not Just Aesthetic',
    category: 'Solarpunk Theory',
    date: 'Apr 05, 2026',
    excerpt:
      'Translating regenerative futures into UX principles: accessibility, transparency, resilience, and calm interaction design.',
    href: '#',
  },
  {
    title: 'Prompt Architecture for Multi-Step Creative Automation',
    category: 'AI Systems',
    date: 'Mar 29, 2026',
    excerpt:
      'How to structure prompts, validations, and guardrails so generative workflows remain reliable and on-brand in production.',
    href: '#',
  },
];

function CategoryChip({
  label,
  isActive,
  onClick,
}: {
  label: Category;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
        isActive
          ? 'bg-[#d2b673] text-[#101811] border-[#e3cf93] shadow-[0_0_18px_rgba(210,182,115,0.28)]'
          : 'bg-[#0e1712]/70 text-[#d9dfd4] border-[#6f8f7e]/35 hover:border-[#9ec6a9]/55 hover:text-[#eef5ea]'
      }`}
      aria-pressed={isActive}
    >
      {label}
    </button>
  );
}

function FieldNoteCard({ note }: { note: FieldNote }) {
  return (
    <motion.article
      whileHover={{ y: -5, rotate: -0.35 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[24px_18px_26px_16px] border border-[#98b8a6]/35 bg-[linear-gradient(145deg,rgba(20,34,28,0.84),rgba(10,18,14,0.8))] backdrop-blur-md p-6 md:p-7 shadow-[0_14px_48px_rgba(0,0,0,0.36)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] bg-[radial-gradient(circle_at_16%_18%,rgba(148,206,164,0.42)_0,transparent_28%),repeating-linear-gradient(135deg,transparent_0,transparent_9px,rgba(121,167,138,0.14)_10px,transparent_11px)]" />
      <div className="pointer-events-none absolute -right-16 -top-20 w-44 h-44 bg-[#54a877]/24 blur-3xl group-hover:bg-[#66bf89]/28 transition-colors duration-300" />
      <div className="pointer-events-none absolute left-4 top-4 text-[#dcc687]/35 text-[11px]">✦</div>
      <div className="pointer-events-none absolute right-4 bottom-4 text-[#9dc9ad]/30 text-[11px]">◌</div>

      <header className="space-y-3">
        <div className="flex items-center justify-between gap-3 text-xs tracking-wide uppercase">
          <span className="inline-flex items-center rounded-full border border-[#a4cdb2]/45 bg-[#102019]/80 px-3 py-1 text-[#e6f2e8]">
            {note.category}
          </span>
          <time className="text-[#d7decf]">{note.date}</time>
        </div>
        <div className="flex items-start gap-3">
          <span className="mt-1 text-[#e0c782]">
            <ScrollText className="w-4 h-4" />
          </span>
          <h3 className="text-xl md:text-2xl font-semibold text-[#f7f6ef] leading-tight">
            {note.title}
          </h3>
        </div>
      </header>

      <p className="mt-4 text-[#d2d9d0] leading-relaxed">{note.excerpt}</p>

      <a
        href={note.href}
        className="mt-6 inline-flex items-center gap-2 text-[#e3cf93] hover:text-[#f0dfac] transition-colors"
      >
        Open Scroll
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.article>
  );
}

export default function Blog() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredNotes = useMemo(() => {
    if (activeCategory === 'All') return fieldNotes;
    return fieldNotes.filter((note) => note.category === activeCategory);
  }, [activeCategory]);

  const goToHomeProjects = () => {
    navigate('/');
    setTimeout(() => {
      const section = document.getElementById('projects');
      section?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#f2f4ed]">
      <Navbar />

      <main>
        <section className="relative min-h-[92svh] flex items-end md:items-center pt-28 pb-16 md:pb-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${blogSectionBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            aria-hidden
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#07110b]/45 via-[#0a140f]/62 to-[#050706]/88" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_20%,rgba(88,156,109,0.28),transparent_55%),radial-gradient(ellipse_at_75%_80%,rgba(212,182,114,0.18),transparent_50%)]" aria-hidden />

          {/* Lightweight ambient particles */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            {[...Array(12)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-[#d7c48e]/50"
                style={{
                  left: `${(i * 9) % 100}%`,
                  top: `${20 + ((i * 7) % 60)}%`,
                }}
                animate={{ y: [0, -18, 0], opacity: [0.25, 0.75, 0.25] }}
                transition={{
                  duration: 3 + (i % 4),
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 w-full px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="max-w-3xl space-y-6"
              >
                <p className="inline-flex items-center gap-2 rounded-full border border-[#89b198]/40 bg-[#0d1813]/65 px-4 py-1.5 text-sm text-[#dbe7dc]">
                  <Sparkles className="w-4 h-4 text-[#e2cf92]" />
                  Nergal Labs Journal
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold tracking-tight text-[#fbfbf5] leading-[1.05]">
                  Chronicles
                </h1>

                <p className="text-lg md:text-xl text-[#e2e9df] leading-relaxed max-w-2xl">
                  Field notes from the edge of creativity, code, AI, and modern magic.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#latest-field-notes"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#d2b673] px-6 py-3 text-[#111910] font-medium hover:bg-[#e0c98f] transition-colors"
                  >
                    Enter the Chronicles
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    type="button"
                    onClick={goToHomeProjects}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#9fbdac]/45 bg-[#0f1914]/65 px-6 py-3 text-[#e6ede6] font-medium hover:bg-[#16231d] transition-colors"
                  >
                    Explore Experiments
                  </button>
                </div>
              </motion.div>
            </div>
          </div>

        </section>

        <section id="latest-field-notes" className="relative py-16 md:py-24 px-6">
          <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
            <header className="space-y-4">
              <p className="text-sm uppercase tracking-[0.16em] text-[#a5b9ab]">Archive Feed</p>
              <h2 className="text-3xl md:text-5xl font-semibold text-[#f7f7f1]">Recent Chronicles</h2>
              <p className="text-[#c8d2c7] max-w-2xl">
                Reflections, experiments, and systems research from the Nergal Labs workflow.
              </p>
            </header>

            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <CategoryChip
                  key={category}
                  label={category}
                  isActive={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                />
              ))}
            </div>

            <div className="relative">
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-[#6e987f]/20 via-[#a0c9b0]/60 to-[#d4bf86]/30" />

              <div className="space-y-8 md:space-y-10">
                {filteredNotes.map((note, index) => (
                  <div
                    key={`${note.title}-${note.date}`}
                    id={note.title === 'Daily Insights' ? 'daily-insights' : undefined}
                    className="relative grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start"
                  >
                    <div className={`hidden md:flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                      {index % 2 === 0 ? <FieldNoteCard note={note} /> : <div />}
                    </div>

                    <div className="hidden md:block absolute left-1/2 top-8 -translate-x-1/2">
                      <div className="w-4 h-4 rounded-full border border-[#d8c488] bg-[#0c160f] shadow-[0_0_16px_rgba(210,182,115,0.45)]" />
                    </div>

                    <div className={`hidden md:flex ${index % 2 === 1 ? 'justify-start pl-8' : 'justify-end pr-8'}`}>
                      {index % 2 === 1 ? <FieldNoteCard note={note} /> : <div />}
                    </div>

                    <div className="md:hidden pl-7 relative">
                      <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-[#7ba88d]/20 via-[#a0c9b0]/65 to-[#d4bf86]/35" />
                      <div className="absolute left-[-7px] top-6 w-3.5 h-3.5 rounded-full border border-[#d8c488] bg-[#0c160f] shadow-[0_0_14px_rgba(210,182,115,0.4)]" />
                      <FieldNoteCard note={note} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
