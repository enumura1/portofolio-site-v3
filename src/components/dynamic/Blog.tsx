import { Suspense } from 'react'
import { BlogPosts } from './BlogPosts'
import { BlogLoading } from './BlogLoading'

export function Blog() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="blog">
      <h2 className="text-4xl font-bold mb-8">📚Personal Blog</h2>
      <Suspense fallback={<BlogLoading />}>
        <BlogPosts />
      </Suspense>
    </section>
  )
}
