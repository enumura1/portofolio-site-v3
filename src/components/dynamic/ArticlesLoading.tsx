export function ArticlesLoading() {
    return (
      <div className="space-y-6">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-none animate-pulse"
          >
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    )
  }
