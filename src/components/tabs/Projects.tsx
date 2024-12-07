import { useEffect, useState } from 'react';
import { GitHubRepo } from '../../types/github';
import { fetchGitHubRepos } from '../../utils/github';
import ProjectsGrid from '../projects/ProjectsGrid';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorMessage from '../common/ErrorMessage';

export default function Projects() {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const repos = await fetchGitHubRepos('ctoic');
        setProjects(repos);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  
  return <ProjectsGrid projects={projects} />;
}