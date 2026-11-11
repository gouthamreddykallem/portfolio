import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Globe, Server, Layout, Github, Terminal, Brain, BookOpen } from 'lucide-react';
import { useState, type ReactNode } from 'react';

// Custom Tooltip Component
const Tooltip = ({ content, isVisible }: { content: string, isVisible: boolean }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="absolute -top-14 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 
                   bg-gray-800 text-white rounded-lg shadow-xl border border-gray-700
                   text-sm whitespace-nowrap"
      >
        {content}
        {/* Tooltip Arrow */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                      border-8 border-transparent border-t-gray-800" />
      </motion.div>
    )}
  </AnimatePresence>
);

// Skill Badge Component
const SkillBadge = ({ name, years }: { name: string, years?: number }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative inline-block">
      <motion.span
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        whileHover={{ scale: 1.05 }}
        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm 
                   cursor-help transition-all duration-300 hover:bg-blue-500/20"
      >
        {name}
      </motion.span>
      <Tooltip 
        isVisible={showTooltip && years !== undefined}
        content={`${years} ${years === 1 ? 'year' : 'years'} of experience`}       />
    </div>
  );
};


const skillsData: Record<string, { icon: ReactNode, skills: { name: string, years?: number }[] }> = {
  "Programming Languages": {
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "Java", years: 3 },
      { name: "Python", years: 4 },
      { name: "C++", years: 3 },
      { name: "JavaScript", years: 3 },
      { name: "TypeScript", years: 3 },
      // { name: "Golang", years: 2 },
      { name: "PHP", years: 1 }
    ]
  },
  "Frontend Development": {
    icon: <Layout className="w-6 h-6" />,
    skills: [
      { name: "React.js", years: 2 },
      { name: "Next.js", years: 2 },
      { name: "Angular", years: 3 },
      { name: "HTML5", years: 6 },
      { name: "CSS3", years: 6 },
      { name: "Tailwind CSS", years: 1 }
    ]
  },
  "Backend Development": {
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "Node.js", years: 2 },
      { name: "Spring Boot", years: 3 },
      { name: "Django", years: 3 },
      { name: "Express", years: 3 },
      { name: "Flask", years: 3 },
      // TODO: add years of experience
      { name: "FastAPI" }
    ]
  },
  "Database Technologies": {
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "MySQL", years: 6 },
      { name: "PostgreSQL", years: 6 },
      { name: "MongoDB", years: 2 },
      { name: "MariaDB", years: 4 }
    ]
  },
  "Web Technologies": {
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { name: "RESTful APIs", years: 5 },
      { name: "GraphQL", years: 1 },
      { name: "Docker", years: 2 },
      { name: "AWS", years: 1 },
      { name: "CI/CD", years: 3 }
    ]
  },
  "Version Control & Tools": {
    icon: <Github className="w-6 h-6" />,
    skills: [
      { name: "Git", years: 6 },
      { name: "GitHub", years: 6 },
      { name: "Bitbucket", years: 3 },
      { name: "Jenkins", years: 3 },
      { name: "JIRA", years: 3 }
    ]
  },
  "Development Tools": {
    icon: <Terminal className="w-6 h-6" />,
    skills: [
      { name: "Cursor AI", years: 1 },
      { name: "VS Code", years: 5 },
      { name: "Claude", years: 1 },
      { name: "V0", years: 1 },
      { name: "Eclipse", years: 4 },
      { name: "JBoss", years: 3 },
      { name: "Linux", years: 6 },
      { name: "Shell Scripting", years: 4 }
    ]
  },
  "AI & ML": {
    icon: <Brain className="w-6 h-6" />,
    skills: [
      { name: "LLMs", years: 1 },
      { name: "AI Agents", years: 1 },
      // TODO: add years of experience
      { name: "LangChain" },
      { name: "RAG Pipelines" },
      { name: "Machine Learning", years: 2 },
      { name: "Deep Learning", years: 2 },
      { name: "Neural Networks", years: 2 }
    ]
  }
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I work with.
          </p>
        </motion.div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h3 className="text-xl font-semibold text-white">Currently Learning</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Large Language Models", "AI Agents", "Artificial Intelligence", "System Design", "Cloud Architecture"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(skillsData).map(([category, { icon, skills }]) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700/50 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                  {icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillBadge 
                    key={skill.name} 
                    name={skill.name} 
                    years={skill.years} 
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;