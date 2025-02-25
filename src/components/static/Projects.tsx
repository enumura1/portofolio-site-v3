import { Github, ExternalLink } from 'lucide-react'

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  type: 'Hackathon' | 'OSS';
};

const projects: Project[] = [
  {
    title: "カシカ - ビジネスチャットを図解で分かりやすく",
    description: "ビジネスチャットでの説明を図解でサポートするAIアシスタント。300種類の図解テンプレートからRAGシステムを用いて最適な提案を行い、編集機能を提供するWebアプリケーション。2段階の検索プロセスによりコストを97%削減してみた。",
    technologies: ["React", "Vite", "TypeScript", "shadcn/ui", "AWS Lambda", "Python", "Amazon Bedrock", "scikit-learn", "Docker"],
    link: "https://protopedia.net/prototype/6575",
    github: "https://github.com/enumura1/kasika-web-app",
    type: "Hackathon"
  },
  {
    title: "liquidui-animation",
    description: "React用の液体のようなアニメーションを実装できるUIコンポーネントライブラリ。カスタマイズ可能なシェイプ、サイズ、アニメーション強度などのパラメータを提供し、短時間で揺れ動くアニメーションUIを実装可能。",
    technologies: ["React", "TypeScript", "Animation", "npm package"],
    link: "https://www.npmjs.com/package/@enumura/liquidui-animation",
    github: "https://github.com/enumura1/liquidui-animation",
    type: "OSS"
  }
];

export function Projects() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="projects">
      <h2 className="text-4xl font-bold mb-8">💡Projects</h2>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md dark:shadow-none transition-colors"
          >
            <div className="md:flex">
            <div className={`md:w-1/3 h-48 md:h-auto flex items-center justify-center text-4xl font-bold ${
              project.type === 'Hackathon' 
                ? 'bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 text-white'
                : 'bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-800 text-white'
            }`}>
              <div className="transform hover:scale-105 transition-transform duration-200 flex flex-col items-center">
                {project.type}
                <div className={`h-1 w-12 mt-2 rounded-full ${
                  project.type === 'Hackathon'
                    ? 'bg-white/30'
                    : 'bg-white/30'
                }`} />
              </div>
            </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
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
                    Repository
                  </a>
                  <a 
                    href={project.link}
                    className="text-blue-500 hover:text-blue-400 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Overview
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
