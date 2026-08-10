import { motion } from 'motion/react';
import {
  ArrowLeft,
  Clock,
  Calendar,
  Image as ImageIcon,
  Sparkles,
  Brain,
  Layers,
  Palette,
} from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import campaignImage from '../../assets/954bda79f10cab5944413991bb12cdf4ce667b0b.png';
import mascotImage from '../../assets/19528fcd7fc876e73b17607bb4bfec4b047f8104.png';
import posterCollageImage from '../../assets/gemini-poster-collage.png';
import youngOnesImage from '../../assets/gemini-young-ones.png';
import { Starfield } from '../components/Starfield';
import { Navbar } from '../components/Navbar';
import { HoverPreviewVideo } from '../components/HoverPreviewVideo';

const GEMINI_BLUE = '#078EFA';
const GEMINI_PURPLE = '#AD89EB';

export default function GeminiCampaignCase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505]">
      <Starfield />

      {/* Aurora tint that hints at the Gemini gradient */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.18]"
        style={{
          backgroundImage:
            'radial-gradient(60% 45% at 12% 8%, rgba(7,142,250,0.45), transparent 70%), radial-gradient(55% 45% at 92% 24%, rgba(173,137,235,0.4), transparent 70%), radial-gradient(70% 60% at 50% 110%, rgba(7,142,250,0.18), transparent 70%)',
        }}
        aria-hidden
      />

      <Navbar />

      <div className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-[#078EFA]"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>

          {/* Hero / Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 space-y-8"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[#078EFA]">
              <span className="text-[#AD89EB]">{'>'}</span>
              <span>cat ./projects/gemini.case</span>
            </div>

            {/* Title with gradient highlight */}
            <h1 className="text-5xl leading-[1.05] tracking-tight text-white md:text-7xl" style={{ fontWeight: 300 }}>
              Where Thoughts
              <br />
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(110deg, ${GEMINI_BLUE} 10%, ${GEMINI_PURPLE} 90%)`,
                }}
              >
                Become Reality.
              </span>
            </h1>

            {/* Tagline */}
            <p className="max-w-2xl font-mono text-sm leading-relaxed text-gray-400 md:text-base">
              <span className="text-[#078EFA]">//</span> A self-initiated campaign concept reframing Google
              Gemini as a creative companion — visualizing AI not as a tool, but as a presence that meets you
              where you are.
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-8 border-y border-[#1a1a1a] py-6">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#078EFA]" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-gray-500">Project Time</p>
                  <p className="text-lg text-white">~22 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-[#AD89EB]" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-gray-500">Duration</p>
                  <p className="text-lg text-white">3 weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ImageIcon className="h-5 w-5 text-[#078EFA]" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-gray-500">Deliverables</p>
                  <p className="text-lg text-white">Hero / Mascot / Identity</p>
                </div>
              </div>
            </div>

            {/* ASCII divider */}
            <div className="font-mono text-xs text-[#078EFA]/40">
              <p>{'═'.repeat(60)}</p>
            </div>

            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-mono text-2xl text-white">
                <span className="text-[#AD89EB]">$</span> overview
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                The campaign repositions Gemini as a quiet creative partner for late-night minds — students,
                builders, dreamers. Instead of selling features, it sells the feeling of finally having
                something on your side at 2 a.m. The visual system is built around two opposing forces
                meeting at a soft edge: cold cobalt logic and warm violet imagination.
              </p>
            </div>
          </motion.div>

          {/* Hero Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative mb-20 overflow-hidden rounded-xl border border-[#078EFA]/30 bg-[#050505] shadow-2xl shadow-[#078EFA]/10"
          >
            <div className="relative mx-auto flex min-h-[420px] w-full items-center justify-center md:min-h-[560px] lg:min-h-[640px]">
              <HoverPreviewVideo
                src="/videos/gemini-project-v2.mp4"
                poster={campaignImage}
                className="h-full w-full max-h-[720px]"
                objectFit="contain"
              />
            </div>

            <p className="border-t border-[#078EFA]/15 px-6 py-3 text-center font-mono text-xs text-gray-500">
              Hover to scrub · cycles on its own when idle
            </p>

            {/* Animated gradient glow border */}
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-xl"
              animate={{
                boxShadow: [
                  '0 0 0 1px rgba(7,142,250,0.18), 0 0 30px rgba(173,137,235,0.04)',
                  '0 0 0 1px rgba(173,137,235,0.55), 0 0 50px rgba(7,142,250,0.22)',
                  '0 0 0 1px rgba(7,142,250,0.18), 0 0 30px rgba(173,137,235,0.04)',
                ],
              }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Drifting scanline */}
            <motion.div
              className="pointer-events-none absolute inset-x-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(7,142,250,0.7), rgba(173,137,235,0.7), transparent)',
              }}
              initial={{ top: '12%' }}
              animate={{ top: ['12%', '92%', '12%'] }}
              transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Campaign Visuals */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="mb-8 font-mono text-3xl text-white" style={{ fontWeight: 300 }}>
              <span className="text-[#078EFA]">$</span> campaign.visuals
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <h3 className="font-mono text-lg text-[#AD89EB]">Poster Collage</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#078EFA]/30 to-transparent" />
                </div>
                <p className="text-sm leading-relaxed text-gray-400">
                  Where thoughts become reality — a surreal park scene mixing illustration, photography,
                  and the Gemini companion into one campaign poster.
                </p>
                <div className="overflow-hidden rounded-xl border border-[#078EFA]/25 bg-[#050505]">
                  <img
                    src={posterCollageImage}
                    alt="Gemini campaign poster collage — Where thoughts become reality"
                    className="mx-auto h-auto max-h-[720px] w-full object-contain"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-baseline gap-4">
                  <h3 className="font-mono text-lg text-[#078EFA]">Young Ones</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#AD89EB]/30 to-transparent" />
                </div>
                <p className="text-sm leading-relaxed text-gray-400">
                  Classroom spot framing Gemini as a creative mentor — the companion guides young minds
                  while staying warm, approachable, and unmistakably Google.
                </p>
                <div className="overflow-hidden rounded-xl border border-[#AD89EB]/25 bg-[#050505]">
                  <img
                    src={youngOnesImage}
                    alt="Gemini Young Ones campaign — classroom creative mentor scene"
                    className="mx-auto h-auto max-h-[720px] w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.section>

          {/* Tools Used */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="mb-6 font-mono text-3xl text-white" style={{ fontWeight: 300 }}>
              <span className="text-[#078EFA]">$</span> tools.txt
            </h2>
            <div className="rounded-lg border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a]/80 to-[#050505]/90 p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    label: 'Adobe After Effects',
                    note: 'Motion identity, animated key visuals, and campaign film assembly.',
                  },
                  {
                    label: 'Adobe Photoshop',
                    note: 'Photographic compositing, poster collage, and mascot finishing.',
                  },
                  {
                    label: 'Adobe Firefly',
                    note: 'Generative assets and visual exploration for campaign concepts.',
                  },
                  {
                    label: 'Campaign',
                    note: 'Self-initiated brand concept reframing Gemini as a creative companion.',
                  },
                  {
                    label: 'Concept',
                    note: 'Visual system, mascot direction, and multimodal identity development.',
                  },
                ].map((tool) => (
                  <div key={tool.label} className="flex items-start gap-3">
                    <span className="mt-1 text-[#AD89EB]">▹</span>
                    <div>
                      <p className="font-mono text-sm text-[#078EFA]">{tool.label}</p>
                      <p className="text-sm text-gray-400">{tool.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Objective */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="mb-6 font-mono text-3xl text-white" style={{ fontWeight: 300 }}>
              <span className="text-[#078EFA]">$</span> objective
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              Reframe a multimodal AI assistant as something emotionally legible. Most AI campaigns lead with
              capability. I wanted this one to lead with intimacy — a campaign you feel before you read.
              Every system decision (color, motion, type, mascot) had to defend that brief.
            </p>
          </motion.section>

          {/* Pillars */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="mb-8 font-mono text-3xl text-white" style={{ fontWeight: 300 }}>
              <span className="text-[#AD89EB]">$</span> design.pillars
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: Brain,
                  title: 'Quiet Intelligence',
                  copy: 'Restraint over spectacle. The system whispers instead of shouts — typography is calm, motion is slow, copy is human.',
                  color: GEMINI_BLUE,
                },
                {
                  icon: Sparkles,
                  title: 'Companion, not Tool',
                  copy: 'The mascot orbits the viewer, never blocks them. It reacts, glows, and follows attention rather than commanding it.',
                  color: GEMINI_PURPLE,
                },
                {
                  icon: Layers,
                  title: 'Multimodal Surface',
                  copy: 'The identity holds text, image, voice, and motion in the same frame — so the brand can live wherever the conversation does.',
                  color: GEMINI_BLUE,
                },
              ].map((pillar) => (
                <motion.div
                  key={pillar.title}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-lg border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a]/85 to-[#050505]/90 p-6 transition-colors hover:border-[#078EFA]/50"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
                    style={{ background: pillar.color }}
                  />
                  <div className="relative z-10 space-y-4">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded border border-[#1a1a1a]"
                      style={{
                        background: `linear-gradient(135deg, ${GEMINI_BLUE}1a, ${GEMINI_PURPLE}1a)`,
                      }}
                    >
                      <pillar.icon className="h-6 w-6" style={{ color: pillar.color }} />
                    </div>
                    <h3 className="font-mono text-lg text-white">{pillar.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">{pillar.copy}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mascot Showcase */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="mb-8 font-mono text-3xl text-white" style={{ fontWeight: 300 }}>
              <span className="text-[#078EFA]">$</span> meet.the_companion
            </h2>

            <div className="grid gap-10 md:grid-cols-5 md:items-center">
              <div className="relative md:col-span-2">
                <div className="relative mx-auto aspect-square max-w-[320px]">
                  {/* Glow orb */}
                  <motion.div
                    className="absolute inset-4 rounded-full blur-3xl"
                    style={{
                      background: `radial-gradient(circle, ${GEMINI_BLUE} 0%, ${GEMINI_PURPLE} 60%, transparent 80%)`,
                    }}
                    animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.75, 0.45] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Mascot */}
                  <motion.img
                    src={mascotImage}
                    alt="Gemini campaign mascot"
                    className="relative z-10 h-full w-full object-contain drop-shadow-[0_0_30px_rgba(7,142,250,0.7)]"
                    animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  {/* Orbit particles */}
                  {[...Array(8)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
                      style={{ background: i % 2 === 0 ? GEMINI_BLUE : GEMINI_PURPLE }}
                      animate={{
                        x: [0, Math.cos((i * Math.PI) / 4) * 120],
                        y: [0, Math.sin((i * Math.PI) / 4) * 120],
                        opacity: [0, 1, 0],
                        scale: [0, 1.4, 0],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.25, ease: 'easeOut' }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4 md:col-span-3">
                <div className="font-mono text-xs uppercase tracking-[0.22em] text-[#AD89EB]">
                  // mascot.brief
                </div>
                <p className="text-lg leading-relaxed text-gray-300">
                  The companion is intentionally non-anthropomorphic — a soft, glowing form that reads as
                  presence rather than person. It exists in the negative space of the page so it never
                  competes with the reader's own thoughts.
                </p>
                <p className="text-lg leading-relaxed text-gray-300">
                  It only animates when you're idle. Once you start typing, scrolling, or speaking, it dims
                  and steps back. That single behavior carries the whole brand promise.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Color & Typography */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="mb-8 font-mono text-3xl text-white" style={{ fontWeight: 300 }}>
              <span className="text-[#AD89EB]">$</span> system.tokens
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Palette */}
              <div className="rounded-lg border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a]/80 to-[#050505]/90 p-6">
                <div className="mb-4 flex items-center gap-2 font-mono text-sm text-gray-400">
                  <Palette className="h-4 w-4 text-[#078EFA]" />
                  palette.json
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Cobalt Logic', hex: GEMINI_BLUE },
                    { name: 'Violet Imagination', hex: GEMINI_PURPLE },
                    { name: 'Late-Night Black', hex: '#050505' },
                    { name: 'Field Note Gray', hex: '#a0a0a0' },
                  ].map((swatch) => (
                    <div key={swatch.hex} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span
                          className="block h-7 w-7 rounded border border-white/10"
                          style={{ background: swatch.hex }}
                        />
                        <span className="text-sm text-white">{swatch.name}</span>
                      </div>
                      <span className="font-mono text-xs text-gray-500">{swatch.hex.toUpperCase()}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Type */}
              <div className="rounded-lg border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a]/80 to-[#050505]/90 p-6">
                <div className="mb-4 font-mono text-sm text-gray-400">// type.system</div>
                <div className="space-y-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#078EFA]">
                      Display — light weight, generous tracking
                    </p>
                    <p className="mt-1 text-3xl text-white" style={{ fontWeight: 300 }}>
                      Where thoughts become reality.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#AD89EB]">
                      Voice — short, second-person
                    </p>
                    <p className="mt-1 text-base text-gray-300">
                      You think out loud. It listens. Sometimes that's the whole feature.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#078EFA]">
                      Mono — annotation, never headline
                    </p>
                    <p className="mt-1 font-mono text-sm text-gray-400">
                      {'>'} status: thinking with you
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Pull Quote */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="relative overflow-hidden rounded-lg border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a]/85 to-[#050505]/90 p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `radial-gradient(ellipse 60% 40% at 0% 100%, ${GEMINI_BLUE}33, transparent 70%), radial-gradient(ellipse 60% 40% at 100% 0%, ${GEMINI_PURPLE}33, transparent 70%)`,
                }}
              />
              <p
                className="relative max-w-3xl text-2xl leading-relaxed text-white md:text-3xl"
                style={{ fontWeight: 300 }}
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(110deg, ${GEMINI_BLUE} 10%, ${GEMINI_PURPLE} 90%)`,
                  }}
                >
                  "You don't have to figure it out alone."
                </span>
                <br />
                <span className="text-base text-gray-400 md:text-lg">
                  — campaign tagline, written before any visual existed.
                </span>
              </p>
            </div>
          </motion.section>

          {/* Challenges */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="mb-6 font-mono text-3xl text-white" style={{ fontWeight: 300 }}>
              <span className="text-[#078EFA]">$</span> challenges
            </h2>
            <div className="rounded-lg border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a]/80 to-[#050505]/90 p-8">
              <ul className="space-y-4 text-base leading-relaxed text-gray-300 md:text-lg">
                <li className="flex gap-3">
                  <span className="mt-1 text-[#AD89EB]">▹</span>
                  <span>
                    Avoiding the standard AI visual vocabulary (neural nets, particles, "magic dust"). I
                    wanted something quieter.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-[#078EFA]">▹</span>
                  <span>
                    Designing a mascot with personality that{' '}
                    <em className="text-white">never has a face</em>. The viewer projects onto it.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 text-[#AD89EB]">▹</span>
                  <span>
                    Keeping the brand legible across modalities — the same gradient had to work as logo,
                    motion accent, voice waveform, and background wash.
                  </span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* What I Learned */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="mb-6 font-mono text-3xl text-white" style={{ fontWeight: 300 }}>
              <span className="text-[#AD89EB]">$</span> what.i_learned
            </h2>
            <div className="space-y-4 rounded-lg border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a]/80 to-[#050505]/90 p-8">
              <p className="text-lg leading-relaxed text-gray-300">
                Designing for AI is closer to set design than product design — you're not drawing the actor,
                you're lighting the room they walk into. The decisions that mattered most weren't on the
                page; they were rhythm, restraint, and tempo.
              </p>
              <div
                className="h-px w-20"
                style={{
                  background: `linear-gradient(90deg, ${GEMINI_BLUE}, ${GEMINI_PURPLE}, transparent)`,
                }}
              />
              <p
                className="border-l-2 pl-6 font-mono text-lg italic md:text-xl"
                style={{ borderColor: GEMINI_PURPLE, color: GEMINI_BLUE }}
              >
                <span className="text-[#AD89EB]">//</span> The best AI work doesn't ask for attention. It
                makes room for yours.
              </p>
            </div>
          </motion.section>

          {/* Bottom Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-[#1a1a1a] pt-12"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-[#078EFA]"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
