'use client'

import { ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

type Article = {
  id: string;
  title: string;
  url: string;
  publishedAt: string;
  likes: number;
  platform: 'Zenn' | 'Qiita';
};

async function getArticles(): Promise<Article[]> {
  // 仮のデータを返します
  return [
    {
      id: '1',
      title: 'Next.jsで～～～',
      url: '#',
      publishedAt: '2024-02-10',
      likes: 1,
      platform: 'Zenn'
    },
    {
      id: '2',
      title: 'aaaa title',
      url: '#',
      publishedAt: '2024-01-25',
      likes: 2,
      platform: 'Qiita'
    },
    {
      id: '3',
      title: 'bbb title',
      url: '#',
      publishedAt: '2024-01-15',
      likes: 6,
      platform: 'Zenn'
    }
  ];
}

export function ArticlesList() {
  const [articles, setArticles] = useState<Article[]>([])
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    async function fetchArticles() {
      const data = await getArticles()
      setArticles(data)
    }
    fetchArticles()
  }, [])

  const displayedArticles = showAll ? articles : articles.slice(0, 5)

  return (
    <div className="space-y-6">
      {displayedArticles.map((article) => (
        <div 
          key={article.id}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-none transition-colors"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                <a 
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-blue-400 flex items-center"
                >
                  {article.title}
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </h3>
              <div className="text-gray-600 dark:text-gray-400">
                <span>{article.platform}</span>
                <span className="mx-2">•</span>
                <span>{article.publishedAt}</span>
              </div>
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              ❤️ {article.likes}
            </div>
          </div>
        </div>
      ))}
      {articles.length > 5 && (
        <button 
          onClick={() => setShowAll(!showAll)}
          className="w-full py-3 text-blue-500 hover:text-blue-400 transition-colors"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  )
}