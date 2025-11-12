import { Mail, Phone, Github, Linkedin, MapPin, Send, MessageCircle, Heart, Sparkles, CheckCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <MessageCircle className="text-blue-600" size={20} />
            <span className="text-sm font-semibold text-blue-600">CONTACT</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Let's <span className="gradient-text-blue">Connect</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Cards */}
          <div className="space-y-6 animate-fadeInLeft">
            <h3 className="text-2xl font-bold gradient-text mb-6">Get In Touch</h3>

            {/* Email Card */}
            <a
              href="mailto:illurukarthik991@gmail.com"
              className="group flex items-start gap-4 glass p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className="p-4 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <Mail size={28} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Email Me</p>
                <p className="text-gray-600 text-sm mb-2">Drop me a message anytime</p>
                <p className="text-blue-600 font-semibold">illurukarthik991@gmail.com</p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:+918688982040"
              className="group flex items-start gap-4 glass p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                <Phone size={28} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Call Me</p>
                <p className="text-gray-600 text-sm mb-2">Let's have a conversation</p>
                <p className="text-green-600 font-semibold">+91 8688982040</p>
              </div>
            </a>

            {/* Location Card */}
            <div className="flex items-start gap-4 glass p-6 rounded-2xl shadow-lg">
              <div className="p-4 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl shadow-lg">
                <MapPin size={28} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-gray-900 mb-1">Location</p>
                <p className="text-gray-600 text-sm mb-2">Based in</p>
                <p className="text-orange-600 font-semibold">Kurnool, Andhra Pradesh, India</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass p-6 rounded-2xl shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="text-purple-600" size={20} />
                Connect on Social Media
              </h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/illurukarthik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-2 p-4 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                  <span className="font-semibold">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/illurukarthik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 flex items-center justify-center gap-2 p-4 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                  <span className="font-semibold">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Quick Facts & CTA */}
          <div className="space-y-6 animate-fadeInRight">
            {/* Quick Facts Card */}
            <div className="glass p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold gradient-text mb-6">Quick Facts About Me</h3>
              <div className="space-y-4">
                {[
                  'Currently pursuing BTech in CS & AI at GPCET with 8.02 CGPA',
                  'Experienced in AI/ML, Full Stack Development, and DevOps',
                  'Former Campus Ambassador at GeeksforGeeks',
                  'Fluent in Telugu, English, Hindi, and Kannada',
                  'Interests: Badminton, Cricket, Stock Analysis',
                ].map((fact, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                    <p className="text-gray-700 leading-relaxed">{fact}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative glass p-8 rounded-2xl shadow-xl overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 opacity-5 group-hover:opacity-10 transition-opacity"></div>
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Work Together?</h3>
                <p className="text-gray-600 mb-6">
                  I'm excited to hear about your project and explore how we can create something amazing together!
                </p>
                <a
                  href="mailto:illurukarthik991@gmail.com?subject=Let's Work Together&body=Hi Karthik,%0D%0A%0D%0AI'd like to discuss a project with you.%0D%0A%0D%0A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 btn-glow"
                >
                  <Send size={20} />
                  Send a Message
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="flex items-center justify-center gap-3 p-4 glass rounded-2xl shadow-lg">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
              </div>
              <span className="font-semibold text-gray-700">Available for new opportunities</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-2 text-gray-600 mb-3">
            <span>Built by Illurukarthik</span>
            {/* <Heart className="text-red-500 fill-red-500" size={20} /> */}
            {/* <span>by Illurukarthik</span> */}
          </div>
          <p className="text-gray-500 text-sm">© 2025 All rights reserved</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
