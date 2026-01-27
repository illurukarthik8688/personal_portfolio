import { motion } from 'framer-motion';
import { Home, User, FolderKanban, Mail, Sun, Moon } from 'lucide-react';
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

    // Reduced nav items - only essential ones for mobile
    const navItems = [
        { icon: Home, href: '#home', label: 'Home' },
        { icon: User, href: '#about', label: 'About' },
        { icon: FolderKanban, href: '#projects', label: 'Projects' },
        { icon: Mail, href: '#contact', label: 'Contact' },
    ];

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        >
            <div className="flex items-center gap-1 px-3 py-2 bg-white/90 dark:bg-[#1a2332]/95 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-[#2d3a4f]/50 shadow-2xl">
                {navItems.map((item) => (
                    <motion.button
                        key={item.label}
                        onClick={(e) => handleNavClick(e, item.href)}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-primary hover:bg-primary/10 transition-colors duration-200"
                        aria-label={item.label}
                    >
                        <item.icon className="w-5 h-5" />
                    </motion.button>
                ))}

                {/* Divider */}
                <div className="w-px h-6 bg-gray-300 dark:bg-[#2d3a4f] mx-1" />

                {/* Theme Toggle */}
                <motion.button
                    onClick={() => setIsDark(!isDark)}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-secondary hover:bg-secondary/10 transition-colors duration-200"
                    aria-label="Toggle theme"
                >
                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </motion.button>
            </div>
        </motion.div>
    );
};

export default FloatingDock;
