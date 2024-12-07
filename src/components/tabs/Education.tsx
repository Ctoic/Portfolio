import { motion } from 'framer-motion';

export default function Education() {
  return (
    <motion.div 
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-indigo-900">FAST-National University</h3>
        <p className="text-gray-600">BS Computer Science</p>
        <p className="text-gray-500">08 2021 - Present • Islamabad, Pakistan</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-indigo-900">FAST-NUCES</h3>
        <p className="text-gray-600">BS Software Engineering</p>
        <p className="text-gray-500">08 2020 - 07 2021 • Peshawar, Pakistan</p>
      </div>
    </motion.div>
  );
}