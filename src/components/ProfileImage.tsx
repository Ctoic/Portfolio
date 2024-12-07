import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-6"
    >
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
        <img
          src="https://avatars.githubusercontent.com/u/90936436?v=4"
          alt="Najam Ali Abass"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
}