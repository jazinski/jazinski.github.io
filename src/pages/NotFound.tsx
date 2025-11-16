import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      {/* 404 Number */}
      <h1 className="text-9xl font-bold text-jazinski-blue dark:text-jazinski-gold mb-4">
        404
      </h1>
      
      {/* Message */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Page Not Found
      </h2>
      
      <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      
      {/* Icon */}
      <div className="text-6xl mb-8">🔍</div>
      
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="inline-block bg-jazinski-blue dark:bg-jazinski-gold text-white dark:text-gray-900 font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Go to Home
        </Link>
        
        <button
          onClick={() => window.history.back()}
          className="inline-block bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          Go Back
        </button>
      </div>
      
      {/* Quick Links */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 w-full max-w-2xl">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          You might be looking for:
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/about"
            className="text-jazinski-blue dark:text-jazinski-gold hover:underline"
          >
            About
          </Link>
          <Link
            to="/skills"
            className="text-jazinski-blue dark:text-jazinski-gold hover:underline"
          >
            Skills
          </Link>
          <Link
            to="/services"
            className="text-jazinski-blue dark:text-jazinski-gold hover:underline"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-jazinski-blue dark:text-jazinski-gold hover:underline"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
