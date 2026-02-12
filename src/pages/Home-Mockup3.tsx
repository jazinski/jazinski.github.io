import { Link } from "react-router-dom";

export default function HomeMockup3() {
  return (
    <>
      {/* Animated Hero with Code Background */}
      <div className="relative min-h-[70vh] flex items-center justify-center mb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black dark:from-black dark:via-gray-900 dark:to-jazinski-blue/20">
          <div className="absolute inset-0 opacity-10 font-mono text-xs text-green-500 overflow-hidden whitespace-pre p-4 leading-relaxed">
            {`function buildFuture() {
  const passion = "code";
  const creativity = "design";
  const innovation = "ai";
  
  return { passion, creativity, innovation };
}

class Developer {
  constructor() {
    this.skills = ["React", "TypeScript", "Node.js"];
    this.experience = "7+ years";
  }
  
  createAwesome() {
    return "🚀";
  }
}

const jazinski = new Developer();
console.log(jazinski.createAwesome());`.repeat(20)}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center">
          <div className="text-6xl md:text-8xl font-bold text-white mb-6">
            <span className="inline-block">JAZINSKI</span>
            <div className="h-1 bg-jazinski-gold w-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 font-mono mb-8">
            $ npm install excellence --save
          </p>
        </div>
      </div>

      {/* Quick Bio Section */}
      <div className="max-w-4xl mx-auto mb-20 text-center">
        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Full Stack Software Engineer specializing in scalable web applications, 
          modern JavaScript frameworks, cloud infrastructure, and AI integration. 
          Passionate about building products that make a difference.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <span className="px-4 py-2 bg-jazinski-blue/10 dark:bg-jazinski-gold/10 text-jazinski-blue dark:text-jazinski-gold rounded-full font-semibold text-sm">
            🎯 7+ Years Experience
          </span>
          <span className="px-4 py-2 bg-jazinski-blue/10 dark:bg-jazinski-gold/10 text-jazinski-blue dark:text-jazinski-gold rounded-full font-semibold text-sm">
            🚀 50+ Projects Delivered
          </span>
          <span className="px-4 py-2 bg-jazinski-blue/10 dark:bg-jazinski-gold/10 text-jazinski-blue dark:text-jazinski-gold rounded-full font-semibold text-sm">
            ⭐ 25+ Technologies
          </span>
        </div>
        <Link 
          to="/about"
          className="inline-flex items-center gap-2 text-jazinski-blue dark:text-jazinski-gold font-semibold hover:underline"
        >
          Read Full Story →
        </Link>
      </div>

      {/* Featured Projects Gallery */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
          <a 
            href="https://github.com/jazinski"
            target="_blank"
            rel="noopener noreferrer"
            className="text-jazinski-blue dark:text-jazinski-gold font-semibold hover:underline"
          >
            View All →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all">
            <div className="aspect-video bg-gradient-to-br from-jazinski-blue to-purple-600 flex items-center justify-center relative overflow-hidden">
              <div className="text-6xl transform group-hover:scale-110 transition-transform">🤖</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">TypeScript</span>
                <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded">Node.js</span>
                <span className="text-xs px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded">AI/ML</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-jazinski-blue dark:group-hover:text-jazinski-gold transition-colors">
                AGATA Loop
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Autonomous AI agent for software engineering workflows with MCP integration and intelligent code analysis.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  142
                </span>
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all">
            <div className="aspect-video bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
              <div className="text-6xl transform group-hover:scale-110 transition-transform">🎨</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded">React</span>
                <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded">Tailwind</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-jazinski-blue dark:group-hover:text-jazinski-gold transition-colors">
                UI Component Library
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Comprehensive React component library with accessibility-first design and Tailwind CSS integration.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  67
                </span>
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  React
                </span>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all">
            <div className="aspect-video bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
              <div className="text-6xl transform group-hover:scale-110 transition-transform">📊</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">React</span>
                <span className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded">TypeScript</span>
                <span className="text-xs px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded">Tailwind</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-jazinski-blue dark:group-hover:text-jazinski-gold transition-colors">
                Portfolio Site
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Modern, responsive portfolio showcasing projects and technical expertise with dark mode support.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  28
                </span>
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  TypeScript
                </span>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all">
            <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center relative overflow-hidden">
              <div className="text-6xl transform group-hover:scale-110 transition-transform">🌐</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded">Node.js</span>
                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded">Express</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-jazinski-blue dark:group-hover:text-jazinski-gold transition-colors">
                REST API Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Scalable microservices architecture with authentication, rate limiting, and comprehensive API documentation.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  45
                </span>
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  Node.js
                </span>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all">
            <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center relative overflow-hidden">
              <div className="text-6xl transform group-hover:scale-110 transition-transform">☁️</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded">AWS</span>
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">Docker</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-jazinski-blue dark:group-hover:text-jazinski-gold transition-colors">
                Cloud Infrastructure
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Serverless architecture with auto-scaling, CI/CD pipelines, and infrastructure as code using Terraform.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  52
                </span>
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  AWS
                </span>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 hover:shadow-2xl transition-all">
            <div className="aspect-video bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center relative overflow-hidden">
              <div className="text-6xl transform group-hover:scale-110 transition-transform">📱</div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs px-2 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300 rounded">React Native</span>
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded">TypeScript</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-jazinski-blue dark:group-hover:text-jazinski-gold transition-colors">
                Mobile Application
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Cross-platform mobile app with offline support, push notifications, and seamless user experience.
              </p>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                  34
                </span>
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  React Native
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation to Other Pages */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        <Link
          to="/about"
          className="group bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:border-jazinski-blue dark:hover:border-jazinski-gold"
        >
          <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4 group-hover:scale-110 transition-transform">👨‍💻</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Learn more about my journey, experience, and what drives my passion for technology.
          </p>
        </Link>

        <Link
          to="/skills"
          className="group bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:border-jazinski-blue dark:hover:border-jazinski-gold"
        >
          <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4 group-hover:scale-110 transition-transform">🛠️</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Explore my technical expertise across frontend, backend, cloud, and DevOps technologies.
          </p>
        </Link>

        <Link
          to="/services"
          className="group bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-all hover:shadow-xl hover:border-jazinski-blue dark:hover:border-jazinski-gold"
        >
          <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4 group-hover:scale-110 transition-transform">💼</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Services</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Discover how I can help bring your ideas to life through development, design, and innovation.
          </p>
        </Link>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Build Something Amazing?</h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/contact"
            className="inline-block bg-jazinski-blue dark:bg-jazinski-gold text-white dark:text-gray-900 font-semibold px-10 py-4 rounded-lg hover:opacity-90 hover:scale-105 transition-all shadow-lg"
          >
            Get In Touch
          </Link>
          <a
            href="https://github.com/jazinski"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white dark:bg-gray-900 text-jazinski-blue dark:text-jazinski-gold font-semibold px-10 py-4 rounded-lg border-2 border-jazinski-blue dark:border-jazinski-gold hover:bg-jazinski-blue dark:hover:bg-jazinski-gold hover:text-white dark:hover:text-gray-900 transition-all"
          >
            View GitHub
          </a>
        </div>
      </div>
    </>
  );
}
