import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, Cpu, Code2, Layers } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import { Starfield } from '../components/Starfield';
import { Navbar } from '../components/Navbar';
import { TerminalWindow } from '../components/TerminalWindow';
import { SupaWorldArchitectureDiagram } from '../components/SupaWorldArchitectureDiagram';

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
              <span className="text-[#FFD700]">{'>'}</span> cat ./projects/supa-world.case
            </div>

            <div className="space-y-3">
              <h1
                className="text-5xl leading-[1.02] tracking-tight text-white md:text-7xl"
                style={{ fontWeight: 300 }}
              >
                SUPA WORLD
              </h1>
              <p className="text-xl text-emerald-300 md:text-2xl" style={{ fontWeight: 300 }}>
                Persistent Autonomous Civilization Simulation
              </p>
            </div>

            <p className="max-w-3xl text-lg leading-relaxed text-gray-300">
              A Python-based simulation environment in which autonomous villagers form settlements,
              gather resources, construct structures, interact with wildlife, and generate persistent
              history through utility-driven decision systems. Designed with a modular architecture that
              allows external intelligence systems such as Cybo to observe and interact with the simulated
              world.
            </p>

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
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="text-lg text-white">Active Development</p>
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
            <TerminalWindow title="~/supa-world/system.spec">
              <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-gray-300">
{`SUPA WORLD
──────────────────────────────
TYPE       Autonomous Simulation
LANGUAGE   Python
AI         Utility AI + LLM Integration
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
                  copy: 'HTTP API and JSON observation/command interfaces let Cybo and LLM systems observe and act on the world without importing simulation internals.',
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
                  'React isometric dashboard + live world API',
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
                The NergalLabs Thread
              </h2>
              <p className="relative max-w-3xl text-lg leading-relaxed text-gray-300">
                <span className="text-emerald-300">Cybo</span> = intelligence ·{' '}
                <span className="text-[#FFD700]">Supa World</span> = simulated world ·{' '}
                <span className="text-[#078EFA]">Where Thoughts Become</span> = interactive experience.
                Together they explain what NergalLabs is building: intelligent systems, worlds, and experiences.
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
