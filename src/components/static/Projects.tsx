import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  image: string;
  type: 'Hackathon' | 'OSS';
};

const projects: Project[] = [
  {
    title: "AI Learning Assistant",
    description: "ハッカソン~作品。AIを活用した個別学習支援プラットフォーム。学習者の理解度に応じて最適な教材を提供します。",
    technologies: ["Next.js", "OpenAI API", "Python"],
    link: "#",
    github: "#",
    image: "/api/placeholder/600/400",
    type: "Hackathon"
  },
  {
    title: "OSS Component Library",
    description: "",
    technologies: ["React", "TypeScript"],
    link: "#",
    github: "#",
    image: "/api/placeholder/600/400",
    type: "OSS"
  }
];

export function Projects() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md dark:shadow-none transition-colors"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
              <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.type === 'Hackathon' 
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  }`}>
                    {project.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-sm bg-gray-100 dark:bg-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    className="text-blue-500 hover:text-blue-400 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} className="mr-2" />
                    View Source
                  </a>
                  <a 
                    href={project.link}
                    className="text-blue-500 hover:text-blue-400 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
