import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Profile Image - Updated sizing and positioning */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 mb-8"
          >
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-xl">
              <div className="relative w-full h-full">
                <Image
                  src="/profile_pic.jpg" // Update with your image path
                  alt="Goutham Reddy Kallem"
                  fill
                  className="object-cover object-center scale-125" // Added scale-125 to zoom in the image
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Goutham Reddy Kallem
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              Software Developer
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="max-w-2xl text-gray-300 mb-8 text-lg"
          >
            Passionate software developer with expertise in full-stack development,
            specializing in building scalable web applications and microservices.
            Currently working on innovative aviation management systems and conducting
            research in EEG functional connectivity analysis.
          </motion.p>

          {/* Contact Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 rounded-full 
                         hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
            className="absolute bottom-8"
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;