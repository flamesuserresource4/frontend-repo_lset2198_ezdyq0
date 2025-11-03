import { useEffect, useState } from 'react';
import { Sun, Moon, Settings } from 'lucide-react';

export default function Navbar() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);
    else setTheme('system');
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = theme === 'dark' || (theme === 'system' && systemDark);
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-white/70 backdrop-blur dark:bg-black/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="font-semibold tracking-tight">Sathvik Nagesh</a>
        <nav className="flex items-center gap-2 text-sm">
          <a href="#projects" className="rounded-md px-3 py-1.5 hover:bg-black/5 dark:hover:bg-white/5">Projects</a>
          <a href="#admin" className="inline-flex items-center gap-1 rounded-md px-3 py-1.5 hover:bg-black/5 dark:hover:bg-white/5">
            <Settings className="h-4 w-4" /> Admin
          </a>
          <div className="ml-2 inline-flex overflow-hidden rounded-md border border-black/10 dark:border-white/10">
            <button aria-label="Light" onClick={() => setTheme('light')} className={`px-2 py-1.5 ${theme==='light'?'bg-black/5 dark:bg-white/10':''}`}>
              <Sun className="h-4 w-4" />
            </button>
            <button aria-label="System" onClick={() => setTheme('system')} className={`px-2 py-1.5 ${theme==='system'?'bg-black/5 dark:bg-white/10':''}`}>
              ⌘
            </button>
            <button aria-label="Dark" onClick={() => setTheme('dark')} className={`px-2 py-1.5 ${theme==='dark'?'bg-black/5 dark:bg-white/10':''}`}>
              <Moon className="h-4 w-4" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
