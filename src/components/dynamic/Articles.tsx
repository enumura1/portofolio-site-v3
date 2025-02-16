import { Suspense } from 'react'
import { ArticlesList } from './ArticlesList'
import { ArticlesLoading } from './ArticlesLoading'

export function Articles() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Latest Articles</h2>
      <Suspense fallback={<ArticlesLoading />}>
        <ArticlesList />
      </Suspense>
    </section>
  )
}
