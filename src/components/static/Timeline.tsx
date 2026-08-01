'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '@/components/ui/language-provider'

type TimelineItem = {
  year: string
  topic: { ja: string; en: string }
  description: { ja: string; en: string }
}

const timeline: TimelineItem[] = [
  {
    year: '2026',
    topic: { ja: '大規模バックエンド基盤の開発', en: 'Large-Scale Backend Platform Development' },
    description: {
      ja: '大規模トラフィックを支えるバックエンド基盤の開発を担当。Kotlin、PostgreSQL、Kafka、Kubernetesを用い、イベントデータを扱うAPIと非同期処理の開発に取り組んでいます。',
      en: 'Developing backend platforms that support high-volume traffic. I work on APIs and asynchronous processing for event data using Kotlin, PostgreSQL, Kafka, and Kubernetes.',
    },
  },
  {
    year: '2025',
    topic: { ja: '生成AIプロダクトのバックエンド・フルスタック開発', en: 'Backend & Full-Stack Development for Generative AI Products' },
    description: {
      ja: 'AWS上で生成AIを活用するWebプロダクトのアーキテクチャ設計とバックエンド開発を担当。RAGを用いた対話機能や、マルチモーダルAIを活用した画像処理ワークフローを開発し、技術選定・設計・チーム推進も経験しました。',
      en: 'Designed architectures and developed backends for generative AI web products on AWS. Built RAG-based conversational features and multimodal AI image-processing workflows, while contributing to technical decisions, design, and team leadership.',
    },
  },
  {
    year: '2024',
    topic: { ja: '生成AIを活用したプロダクトのバックエンド開発', en: 'Backend Development for Generative AI Products' },
    description: {
      ja: 'AWSのマネージドサービスを活用し、ユーザー向けWebプロダクトのバックエンドを設計・開発。検索基盤と生成AIを組み合わせた機能の検証・改善に取り組みました。',
      en: 'Designed and developed backends for user-facing web products with AWS managed services, including experimentation and improvement of features that combine search infrastructure with generative AI.',
    },
  },
  {
    year: '2023',
    topic: { ja: 'Webアプリケーション開発', en: 'Web Application Development' },
    description: { ja: '社内向けWebツールの開発と技術サポートを担当。業務フローの自動化や、ログ・ソースコード調査を通じた障害原因の特定と改善に取り組みました。', en: 'Developed internal web tools and provided technical support, including workflow automation and issue investigation through log and source-code analysis.' },
  },
  {
    year: '2022',
    topic: { ja: 'モバイルアプリケーション開発', en: 'Mobile Development' },
    description: { ja: 'React Nativeによるモバイルアプリ開発と、Webフロントエンド開発に取り組みました。', en: 'Worked on mobile app development with React Native and web frontend development.' },
  },
]

const DEFAULT_SHOW_COUNT = 3

export function Timeline() {
  const [showAll, setShowAll] = useState(false)
  const { language } = useLanguage()
  const displayedItems = showAll ? timeline : timeline.slice(0, DEFAULT_SHOW_COUNT)

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="experience">
      <h2 className="text-4xl font-bold mb-8">🛠️ {language === 'ja' ? '実務・開発経験' : 'Professional Experience'}</h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500" />
        {displayedItems.map((item, index) => (
          <div key={item.year} className="relative pl-8 mb-16 last:mb-0">
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 z-10">
              {index === 0 && <div className="absolute -inset-2 w-8 h-8 rounded-full border-2 border-blue-300/50 animate-ping" style={{ animationDuration: '2.8s' }} />}
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md">
              <div className="text-lg text-blue-500 font-bold mb-3">{item.year}</div>
              <h3 className="text-xl font-bold mb-2">{item.topic[language]}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description[language]}</p>
            </div>
          </div>
        ))}
        {timeline.length > DEFAULT_SHOW_COUNT && (
          <div className="relative pl-8 mt-4">
            <button onClick={() => setShowAll(!showAll)} className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md">
              <span>{showAll ? (language === 'ja' ? '閉じる' : 'Show less') : (language === 'ja' ? 'もっと見る' : 'Show more')}</span>
              {showAll ? <ChevronUp size={18} className="text-blue-500" /> : <ChevronDown size={18} className="text-blue-500" />}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
