import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Globe, ArrowUpRight } from 'lucide-react';

const Hero = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-900">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f6,transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative mb-8"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
              <Image
                src="/profile_pic.jpg"
                alt="Goutham Reddy Kallem"
                fill
                className="object-cover object-center scale-125 rounded-full"
                priority
                quality={100}
              />
            </div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm bg-gray-800 text-gray-300 border border-gray-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              Open to New Opportunities
            </span>
          </motion.div>

          {/* Name and Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Goutham Reddy Kallem
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
              Software Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-gray-300 mb-8 text-lg leading-relaxed"
          >
            Full-stack developer with 3+ years of experience crafting robust web solutions 
            using React, Node.js, Angular, Spring Boot and cloud technologies. Currently 
            building mission-critical aviation management systems at CSM Aviation, 
            while exploring AI/ML integrations, with keen interest in 
            LLMs and AI agents.
          </motion.p>

          {/* Currently Working On */}
          {/* <motion.div
            variants={itemVariants}
            className="mb-8 px-4 py-2 rounded-lg bg-gray-800/50 border border-gray-700"
          >
            <p className="text-gray-300">
              <span className="text-blue-400">Currently @ </span>
              CSM Aviation
              <a 
                href="https://csmaviation.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center ml-2 text-blue-400 hover:text-blue-300"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </p>
          </motion.div> */}

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 mb-8"
          >
            {[
              { icon: <Github className="w-5 h-5" />, href: "https://github.com/gouthamreddykallem", label: "GitHub" },
              { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/goutham-reddy-k", label: "LinkedIn" },
              { icon: <Mail className="w-5 h-5" />, href: "mailto:gouthamkallem@gmail.com", label: "Email" },
              // { icon: <Globe className="w-5 h-5" />, href: "https://goutham-reddy-k.dev", label: "Website" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 text-gray-400 hover:text-white bg-gray-800 rounded-lg hover:bg-gray-700 
                         transition-all duration-300 border border-gray-700 hover:border-gray-600"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#contact"
              className="px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-lg 
                       hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl
                       flex items-center gap-2"
            >
              Get in Touch
              <ArrowUpRight className="w-5 h-5" />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-base font-medium text-gray-300 bg-gray-800 rounded-lg 
                       hover:bg-gray-700 transition-all duration-300 border border-gray-700
                       hover:border-gray-600 flex items-center gap-2"
            >
              Download CV
              <Download className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8"
      >
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;