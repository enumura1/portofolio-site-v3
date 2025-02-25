// static
import { Header } from '@/components/static/Header'
import { TerminalHero } from '@/components/static/TerminalHero'
import { About } from '@/components/static/About'
import { Timeline } from '@/components/static/Timeline'
import { Certifications } from '@/components/static/Certifications'
import { Projects } from '@/components/static/Projects'
import { Footer } from '@/components/static/Footer'

// dynamic
import { Articles } from '@/components/dynamic/Articles'
import { Blog } from '@/components/dynamic/Blog'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
        <TerminalHero />
        <About />
        <Timeline />
        <Certifications />
        <Articles />
        <Blog />
        <Projects />
        <Footer />
      </main>
    </>
  )
}
