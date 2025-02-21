type TimelineItem = {
  year: string;
  topic: string;
  role: string;
  description: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2025",
    topic: "Backend & Frontend Development",
    role: "Front ~ Backend Developer",
    description: "Backend development with AWS. Frontend development with React for personal projects."
  },
  {
    year: "2024",
    topic: "Backend & Frontend Development",
    role: "Front ~ Backend Developer",
    description: "AWS backend architecture and development. Continued React frontend development for personal projects."
  },
  {
    year: "2023",
    topic: "AWS & Web Development",
    role: "Frontend Developer",
    description: "AWS infrastructure and CI/CD pipeline implementation. React frontend development."
  },
  {
    year: "2022",
    topic: "Mobile Development",
    role: "React Native Developer",
    description: "Mobile app development with React Native in team environment. Frontend web development as secondary role."
  }
];

export function Timeline() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8">Dev Experience</h2>
      <div className="relative">
        {/* 縦線を丸の中央に配置 */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500"></div>
        
        {timeline.map((item, index) => (
          <div key={index} className="relative pl-8 mb-16 last:mb-0">
            {/* 丸マーカーを縦線の上に配置 */}
            <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500 transform -translate-x-1/2"></div>
            
            {/* カードコンテンツ */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-none transition-colors">
              <div className="text-lg text-blue-500 font-bold mb-3">{item.year}</div>
              <h3 className="text-xl font-bold mb-2">{item.topic}</h3>
              <div className="text-lg mb-2">{item.role}</div>
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
