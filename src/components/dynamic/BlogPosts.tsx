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
    title: '今年一の思い出、2025年といえばこれです',
    date: '2025/10/10',
    excerpt: '今日は、ひと区切りついた日（たぶん）なので久々にブログを更新しに来ました。まだもう少し続きそうですが、ひと区切りです。タイトルにもある通り全力で走り切りる日々でした。',
    url: 'https://sizu.me/enumura/posts/5m8mma26mmca'
  },
  {
    id: '2',
    title: '人生初、海外のOSSカンファレンスに参加してきた',
    date: '2025/08/11',
    excerpt: 'アジア最大のオープンソースイベント と言われる coscup 2025 に参加してきました。この記事は台湾から帰国する当日の3時間前に空港で書いてます。',
    url: 'https://sizu.me/enumura/posts/8ddhirafb5as'
  },
  {
    id: '3',
    title: '変化ありです',
    date: '2025/07/03',
    excerpt: '今年も50%が終わったらしいです。最近仕事外の分野でいろいろ動いていました。結論、いい変化ありです。',
    url: 'https://sizu.me/enumura/posts/iu98kzfnaw50'
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
