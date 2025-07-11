// Theme management utilities

export type Theme = 'light' | 'dark';

export const THEME_KEY = 'theme';
export const THEME_ATTRIBUTE = 'data-theme';

// Get the current theme from localStorage or system preference
export function getTheme(): Theme {
  if (typeof window === 'undefined') return 'light';

  const stored = localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') {
    return stored;
  }

  // Check system preference
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  return mediaQuery.matches ? 'dark' : 'light';
}

// Set theme and update DOM and localStorage
export function setTheme(theme: Theme): void {
  if (typeof window === 'undefined') return;

  document.documentElement.setAttribute(THEME_ATTRIBUTE, theme);
  localStorage.setItem(THEME_KEY, theme);
}

// Toggle between themes
export function toggleTheme(): Theme {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
}

// Initialize theme on page load
export function initTheme(): void {
  if (typeof window === 'undefined') return;

  const theme = getTheme();
  setTheme(theme);

  // Listen for system preference changes
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (e) => {
    const stored = localStorage.getItem(THEME_KEY);
    if (!stored) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
}

// Check if current theme is dark
export function isDark(): boolean {
  return getTheme() === 'dark';
}

// Check if current theme is light
export function isLight(): boolean {
  return getTheme() === 'light';
}
