import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Layout, Github, Terminal, Brain } from 'lucide-react';

const skillsData = {
  "Programming Languages": {
    icon: <Code2 className="w-6 h-6" />,
    skills: ["Java", "Python", "C++", "JavaScript", "TypeScript", "Golang", "PHP"]
  },
  "Frontend Development": {
    icon: <Layout className="w-6 h-6" />,
    skills: ["React.js", "Next.js", "Angular", "HTML5", "CSS3", "Tailwind CSS"]
  },
  "Backend Development": {
    icon: <Server className="w-6 h-6" />,
    skills: ["Node.js", "Spring Boot", "Django", "Express", "Flask"]
  },
  "Database Technologies": {
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "MariaDB"]
  },
  "Web Technologies": {
    icon: <Globe className="w-6 h-6" />,
    skills: ["RESTful APIs", "GraphQL", "Docker", "AWS", "CI/CD"]
  },
  "Version Control & Tools": {
    icon: <Github className="w-6 h-6" />,
    skills: ["Git", "GitHub", "Bitbucket", "Jenkins", "JIRA"]
  },
  "Development Tools": {
    icon: <Terminal className="w-6 h-6" />,
    skills: ["VS Code", "Eclipse", "JBoss", "Linux", "Shell Scripting"]
  },
  "AI & ML": {
    icon: <Brain className="w-6 h-6" />,
    skills: ["TensorFlow", "Machine Learning", "Deep Learning", "Neural Networks"]
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
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
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