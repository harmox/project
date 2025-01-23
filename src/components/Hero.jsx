import { motion } from 'framer-motion';
import { Code2, Database, Layout } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-16 bg-gradient-to-b projects" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            MERN Stack Developer
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-grey"  style={{ textShadow: "1px 1px black" }}>
            Specializing in Node.js, React, MongoDB, and TypeScript. Building robust and scalable web applications with modern technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center space-x-4 mb-12"
        >
          <button className="bg-[#853dcc] text-white px-8 py-3 rounded-lg hover:bg-[#6c31a3] transition-colors">
            <a href="#projects">
              View Projects
            </a>
          </button>
          <button className="border border-[#853dcc] text-[#853dcc] px-8 py-3 rounded-lg hover:bg-[#853dcc]/10 transition-colors">
            <a href="#contact">
              Contact Me
            </a>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: <Code2 className="h-8 w-8" />, title: "Clean Code", description: "Writing maintainable and efficient code following best practices" },
            { icon: <Database className="h-8 w-8" />, title: "Full Stack", description: "End-to-end development from database to frontend" },
            { icon: <Layout className="h-8 w-8" />, title: "Responsive Design", description: "Creating beautiful UIs that work on all devices" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow card"
            >
              <div className="text-[#853dcc] mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}