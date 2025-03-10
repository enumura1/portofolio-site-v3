export function BlogLoading() {
  return (
    <div className="space-y-8">
      {[...Array(2)].map((_, i) => (
        <div 
          key={i}
          className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700 animate-pulse"
        >
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
