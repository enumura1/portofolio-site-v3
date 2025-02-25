type Skill = {
    name: string;
    items: string[];
  };
  
  const skills: Skill[] = [
    {
      name: "Frontend",
      items: ["JavaScript", "TypeScript", "Three.js", "React", "Tailwind CSS"]
    },
    {
      name: "Backend",
      items: ["Node.js", "Python"]
    },
    {
      name: "Other",
      items: ["Git", "Docker", "AWS", "Blender"]
    }
  ];
  
  export function About() {
    return (
      <section className="py-20 px-4 max-w-4xl mx-auto" id="about">
        <h2 className="text-4xl font-bold mb-8">🧑‍💻About Me</h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
        After graduating from university, I have been working as a web application backend engineer.
        I enjoy development and creating things, and recently I am interested in improving front-end performance.
        </p>
        
        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {skills.map((category) => (
            <div 
              key={category.name} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-none transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.items.map((skill) => (
                  <li 
                    key={skill} 
                    className="text-gray-600 dark:text-gray-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
  }
