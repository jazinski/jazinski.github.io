import { Link, NavLink } from "react-router-dom";
import { Moon, Sun, Menu, X } from "./Icons";
import { useState } from "react";

interface HeaderProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 transition-colors bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-dark-card/90 dark:border-dark-border shadow-sm">
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="transition-transform hover:scale-105">
              <img
                src="/jazinski-logo.svg"
                alt="Jazinski Logo"
                className="w-auto h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition-all font-medium ${
                  isActive
                    ? "text-jazinski-blue dark:text-gold border-b-2 border-jazinski-blue dark:border-gold pb-1"
                    : "text-gray-700 dark:text-gray-300 hover:text-jazinski-blue dark:hover:text-gold"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `transition-all font-medium ${
                  isActive
                    ? "text-jazinski-blue dark:text-gold border-b-2 border-jazinski-blue dark:border-gold pb-1"
                    : "text-gray-700 dark:text-gray-300 hover:text-jazinski-blue dark:hover:text-gold"
                }`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `transition-all font-medium ${
                  isActive
                    ? "text-jazinski-blue dark:text-gold border-b-2 border-jazinski-blue dark:border-gold pb-1"
                    : "text-gray-700 dark:text-gray-300 hover:text-jazinski-blue dark:hover:text-gold"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition-all font-medium ${
                  isActive
                    ? "text-jazinski-blue dark:text-gold border-b-2 border-jazinski-blue dark:border-gold pb-1"
                    : "text-gray-700 dark:text-gray-300 hover:text-jazinski-blue dark:hover:text-gold"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 transition-all bg-gray-100 rounded-lg dark:bg-dark-base hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-110"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun /> : <Moon />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 transition-all bg-gray-100 rounded-lg dark:bg-dark-base hover:bg-gray-200 dark:hover:bg-gray-800"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-dark-border flex flex-col space-y-3">
            <NavLink
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `transition-all font-medium py-2 px-3 rounded-lg ${
                  isActive
                    ? "text-jazinski-blue dark:text-gold bg-blue-50 dark:bg-dark-card"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `transition-all font-medium py-2 px-3 rounded-lg ${
                  isActive
                    ? "text-jazinski-blue dark:text-gold bg-blue-50 dark:bg-dark-card"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card"
                }`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `transition-all font-medium py-2 px-3 rounded-lg ${
                  isActive
                    ? "text-jazinski-blue dark:text-gold bg-blue-50 dark:bg-dark-card"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `transition-all font-medium py-2 px-3 rounded-lg ${
                  isActive
                    ? "text-jazinski-blue dark:text-gold bg-blue-50 dark:bg-dark-card"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-card"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
