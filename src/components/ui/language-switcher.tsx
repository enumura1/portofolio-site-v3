'use client'

import { useLanguage } from './language-provider'

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className="flex items-center rounded-full bg-gray-200 dark:bg-gray-800 p-1 text-sm font-semibold shadow-sm"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLanguage('ja')}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          language === 'ja'
            ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-600 dark:text-white'
            : 'text-gray-500 dark:text-gray-400'
        }`}
        aria-pressed={language === 'ja'}
      >
        JP
      </button>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`rounded-full px-3 py-1.5 transition-colors ${
          language === 'en'
            ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-600 dark:text-white'
            : 'text-gray-500 dark:text-gray-400'
        }`}
        aria-pressed={language === 'en'}
      >
        EN
      </button>
    </div>
  )
}
