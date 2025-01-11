import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { NAVIGATION_LINKS, COMPANY_NAME } from './constants';

// Import page components
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

// Import custom components
import BackButton from './components/BackButton';
import ThemeToggle from './components/ThemeToggle';
import RotatingTool from './components/RotatingTool';
import Footer from './components/Footer';

const MobileMenuButton = ({ isOpen, onClick, hasBlueNav }) => (
  <button
    onClick={onClick}
    className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
      hasBlueNav
        ? 'text-blue-600 hover:text-blue-900 hover:bg-blue-50/50'
        : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100/50'
    }`}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    <div className="w-6 h-6 relative">
      <span className={`absolute left-0 block w-6 h-0.5 transform transition-all duration-300 ${
        hasBlueNav ? 'bg-blue-600' : 'bg-secondary-600'
      } ${isOpen ? 'top-2.5 rotate-45' : 'top-1'}`} />
      <span className={`absolute left-0 block w-6 h-0.5 transition-all duration-300 ${
        hasBlueNav ? 'bg-blue-600' : 'bg-secondary-600'
      } ${isOpen ? 'opacity-0' : 'top-2.5'}`} />
      <span className={`absolute left-0 block w-6 h-0.5 transform transition-all duration-300 ${
        hasBlueNav ? 'bg-blue-600' : 'bg-secondary-600'
      } ${isOpen ? 'top-2.5 -rotate-45' : 'top-4'}`} />
    </div>
  </button>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Check if current page should have blue tint
  const hasBlueNav = ['/services', '/about', '/contact', '/testimonials'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasBlueNav
          ? scrolled 
            ? 'bg-transparent backdrop-blur-sm shadow-lg' 
            : 'bg-transparent'
          : scrolled
            ? 'bg-white/80 shadow-lg dark:bg-secondary-900/80'
            : 'bg-transparent'
      }`}
    >
      <div className={`absolute inset-0 backdrop-blur-sm ${hasBlueNav ? 'bg-transparent' : ''}`} />
      <nav className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Company Name */}
          <Link 
            to="/" 
            className={`group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] ${
              scrolled || hasBlueNav
                ? hasBlueNav
                  ? 'text-blue-900 dark:text-primary-100'
                  : 'text-secondary-900 dark:text-white'
                : 'text-white'
            }`}
          >
            {/* Logo Icon */}
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className={`absolute inset-0 ${hasBlueNav ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 'bg-gradient-to-br from-accent-500 to-accent-600'} rounded-xl rotate-45 group-hover:rotate-[55deg] transition-transform duration-300 shadow-lg`} />
              <div className={`absolute inset-[2px] ${hasBlueNav ? 'bg-gradient-to-br from-blue-400 to-blue-500' : 'bg-gradient-to-br from-accent-400 to-accent-500'} rounded-[10px] rotate-45 group-hover:rotate-[55deg] transition-transform duration-300 opacity-75`} />
              <span className="relative text-white text-lg font-bold tracking-wider">FF</span>
            </div>
            
            {/* Company Name */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-bold tracking-tight">
                  <span className={`${hasBlueNav ? 'text-blue-500' : 'text-accent-500'} font-extrabold`}>Fast</span>
                  <span className={`ml-1 ${hasBlueNav ? 'text-blue-700' : 'text-accent-700'}`}>Freeze</span>
                </span>
              </div>
              <span className="text-xs tracking-wider opacity-90 whitespace-nowrap font-medium">
                Heating & Refrigeration
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  location.pathname === link.path
                    ? hasBlueNav 
                      ? 'bg-blue-100 text-blue-600 dark:bg-primary-500/10 dark:text-primary-400'
                      : 'bg-accent-500/10 text-accent-600 dark:text-accent-400'
                    : scrolled || hasBlueNav
                      ? hasBlueNav
                        ? 'text-blue-700 hover:text-blue-900 hover:bg-blue-50 dark:text-primary-300 dark:hover:text-white dark:hover:bg-primary-800/50'
                        : 'text-secondary-600 hover:text-secondary-900 dark:text-secondary-400 dark:hover:text-white hover:bg-secondary-100/50 dark:hover:bg-secondary-800/50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {/* ... existing icon code ... */}
                <span>{link.name}</span>
              </Link>
            ))}

            {/* Theme Toggle */}
            <div className="ml-2 px-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} hasBlueNav={hasBlueNav} />
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isOpen ? { 
            height: 'auto', 
            opacity: 1,
            y: 0
          } : { 
            height: 0, 
            opacity: 0,
            y: -10
          }}
          transition={{ duration: 0.2 }}
          className={`lg:hidden overflow-hidden fixed left-0 right-0 top-[64px] md:top-[80px] ${
            hasBlueNav ? 'bg-transparent backdrop-blur-md' : 'bg-white/95'
          } shadow-lg border-t ${
            hasBlueNav ? 'border-transparent' : 'border-secondary-100'
          }`}
        >
          <div className="container mx-auto px-4 py-4 space-y-2">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? hasBlueNav
                      ? 'bg-blue-100 text-blue-600 dark:bg-primary-500/10 dark:text-primary-400'
                      : 'bg-accent-500/10 text-accent-600 dark:text-accent-400'
                    : hasBlueNav
                      ? 'text-blue-600 hover:text-blue-900 hover:bg-blue-100/50'
                      : 'text-secondary-600 hover:text-secondary-900 hover:bg-secondary-100/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Navigation Icons */}
                  {link.path === '/' && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {link.path === '/services' && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {link.path === '/about' && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {link.path === '/testimonials' && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {link.path === '/contact' && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {link.name}
                </div>
              </Link>
            ))}
            <div className="px-4 py-3 border-t border-secondary-100">
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary-600 " >Theme</span>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </motion.div>
      </nav>
    </header>
  );
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-secondary-50 dark:bg-secondary-900 transition-colors duration-300">
      <Navbar />
      {location.pathname !== '/' && <BackButton />}
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
