import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Primary one-page sections live on /
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goHome = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToRouteTop = (target: string) => {
    if (location.pathname === target) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    navigate(target);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const navItems = [
    { label: 'Projects', type: 'section', target: 'projects' },
    { label: 'About Me', type: 'section', target: 'about-me' },
    { label: 'Blog', type: 'route', target: '/blog' },
    { label: 'Contact', type: 'section', target: 'contact' },
  ] as const;

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
    >
      {/* Terminal Window Container - Full Width */}
      <div className={`relative transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md' : 'bg-[#0a0a0a]/80 backdrop-blur-sm'
      } border-b border-[#FFD700]/30 shadow-lg shadow-[#FFD700]/10`}>
        {/* Terminal Window Header */}
        <div className="flex items-center gap-2 px-6 md:px-12 py-2 border-b border-[#FFD700]/20 bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a]">
          {/* Terminal Buttons */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#8B0000]" />
            <div className="w-3 h-3 rounded-full bg-[#FFD700]" />
            <div className="w-3 h-3 rounded-full bg-[#00FF00]" />
          </div>
          {/* Terminal Title */}
          <div className="flex-1 text-center">
            <span className="text-xs font-mono text-gray-500">~/navigation/menu.sh</span>
          </div>
        </div>

        {/* Navigation Content */}
        <div className="px-6 md:px-12 py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl md:text-2xl tracking-wider cursor-pointer text-center md:text-left font-mono"
              style={{
                color: '#FFD700',
                fontWeight: 700,
                textShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
              }}
              onClick={goHome}
            >
              <span className="text-[#8B0000]">{'>'}</span> NERGAL LABS
            </motion.div>

            {/* Navigation Links */}
            <div className="flex items-center gap-6 md:gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.label}
                  onClick={() => {
                    if (item.type === 'route') {
                      goToRouteTop(item.target);
                      return;
                    }
                    scrollToSection(item.target);
                  }}
                  whileHover={{ scale: 1.1, color: '#FFD700' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-white text-base md:text-lg font-mono tracking-wide transition-colors duration-300 hover:text-[#FFD700] relative group whitespace-nowrap"
                >
                  <span className="text-[#FFD700] mr-1">$</span>{item.label.toLowerCase().replace(' ', '_')}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FFD700]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}