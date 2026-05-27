'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NODE_COUNT = 40;         // down from 70  → 780 pairs vs 2,415
const MAX_DIST = 150;
const MAX_DIST_SQ = MAX_DIST * MAX_DIST;  // compare dist² — skip sqrt until needed
const ATTRACTION = 0.00012;

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let mouseX = -9999;
    let mouseY = -9999;
    let isVisible = true;
    // cache color so we don't read the DOM every frame
    let colorCache = '107, 158, 255';

    const getColor = () => {
      colorCache = document.documentElement.getAttribute('data-theme') !== 'light'
        ? '107, 158, 255' : '45, 92, 192';
    };
    getColor();

    // Update color when theme changes
    const themeObserver = new MutationObserver(getColor);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const onMouse = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const onMouseLeave = () => { mouseX = -9999; mouseY = -9999; };
    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave, { passive: true });

    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));

    const visObserver = new IntersectionObserver(([e]) => { isVisible = e.isIntersecting; }, { threshold: 0 });
    visObserver.observe(canvas);

    const draw = () => {
      animFrame = requestAnimationFrame(draw);
      if (!isVisible) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      for (const n of nodes) {
        const dx = mouseX - n.x;
        const dy = mouseY - n.y;
        const dSq = dx * dx + dy * dy;
        if (dSq < 90000) { // 300² — skip sqrt
          n.vx += dx * ATTRACTION;
          n.vy += dy * ATTRACTION;
        }
        n.vx *= 0.995; n.vy *= 0.995;
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0)             { n.x = 0;            n.vx *= -1; }
        if (n.x > canvas.width)  { n.x = canvas.width; n.vx *= -1; }
        if (n.y < 0)             { n.y = 0;            n.vy *= -1; }
        if (n.y > canvas.height) { n.y = canvas.height; n.vy *= -1; }
      }

      // Draw edges — batch all into ONE beginPath, vary alpha via globalAlpha
      ctx.strokeStyle = `rgb(${colorCache})`;
      ctx.lineWidth = 0.6;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distSq = dx * dx + dy * dy;
          if (distSq < MAX_DIST_SQ) {
            const alpha = (1 - Math.sqrt(distSq) / MAX_DIST) * 0.4;
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw dots — single pass, single globalAlpha
      ctx.globalAlpha = 0.55;
      ctx.fillStyle = `rgb(${colorCache})`;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('mouseleave', onMouseLeave);
      visObserver.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />;
}
