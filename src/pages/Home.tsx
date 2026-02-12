import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* Hero Section with enhanced visual appeal */}
      <div className="text-center mb-20 animate-fade-in">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-gray-800 text-jazinski-blue dark:text-jazinski-gold rounded-full text-sm font-semibold mb-4">
            Welcome to Jazinski
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          Code. Create.{" "}
          <span className="text-jazinski-blue dark:text-jazinski-gold bg-gradient-to-r from-blue-600 to-blue-400 dark:from-yellow-500 dark:to-yellow-300 bg-clip-text text-transparent">
            Innovate.
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Building exceptional web experiences with modern technologies and creative solutions.
        </p>
      </div>

      {/* Content Cards with enhanced styling */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <Link
          to="/about"
          className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
        >
          <div className="text-jazinski-blue dark:text-jazinski-gold text-5xl mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6">
            👨‍💻
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-jazinski-blue dark:group-hover:text-jazinski-gold transition-colors">
            About
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Learn more about Jazinski and our passion for building exceptional web experiences.
          </p>
          <div className="mt-6 text-jazinski-blue dark:text-jazinski-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Learn more →
          </div>
        </Link>

        <Link
          to="/skills"
          className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
        >
          <div className="text-jazinski-blue dark:text-jazinski-gold text-5xl mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6">
            🛠️
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-jazinski-blue dark:group-hover:text-jazinski-gold transition-colors">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Explore our technical expertise and the technologies we work with.
          </p>
          <div className="mt-6 text-jazinski-blue dark:text-jazinski-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            Explore skills →
          </div>
        </Link>

        <Link
          to="/services"
          className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
        >
          <div className="text-jazinski-blue dark:text-jazinski-gold text-5xl mb-6 transition-transform group-hover:scale-110 group-hover:rotate-6">
            💼
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-jazinski-blue dark:group-hover:text-jazinski-gold transition-colors">
            Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            Discover our comprehensive solutions for development, design, and innovation.
          </p>
          <div className="mt-6 text-jazinski-blue dark:text-jazinski-gold font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
            View services →
          </div>
        </Link>
      </div>

      {/* CTA Section with enhanced design */}
      <div className="text-center mt-20 mb-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-12 max-w-4xl mx-auto border border-gray-200 dark:border-gray-800">
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
            className="inline-block bg-jazinski-blue dark:bg-jazinski-gold text-white dark:text-gray-900 font-semibold px-10 py-4 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            View Projects on GitHub
          </a>
        </div>
      </div>
    </>
  );
}