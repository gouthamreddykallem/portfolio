import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronUp, Globe, X } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Top Button */}
        <div className="flex justify-center -mt-6">
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 p-3 rounded-full text-white hover:bg-blue-700 
                     transition-colors duration-300 shadow-lg"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Goutham Reddy Kallem</h3>
              <p className="text-gray-400 text-sm">
                Software Developer specializing in full-stack development and building exceptional digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="mailto:gouthamkallem@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <Mail className="w-4 h-4" />
                    gouthamkallem@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+15595691943"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    (559) 569-1943
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.gouthamreddykallem.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <Globe className="w-4 h-4" />
                    goutham-reddy-k.dev
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/gouthamreddykallem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/goutham-reddy-k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/Goutham80534116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <X className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Goutham Reddy Kallem. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;