import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { GitHubRepo } from '../../types/github';
import { ANIMATION_VARIANTS } from '../../utils/constants';
// import ProfileImage from './ProfileImage';

interface ProjectCardProps {
  project: GitHubRepo;
  index: number;
}


export default function ProjectCard({ project, index }: ProjectCardProps) {
  const formattedName = project.name.replace(/-/g, ' ');
  
  return (
    <motion.div
      variants={ANIMATION_VARIANTS.slideUp}
      initial="initial"
      animate="animate"
      transition={{ delay: index * 0.1 }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-indigo-900 capitalize">
          {formattedName}
        </h3>
        <div className="flex items-center space-x-2">
          <span className="flex items-center text-yellow-600">
            <Star className="w-4 h-4 mr-1" />
            {project.stargazers_count}
          </span>
        </div>
      </div>

      <p className="text-gray-700 mb-4 line-clamp-2 h-12">
        {project.description || 'No description available'}
      </p>

      {project.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {project.language && (
        <div className="mb-4">
          <span className="px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full text-sm">
            {project.language}
          </span>
        </div>
      )}

      

      <div className="flex space-x-4">
        <a
          href={project.html_url}
          className="text-gray-600 hover:text-indigo-600 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source on GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        {project.homepage && (
          <a
            href={project.homepage}
            className="text-gray-600 hover:text-indigo-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live demo"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}