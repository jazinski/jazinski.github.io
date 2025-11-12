export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to <span className="text-jazinski-blue dark:text-jazinski-gold">Jazinski</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Code. Create. Innovate.
        </p>
      </div>

      {/* Content Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-colors">
          <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4">💻</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Development</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Building modern web applications with cutting-edge technologies and best practices.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-colors">
          <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4">🎨</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Design</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Creating beautiful, intuitive user interfaces that provide exceptional user experiences.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-200 dark:border-gray-800 transition-colors">
          <div className="text-jazinski-blue dark:text-jazinski-gold text-4xl mb-4">🚀</div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Innovation</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Pushing boundaries and exploring new technologies to solve complex problems.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <a
          href="https://github.com/jazinski"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-jazinski-blue dark:bg-jazinski-gold text-white dark:text-gray-900 font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          View Projects
        </a>
      </div>
    </>
  );
}
