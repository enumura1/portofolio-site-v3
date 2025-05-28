type TimelineItem = {
  year: string;
  topic: string;
  description: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2025",
    topic: "Backend & Frontend Development for AI Products",
    description: "AWS backend architecture and development. Continued React frontend developments ."
  },
  {
    year: "2024",
    topic: "AI Product Backend & Frontend Development",
    description: "AWS backend architecture and development. Continued React frontend development for personal projects."
  },
  {
    year: "2023",
    topic: "System Design & Frontend Development",
    description: "AWS system architecture design and operation maintenance. React frontend development.",
   },
  {
    year: "2022",
    topic: "Mobile Development",
    description: "Mobile app development with React Native in team environment. Frontend web development as secondary role."
  }
];

export function Timeline() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto" id="skills">
      <h2 className="text-4xl font-bold mb-8">🛠️Dev Experience</h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500"></div>
        
        {timeline.map((item, index) => (
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
      </div>
    </section>
  )
}
