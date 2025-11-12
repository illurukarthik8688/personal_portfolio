import { GraduationCap, Award, Languages, Target, Heart, Zap, Star, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Target, label: 'Goal-Oriented', color: 'purple' },
    { icon: Heart, label: 'Passionate', color: 'red' },
    { icon: Zap, label: 'Fast Learner', color: 'yellow' },
    { icon: Star, label: 'Creative', color: 'blue' },
  ];

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white via-purple-50/30 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full mb-4">
            <Star className="text-purple-600" size={20} />
            <span className="text-sm font-semibold text-purple-600">ABOUT ME</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get to <span className="gradient-text">Know Me</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming ideas into intelligent solutions through code and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description */}
          <div className="space-y-6 animate-fadeInLeft">
            <div className="glass p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold gradient-text mb-4">My Journey</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                I'm a passionate Computer Science and AI student at <span className="font-semibold text-purple-600">G Pullaiah College of Engineering and Technology</span>,
                currently maintaining an <span className="font-semibold text-blue-600">8.02 CGPA</span>. My expertise lies in building intelligent systems using AI/ML,
                developing full-stack applications, and implementing DevOps practices.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                With hands-on experience in <span className="font-semibold">Python, Java, and modern web technologies</span>, I've worked on projects
                ranging from AI-powered gesture recognition systems to self-healing CI/CD pipelines. I'm committed
                to creating innovative solutions that make a real-world impact.
              </p>

              {/* Quick Highlights */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className={`p-2 bg-${item.color}-100 rounded-lg`}>
                        <Icon size={20} className={`text-${item.color}-600`} />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              {/* Languages */}
              <div className="mt-6 flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                <Languages size={24} className="text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600 mb-1">Languages Spoken</p>
                  <p className="font-semibold text-gray-800">Telugu, English, Hindi, Kannada</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Cards */}
          <div className="space-y-6 animate-fadeInRight">
            {/* Education Card */}
            <div className="group relative glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                    <GraduationCap size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                      <TrendingUp className="text-green-500" size={20} />
                    </div>
                    <p className="text-lg font-bold text-purple-600 mb-1">BTech in CS & AI</p>
                    <p className="text-gray-700 font-medium mb-1">G Pullaiah College of Engineering and Technology</p>
                    <p className="text-gray-600">Kurnool, Andhra Pradesh</p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                        CGPA: 8.02
                      </div>
                      <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        2022 - Present
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="group relative glass p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 card-hover overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl shadow-lg">
                    <Award size={32} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Certifications</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="mt-1 p-1 bg-green-100 rounded-full">
                          <Star className="text-green-600" size={16} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Python Development</p>
                          <p className="text-sm text-gray-600">PrepInsta</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="mt-1 p-1 bg-blue-100 rounded-full">
                          <Star className="text-blue-600" size={16} />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Data Structures & Algorithms</p>
                          <p className="text-sm text-gray-600">Smart Interviews</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Fact Card */}
            <div className="glass p-6 rounded-2xl shadow-xl bg-gradient-to-br from-orange-50 to-pink-50">
              <div className="flex items-center gap-3 mb-3">
                <Heart className="text-red-500" size={24} />
                <h4 className="text-lg font-bold text-gray-900">Interests & Hobbies</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Badminton', 'Cricket', 'Stock Analysis', 'Tech Innovation', 'Problem Solving'].map((hobby) => (
                  <span
                    key={hobby}
                    className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
