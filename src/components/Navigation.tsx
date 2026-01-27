import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import clsx from 'clsx';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      // Use setTimeout to ensure menu closes before scrolling, preventing layout thrashing on mobile
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);

      // Manually update URL without jumping
      window.history.pushState({}, '', href);
    }
  };

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="text-primary" size={28} />
            </motion.div>
            <span className="text-2xl font-display font-bold text-gradient">
              Illuru Karthik
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={clsx(
                  'relative text-sm font-medium transition-colors duration-300',
                  activeSection === item.href.substring(1)
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-primary'
                )}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}

            <div className="pl-4 border-l border-gray-200 dark:border-gray-700">
              <ThemeToggle />
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X size={24} className="text-text-primary" />
              ) : (
                <Menu size={24} className="text-text-primary" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass border-t border-white/20 dark:border-slate-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'block px-4 py-3 rounded-xl font-medium transition-all duration-200',
                    activeSection === item.href.substring(1)
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-secondary hover:bg-gray-100 dark:hover:bg-slate-800'
                  )}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white text-center rounded-xl font-medium shadow-lg"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
