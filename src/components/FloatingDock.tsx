import { motion } from 'framer-motion';
import { Home, User, Briefcase, FolderKanban, Mail, Sun, Moon, GripVertical } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const FloatingDock = () => {
    const [isDark, setIsDark] = useState(true); // Start in dark mode for this design
    const [activeSection, setActiveSection] = useState('home');
    const constraintsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDark) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [isDark]);

    useEffect(() => {
        // Set dark mode on mount
        window.document.documentElement.classList.add('dark');
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (href: string) => {
        const element = document.getElementById(href.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { icon: Home, href: '#home', label: 'Home' },
        { icon: User, href: '#about', label: 'About' },
        { icon: FolderKanban, href: '#projects', label: 'Projects' },
        { icon: Briefcase, href: '#experience', label: 'Experience' },
        { icon: Mail, href: '#contact', label: 'Contact' },
    ];

    return (
        <>
            <div ref={constraintsRef} className="fixed inset-0 pointer-events-none z-40" />

            <motion.nav
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                dragMomentum={false}
                whileDrag={{ scale: 1.02 }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 cursor-grab active:cursor-grabbing"
            >
                <div className="flex items-center gap-1 px-2 py-2 bg-[var(--surface)] border border-[var(--border)] rounded-2xl shadow-2xl shadow-black/20 backdrop-blur-xl">
                    {/* Drag handle */}
                    <div className="p-2 text-[var(--text-muted)] cursor-grab active:cursor-grabbing">
                        <GripVertical size={16} />
                    </div>

                    <div className="w-px h-5 bg-[var(--border)]" />

                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <motion.button
                                key={item.label}
                                onClick={() => handleClick(item.href)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className={`relative p-2.5 rounded-xl transition-all ${isActive
                                        ? 'text-accent'
                                        : 'text-[var(--text-muted)] hover:text-[var(--text)]'
                                    }`}
                                aria-label={item.label}
                            >
                                <item.icon size={18} />
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-accent/10 rounded-xl -z-10"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        );
                    })}

                    <div className="w-px h-5 bg-[var(--border)]" />

                    <motion.button
                        onClick={() => setIsDark(!isDark)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2.5 rounded-xl text-[var(--text-muted)] hover:text-mint transition-colors"
                        aria-label="Toggle theme"
                    >
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </motion.button>
                </div>
            </motion.nav>
        </>
    );
};

export default FloatingDock;
