import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Terminal className="h-6 w-6 text-[#853dcc]" />
            <span className="font-bold text-xl">Harmox</span>
          </motion.div>
          
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center space-x-8"
          >
            <a href="#about" className="text-gray-700 hover:text-[#853dcc] transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-[#853dcc] transition-colors">Projects</a>
            <a href="#skills" className="text-gray-700 hover:text-[#853dcc] transition-colors">Skills</a>
            <a href="#contact" className="text-gray-700 hover:text-[#853dcc] transition-colors">Contact</a>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4"
          >
            <a href="https://github.com/harmox" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#853dcc] transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/stoqn-velikov-262959257/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#853dcc] transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:harmox_velikov@abv.bg" className="text-gray-600 hover:text-[#853dcc] transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  );
}