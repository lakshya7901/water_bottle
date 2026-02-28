import { useEffect, useRef } from "react";

const WaterBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resize();
    window.addEventListener("resize", resize);

    // Watercolor blotches with colors matching your index.css theme
    const blotches = Array.from({ length: 8 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight * 1.5,
      r: Math.random() * 250 + 100,
      hue: 195 + Math.random() * 15, // Matches your --primary hue
      sat: 30 + Math.random() * 20,
      light: 85 + Math.random() * 10,
      alpha: 0.04 + Math.random() * 0.04,
    }));

    // Soft bubbles rising
    const bubbles = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight + window.innerHeight,
      r: Math.random() * 3 + 1,
      speed: Math.random() * 0.4 + 0.1,
      opacity: Math.random() * 0.15 + 0.05,
    }));

    const draw = () => {
      time += 0.002; // Slightly slower for a smoother watercolor feel
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Watercolor Blurs
      blotches.forEach((b) => {
        const offsetX = Math.sin(time + b.y * 0.001) * 30;
        const offsetY = Math.cos(time * 0.8 + b.x * 0.001) * 20;
        
        const gradient = ctx.createRadialGradient(
          b.x + offsetX, b.y + offsetY, 0,
          b.x + offsetX, b.y + offsetY, b.r
        );
        
        gradient.addColorStop(0, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, ${b.alpha})`);
        gradient.addColorStop(0.5, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, ${b.alpha * 0.5})`);
        gradient.addColorStop(1, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // 2. Draw Soft Wave Layers
      for (let layer = 0; layer < 2; layer++) {
        const offset = layer * 0.5;
        const amplitude = 15 + layer * 10;
        const yBase = canvas.height * (0.8 + layer * 0.05);
        const alpha = 0.03 - layer * 0.01;

        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        for (let x = 0; x <= canvas.width; x += 5) {
          const y = yBase + 
                    Math.sin(x * 0.002 + time + offset) * amplitude + 
                    Math.sin(x * 0.005 + time * 1.2) * (amplitude * 0.3);
          ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.fillStyle = `hsla(195, 55%, 42%, ${alpha})`;
        ctx.fill();
      }

      // 3. Draw Bubbles
      bubbles.forEach((b) => {
        b.y -= b.speed;
        b.x += Math.sin(time * 2 + b.y * 0.01) * 0.3;
        
        if (b.y < -20) {
          b.y = canvas.height + 20;
          b.x = Math.random() * canvas.width;
        }
        
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(195, 50%, 70%, ${b.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      /* inset-0 pointer-events-none are key for Tailwind v4 layering */
      className="fixed inset-0 pointer-events-none select-none"
      style={{ zIndex: -1 }} 
    />
  );
};

export default WaterBackground;