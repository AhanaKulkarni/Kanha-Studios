import { useState } from 'react';
import { Link, useLocation } from 'wouter';

const Navigation = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Our Story' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="floating-nav fixed top-0 left-0 right-0 z-50 px-8 py-4 shadow-lg">
        <div className="container mx-auto px-4">
          {/* Mobile Navigation */}
          <div className="flex items-center justify-between md:hidden">
            <Link href="/" className="flex items-center">
              <img 
                src="/assets/logo.png" 
                alt="Kanha Studios Logo" 
                className="h-10 w-auto"
              />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="midnight-blue p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center">
            <div className="flex items-center space-x-8 lg:space-x-12">
              <div className="flex items-center space-x-8">
                <Link
                  href="/"
                  className={`text-sm font-medium transition-colors ${
                    location === '/'
                      ? 'text-peacock-green'
                      : 'midnight-blue hover:text-peacock-green'
                  }`}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className={`text-sm font-medium transition-colors ${
                    location === '/about'
                      ? 'text-peacock-green'
                      : 'midnight-blue hover:text-peacock-green'
                  }`}
                >
                  About
                </Link>
              </div>
              
              <Link href="/" className="flex items-center mx-8">
                <img 
                  src="/assets/logo.png" 
                  alt="Kanha Studios Logo" 
                  className="h-14 w-auto"
                />
              </Link>
              
              <div className="flex items-center space-x-8">
                <Link
                  href="/services"
                  className={`text-sm font-medium transition-colors ${
                    location === '/services'
                      ? 'text-peacock-green'
                      : 'midnight-blue hover:text-peacock-green'
                  }`}
                >
                  Services
                </Link>
                <Link
                  href="/portfolio"
                  className={`text-sm font-medium transition-colors ${
                    location === '/portfolio'
                      ? 'text-peacock-green'
                      : 'midnight-blue hover:text-peacock-green'
                  }`}
                >
                  Portfolio
                </Link>
                <Link
                  href="/contact"
                  className={`text-sm font-medium transition-colors ${
                    location === '/contact'
                      ? 'text-peacock-green'
                      : 'midnight-blue hover:text-peacock-green'
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/"
              className={`text-2xl font-medium transition-colors ${
                location === '/' ? 'text-peacock-green' : 'midnight-blue hover:text-peacock-green'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-2xl font-medium transition-colors ${
                location === '/about' ? 'text-peacock-green' : 'midnight-blue hover:text-peacock-green'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-2xl font-medium transition-colors ${
                location === '/services' ? 'text-peacock-green' : 'midnight-blue hover:text-peacock-green'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              className={`text-2xl font-medium transition-colors ${
                location === '/portfolio' ? 'text-peacock-green' : 'midnight-blue hover:text-peacock-green'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/contact"
              className={`text-2xl font-medium transition-colors ${
                location === '/contact' ? 'text-peacock-green' : 'midnight-blue hover:text-peacock-green'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
