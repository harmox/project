import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

//TODO FIX PROJECTS
const projects = [
  {
    title: "Instagram Unfollowers",
    description: "Full-stack solution built with Node.js, React, MongoDB and Stripe. Features include user authentication, management, and payment integration. ",
    image: "https://i.ibb.co/s6M4sZT/unfollowers.png",
    tags: ["Node.js", "React", "MongoDB", "Stripe"],
    githubLink: "https://github.com/harmox/unfollow",
    liveLink: "https://traitors-1fca9.web.app/"
  },
  {
    title: "Beauty salon",
    description: "Everything is fully customizable and dynamically managed by the owner through a high-privilege account. Users can easily book appointments and leave reviews, while added workers can set discounts and manage their appointments and details page.",
    image: "https://i.ibb.co/F8H48Nm/beni.png",
    tags: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/harmox/beniNails",
    liveLink: "https://beni-nails.web.app"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard for visualizing business metrics. Features real-time data updates and customizable charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tags: ["TypeScript", "React", "Node.js", "D3.js"],
    githubLink: "#",
    liveLink: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 projects">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#853dcc]/10 text-[#853dcc] px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a target="blank"
                    href={project.githubLink}
                    className="flex items-center text-gray-600 hover:text-[#853dcc] transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    Code
                  </a>
                  <a target="blank"
                    href={project.liveLink}
                    className="flex items-center text-gray-600 hover:text-[#853dcc] transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}