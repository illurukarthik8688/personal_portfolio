import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';

const BentoHero = () => {
    const stats = [
        { value: '8.02', label: 'CGPA' },
        { value: '5+', label: 'Projects' },
        { value: '2', label: 'Internships' },
    ];

    const techStack = ['Python', 'TensorFlow', 'Docker', 'React', 'OpenCV', 'Flask'];

    return (
        <section id="home" className="min-h-screen flex items-center section relative overflow-hidden">
            {/* Gradient orbs */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-mint/10 rounded-full blur-3xl" />

            <div className="container-main relative z-10">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    {/* Left content - 3 cols */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="lg:col-span-3"
                    >
                        {/* Status */}
                        <div className="flex items-center gap-3 mb-8">
                            <span className="status-dot" />
                            <span className="text-sm font-medium text-mint">
                                Available for opportunities
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="heading-hero mb-6">
                            <span className="text-[var(--text)]">Hi, I'm </span>
                            <span className="text-gradient">Karthik</span>
                            <br />
                            <span className="text-[var(--text-secondary)]">AI & ML Engineer</span>
                        </h1>

                        {/* Description */}
                        <p className="text-body max-w-xl mb-8">
                            I build intelligent systems that solve real problems. Specializing in
                            computer vision, MLOps, and creating AI solutions that are both
                            powerful and production-ready.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-4 mb-12">
                            <a href="#contact" className="btn-primary">
                                Let's Connect
                                <ArrowRight size={18} />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1QY001aC-wdSVPxAWE4HEqL1TbMafydgp/view"
                                target="_blank"
                                className="btn-outline"
                            >
                                <Download size={18} />
                                Resume
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="flex items-center gap-4">
                            {[
                                { icon: Github, href: 'https://github.com/illurukarthik8688' },
                                { icon: Linkedin, href: 'https://www.linkedin.com/in/illuru-karthik-503059269/' },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    whileHover={{ scale: 1.1 }}
                                    className="p-3 rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:text-accent hover:border-accent/50 transition-colors"
                                >
                                    <social.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right cards - 2 cols */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-3">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="card text-center py-5"
                                >
                                    <p className="text-2xl font-bold text-[var(--text)] font-display">
                                        {stat.value}
                                    </p>
                                    <p className="text-xs text-[var(--text-muted)] mt-1">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="card"
                        >
                            <p className="text-sm text-[var(--text-muted)] mb-2">Currently</p>
                            <p className="font-semibold text-[var(--text)]">Final Year B.Tech</p>
                            <p className="text-[var(--text-secondary)]">CSE (AI) @ GPCET</p>
                        </motion.div>

                        {/* Tech stack */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="card"
                        >
                            <p className="text-sm text-[var(--text-muted)] mb-3">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech) => (
                                    <span key={tech} className="tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="card flex items-center gap-4"
                        >
                            <span className="text-3xl">🇮🇳</span>
                            <div>
                                <p className="text-sm text-[var(--text-muted)]">Based in</p>
                                <p className="font-medium text-[var(--text)]">Kurnool, India</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BentoHero;
