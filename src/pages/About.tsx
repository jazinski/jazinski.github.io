export default function About() {
  const quickFacts = [
    { label: "Location", value: "Remote / USA" },
    { label: "Experience", value: "10+ Years" },
    { label: "Focus", value: "Full Stack & Cloud" },
    { label: "Availability", value: "Open to Projects" }
  ];

  const experience = [
    {
      year: "2020 - Present",
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      description: "Leading development of cloud-native microservices architecture, mentoring junior developers, and driving technical excellence across teams."
    },
    {
      year: "2017 - 2020",
      title: "Full Stack Developer",
      company: "Digital Solutions Co.",
      description: "Built scalable web applications using React and Node.js, implemented CI/CD pipelines, and optimized database performance."
    },
    {
      year: "2014 - 2017",
      title: "Software Engineer",
      company: "Startup Ventures",
      description: "Developed MVPs for multiple products, worked across the full stack, and contributed to product strategy and technical decisions."
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Quality First",
      description: "Writing clean, maintainable code that stands the test of time and scales with your business."
    },
    {
      icon: "🚀",
      title: "Innovation Driven",
      description: "Always exploring new technologies and approaches to solve problems more effectively."
    },
    {
      icon: "🤝",
      title: "Collaborative",
      description: "Strong believer in teamwork, knowledge sharing, and building inclusive engineering cultures."
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "Committed to staying current with industry trends and constantly improving my craft."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Profile Header */}
      <div className="text-center mb-16 animate-on-scroll">
        <div className="w-32 h-32 mx-auto mb-6 rounded-lg bg-gradient-to-br from-jazinski-gold to-jazinski-gold-light flex items-center justify-center">
          <span className="text-6xl">👨‍💻</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-4 gold-glow">
          Christopher Jazinski
        </h1>
        <p className="text-2xl text-jazinski-gold font-semibold tracking-wide">
          Full Stack Software Engineer
        </p>
      </div>

      {/* Bio Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Main Bio */}
        <div className="md:col-span-2 space-y-6 animate-on-scroll">
          <div className="card-geometric p-8">
            <h2 className="text-3xl font-bold mb-6 gold-glow">About Me</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p className="text-lg">
                Full Stack Software Engineer with a passion for building scalable web applications 
                and solving complex technical challenges.
              </p>
              <p>
                I specialize in full-stack development with expertise in modern JavaScript frameworks, 
                cloud infrastructure, and distributed systems. My experience spans across developing 
                enterprise-level applications, optimizing system performance, and implementing robust 
                CI/CD pipelines.
              </p>
              <p>
                With a strong foundation in both frontend and backend technologies, I focus on creating 
                efficient, maintainable code that delivers exceptional user experiences. I'm particularly 
                interested in cloud architecture, microservices, and leveraging cutting-edge technologies 
                to build innovative solutions.
              </p>
              <p>
                When I'm not coding, I enjoy contributing to open-source projects, exploring new 
                technologies, and sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Facts */}
        <div className="animate-on-scroll">
          <div className="card-geometric p-6">
            <h3 className="text-2xl font-bold mb-6 gold-glow">Quick Facts</h3>
            <div className="space-y-4">
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-1">
                    {fact.label}
                  </div>
                  <div className="text-jazinski-gold font-semibold">
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="mb-16 animate-on-scroll">
        <h2 className="text-4xl font-bold mb-8 text-center gold-glow">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div key={index} className="card-geometric p-8 relative">
              {/* Gold dot */}
              <div className="absolute -left-3 top-8 w-6 h-6 bg-jazinski-gold rounded-full border-4 border-dark-bg"></div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <div className="text-jazinski-gold font-bold text-lg">
                    {exp.year}
                  </div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-jazinski-gold font-semibold mb-3">
                    {exp.company}
                  </div>
                  <p className="text-gray-400">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Grid */}
      <div className="animate-on-scroll">
        <h2 className="text-4xl font-bold mb-8 text-center gold-glow">
          Values & Beliefs
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value) => (
            <div key={value.title} className="card-geometric p-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-jazinski-gold to-jazinski-gold-light flex items-center justify-center mb-4">
                <span className="text-2xl">{value.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-gray-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
