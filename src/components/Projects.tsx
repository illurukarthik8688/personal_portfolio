import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI-Driven Anomaly Detection',
    description: 'MLOps system predicting CI/CD pipeline failures with 87% accuracy. Reduced downtime by 35% through automated predictions.',
    tags: ['TensorFlow', 'Jenkins', 'Docker', 'Kubernetes'],
    github: 'https://github.com/illurukarthik8688',
    featured: true,
  },
  {
    title: 'Smart AirCursor',
    description: 'Touchless cursor control using hand gesture recognition. 95% accuracy at 30+ FPS with MediaPipe and OpenCV.',
    tags: ['Python', 'MediaPipe', 'OpenCV'],
    github: 'https://github.com/illurukarthik8688',
    featured: false,
  },
  {
    title: 'Smart Sorting AI',
    description: 'Deep learning model for fruit classification via transfer learning. 92% accuracy on 5000+ images.',
    tags: ['TensorFlow', 'Flask', 'Transfer Learning'],
    github: 'https://github.com/illurukarthik8688',
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="divider mb-24" />
      <div className="container-main">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <span className="text-sm font-mono text-accent">02</span>
            <h2 className="heading-section text-[var(--text)]">Projects</h2>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          <p className="text-body max-w-2xl mb-12">
            A selection of my recent work in AI and machine learning.
          </p>

          {/* Featured project */}
          {projects.filter(p => p.featured).map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card card-hover p-8 mb-6 relative overflow-hidden group"
            >
              {/* Accent gradient */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <span className="tag-accent text-xs mb-4 inline-block">Featured</span>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="heading-card text-[var(--text)] group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-muted)] hover:text-accent hover:border-accent/50 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
                <p className="text-body mb-6 max-w-2xl">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Other projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card card-hover group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="heading-card text-[var(--text)] group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    className="p-2 rounded-lg text-[var(--text-muted)] hover:text-accent transition-colors"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
