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
    title: 'ゴールデンウィークを全力で走り切った',
    date: '2025/05/06',
    excerpt: 'ゴールデンウィークを全力で走り切った。毎日気づけば夜になっていて1日の8割～9割はPCで開発していたと思う。ざっくりやりたい事 連休が始まる前に、「ゴールデンウィークにやり抜くこと宣言」という投稿をしていた。長かったはずの...',
    url: 'https://sizu.me/enumura/posts/snwm4cb266sf'
  },
  {
    id: '2',
    title: 'ゴールデンウィークにやり抜くこと宣言',
    date: '2025/04/26',
    excerpt: '今年もう4月末です。ゴールデンウィークが始まります。ゴールデンウィークが始まるのでTODOリストとしてメモを作成しておきます。ゴールデンウィークは開発に全振りする予定です。◆TODO以下の6点です。①：OSS開発...',
    url: 'https://sizu.me/enumura/posts/aud4s5zh3mse'
  },
  {
    id: '3',
    title: '2025年にやりたい事と目標について',
    date: '2025/1/1',
    excerpt: '年が明けたので今年やりたい事と目標を書き出して整理してみます。ざっくりやりたい事 * Zenn本：2つ書く 1つは春までに公開。1つは夏までに公開する * Qiita：月1、2くらいのペースで書く 月1でアウト...',
    url: 'https://sizu.me/enumura/posts/47142ui7ic7d'
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
