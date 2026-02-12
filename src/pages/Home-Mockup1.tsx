import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomeMockup1() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Code. Create. Innovate.";
  const [showScroll] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <>
      {/* Enhanced Hero Section with Gradient Background */}
      <div className="relative text-center mb-20 min-h-[60vh] flex flex-col items-center justify-center">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-jazinski-blue/10 via-purple-500/5 to-jazinski-gold/10 dark:from-jazinski-blue/20 dark:via-purple-500/10 dark:to-jazinski-gold/20 animate-gradient-shift"></div>
        </div>

        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
          Welcome to{" "}
          <span className="text-jazinski-blue dark:text-jazinski-gold bg-gradient-to-r from-jazinski-blue to-purple-600 dark:from-jazinski-gold dark:to-yellow-400 bg-clip-text text-transparent">
            Jazinski
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-light h-10">
          {typedText}
          <span className="animate-pulse">|</span>
        </p>

        {/* Scroll Indicator */}
        {showScroll && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-jazinski-blue dark:text-jazinski-gold"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        )}
      </div>

      {/* Stats Bar */}
      <div className="max-w-6xl mx-auto mb-16 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-800">
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-jazinski-blue dark:text-jazinski-gold mb-2">
              50+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Projects
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-jazinski-blue dark:text-jazinski-gold mb-2">
              5K+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Commits
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-jazinski-blue dark:text-jazinski-gold mb-2">
              25+
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              Technologies
            </div>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Featured Work
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-2xl hover:scale-[1.02] group">
            <div className="h-48 bg-gradient-to-br from-jazinski-blue to-purple-600 dark:from-jazinski-gold dark:to-yellow-500 flex items-center justify-center">
              <div className="text-white text-6xl">🤖</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">
                  TypeScript
                </span>
                <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded">
                  Node.js
                </span>
                <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded">
                  AI/ML
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-jazinski-blue dark:group-hover:text-jazinski-gold transition-colors">
                AGATA Loop
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Autonomous AI agent for software engineering workflows with MCP
                integration.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  142
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 transition-all hover:shadow-2xl hover:scale-[1.02] group">
            <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 dark:from-purple-600 dark:to-pink-500 flex items-center justify-center">
              <div className="text-white text-6xl">📊</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">
                  React
                </span>
                <span className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded">
                  TypeScript
                </span>
                <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded">
                  Tailwind
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-jazinski-blue dark:group-hover:text-jazinski-gold transition-colors">
                Portfolio Site
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Modern, responsive portfolio showcasing projects and technical
                expertise.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  28
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Content Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <Link
          to="/about"
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:scale-105 hover:border-jazinski-blue dark:hover:border-jazinski-gold cursor-pointer group"
        >
          <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4 group-hover:scale-110 transition-transform">
            👨‍💻
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            About
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Learn more about Jazinski and our passion for building exceptional
            web experiences.
          </p>
        </Link>

        <Link
          to="/skills"
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:scale-105 hover:border-jazinski-blue dark:hover:border-jazinski-gold cursor-pointer group"
        >
          <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4 group-hover:scale-110 transition-transform">
            🛠️
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore our technical expertise and the technologies we work with.
          </p>
        </Link>

        <Link
          to="/services"
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:scale-105 hover:border-jazinski-blue dark:hover:border-jazinski-gold cursor-pointer group"
        >
          <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4 group-hover:scale-110 transition-transform">
            💼
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Discover our comprehensive solutions for development, design, and
            innovation.
          </p>
        </Link>
      </div>

      {/* Dual CTA Section */}
      <div className="text-center mt-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://github.com/jazinski"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-jazinski-blue to-purple-600 dark:from-jazinski-gold dark:to-yellow-500 text-white dark:text-gray-900 font-semibold px-10 py-4 rounded-lg hover:opacity-90 hover:scale-105 transition-all shadow-lg"
        >
          View Portfolio
        </a>
        <Link
          to="/contact"
          className="inline-block bg-white dark:bg-gray-900 text-jazinski-blue dark:text-jazinski-gold font-semibold px-10 py-4 rounded-lg border-2 border-jazinski-blue dark:border-jazinski-gold hover:bg-jazinski-blue dark:hover:bg-jazinski-gold hover:text-white dark:hover:text-gray-900 transition-all"
        >
          Contact Me
        </Link>
      </div>
    </>
  );
}
