import { motion } from 'framer-motion';
import { Home, User, Wrench, FolderKanban, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingDock = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDark]);

    const handleNavClick = (e: React.MouseEvent<HTMLButtonElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            window.history.pushState({}, '', href);
        }
    };

    const navItems = [
        { icon: Home, href: '#home', label: 'Home' },
        { icon: User, href: '#about', label: 'About' },
        { icon: Wrench, href: '#skills', label: 'Skills' },
        { icon: FolderKanban, href: '#projects', label: 'Projects' },
        { icon: Briefcase, href: '#experience', label: 'Experience' },
        { icon: Mail, href: '#contact', label: 'Contact' },
    ];

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-2 px-4 py-3 bg-white/80 dark:bg-[#2a1f1a]/90 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-[#3d332b]/50 shadow-2xl">
                {navItems.map((item) => (
                    <motion.button
                        key={item.label}
                        onClick={(e) => handleNavClick(e, item.href)}
                        whileHover={{ scale: 1.4, y: -8 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-xl text-[var(--text-secondary)] hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                        aria-label={item.label}
                    >
                        <item.icon size={22} />
                    </motion.button>
                ))}

                {/* Divider */}
                <div className="w-px h-8 bg-gray-300 dark:bg-[#3d332b] mx-1" />

                {/* Theme Toggle */}
                <motion.button
                    onClick={() => setIsDark(!isDark)}
                    whileHover={{ scale: 1.4, y: -8, rotate: 180 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 rounded-xl text-[var(--text-secondary)] hover:text-secondary hover:bg-secondary/10 transition-colors duration-200"
                    aria-label="Toggle theme"
                >
                    {isDark ? <Sun size={22} /> : <Moon size={22} />}
                </motion.button>
            </div>
        </motion.div>
    );
};

export default FloatingDock;
