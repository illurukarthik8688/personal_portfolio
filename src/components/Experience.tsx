import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'Rooman Technologies',
    role: 'AI Data Quality Analyst (Intern)',
    period: 'May 2025 – Jul 2025',
    description: 'Conducted data profiling and validation for AI models. Applied anomaly detection improving reliability by 30%. Automated validation pipelines using Python, saving 15+ hours/week.',
    skills: ['Python', 'Data Quality', 'Anomaly Detection', 'Automation']
  },
  {
    company: 'Smart Internz',
    role: 'Artificial Intelligence Intern',
    period: 'May 2025 – Jul 2025',
    description: 'Built ML-based fruit quality classification system (92% accuracy). Implemented real-time image processing with OpenCV and Flask. Delivered end-to-end ML workflow.',
    skills: ['Machine Learning', 'OpenCV', 'Flask', 'Data Augmentation']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-light/5 rounded-full filter blur-3xl translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-primary mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent dark:before:via-gray-700">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

              {/* Icon on the line */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-primary-light/20 text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Briefcase size={16} />
              </div>

              {/* Content Card */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl border-l-4 border-l-primary hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                  <div className="flex items-center gap-2 text-primary font-bold text-lg">
                    <Building2 size={18} />
                    {exp.company}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-full bg-secondary-light/10 text-secondary">
                    <Calendar size={12} />
                    {exp.period}
                  </div>
                </div>

                <h3 className="font-bold text-text-primary mb-2">{exp.role}</h3>
                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-slate-700 text-text-secondary border border-gray-200 dark:border-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
