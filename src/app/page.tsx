import { ThemeSwitcher } from '@/components/ui/theme-switcher'

// static
import { Hero } from '@/components/static/Hero'
import { About } from '@/components/static/About'
import { Timeline } from '@/components/static/Timeline'
import { Certifications } from '@/components/static/Certifications'
import { Projects } from '@/components/static/Projects'

// dynamic
import { Articles } from '@/components/dynamic/Articles'
import { Blog } from '@/components/dynamic/Blog'

export default function Home() {
  return (
    <main className="min-h-screen text-gray-900 dark:text-white transition-colors duration-200">
      <ThemeSwitcher />
      <Hero />
      <About />
      <Timeline />
      <Certifications />
      <Projects />
      <Articles />
      <Blog />
    </main>
  )
}
