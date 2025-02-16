'use client'

import { ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  url: string;
};

async function getBlogPosts(): Promise<BlogPost[]> {
  return [
    {
      id: '1',
      title: '技術的負債との向き合い方',
      date: '2024-02-15',
      excerpt: '持続可能な開発のためのアプローチについて考察します。チーム全体で技術的負債を理解し、計画的に対処することの重要性についてaa',
      url: '#'
    },
    {
      id: '2',
      title: 'エンジニアとしての成長記録',
      date: '2024-02-01',
      excerpt: '直近1年間の学びと気づきについて振り返ります。新しい技術との出会いや、チームでの経験から得られた教訓をまとめました。',
      url: '#'
    }
  ];
}

export function BlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const data = await getBlogPosts()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <div className="grid gap-8">
      {posts.map((post) => (
        <div 
          key={post.id}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-none transition-colors"
        >
          <h3 className="text-xl font-semibold mb-2">
            <a 
              href={post.url}
              target="_blank"
              rel="noopener noreferrer" 
              className="hover:text-blue-400 flex items-center"
            >
              {post.title}
              <ExternalLink size={16} className="ml-2" />
            </a>
          </h3>
          <div className="text-gray-600 dark:text-gray-400 mb-4">
            {post.date}
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {post.excerpt}
          </p>
        </div>
      ))}
    </div>
  )
}
