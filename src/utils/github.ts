import { GitHubRepo } from '../types/github';
import { GITHUB_API_BASE_URL, REPOS_PER_PAGE } from './constants';

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE_URL}/users/${username}/repos?sort=updated&per_page=${REPOS_PER_PAGE}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const repos = await response.json();
    return repos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      topics: repo.topics || [],
      stargazers_count: repo.stargazers_count,
      language: repo.language
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
}