import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import layersImage from '../../assets/4301aed2f05e9d1aae97961915ba32091803e5d7.png';
import fallingLadyImage from '../../assets/7a257af82d1808cd141e2e31ecf68a10c52978fa.png';
import statsImage from '../../assets/f3929d2d88cbe6454ab9bb47bfa3be770c6de307.png';
import eagleImage from '../../assets/62a908ec61f73b92981faae47e2cfec39f41a26e.png';
import finalImage from '../../assets/f9a5704d2ff95176ce1aa6fb9a8de1f9fa9477bc.png';
import originalImage from '../../assets/37275a0638ce5a3dbd0d58406d5d38d72452424e.png';
import lionImage from '../../assets/2bf313db64090b0e26b3b1e80ff4420c7139565f.png';
import { Starfield } from '../components/Starfield';
import { Navbar } from '../components/Navbar';

export default function HigherConnectionsCase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#050505] min-h-screen">
      {/* Starfield Background */}
      <Starfield />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link 
              to="/"
              className="group inline-flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 mb-20"
          >
            {/* Title */}
            <h1 className="text-5xl md:text-7xl text-white" style={{ fontWeight: 300 }}>
              Higher Connections
            </h1>

            {/* Japanese subtitle */}
            <p className="text-3xl md:text-4xl text-[#FFD700]" style={{ fontWeight: 300 }}>
              悟り (Satori)
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-8 py-6 border-y border-[#1a1a1a]">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#FFD700]" />
                <div>
                  <p className="text-sm text-gray-500">Time Spent</p>
                  <p className="text-white text-lg">~25 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#FFD700]" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="text-white text-lg">2 weeks</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ImageIcon className="w-5 h-5 text-[#FFD700]" />
                <div>
                  <p className="text-sm text-gray-500">Assets Used</p>
                  <p className="text-white text-lg">21</p>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl text-white">Overview</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                This piece reflects the metaphysical bonds between people, energy, and consciousness, rendered in a surreal and abstract visual style. It explores the concept of 悟り (Satori), or enlightenment — using symbolic imagery like celestial forms, animals, and spiritual figures to evoke a sense of clarity and connectedness beyond literal interpretation.
              </p>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-20 rounded-xl overflow-hidden border border-[#1a1a1a] shadow-2xl shadow-[#FFD700]/10"
          >
            <img 
              src={finalImage} 
              alt="Higher Connections - Final Artwork" 
              className="w-full h-auto"
            />
          </motion.div>

          {/* Tools Used */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl text-white mb-6" style={{ fontWeight: 300 }}>
              Tools Used
            </h2>
            <div className="bg-gradient-to-br from-[#0a0a0a]/80 to-[#050505]/90 rounded-lg border border-[#1a1a1a] p-8">
              <h3 className="text-xl text-[#FFD700] mb-4">Adobe Photoshop</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#8B0000] mt-1">•</span>
                  <span>Adjustment layers, photo compositing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B0000] mt-1">•</span>
                  <span>Gradient overlays, blending techniques</span>
                </li>
              </ul>
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
            <h2 className="text-3xl text-white mb-6" style={{ fontWeight: 300 }}>
              Objective
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              To visualize the concept of "conscious connection" using symbolic imagery and dreamlike composition that invites personal interpretation and emotional reflection.
            </p>
          </motion.section>

          {/* Design Process */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl text-white mb-6" style={{ fontWeight: 300 }}>
              Design Process
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Floating figures and energy beams suggest thought and spirit connectivity, while gradients create a soft, ethereal tone. Organic elements like animals and plants were used to emphasize life, growth, and transformation.
            </p>

            {/* Stats Visual */}
            <div className="rounded-xl overflow-hidden border border-[#1a1a1a]">
              <img 
                src={statsImage} 
                alt="Project Statistics - 25 Hours, 2 Weeks, 21 Assets" 
                className="w-full h-auto"
              />
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
            <h2 className="text-3xl text-white mb-6" style={{ fontWeight: 300 }}>
              Challenges
            </h2>
            <div className="bg-gradient-to-br from-[#0a0a0a]/80 to-[#050505]/90 rounded-lg border border-[#1a1a1a] p-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                Conveying an emotional idea visually without relying on clichés or over-explaining the concept required restraint and trust in the abstract storytelling style.
              </p>
            </div>
          </motion.section>

          {/* Process & Visual Development */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl text-white mb-12" style={{ fontWeight: 300 }}>
              Process & Visual Development
            </h2>

            <div className="space-y-16">
              
              {/* Original Image */}
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-xl text-[#FFD700]">Original Image</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
                </div>
                <p className="text-gray-400">The starting point before compositing.</p>
                <div className="rounded-xl overflow-hidden border border-[#1a1a1a]">
                  <img 
                    src={originalImage} 
                    alt="Original unedited photograph" 
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Layers Breakdown */}
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-xl text-[#FFD700]">Layer Breakdown</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
                </div>
                <p className="text-gray-400">The layered structure behind the design.</p>
                <div className="rounded-xl overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a]">
                  <img 
                    src={layersImage} 
                    alt="Photoshop layers panel showing composition structure" 
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Detail: Eagle */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-xl text-[#FFD700]">Detail: Eagle</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
                  </div>
                  <p className="text-gray-400">
                    The eagle symbolizes perspective and awareness — representing the ability to see beyond the immediate, to perceive patterns and connections from a higher vantage point.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#1a1a1a]">
                  <img 
                    src={eagleImage} 
                    alt="Close-up of eagle in composition" 
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Detail: Falling Lady */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 rounded-xl overflow-hidden border border-[#1a1a1a]">
                  <img 
                    src={fallingLadyImage} 
                    alt="Close-up of falling figure" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-xl text-[#FFD700]">Detail: Falling Figure</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
                  </div>
                  <p className="text-gray-400">
                    The falling figure conveys transformation and surrender — the act of letting go, releasing control, and trusting the process of change and spiritual descent into understanding.
                  </p>
                </div>
              </div>

              {/* Detail: Lion */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-xl text-[#FFD700]">Detail: Lion</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
                  </div>
                  <p className="text-gray-400">
                    The lion represents inner strength and grounding — embodying courage, presence, and the foundational power required to navigate spiritual transformation with clarity and conviction.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#1a1a1a]">
                  <img 
                    src={lionImage} 
                    alt="Close-up of lion in composition" 
                    className="w-full h-auto"
                  />
                </div>
              </div>

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
            <h2 className="text-3xl text-white mb-6" style={{ fontWeight: 300 }}>
              What I Learned
            </h2>
            <div className="bg-gradient-to-br from-[#0a0a0a]/80 to-[#050505]/90 rounded-lg border border-[#1a1a1a] p-8 space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                This project taught me how to communicate abstract concepts through visual metaphor, strengthened my use of color blending and surreal layering, and helped me deepen my own design language focused on emotion and clarity.
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-[#FFD700] to-transparent" />
              <p className="text-[#FFD700] italic">
                It reinforced that sometimes the most powerful communication happens through restraint, symbolism, and trust in the viewer's capacity to find their own meaning.
              </p>
            </div>
          </motion.section>

          {/* Bottom Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-12 border-t border-[#1a1a1a]"
          >
            <Link 
              to="/"
              className="group inline-flex items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}