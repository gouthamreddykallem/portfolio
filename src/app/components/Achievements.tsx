import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Medal } from 'lucide-react';

const achievements = [
  {
    title: "Super Techie Award",
    organization: "Development Bank of Singapore (DBS)",
    description: "Awarded for developing a comprehensive loan management API that streamlined payment processes and reduced loan disbursement time by 10x. The system implementation significantly improved the efficiency of banking operations.",
    icon: <Trophy className="w-8 h-8" />,
    color: "from-yellow-500/20 to-yellow-500/5",
    iconColor: "text-yellow-500",
    borderColor: "border-yellow-500/20"
  },
  {
    title: "DBS Hackathon Winner",
    organization: "Development Bank of Singapore (DBS)",
    description: "Led a team to victory by developing an innovative investment recommendation system. Created a user-friendly interface with automated email notifications providing detailed monthly payment breakdowns for optimized savings.",
    icon: <Medal className="w-8 h-8" />,
    color: "from-blue-500/20 to-blue-500/5",
    iconColor: "text-blue-500",
    borderColor: "border-blue-500/20"
  },
  {
    title: "Smart India Hackathon Finalist",
    organization: "Smart India Hackathon (SIH)",
    description: "Qualified for the Grand Finale with an innovative ride comfort measurement project. Implemented advanced K-means clustering algorithms on unsupervised data to analyze and improve ride quality metrics.",
    icon: <Star className="w-8 h-8" />,
    color: "from-purple-500/20 to-purple-500/5",
    iconColor: "text-purple-500",
    borderColor: "border-purple-500/20"
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievements</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Recognition and awards received throughout my professional journey
          </p>
        </motion.div>

        <div className="grid gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl bg-gradient-to-br ${achievement.color} 
                         border ${achievement.borderColor} backdrop-blur-sm
                         hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl bg-gray-800 ${achievement.iconColor}`}>
                  {achievement.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className={`text-sm mb-3 ${achievement.iconColor}`}>
                    {achievement.organization}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Decorative background elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                            rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Each achievement represents a milestone in my journey of continuous learning and growth in software development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;