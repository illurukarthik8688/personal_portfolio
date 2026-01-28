import { motion } from 'framer-motion';
import { Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'Rooman Technologies',
    role: 'AI Data Quality Analyst',
    period: 'May 2025 – Jul 2025',
    description: 'Conducted data profiling and validation for AI models. Applied anomaly detection improving reliability by 30%. Automated validation pipelines using Python.',
    tags: ['Python', 'Data Quality', 'Automation'],
  },
  {
    company: 'Smart Internz',
    role: 'Artificial Intelligence Intern',
    period: 'May 2025 – Jul 2025',
    description: 'Built ML-based fruit classification system (92% accuracy). Implemented real-time image processing with OpenCV and Flask.',
    tags: ['Machine Learning', 'OpenCV', 'Flask'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">
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
            <span className="text-sm font-mono text-accent">03</span>
            <h2 className="heading-section text-[var(--text)]">Experience</h2>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card card-hover relative overflow-hidden"
              >
                {/* Accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-mint" />

                <div className="pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent">
                        <Building2 size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--text)]">{exp.role}</h3>
                        <p className="text-accent">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                  </div>

                  <p className="text-[var(--text-secondary)] mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
