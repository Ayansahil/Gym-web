import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Membership', path: '/membership' },
    { name: 'Trainers', path: '/trainers' },
    { name: 'Schedule', path: '/schedule' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Dumbbell className={`h-8 w-8 transition-colors duration-300 ${
              isScrolled ? 'text-blue-900' : 'text-white'
            }`} />
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-blue-900' : 'text-white'
            }`}>
              FitPro Gym
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            to="/membership"
            className={`hidden md:block px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              isScrolled 
                ? 'bg-blue-900 text-white hover:bg-blue-800' 
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            Join Now
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block text-gray-700 font-medium hover:text-orange-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/membership"
              className="block text-center bg-blue-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
