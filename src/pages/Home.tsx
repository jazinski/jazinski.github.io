import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section with Gold & Glow theme */}
      <div className="text-center mb-20 animate-fade-in">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-dark-card text-jazinski-blue dark:text-gold rounded-full text-sm font-semibold mb-4 border border-blue-200 dark:border-dark-border">
            Welcome to Jazinski
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Code. Create.{" "}
          <span className="text-jazinski-blue dark:text-gold-glow bg-gradient-to-r from-blue-600 to-blue-400 dark:from-gold-light dark:to-gold bg-clip-text text-transparent">
            Innovate.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Building exceptional web experiences with modern technologies and creative solutions.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="max-w-4xl mx-auto mb-16 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 -mt-4 relative z-10">
          <div className="stats-card scroll-reveal">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stats-card scroll-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stats-card scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="stat-number">30+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stats-card scroll-reveal" style={{ animationDelay: '0.3s' }}>
            <div className="stat-number">15+</div>
            <div className="stat-label">Technologies</div>
          </div>
        </div>
      </div>

      {/* Content Cards with Gold & Glow geometric styling */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 px-4">
        <Link
          to="/about"
          className="card-geometric p-8 cursor-pointer"
        >
          <div className="text-5xl mb-6 transition-transform group-hover:scale-110">
            👨‍💻
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Learn more about Jazinski and our passion for building exceptional web experiences.
          </p>
          <div className="mt-6 text-jazinski-blue dark:text-gold font-semibold">
            Learn more →
          </div>
        </Link>

        <Link
          to="/skills"
          className="card-geometric p-8 cursor-pointer"
        >
          <div className="text-5xl mb-6">
            🛠️
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Explore our technical expertise and the technologies we work with.
          </p>
          <div className="mt-6 text-jazinski-blue dark:text-gold font-semibold">
            Explore skills →
          </div>
        </Link>

        <Link
          to="/services"
          className="card-geometric p-8 cursor-pointer"
        >
          <div className="text-5xl mb-6">
            💼
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Discover our comprehensive solutions for development, design, and innovation.
          </p>
          <div className="mt-6 text-jazinski-blue dark:text-gold font-semibold">
            View services →
          </div>
        </Link>
      </div>

      {/* CTA Section with gradient background */}
      <div className="text-center mt-20 mb-12 px-4">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-dark-card dark:to-dark-base rounded-2xl p-12 max-w-4xl mx-auto border border-gray-200 dark:border-dark-border">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to see our work?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
            Check out our latest projects and contributions on GitHub
          </p>
          <a
            href="https://github.com/jazinski"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary rounded-xl"
          >
            View Projects on GitHub
          </a>
        </div>
      </div>
    </>
  );
}
