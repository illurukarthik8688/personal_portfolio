import { motion } from 'framer-motion';
import { Code2, Brain, Users, GraduationCap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Technical',
      description: 'Python, TensorFlow, Docker, CI/CD pipelines for production AI.',
    },
    {
      icon: Brain,
      title: 'Problem Solver',
      description: 'Applying ML to solve real-world data quality challenges.',
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'GFG Ambassador, leading workshops for 500+ students.',
    },
  ];

  const skills = {
    'Languages': ['Python', 'Java', 'SQL'],
    'AI & ML': ['TensorFlow', 'OpenCV', 'MediaPipe', 'Scikit-Learn'],
    'DevOps': ['Docker', 'Kubernetes', 'Jenkins', 'Git'],
    'Web': ['Flask', 'React', 'HTML/CSS'],
  };

  return (
    <section id="about" className="section">
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
            <span className="text-sm font-mono text-accent">01</span>
            <h2 className="heading-section text-[var(--text)]">About Me</h2>
            <div className="flex-1 h-px bg-[var(--border)]" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Bio */}
            <div>
              <p className="text-body text-xl leading-relaxed mb-8">
                I'm a final-year B.Tech student with a passion for building
                <span className="text-[var(--text)]"> intelligent systems </span>
                that bridge the gap between research and production.
              </p>
              <p className="text-body mb-8">
                My focus areas include Machine Learning, Computer Vision, and MLOps.
                I believe in creating AI solutions that are not just accurate,
                but also scalable and maintainable.
              </p>

              {/* Education card */}
              <div className="card card-hover p-5 flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="font-semibold text-[var(--text)]">B.Tech in CSE (AI)</p>
                  <p className="text-[var(--text-secondary)]">GPCET • 2022 - 2026</p>
                  <p className="text-sm text-[var(--text-muted)] mt-1">CGPA: 8.02</p>
                </div>
              </div>
            </div>

            {/* Right - Skills & Highlights */}
            <div className="space-y-8">
              {/* Highlights */}
              <div className="grid gap-4">
                {highlights.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="card card-hover p-5 flex items-start gap-4"
                  >
                    <div className="p-2 rounded-lg bg-mint/10 text-mint">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--text)]">{item.title}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skills grid */}
              <div className="card p-6">
                <p className="text-sm font-medium text-[var(--text-muted)] mb-4">Skills</p>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, items]) => (
                    <div key={category}>
                      <p className="text-xs text-[var(--text-muted)] mb-2">{category}</p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill) => (
                          <span key={skill} className="tag text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
