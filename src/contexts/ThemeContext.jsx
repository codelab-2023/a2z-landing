import React, { createContext, useContext, useState, useEffect } from 'react';

// ─── Available Festival/Seasonal Themes ─────────────────────────────────────
export const THEMES = {
  normal: { id: 'normal', label: 'Normal', emoji: '☀️' },
  snow:   { id: 'snow',   label: 'Winter Snow', emoji: '❄️' },
  // Coming soon: uttarayan, holi, diwali ...
};

const ThemeContext = createContext({
  theme: 'snow',
  setTheme: () => {},
  themeConfig: THEMES.snow,
  darkMode: false,
  toggleDarkMode: () => {},
});

export function ThemeProvider({ children }) {
  // ── Seasonal theme ──────────────────────────────────────────────────────
  const [theme, setThemeState] = useState('snow');

  const setTheme = (t) => setThemeState(t);

  // ── Dark / Light mode ───────────────────────────────────────────────────
  const [darkMode, setDarkMode] = useState(() => {
    // Default to DARK MODE on first visit; respect user's explicit preference if saved
    const saved = localStorage.getItem('a2z-dark');
    if (saved !== null) {
      return saved === 'true';
    }
    return true; // Default dark mode on startup
  });

  // Apply / remove 'dark' class on <html> whenever darkMode changes
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('a2z-dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const themeConfig = THEMES[theme] || THEMES.snow;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeConfig, darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
