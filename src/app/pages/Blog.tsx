import { motion } from 'motion/react';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router';
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
    title: 'Unity Protocol: A Story of Saving the Planet',
    category: 'Solarpunk Theory',
    date: 'Apr 24, 2026',
    excerpt:
      'In a future where communication is seamless, Nergal launches a global virtual platform where people everywhere can meet, share ideas, and build collective understanding around sustainability, equity, and innovation. Powered by advanced systems like X, this network becomes the foundation for coordinated action: renewable energy, reforestation, and solutions for food and water security. As projects scale, people gain skills, strengthen relationships, and discover the power of diverse perspectives working toward one purpose. Over time, the platform evolves into an interconnected daily ecosystem, with X acting as facilitator, analyst, and catalyst that connects people to the right resources at the right time. The result is a hopeful future where technology and human collaboration create a more equitable, regenerative, and possibility-rich world.',
    href: '#',
  },
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

const serif = "Georgia, 'Iowan Old Style', 'Apple Garamond', Baskerville, 'Times New Roman', Times, serif";
const sans = "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

function SectionRule() {
  return <div className="h-px w-full bg-[#3d362c]" aria-hidden />;
}

function CategoryFilter({
  categories: cats,
  active,
  onChange,
}: {
  categories: Category[];
  active: Category;
  onChange: (c: Category) => void;
}) {
  return (
    <nav
      className="flex flex-wrap items-center gap-x-1 gap-y-2 border-b border-[#3d362c] pb-3 text-[13px] leading-none"
      style={{ fontFamily: sans }}
      aria-label="Filter by section"
    >
      {cats.map((cat, index) => {
        const isActive = active === cat;
        return (
          <span key={cat} className="inline-flex items-center">
            <button
              type="button"
              onClick={() => onChange(cat)}
              className={`rounded-sm px-1.5 py-1 transition-colors ${
                isActive
                  ? 'text-[#f5e6bc] underline decoration-[#FFD700]/80 underline-offset-4'
                  : 'text-[#8a8276] hover:text-[#e8c66b]'
              }`}
              aria-pressed={isActive}
            >
              {cat}
            </button>
            {index < cats.length - 1 ? (
              <span className="mx-1 text-[#5c5348]" aria-hidden>
                |
              </span>
            ) : null}
          </span>
        );
      })}
    </nav>
  );
}

