import { Github, Linkedin, Mail, Phone, Download, ArrowRight, Sparkles, Code2, Cpu } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 animate-gradient"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge removed: "Available for opportunities" */}

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-gray-900 dark:text-white mb-6 animate-fadeInUp">
            Hi, I'm{' '}
            <span className="relative inline-block">
              <span className="gradient-text">Illurukarthik</span>
              <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-purple-400 to-blue-400 opacity-30 blur-sm"></span>
            </span>
          </h1>

          {/* Subtitle with Icons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <Code2 className="text-purple-600 dark:text-purple-400" size={28} />
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">
              AI & ML Enthusiast
            </p>
            <Cpu className="text-blue-600 dark:text-blue-400" size={28} />
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            BTech in Computer Science & AI at GPCET • Passionate about building intelligent systems with AI/ML, Full Stack Development, and DevOps practices
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 btn-glow"
            >
              <Mail size={20} />
              Get in Touch
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View Projects
              <ArrowRight size={20} />
            </a>
            <a target='blank'
              href="https://drive.google.com/file/d/17hWj7SooGMD92JlX8PVPitoOw7V3lc0V/view?usp=sharing"
              download="Karthik_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 rounded-full font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:scale-105 transition-all duration-300"
            >
              <Download size={20} />
              Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com/illurukarthik8688"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/illurukarthik"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
            </a>
            <a
              href="mailto:illurukarthik991@gmail.com"
              className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors" />
            </a>
            <a
              href="tel:+918688982040"
              className="group p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Phone"
            >
              <Phone size={24} className="text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors" />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fadeInUp" style={{ animationDelay: '1s' }}>
            <div className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">8.02</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">CGPA</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">10+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Internships</div>
            </div>
            <div className="glass p-6 rounded-2xl">
              <div className="text-3xl font-bold gradient-text mb-2">15+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Skills</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
