import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Theme toggle functionality (optional for future)
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
          >
            MM<span className="text-cyan-400">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-cyan-400 transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-400 hover:bg-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-gray-300 hover:text-cyan-400 transition-colors font-medium py-2 px-4 hover:bg-gray-800 rounded-lg"
                >
                  {item.name}
                </button>
              ))}
              
              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="justify-start text-gray-300 hover:text-cyan-400 hover:bg-gray-800"
              >
                {isDark ? (
                  <>
                    <Sun size={20} className="mr-2" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon size={20} className="mr-2" />
                    Dark Mode
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
