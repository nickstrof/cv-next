'use client';
import {
  createContext,
  useState,
  useLayoutEffect,
  useContext,
  ReactNode,
} from 'react';
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const applyTheme = (t: Theme) => {
    setTheme(t);
    try {
      localStorage.setItem('theme', t);
    } catch {}
    document.documentElement.classList.toggle('dark', t === 'dark');
  };
  const toggleTheme = () => applyTheme(theme === 'light' ? 'dark' : 'light');
  useLayoutEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    applyTheme(saved ?? system);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme: applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
};












// 'use client';
// import { createContext, useState, useEffect, useContext } from 'react';
// type Theme = 'light' | 'dark';
// interface ThemeContextType {
//   theme: Theme;
//   toggleTheme: () => void;
// }
// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [theme, setTheme] = useState<Theme>('light');
//   useEffect(() => {
//     const saved = localStorage.getItem('theme') as Theme | null;
//     const system =
//       window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//     const initial = saved || system;
//     setTheme(initial);
//   }, []);
//   useEffect(() => {
//     document.body.classList.toggle('light', theme === 'light');
//     document.body.classList.toggle('dark', theme === 'dark');
//     localStorage.setItem('theme', theme);
//   }, [theme]);
//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };
//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
// export const useTheme = () => {
//   const ctx = useContext(ThemeContext);
//   if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
//   return ctx;
// };

