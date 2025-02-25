export function Footer() {
    return (
      <footer className="py-8 px-4 bg-white dark:bg-gray-800 border-t border-gray-200
       dark:border-gray-700" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} enumura1. All rights reserved.
          </p>
        </div>
      </footer>
    )
}
