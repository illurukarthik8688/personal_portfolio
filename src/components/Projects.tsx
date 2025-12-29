import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'AI-Driven Anomaly Detection',
    description: 'Designed an MLOps system to predict CI/CD pipeline failures using machine learning. Integrated TensorFlow models with Jenkins, achieving 87% prediction accuracy and reducing downtime by 35%.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Jenkins', 'Docker', 'Kubernetes', 'TensorFlow'],
    github: 'https://github.com/illurukarthik8688', // Updated to main profile as specific link wasn't provided, safe default
    demo: '#',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Smart AirCursor',
    description: 'Developed an AI-based hand gesture recognition system for touchless cursor control. Achieved 95% gesture recognition accuracy with real-time performance at 30+ FPS using MediaPipe and OpenCV.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Python', 'MediaPipe', 'OpenCV', 'TensorFlow'],
    github: 'https://github.com/illurukarthik8688',
    demo: '#',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Smart Sorting AI',
    description: 'Built a deep learning model for fresh vs rotten fruit classification using transfer learning. Trained on 5000+ labeled images and deployed via a Flask web application.',
    image: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Python', 'TensorFlow', 'Flask', 'Transfer Learning'],
    github: 'https://github.com/illurukarthik8688',
    demo: '#',
    color: 'from-green-500 to-emerald-500'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-primary mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700/50"
            >
              {/* Image Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20 group-hover:opacity-30 transition-opacity z-10`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-slate-700 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    {/* Demo link kept as placeholder since none provided */}
                  </div>
                </div>

                <p className="text-text-secondary text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary-light/5 text-primary rounded-full border border-primary-light/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors"
                >
                  View Details <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
