import { Github, Linkedin, Mail, Phone, Download, ArrowRight, Code2, Cpu, Terminal, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-900 animate-gradient"></div>

      {/* Abstract Shapes */}
      <motion.div
        animate={{
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-96 h-96 bg-primary-light/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 pointer-events-none"
      />
      <motion.div
        animate={{
          y: [20, -20, 20],
          rotate: [0, -5, 5, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-light/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-display mb-6 tracking-tight">
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Illuru Karthik
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-primary to-secondary opacity-20 blur-sm rounded-full"></span>
            </span>
          </motion.h1>

          {/* Subtitle with Icons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <span className="p-2 bg-primary-light/10 rounded-lg text-primary">
              <Code2 size={24} />
            </span>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-secondary">
              AI & ML Specialist
            </p>
            <span className="p-2 bg-secondary-light/10 rounded-lg text-secondary">
              <Cpu size={24} />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed">
            Final-year B.Tech Student at <span className="font-semibold text-text-primary">GPCET</span> •
            Passionate about building scalable AI solutions using
            <span className="font-semibold text-text-primary"> Python</span>,
            <span className="font-semibold text-text-primary"> TensorFlow</span>, and
            <span className="font-semibold text-text-primary"> Docker</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-300"
            >
              <Mail size={20} />
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a target='blank'
              href="https://github.com/illurukarthik8688"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-text-primary rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-transparent hover:border-primary-light/20"
            >
              <Terminal size={20} />
              View Projects
            </a>

            <a target='blank'
              href="https://drive.google.com/file/d/1AmSTWVgMvhAhIvwxlQvyaCZTuMLQMcL4/view?usp=sharing"
              download="Karthik_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-light/30 text-primary dark:text-primary-light rounded-full font-semibold hover:bg-primary-light/5 hover:border-primary-light hover:scale-105 transition-all duration-300"
            >
              <Download size={20} />
              Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            {[
              { icon: Github, href: "https://github.com/illurukarthik8688", label: "GitHub", color: "hover:text-purple-600" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/illuru-karthik-503059269/", label: "LinkedIn", color: "hover:text-blue-600" },
              { icon: Mail, href: "mailto:illurukarthik991@gmail.com", label: "Email", color: "hover:text-red-500" },
              { icon: Phone, href: "tel:+918688982040", label: "Phone", color: "hover:text-green-500" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${social.color}`}
                aria-label={social.label}
              >
                <social.icon size={24} className="text-text-secondary transition-colors group-hover:text-inherit" />
              </a>
            ))}
          </motion.div>

          {/* Stats Glass Cards */}
          <motion.div
            variants={containerVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: "8.02", label: "CGPA", icon: Globe },
              { value: "5+", label: "Projects", icon: Terminal },
              { value: "2", label: "Internships", icon: Cpu },
              { value: "8+", label: "Certifications", icon: Code2 },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-2xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <stat.icon size={48} />
                </div>
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-text-secondary/30 rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-text-secondary/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
