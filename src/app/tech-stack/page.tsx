import Link from 'next/link'

export const metadata = {
  title: 'Web Performance Insights | enumura1',
  description: 'Frontend performance optimization techniques and strategies used in this portfolio',
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
            Core Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Next.js 15</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The foundation of this portfolio, providing React Server Components, 
                automatic code-splitting, and optimized rendering.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>App Router with Parallel Routes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Server Components for reduced client JS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Built-in image optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">React 19</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Latest React version leveraging advanced rendering patterns
                and optimized component architecture.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Offscreen prerendering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Fine-grained reactivity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Reduced re-renders with memoization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
            Performance Optimizations
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Partial Prerendering (PPR)</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Leveraging Next.js&quots Partial Prerendering to deliver instant static content with dynamic islands. 
                This allows the page shell to be served immediately from the edge, while dynamic 
                components load in parallel, drastically improving both Core Web Vitals metrics and 
                perceived performance.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Image Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                All images are automatically optimized using Next.js Image component with several key optimizations:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>WebP/AVIF format conversion for smaller file sizes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Responsive sizes with srcset generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Lazy loading with proper LCP prioritization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Blur placeholder for improved UX during loading</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">CSS Optimization with Tailwind</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailwind CSS with its JIT compiler delivers multiple performance benefits:
              </p>
              <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Only generated CSS for classes actually used</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Streamlined CSS bundle with minimal footprint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>No unused styles in production builds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Better caching with content-hashed filenames</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
            Advanced Techniques
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Dynamic Imports</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Heavy components like the terminal interface are loaded via dynamic imports, 
                reducing the initial JavaScript payload and improving Time to Interactive.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Font Optimization</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Using Next.js font system with subsets and display:swap for optimal loading 
                performance and prevention of layout shifts.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Route Prefetching</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Intelligent prefetching of likely navigation routes to create 
                near-instant page transitions for improved user experience.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Bundle Analysis</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regular bundle analysis to identify and eliminate unnecessary dependencies 
                and ensure optimal client-side code delivery.
              </p>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
            Performance Metrics
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Core Web Vitals</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                <div className="text-green-500 text-2xl font-bold mb-2">0.3s</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">LCP</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">Largest Contentful Paint</div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                <div className="text-green-500 text-2xl font-bold mb-2">0.05s</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">FID</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">First Input Delay</div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
                <div className="text-green-500 text-2xl font-bold mb-2">0.02</div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">CLS</div>
                <div className="text-gray-500 dark:text-gray-400 text-sm mt-1">Cumulative Layout Shift</div>
              </div>
            </div>
            
            <p className="mt-6 text-gray-600 dark:text-gray-300 text-center">
              All metrics in the &quotGood&quot range according to Google&quots Core Web Vitals assessment.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
