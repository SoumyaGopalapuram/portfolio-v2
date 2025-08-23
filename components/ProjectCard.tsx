// components/ProjectCard.tsx

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string;
  outcome: string;
  githubLink: string;
};

export default function ProjectCard({ title, description, techStack, outcome, githubLink }: ProjectCardProps) {
  return (
    <div className="mb-8 max-w-2xl rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h3>
      <p className="mb-3 font-normal text-gray-400"><strong>The Problem:</strong> {description}</p>
      <p className="mb-3 font-normal text-gray-400"><strong>Tech Stack:</strong> {techStack}</p>
      <p className="mb-3 font-normal text-gray-400"><strong>Outcome:</strong> {outcome}</p>
      <a 
        href={githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
      >
        View on GitHub
      </a>
    </div>
  );
}