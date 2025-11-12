import { Code, Database, Cloud, Brain, Wrench, Users, Sparkles, TrendingUp } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'C', level: 75 },
        { name: 'MySQL', level: 80 },
      ],
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Web Development',
      icon: Code,
      skills: [
        { name: 'HTML5 & CSS', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'Flask', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Streamlit', level: 85 },
      ],
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'AI/ML & Tools',
      icon: Brain,
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'OpenCV', level: 80 },
        { name: 'Pandas & NumPy', level: 90 },
        { name: 'MediaPipe', level: 75 },
        { name: 'Matplotlib', level: 80 },
      ],
      color: 'orange',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      title: 'DevOps & Cloud',
      icon: Cloud,
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Jenkins', level: 80 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'GitLab CI/CD', level: 75 },
      ],
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Database & Concepts',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 85 },
        { name: 'DSA', level: 85 },
        { name: 'OOPS', level: 90 },
      ],
      color: 'red',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Communication', level: 90 },
        { name: 'Team Work', level: 95 },
        { name: 'Creativity', level: 85 },
        { name: 'Time Management', level: 88 },
      ],
      color: 'violet',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Sparkles className="text-blue-600" size={20} />
            <span className="text-sm font-semibold text-blue-600">EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Skills & <span className="gradient-text-blue">Technologies</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="group relative glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover animate-fadeInUp overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>

                  {/* Skills with Progress Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                          <span className="text-xs font-bold text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 ease-out group-hover/skill:shadow-lg`}
                            style={{
                              width: `${skill.level}%`,
                              animation: 'slideInLeft 1s ease-out',
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Proficiency Badge */}
                  <div className="mt-6 flex items-center gap-2 text-sm">
                    <TrendingUp className={`text-${category.color}-600`} size={16} />
                    <span className="text-gray-600 font-medium">Proficient Level</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
          <p className="text-gray-600 mb-4">Want to see my work in action?</p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 btn-glow"
          >
            View My Projects
            <Sparkles size={20} />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes slideInLeft {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
