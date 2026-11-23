import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, Cpu, Code2, Layers } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { Starfield } from '../components/Starfield';
import { Navbar } from '../components/Navbar';
import { TerminalWindow } from '../components/TerminalWindow';
import { SupaWorldArchitectureDiagram } from '../components/SupaWorldArchitectureDiagram';
import { HoverPreviewVideo } from '../components/HoverPreviewVideo';

const EMERALD = '#34d399';

export default function SupaWorldCase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505]">
      <Starfield />

      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(55% 40% at 10% 12%, rgba(52,211,153,0.35), transparent 70%), radial-gradient(50% 45% at 90% 20%, rgba(255,215,0,0.15), transparent 70%)',
        }}
        aria-hidden
      />

      <Navbar />

      <div className="relative z-10 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-emerald-300"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 space-y-8"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-400">
              <span className="text-[#FFD700]">{'>'}</span> cat ./projects/cybo-wrld.case
            </div>

            <div className="space-y-3">
              <h1
                className="text-5xl leading-[1.02] tracking-tight text-white md:text-7xl"
                style={{ fontWeight: 300 }}
              >
                CYBO WRLD
              </h1>
              <p className="text-xl text-emerald-300 md:text-2xl" style={{ fontWeight: 300 }}>
                A World Built to Teach Intelligence
              </p>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-emerald-400/30 bg-[#050505] shadow-2xl shadow-emerald-400/10">
              <div className="relative min-h-[320px] w-full md:min-h-[420px]">
                <HoverPreviewVideo
                  src="/videos/supa-world-preview.mp4"
                  className="h-full w-full min-h-[320px] md:min-h-[420px]"
                  objectFit="cover"
                  previewMode="loop"
                  loopEndFraction={0.4}
                />
              </div>
            </div>

            <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
              What if artificial intelligence could learn through experience rather than instructions
              alone? Cybo Wrld is an experimental game environment I created to explore that question.
              It brings together game development, artificial intelligence, storytelling, and worldbuilding
              in a living environment designed to become part of the learning process.
            </p>

            <div className="rounded-lg border border-emerald-400/30 bg-emerald-400/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-400">
                // primary purpose
              </p>
              <p className="mt-3 text-lg leading-relaxed text-gray-200">
                At the center is Cybo, my developing AI assistant, whose intended role is to protect and
                guide a village through unfamiliar encounters. The world provides a structured place to
                explore decision-making, consequences, feedback, and adaptation without claiming that
                every part of that long-term learning vision is already complete.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Python', 'Sim', 'Software Engineering', 'Creative AI Teaching'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 font-mono text-xs text-emerald-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-8 border-y border-[#1a1a1a] py-6">
              <div className="flex items-center gap-3">
                <Cpu className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="text-sm text-gray-500">Type</p>
                  <p className="text-lg text-white">Autonomous Simulation</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Code2 className="h-5 w-5 text-[#FFD700]" />
                <div>
                  <p className="text-sm text-gray-500">Language</p>
                  <p className="text-lg text-white">Python</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-emerald-400" />
                <div>
                  <p className="text-sm text-gray-500">AI Training</p>
                  <p className="text-lg text-white">Cybo Decision-Making</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Layers className="h-5 w-5 text-[#FFD700]" />
                <div>
                  <p className="text-sm text-gray-500">Modules</p>
                  <p className="text-lg text-white">200+ Python systems</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-16"
          >
            <TerminalWindow title="~/cybo-wrld/system.spec">
              <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-gray-300">
{`CYBO WRLD
──────────────────────────────
TYPE       Autonomous Simulation
LANGUAGE   Python
PURPOSE    Creative AI Teaching + Training
AI         Utility AI + LLM Integration
EXPERIMENT Cybo decision-making + feedback loops
SYSTEMS    Agents / Resources / Building
           Persistence / History / Wildlife
STATUS     Active Development
──────────────────────────────`}
              </pre>
            </TerminalWindow>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="mb-6 font-mono text-3xl text-white" style={{ fontWeight: 300 }}>
              <span style={{ color: EMERALD }}>$</span> architecture.map
            </h2>
            <SupaWorldArchitectureDiagram />
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="mb-6 font-mono text-3xl text-white" style={{ fontWeight: 300 }}>
              <span className="text-[#FFD700]">$</span> ai.training
            </h2>
            <div className="space-y-4 rounded-lg border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a]/85 to-[#050505]/90 p-8">
              <p className="text-lg leading-relaxed text-gray-300">
                Cybo is my ongoing exploration into an intelligent assistant that extends beyond ordinary
                conversation. The broader project connects local AI, software architecture, automation,
                voice, memory, and physical computing. Cybo Wrld is one experimental environment within
                that vision, giving Cybo a world where choices can carry consequences.
              </p>
              <p className="text-lg leading-relaxed text-gray-300">
                The intended cycle is OBSERVE → DECIDE → ACT → EXPERIENCE → ADAPT: gather available
                information, choose an action, let the world respond, and use feedback to inform future
                behavior. This is the experiment's direction and design—not a claim that a fully autonomous
                learning system is already complete.
              </p>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 space-y-6"
          >
            <h2 className="font-mono text-3xl text-white" style={{ fontWeight: 300 }}>
              <span className="text-[#FFD700]">$</span> technical.approach
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                {
                  title: 'Utility AI Layer',
                  copy: 'Autonomous villagers score actions from needs, roles, doctrine, and memory — producing coherent settlement behavior without hand-authored scripts for every scenario.',
                },
                {
                  title: 'Modular Tick Engine',
                  copy: 'Simulation phases — animals, combat, building, diplomacy, events — stay isolated so systems can evolve independently without collapsing the world state.',
                },
                {
                  title: 'External Intelligence Bridge',
                  copy: 'The observation and command architecture is designed to connect Cybo with the simulation so environmental decisions, outcomes, and future feedback experiments can be explored safely.',
                },
                {
                  title: 'Persistent History',
                  copy: 'Save/load, chronicle generation, and milestone tracking turn each run into a durable civilization record rather than a disposable game session.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a]/85 to-[#050505]/90 p-6"
                >
                  <h3 className="mb-3 font-mono text-lg text-emerald-300">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">{item.copy}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="mb-6 font-mono text-3xl text-white" style={{ fontWeight: 300 }}>
              <span style={{ color: EMERALD }}>$</span> core.systems
            </h2>
            <div className="rounded-lg border border-[#1a1a1a] bg-gradient-to-br from-[#0a0a0a]/80 to-[#050505]/90 p-8">
              <ul className="grid gap-3 md:grid-cols-2 font-mono text-sm text-gray-300">
                {[
                  'Autonomous villagers with role-based behavior',
                  'Resource gathering, construction, and housing',
                  'Wildlife ecology and predator chains',
                  'Faction warfare, bandit camps, and conquest',
                  '21-node tech tree across civilization ages',
                  'Observation/command foundation for planned Cybo experiments',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-400">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="relative overflow-hidden rounded-lg border border-emerald-400/25 bg-gradient-to-br from-[#0a0a0a]/90 to-[#050505]/95 p-8 md:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle at 0% 100%, ${EMERALD}33, transparent 60%)`,
                }}
              />
              <h2 className="relative mb-4 font-mono text-2xl text-white md:text-3xl" style={{ fontWeight: 300 }}>
                A World to Explore. A Village to Protect.
              </h2>
              <p className="relative max-w-3xl text-lg leading-relaxed text-gray-300">
                The village gives <span className="text-emerald-300">Cybo</span> more than a task: it gives
                him a responsibility. Each unfamiliar encounter can test how an intelligent system might
                evaluate risk and respond to uncertainty. A choice may succeed or fail, but either outcome
                can become useful feedback within the project's intended experimental design.
              </p>
            </div>
          </motion.section>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-[#1a1a1a] pt-12"
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-emerald-300"
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
