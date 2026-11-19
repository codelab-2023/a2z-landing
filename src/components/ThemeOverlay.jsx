import React, { useState, useEffect, useRef } from 'react';
import Snowfall from 'react-snowfall';
import { useTheme } from '../contexts/ThemeContext';

// ─── Snow Theme Overlay ──────────────────────────────────────────────────────
// Renders snowfall + snowman + icy overlay when theme = 'snow'
// Renders nothing when theme = 'normal'

function Snowman() {
  const getDefaultPos = () => {
    if (typeof window === 'undefined') return { x: 0, y: 0 };
    const isSm = window.innerWidth >= 640;
    const defX = isSm ? window.innerWidth - 80 : window.innerWidth - 72;
    const defY = isSm ? window.innerHeight - 282 : window.innerHeight - 270;
    return {
      x: Math.max(10, Math.min(window.innerWidth - 74, defX)),
      y: Math.max(10, Math.min(window.innerHeight - 95, defY)),
    };
  };

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ mouseX: 0, mouseY: 0, startX: 0, startY: 0 });

  useEffect(() => {
    setIsMounted(true);
    let initialPos = getDefaultPos();

    const saved = sessionStorage.getItem('a2z_snowman_pos');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (typeof parsed.x === 'number' && typeof parsed.y === 'number') {
          initialPos = {
            x: Math.max(10, Math.min(window.innerWidth - 74, parsed.x)),
            y: Math.max(10, Math.min(window.innerHeight - 95, parsed.y)),
          };
        }
      } catch (e) {}
    }

    setPos(initialPos);

    const handleResize = () => {
      setPos(prev => ({
        x: Math.max(10, Math.min(window.innerWidth - 74, prev.x)),
        y: Math.max(10, Math.min(window.innerHeight - 95, prev.y)),
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePointerDown = (e) => {
    // Only left click (0) or touch
    if (e.button !== undefined && e.button !== 0) return;
    setIsDragging(true);

    const clientX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const clientY = e.clientY ?? e.touches?.[0]?.clientY ?? 0;

    dragStartRef.current = {
      mouseX: clientX,
      mouseY: clientY,
      startX: pos.x,
      startY: pos.y,
    };
  };

  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e) => {
      const clientX = e.clientX ?? e.touches?.[0]?.clientX;
      const clientY = e.clientY ?? e.touches?.[0]?.clientY;
      if (clientX === undefined || clientY === undefined) return;

      const dx = clientX - dragStartRef.current.mouseX;
      const dy = clientY - dragStartRef.current.mouseY;

      const nextX = Math.max(10, Math.min(window.innerWidth - 74, dragStartRef.current.startX + dx));
      const nextY = Math.max(10, Math.min(window.innerHeight - 95, dragStartRef.current.startY + dy));

      setPos({ x: nextX, y: nextY });
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      setPos((current) => {
        try {
          sessionStorage.setItem('a2z_snowman_pos', JSON.stringify(current));
        } catch (e) {}
        return current;
      });
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
    };
  }, [isDragging]);

  if (!isMounted) return null;

  return (
    <div
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
      style={{
        position: 'fixed',
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        zIndex: 9999,
        cursor: isDragging ? 'grabbing' : 'grab',
        touchAction: 'none',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        filter: isDragging
          ? 'drop-shadow(0 12px 24px rgba(0,0,0,0.45)) scale(1.08)'
          : 'drop-shadow(0 4px 12px rgba(0,0,0,0.25))',
        transition: isDragging ? 'none' : 'filter 0.2s ease, transform 0.2s ease',
        animation: isDragging ? 'none' : 'snowman-bob 3s ease-in-out infinite',
      }}
      className="pointer-events-auto"
    >
      {/* Snowman SVG */}
      <svg
        width="64"
        height="90"
        viewBox="0 0 64 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none"
      >
        {/* Bottom ball */}
        <ellipse cx="32" cy="72" rx="20" ry="18" fill="white" stroke="#93c5fd" strokeWidth="2"/>
        {/* Middle ball */}
        <ellipse cx="32" cy="45" rx="15" ry="14" fill="white" stroke="#93c5fd" strokeWidth="2"/>
        {/* Head */}
        <ellipse cx="32" cy="22" rx="11" ry="11" fill="white" stroke="#93c5fd" strokeWidth="2"/>
        {/* Eyes */}
        <circle cx="28" cy="19" r="1.8" fill="#1e3a5f"/>
        <circle cx="36" cy="19" r="1.8" fill="#1e3a5f"/>
        {/* Carrot nose */}
        <polygon points="32,22 38,24 32,26" fill="#f97316"/>
        {/* Smile */}
        <path d="M27 27 Q32 31 37 27" stroke="#1e3a5f" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
        {/* Buttons */}
        <circle cx="32" cy="39" r="2" fill="#1e3a5f"/>
        <circle cx="32" cy="46" r="2" fill="#1e3a5f"/>
        <circle cx="32" cy="53" r="2" fill="#1e3a5f"/>
        {/* Arms */}
        <line x1="17" y1="43" x2="6" y2="36" stroke="#92400e" strokeWidth="3" strokeLinecap="round"/>
        <line x1="47" y1="43" x2="58" y2="36" stroke="#92400e" strokeWidth="3" strokeLinecap="round"/>
        {/* Hat brim */}
        <rect x="20" y="12" width="24" height="3" rx="1.5" fill="#1e3a5f"/>
        {/* Hat top */}
        <rect x="23" y="1" width="18" height="12" rx="2" fill="#1e3a5f"/>
        {/* Hat stripe */}
        <rect x="23" y="8" width="18" height="2.5" rx="0" fill="#ef4444"/>
        {/* Scarf */}
        <path d="M21 30 Q32 34 43 30" stroke="#ef4444" strokeWidth="4" fill="none" strokeLinecap="round"/>
        <line x1="37" y1="31" x2="39" y2="37" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

export default function ThemeOverlay() {
  const { theme } = useTheme();
  const [crystalImages, setCrystalImages] = useState([]);
  const [snowflakeCount, setSnowflakeCount] = useState(40);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateCount = () => {
      // 16 on mobile for 60-120fps buttery smooth touch scrolling, 42 on desktop
      setSnowflakeCount(window.innerWidth < 768 ? 16 : 42);
    };
    updateCount();
    window.addEventListener('resize', updateCount);

    const sources = [
      '/snowflake-crystal-1.png',
      '/snowflake-crystal-2.png',
      '/snowflake-crystal-3.png',
    ];
    const loaded = [];
    let isMounted = true;

    sources.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loaded.push(img);
        if (isMounted && loaded.length === sources.length) {
          setCrystalImages([...loaded]);
        }
      };
    });

    return () => {
      isMounted = false;
      window.removeEventListener('resize', updateCount);
    };
  }, []);

  if (theme === 'snow') {
    return (
      <>
        {/* ❄️ Falling Snow Crystals — High visibility & 60fps smooth hardware acceleration */}
        <Snowfall
          snowflakeCount={snowflakeCount}
          images={crystalImages.length > 0 ? crystalImages : undefined}
          radius={[10, 22]}
          speed={[0.5, 1.3]}
          wind={[-0.2, 0.7]}
          rotationSpeed={[-0.6, 0.6]}
          enable3DRotation={false}
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            width: '100vw',
            height: 'calc(100vh - 64px)',
            zIndex: 30,
            pointerEvents: 'none',
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        />
        {/* 🌨️ Subtle icy blue tint overlay on whole screen - light mode only */}
        <div
          className="dark:hidden"
          style={{
            position: 'fixed',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(219,234,254,0.18) 0%, rgba(239,246,255,0.08) 100%)',
            zIndex: 39,
            pointerEvents: 'none',
          }}
        />
        {/* ☃️ Snowman */}
        <Snowman />

        {/* Snow CSS injection */}
        <style>{`
          @keyframes snowman-bob {
            0%, 100% { transform: translateY(0px) rotate(-2deg); }
            50%       { transform: translateY(-6px) rotate(2deg); }
          }

          /* Snow piled on top of buttons */
          .snow-theme-btn-snow::after {
            content: '';
            display: block;
            position: absolute;
            top: -6px; left: 10%;
            width: 80%; height: 10px;
            background: white;
            border-radius: 50% 50% 0 0;
            box-shadow: 0 -2px 6px rgba(147,197,253,0.6);
            pointer-events: none;
          }

          /* Cool icy glow on cards when snow theme is active */
          body.snow-theme .card-hover-glow:hover {
            box-shadow: 0 0 24px rgba(147, 197, 253, 0.5), 0 4px 32px rgba(147, 197, 253, 0.2) !important;
          }

          /* Icy blue accent override */
          body.snow-theme ::selection {
            background: #93c5fd;
            color: #1e3a5f;
          }
        `}</style>
      </>
    );
  }

  // Normal theme — render nothing
  return null;
}
