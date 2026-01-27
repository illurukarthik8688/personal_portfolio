import { motion } from 'framer-motion';
import { Home, User, FolderKanban, Mail, Sun, Moon, GripVertical } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const FloatingDock = () => {
    const [isDark, setIsDark] = useState(false);
    const constraintsRef = useRef(null);

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
        { icon: FolderKanban, href: '#projects', label: 'Projects' },
        { icon: Mail, href: '#contact', label: 'Contact' },
    ];

    return (
        <>
            {/* Invisible container for drag constraints */}
            <div
                ref={constraintsRef}
                className="fixed inset-0 pointer-events-none z-40"
            />

            <motion.div
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                dragMomentum={false}
                initial={{ y: 0, opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 cursor-grab active:cursor-grabbing"
                whileDrag={{ scale: 1.05 }}
            >
                <div className="flex items-center gap-0.5 px-2 py-1.5 bg-white/90 dark:bg-[#1a2332]/95 backdrop-blur-xl rounded-xl border border-white/20 dark:border-[#2d3a4f]/50 shadow-2xl">

                    {/* Drag Handle */}
                    <div className="p-1.5 text-[var(--text-secondary)]/50 cursor-grab">
                        <GripVertical className="w-4 h-4" />
                    </div>

                    {navItems.map((item) => (
                        <motion.button
                            key={item.label}
                            onClick={(e) => handleNavClick(e, item.href)}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-primary hover:bg-primary/10 transition-colors"
                            aria-label={item.label}
                        >
                            <item.icon className="w-4 h-4" />
                        </motion.button>
                    ))}

                    {/* Divider */}
                    <div className="w-px h-5 bg-gray-300 dark:bg-[#2d3a4f] mx-0.5" />

                    {/* Theme Toggle */}
                    <motion.button
                        onClick={() => setIsDark(!isDark)}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 rounded-lg text-[var(--text-secondary)] hover:text-secondary hover:bg-secondary/10 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                    </motion.button>
                </div>
            </motion.div>
        </>
    );
};

export default FloatingDock;
