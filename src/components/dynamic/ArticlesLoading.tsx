export function ArticlesLoading() {
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
