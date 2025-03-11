import { Suspense } from 'react'
import { ExternalLink } from 'lucide-react'
import { fetchZennArticles } from '@/utils/zenn'

// ローディング
function ZennLoading() {
  return (
    <div className="space-y-6">
      {[...Array(5)].map((_, i) => (
        <div 
          key={i}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700 animate-pulse"
        >
          <div className="flex justify-between items-start">
            <div className="w-full">
              <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
              <div className="flex gap-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
              </div>
            </div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// 記事一覧を表示するコンポーネント
async function ZennList() {
  try {
    const articles = await fetchZennArticles();

    if (!articles || articles.length === 0) {
      return (
        <div className="text-center py-8 text-gray-600 dark:text-gray-400">
          No Zenn articles available at the moment.
        </div>
      )
    }

    return (
      <div>
        <div className="space-y-4">
          {articles.map((article) => (
            <a 
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer" 
              className="block bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700
                      transition-all hover:translate-x-1 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{article.emoji}</span>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 truncate">
                      {article.title}
                    </h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {new Date(article.created_at).toLocaleDateString('ja-JP', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                </div>
                <ExternalLink 
                  size={20} 
                  className="flex-shrink-0 text-gray-400 dark:text-gray-500"
                />
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a
            href="https://zenn.dev/enumura"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
          >
            View More Articles
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Failed to fetch Zenn articles:', error)
    return (
      <div className="space-y-6">
        <div className="text-center py-8 text-gray-600 dark:text-gray-400">
          Unable to load Zenn articles at the moment.
        </div>
        <div className="text-center">
          <a
            href="https://zenn.dev/enumura1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
          >
            View Articles on Zenn
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    )
  }
}

// メインのコンポーネント
export function Zenn() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="zenn">
      <h2 className="text-4xl font-bold mb-8">📘 Zenn Articles</h2>
      <Suspense fallback={<ZennLoading />}>
        <ZennList />
      </Suspense>
    </section>
  )
}
