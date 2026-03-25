import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface TerminalWindowProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export function TerminalWindow({ title = 'terminal', children, className = '' }: TerminalWindowProps) {
  return (
    <motion.div
      className={`relative border border-[#FFD700]/30 rounded-lg overflow-hidden bg-[#0a0a0a]/90 backdrop-blur-sm ${className}`}
      whileHover={{ borderColor: 'rgba(255, 215, 0, 0.6)' }}
      transition={{ duration: 0.3 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#1a1a1a]/80 border-b border-[#FFD700]/20">
        {/* Window Controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#8B0000]" />
          <div className="w-3 h-3 rounded-full bg-[#FFD700]/50" />
          <div className="w-3 h-3 rounded-full bg-[#FFD700]/30" />
        </div>
        {/* Title */}
        <span className="text-xs text-[#FFD700] font-mono ml-2">{title}</span>
      </div>

      {/* Terminal Body */}
      <div className="p-6">
        {children}
      </div>

      {/* Scan line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FFD700]/5 to-transparent pointer-events-none"
        animate={{ y: [-1000, 1000] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}
