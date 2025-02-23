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
    title: '2025年にやりたい事と目標について',
    date: '2025/1/1',
    excerpt: '年が明けたので今年やりたい事と目標を書き出して整理してみます。ざっくりやりたい事 * Zenn本：2つ書く 1つは春までに公開。1つは夏までに公開する * Qiita：月1、2くらいのペースで書く 月1でアウト...',
    url: 'https://sizu.me/enumura/posts/47142ui7ic7d'
  },
  {
    id: '2',
    title: 'エンジニアとしての2024年を振り返ってみる',
    date: '2024/12/31',
    excerpt: '本日は2024年12月31日で今年も今日で終わりだ。1つの節目としてエンジニアとしての観点で2024年を振り返ってみる。最初に結論。今年はエンジニアとして2年目の年であり、SREそしてバックエンドエンジニア...',
    url: 'https://sizu.me/enumura/posts/h7emnr1o530c'
  },
  {
    id: '3',
    title: '2024年も70%が終わったらしい。残ってるタスクと今後のタスクの洗い出し',
    date: '2024/9/16',
    excerpt: '2024年がどれくらい終わったのか、GASで作ったBotに毎月通知させているのだが70%が終わったとの通知が来て驚いている。2024年はあと30%しか残っていない。改めて今年中に達成しようとしてる事で残っ...',
    url: 'https://sizu.me/enumura/posts/tzbcoxhcax3k'
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
            <article className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm dark:shadow-none 
              transition-all duration-300 
              hover:shadow-md hover:translate-x-1 
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
