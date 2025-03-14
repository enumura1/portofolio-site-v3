import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Tech Stack | enumura1',
  description: 'Modern web technologies used in this portfolio',
}

export default function TechStack() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-16 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors mb-6"
          >
            ← Back to portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Web Performance Insights</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Performance optimization techniques and modern web technologies used in this portfolio
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
            Technology Stack
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm">
                <h4 className="font-medium mb-2">Framework</h4>
                <p className="text-gray-600 dark:text-gray-300">Next.js</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm">
                <h4 className="font-medium mb-2">UI</h4>
                <p className="text-gray-600 dark:text-gray-300">Tailwind CSS</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm">
                <h4 className="font-medium mb-2">Runtime</h4>
                <p className="text-gray-600 dark:text-gray-300">React</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm">
                <h4 className="font-medium mb-2">Language</h4>
                <p className="text-gray-600 dark:text-gray-300">TypeScript</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm">
                <h4 className="font-medium mb-2">Utilities</h4>
                <p className="text-gray-600 dark:text-gray-300">clsx / tailwind-merge</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm">
                <h4 className="font-medium mb-2">Linting</h4>
                <p className="text-gray-600 dark:text-gray-300">ESLint</p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm">
                <h4 className="font-medium mb-2">Development</h4>
                <p className="text-gray-600 dark:text-gray-300">Turbopack</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
            Core Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md">
              <h3 className="text-xl font-semibold mb-3">Next.js 15</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Using Next.js 15 (canary) with experimental Partial Prerendering enabled for optimal performance.
              </p>
              <div className="flex mt-4">
                <a 
                  href="https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 inline-flex items-center"
                >
                  Learn about PPR <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md">
              <h3 className="text-xl font-semibold mb-3">Turbopack</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Using Turbopack for significantly faster development experience and incremental compilation.
              </p>
              <div className="flex mt-4">
                <a 
                  href="https://turbo.build/pack" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 inline-flex items-center"
                >
                  Turbopack docs <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
            Performance Approach
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md">
            <h3 className="text-xl font-semibold mb-3">Partial Prerendering (PPR)</h3>
            <p className="text-gray-600 dark:text-gray-300">
              This portfolio uses Next.js Partial Prerendering to deliver instant static content with dynamic islands. 
              The project structure separates static components (/components/static/) from dynamic ones (/components/dynamic/),
              allowing the page shell to be served immediately while dynamic components load in parallel.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
            Future Optimizations
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm">
                <h4 className="font-medium text-lg mb-2">Font Subsetting</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Implementing Japanese font subsetting to reduce initial load time.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm">
                <h4 className="font-medium text-lg mb-2">Server Actions</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Implementing server actions for more efficient server-side operations.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-all hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm">
                <h4 className="font-medium text-lg mb-2">Web Vitals Optimization</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Continuous measurement and improvement of Core Web Vitals metrics.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
