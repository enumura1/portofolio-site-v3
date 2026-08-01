'use client'

import { useState } from 'react'
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '@/components/ui/language-provider'

type ProjectType = 'Hackathon' | 'OSS'

type Project = {
  title: string
  description: { ja: string; en: string }
  technologies: string[]
  link: string
  github: string
  type: ProjectType
}

const projects: Project[] = [
  {
    title: 'MonoPon - AI-Powered Decluttering Support App',
    description: {
      ja: 'Google Cloud Vertex AIを活用し、持ち物の価値評価とデジタルな思い出の保存を支援するFlutter製AI片付けアプリです。',
      en: 'A Flutter-based AI decluttering app that uses Google Cloud Vertex AI to assess item values and preserve digital memories.',
    },
    technologies: ['Flutter', 'FastAPI', 'Google Cloud Platform', 'Vertex AI', 'Gemini AI', 'Cloud Run'],
    link: 'https://protopedia.net/prototype/7540',
    github: 'https://github.com/team-nup/2025-edd-frontend',
    type: 'Hackathon',
  },
  {
    title: 'Kashika - Making Business Chats More Understandable with Diagrams',
    description: {
      ja: 'ビジネスチャット上の説明を図解で支援するAIアシスタントです。RAGによる図表テンプレートの提案と、Webアプリケーション上での編集機能を提供します。',
      en: 'An AI assistant that supports explanations in business chats with diagrams. It offers diagram-template suggestions through RAG and editing features in a web application.',
    },
    technologies: ['React', 'Vite', 'TypeScript', 'shadcn/ui', 'AWS Lambda', 'Python', 'Amazon Bedrock', 'scikit-learn', 'Docker'],
    link: 'https://protopedia.net/prototype/6575',
    github: 'https://github.com/enumura1/kasika-web-app',
    type: 'Hackathon',
  },
  {
    title: 'py-sql-cleaner',
    description: {
      ja: 'Pythonソースコードに埋め込まれたSQLを管理するツールです。インラインSQLの検出・整形・抽出に対応しています。',
      en: 'A Python tool for managing SQL embedded in Python source files. It supports scanning, formatting, and extracting inline SQL queries.',
    },
    technologies: ['Python', 'CLI', 'PyPI package'],
    link: 'https://enumura1.github.io/py-sql-cleaner/',
    github: 'https://github.com/enumura1/py-sql-cleaner',
    type: 'OSS',
  },
  {
    title: 'chatbot-flow-editor',
    description: {
      ja: 'ドラッグ＆ドロップでチャットボットの会話フローを設計できるビジュアルエディタです。チャットシミュレーターでのテストとJSON出力に対応しています。',
      en: 'A visual chatbot flow editor with drag-and-drop design, live chat simulation, and JSON export.',
    },
    technologies: ['React', 'TypeScript', 'npm package'],
    link: 'https://enumura1.github.io/chatbot-flow-editor/',
    github: 'https://github.com/enumura1/chatbot-flow-editor',
    type: 'OSS',
  },
  {
    title: 'liquidui-animation',
    description: {
      ja: '流体のようなアニメーションを実装するReact向けUIコンポーネントライブラリです。形状・サイズ・アニメーション強度をカスタマイズできます。',
      en: 'A React UI component library for fluid-like animations, with customizable shape, size, and animation intensity.',
    },
    technologies: ['React', 'TypeScript', 'Animation', 'npm package'],
    link: 'https://www.npmjs.com/package/@enumura/liquidui-animation',
    github: 'https://github.com/enumura1/liquidui-animation',
    type: 'OSS',
  },
  {
    title: 'maze_runner_rs',
    description: {
      ja: 'ランダム生成された迷路をキーボード操作でゴールまで進む、テキストベースの迷路ゲーム向けRustライブラリです。',
      en: 'A Rust library for text-based maze games. Navigate a randomly generated maze to the goal with keyboard controls.',
    },
    technologies: ['Rust', 'CLI', 'crate'],
    link: 'https://crates.io/crates/maze_runner_rs',
    github: 'https://github.com/enumura1/maze_runner_rs',
    type: 'OSS',
  },
  {
    title: 'api-shooter-game',
    description: {
      ja: 'HTTPメソッドを使って敵を倒す、Rust製のCLIアクションゲームです。',
      en: 'A Rust CLI action game where you defeat enemies using HTTP methods.',
    },
    technologies: ['Rust', 'Game', 'crate'],
    link: 'https://crates.io/crates/api-shooter-game',
    github: 'https://github.com/enumura1/api-shooter-game',
    type: 'OSS',
  },
]

const DEFAULT_SHOW_COUNT = 3

function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage()
  const typeLabel = project.type === 'Hackathon' ? (language === 'ja' ? 'ハッカソン' : 'Hackathon') : 'OSS'

  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md">
      <div className="md:flex">
        <div className={`md:w-1/3 h-48 md:h-auto flex items-center justify-center text-4xl font-bold ${project.type === 'Hackathon' ? 'bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 text-white' : 'bg-gradient-to-br from-emerald-400 to-emerald-600 dark:from-emerald-600 dark:to-emerald-800 text-white'}`}>
          <div className="transform hover:scale-105 transition-transform duration-200 flex flex-col items-center">
            {typeLabel}
            <div className="h-1 w-12 mt-2 rounded-full bg-white/30" />
          </div>
        </div>
        <div className="p-6 md:w-2/3">
          <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description[language]}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => <span key={tech} className="px-2 py-1 rounded text-sm bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600">{tech}</span>)}
          </div>
          <div className="flex space-x-4">
            <a href={project.github} className="text-blue-500 hover:text-blue-400 flex items-center" target="_blank" rel="noopener noreferrer"><Github size={20} className="mr-2" />{language === 'ja' ? 'リポジトリ' : 'Repository'}</a>
            <a href={project.link} className="text-blue-500 hover:text-blue-400 flex items-center" target="_blank" rel="noopener noreferrer"><ExternalLink size={20} className="mr-2" />{language === 'ja' ? '概要' : 'Overview'}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCategory({ title, projects, icon }: { title: string; projects: Project[]; icon: string }) {
  const [showAll, setShowAll] = useState(false)
  const { language } = useLanguage()
  const displayedProjects = showAll ? projects : projects.slice(0, DEFAULT_SHOW_COUNT)

  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-2xl font-bold mb-6">{icon} {title}</h3>
      <div className="grid grid-cols-1 gap-6">{displayedProjects.map((project) => <ProjectCard key={project.title} project={project} />)}</div>
      {projects.length > DEFAULT_SHOW_COUNT && <div className="mt-4"><button onClick={() => setShowAll(!showAll)} className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md"><span>{showAll ? (language === 'ja' ? '閉じる' : 'Show less') : (language === 'ja' ? 'もっと見る' : 'Show more')}</span>{showAll ? <ChevronUp size={18} className="text-blue-500" /> : <ChevronDown size={18} className="text-blue-500" />}</button></div>}
    </div>
  )
}

export function Projects() {
  const { language } = useLanguage()
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="projects">
      <h2 className="text-4xl font-bold mb-8">💡 {language === 'ja' ? 'プロジェクト' : 'Projects'}</h2>
      <ProjectCategory title={language === 'ja' ? 'ハッカソン' : 'Hackathon'} projects={projects.filter((project) => project.type === 'Hackathon')} icon="🏆" />
      <ProjectCategory title="OSS" projects={projects.filter((project) => project.type === 'OSS')} icon="🌐" />
    </section>
  )
}
