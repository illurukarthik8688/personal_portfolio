import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Download, Code2, Zap, Trophy } from 'lucide-react';

const BentoHero = () => {
    const techStack = ['Python', 'TensorFlow', 'Docker', 'React', 'TypeScript', 'AWS'];

    return (
        <section id="home" className="min-h-screen pt-8 pb-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">

                    {/* Main Intro Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-2 lg:col-span-2 row-span-2 p-8 rounded-3xl bg-[var(--bg-secondary)] border border-white/10 dark:border-[#2d3a4f]/50 flex flex-col justify-between"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-6">
                                <span className="w-2 h-2 bg-green-400 rounded-full" />
                                Open to opportunities
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[var(--text-primary)] leading-tight mb-4">
                                Hey, I'm{' '}
                                <span className="text-primary">Karthik</span>
                                <span className="ml-2">👋</span>
                            </h1>
                            <p className="text-lg text-[var(--text-secondary)] max-w-md">
                                AI & ML Engineer building intelligent solutions. Final-year B.Tech @ GPCET.
                            </p>
                        </div>
                        <div className="flex gap-3 mt-6">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors flex items-center gap-2"
                            >
                                <Mail size={18} />
                                Let's Talk
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1AmSTWVgMvhAhIvwxlQvyaCZTuMLQMcL4/view"
                                target="_blank"
                                className="px-6 py-3 bg-white/10 rounded-xl font-semibold flex items-center gap-2 border border-white/20 hover:bg-white/20 transition-colors"
                            >
                                <Download size={18} />
                                Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* CGPA Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="p-6 rounded-3xl bg-[var(--bg-secondary)] border border-white/10 dark:border-[#3d332b]/50 flex flex-col justify-between"
                    >
                        <Trophy className="text-yellow-500" size={28} />
                        <div>
                            <p className="text-3xl font-bold text-[var(--text-primary)]">8.02</p>
                            <p className="text-sm text-[var(--text-secondary)]">CGPA</p>
                        </div>
                    </motion.div>

                    {/* Projects Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="p-6 rounded-3xl bg-[var(--bg-secondary)] border border-white/10 dark:border-[#3d332b]/50 flex flex-col justify-between"
                    >
                        <Code2 className="text-primary" size={28} />
                        <div>
                            <p className="text-3xl font-bold text-[var(--text-primary)]">5+</p>
                            <p className="text-sm text-[var(--text-secondary)]">Projects</p>
                        </div>
                    </motion.div>

                    {/* Internships Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="p-6 rounded-3xl bg-[var(--bg-secondary)] border border-white/10 dark:border-[#3d332b]/50 flex flex-col justify-between"
                    >
                        <Zap className="text-green-500" size={28} />
                        <div>
                            <p className="text-3xl font-bold text-[var(--text-primary)]">2</p>
                            <p className="text-sm text-[var(--text-secondary)]">Internships</p>
                        </div>
                    </motion.div>

                    {/* Location Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="p-6 rounded-3xl bg-[var(--bg-secondary)] border border-white/10 dark:border-[#3d332b]/50 flex flex-col justify-between"
                    >
                        <MapPin className="text-red-400" size={28} />
                        <div>
                            <p className="text-sm text-[var(--text-secondary)]">Based in</p>
                            <p className="text-xl font-bold text-[var(--text-primary)]">India 🇮🇳</p>
                        </div>
                    </motion.div>

                    {/* Tech Stack Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="md:col-span-2 p-6 rounded-3xl bg-[var(--bg-secondary)] border border-white/10 dark:border-[#3d332b]/50"
                    >
                        <p className="text-sm text-[var(--text-secondary)] mb-4">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Social Links Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="md:col-span-2 lg:col-span-2 p-6 rounded-3xl bg-[var(--bg-secondary)] border border-white/10 dark:border-[#3d332b]/50"
                    >
                        <p className="text-sm text-[var(--text-secondary)] mb-4">Connect</p>
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: 'https://github.com/illurukarthik8688', label: 'GitHub' },
                                { icon: Linkedin, href: 'https://www.linkedin.com/in/illuru-karthik-503059269/', label: 'LinkedIn' },
                                { icon: Mail, href: 'mailto:illurukarthik991@gmail.com', label: 'Email' },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 rounded-2xl bg-white/5 hover:bg-primary/10 transition-colors"
                                >
                                    <social.icon size={24} className="text-[var(--text-secondary)]" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default BentoHero;
