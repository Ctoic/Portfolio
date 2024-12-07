import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer",
      company: "Tiles Mountain",
      period: "06 2023 - 09 2023",
      description: "Developed and deployed an eCommerce website using PHP MVC approach, contributing to 60% of backend code. Implemented Magento modules and enhanced operational efficiency by 25%.",
      skills: ["PHP", "MVC", "Magento", "Docker", "Git"]
    },
    {
      title: "Maintainer and Contributor",
      company: "Github Education",
      period: "10 2023 - 11 2023",
      description: "Led open-source project, reviewed 15+ pull requests while mentoring contributors globally.",
      link: "https://github.com/Ctoic/CalHub.git"
    },
    {
      title: "Website Developer",
      company: "C3 Akademia",
      period: "10 2023 - 11 2023",
      description: "Created WordPress website increasing user engagement by 40%. Published technical blogs boosting traffic by 20%.",
      link: "https://c3akademia.com/"
    }
  ];

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-indigo-900">{exp.title}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500">{exp.period}</p>
            </div>
            {exp.link && (
              <a href={exp.link} className="text-indigo-600 hover:text-indigo-800">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
          <p className="mt-3 text-gray-700">{exp.description}</p>
          {exp.skills && (
            <div className="mt-3 flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}