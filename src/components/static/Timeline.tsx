type TimelineItem = {
  year: string;
  topic: string;
  description: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2025",
    topic: "Backend & Frontend Development",
    description: "Backend development with AWS. Frontend development with React for personal projects."
  },
  {
    year: "2024",
    topic: "Backend & Frontend Development",
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
        {/* 縦線を丸の中央に配置 */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500"></div>
        
        {timeline.map((item, index) => (
          <div key={index} className="relative pl-8 mb-16 last:mb-0">
            {/* 丸マーカーを縦線の上に配置 */}
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
            
            {/* カードコンテンツ */}
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
