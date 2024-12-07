import { motion } from 'framer-motion';
import { GitHubRepo } from '../../types/github';
import ProjectCard from './ProjectCard';
import { ANIMATION_VARIANTS } from '../../utils/constants';

interface ProjectsGridProps {
  projects: GitHubRepo[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={ANIMATION_VARIANTS.fadeIn}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </motion.div>
  );
}