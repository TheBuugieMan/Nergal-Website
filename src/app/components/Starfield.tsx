import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    const onResize = () => setIsMobile(window.innerWidth < 768);
    mql.addEventListener('change', onResize);
    return () => mql.removeEventListener('change', onResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const starCount = isMobile ? 40 : 200;
    const stars: Star[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: isMobile ? 0 : Math.random() * 0.05 + 0.02,
        opacity: Math.random() * 0.5 + 0.3,
        twinkleSpeed: isMobile ? 0.005 : Math.random() * 0.02 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2
      });
    }

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      time += isMobile ? 0.02 : 0.01;

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`;
        ctx.fill();

        if (!isMobile && star.size > 1.5) {
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.size * 4
          );
          gradient.addColorStop(0, `rgba(255, 215, 0, ${0.3 * twinkle})`);
          gradient.addColorStop(1, 'rgba(255, 215, 0, 0)');
          ctx.fillStyle = gradient;
          ctx.fillRect(star.x - star.size * 4, star.y - star.size * 4, star.size * 8, star.size * 8);
        }

        if (!isMobile) {
          star.y += star.speed;
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
