import { motion } from 'framer-motion';

const skillsData = [
  {
    category: "Languages & Core",
    skills: ["Python", "Java", "SQL", "Data Structures", "Algorithms"]
  },
  {
    category: "AI & Data Science",
    skills: ["TensorFlow", "OpenCV", "MediaPipe", "Pandas", "NumPy", "Scikit-Learn"]
  },
  {
    category: "DevOps & MLOps",
    skills: ["Docker", "Kubernetes", "Jenkins", "CI/CD Pipelines", "Git", "Linux"]
  },
  {
    category: "Web & Tools",
    skills: ["Flask", "HTML/CSS", "Postman", "VS Code"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-light/5 rounded-full filter blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-primary mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-3xl hover:border-primary-light/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-text-primary mb-6 text-center pb-4 border-b border-gray-100 dark:border-gray-700/50">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1.5 text-sm font-medium bg-white/50 dark:bg-slate-700/50 text-text-secondary rounded-lg border border-gray-100 dark:border-gray-600 hover:text-primary hover:border-primary-light/50 transition-all duration-300 shadow-sm cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
