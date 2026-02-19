import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight, Globe, Palette, Brain, MessageSquare, Sparkles, Cpu, Zap, Users } from 'lucide-react';
import aboutBgImage from '../../assets/9b494ddb59815b83287b223d51ae84e40591cd68.png';
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
      tags: ['AI/ML', 'Campaign', 'Concept']
    }
  ];

  return (
    <div className="relative bg-[#050505] min-h-screen overflow-x-hidden">
      {/* Starfield Background */}
      <Starfield />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
      >
        {/* Constellation Lines */}
        <ConstellationLines />

        {/* Background Flickering Stars */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: `0 0 ${Math.random() * 4 + 2}px rgba(255, 255, 255, 0.8)`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Celestial Sphere */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 2 }}>
          <ChaosBlur />
        </div>

        {/* Animated Hands */}
        <AnimatedHands />

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 text-center space-y-6 max-w-5xl"
        >
          {/* Name */}
          <motion.h1
            className="text-7xl md:text-9xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFD700] to-white"
            style={{
              textShadow: '0 0 40px rgba(255, 215, 0, 0.3)',
              fontWeight: 300,
              letterSpacing: '0.1em'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            NERGAL PRESCOD
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 text-lg md:text-xl text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <span className="text-[#FFD700]">Software Engineer</span>
            <span className="hidden md:block text-[#8B0000]">·</span>
            <span className="text-[#FFD700]">Creative Technologist</span>
            <span className="hidden md:block text-[#8B0000]">·</span>
            <span className="text-[#FFD700]">Builder of Intelligent Systems</span>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="w-64 h-px mx-auto bg-gradient-to-r from-transparent via-[#8B0000] to-transparent"
            initial={{ width: 0 }}
            animate={{ width: 256 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#8B0000] rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 bg-[#FFD700] rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
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
            className="mb-16 text-center"
          >
            <h2 className="text-5xl md:text-6xl text-white mb-4" style={{ fontWeight: 300 }}>
              Selected Works
            </h2>
            <p className="text-xl text-[#FFD700] mb-6">Explore my creative and technical projects below.</p>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
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
      <section id="work-with-me" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {/* Section Title */}
            <div className="text-center space-y-6">
              <h2 className="text-5xl md:text-6xl text-white" style={{ fontWeight: 300 }}>
                Work With Me
              </h2>
              
              {/* Stronger intro line */}
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
                I design and engineer intelligent digital systems — blending structure, symbolism, and scalable technology.
              </p>
              
              {/* Availability line */}
              <p className="text-lg text-gray-400">
                Open to full-time roles and select freelance collaborations.
              </p>

              <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#FFD700] to-transparent" />
            </div>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                  className="group relative p-6 bg-gradient-to-br from-[#0a0a0a]/80 to-[#050505]/90 rounded-lg border border-[#1a1a1a] hover:border-[#FFD700]/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/0 to-[#8B0000]/0 group-hover:from-[#FFD700]/5 group-hover:to-[#8B0000]/5 transition-all duration-500" />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#FFD700]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFD700]/10 to-[#8B0000]/10 border border-[#FFD700]/20 flex items-center justify-center group-hover:border-[#FFD700]/40 transition-colors duration-300">
                      <capability.icon className="w-6 h-6 text-[#FFD700]" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl text-white font-medium">
                      {capability.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                  </div>

                  {/* Animated particles on hover */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-60"
                      style={{ 
                        left: `${20 + i * 30}%`, 
                        top: '50%' 
                      }}
                      animate={{
                        y: [-20, -40, -20],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6 pt-8">
              <p className="text-lg text-gray-400">
                Open to full-time roles, collaborations, and select freelance projects.
              </p>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-[#8B0000] to-[#FFD700] rounded-full text-white font-medium text-lg overflow-hidden shadow-lg shadow-[#FFD700]/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Let's Build Something
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
        </div>
      </section>

      {/* About Section */}
      <section id="about-me" className="relative z-10 py-32 px-6">
        {/* Background Image - MORE VISIBLE with slight black overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${aboutBgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.5,
          }}
        />

        {/* Subtle black overlay for blending - LIGHTER */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(5, 5, 5, 0.4) 0%, rgba(5, 5, 5, 0.65) 70%, #050505 100%)',
          }}
        />

        {/* Subtle background blur - MINIMAL */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backdropFilter: 'blur(4px)',
          }}
        />

        {/* Cooling color transition from previous section */}
        <div 
          className="absolute top-0 left-0 right-0 h-32 z-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 215, 0, 0.03) 0%, transparent 100%)',
          }}
        />

        {/* Reduced star brightness - SUBTLE */}
        <div className="absolute inset-0 z-[1] opacity-20">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 3px rgba(255, 255, 255, 0.4)',
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Section Title */}
            <h2 className="text-5xl md:text-6xl text-white mb-12 text-center relative z-10" style={{ fontWeight: 300 }}>
              About the Builder
            </h2>

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
                  {/* Portrait */}
                  <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-[#2a2a2a] overflow-hidden relative">
                    <img 
                      src={portraitImage} 
                      alt="Nergal Prescod" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Subtle animated glow border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: 'linear-gradient(45deg, #FFD700, #8B0000, #FFD700)',
                      backgroundSize: '200% 200%',
                      padding: '2px',
                      zIndex: -1,
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-full h-full rounded-2xl bg-[#050505]" />
                  </motion.div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FFD700]/0 to-[#8B0000]/0 group-hover:from-[#FFD700]/10 group-hover:to-[#8B0000]/10 transition-all duration-500" />
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
                <div className="relative p-8 md:p-10 bg-gradient-to-br from-[#0a0a0a]/70 to-[#050505]/80 rounded-lg border border-[#1a1a1a]/50 overflow-hidden backdrop-blur-sm">
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#8B0000] opacity-40" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#FFD700] opacity-40" />

                  <div className="relative space-y-6 text-gray-300 text-base md:text-lg leading-relaxed z-10">
                    {/* Opening statement */}
                    <p className="text-lg md:text-xl text-white font-light">
                      I'm a software engineer and creative technologist working at the intersection of AI, symbolic storytelling, and multimedia design.
                    </p>

                    {/* Technical foundation */}
                    <p>
                      With a foundation in full-stack development and machine learning, I build intelligent systems that adapt, learn, and create meaning. My primary language is <span className="text-[#FFD700]">C#</span>, where I first developed my programming foundation, and I've since expanded into <span className="text-[#FFD700]">Python, JavaScript, SQL, HTML, and CSS</span>.
                    </p>

                    {/* Professional experience */}
                    <p>
                      Professionally, I've worked as a <span className="text-white font-medium">Software Engineer at Vertafore</span>, maintaining production codebases, building internal tools, debugging complex systems, and contributing to real-world applications used at scale.
                    </p>

                    {/* Creative skills */}
                    <p>
                      Beyond engineering, I design and develop interactive experiences from scratch using tools like <span className="text-[#FFD700]">Adobe Creative Suite</span> — Photoshop, Illustrator, After Effects, and InDesign — blending logic and visual storytelling into cohesive digital systems.
                    </p>

                    {/* Hardware/maker side */}
                    <p>
                      Outside of code, I build. From a self-assembled robotic arm powered by <span className="text-[#FFD700]">Arduino</span> to a <span className="text-[#FFD700]">Raspberry Pi AI assistant</span> integrating voice and automation, I experiment at the edge of software and hardware.
                    </p>

                    {/* Core philosophy */}
                    <p className="text-white font-light">
                      At my core, I explore the space between structure and symbolism — where engineering meets art.
                    </p>

                    {/* Golden spacer */}
                    <div className="w-20 h-px bg-gradient-to-r from-[#FFD700] to-transparent opacity-50 my-6" />

                    {/* Closing statement - highlighted */}
                    <p className="text-[#FFD700] text-lg md:text-xl font-light italic border-l-2 border-[#FFD700] pl-6">
                      Currently crafting experiences that bridge the digital and the cosmic.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-6xl text-white" style={{ fontWeight: 300 }}>
              Let's Connect
            </h2>

            <p className="text-xl text-gray-400 max-w-lg mx-auto">
              Interested in collaboration, innovation, or just a conversation about the future?
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-8">
              {[
                { 
                  icon: Mail, 
                  label: 'Email',
                  href: 'mailto:nergalworks@gmail.com'
                },
                { 
                  icon: Github, 
                  label: 'GitHub',
                  href: 'https://github.com/thebuugieman',
                  target: '_blank'
                },
                { 
                  icon: Linkedin, 
                  label: 'LinkedIn',
                  href: 'https://www.linkedin.com/in/nergal-prescod-95978b246',
                  target: '_blank'
                }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.target}
                  rel={social.target ? "noopener noreferrer" : undefined}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative p-4 bg-gradient-to-br from-[#0a0a0a] to-[#050505] rounded-full border border-[#1a1a1a] hover:border-[#FFD700] transition-colors duration-300"
                >
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-[#FFD700] transition-colors duration-300" />
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#FFD700] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  
                  {/* Orbiting particles on hover */}
                  {[...Array(3)].map((_, j) => (
                    <motion.div
                      key={j}
                      className="absolute w-1 h-1 bg-[#FFD700] rounded-full opacity-0 group-hover:opacity-100"
                      style={{ left: '50%', top: '50%' }}
                      animate={{
                        x: [
                          0,
                          Math.cos((j * Math.PI * 2) / 3) * 30,
                          0
                        ],
                        y: [
                          0,
                          Math.sin((j * Math.PI * 2) / 3) * 30,
                          0
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: j * 0.2,
                      }}
                    />
                  ))}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="mailto:nergalworks@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#8B0000] to-[#FFD700] rounded-full text-white font-medium text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#FFD700] to-[#8B0000]"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Decorative element */}
            <div className="pt-12">
              <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#8B0000] to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-600 text-sm">
              © 2026 Nergal Prescod. Crafted with intention.
            </p>
            
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

            <p className="text-gray-600 text-sm">Built with Motion & React</p>
          </div>
        </div>
      </footer>
    </div>
  );
}