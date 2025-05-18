import Link from 'next/link'

export const metadata = {
  title: 'Developer Resolutions 2025 | enumura1',
  description: 'My developer goals and resolutions for 2025'
}

export default function ResolutionsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <header className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors mb-6"
          >
            ← Back to portfolio
          </Link>
          <h1 className="text-4xl font-bold mb-4">Developer Resolutions</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            What I want to accomplish as a developer in 2025
          </p>
          <div className="w-full h-px bg-gray-200 dark:bg-gray-700 mt-6"></div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Frontend Development
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                <span>Focus on improving frontend development skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                <span>Study web frontend performance tuning techniques</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                <span>Learn techniques to improve Lighthouse scores</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                <span>Learn how to use Chrome DevTools for performance analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                <span>Practice TypeScript and Rust development alternately</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700">
            Open Source Contributions
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
            <ul className="space-y-4 text-gray-600 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                <span>Contribute to 3 open source projects this year</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}
