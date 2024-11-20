import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import video from "../universe.mp4"
const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "TypeScript", level: 70 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "RESTful APIs", level: 85 },
      { name: "Express.js", level: 80 }
    ]
  }
].map(category => ({
  ...category,
  items: category.items.sort((a, b) => b.level - a.level)
}));

export default function Skills() {
  const [typedText, setTypedText] = useState('');
  const [showSkills, setShowSkills] = useState(false);
  const text = 'function helloWorld(){\nconsole.log("Hello world!")\n}\nhelloWorld()';

  let index = 0;
  function type() {

    const typingInterval = setInterval(() => {
      if (index === text.length - 1) {
        clearInterval(typingInterval);
        setShowSkills(true);
      } else {
        if (index === 0) {
          setTypedText(text[index]);
        }
        setTypedText(prev => prev + text[index]);
        index++;
      }
    }, 50);
  }


  return (
    <section id="skills" className="py-20 relative overflow-hidden">

      <div className="absolute inset-0 bg-black">
        {showSkills &&
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-full object-cover z-1"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        }

        <div className="absolute inset-0 opacity-10">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-[#853dcc]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 5 + 3}s linear infinite`,
                fontSize: `${Math.random() * 14 + 8}px`
              }}
            >
              {Math.random() > 0.5 ? '0' : '1'}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        <AnimatePresence mode="wait">
          {!showSkills && (
            <motion.div
              key="hello"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
              onViewportEnter={type}
              className="text-center py-20"
            >
              <h2 className="text-6xl font-bold text-transparent mb-4 stroke-white">
                Technical Skills
              </h2>


              <h2 className="text-6xl font-bold text-[#853dcc] font-mono">
                {typedText}
              </h2>
            </motion.div>
          )}

          {showSkills && (
            <div className="relative overflow-hidden">
              {/* Video background */}


              {/* Content overlay */}
              <motion.div
                key="skills"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative space-y-16 z-10" // Make sure the content is above the video
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-6xl font-bold text-transparent mb-4 stroke-white">
                    Technical Skills
                  </h2>
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    A comprehensive overview of my expertise in full-stack development.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {skills.map((category, categoryIndex) => (
                    <motion.div
                      key={categoryIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 }}
                      className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-[#853dcc]/20"
                    >
                      <h3 className="text-xl font-semibold mb-6 text-center text-[#853dcc]">
                        {category.category}
                      </h3>
                      <div className="space-y-4">
                        {category.items.map((skill, skillIndex) => (
                          <div key={skillIndex}>
                            <div className="flex justify-between mb-1">
                              <span className="text-gray-300">{skill.name}</span>
                              <span className="text-[#853dcc]">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: skillIndex * 0.1 }}
                                className="bg-[#853dcc] h-2.5 rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}

        </AnimatePresence>
      </div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(-100vh); opacity: 0; }
        }
      `}</style>
    </section>
  );
}




