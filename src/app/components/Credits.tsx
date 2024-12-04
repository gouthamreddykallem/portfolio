import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Palette, Rocket } from 'lucide-react';

const tools = [
  {
    name: "Next.js",
    url: "https://nextjs.org",
    icon: <Code2 className="w-4 h-4" />,
    description: "React Framework"
  },
  {
    name: "Vercel",
    url: "https://vercel.com",
    icon: <Rocket className="w-4 h-4" />,
    description: "Deployment Platform"
  },
  {
    name: "Cursor",
    url: "https://cursor.sh",
    icon: <Cpu className="w-4 h-4" />,
    description: "AI-powered Code Editor"
  },
  {
    name: "Claude",
    url: "https://anthropic.com/claude",
    icon: <Palette className="w-4 h-4" />,
    description: "AI Assistant"
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    icon: <Code2 className="w-4 h-4" />,
    description: "CSS Framework"
  },
  {
    name: "Framer Motion",
    url: "https://www.framer.com/motion",
    icon: <Code2 className="w-4 h-4" />,
    description: "Animation Library"
  }
];

const Credits = () => {
  return (
    <section className="pt-8 pb-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h3 className="text-xl font-semibold text-white">Built With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <motion.a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 
                         rounded-full text-sm text-gray-300 hover:text-white transition-colors 
                         duration-300 border border-gray-700 hover:border-gray-600"
                title={tool.description}
              >
                {tool.icon}
                {tool.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Credits;