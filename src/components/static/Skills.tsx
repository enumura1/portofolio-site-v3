'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '@/components/ui/language-provider'

type Skill = {
  name: { ja: string; en: string }
  items: Array<{ name: string; icon?: string }>
}

const skills: Skill[] = [
  {
    name: { ja: 'フロントエンド', en: 'Frontend' },
    items: [
      { name: 'JavaScript', icon: '🔶' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'React', icon: '⚛️' },
    ],
  },
  {
    name: { ja: 'バックエンド', en: 'Backend' },
    items: [
      { name: 'Kotlin', icon: '🟣' },
      { name: 'Python', icon: '🟡' },
      { name: 'Node.js', icon: '🟢' },
    ],
  },
  {
    name: { ja: 'データベース・検索', en: 'Data & Search' },
    items: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'DynamoDB', icon: '🗄️' },
      { name: 'Amazon Aurora', icon: '🌌' },
      { name: 'Redshift', icon: '🔴' },
      { name: 'OpenSearch', icon: '🔎' },
    ],
  },
  {
    name: { ja: 'クラウド', en: 'Cloud' },
    items: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Google Cloud', icon: '☁️' },
    ],
  },
  {
    name: { ja: 'インフラ', en: 'Infrastructure' },
    items: [
      { name: 'Kubernetes', icon: '⎈' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Terraform', icon: '🏗️' },
      { name: 'CloudFormation', icon: '📐' },
    ],
  },
  {
    name: { ja: 'データ処理', en: 'Data Processing' },
    items: [
      { name: 'Kafka', icon: '📨' },
      { name: 'Airflow', icon: '🌬️' },
    ],
  },
  {
    name: { ja: 'AIツール', en: 'AI Tools' },
    items: [
      { name: 'Claude Code', icon: '🤖' },
      { name: 'Codex', icon: '🤖' },
    ],
  },
  {
    name: { ja: 'クリエイティブ', en: 'Creative Tools' },
    items: [
      { name: 'Blender', icon: '🎨' },
      { name: 'Three.js', icon: '🌐' },
    ],
  },
]

const DEFAULT_SHOW_COUNT = 4

export function Skills() {
  const { language } = useLanguage()
  const [showAll, setShowAll] = useState(false)
  const displayedSkills = showAll ? skills : skills.slice(0, DEFAULT_SHOW_COUNT)

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="skills">
      <h2 className="text-4xl font-bold mb-8">💻 {language === 'ja' ? 'スキル' : 'Skills'}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedSkills.map((category) => (
          <div
            key={category.name.en}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md"
          >
            <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
              {category.name[language]}
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {category.items.map((skill) => (
                <li
                  key={skill.name}
                  className="bg-white dark:bg-gray-700 rounded-lg p-3 flex items-center shadow-sm transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  {skill.icon && <span className="text-xl mr-3">{skill.icon}</span>}
                  <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {skills.length > DEFAULT_SHOW_COUNT && (
        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md"
          >
            <span>{showAll ? (language === 'ja' ? '閉じる' : 'Show less') : (language === 'ja' ? 'その他のスキルを見る' : 'View more skills')}</span>
            {showAll ? <ChevronUp size={18} className="text-blue-500" /> : <ChevronDown size={18} className="text-blue-500" />}
          </button>
        </div>
      )}
    </section>
  )
}
