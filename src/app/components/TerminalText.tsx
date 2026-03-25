import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface TerminalTextProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  showCursor?: boolean;
  prefix?: string;
}

export function TerminalText({ 
  text, 
  delay = 0, 
  speed = 50, 
  className = '', 
  showCursor = true,
  prefix = '>' 
}: TerminalTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        setIsComplete(true);
      }
    }, delay + currentIndex * speed);

    return () => clearTimeout(timeoutId);
  }, [currentIndex, text, delay, speed]);

  return (
    <div className={`font-mono ${className}`}>
      <span className="text-[#8B0000] mr-2">{prefix}</span>
      <span>{displayText}</span>
      {showCursor && !isComplete && (
        <motion.span
          className="inline-block w-2 h-5 ml-1 bg-[#FFD700]"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
      )}
    </div>
  );
}
