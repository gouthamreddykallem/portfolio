import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CalendarDays, MapPin } from 'lucide-react';

const experiences = [
  {
    title: "Software Developer",
    company: "CSM Aviation",
    location: "Fresno, California",
    period: "Aug 2023 - Present",
    achievements: [
      "Spearheaded end-to-end development of a comprehensive aviation management system using NextJS, NodeJS, and MongoDB",
      "Implemented responsive interfaces resulting in 40% improvement in user engagement",
      "Optimized database queries leading to 50% reduction in data retrieval times",
      "Orchestrated AWS deployment ensuring 99.9% uptime and scalability",
    ]
  },
  {
    title: "Research & Teaching Assistant",
    company: "California State University - Fresno",
    location: "Fresno, California",
    period: "Jun 2023 - May 2024",
    achievements: [
      "Conducted comprehensive EEG functional connectivity analysis using diverse causality analysis techniques",
      "Developed classification models for dynamic target detection tasks",
      "Guided students in Software Development, teaching Git, UML, and agile methodologies"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Development Bank of Singapore (DBS)",
    location: "Hyderabad, India",
    period: "Jun 2020 - Aug 2022",
    achievements: [
      "Delivered a process for splitting and merging loans resulting in 80% faster processing",
      "Developed SPAs for batch processing using Angular, achieving 30% reduction in manual workload",
      "Implemented RESTful API for payments reducing loan disbursement time by 10x",
      "Streamlined database configurations resulting in 5x improvement in system speed"
    ]
  },
  {
    title: "Engineering Intern",
    company: "OpenText",
    location: "Bangalore, India",
    period: "Aug 2019 - Feb 2020",
    achievements: [
      "Created automated testing scripts with Protractor and Selenium, reducing manual workload by 50%",
      "Performed unit testing and maintained Integration tests for service functionality"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions in software development
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800 transition-all duration-300"
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                {/* Company Info */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-blue-400 mb-2">
                    <Building2 className="w-4 h-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <CalendarDays className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                      <p className="text-gray-300">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;