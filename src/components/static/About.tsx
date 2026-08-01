"use client"

import { useLanguage } from '@/components/ui/language-provider'

export function About() {
  const { language } = useLanguage()

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="about">
      <h2 className="text-4xl font-bold mb-8">🧑‍💻{language === 'ja' ? '私について' : 'About Me'}</h2>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-xl">
        {language === 'ja'
          ? <>
              Webアプリケーション開発に関わるバックエンドエンジニア。<br />
              クラウドを活用したバックエンド開発を中心に、生成AIを活用したプロダクトや大規模トラフィックを支える基盤の開発に取り組んでいます。システムデザインとパフォーマンスを意識した設計に関心があります。英語キャッチアップ中。
            </>
          : <>
              I am a backend engineer working on web applications.<br />
              I work on cloud-based backend systems, from generative AI-enabled products to platforms supporting high-volume traffic. I am interested in system design and performance-conscious architecture. Learning English.
            </>}
      </p>
    </section>
  )
}
