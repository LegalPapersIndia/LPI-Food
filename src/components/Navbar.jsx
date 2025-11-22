// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  // Theme persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Chefs', path: '/chefs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
          ${isScrolled
            ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl py-3'
            : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <NavLink 
            to="/" 
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight"
          >
            LPI<span className="text-red-600"> Food</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-lg font-medium transition-all duration-300
                  ${isActive 
                    ? 'text-red-600 font-bold' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-red-600'
                  }`
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}

            <NavLink
              to="/reservation"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-full font-semibold text-lg shadow-lg hover:shadow-red-600/40 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Book a Table
            </NavLink>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-3">

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 text-gray-900 dark:text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900 transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'translate-x-0 opacity-100' 
            : '-translate-x-full opacity-0'
        }`}
        style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full px-8 space-y-10">
          {navLinks.map((link, index) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-4xl sm:text-5xl font-medium transition-all duration-500 hover:scale-110
                ${isActive ? 'text-red-600' : 'text-gray-700 dark:text-gray-300'}`
              }
              style={{ 
                animation: isMobileMenuOpen ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/reservation"
            className="mt-12 bg-red-600 hover:bg-red-700 text-white px-16 py-6 rounded-full font-bold text-2xl sm:text-3xl shadow-2xl transform hover:scale-110 transition-all duration-500"
          >
            Book a Table
          </NavLink>
        </div>
      </div>

      {/* Safe padding for fixed navbar */}
      <div className={`transition-all duration-500 ${isScrolled ? 'pt-20' : 'pt-24'} lg:pt-28`} />

      {/* Mobile Menu Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}