import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Globe, Palette, Brain, MessageSquare, Sparkles, Cpu, Zap, Users } from 'lucide-react';
import aboutBgImage from '../../assets/9b494ddb59815b83287b223d51ae84e40591cd68.png';
import mobileBgImage from '../../assets/9b494ddb59815b83287b223d51ae84e40591cd68.png';
import portraitImage from '../../assets/d5332396d2a9dc16ccc5f70343ab839cd7ab548c.png';
import higherConnectionsImg from '../../assets/f9a5704d2ff95176ce1aa6fb9a8de1f9fa9477bc.png';
import herosJourneyImg from '../../assets/b1690fe8a93e3c70cee3a0d3ecc54cb27c25f0a9.png';
import graffitiMagImg from '../../assets/bc01940702378cb4b3ae3c2d0c641ad5d90d9c54.png';
import geminiCampaignImg from '../../assets/954bda79f10cab5944413991bb12cdf4ce667b0b.png';
import { Starfield } from '../components/Starfield';
import { Navbar } from '../components/Navbar';
import { ConstellationLines } from '../components/ConstellationLines';
import { ChaosBlur } from '../components/ChaosBlur';
import { AnimatedHands } from '../components/AnimatedHands';
import { ProjectCard } from '../components/ProjectCard';
import { MatrixRain } from '../components/MatrixRain';
import { TerminalText } from '../components/TerminalText';
import { TerminalWindow } from '../components/TerminalWindow';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  const projects = [
    {
      title: 'Higher Connections',
      description: 'A platform exploring consciousness, spirituality, and human connection through interactive multimedia experiences.',
      image: higherConnectionsImg,
      tags: ['Interactive', 'Multimedia', 'AI'],
      link: '/projects/higher-connections'
    },
    {
      title: "Hero's Journey",
      description: 'An immersive narrative experience mapping personal transformation through symbolic storytelling and AI-driven insights.',
      image: herosJourneyImg,
      tags: ['Storytelling', 'Creative Tech', 'Web'],
      link: '/projects/heros-journey'
    },
    {
      title: 'Graffiti Magazine',
      description: 'A digital publication celebrating urban art, street culture, and the intersection of technology and creative expression.',
      image: graffitiMagImg,
      tags: ['Editorial', 'Design', 'Culture']
    },
    {
      title: 'Google Gemini Campaign',
      description: 'Campaign concept exploring AI consciousness and human potential, visualizing where thoughts become reality.',
      image: geminiCampaignImg,
      tags: ['AI/ML', 'Campaign', 'Concept'],
      link: '/projects/gemini'
    }
  ];

  return (
    <div className="relative bg-[#050505] min-h-screen overflow-x-hidden">
      {/* Starfield full page; matrix only below first screen (hero stays clear) */}
      <Starfield />
      <div
        className="pointer-events-none absolute top-[100svh] right-0 bottom-0 left-0 z-[1]"
        aria-hidden
      >
        <MatrixRain />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      >
        {/* Desktop Background Image */}
        <div 
          className="hidden md:block absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${aboutBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Mobile Background Image */}
        <div 
          className="block md:hidden absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${mobileBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Hero Content - Direct Display without Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 text-center space-y-6 md:space-y-8 max-w-6xl w-full px-4 md:px-6"
        >
          <div className="space-y-4 md:space-y-6">
            {/* Terminal prompt with name */}
            <motion.div 
              className="font-mono text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href="#projects" 
                className="text-sm text-gray-400 hover:text-[#FFD700] transition-colors cursor-pointer inline-block"
              >
                <TerminalText 
                  text="./initialize_portfolio.sh" 
                  delay={300} 
                  speed={80}
                  className="text-sm"
                />
              </a>
            </motion.div>

            {/* Name - Blended cosmic + terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="text-center relative"
            >
              {/* Cosmic glow behind text */}
              <motion.div 
                className="absolute inset-0 blur-3xl opacity-30"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700] via-[#8B0000] to-[#FFD700]" />
              </motion.div>
              
              <motion.h1
                className="text-4xl sm:text-5xl md:text-8xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFD700] to-white relative"
                style={{
                  textShadow: '0 0 40px rgba(255, 215, 0, 0.5), 0 0 80px rgba(139, 0, 0, 0.3)',
                  fontWeight: 700,
                  letterSpacing: '0.1em'
                }}
                animate={{
                  textShadow: [
                    '0 0 40px rgba(255, 215, 0, 0.5), 0 0 80px rgba(139, 0, 0, 0.3)',
                    '0 0 50px rgba(255, 215, 0, 0.7), 0 0 100px rgba(139, 0, 0, 0.5)',
                    '0 0 40px rgba(255, 215, 0, 0.5), 0 0 80px rgba(139, 0, 0, 0.3)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                NERGAL PRESCOD
              </motion.h1>

              {/* Particles floating around name */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-[#FFD700] rounded-full hidden md:block"
                  style={{
                    left: `${15 + i * 12}%`,
                    top: '50%',
                  }}
                  animate={{
                    y: [-20, -50, -20],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 2, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* ASCII Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-[#8B0000] font-mono text-xs overflow-hidden"
            >
              <p className="hidden md:block">{'═'.repeat(80)}</p>
              <p className="block md:hidden">{'═'.repeat(40)}</p>
            </motion.div>

            {/* Subtitle - Terminal Style with cosmic touches */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="space-y-2 md:space-y-3 text-sm sm:text-base md:text-lg lg:text-xl"
            >
              <div className="text-left flex items-start md:items-center gap-2 flex-wrap">
                <span className="text-[#FFD700] font-mono font-bold shrink-0" style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}>{'>'}</span> 
                <span className="text-[#FFD700] font-mono shrink-0" style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}>Role:</span> 
                <span className="text-white font-semibold" style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}>Creative AI Technologist & Software Engineer</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-[#FFD700] font-mono hidden md:inline"
                  style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}
                >
                  _
                </motion.span>
              </div>
              <div className="text-left flex items-start md:items-center gap-2 flex-wrap">
                <span className="text-[#FFD700] font-mono font-bold shrink-0" style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}>{'>'}</span> 
                <span className="text-[#FFD700] font-mono shrink-0" style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}>Expertise:</span> 
                <span className="text-white font-semibold" style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}>AI Systems, Web Development, Graphic Design</span>
              </div>
              <div className="text-left flex items-start md:items-center gap-2 flex-wrap">
                <span className="text-[#FFD700] font-mono font-bold shrink-0" style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}>{'>'}</span> 
                <span className="text-[#FFD700] font-mono shrink-0" style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}>Mission:</span> 
                <span className="text-white font-semibold" style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}>Building Intelligent & Beautiful Digital Experiences</span>
              </div>
            </motion.div>

            {/* ASCII Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="text-[#8B0000] font-mono text-xs"
            >
              <p className="hidden md:block">{'═'.repeat(80)}</p>
              <p className="block md:hidden">{'═'.repeat(40)}</p>
            </motion.div>

            {/* Status indicator - removed pulsing circle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 text-sm md:text-base lg:text-lg"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[#FFD700]"
                >
                  ●
                </motion.span>
                <span className="text-white font-semibold" style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}>System Ready</span>
              </div>
              <span className="text-[#FFD700] font-bold hidden md:inline">|</span>
              <span className="text-white font-semibold" style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}>Portfolio Loaded</span>
              <span className="text-[#FFD700] font-bold hidden md:inline">|</span>
              <span className="text-white font-semibold" style={{ textShadow: '0 0 2px #000, 0 0 4px #000, 1px 1px 2px #000, -1px -1px 2px #000' }}>Open to Opportunities</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator - Terminal Style */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 font-mono text-xs text-[#FFD700]">
            <span>scroll</span>
            <div className="w-6 h-10 border-2 border-[#FFD700]/50 rounded-sm flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-[#FFD700] rounded-sm"
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            {/* Terminal-style header */}
            <div className="max-w-3xl mx-auto mb-8">
              <TerminalWindow title="~/projects">
                <div className="space-y-2">
                  <TerminalText text="ls -la ./selected-works" delay={300} speed={40} />
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5 }}
                    className="text-gray-400 font-mono text-sm mt-2"
                  >
                    <p>{'>'} Found 4 projects. Displaying...</p>
                  </motion.div>
                </div>
              </TerminalWindow>
            </div>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Work With Me Section */}
      <section id="work-with-me" className="relative z-10 py-20 px-6">
        {/* ASCII Divider - Transition */}
        <div className="max-w-7xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#FFD700]/30 font-mono text-xs text-center overflow-hidden"
          >
            <p>{'─'.repeat(100)}</p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
          <TerminalWindow title="~/services/capabilities.json" className="backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              {/* Section Title */}
              <div className="space-y-6">
                <div className="font-mono text-sm text-gray-400">
                  <span className="text-[#FFD700]">{'>'}</span> cat services.txt
                </div>
                <h2 className="text-4xl md:text-5xl text-white font-mono" style={{ fontWeight: 700 }}>
                  WORK_WITH_ME
                </h2>
                
                {/* Stronger intro line */}
                <p className="text-lg md:text-xl text-gray-300 max-w-4xl font-light leading-relaxed font-mono">
                  <span className="text-[#FFD700]">//</span> I design and engineer intelligent digital systems — blending structure, symbolism, and scalable technology.
                </p>
                
                {/* ASCII Divider */}
                <div className="text-[#8B0000] font-mono text-xs">
                  <p>{'═'.repeat(60)}</p>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Globe,
                    title: 'Custom Websites',
                    description: 'React-powered responsive builds with modern design and performance optimization.'
                  },
                  {
                    icon: Palette,
                    title: 'Graphic Design & Visual Identity',
                    description: 'Cohesive brand systems and visual storytelling across digital platforms.'
                  },
                  {
                    icon: Brain,
                    title: 'AI-Powered Web Applications',
                    description: 'Intelligent systems that adapt, learn, and create meaningful user experiences.'
                  },
                  {
                    icon: MessageSquare,
                    title: 'AI Chatbots & Assistants',
                    description: 'Conversational interfaces and intelligent automation (in development).'
                  },
                  {
                    icon: Sparkles,
                    title: 'Interactive Multimedia Experiences',
                    description: 'Immersive digital environments blending technology and artistic expression.'
                  },
                  {
                    icon: Cpu,
                    title: 'Creative Technology Prototypes',
                    description: 'Experimental systems exploring the intersection of hardware and software.'
                  },
                  {
                    icon: Zap,
                    title: 'Automation & Intelligent Systems',
                    description: 'Streamlined workflows and smart tools that enhance productivity.'
                  },
                  {
                    icon: Users,
                    title: 'Technical Consultation',
                    description: 'Strategic guidance on architecture, AI integration, and digital transformation.'
                  }
                ].map((capability, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group relative p-6 bg-gradient-to-br from-[#0a0a0a]/80 to-[#050505]/90 rounded border border-[#FFD700]/20 hover:border-[#FFD700]/50 transition-all duration-300 overflow-hidden"
                  >
                    {/* Terminal-style corner brackets */}
                    <div className="absolute top-2 left-2 text-[#8B0000] font-mono text-xs">╔</div>
                    <div className="absolute top-2 right-2 text-[#8B0000] font-mono text-xs">╗</div>
                    <div className="absolute bottom-2 left-2 text-[#8B0000] font-mono text-xs">╚</div>
                    <div className="absolute bottom-2 right-2 text-[#8B0000] font-mono text-xs">╝</div>
                    
                    {/* Subtle glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/0 to-[#8B0000]/0 group-hover:from-[#FFD700]/5 group-hover:to-[#8B0000]/5 transition-all duration-500" />
                    
                    <div className="relative z-10 space-y-4">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded bg-gradient-to-br from-[#FFD700]/10 to-[#8B0000]/10 border border-[#FFD700]/20 flex items-center justify-center group-hover:border-[#FFD700]/40 transition-colors duration-300">
                        <capability.icon className="w-6 h-6 text-[#FFD700]" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg text-white font-mono font-medium">
                        {capability.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {capability.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="space-y-6 pt-8 border-t border-[#FFD700]/20">
                <p className="text-base text-gray-400 font-mono">
                  <span className="text-[#FFD700]">{'>'}</span> Status: Open to full-time roles, collaborations, and select freelance projects.
                </p>
                
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#8B0000] to-[#FFD700] rounded text-white font-mono font-medium text-base overflow-hidden shadow-lg shadow-[#FFD700]/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    $ execute collaboration.sh
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#8B0000]"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </div>
            </motion.div>
          </TerminalWindow>
        </div>
      </section>

      {/* About Section */}
      <section id="about-me" className="relative z-10 py-20 px-6">
        {/* ASCII Divider - Transition */}
        <div className="max-w-7xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#FFD700]/30 font-mono text-xs text-center overflow-hidden"
          >
            <p>{'─'.repeat(100)}</p>
          </motion.div>
        </div>

        {/* Background Image - Subtle */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${aboutBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
          }}
        />

        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(5, 5, 5, 0.7) 0%, rgba(5, 5, 5, 0.9) 70%, #050505 100%)',
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <TerminalWindow title="~/about/builder.md" className="backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Section Title */}
              <div className="space-y-4">
                <div className="font-mono text-sm text-gray-400">
                  <span className="text-[#FFD700]">{'>'}</span> cat about.txt
                </div>
                <h2 className="text-4xl md:text-5xl text-white font-mono" style={{ fontWeight: 700 }}>
                  ABOUT_THE_BUILDER
                </h2>
                <div className="text-[#8B0000] font-mono text-xs">
                  <p>{'═'.repeat(60)}</p>
                </div>
              </div>

              {/* Two-Column Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                
                {/* Left Column - Portrait */}
                <motion.div 
                  className="md:col-span-4 flex justify-center md:justify-start"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div className="relative group">
                    {/* Portrait with terminal-style frame */}
                    <div className="relative">
                      <div className="w-64 h-64 rounded bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-2 border-[#FFD700]/30 overflow-hidden relative">
                        <img 
                          src={portraitImage} 
                          alt="Nergal Prescod" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Terminal corners */}
                      <div className="absolute -top-1 -left-1 text-[#FFD700] font-mono text-lg">╔</div>
                      <div className="absolute -top-1 -right-1 text-[#FFD700] font-mono text-lg">╗</div>
                      <div className="absolute -bottom-1 -left-1 text-[#FFD700] font-mono text-lg">╚</div>
                      <div className="absolute -bottom-1 -right-1 text-[#FFD700] font-mono text-lg">╝</div>
                    </div>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded bg-gradient-to-br from-[#FFD700]/0 to-[#8B0000]/0 group-hover:from-[#FFD700]/10 group-hover:to-[#8B0000]/10 transition-all duration-500" />
                  </div>
                </motion.div>

                {/* Right Column - Text Content */}
                <motion.div 
                  className="md:col-span-8"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed">
                    {/* Opening statement */}
                    <p className="text-lg md:text-xl text-white font-light">
                      I'm a software engineer and creative technologist working at the intersection of AI, symbolic storytelling, and multimedia design.
                    </p>

                    {/* Technical foundation */}
                    <p>
                      With a foundation in full-stack development and machine learning, I build intelligent systems that adapt, learn, and create meaning. My primary language is <span className="text-[#FFD700] font-mono">C#</span>, where I first developed my programming foundation, and I've since expanded into <span className="text-[#FFD700] font-mono">Python, JavaScript, SQL, HTML, and CSS</span>.
                    </p>

                    {/* Professional experience */}
                    <p>
                      Professionally, I've worked as a <span className="text-white font-medium">Software Engineer at Vertafore</span>, maintaining production codebases, building internal tools, debugging complex systems, and contributing to real-world applications used at scale.
                    </p>

                    {/* Creative skills */}
                    <p>
                      Beyond engineering, I design and develop interactive experiences from scratch using tools like <span className="text-[#FFD700] font-mono">Adobe Creative Suite</span> — Photoshop, Illustrator, After Effects, and InDesign — blending logic and visual storytelling into cohesive digital systems.
                    </p>

                    {/* Hardware/maker side */}
                    <p>
                      Outside of code, I build. From a self-assembled robotic arm powered by <span className="text-[#FFD700] font-mono">Arduino</span> to a <span className="text-[#FFD700] font-mono">Raspberry Pi AI assistant</span> integrating voice and automation, I experiment at the edge of software and hardware.
                    </p>

                    {/* Core philosophy */}
                    <p className="text-white font-light">
                      At my core, I explore the space between structure and symbolism — where engineering meets art.
                    </p>

                    {/* ASCII spacer */}
                    <div className="text-[#FFD700]/30 font-mono text-xs my-6">
                      <p>{'─'.repeat(40)}</p>
                    </div>

                    {/* Closing statement - highlighted */}
                    <p className="text-[#FFD700] text-lg md:text-xl font-light font-mono border-l-2 border-[#FFD700] pl-6">
                      <span className="text-[#8B0000]">//</span> Currently crafting experiences that bridge the digital and the cosmic.
                    </p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </TerminalWindow>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        {/* ASCII Divider - Transition */}
        <div className="max-w-7xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#FFD700]/30 font-mono text-xs text-center overflow-hidden"
          >
            <p>{'─'.repeat(100)}</p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <TerminalWindow title="~/contact/connect.sh" className="backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Terminal Header */}
              <div className="space-y-4">
                <div className="font-mono text-sm text-gray-400">
                  <span className="text-[#FFD700]">{'>'}</span> run contact_init.sh
                </div>
                <h2 className="text-4xl md:text-5xl text-white font-mono text-center" style={{ fontWeight: 700 }}>
                  LET'S_CONNECT
                </h2>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#8B0000] to-transparent" />
              </div>

              <p className="text-lg text-gray-400 font-mono text-center">
                <span className="text-[#FFD700]">//</span> Interested in collaboration, innovation, or just a conversation about the future?
              </p>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-8">
                {[
                  { 
                    icon: Mail, 
                    label: 'Email',
                    href: 'mailto:nergalworks@gmail.com',
                    command: 'mailto'
                  },
                  { 
                    icon: Github, 
                    label: 'GitHub',
                    href: 'https://github.com/thebuugieman',
                    target: '_blank',
                    command: 'github'
                  },
                  { 
                    icon: Linkedin, 
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/nergal-prescod-95978b246',
                    target: '_blank',
                    command: 'linkedin'
                  }
                ].map((social, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <motion.a
                      href={social.href}
                      target={social.target}
                      rel={social.target ? "noopener noreferrer" : undefined}
                      whileHover={{ scale: 1.15, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative p-5 bg-gradient-to-br from-[#0a0a0a] to-[#050505] rounded border-2 border-[#FFD700]/30 hover:border-[#FFD700]/60 transition-colors duration-300"
                    >
                      <social.icon className="w-7 h-7 text-gray-400 group-hover:text-[#FFD700] transition-colors duration-300" />
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded bg-[#FFD700] opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300" />
                    </motion.a>
                    
                    <span className="text-xs text-gray-500 font-mono">$ {social.command}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="flex flex-col items-center gap-4">
                <motion.a
                  href="mailto:nergalworks@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#8B0000] to-[#FFD700] rounded text-white font-mono font-medium text-base overflow-hidden shadow-lg shadow-[#FFD700]/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    $ send_message.sh
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#8B0000]"
                    initial={{ x: '100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                {/* Status indicator */}
                <div className="flex items-center gap-3 text-sm font-mono text-gray-500">
                  <motion.span
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-[#FFD700]"
                  >
                    ●
                  </motion.span>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </motion.div>
          </TerminalWindow>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-[#FFD700]/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Terminal-style footer left */}
            <div className="text-gray-600 text-sm font-mono">
              <span className="text-[#8B0000] mr-2">{'>'}</span>
              <span>© 2026 Nergal Prescod. Crafted with intention.</span>
            </div>
            
            {/* Footer decorative elements */}
            <div className="flex items-center gap-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 bg-[#FFD700] rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            <div className="text-gray-600 text-sm font-mono">
              <span className="text-[#FFD700]">$</span> Built with Motion & React
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}




