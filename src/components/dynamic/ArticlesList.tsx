import { ExternalLink } from 'lucide-react'
import { fetchQiitaArticles } from '@/utils/qiita'

export async function ArticlesList() {
  try {
    const articles = await fetchQiitaArticles();

    if (!articles || articles.length === 0) {
      return (
        <div className="text-center py-8 text-gray-600 dark:text-gray-400">
          No articles available at the moment.
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
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 truncate">
                    {article.title}
                  </h3>
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
            href="https://qiita.com/enumura1"
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
    console.error('Failed to fetch articles:', error)
    return (
      <div className="space-y-6">
        <div className="text-center py-8 text-gray-600 dark:text-gray-400">
          Unable to load articles at the moment.
        </div>
        <div className="text-center">
          <a
            href="https://qiita.com/enumura1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-blue-500 hover:text-blue-400 transition-colors"
          >
            View Articles on Qiita
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    )
  }
}
