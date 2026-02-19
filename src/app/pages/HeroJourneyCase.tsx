import { motion } from 'motion/react';
import { ArrowLeft, Clock, Calendar, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect } from 'react';
import finalImage from '../../assets/f9a5704d2ff95176ce1aa6fb9a8de1f9fa9477bc.png';
import statsImage from '../../assets/b9727c24a154ce242dd377ad8c36d1a27a51eae1.png';
import layersImage from '../../assets/b4425baf3ac627567e91cd995362ae36800212de.png';
import moonVersionImage from '../../assets/581193dab79d9b0e97a67842176435eb5000aa58.png';
import handsMoonImage from '../../assets/ed69b7f07a14d3b192c71e1a3e53f1e6b9d15c38.png';
import middleDetailImage from '../../assets/2c160db8a52c8a13652b65f77334b615c3d62ae7.png';
import bottomDetailImage from '../../assets/310beec6fe465068f8a47330f3aad4214f152b5e.png';
import blankCanvasImage from '../../assets/81f4c88d28600922647e7a06eb39d07317a5ffe0.png';
import cityscapeImage from '../../assets/78a22d297e418b0d03eda1dbfe00afd066a128b2.png';
import { Starfield } from '../components/Starfield';
import { Navbar } from '../components/Navbar';

export default function HeroJourneyCase() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
``
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
              The Hero's Journey
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
                  <p className="text-sm text-gray-500">Project Time</p>
                  <p className="text-white text-lg">15 hours</p>
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
                  <p className="text-white text-lg">12</p>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl text-white">Overview</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                This piece explores the mythic structure of transformation — the timeless path from the ordinary to the extraordinary. It was created for my MMA 100 project, "Transported," where we were challenged to insert ourselves into a fantastical world using symbolism and personal meaning. Each visual element reflects a deeper layer of identity, struggle, and self-discovery.
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
              alt="The Hero's Journey - Final Artwork" 
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
                  <span>Custom brushes, layer blending modes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#8B0000] mt-1">•</span>
                  <span>Hand-drawn textures and symbolic compositing</span>
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
              The goal was to create a visually compelling poster that captures the feeling of growth, struggle, and transformation — open to interpretation but rooted in archetypes like the bull (groundedness), bird (freedom), and snake (instinct/wisdom).
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
              From celestial elements to dreamlike symbolism, each compositional decision was made to align with myth and modern spirituality. Layers were carefully blended to reflect the stages of an inner journey. Key areas like the sky, hands, and urban environment shifted multiple times throughout the design process to land at a balanced whole.
            </p>

            {/* Stats Visual */}
            <div className="rounded-xl overflow-hidden border border-[#1a1a1a]">
              <img 
                src={statsImage} 
                alt="Project Statistics - 15 Hours, 2 Weeks, 12 Assets" 
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
                Balancing narrative symbolism with clean design was key. Too many elements made it chaotic, but removing too much diluted the message. Finding that harmony took iterations and restraint.
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
              
              {/* Blank Canvas */}
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-xl text-[#FFD700]">Starting Point</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
                </div>
                <p className="text-gray-400">The composition before any assets were added.</p>
                <div className="rounded-xl overflow-hidden border border-[#1a1a1a]">
                  <img 
                    src={blankCanvasImage} 
                    alt="Blank canvas starting point" 
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Layers Breakdown */}
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-xl text-[#FFD700]">Layer Structure</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
                </div>
                <p className="text-gray-400">Organized asset and adjustment groups in Photoshop.</p>
                <div className="rounded-xl overflow-hidden border border-[#1a1a1a] bg-[#0a0a0a]">
                  <img 
                    src={layersImage} 
                    alt="Photoshop layers panel showing composition structure" 
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Top without hands */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-xl text-[#FFD700]">Alternate Version</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
                  </div>
                  <p className="text-gray-400">
                    Top section before introducing the hands motif — focusing purely on celestial elements and establishing the dreamlike atmosphere.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#1a1a1a]">
                  <img 
                    src={moonVersionImage} 
                    alt="Top section without hands" 
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Hands + Moon Version */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 rounded-xl overflow-hidden border border-[#1a1a1a]">
                  <img 
                    src={handsMoonImage} 
                    alt="Hands and moon combined" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-xl text-[#FFD700]">Refinement</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
                  </div>
                  <p className="text-gray-400">
                    A later stage where celestial and human elements combined — the hands reaching through cosmic space represent agency, choice, and the bridge between the spiritual and physical.
                  </p>
                </div>
              </div>

              {/* Middle Area Focus */}
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-xl text-[#FFD700]">Detail: Central Movement</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
                </div>
                <p className="text-gray-400">A glimpse into the central chaos and movement of the scene — the everyday world disrupted by symbolic intrusion.</p>
                <div className="rounded-xl overflow-hidden border border-[#1a1a1a]">
                  <img 
                    src={middleDetailImage} 
                    alt="Middle area street detail" 
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Bottom Detail */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-xl text-[#FFD700]">Detail: Grounding Symbolism</h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
                  </div>
                  <p className="text-gray-400">
                    Symbolic figures grounded in the real world — the bull represents stability, strength, and connection to the physical realm. The snake embodies instinct, wisdom, and transformation.
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#1a1a1a]">
                  <img 
                    src={bottomDetailImage} 
                    alt="Bull and figure detail" 
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Cityscape Detail */}
              <div className="space-y-6">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-xl text-[#FFD700]">Detail: Urban Foundation</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-[#FFD700]/30 to-transparent" />
                </div>
                <p className="text-gray-400">The cityscape serves as the ordinary world — the place from which the journey begins, grounding the mythic elements in recognizable reality.</p>
                <div className="rounded-xl overflow-hidden border border-[#1a1a1a]">
                  <img 
                    src={cityscapeImage} 
                    alt="Cityscape detail" 
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
                This project helped me translate deep personal concepts into visual language while refining my Photoshop workflow. I learned how to pace a design narrative, use symbolic elements intentionally, and create emotional tension using texture, space, and light.
              </p>
              <div className="w-20 h-px bg-gradient-to-r from-[#FFD700] to-transparent" />
              <p className="text-[#FFD700] italic">
                The Hero's Journey taught me that great design isn't about adding more — it's about knowing what to keep, what to remove, and when to trust the symbol to speak louder than explanation.
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
