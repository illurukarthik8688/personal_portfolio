import { Github, Linkedin, Mail, Twitter, Lock } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <span className="text-2xl font-display font-bold text-gradient">
                            Illuru Karthik
                        </span>
                        <p className="text-text-secondary mt-2 text-sm">
                            Building digital experiences with passion and code.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        {[
                            { icon: Github, href: "https://github.com/illurukarthik8688" },
                            { icon: Linkedin, href: "https://www.linkedin.com/in/illuru-karthik-503059269/" },
                            { icon: Twitter, href: "#" }, // Add Twitter if available
                            { icon: Mail, href: "mailto:illurukarthik991@gmail.com" },
                        ].map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-secondary hover:text-primary transition-colors transform hover:scale-110"
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="border-t border-gray-100 dark:border-slate-800 mt-8 pt-8 text-center text-sm text-text-secondary">
                    <p>&copy; {new Date().getFullYear()} Illuru Karthik. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
