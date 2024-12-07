import { motion } from 'framer-motion';

export default function Activities() {
  const activities = [
    {
      role: "Web Developer",
      organization: "Fast Developer Club",
      period: "11 2021 - 04 2023",
      description: "Conducted workshops on Github and Web development. Organized competitions at University events."
    },
    {
      role: "Event Organizer",
      organization: "NASCON",
      period: "02 2023 - 06 2023",
      description: "Coordinated events and activities focusing on technology and innovation."
    },
    {
      role: "Head Boy",
      organization: "Aga Khan Higher Secondary School Gilgit",
      period: "02 2018 - 04 2020",
      description: "Led student council initiatives and represented the student body."
    }
  ];

  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {activities.map((activity, index) => (
        <motion.div
          key={index}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-bold text-indigo-900">{activity.role}</h3>
          <p className="text-gray-600">{activity.organization}</p>
          <p className="text-gray-500">{activity.period}</p>
          <p className="mt-2 text-gray-700">{activity.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}