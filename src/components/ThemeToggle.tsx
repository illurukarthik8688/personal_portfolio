import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6">
        <motion.div
          initial={false}
          animate={{ scale: theme === 'light' ? 1 : 0, rotate: theme === 'light' ? 0 : 90 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center text-amber-500"
        >
          <Sun size={24} />
        </motion.div>

        <motion.div
          initial={false}
          animate={{ scale: theme === 'dark' ? 1 : 0, rotate: theme === 'dark' ? 0 : -90 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 flex items-center justify-center text-indigo-400"
        >
          <Moon size={24} />
        </motion.div>
      </div>
    </button>
  );
};

export default ThemeToggle;
