import React, { useState } from 'react';
import { useTheme, THEMES } from '../contexts/ThemeContext';

// ─── Theme Toggle Button ──────────────────────────────────────────────────────
// Fixed button bottom-left corner — click to cycle through available themes

export default function ThemeToggle() {
  const { theme, setTheme, themeConfig } = useTheme();
  const [open, setOpen] = useState(false);

  const themeList = Object.values(THEMES);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '20px',
        zIndex: 300,
      }}
    >
      {/* Theme picker dropdown */}
      {open && (
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            left: 0,
            background: 'white',
            borderRadius: '14px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            padding: '8px',
            minWidth: '160px',
            border: '1.5px solid #e2e8f0',
          }}
        >
          <p style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', padding: '4px 10px 6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Choose Theme
          </p>
          {themeList.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTheme(t.id); setOpen(false); }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                padding: '9px 12px',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: theme === t.id ? 700 : 500,
                background: theme === t.id ? '#eff6ff' : 'transparent',
                color: theme === t.id ? '#1d4ed8' : '#334155',
                transition: 'background 0.15s',
              }}
            >
              <span style={{ fontSize: '18px' }}>{t.emoji}</span>
              <span>{t.label}</span>
              {theme === t.id && (
                <span style={{ marginLeft: 'auto', color: '#3b82f6', fontSize: '12px' }}>✓</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        title="Switch Theme"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: '2px solid #e2e8f0',
          background: theme === 'snow'
            ? 'linear-gradient(135deg, #bfdbfe, #eff6ff)'
            : 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          cursor: 'pointer',
          fontSize: '22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {themeConfig.emoji}
      </button>
    </div>
  );
}
