// components/ProjectCard.tsx
import Image from 'next/image';

// Define a type for a single image object
type ProjectImage = {
  src: string;
  caption: string;
};

// Update the main props type
type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string;
  outcome: string;
  githubLink: string;
  images?: ProjectImage[]; // It now accepts an ARRAY of image objects
};

export default function ProjectCard({ title, description, techStack, outcome, githubLink, images }: ProjectCardProps) {
  return (
    <div className="mb-12 max-w-4xl rounded-lg border border-gray-700 bg-gray-800 p-6 shadow">
      <div className="p-2">
        {/* Text content */}
        <h3 className="mb-2 text-3xl font-bold tracking-tight text-white">{title}</h3>
        <p className="mb-3 font-normal text-gray-400"><strong>Overview:</strong> {description}</p>
        <p className="mb-3 font-normal text-gray-400"><strong>Tech Stack:</strong> {techStack}</p>
        <p className="mb-3 font-normal text-gray-400"><strong>Outcome:</strong> {outcome}</p>
        
        {/* GitHub link is now with the text */}
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="my-4 inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
        >
          View on GitHub
        </a>
      </div>

      {/* Image Gallery Section */}
      {images && images.length > 0 && (
        <div className="mt-4 border-t border-gray-600 pt-4">
          <h4 className="mb-4 text-xl font-semibold text-white">Project Gallery</h4>
          {/* This is the grid that holds the images */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {images.map((image, index) => (
              <figure key={index} className="flex flex-col rounded-lg bg-gray-900 p-2">
                <div className="relative h-56 w-full">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    fill // The 'fill' prop makes the image fill its container
                    className="rounded-md object-contain" // 'object-contain' ensures the whole image is visible
                  />
                </div>
                <figcaption className="mt-2 text-center text-sm italic text-gray-400">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}



  