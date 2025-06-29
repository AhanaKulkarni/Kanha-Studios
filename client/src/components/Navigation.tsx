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
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 relative">
            <span className="peacock-feather text-peacock-green">🕉️</span>
            <span className="font-['Playfair_Display'] font-bold text-xl midnight-blue">Kanha Studio</span>
          </Link>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`text-sm font-medium transition-colors ${
                  location === item.path
                    ? 'text-peacock-green'
                    : 'midnight-blue hover:text-peacock-green'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden midnight-blue"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-vrindavan-beige/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-2xl font-medium midnight-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
