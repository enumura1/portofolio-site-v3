import { Github, Share2, Mail, ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">enumura1</h1>
        <p className="text-xl mb-8">
          <span className="text-gray-600 dark:text-gray-300">
            Web Frontend Developer & Indie Hacker
          </span>
        </p>
        <div className="flex space-x-6 justify-center items-center">
          <a 
            href="https://github.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://twitter.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Share2 size={24} />
          </a>
          <a 
            href="mailto:your@email.com"
            className="hover:text-blue-400 transition-colors"
          >
            <Mail size={24} />
          </a>
          <a 
            href="https://zenn.dev/enumura" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium hover:text-blue-400 transition-colors"
          >
            Zenn
          </a>
          <a 
            href="https://qiita.com/enumura1" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium hover:text-blue-400 transition-colors"
          >
            Qiita
          </a>
          <a 
            href="https://qiita.com/enumura1" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium hover:text-blue-400 transition-colors"
          >
            hoge
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown size={48} />
      </div>
    </section>
  )
}