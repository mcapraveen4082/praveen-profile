'use client';

import React, { useEffect, useMemo, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function LiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Stable particle count per device size.
  const palette = useMemo(
    () => ({
      bg: 'rgba(3, 7, 18, 1)',
      dotA: 'rgba(99, 102, 241, 1)', // indigo-500
      dotB: 'rgba(56, 189, 248, 1)', // sky-500
      line: 'rgba(99, 102, 241, 0.25)',
    }),
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let alive = true;
    let particles: Particle[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth ?? window.innerWidth;
      const height = parent?.clientHeight ?? window.innerHeight;

      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density based on area. Keep it light for perf.
      const count = clamp(Math.floor((width * height) / 45000), 35, 90);
      particles = Array.from({ length: count }).map(() => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const speed = 0.18 + Math.random() * 0.42;
        const angle = Math.random() * Math.PI * 2;
        return {
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          r: 0.9 + Math.random() * 1.6,
        };
      });
    };

    const drawFrame = () => {
      const parent = canvas.parentElement;
      const width = parent?.clientWidth ?? window.innerWidth;
      const height = parent?.clientHeight ?? window.innerHeight;

      // Soft fade for trailing effect.
      ctx.fillStyle = 'rgba(3, 7, 18, 0.22)';
      ctx.fillRect(0, 0, width, height);

      // Update positions.
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
      }

      // Draw dots + connecting lines.
      const maxDist = 110;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];

        // Dot
        ctx.beginPath();
        ctx.fillStyle = Math.random() > 0.5 ? palette.dotA : palette.dotB;
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.18 * alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    const start = () => {
      resize();

      // First frame immediately.
      if (!alive) return;
      ctx.fillStyle = palette.bg;
      const parent = canvas.parentElement;
      const width = parent?.clientWidth ?? window.innerWidth;
      const height = parent?.clientHeight ?? window.innerHeight;
      ctx.fillRect(0, 0, width, height);
      drawFrame();

      const tick = () => {
        if (!alive) return;
        drawFrame();
        rafId = window.requestAnimationFrame(tick);
      };
      rafId = window.requestAnimationFrame(tick);
    };

    start();
    window.addEventListener('resize', resize);

    return () => {
      alive = false;
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(rafId);
    };
  }, [palette.bg, palette.dotA, palette.dotB, palette.line]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{
        background:
          'radial-gradient(900px circle at 10% 10%, rgba(56, 189, 248, 0.22), transparent 60%), radial-gradient(900px circle at 90% 20%, rgba(99, 102, 241, 0.26), transparent 60%), radial-gradient(900px circle at 50% 95%, rgba(16, 185, 129, 0.14), transparent 60%), linear-gradient(to bottom, rgba(5, 8, 22, 1), rgba(5, 8, 22, 1))',
      }}
    >
      {/* Tech mesh "image" layer (embedded SVG) */}
      <div
        className="absolute inset-[-8%] opacity-35"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1400' height='900' viewBox='0 0 1400 900'%3E%3Cdefs%3E%3ClinearGradient id='lg' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%2322d3ee' stop-opacity='0.22'/%3E%3Cstop offset='100%25' stop-color='%236366f1' stop-opacity='0.26'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg stroke='url(%23lg)' stroke-opacity='0.45' fill='none'%3E%3Cpath d='M0 140 C200 110, 360 230, 560 180 S940 80, 1400 150'/%3E%3Cpath d='M0 300 C180 360, 440 220, 700 310 S1120 390, 1400 260'/%3E%3Cpath d='M0 470 C230 420, 420 560, 660 510 S1080 430, 1400 520'/%3E%3Cpath d='M0 660 C210 730, 460 600, 700 680 S1140 760, 1400 650'/%3E%3C/g%3E%3Cg fill='%2338bdf8' fill-opacity='0.25'%3E%3Ccircle cx='140' cy='132' r='2'/%3E%3Ccircle cx='336' cy='226' r='2'/%3E%3Ccircle cx='620' cy='182' r='2'/%3E%3Ccircle cx='822' cy='108' r='2'/%3E%3Ccircle cx='1095' cy='86' r='2'/%3E%3Ccircle cx='304' cy='357' r='2'/%3E%3Ccircle cx='758' cy='312' r='2'/%3E%3Ccircle cx='1160' cy='385' r='2'/%3E%3Ccircle cx='228' cy='426' r='2'/%3E%3Ccircle cx='677' cy='509' r='2'/%3E%3Ccircle cx='1048' cy='434' r='2'/%3E%3Ccircle cx='303' cy='732' r='2'/%3E%3Ccircle cx='707' cy='681' r='2'/%3E%3Ccircle cx='1210' cy='762' r='2'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'contrast(1.08) saturate(1.1)',
          animation: 'meshDrift 18s ease-in-out infinite alternate',
        }}
      />

      {/* Animated gradient wash */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background:
            'radial-gradient(900px circle at 10% 10%, rgba(56, 189, 248, 0.28), transparent 60%), radial-gradient(900px circle at 90% 20%, rgba(99, 102, 241, 0.30), transparent 60%), radial-gradient(900px circle at 50% 95%, rgba(16, 185, 129, 0.16), transparent 60%)',
          animation: 'liveBgFloat 6.5s ease-in-out infinite',
        }}
      />

      {/* Moving grid pass to make motion clearly visible */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(99,102,241,0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(56,189,248,0.24) 1px, transparent 1px)',
          backgroundSize: '46px 46px',
          animation: 'gridDrift 14s linear infinite',
        }}
      />

      {/* Aurora sweep layer for advanced motion depth */}
      <div
        className="absolute inset-[-20%] opacity-30"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, rgba(99,102,241,0.18), rgba(56,189,248,0.10), rgba(14,165,233,0.20), rgba(16,185,129,0.10), rgba(99,102,241,0.18))',
          filter: 'blur(70px)',
          animation: 'auroraSpin 24s linear infinite',
        }}
      />

      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* Gradient keyframes (scoped to this component via global style tag) */}
      <style jsx global>{`
        @keyframes liveBgFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
            filter: saturate(1) brightness(1);
          }
          50% {
            transform: translate3d(-1.5%, 1.2%, 0) scale(1.02);
            filter: saturate(1.1) brightness(1.05);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
            filter: saturate(1) brightness(1);
          }
        }

        @keyframes meshDrift {
          0% {
            transform: translate3d(0, 0, 0) scale(1.02);
          }
          50% {
            transform: translate3d(-1.2%, 1%, 0) scale(1.05);
          }
          100% {
            transform: translate3d(1.2%, -1%, 0) scale(1.03);
          }
        }

        @keyframes auroraSpin {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.08);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }

        @keyframes gridDrift {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-22px, 14px, 0);
          }
          100% {
            transform: translate3d(-44px, 28px, 0);
          }
        }
      `}</style>
    </div>
  );
}

