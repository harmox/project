import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, Terminal, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-2"
        >
          <Terminal className="h-6 w-6 text-[#853dcc]" />
          <span className="font-bold text-xl">Harmox</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex items-center space-x-6 lg:space-x-8"
        >
          <a href="#skills" className="text-gray-700 hover:text-[#853dcc] transition-colors">
            Skills
          </a>
          <a href="#about" className="text-gray-700 hover:text-[#853dcc] transition-colors">
            About
          </a>
          <a href="#projects" className="text-gray-700 hover:text-[#853dcc] transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 hover:text-[#853dcc] transition-colors">
            Contact
          </a>
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="text-gray-600 hover:text-[#853dcc] focus:outline-none transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 space-y-2"
        >
          <a
            href="#about"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-[#853dcc] transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-[#853dcc] transition-colors"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-[#853dcc] transition-colors"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="block text-gray-700 hover:text-[#853dcc] transition-colors"
          >
            Contact
          </a>
        </motion.nav>
      )}
    </div>
  </header>
  
  );
}