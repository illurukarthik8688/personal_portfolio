import { Briefcase, Calendar, MapPin, Award, TrendingUp, Building2 } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Campus Ambassador',
      company: 'GeeksforGeeks',
      location: 'Kurnool, Andhra Pradesh',
      period: 'Jul 2024 - Jul 2025',
      description:
        'Campus mantri promoting coding culture and fostering a vibrant tech community. Committed to enhancing student learning and engagement with strong proficiency in Python and web technologies.',
      color: 'green',
      gradient: 'from-green-500 to-emerald-500',
      achievements: ['Increased community engagement by 40%'],
    },
    {
      role: 'AI Data Quality Analyst',
      company: 'Rooman Technologies',
      location: 'Remote',
      period: 'May 2025 - Jul 2025',
      description:
        'Ensured accuracy, consistency, and completeness of datasets for AI/ML projects. Performed data profiling, anomaly detection, text validation, and consistency checks. Built data quality dashboards and conducted image data assessments.',
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      achievements: ['Improved data quality by 35%', 'Built automated validation pipelines'],
    },
    {
      role: 'Artificial Intelligence Intern',
      company: 'Smart Internz',
      location: 'Remote',
      period: 'May 2025 - Jul 2025',
      description:
        'Gained best-in-class experience that motivated me to build real-time projects and solve complex AI problems. Developed Smart Sorting project to identify rotten fruits using ML.',
      color: 'orange',
      gradient: 'from-orange-500 to-amber-500',
      achievements: ['Developed Smart Sorting AI model', '85% accuracy in fruit classification'],
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
            <Briefcase className="text-purple-600" size={20} />
            <span className="text-sm font-semibold text-purple-600">EXPERIENCE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Work <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional experiences that shaped my technical expertise
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-200 via-blue-200 to-orange-200"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-fadeInUp ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className={`hidden md:block absolute top-8 ${index % 2 === 0 ? 'right-0' : 'left-0'} transform ${index % 2 === 0 ? 'translate-x-1/2' : '-translate-x-1/2'}`}>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.gradient} shadow-lg flex items-center justify-center`}>
                      <Briefcase className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="group relative glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 card-hover overflow-hidden">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                    <div className="relative">
                      {/* Header */}
                      <div className={`flex flex-wrap items-start justify-between gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
                            {exp.role}
                          </h3>
                          <div className={`flex items-center gap-2 text-lg font-semibold mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                            <Building2 size={20} className="text-purple-600" />
                            <span className="gradient-text">{exp.company}</span>
                          </div>
                        </div>
                        <div className={`flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-end' : ''}`}>
                          <span className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${exp.gradient} text-white rounded-full text-sm font-bold shadow-lg`}>
                            <Calendar size={16} />
                            {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-2 text-gray-600 text-sm">
                            <MapPin size={16} />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className={`space-y-2 ${index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-2">
                          <Award className="text-yellow-500" size={18} />
                          <span>Key Achievements</span>
                        </div>
                        {exp.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center gap-2 text-gray-700 ${index % 2 === 0 ? 'md:justify-end' : ''}`}
                          >
                            <TrendingUp className="text-green-500" size={16} />
                            <span className="text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
