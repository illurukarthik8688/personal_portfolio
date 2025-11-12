import { ExternalLink, Github, Rocket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart AirCursor',
      description:
        'An innovative AI-powered hand gesture recognition project that transforms finger movements into a virtual cursor. Built with MediaPipe and OpenCV for intuitive and futuristic digital interface interaction.',
      technologies: ['JavaScript', 'Python', 'CSS', 'HTML5', 'TensorFlow'],
      gradient: 'from-blue-500 to-cyan-500',
      featured: true,
    },
    {
      title: 'AI-Driven CI/CD Self-Healing',
      description:
        'Intelligent CI/CD pipeline with AI/ML integration for automatic detection and remediation of build and deployment failures. Features predictive anomaly detection and self-healing automation.',
      technologies: ['Jenkins', 'Docker', 'Python', 'TensorFlow', 'Flask', 'GitLab', 'GitHub'],
      gradient: 'from-green-500 to-emerald-500',
      featured: true,
    },
    {
      title: 'Smart Sorting AI',
      description:
        'ML model for sorting rotten and fresh fruits through image analysis. Trained using TensorFlow with data augmentation for improved generalization, enabling automation in food quality control systems.',
      technologies: ['HTML5', 'Python', 'Flask', 'TensorFlow'],
      gradient: 'from-orange-500 to-amber-500',
      featured: false,
    },
    {
      title: 'BP Store',
      description:
        'Modern and responsive e-commerce frontend for Banana Powder products. Features dynamic product listings, interactive modals, scroll-reveal animations, and lightweight Flask backend for form handling.',
      technologies: ['HTML5', 'JavaScript', 'CSS', 'Python'],
      gradient: 'from-red-500 to-pink-500',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-4">
            <Rocket className="text-cyan-600" size={20} />
            <span className="text-sm font-semibold text-cyan-600">MY WORK</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Featured <span className="gradient-text-blue">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-hover animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Header */}
              <div className={`relative h-2 bg-gradient-to-r ${project.gradient}`}>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-semibold hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-16 text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <a
            href="https://github.com/illurukarthik8688"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 btn-glow"
          >
            <Github size={20} />
            View All Projects on GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
