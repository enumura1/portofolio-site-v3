"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type TimelineItem = {
  year: string;
  topic: string;
  description: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2026",
    topic: "Backend Development for AI-Integrated Products",
    description: "System architecture design and backend development for AI-integrated products using AWS."
  },
  {
    year: "2025",
    topic: "Backend & Full-Stack Development for AI-Integrated Products",
    description: "System architecture design and backend development for AI-integrated products using AWS. Also developed a full-stack AI image generation app with Next.js and Google Cloud."
  },
  {
    year: "2024",
    topic: "Backend Development for AI-Integrated Products",
    description: "Backend design and development for AI-integrated products using AWS."
  },
  {
    year: "2023",
    topic: "Web Application Development",
    description: "Web application development, both frontend and backend."
  },
  {
    year: "2022",
    topic: "Mobile Development",
    description: "Mobile app development with React Native, along with frontend web development."
  }
];

const DEFAULT_SHOW_COUNT = 3;

export function Timeline() {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? timeline : timeline.slice(0, DEFAULT_SHOW_COUNT);

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="skills">
      <h2 className="text-4xl font-bold mb-8">🛠️Dev Experience</h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500"></div>

        {displayedItems.map((item, index) => (
          <div key={index} className="relative pl-8 mb-16 last:mb-0">
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2 z-10">
              {index === 0 && (
                <>
                  <div className="absolute -inset-1 w-6 h-6 rounded-full border-2 border-blue-400/70 animate-ping"
                       style={{ animationDuration: '2s' }}></div>
                  <div className="absolute -inset-2 w-8 h-8 rounded-full border-2 border-blue-300/50 animate-ping"
                       style={{ animationDuration: '2.8s', animationDelay: '0.4s' }}></div>
                  <div className="absolute -inset-3 w-10 h-10 rounded-full border border-blue-200/30 animate-ping"
                       style={{ animationDuration: '3.6s', animationDelay: '0.8s' }}></div>
                </>
              )}
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm dark:shadow-none border border-gray-200 dark:border-gray-700
                          transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-md">
              <div className="text-lg text-blue-500 font-bold mb-3">{item.year}</div>
              <h3 className="text-xl font-bold mb-2">{item.topic}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        {timeline.length > DEFAULT_SHOW_COUNT && (
          <div className="relative pl-8 mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md"
            >
              {showAll ? (
                <>
                  <span>Show less</span>
                  <ChevronUp size={18} className="text-blue-500" />
                </>
              ) : (
                <>
                  <span>Show more</span>
                  <ChevronDown size={18} className="text-blue-500" />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
