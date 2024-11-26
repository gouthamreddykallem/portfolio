import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Banknote, Car, Image as ImageIcon } from 'lucide-react';

const projects = [
  {
    title: "Investment Recommendation System",
    description: "Led development of an end-to-end investment recommendation system with user-friendly UI and automated email notifications. The system provides detailed monthly payment breakdowns to help users optimize their savings.",
    tags: ["React", "Node.js", "MongoDB", "Email Integration"],
    type: "Winner - DBS Hackathon",
    icon: <Banknote className="w-6 h-6" />
  },
  {
    title: "Ride Comfort Measurement Model",
    description: "Developed an innovative ride comfort measurement system using K-means Clustering on unsupervised data. Project was selected for the Grand Finale of Smart India Hackathon (SIH).",
    tags: ["Python", "Machine Learning", "K-means Clustering", "Data Analysis"],
    type: "Smart India Hackathon Finalist",
    icon: <Car className="w-6 h-6" />
  },
  {
    title: "Image Descriptor System",
    description: "Created a sophisticated image description system using state-of-the-art deep learning techniques. Combined Computer Vision with CNNs for object recognition and RNNs for Natural Language Processing.",
    tags: ["Deep Learning", "CNN", "RNN", "Computer Vision", "NLP"],
    type: "Research Project",
    icon: <ImageIcon className="w-6 h-6" />
  },
//   {
//     title: "Loan Management System",
//     description: "Developed a comprehensive API for loan disbursement that streamlined payment processes. Awarded 'Super Techie' at DBS for the implementation.",
//     tags: ["Spring Boot", "RESTful APIs", "Microservices", "Banking"],
//     type: "Award-Winning Project",
//     icon: <Brain className="w-6 h-6" />
//   }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300"
    >
      <div className="absolute top-6 right-6 text-blue-400 bg-blue-400/10 p-2 rounded-lg">
        {project.icon}
      </div>
      
      <div className="mb-4">
        <span className="text-sm text-blue-400 font-medium">
          {project.type}
        </span>
        <h3 className="text-xl font-bold text-white mt-2 mb-3">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <button className="text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
          <Github className="w-4 h-4" />
          View Code
        </button>
        <button className="text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </button>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of projects that showcase my technical skills and problem-solving abilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/gouthamreddykallem"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 
                     text-white rounded-full transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;