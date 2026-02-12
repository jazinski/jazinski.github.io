export default function Projects() {
  const featuredProject = {
    title: "Enterprise E-Commerce Platform",
    description: "Full-stack e-commerce solution with microservices architecture, real-time inventory management, and AI-powered recommendations",
    tech: ["React", "Node.js", "PostgreSQL", "AWS", "Docker", "Kubernetes"],
    image: "🛍️",
    github: "https://github.com/jazinski/ecommerce-platform",
    demo: "https://demo.jazinski.dev/ecommerce"
  };

  const projects = [
    {
      title: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing and context-aware responses",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      image: "🤖",
      github: "https://github.com/jazinski/ai-chat",
      demo: "https://demo.jazinski.dev/ai-chat"
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Live data visualization platform with WebSocket integration and custom metrics",
      tech: ["Vue.js", "Node.js", "Redis", "D3.js"],
      image: "📊",
      github: "https://github.com/jazinski/analytics-dashboard",
      demo: "https://demo.jazinski.dev/analytics"
    },
    {
      title: "DevOps Automation Suite",
      description: "CI/CD pipeline orchestration with automated testing and deployment workflows",
      tech: ["GitHub Actions", "Docker", "Terraform", "AWS"],
      image: "🚀",
      github: "https://github.com/jazinski/devops-suite",
      demo: null
    },
    {
      title: "Mobile-First Social Network",
      description: "Progressive web app for community engagement with real-time messaging",
      tech: ["React Native", "Firebase", "TypeScript", "GraphQL"],
      image: "📱",
      github: "https://github.com/jazinski/social-network",
      demo: "https://demo.jazinski.dev/social"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure and transparent voting platform using smart contracts",
      tech: ["Solidity", "Web3.js", "React", "Ethereum"],
      image: "🗳️",
      github: "https://github.com/jazinski/blockchain-voting",
      demo: null
    },
    {
      title: "Task Management CLI",
      description: "Command-line tool for project management with Git integration",
      tech: ["Rust", "CLI", "SQLite"],
      image: "⚡",
      github: "https://github.com/jazinski/task-cli",
      demo: null
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 gold-glow">
          Projects
        </h1>
        <p className="text-xl text-gray-400">
          A showcase of my recent work and technical experiments
        </p>
      </div>

      {/* Featured Project */}
      <div className="card-geometric p-8 md:p-12 mb-16 animate-on-scroll">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-jazinski-gold to-jazinski-gold-light flex items-center justify-center flex-shrink-0">
            <span className="text-4xl">{featuredProject.image}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-jazinski-gold text-gray-900 text-xs font-bold uppercase tracking-wide rounded">
                Featured
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gold-glow">
              {featuredProject.title}
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              {featuredProject.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-jazinski-gold text-jazinski-gold text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                🐙 View Code
              </a>
              {featuredProject.demo && (
                <a
                  href={featuredProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  ✨ Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="card-geometric p-6 animate-on-scroll flex flex-col"
          >
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-jazinski-gold to-jazinski-gold-light flex items-center justify-center mb-4">
              <span className="text-3xl">{project.image}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">
              {project.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-4 flex-1">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 border border-jazinski-gold/50 text-jazinski-gold text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-3 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 border-2 border-jazinski-gold text-jazinski-gold rounded-lg text-center hover:bg-jazinski-gold hover:text-gray-900 transition-all duration-300 text-sm font-semibold"
              >
                Code
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-jazinski-gold to-jazinski-gold-light text-gray-900 rounded-lg text-center hover:shadow-glow transition-all duration-300 text-sm font-semibold"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 mb-6">
          Want to see more? Check out my GitHub profile for additional projects and open source contributions.
        </p>
        <a
          href="https://github.com/jazinski"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          🐙 View All on GitHub
        </a>
      </div>
    </div>
  );
}
