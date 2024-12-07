import { motion } from 'framer-motion';

export default function Skills() {
  const skills = {
    Languages: ["Python", "PHP", "C", "C++", "JavaScript", "SQL", "R"],
    "Developer Tools": ["VS Code", "Android Studio", "Intellij Idea Ultimate", "Visual Studio", "Beekeper Studio", "Blender", "Figma", "Canva", "Linux"],
    "Technologies/Frameworks": ["Linux", "GitHub", "ReactJS", "Bootstrap", "Streamlit", "WordPress", "Git", "Magento", "Gradio", ".NET", "Netlify", "Flask"]
  };

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {Object.entries(skills).map(([category, items], index) => (
        <motion.div
          key={category}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-bold text-indigo-900 mb-4">{category}</h3>
          <div className="flex flex-wrap gap-3">
            {items.map((skill, i) => (
              <motion.span
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}