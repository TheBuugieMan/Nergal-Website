import { useEffect, useRef } from 'react';

export function MatrixRain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const chars =
      '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    let drops: number[] = [];

    const syncSize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w < 1 || h < 1) return;
      canvas.width = w;
      canvas.height = h;
      const columns = Math.floor(w / fontSize);
      drops = Array(Math.max(1, columns)).fill(1);
    };

    syncSize();
    const ro = new ResizeObserver(() => syncSize());
    ro.observe(container);

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(5, 5, 5, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px JetBrains Mono, monospace`;

      const columns = Math.floor(canvas.width / fontSize);
      if (drops.length !== columns) {
        drops = Array(Math.max(1, columns)).fill(1);
      }

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        const gradient = ctx.createLinearGradient(x, y - 50, x, y);
        gradient.addColorStop(0, '#FFD700');
        gradient.addColorStop(1, '#8B0000');
        ctx.fillStyle = gradient;

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="block h-full w-full pointer-events-none opacity-[0.14] sm:opacity-[0.17] md:opacity-20"
      />
    </div>
  );
}
