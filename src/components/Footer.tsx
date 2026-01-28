import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const links = [
        { icon: Github, href: 'https://github.com/illurukarthik8688', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/illuru-karthik-503059269/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:illurukarthik991@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="py-12 border-t border-[var(--border)]">
            <div className="container-main">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="font-display font-semibold text-lg text-gradient">
                            Karthik Illuru
                        </p>
                        <p className="text-sm text-[var(--text-muted)]">
                            AI & ML Engineer
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-xl border border-[var(--border)] text-[var(--text-muted)] hover:text-accent hover:border-accent/50 transition-colors"
                                aria-label={link.label}
                            >
                                <link.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[var(--border)] text-center">
                    <p className="text-sm text-[var(--text-muted)] flex items-center justify-center gap-1">
                        © {currentYear} • made by Illuru karthik.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
