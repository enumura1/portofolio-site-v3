import Link from 'next/link'
import { GitPullRequest, ExternalLink } from 'lucide-react'

export function OSSContributions() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="oss-contributions">
      <h2 className="text-4xl font-bold mb-8">🚀 Open Source Contributions</h2>
      
      {/* メインCTAカード */}
      <div className="bg-gray-50 dark:bg-gray-800 
                    border border-gray-200 dark:border-gray-700 rounded-xl p-6
                    transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-500/20 dark:bg-blue-500/30 rounded-lg 
                          flex items-center justify-center">
              <GitPullRequest className="w-6 h-6 text-blue-500" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Contributing to Open Source
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Contributing to external open source projects and communities. 
              View my complete contribution history and pull requests.
            </p>
            
            {/* テキストリンク */}
            <Link 
              href="/oss-contributions"
              className="text-blue-500 hover:text-blue-400 inline-flex items-center group text-sm"
            >
              <span className="mr-1">View All Contributions</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}