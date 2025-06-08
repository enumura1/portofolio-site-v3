import Link from 'next/link'
import { Suspense } from 'react'
import { GitPullRequest, GitMerge, XCircle, ExternalLink, Clock } from 'lucide-react'

export const metadata = {
  title: 'OSS Contributions | enumura1',
  description: 'Open source contributions and pull requests to external projects by enumura1'
}

interface GitHubPR {
  id: number
  title: string
  html_url: string
  state: 'open' | 'closed'
  created_at: string
  updated_at: string
  repository_url: string
  user: {
    login: string
  }
  pull_request?: {
    merged_at: string | null
  }
}

async function fetchOSSContributions(): Promise<GitHubPR[]> {
  try {
    // List of PRs to exclude, hackathon related or otherwise.
    const excludedUsers = [
      'enumura1',         
      'team-nup',         
      'CyberAgentHack',   
      'kt-52',            
      'htnabe',           
      'RubyCamp',         
      'ruby-shimadai'     
    ]
    
    // GitHub Search API syntax
    const baseQuery = 'author:enumura1 type:pr'
    const excludeQuery = excludedUsers.map(user => `-user:${user}`).join(' ')
    const query = `${baseQuery} ${excludeQuery}`
    
    console.log('GitHub API Query:', query)
    
    const response = await fetch(
      `https://api.github.com/search/issues?q=${encodeURIComponent(query)}&sort=updated&order=desc&per_page=20`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'enumura1-portfolio'
        },
        next: { revalidate: 3600 }
      }
    )
    
    console.log('Response status:', response.status)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('GitHub API error:', response.status, errorText)
      return []
    }
    
    const data = await response.json()
    console.log('GitHub API Response:', data)
    
    return data.items || []
  } catch (error) {
    console.error('Fetch error:', error)
    return []
  }
}

function PRStatusIcon({ pr }: { pr: GitHubPR }) {
  if (pr.pull_request?.merged_at) {
    return <GitMerge className="w-4 h-4 text-purple-500" />
  }
  if (pr.state === 'closed') {
    return <XCircle className="w-4 h-4 text-red-500" />
  }
  return <GitPullRequest className="w-4 h-4 text-green-500" />
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

function getRepoName(repositoryUrl: string) {
  return repositoryUrl.split('/').slice(-2).join('/')
}

function getStatusText(pr: GitHubPR) {
  if (pr.pull_request?.merged_at) return 'Merged'
  return pr.state === 'open' ? 'Open' : 'Closed'
}

function getStatusColor(pr: GitHubPR) {
  if (pr.pull_request?.merged_at) {
    return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
  }
  if (pr.state === 'open') {
    return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  }
  return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
}

function ContributionsLoading() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
        OSS Pull Requests
      </h2>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 animate-pulse"
          >
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

async function OSSContributionsList() {
  const ossContributions = await fetchOSSContributions()

  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700">
        OSS Pull Requests ({ossContributions.length})
      </h2>
      
      {ossContributions.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
            <GitPullRequest className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
              No OSS contributions found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Pull requests to external repositories will appear here.
            </p>
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-blue-500 hover:text-blue-600">
                Debug Info
              </summary>
              <div className="mt-2 text-xs text-gray-500 font-mono">
                <div>Query: author:enumura1 type:pr -user:enumura1 -user:team-nup -user:CyberAgentHack -user:kt-52 -user:htnabe -user:RubyCamp -user:ruby-shimadai</div>
                <div className="mt-1">Check browser console (F12) for detailed logs</div>
              </div>
            </details>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {ossContributions.map((pr) => (
            <a
              key={pr.id}
              href={pr.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700
                       transition-all hover:translate-x-1 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <PRStatusIcon pr={pr} />
                    <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
                      {pr.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {getRepoName(pr.repository_url)}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatDate(pr.created_at)}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(pr)}`}>
                      {getStatusText(pr)}
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" />
              </div>
            </a>
          ))}
        </div>
      )}

      {ossContributions.length > 0 && (
        <div className="mt-8 text-center">
          <p className="text-sm dark:text-gray-400">
            Showing contributions to external open source projects
          </p>
          <p className="text-sm dark:text-gray-400 mt-1">
            Personal repositories, hackathons, and student projects excluded
          </p>
        </div>
      )}
    </section>
  )
}

export default function OSSContributionsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        <header className="mb-16 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-500 hover:text-blue-600 transition-colors mb-6"
          >
            ← Back to portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">OSS Contributions</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My contributions to open source projects through pull requests and community involvement
          </p>
        </header>

        <Suspense fallback={<ContributionsLoading />}>
          <OSSContributionsList />
        </Suspense>

        <section className="text-center mt-16">
          <a
            href="https://github.com/enumura1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-blue-500 hover:text-blue-400 transition-colors"
          >
            View GitHub Profile
            <ExternalLink size={20} className="ml-2" />
          </a>
        </section>
      </div>
    </main>
  )
}
