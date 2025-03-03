import { ChevronDown } from 'lucide-react'
import { TerminalInterface } from './TerminalInterface'

export function TerminalHero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-20 gap-8 md:gap-16 pt-16 md:pt-0 relative">
      {/* 左側：my info */}
      <div className="w-full md:w-5/12 text-center md:text-left md:pl-4 lg:pl-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-3 md:mb-4">enumura1</h1>
        <p className="text-lg md:text-2xl lg:text-3xl mb-6 md:mb-8">
          <span className="text-gray-600 dark:text-gray-300">
            Web Frontend Developer & Indie Hacker
          </span>
        </p>
        <div className="flex space-x-5 md:space-x-7 justify-center md:justify-start items-center">
          <a 
            href="https://zenn.dev/enumura" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl lg:text-3xl font-medium text-blue-300 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            Zenn
          </a>
          <a 
            href="https://qiita.com/enumura1" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl lg:text-3xl font-medium text-green-300 dark:text-green-400 hover:text-green-400 dark:hover:text-green-300 transition-colors"
          >
            Qiita
          </a>
          <a 
            href="https://github.com/enumura1" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg md:text-xl lg:text-3xl font-medium text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* 右側：ターミナルインターフェース - 右寄せとパディングを調整 */}
      <div className="w-full md:w-5/12 mt-6 md:mt-0 md:pr-4 lg:pr-8">
        <TerminalInterface />
      </div>

      {/* スクロールヒント: desktop */}
      <div className="absolute md:bottom-8 animate-bounce hidden md:block">
        <ChevronDown size={30} className="md:w-12 md:h-12" />
      </div>
      
      {/* スクロールヒント: mobile */}
      <div className="w-full flex justify-center mt-6 md:hidden animate-bounce">
        <ChevronDown size={24} />
      </div>
    </section>
  )
}
