'use client'

import Image from 'next/image'
import { ThemeSwitcher } from '@/components/ui/theme-switcher'
import { useState, useEffect, useRef } from 'react'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const observerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting)
      },
      { threshold: [1] }
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div ref={observerRef} className="h-[1px] absolute top-0" />
      <header className="fixed top-0 left-0 right-0 z-50 pt-2 sm:pt-3 md:pt-4">
        <div className="mx-auto px-2 sm:px-4">
          <div className="backdrop-blur-md bg-white/80 dark:bg-white/10 border border-gray-200/30 dark:border-white/20 rounded-2xl m-1 sm:m-2 md:m-4 shadow-lg transition-all duration-300">
            <div className={`flex items-center justify-between px-2 sm:px-3 md:px-6 transition-all duration-300 ${
              isScrolled ? 'h-8 sm:h-10 md:h-14' : 'h-10 sm:h-12 md:h-20'
            }`}>
              <div className="flex items-center space-x-2 md:space-x-5">
                <div className={`relative overflow-hidden rounded-full border-2 border-gray-200/50 dark:border-white/30 shadow-md hover:scale-105 transition-all duration-300 ${
                  isScrolled ? 'w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8' : 'w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10'
                }`}>
                  <Image 
                    src="/images/profile.webp" 
                    alt="Profile" 
                    fill
                    className="object-cover"
                  />
                </div>
                <span className={`font-semibold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 dark:from-white dark:via-gray-200 dark:to-gray-300 bg-clip-text text-transparent hover:opacity-80 transition-all duration-300 ${
                  isScrolled ? 'text-sm sm:text-base md:text-lg' : 'text-base sm:text-lg md:text-xl'
                }`}>
                  enumura1
                </span>
              </div>
              <div className={`transition-all duration-300 ${
                isScrolled ? 'scale-75 sm:scale-80 md:scale-85' : 'scale-80 sm:scale-90 md:scale-100'
              }`}>
                <ThemeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}