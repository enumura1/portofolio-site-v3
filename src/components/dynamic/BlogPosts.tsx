'use client'

import { ExternalLink } from 'lucide-react'

type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  url: string;
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'コーディングに意識する設計・品質の言語化メモ',
    date: '2026/01/02',
    excerpt: 'ソフトウェア開発における設計と品質意識の重要性をまとめたノートです。「オブジェクト思考」「関心事の分離」「命名」などの原則を通じて、保守性と開発効率を高めるコーディング手法を言語化しています。',
    url: 'https://sizu.me/enumura/posts/f4ot6ibdz55k'
  },
  {
    id: '2',
    title: '2025版：年末年始ににやる抜くこと宣言',
    date: '2025/12/21',
    excerpt: '長期休暇を「チャンス」と捉え、エンジニアリング活動に集中する予定です。記事執筆、アルゴリズム学習、ハッカソン参加など6つの具体的な目標を掲げています。',
    url: 'https://sizu.me/enumura/posts/104mhbw8zkie'
  },
  {
    id: '3',
    title: '未知の環境に飛び込む勇気',
    date: '2025/12/14',
    excerpt: 'ハッカソンに参加した体験について。「おもしろそう！」という直感で、知り合いのいない未知の環境に飛び込むことを決断。WebRTCやTiDBなど、複数の新しい技術を習得でき、エンジニアとしての成長を実感しました。',
    url: 'https://sizu.me/enumura/posts/5sddf7es00f4'
  }
];

export function BlogPosts() {
  return (
    <>
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <a 
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <article className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700
              transition-all duration-300 
              hover:shadow-md hover:translate-x-1 hover:border-blue-200 dark:hover:border-blue-700
              dark:hover:bg-gray-700"
            >
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 
                  group-hover:text-blue-500 dark:group-hover:text-blue-400 
                  transition-colors duration-300"
                >
                  {post.title}
                </h3>

                <time 
                  dateTime={post.date} 
                  className="text-sm text-gray-500 dark:text-gray-400 font-medium"
                >
                  {post.date}
                </time>

                <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center text-sm font-medium 
                    text-blue-500 dark:text-blue-400 
                    group-hover:translate-x-1 transition-transform duration-300"
                  >
                    Read more <ExternalLink size={14} className="ml-1" />
                  </span>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="https://sizu.me/enumura"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-sm font-medium text-blue-500 hover:text-blue-400 
            hover:translate-x-1 transition-all duration-300"
        >
        View More Articles
        <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </>
  )
}
