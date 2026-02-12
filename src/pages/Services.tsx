export default function Services() {
  const services = [
    {
      icon: "💻",
      title: "Full Stack Development",
      description: "Building modern web applications with cutting-edge technologies and best practices.",
      features: [
        "React & TypeScript frontend",
        "Node.js & Python backend",
        "PostgreSQL & MongoDB databases",
        "RESTful & GraphQL APIs"
      ],
      delivery: "2-4 weeks"
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user interfaces that provide exceptional user experiences.",
      features: [
        "Responsive design systems",
        "Component libraries",
        "Accessibility compliant",
        "Performance optimized"
      ],
      delivery: "1-2 weeks"
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      description: "Scalable infrastructure and automated deployment pipelines for reliable applications.",
      features: [
        "AWS cloud architecture",
        "Docker & Kubernetes",
        "CI/CD pipelines",
        "Infrastructure as Code"
      ],
      delivery: "1-3 weeks"
    },
    {
      icon: "🚀",
      title: "Performance Optimization",
      description: "Enhancing application speed, efficiency, and user experience through technical excellence.",
      features: [
        "Code optimization",
        "Bundle size reduction",
        "Database query tuning",
        "Caching strategies"
      ],
      delivery: "1-2 weeks"
    },
    {
      icon: "🔐",
      title: "Security Audits",
      description: "Comprehensive security assessments and vulnerability remediation for your applications.",
      features: [
        "OWASP compliance",
        "Penetration testing",
        "Security best practices",
        "Vulnerability patches"
      ],
      delivery: "1 week"
    },
    {
      icon: "🛠️",
      title: "Technical Consulting",
      description: "Expert guidance on architecture, technology stack selection, and best practices.",
      features: [
        "System architecture design",
        "Technology stack evaluation",
        "Code review & mentoring",
        "Best practices guidance"
      ],
      delivery: "Flexible"
    },
  ];

  const processSteps = [
    { number: 1, title: "Discovery", description: "Understanding your needs and project requirements" },
    { number: 2, title: "Planning", description: "Creating detailed technical specifications and timeline" },
    { number: 3, title: "Development", description: "Building with regular updates and feedback loops" },
    { number: 4, title: "Testing", description: "Comprehensive testing and quality assurance" },
    { number: 5, title: "Deployment", description: "Smooth launch and post-deployment support" },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 gold-glow">
          Services
        </h1>
        <p className="text-xl text-gray-400">
          Comprehensive solutions for your digital needs
        </p>
      </div>
      
      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((service) => (
          <div
            key={service.title}
            className="card-geometric p-8 animate-on-scroll flex flex-col"
          >
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-jazinski-gold to-jazinski-gold-light flex items-center justify-center mb-6">
              <span className="text-3xl">{service.icon}</span>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-3">{service.title}</h2>
            <p className="text-gray-400 mb-6">{service.description}</p>
            
            <div className="mb-6 flex-grow">
              <h3 className="text-sm font-semibold text-jazinski-gold mb-3 uppercase tracking-wide">
                Includes:
              </h3>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-gray-400 flex items-start">
                    <span className="text-jazinski-gold mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t border-dark-border pt-4 mt-auto">
              <div className="text-sm text-gray-500">
                Typical delivery: <span className="text-jazinski-gold font-semibold">{service.delivery}</span>
              </div>
            </div>
            
            <button className="btn-primary w-full mt-6">
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gold-glow">
            My Process
          </h2>
          <p className="text-xl text-gray-400">
            A structured approach to delivering exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.number} className="text-center animate-on-scroll">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-jazinski-gold to-jazinski-gold-light flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-900">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.description}</p>
              
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-jazinski-gold to-transparent" 
                     style={{ transform: 'translateX(50%)' }} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="card-geometric p-12 text-center bg-gradient-to-br from-dark-card to-[#1c2028]">
        <h2 className="text-4xl font-bold mb-4 gold-glow">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Let's discuss how I can help bring your vision to life
        </p>
        <button className="btn-primary text-lg">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
}
