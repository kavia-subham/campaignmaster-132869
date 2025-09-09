import { useEffect, useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * useTheme
 * Manages a simple 'light' | 'dark' theme, applying data-theme to documentElement.
 */
export function useTheme(initial = 'dark') {
  const [theme, setTheme] = useState(initial);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return {
    theme,
    setTheme,
    toggleTheme: () => setTheme((t) => (t === 'light' ? 'dark' : 'light')),
  };
}
