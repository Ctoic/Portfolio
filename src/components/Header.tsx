import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
    import ProfileImage from './ProfileImage';

export default function Header() {
  return (          
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900"
    >
      <ProfileImage />
      
      <motion.h1 
        className="text-5xl font-bold text-white mb-4"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        Najam Ali Abass
      </motion.h1>
      
      <motion.p 
        className="text-gray-300 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Computer Science Student & Full Stack Developer
      </motion.p>
      
      <motion.div 
        className="flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <a 
          href="tel:+92-3173036098" 
          className="text-white hover:text-blue-400 transition-colors"
          aria-label="Phone"
        >
          <Phone className="w-6 h-6" />
        </a>
        <a 
          href="mailto:najamabass2020@gmail.com" 
          className="text-white hover:text-blue-400 transition-colors"
          aria-label="Email"
        >
          <Mail className="w-6 h-6" />
        </a>
        <a 
          href="https://www.linkedin.com/in/ctoic/" 
          className="text-white hover:text-blue-400 transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a 
          href="https://github.com/Ctoic" 
          className="text-white hover:text-blue-400 transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-6 h-6" />
        </a>
      </motion.div>
    </motion.header>
  );
}