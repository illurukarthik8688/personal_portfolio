import { motion } from 'framer-motion';
import { User, Code, Brain, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-text-primary mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 glass-card p-8 rounded-3xl"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary-light/10 rounded-xl">
                <User className="text-primary" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Who I Am</h3>
                <p className="text-text-secondary leading-relaxed text-lg">
                  I am a final-year B.Tech student specializing in Artificial Intelligence.
                  My passion lies in building and optimizing AI-driven solutions using MLOps practices.
                  With hands-on experience in machine learning, computer vision, and data analysis,
                  I aim to deliver scalable, data-driven impact.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-white/10 dark:border-slate-700/50">
                <h4 className="font-bold text-primary mb-2">Education</h4>
                <p className="text-text-primary font-medium">B.Tech in CSE (AI)</p>
                <p className="text-sm text-text-secondary">GPCET (2022 - 2026)</p>
                <p className="text-sm text-text-secondary mt-1">CGPA: 8.02 / 10.0</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-white/10 dark:border-slate-700/50">
                <h4 className="font-bold text-secondary mb-2">Focus Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {['Generative AI', 'Computer Vision', 'MLOps', 'DevOps'].map((interest) => (
                    <span key={interest} className="px-3 py-1 text-xs font-medium bg-secondary-light/10 text-secondary rounded-full">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Highlights */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-6 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                  <Code size={24} />
                </div>
                <h3 className="font-bold text-text-primary">Technical Proficiency</h3>
              </div>
              <p className="text-text-secondary text-sm">
                Skilled in Python, TensorFlow, Docker, and CI/CD pipelines for robust AI deployment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass-card p-6 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                  <Brain size={24} />
                </div>
                <h3 className="font-bold text-text-primary">Problem Solver</h3>
              </div>
              <p className="text-text-secondary text-sm">
                Applying advanced algorithms to solve real-world problems in Data Quality and Automation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="glass-card p-6 rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400">
                  <Rocket size={24} />
                </div>
                <h3 className="font-bold text-text-primary">Leadership</h3>
              </div>
              <p className="text-text-secondary text-sm">
                Campus Ambassador for GeeksforGeeks, leading workshops for 500+ students.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