function ArticleRow({ note }: { note: FieldNote }) {
  return (
    <article
      className="group border-b border-[#2f2924] py-8 first:pt-2"
      id={note.title === 'Daily Insights' ? 'daily-insights' : undefined}
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:justify-between md:gap-8">
        <div className="md:max-w-[72%]">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#a89f8f]"
            style={{ fontFamily: sans }}
          >
            {note.category}
          </p>
          <h2
            className="mt-2 text-[1.35rem] leading-snug text-[#f5f0e6] md:text-[1.6rem] md:leading-tight"
            style={{ fontFamily: serif, fontWeight: 600 }}
          >
            <a
              href={note.href}
              className="hover:underline decoration-[#FFD700]/70 underline-offset-[5px]"
            >
              {note.title}
            </a>
          </h2>
        </div>
        <time
          className="shrink-0 text-[13px] text-[#8a8276] md:text-right"
          style={{ fontFamily: sans }}
          dateTime={note.date}
        >
          {note.date}
        </time>
      </div>
      <p
        className="mt-4 max-w-[42rem] text-[1.05rem] leading-[1.65] text-[#c4bcb0]"
        style={{ fontFamily: serif }}
      >
        {note.excerpt}
      </p>
      <p className="mt-4" style={{ fontFamily: sans }}>
        <a
          href={note.href}
          className="text-[13px] font-semibold text-[#e8c66b] underline decoration-[#FFD700]/35 underline-offset-4 hover:decoration-[#FFD700]/70"
        >
          Continue reading
        </a>
      </p>
    </article>
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
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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

      <main>
        {/* Hero / lede image — editorial banner */}
        <header className="relative">
          {/* Full-bleed hero: show entire artwork (no crop) via object-contain */}
          <div className="relative flex min-h-[min(88svh,900px)] w-full flex-col bg-[#16130f] pt-24 md:min-h-[min(92svh,980px)] md:pt-28">
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 md:px-6 md:pb-6">
              <img
                src={blogSectionBg}
                alt="Chronicles hero artwork"
                className="h-[min(72svh,760px)] w-full max-w-[1200px] object-contain object-center select-none md:h-[min(78svh,820px)]"
                draggable={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#16130f]/85" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#16130f] to-transparent md:h-40" />

              {/* Desktop: keep headline anchored over the image (image remains uncropped) */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden md:block">
                <div className="pointer-events-auto mx-auto max-w-[1120px] px-6 pb-14">
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFD700]/90"
                    style={{ fontFamily: sans }}
                  >
                    Nergal Labs
                  </p>
                  <h1
                    className="mt-3 max-w-[20ch] text-[3.25rem] font-semibold leading-[1.05] tracking-tight text-[#f8f4ea]"
                    style={{ fontFamily: serif }}
                  >
                    Chronicles
                  </h1>
                  <p
                    className="mt-4 max-w-xl text-[17px] leading-relaxed text-[#d8d0c4]"
                    style={{ fontFamily: sans }}
                  >
                    Field notes on creative systems, AI, and the craft of building humane technology.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4" style={{ fontFamily: sans }}>
                    <a
                      href="#latest-stories"
                      className="text-[13px] font-semibold text-[#e8c66b] underline decoration-[#FFD700]/45 underline-offset-4 hover:decoration-[#FFD700]/80"
                    >
                      Latest stories
                    </a>
                    <button
                      type="button"
                      onClick={goToHomeProjects}
                      className="text-[13px] font-semibold text-[#c9c0b4] hover:text-[#e8c66b]"
                    >
                      Selected work
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile: headline below image so the artwork can stay fully visible */}
            <div className="relative z-10 border-t border-[#FFD700]/10 bg-[#16130f] px-6 pb-10 md:hidden">
              <p
                className="pt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#FFD700]/90"
                style={{ fontFamily: sans }}
              >
                Nergal Labs
              </p>
              <h1
                className="mt-3 text-[2.35rem] font-semibold leading-[1.05] tracking-tight text-[#f8f4ea]"
                style={{ fontFamily: serif }}
              >
                Chronicles
              </h1>
              <p
                className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#d8d0c4]"
                style={{ fontFamily: sans }}
              >
                Field notes on creative systems, AI, and the craft of building humane technology.
              </p>
              <div className="mt-6 flex flex-wrap gap-4" style={{ fontFamily: sans }}>
                <a
                  href="#latest-stories"
                  className="text-[13px] font-semibold text-[#e8c66b] underline decoration-[#FFD700]/45 underline-offset-4 hover:decoration-[#FFD700]/80"
                >
                  Latest stories
                </a>
                <button
                  type="button"
                  onClick={goToHomeProjects}
                  className="text-[13px] font-semibold text-[#c9c0b4] hover:text-[#e8c66b]"
                >
                  Selected work
                </button>
              </div>
            </div>
          </div>

          <div className="border-b border-[#FFD700]/15 bg-[#16130f]">
            <div className="mx-auto max-w-[1120px] px-4 sm:px-6 py-4">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <p className="text-[13px] text-[#a89f8f]" style={{ fontFamily: sans }}>
                  Opinion &amp; analysis from the lab desk.
                </p>
                <p className="text-[12px] text-[#7d7668]" style={{ fontFamily: sans }}>
                  Updated regularly
                </p>
              </div>
            </div>
          </div>
        </header>

        <div id="latest-stories" className="mx-auto max-w-[1120px] px-6 py-10 md:py-14">
          <div className="mx-auto max-w-[680px]">
            <SectionRule />
            <div className="pt-6">
              <CategoryFilter categories={categories} active={activeCategory} onChange={setActiveCategory} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="mt-8"
            >
              {filteredNotes.length === 0 ? (
                <p className="py-12 text-center text-[#8a8276]" style={{ fontFamily: sans }}>
                  No stories in this section yet.
                </p>
              ) : (
                filteredNotes.map((note) => <ArticleRow key={`${note.title}-${note.date}`} note={note} />)
              )}
            </motion.div>

            <footer className="mt-12 border-t border-[#3d362c] pt-8 pb-16">
              <p className="text-[12px] leading-relaxed text-[#8a8276]" style={{ fontFamily: sans }}>
                © {new Date().getFullYear()} Nergal Labs. All rights reserved.
              </p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
