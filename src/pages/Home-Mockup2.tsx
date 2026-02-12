import { Link } from "react-router-dom";

export default function HomeMockup2() {
  return (
    <>
      {/* Full-Screen Bold Hero */}
      <div className="relative min-h-screen -mt-8 -mx-8 mb-16 flex items-center justify-center overflow-hidden">
        {/* Diagonal Split Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-jazinski-blue to-purple-900 dark:from-black dark:via-gray-900 dark:to-jazinski-blue"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black leading-none text-white mb-8 tracking-tighter">
            JAZINSKI
          </div>
          <div className="text-2xl md:text-4xl font-light text-jazinski-gold uppercase tracking-[0.3em] mb-4">
            Full Stack Engineer
          </div>
          <div className="flex gap-8 justify-center text-white/80 text-sm">
            <span>📍 Remote</span>
            <span>✅ Available</span>
            <span>🎯 7+ Years</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Bento Box Grid Layout */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* Large Featured Card */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-jazinski-blue to-purple-600 dark:from-jazinski-gold dark:to-yellow-500 rounded-2xl p-8 text-white dark:text-gray-900 flex flex-col justify-between overflow-hidden relative group hover:scale-[1.02] transition-transform">
            <div>
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-3xl font-bold mb-2">Current Project</h3>
              <p className="text-white/90 dark:text-gray-900/90">Building autonomous AI agents with MCP protocol integration</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-white/20 dark:bg-black/20 rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-white/20 dark:bg-black/20 rounded-full text-sm">AI/ML</span>
            </div>
          </div>

          {/* GitHub Activity */}
          <div className="md:col-span-2 bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-jazinski-gold rounded-2xl p-6 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">GitHub Activity</h3>
              <span className="text-2xl">📊</span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">This Week</span>
                <span className="font-bold text-jazinski-blue dark:text-jazinski-gold">142 commits</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-jazinski-blue dark:bg-jazinski-gold w-[85%]"></div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <Link to="/about" className="bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-700 rounded-2xl p-6 hover:border-jazinski-blue dark:hover:border-jazinski-gold transition-all hover:scale-105">
            <div className="text-3xl mb-2">👨‍💻</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">About</h3>
          </Link>

          <Link to="/skills" className="bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-700 rounded-2xl p-6 hover:border-jazinski-blue dark:hover:border-jazinski-gold transition-all hover:scale-105">
            <div className="text-3xl mb-2">🛠️</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Skills</h3>
          </Link>

          <Link to="/services" className="bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-700 rounded-2xl p-6 hover:border-jazinski-blue dark:hover:border-jazinski-gold transition-all hover:scale-105">
            <div className="text-3xl mb-2">💼</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Services</h3>
          </Link>

          <Link to="/contact" className="bg-white dark:bg-gray-900 border-2 border-gray-900 dark:border-gray-700 rounded-2xl p-6 hover:border-jazinski-blue dark:hover:border-jazinski-gold transition-all hover:scale-105">
            <div className="text-3xl mb-2">📧</div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Contact</h3>
          </Link>

          {/* Latest Blog/Update */}
          <div className="md:col-span-2 bg-jazinski-gold dark:bg-jazinski-blue rounded-2xl p-6 text-gray-900 dark:text-white hover:scale-[1.02] transition-transform">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📝</span>
              <span className="text-xs uppercase tracking-wide font-bold opacity-70">Latest Update</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Building Autonomous AI Workflows</h3>
            <p className="text-sm opacity-80">Exploring MCP protocol for next-gen agent communication...</p>
            <div className="mt-4 text-xs opacity-60">2 days ago</div>
          </div>
        </div>
      </div>

      {/* Floating Action Badge */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-pulse">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span className="font-semibold text-sm">Available for Work</span>
        </div>
      </div>

      {/* Bold CTA */}
      <div className="text-center mt-16 mb-16">
        <a
          href="https://github.com/jazinski"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold text-xl px-12 py-5 rounded-none border-4 border-gray-900 dark:border-white hover:bg-jazinski-blue dark:hover:bg-jazinski-gold hover:border-jazinski-blue dark:hover:border-jazinski-gold transition-all uppercase tracking-wider"
        >
          Explore My Work →
        </a>
      </div>
    </>
  );
}
