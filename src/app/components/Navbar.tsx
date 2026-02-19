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
    // If not on home page, navigate to home first
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

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 md:py-6 transition-all duration-300 ${
        scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#FFD700]/20' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-3xl tracking-wider cursor-pointer text-center md:text-left"
          style={{
            color: '#FFD700',
            fontWeight: 700,
            textShadow: '0 0 20px rgba(255, 215, 0, 0.5)',
          }}
          onClick={goHome}
        >
          NERGAL PRESCOD
        </motion.div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 md:gap-12">
          {['Projects', 'About Me', 'Contact'].map((item, i) => (
            <motion.button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
              whileHover={{ scale: 1.1, color: '#FFD700' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              className="text-white text-sm md:text-base tracking-wide transition-colors duration-300 hover:text-[#FFD700] relative group whitespace-nowrap"
            >
              {item}
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
    </motion.nav>
  );
}