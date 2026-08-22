'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Location {
  label: string;
  caption: string;
  match?: string;
  code: string;
  region: string;
  lat: number;
  lon: number;
  color: string;
}

const DEFAULT_LOCATIONS: Location[] = [
  {
    label: 'Malaysia',
    caption: 'Foundation in delivery, product thinking, and regional business context.',
    match: 'malaysia',
    code: 'MY',
    region: 'Southeast Asia',
    lat: 3.5,
    lon: 109.5,
    color: '#60b8ff'
  },
  {
    label: 'United Kingdom',
    caption: 'Broader leadership exposure, systems thinking, and international operating models.',
    match: 'kingdom',
    code: 'UK',
    region: 'Europe',
    lat: 52.4,
    lon: -1.9,
    color: '#00b8db'
  },
  {
    label: 'United States',
    caption: 'Product, AI strategy, advisory work, and cross-market executive collaboration.',
    match: 'states',
    code: 'US',
    region: 'North America',
    lat: 37.8,
    lon: -97,
    color: '#ffc080'
  }
];

export default function PathwayGlobe() {
  const globeCanvasRef = useRef<HTMLCanvasElement>(null);
  const starsCanvasRef = useRef<HTMLCanvasElement>(null);
  
  const [activeIdx, setActiveIdx] = useState(0);
  const [locations, setLocations] = useState<Location[]>(DEFAULT_LOCATIONS);

  const animState = useRef({
    autoSpin: true,
    rotY: 1.92,
    rotX: -0.2,
    targetRotY: 1.92,
    rafId: 0
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch('/assets/data/about-path.json');
        if (res.ok) {
          const data = await res.json();
          const pts = (data.locations || []).slice(0, 3);
          if (pts.length > 0) {
            const mapped = pts.map((p: any, index: number) => {
              const label = (p.label || '').toLowerCase();
              const fallback = DEFAULT_LOCATIONS.find(m => label.includes(m.match || '')) || DEFAULT_LOCATIONS[index] || DEFAULT_LOCATIONS[0];
              return { ...fallback, label: p.label || DEFAULT_LOCATIONS[index]?.label, caption: p.caption || DEFAULT_LOCATIONS[index]?.caption };
            });
            setLocations(mapped);
          }
        }
      } catch (e) {
        console.warn('Pathway data unavailable, using defaults');
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    const globeCanvas = globeCanvasRef.current;
    const starsCanvas = starsCanvasRef.current;
    if (!globeCanvas || !starsCanvas) return;

    const ctx = globeCanvas.getContext('2d');
    const sx = starsCanvas.getContext('2d');
    if (!ctx || !sx) return;

    const W = 260, H = 260, R = 118, cx = 130, cy = 130;
    const toRad = (d: number) => d * Math.PI / 180;

    const sizeStars = () => {
      const rect = starsCanvas.getBoundingClientRect();
      starsCanvas.width = Math.max(1, Math.floor(rect.width));
      starsCanvas.height = Math.max(1, Math.floor(rect.height));
      sx.clearRect(0, 0, starsCanvas.width, starsCanvas.height);
      for (let i = 0; i < 120; i++) {
        sx.beginPath();
        const x = Math.random() * starsCanvas.width;
        const y = Math.random() * starsCanvas.height;
        const r = Math.random() * 1.2 + 0.2;
        sx.arc(x, y, r, 0, Math.PI * 2);
        sx.fillStyle = `rgba(200,220,255,${Math.random() * 0.5 + 0.1})`;
        sx.fill();
      }
    };

    const project = (lat: number, lon: number, rY: number, rX: number) => {
      const phi = toRad(lat);
      const lambda = toRad(lon);
      const x = Math.cos(phi) * Math.sin(lambda);
      const y = Math.sin(phi);
      const z = Math.cos(phi) * Math.cos(lambda);
      const y2 = y * Math.cos(rX) - z * Math.sin(rX);
      const z2 = y * Math.sin(rX) + z * Math.cos(rX);
      const x3 = x * Math.cos(rY) + z2 * Math.sin(rY);
      const z3 = -x * Math.sin(rY) + z2 * Math.cos(rY);
      return { sx: cx + x3 * R, sy: cy - y2 * R, z: z3, visible: z3 > 0 };
    };

    const drawGlobe = (rY: number, rX: number) => {
      ctx.clearRect(0, 0, W, H);
      const grd = ctx.createRadialGradient(cx - 30, cy - 30, 10, cx, cy, R);
      grd.addColorStop(0, '#0a1626'); 
      grd.addColorStop(0.5, '#050a14'); 
      grd.addColorStop(1, '#02040a');
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fillStyle = grd; ctx.fill();
      
      ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();
      ctx.globalAlpha = 0.18; ctx.strokeStyle = '#00b8db'; ctx.lineWidth = 0.6;
      
      for (let lat = -75; lat <= 75; lat += 30) {
        ctx.beginPath(); let first = true;
        for (let lon = -180; lon <= 180; lon += 3) {
          const p = project(lat, lon, rY, rX);
          if (p.visible) { first ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy); first = false; } else first = true;
        }
        ctx.stroke();
      }
      for (let lon = -180; lon <= 180; lon += 30) {
        ctx.beginPath(); let first = true;
        for (let lat = -90; lat <= 90; lat += 3) {
          const p = project(lat, lon, rY, rX);
          if (p.visible) { first ? ctx.moveTo(p.sx, p.sy) : ctx.lineTo(p.sx, p.sy); first = false; } else first = true;
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1; ctx.restore();

      [[0, 1], [1, 2]].forEach(([i, j]) => {
        const a = locations[i];
        const b = locations[j];
        if (!a || !b) return;
        ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip(); ctx.beginPath();
        let started = false;
        for (let t = 0; t <= 70; t++) {
          const f = t / 70;
          const p = project(a.lat + (b.lat - a.lat) * f, a.lon + (b.lon - a.lon) * f, rY, rX);
          if (p.visible) { if (!started) { ctx.moveTo(p.sx, p.sy); started = true; } else ctx.lineTo(p.sx, p.sy); } else started = false;
        }
        const grad = ctx.createLinearGradient(0, 0, W, H);
        grad.addColorStop(0, a.color); grad.addColorStop(1, b.color);
        ctx.strokeStyle = grad; ctx.lineWidth = 1.8; ctx.globalAlpha = 0.72; ctx.stroke(); ctx.restore();
      });

      locations.forEach((loc, i) => {
        const p = project(loc.lat, loc.lon, rY, rX);
        if (!p.visible) return;
        const active = i === activeIdx;
        const size = active ? 7 : 5;
        
        ctx.beginPath(); ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2); ctx.fillStyle = loc.color; ctx.globalAlpha = 0.92; ctx.fill(); ctx.globalAlpha = 1;
        
        if (active) {
          [size + 4, size + 9].forEach((r, ri) => {
            ctx.beginPath(); ctx.arc(p.sx, p.sy, r, 0, Math.PI * 2); ctx.strokeStyle = loc.color; ctx.lineWidth = ri ? 0.8 : 1.5; ctx.globalAlpha = ri ? 0.18 : 0.45; ctx.stroke(); ctx.globalAlpha = 1;
          });
        }
        ctx.font = 'bold 10px "JetBrains Mono", monospace'; ctx.fillStyle = loc.color; ctx.fillText(loc.code, p.sx + size + 4, p.sy + 4);
      });

      const shine = ctx.createRadialGradient(cx - 50, cy - 50, 5, cx, cy, R);
      shine.addColorStop(0, 'rgba(255,255,255,0.07)'); shine.addColorStop(0.35, 'rgba(255,255,255,0.02)'); shine.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.fillStyle = shine; ctx.fill();
    };

    const animate = () => {
      const state = animState.current;
      const noMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (state.autoSpin && !noMotion) {
        state.rotY += 0.004;
      } else {
        const d = state.targetRotY - state.rotY;
        if (Math.abs(d) > 0.005) state.rotY += d * 0.05;
      }
      drawGlobe(state.rotY, state.rotX);
      state.rafId = requestAnimationFrame(animate);
    };

    sizeStars();
    window.addEventListener('resize', sizeStars);
    
    if (animState.current.rafId) cancelAnimationFrame(animState.current.rafId);
    animState.current.rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', sizeStars);
      if (animState.current.rafId) cancelAnimationFrame(animState.current.rafId);
    };
  }, [locations, activeIdx]);

  const handleStepClick = (index: number) => {
    setActiveIdx(index);
    const loc = locations[index];
    if (loc) {
      animState.current.autoSpin = false;
      animState.current.targetRotY = -(loc.lon * Math.PI / 180) + Math.PI * 0.3;
      animState.current.rotX = -(loc.lat * Math.PI / 180) * 0.3;
    }
  };

  return (
    <div className="relative min-h-[500px] lg:min-h-[620px] rounded-[32px] overflow-hidden bg-gradient-to-br from-section via-page to-page border border-border shadow-2xl p-8 flex flex-col h-full">
      <canvas ref={starsCanvasRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(0,184,219,0.08),transparent_26%),radial-gradient(circle_at_78%_76%,rgba(0,184,219,0.06),transparent_32%)] pointer-events-none" />
      
      <div className="relative z-10 text-center mb-8">
        <h3 className="font-mono text-[10px] font-bold tracking-[0.22em] text-accent/80 uppercase mb-2">Career Journey</h3>
        <p className="font-serif text-[28px] font-bold text-heading tracking-[-0.02em]">The Global Path</p>
      </div>

      <div className="relative z-10 flex justify-center mb-10 w-[260px] h-[260px] mx-auto">
        <canvas ref={globeCanvasRef} width={260} height={260} className="rounded-full shadow-[0_0_60px_rgba(0,184,219,0.15),inset_0_0_40px_rgba(0,0,0,0.5)]" aria-label="Animated globe showing career pathway" />
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row gap-4 mt-auto">
        {locations.map((loc, idx) => (
          <button 
            key={idx}
            onClick={() => handleStepClick(idx)}
            className={`flex-1 text-left relative p-5 rounded-2xl transition-all duration-300 ${activeIdx === idx ? 'bg-accent/10 border border-accent/40 shadow-[0_0_24px_rgba(0,184,219,0.15)] -translate-y-1' : 'bg-white/[0.03] border border-border hover:bg-white/[0.06] hover:-translate-y-0.5'}`}
          >
            <div className="font-mono text-[9px] font-bold tracking-[0.2em] text-accent/60 mb-3 uppercase">
              {String(idx + 1).padStart(2, '0')}
            </div>
            <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 text-accent font-mono font-bold text-[11px] mb-3">
              {loc.code}
            </div>
            <div className="text-[14px] font-bold text-heading mb-1 truncate">{loc.label}</div>
            <div className="text-[11px] text-muted/60 mb-3">{loc.region}</div>
            <div className="text-[12px] text-muted/80 leading-[1.5] line-clamp-3">{loc.caption}</div>
            
            {idx < locations.length - 1 && (
              <div className="hidden sm:flex absolute top-1/2 -right-[15px] -translate-y-1/2 z-20 w-6 h-6 bg-page border border-border rounded-full items-center justify-center text-accent/60">
                <ChevronRight size={14} />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
